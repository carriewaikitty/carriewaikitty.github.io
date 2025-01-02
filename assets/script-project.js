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







// Open the modal and show the clicked image
let lastFocusedElement = null;; // To store the last focused element

function openModal(imageId) {
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const clickedImage = document.getElementById(imageId);

    lastFocusedElement = document.activeElement; // Save the last focused element
    modal.style.display = "flex"; // Show modal
    modal.setAttribute("aria-hidden", "false");
    modalImage.src = clickedImage.src; // Set modal image source
    modalImage.alt = clickedImage.alt; // Set modal image alt text

    modal.addEventListener("keydown", trapFocus); // Trap focus within modal
    document.querySelector(".modal-close").focus(); // Move focus to close button
}

function closeModal() {
    const modal = document.getElementById("image-modal");
    modal.style.display = "none"; // Hide modal
    modal.setAttribute("aria-hidden", "true");
    modal.removeEventListener("keydown", trapFocus); // Remove focus trap

    if (lastFocusedElement) lastFocusedElement.focus(); // Return focus to previous element
}

// Handle opening modal with keyboard
function handleKeyOpen(event, imageId) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(imageId);
    }
}

// Handle closing modal with keyboard
function handleKeyClose(event) {
    if (event.key === "Enter" || event.key === " " || event.key === "Escape") {
        event.preventDefault();
        closeModal();
    }
}

// Trap focus within the modal
function trapFocus(event) {
    const modal = document.getElementById("image-modal");
    const focusableElements = modal.querySelectorAll(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.key === "Tab") {
        if (event.shiftKey) {
            // Shift + Tab: Loop to the last element
            if (document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            }
        } else {
            // Tab: Loop to the first element
            if (document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }
    }
}






// Get the button element
const goTopBtn = document.getElementById("goTopBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        goTopBtn.style.display = "block"; // Show button
    } else {
        goTopBtn.style.display = "none"; // Hide button
    }
};

// When the user clicks the button, scroll to the top of the document
goTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};



/* --- scroll debug
// Show or hide the button based on scroll position
window.addEventListener("scroll", function() {
    const button = document.getElementById("goTopBtn");

    // Print scroll positions for debugging
    console.log("scrollY:", window.scrollY); // You can use document.documentElement.scrollTop as well

    // Set threshold to 300px for the button to appear
    if (window.scrollY > 300) {
        button.style.display = "block"; // Show button when scrolled past 300px
    } else {
        button.style.display = "none"; // Hide button when above 300px
    }
});

*/


let currentIndex = 0;

function moveSlide(direction) {
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        moveSlide(-1);
    } else if (event.key === 'ArrowRight') {
        moveSlide(1);
    }
});


