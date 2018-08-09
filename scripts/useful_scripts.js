/**
* Global Variables
**/
var hamburgerContent = document.getElementByClassName("hamburger-content");
var hamburgerButton = document.getElementByClassName("hamburger");

/***********************************************************************
* Triggered by any on click event on the DOM.
* Calls other methods conditionally based on the event source/type
***********************************************************************/
window.onclick = function(event) {
  //if click is ON the "hamburger" icon, call toggle function
  if (event.target == hamburgerButton)
    if (hamburgerContent.classList.contains("showing"))
      hamburgerHelperHide();
    else
      hamburgerHelperShow();
  else {
    //target is NOT within "hamburger-content" div, hide content
    if (event.target != hamburgerContent)
      hamburgerHelperHide();
  }
}



/***********************************************************************
* Adds "show" class to element that is passed as parameter
***********************************************************************/
function show(element ) {
  //hamburger-content currently showing
  if (hamburgerHelper.classList.contains("showing"))
    hamburgerHelperHide();
  else
    hamburgerContent.classList.add
}

/***********************************************************************
* Removes "show" class from element that is passed as parameter
***********************************************************************/
function hamburgerHelperHide() {
  if (hamburgerContent.classList.contains("showing")
    hamburgerContent.classList.remove("showing");
}
/***********************************************************************
* Called by Event Listener on elements to expand hidden content
* Shows next element following the button (within the same tree)
* @usage: trigger must use onClick to call this method
*   contentToShow must be the next SIBLING element following btn
***********************************************************************/
function expandContent(){
  target.classList.toggle("showing");
  var contentToShow = target.nextElementSibling;
  //if content is currently showing
  if(contentToShow.style.display === "block")
    contentToShow.style.display = "none";
  else
    contentToShow.style.display = "block";
}

/***********************************************************************
* Called by "hamburger" onclick event
* Toggles "hamburger-content" display style between shown and hidden
***********************************************************************/
