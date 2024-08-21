let lastScrollTop = 0; // Declare lastScrollTop at the top

// Throttle function
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function(...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

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

// Combine scroll event listeners with throttle
window.addEventListener('scroll', throttle(function() {
  handleParallax();
  handleDropdowns();
}, 50)); // Adjust the limit as needed (50ms in this example)

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

// Get button to scroll up if clicked
const scrollButtonTop = document.getElementById("scrollButtonTop");

// Add an event listener to the button
scrollButtonTop.addEventListener("click", function() {
  scrollToTop();
});

function scrollToTop() {
  const scrollDuration = 400; // Duration in milliseconds
  const scrollStep = -window.scrollY / (scrollDuration / 15);
  const scrollInterval = setInterval(function() {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}

// Save night mode preference
document.getElementById('nightModeCheckbox').addEventListener('change', function() {
  if (this.checked) {
    document.getElementById('dark-mode-stylesheet').disabled = false;
    document.getElementById('light-mode-stylesheet').disabled = true;
    localStorage.setItem('theme', 'night');
  } else {
    document.getElementById('dark-mode-stylesheet').disabled = true;
    document.getElementById('light-mode-stylesheet').disabled = false;
    localStorage.setItem('theme', 'day');
  }
});

// Apply saved theme on page load
window.onload = function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'night') {
    document.getElementById('dark-mode-stylesheet').disabled = false;
    document.getElementById('light-mode-stylesheet').disabled = true;
    document.getElementById('nightModeCheckbox').checked = true;
  } else {
    document.getElementById('dark-mode-stylesheet').disabled = true;
    document.getElementById('light-mode-stylesheet').disabled = false;
    document.getElementById('nightModeCheckbox').checked = false;
  }
};
