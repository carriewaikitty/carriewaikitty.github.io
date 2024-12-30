var menuItems = document.querySelectorAll('li.dropdown');

Array.prototype.forEach.call(menuItems, function(el) {
  var toggleButton = el.querySelector('a');
  var menu = el.querySelector('.dropdown-menu');

  // Handle keyboard events (Enter or Space to toggle)
  toggleButton.addEventListener("keydown", function(event) {
    if (event.key === "Enter" || event.key === " ") { // Space or Enter key
      toggleDropdown(el);
      event.preventDefault(); // Prevent page scroll for Space key
    }
  });

  // Function to toggle the dropdown visibility
  function toggleDropdown(dropdown) {
    var isExpanded = dropdown.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      dropdown.setAttribute("aria-expanded", "false");
      menu.style.visibility = "hidden";
      menu.style.opacity = "0";
      menu.style.transform = "translateY(10px)";
    } else {
      dropdown.setAttribute("aria-expanded", "true");
      menu.style.visibility = "visible";
      menu.style.opacity = "1";
      menu.style.transform = "translateY(0)";
    }
  }

  // Hover functionality remains intact
  el.addEventListener('mouseenter', function() {
    if (el.getAttribute("aria-expanded") === "false") {
      menu.style.visibility = "visible";
      menu.style.opacity = "1";
      menu.style.transform = "translateY(0)";
    }
  });

  el.addEventListener('mouseleave', function() {
    if (el.getAttribute("aria-expanded") === "false") {
      menu.style.visibility = "hidden";
      menu.style.opacity = "0";
      menu.style.transform = "translateY(10px)";
    }
  });

  // Optionally, ensure that hovering over the menu doesn't close it if keyboard opened
  menu.addEventListener('mouseenter', function() {
    if (el.getAttribute("aria-expanded") === "true") {
      menu.style.visibility = "visible";
      menu.style.opacity = "1";
      menu.style.transform = "translateY(0)";
    }
  });

  menu.addEventListener('mouseleave', function() {
    if (el.getAttribute("aria-expanded") === "false") {
      menu.style.visibility = "hidden";
      menu.style.opacity = "0";
      menu.style.transform = "translateY(10px)";
    }
  });

  // Handle touch events for mobile users (tap to open/close)
  toggleButton.addEventListener("touchstart", function(event) {
    toggleDropdown(el);
    event.preventDefault(); // Prevent default touch behavior
  });
});


/* Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
*/


// Get the button element
const goTopBtn = document.getElementById("goTopBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        goTopBtn.style.display = "block"; // Show button
    } else {
        goTopBtn.style.display = "none"; // Hide button
    }
};

// When the user clicks the button, scroll to the top of the document
goTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
