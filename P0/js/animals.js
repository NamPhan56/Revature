/**
 * Author: Nam Phan
 * Purpose: This module handles the information storage
 * and rerendering for each of the buttons on the main html page.
 */

/*  
    input: none
    function for the lion button, 
    stores information about lions and renders on the page using the update()
*/

async function lions(){
    //storing information in a js object for readability and adaptability
    var info = {
        pageID: "",
        extract:"",
        name: "Lion",
        imageAddr: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/220px-Lion_waiting_in_Namibia.jpg",
        link: "https://en.wikipedia.org/wiki/Lion",
        queryLink: "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&origin=*&titles=Lion&formatversion=2&exsentences=10&exlimit=1&explaintext=1",
        eats: ["blue wildebeest"," plains zebra", "African buffalo", "gemsbok", "giraffe"],
        habitats: ["Africa"],
    }

    //tries to fetch data from wikipedia with error catching.
    try {
        await queryWiki(info);
    } catch (err) {
        console.log(err);
    }

    update(info);
}

/*  
    input: none
    function for the elephant button, 
    stores information about elephants and renders on the page using the update()
*/
async function elephants(){
    let info = {
        pageID: "",
        extract:"",
        name: "Elephant",
        imageAddr: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Elephant_Diversity.jpg/220px-Elephant_Diversity.jpg",
        queryLink: "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&origin=*&titles=Elephant&formatversion=2&exsentences=10&exlimit=1&explaintext=1",
        link: "https://en.wikipedia.org/wiki/Elephant",
        eats: ["trees", "shrubs"],
        habitats: ["Africa", "Asia"],
    }

    try {
        await queryWiki(info);
    } catch (err) {
        console.log(err);
    }
    update(info);
    
}

/*  
    input: none
    function for the dolphins button, 
    stores information about dolphins and renders on the page using the update()
*/
async function dolphins(){
    let info = {
        pageID: "",
        extract:"",
        name: "Dolphin",
        imageAddr: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Dolphintursiops.jpg/350px-Dolphintursiops.jpg",
        queryLink: "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&origin=*&titles=Dolphin&formatversion=2&exsentences=10&exlimit=1&explaintext=1",
        link: "https://en.wikipedia.org/wiki/Dolphin",
        eats: ["fish"],
        habitats: ["Ocean"],
    }

    try {
        await queryWiki(info);
    } catch (err) {
        console.log(err);
    }
    update(info);
}

/*  
    input: none
    function for the tuna button, 
    stores information about tuna and renders on the page using the update()
*/
async function tuna(){
    let info = {
        pageID: "",
        extract:"",
        name: "Tuna",
        imageAddr: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Tuna_assortment.png/220px-Tuna_assortment.png",
        queryLink: "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&origin=*&titles=Tuna&formatversion=2&exsentences=10&exlimit=1&explaintext=1",
        link: "https://en.wikipedia.org/wiki/Tuna",
        eats: ["herring", "bluefish", "mackerel"],
        habitats: ["Atlantic", "Pacific"],
    }

    try {
        await queryWiki(info);
    } catch (err) {
        console.log(err);
    }

    update(info);
}

/*  input: javascript object
    helper function that takes in a json and updates webpage 
*/
function update(info){

    document.querySelector("figure #animalImage").setAttribute("src", info.imageAddr);
    document.querySelector("figure #animalImage").setAttribute("alt", info.name);

    //changes the animal name
    document.querySelector("#displayName").innerHTML = info.name;

    //sets the table link to the wikipedia site
    document.querySelector("table tr #tableLink").setAttribute("href", info.link);

    //sets the links to open in a new tab
    document.querySelector("table tr #tableLink").setAttribute("target", "_blank");
    //sets the relationship between the page and the linked URL to prevent "tabnabbing phising"
    document.querySelector("table tr #tableLink").setAttribute("rel", "noreferrer noopener");
    
    //sets the text of the link equal to the weblink
    document.querySelector("table tr #tableLink").innerHTML = info.link;

    //sets the table animal's habitat
    document.querySelector("table tr #tableHabitat").innerHTML = info.habitats;
    //sets the table animal's diet
    document.querySelector("table tr #tableEats").innerHTML = info.eats;

    //sets the page id for the animal's wiki article
    document.querySelector("table tr #tablePageID").innerHTML = info.pageID;

    //sets the description field of the animal from the wiki article
    document.querySelector("table tr #tableDes").innerHTML = info.extract;

    //removes the style: visibility:hidden attribute from id=mainTable
    document.querySelector("#mainTable").removeAttribute("style");
}

/* 
    input: javascript object
    output: none
    Calls wikipedia's API and fetches a json object of the animal's webpage.
    Fills in the info json object's pageID and description properties.
*/
async function queryWiki(info){
    //fetches data from wikipedia with a try catch
    try {
        let res = await fetch(info.queryLink);
        try {
            let data = await res.json();
            info.pageID = data.query.pages[0].pageid;
            info.extract = data.query.pages[0].extract;
        } catch (err) {
            console.log(err)
        }
    } catch (err) {
        console.log(err)
    }
    

    

}