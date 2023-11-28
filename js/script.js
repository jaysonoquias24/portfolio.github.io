function openModal(imageSrc) {
    document.getElementById("modal-image").src = imageSrc;
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
  function zoomIn(element) {
    element.classList.add("zoom-in");
  }
  
  function zoomOut(element) {
    element.classList.remove("zoom-in");
  }
  
  // Blink animation on scroll
  window.addEventListener("scroll", function () {
    document.body.classList.add("blink");
    setTimeout(function () {
      document.body.classList.remove("blink");
    }, 1000); // Adjust the duration of the blink animation as needed
  });
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Show or hide the back-to-top button based on scroll position
  window.addEventListener('scroll', function() {
    var backToTopBtn = document.getElementById('back-to-top-btn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
    