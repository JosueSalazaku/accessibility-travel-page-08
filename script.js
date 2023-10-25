function openLightbox(card) {
  var imageUrl = card.querySelector("img").src;
  var lightboxImage = document.getElementById("lightboxImage");
  lightboxImage.src = imageUrl;

  var lightbox = document.querySelector(".lightbox");
  lightbox.style.display = "flex";
}

function closeLightbox() {
  var lightbox = document.querySelector(".lightbox");
  lightbox.style.display = "none";
}
