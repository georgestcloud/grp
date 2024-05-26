
const menuButton = document.getElementById('menuButton');
const dropdownContent = document.getElementById('dropdownContent');

menuButton.addEventListener('click', function(event) {
  dropdownContent.classList.toggle('show');
  event.stopPropagation();
});

window.addEventListener('click', function(event) {
  if (!dropdownContent.contains(event.target) && event.target !== menuButton) {
    dropdownContent.classList.remove('show');
  }
});

// Adjust the menu button visibility based on screen size and device mode
function adjustMenuVisibility() {
  if (window.innerWidth <= 800 || (navigator.userAgent.match(/iPhone|iPad|iPod|Android/i) && window.innerWidth > 800)) {
    document.querySelector('.nav-list').style.display = 'none';
    menuButton.style.display = 'block';
  } else {
    document.querySelector('.nav-list').style.display = 'flex';
    menuButton.style.display = 'none';
  }
}

window.addEventListener('resize', adjustMenuVisibility);
window.addEventListener('load', adjustMenuVisibility);