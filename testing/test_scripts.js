
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  var eventSource = e.target;
  var hamburgerContent = document.getElementById("hamburger-content");

  //elements with class "toggle-hide" automatically hide/show on click
  if (eventSource.classList.contains("toggle-hide")){
    if (eventSource.nextElementSibling.classList.contains("hidden"))
      eventSource.nextElementSibling.classList.remove("hidden");
    else
      eventSource.nextElementSibling.classList.add("hidden");
  }

  //not a btn, and not within hamburgerContent element
  else if (!eventSource.matches("hamburger-content")) {
    //hamburgerContent NOT hidden
    if (!hamburgerContent.classList.contains("hidden")) {
      //hide hamburger content
      hamburgerContent.classList.add("hidden");
    }
  }
}
