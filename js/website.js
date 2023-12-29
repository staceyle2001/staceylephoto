// Display Mobile Menu
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

const mobileMenu = () => 
{
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => 
{
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) 
  {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

// Back to top button 
// Get a reference to the button element
const backToTopButton = document.getElementById('backToTopBtn');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => 
{
    if (document.documentElement.scrollTop > 350) 
    {
        // If the user has scrolled down more than 100 pixels, show the button
        backToTopButton.style.display = 'block';
    } 
    else 
    {
        // Otherwise, hide the button
        backToTopButton.style.display = 'none';
    }
});

// Add a click event listener to the button
backToTopButton.addEventListener('click', () => 
{
    // Scroll to the top of the page when the button is clicked
    window.scrollTo(
    {
        top: 0,
        behavior: 'smooth' // Smooth scrolling animation
    });
});