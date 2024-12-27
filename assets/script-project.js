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

//video section
const video = document.getElementById('customVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');
const ccToggleBtn = document.getElementById('ccToggleBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const speedControl = document.getElementById('speedControl');
const seekBar = document.getElementById('seekBar');
const volumeControl = document.getElementById('volumeControl');

// Play/Pause Toggle
playPauseBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    video.pause();
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
});

// Mute/Volume Control
muteBtn.addEventListener('click', () => {
  if (video.volume > 0) {
    video.volume = 0;
    muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  } else {
    video.volume = volumeControl.value;
    muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  }
});

// Volume Control Slider
volumeControl.addEventListener('input', () => {
  video.volume = volumeControl.value;
  if (video.volume === 0) {
    muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  } else {
    muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  }
});

// Speed Control
speedControl.addEventListener('change', () => {
  video.playbackRate = parseFloat(speedControl.value);
});

// Seek Bar
video.addEventListener('timeupdate', () => {
  seekBar.value = (video.currentTime / video.duration) * 100;
});

seekBar.addEventListener('input', () => {
  video.currentTime = (seekBar.value / 100) * video.duration;
});

// Fullscreen Toggle
fullscreenBtn.addEventListener('click', () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
});
