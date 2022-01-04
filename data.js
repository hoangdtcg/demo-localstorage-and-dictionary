function saveData(name,data) {
    let dataJson = JSON.stringify(data);
    localStorage.setItem(name,dataJson);
}

function loadData(name) {
    if(localStorage.hasOwnProperty(name)){
        let dataJson = localStorage.getItem(name);
        let data = JSON.parse(dataJson);
        return data;
    }else {
        return [];
    }

}

