function FromLocalStorage(dataName){
    return JSON.parse(window.localStorage.getItem(dataName));       
}

//Envoyer vers le localstorage
function ToLocalStorage(myDatas,dataName){
    let dataJson = JSON.stringify(myDatas);
    myDatas = JSON.parse(window.localStorage.getItem(dataName));
    if(myDatas == null){
        myDatas = [];
    }
    window.localStorage.setItem(dataName,dataJson);
}