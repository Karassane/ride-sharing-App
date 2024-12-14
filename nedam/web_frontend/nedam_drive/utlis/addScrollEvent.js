// Detect scroll and add/remove class to change header style
window.addEventListener('scroll', function() {
    var header = document.querySelector('.main-header-home');
    if (window.scrollY > 50) {  // Adjust the number to control when the effect triggers
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  