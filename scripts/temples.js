
// Setzt das aktuelle Jahr in das Element mit der ID "currentyear"
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Setzt das Datum der letzten Änderung in das Element mit der ID "lastModified"
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModifiedDate;



const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function() {
  // Toggle the active class to show/hide the navigation menu
  navMenu.classList.toggle('active');
  
  // Change the hamburger icon to an 'X' when active, and revert back when inactive
  if (navMenu.classList.contains('active')) {
    hamburger.innerHTML = '&times;';
  } else {
    hamburger.innerHTML = '<span class="bar"></span><span class="bar"></span><span class="bar"></span>';
  }
});