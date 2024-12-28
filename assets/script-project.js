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
