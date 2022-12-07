
/* Houses the function to activate for mouseovers */

/*
    input: none
    Output: none
    Stores the link info in a js obj for readability
    runs the showPrePicture function to unhide preview pictures
*/
function hoverPicLion(){
    let info = {
        name: "Lion",
        preImageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/220px-Lion_waiting_in_Namibia.jpg",
    }

    showPrePicture(info);
}

function hoverPicElephant(){
    let info = {
        name: "Elephant",
        preImageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Elephant_Diversity.jpg/220px-Elephant_Diversity.jpg",
    }

    showPrePicture(info);
}

function hoverPicDolphin(){
    let info = {
        name: "Dolphin",
        preImageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Dolphintursiops.jpg/350px-Dolphintursiops.jpg",
    }
    
    showPrePicture(info);
}

function hoverPicTuna(){
    let info = {
        name: "Tuna",
        preImageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Tuna_assortment.png/220px-Tuna_assortment.png",
    }

    showPrePicture(info);
}

/* 
    input: none
    output: none
    function to hide the preview picutre of id=previewImage
*/
function hidePrePicture(){
    // console.log("hiding");
    document.querySelector("#previewImage").style.visibility = "hidden";
}

/*
input: a js obj with the picutre image
helper function to display/unhide preivew picture, elements with id=preview*/
function showPrePicture(info){
    document.querySelector("#previewImage").setAttribute("src", info.preImageLink);
    document.querySelector("#previewImage").setAttribute("alt", info.name);
    
    document.querySelector("#previewImage").style.visibility = "visible";
}

