console.log("Gallery script loaded");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  const galleryImages = document.querySelectorAll("#image-gallery img");
  const imageViewerModal = document.getElementById("imageViewerModal");
  const modalImage = document.getElementById("modalImage");
  const closeImageViewer = document.getElementById("closeImageViewer");
  const prevImage = document.getElementById("prevImage");
  const nextImage = document.getElementById("nextImage");

  let currentImageIndex = 0;
  const imageSources = Array.from(galleryImages).map((img) => img.src);
  console.log("Image sources:", imageSources);

  // Function to open the image viewer
  function openImageViewer(index) {
    console.log("Opening image viewer for index:", index);
    currentImageIndex = index;
    modalImage.src = imageSources[currentImageIndex];
    console.log("Modal image source set to:", modalImage.src);
    imageViewerModal.style.display = "flex"; // Use flex to center content
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }

  // Function to close the image viewer
  function closeViewer() {
    console.log("Closing image viewer");
    imageViewerModal.style.display = "none";
    document.body.style.overflow = "auto"; // Restore background scrolling
  }

  // Function to show the next image
  function showNextImage() {
    console.log("Showing next image");
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    modalImage.src = imageSources[currentImageIndex];
    console.log("Modal image source set to:", modalImage.src);
  }

  // Function to show the previous image
  function showPrevImage() {
    console.log("Showing previous image");
    currentImageIndex =
      (currentImageIndex - 1 + imageSources.length) % imageSources.length;
    modalImage.src = imageSources[currentImageIndex];
    console.log("Modal image source set to:", modalImage.src);
  }

  // Add click listeners to each gallery image
  galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      console.log("Gallery image clicked, index:", index);
      openImageViewer(index);
    });
  });

  // Add click listeners for close and navigation buttons
  closeImageViewer.addEventListener("click", () => {
    console.log("Close button clicked");
    closeViewer();
  });
  prevImage.addEventListener("click", () => {
    console.log("Previous button clicked");
    showPrevImage();
  });
  nextImage.addEventListener("click", () => {
    console.log("Next button clicked");
    showNextImage();
  });

  // Add keyboard navigation
  document.addEventListener("keydown", (event) => {
    if (imageViewerModal.style.display === "flex") {
      console.log("Key pressed:", event.key);
      if (event.key === "Escape") {
        console.log("Escape key pressed");
        closeViewer();
      } else if (event.key === "ArrowRight") {
        console.log("ArrowRight key pressed");
        showNextImage();
      } else if (event.key === "ArrowLeft") {
        console.log("ArrowLeft key pressed");
        showPrevImage();
      }
    }
  });

  // Close modal when clicking outside the image (but not on nav buttons)
  imageViewerModal.addEventListener("click", (event) => {
    if (event.target === imageViewerModal) {
      console.log("Modal background clicked");
      closeViewer();
    }
  });

  // Add touch event listeners for swipe navigation on the modal
  let touchStartX = 0;
  let touchEndX = 0;

  modalImage.addEventListener("touchstart", (e) => {
    console.log("Touch start event");
    touchStartX = e.touches[0].clientX;
  });

  modalImage.addEventListener("touchmove", (e) => {
    console.log("Touch move event");
    touchEndX = e.touches[0].clientX;
  });

  modalImage.addEventListener("touchend", () => {
    console.log("Touch end event");
    if (touchStartX - touchEndX > 50) {
      // Swiped left
      console.log("Swiped left");
      showNextImage();
    }
    if (touchEndX - touchStartX > 50) {
      // Swiped right
      console.log("Swiped right");
      showPrevImage();
    }
    // Reset touch coordinates
    touchStartX = 0;
    touchEndX = 0;
  });
});
