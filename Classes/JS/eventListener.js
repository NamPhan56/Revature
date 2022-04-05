
/*
    Use this to load/run the addeventListener when page loads
*/
window.onload = function(){
    document.querySelector('nav #lionsButton').addEventListener("mouseover", e => {
        console.log("test");
    });
}