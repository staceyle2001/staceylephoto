// light gallery
document.addEventListener("DOMContentLoaded", function() 
{
    lightGallery(document.querySelector('.lightGallery'),
    {
        download: false
    });
});


//Expand gallery header
// Get a reference to the header element
const header = document.querySelector('.galleryHeader__heading');

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