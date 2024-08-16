let lastScrollTop = 0; // Declare lastScrollTop at the top

function handleParallax() {
  const scrollPosition = window.scrollY;
  const boxBusinessCard = document.querySelector('.boxBusinessCard');
  const boxLinkedIn = document.querySelector('.boxLinkedIn');
  const boxMail = document.querySelector('.boxMail');
  const boxPhone = document.querySelector('.boxPhone');

  const isMobile = window.innerWidth <= 900; // Adjust the width as needed for your breakpoint

  if (boxBusinessCard) {
    const rate = isMobile ? 0.1 : 0.7; // Different rate for mobile
    boxBusinessCard.style.transform = `translateY(${scrollPosition * rate}px)`;
  }
  if (boxLinkedIn) {
    const rate = isMobile ? 0.85 : 0.6; // Different rate for mobile
    boxLinkedIn.style.transform = `translateY(${scrollPosition * rate}px)`;
  }
  if (boxPhone) {
    const rate = isMobile ? 0.5 : 0.2; // Different rate for mobile
    boxPhone.style.transform = `translateY(${scrollPosition * rate}px)`;
  }
  if (boxMail) {
    const rate = isMobile ? 0.2 : 0.3; // Different rate for mobile
    boxMail.style.transform = `translateY(${scrollPosition * rate}px)`;
  }
  
}

// Function to handle dropdown visibility
function handleDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');
  let scrollTop = window.scrollY;

  // Only hide dropdowns if scrolling down
  if (scrollTop > lastScrollTop) {
    dropdowns.forEach(dropdown => {
      dropdown.classList.remove('show');
    });
  }
  lastScrollTop = scrollTop;
}

// Combine scroll event listeners
window.addEventListener('scroll', function() {
  handleParallax();
  handleDropdowns();
});

// Function to toggle dropdown
function toggleDropdown(event, dropdownId) {
  event.preventDefault();
  var dropdown = document.getElementById(dropdownId);
  if (dropdown.classList.contains('show')) {
    dropdown.classList.remove('show');
  } else {
    closeAllDropdowns();
    dropdown.classList.add('show');
  }
}

// Function to close all dropdowns
function closeAllDropdowns() {
  var dropdowns = document.getElementsByClassName("dropdown");
  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].classList.remove('show');
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.menu a')) {
    closeAllDropdowns();
  }
}

// Close all dropdowns when hovering over a new menu item
var menuItems = document.querySelectorAll('.menu > li > a');
menuItems.forEach(function(item) {
  item.addEventListener('mouseover', function() {
    closeAllDropdowns();
  });
});
