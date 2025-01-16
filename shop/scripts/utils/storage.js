

export function saveToStorage(name, data){
    localStorage.setItem(name, JSON.stringify(data));
}

export function getFromStorage(name){
    return JSON.parse(localStorage.getItem(name));
}