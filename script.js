function animateElements() {
  const elements = document.querySelectorAll('.container h2, .container p, .container .btn');

  elements.forEach(function(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(-50px)';
  });

  let delay = 200;
  elements.forEach(function(element) {
    setTimeout(function() {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, delay);
    delay += 250;
  });
}

window.addEventListener('load', function() {
  animateElements();

  const backButton = document.getElementById('backButton');
  backButton.addEventListener('click', function() {
    history.back();
  });
});
