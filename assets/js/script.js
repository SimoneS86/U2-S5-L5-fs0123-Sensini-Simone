window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    let nav_button = document.querySelector('.nav_button')
    if (window.pageYOffset > 500) {
      navbar.style.backgroundColor = "white"
      nav_button.style.backgroundColor = "#1a8917"
      navbar.style.transition = 'background-color 0.7s ease';
      nav_button.style.transition = 'background-color 0.7s ease';
    } else {
        navbar.style.backgroundColor = "#ffc017"
        nav_button.style.backgroundColor = "#191919"
        navbar.style.transition = 'background-color 0.7s ease';
        nav_button.style.transition = 'background-color 0.7s ease';
    }
  });
