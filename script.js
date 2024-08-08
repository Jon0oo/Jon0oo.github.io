//enabling parallax scrolling effect
window.addEventListener('scroll', function() {
  const boxBusinessCard = document.querySelector('.boxBusinessCard');
  const scrollPosition = window.scrollY;
  boxBusinessCard.style.transform = `translateY(${scrollPosition * 0.7}px)`;
});
window.addEventListener('scroll', function() {
  const boxLinkedIn = document.querySelector('.boxLinkedIn');
  const scrollPosition = window.scrollY;
  boxLinkedIn.style.transform = `translateY(${scrollPosition * 0.6}px)`;
});
window.addEventListener('scroll', function() {
  const boxMail = document.querySelector('.boxMail');
  const scrollPosition = window.scrollY;
  boxMail.style.transform = `translateY(${scrollPosition * 0.3}px)`;
});
window.addEventListener('scroll', function() {
  const boxPhone = document.querySelector('.boxPhone');
  const scrollPosition = window.scrollY;
  boxPhone.style.transform = `translateY(${scrollPosition * 0.2}px)`;
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
