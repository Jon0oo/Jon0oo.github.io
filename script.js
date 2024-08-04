window.addEventListener('scroll', function() {
  const box = document.querySelector('.box');
  const scrollPosition = window.scrollY;
  box.style.transform = `translateY(${scrollPosition * 0.3}px)`;
});

let lastScrollTop = 0;
window.addEventListener('scroll', function() {
  const dropdowns = document.querySelectorAll('.dropdown');
  let scrollTop = window.scrollY;

  // Only hide dropdowns if scrolling down
  if (scrollTop > lastScrollTop) {
    dropdowns.forEach(dropdown => {
      dropdown.classList.remove('show');
    });
  }
  lastScrollTop = scrollTop;
});

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
