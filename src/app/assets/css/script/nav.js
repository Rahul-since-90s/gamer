document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const menuItems = document.getElementById('menu-items');
  
    menuButton.addEventListener('click', function() {
      if (menuItems.style.display === "none") {
        menuItems.style.display = "block";
        menuButton.setAttribute("aria-expanded", true);
      } else {
        menuItems.style.display = "none";
        menuButton.setAttribute("aria-expanded", false);
      }
    });
  
    // Close the menu when clicking outside of it
    document.addEventListener('click', function(event) {
      if (!menuItems.contains(event.target) && event.target !== menuButton) {
        menuItems.style.display = "none";
        menuButton.setAttribute("aria-expanded", false);
      }
    });
  
    // Optionally, close the menu when an item is selected
    const menuLinks = menuItems.querySelectorAll('a');
    menuLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        menuItems.style.display = "none";
        menuButton.setAttribute("aria-expanded", false);
      });
    });
  });