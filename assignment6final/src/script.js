var button = document.getElementById('mode-toggle');
var mobileMenu = document.getElementById('mobile-nav');
var hamburger = document.getElementById('bars');

  // Whenever the user explicitly chooses light mode
  button.addEventListener('click', function() {
    // Check the current theme and switch
    if (localStorage.theme === 'dark') {
        // If current theme is dark, switch to light
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.theme = 'light';
    } else {
        // If current theme is light, switch to dark
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
});

bars.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
});