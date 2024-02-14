import { saveToLocalStorage, getLocalStorage } from "./localStorage.js";

let board = document.getElementById("board");
let btn10 = document.getElementById("btn10");
let btn20 = document.getElementById("btn20");
let btn30 = document.getElementById("btn30");
let btn40 = document.getElementById("btn40");
let btn50 = document.getElementById("btn50");
let searchById = document.getElementById("searchById");
let searchByFirstName = document.getElementById("searchByFirstName");
let searchByLastName = document.getElementById("searchByLastName");
let searchByHeight = document.getElementById("searchByHeight");
let searchByAge = document.getElementById("searchByAge");

let q = document.getElementById("q");
let w = document.getElementById("w");
let e = document.getElementById("e");
let r = document.getElementById("r");
let t = document.getElementById("t");

async function GetData() {
    const promise = await fetch('../data/data.json');
    const data = await promise.json();
    console.log(data);
    return data;
}

async function Run(viewSettings){
    let data = await GetData();
    let ages = [0];

    q.textContent = data.People[0].Age;
    
    for (let i = viewSettings[0]; i > 0; i--) {
        ages.length = i - 1;
        for (let j = 0; j < 100; j++) {
            if (data.People[j].Age > ages[i]) {
                ages.splice(j, 1, data.People[i].Age);
                console.log(ages[j]);
            }
        }
        
    }
    
    // console.log(viewSettings[0] + " " + viewSettings[1]);
}

// GetData();

async function DisplayClicked(toDisplay) {
    saveToLocalStorage(toDisplay, 0);
    let display = await getLocalStorage();
    Run(display);
}

btn10.addEventListener('click', async () => {
    DisplayClicked(10);
})

btn20.addEventListener('click', async () => {
    DisplayClicked(20);
})

btn30.addEventListener('click', async () => {
    DisplayClicked(30);
})

btn40.addEventListener('click', async () => {
    DisplayClicked(40);
})

btn50.addEventListener('click', async () => {
    DisplayClicked(50);
})


async function SortByClicked(toSortBy) {
    saveToLocalStorage(toSortBy, 1);
    let sortBy = await getLocalStorage();
    Run(sortBy);
}

searchById.addEventListener('click', async () => {
    SortByClicked("Id");
})

searchByFirstName.addEventListener('click', async () => {
    SortByClicked("FirstName");
})

searchByLastName.addEventListener('click', async () => {
    SortByClicked("LastName");
})

searchByHeight.addEventListener('click', async () => {
    SortByClicked("Height");
})

searchByAge.addEventListener('click', async () => {
    SortByClicked("Age");
})

// Id
// FirstName
// LastName
// Height
// Age