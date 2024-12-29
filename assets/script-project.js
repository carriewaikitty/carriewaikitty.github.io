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