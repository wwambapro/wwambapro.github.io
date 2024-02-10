var navBar = $('.navigation');
var header = $('.header');
var headerImage = document.querySelectorAll('.carousel-image');
window.onload = function(){
    var style = window.getComputedStyle(navBar, null);
    var navHeight = parseInt(style.getPropertyValue("height"));
    var headerHeight =  (window.innerHeight - navHeight) + 16;
    header.style.height= headerHeight + "px";
    headerImage.forEach(headerImg=> {  
        headerImg.style.height= headerHeight + "px";
    });
}
function $(element){
   return document.querySelector(element);
}