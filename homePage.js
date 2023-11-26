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

// Show active menu when scrolling
const highlightMenu = () => 
{
  const elem = document.querySelector('.highlight');
  const portfolioMenu = document.querySelector('#portfolio-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  const contactMenu = document.querySelector('#contact-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) 
  {
    portfolioMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } 
  else if (window.innerWidth > 960 && scrollPos < 1400) 
  {
    aboutMenu.classList.add('highlight');
    portfolioMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } 
  else if (window.innerWidth > 960 && scrollPos < 2345) 
  {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    return;
  }
  else if (window.innerWidth > 960 && scrollPos < 3290) 
  {
    contactMenu.classList.add('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) 
  {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

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

// Get a reference to the header element
const header = document.querySelector('.welcome__heading');

// Define a scroll event listener
window.addEventListener('scroll', () => {
  // Determine the scroll position
  const scrollY = window.scrollY;

  // Define the scroll position at which you want the header to expand
  const scrollThreshold = 50; // Change this value as needed

  // Check if the user has scrolled past the threshold
  if (scrollY > scrollThreshold) {
    // Add the "expanded" class to the header element
    header.classList.add('expanded');
  } else {
    // Remove the "expanded" class if the user scrolls back up
    header.classList.remove('expanded');
  }
});

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

