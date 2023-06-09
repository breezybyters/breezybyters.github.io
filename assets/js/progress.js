const progressBar = document.getElementById('progress-bar');

function update() {
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const percentage = (scrollPosition / maxScroll) * 100;
    progressBar.style.width = percentage + '%';
}

// Update progress bar on page load and scroll
document.addEventListener('DOMContentLoaded', update);
document.addEventListener('scroll', update);
