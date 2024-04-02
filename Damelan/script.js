window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})
window.addEventListener('scroll', function() {
    const bannerIntro = document.querySelector(".bannerIntro");
    const opacity = 1 + (400-window.scrollY)/1000;
    bannerIntro.style.opacity = opacity.toFixed(2);
  });
window.addEventListener("scroll", function() {
    var gallerySection = document.querySelector(".bannerGallery");
    gallerySection.classList.toggle("show1", window.scrollY > 700);
});
window.addEventListener("scroll", function() {
    var gallerySection = document.querySelector(".bannerGallery");
    gallerySection.classList.toggle("show2", window.scrollY > 1200);
});
window.addEventListener("scroll", function() {
    var gallerySection = document.querySelector(".bannerGallery");
    gallerySection.classList.toggle("show3", window.scrollY > 1250);
});
window.addEventListener("scroll", function() {
    var gallerySection = document.querySelector(".bannerGallery");
    gallerySection.classList.toggle("show4", window.scrollY > 1350);
});
window.addEventListener("scroll", function() {
    var gallerySection = document.querySelector(".bannerGallery");
    gallerySection.classList.toggle("show5", window.scrollY > 1400);
});
window.addEventListener("scroll", function() {
    var gallerySection = document.querySelector(".bannerGallery");
    gallerySection.classList.toggle("show6", window.scrollY > 1600);
});
window.addEventListener("scroll", function() {
    var gallerySection = document.querySelector(".bannerGallery");
    gallerySection.classList.toggle("show7", window.scrollY > 1650);
});
window.addEventListener("scroll", function() {
    var gallerySection = document.querySelector(".bannerGallery");
    gallerySection.classList.toggle("show8", window.scrollY > 1800);
});