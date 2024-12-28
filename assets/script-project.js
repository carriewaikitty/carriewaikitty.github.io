// Open the modal and show the clicked image
function openModal(imageId) {
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const clickedImage = document.getElementById(imageId);

    modal.style.display = "flex"; // Show modal
    modalImage.src = clickedImage.src; // Set modal image source to clicked image's source
}

// Close the modal when clicking on the background
function closeModal() {
    const modal = document.getElementById("image-modal");
    modal.style.display = "none"; // Hide modal
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