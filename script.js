var menuicon = document.querySelector(".menu-icon");
var side_bar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuicon.onclick = function(){
    side_bar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container")
}