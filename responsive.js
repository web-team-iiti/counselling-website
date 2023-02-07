// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction(); console.log("hi")};

// Get the navbar
var navbar = document.getElementById("Navbar");
/* var button = document.getElementById("b1");

button.onclick = function(){
  if(window.pageYOffset > 10 + prevScroll){
    navbar.style.display="none";
  }
  else{
    navbar.style.display="block";
  }
} */
var prevScroll = window.pageYOffset
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset < prevScroll-10) {
      navbar.style.top="0";
      navbar.style.padding="8px";
    } else if(window.pageYOffset > 10 + prevScroll){
      navbar.style.top="-112px";
      navbar.style.padding="0px";
    }
    prevScroll=window.pageYOffset;
}