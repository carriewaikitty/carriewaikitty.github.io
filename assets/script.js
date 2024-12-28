


// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



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
