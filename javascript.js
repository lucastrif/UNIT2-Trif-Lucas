document.addEventListener("DOMContentLoaded", () => {
    const monitoringSection = document.querySelector("#monitorizare-resurse");
    const images = ["asddsad.jpg", "capture2.jpg"];
    let currentIndex = 0;
    let slideshowInterval = null;

    const startSlideShow = () => {
        const imgElements = monitoringSection.querySelectorAll("img");
        imgElements.forEach(img => (img.style.display = "none"));
        const slideshowImage = document.createElement("img");
        slideshowImage.alt = "Slideshow Image";
        slideshowImage.style.maxWidth = "100%";
        monitoringSection.appendChild(slideshowImage);
        const updateSlide = () => {
            slideshowImage.src = images[currentIndex];
            currentIndex = (currentIndex + 1) % images.length;
        };
        updateSlide();
        slideshowInterval = setInterval(updateSlide, 3000);
    };
    monitoringSection.addEventListener("dblclick", () => {
        if (!slideshowInterval) {
            startSlideShow();
        }
    });
});
