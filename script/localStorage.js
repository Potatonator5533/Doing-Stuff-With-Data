const saveToLocalStorage = (getData, place) => {
    let favorites = getLocalStorage();

    if(!favorites.includes(getData)) {
        // favorites.push(getData);
        favorites.splice(place, 1, getData);
    }
    localStorage.setItem("Button Settings", JSON.stringify(favorites))
}

const getLocalStorage = () => {
    let localStorageData = localStorage.getItem("Button Settings");

    if(localStorageData == null){
        return [];
    }
    return JSON.parse(localStorageData);
}

export {saveToLocalStorage, getLocalStorage}