
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









document.querySelector('.image-container').addEventListener('mousemove', function(event) {
  const container = event.currentTarget;
  const img = container.querySelector('img');
  const rect = container.getBoundingClientRect();
  const x = event.clientX - rect.left - rect.width / 2; // X-coordinate relative to the center of the container
  const y = event.clientY - rect.top - rect.height / 2; // Y-coordinate relative to the center of the container

  const moveX = -x / 20; // Adjust the value to control movement intensity
  const moveY = -y / 20; // Adjust the value to control movement intensity

  img.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

document.querySelector('.image-container').addEventListener('mouseleave', function(event) {
  const container = event.currentTarget;
  const img = container.querySelector('img');
  img.style.transform = 'translate(0, 0)';
});





  document.addEventListener("DOMContentLoaded", function() {
      const toggleBtn = document.querySelector(".custom-toggle-btn");
      const toggleContent = document.querySelector(toggleBtn.getAttribute("data-target"));

      toggleBtn.addEventListener("click", function(event) {
        toggleContent.classList.toggle("show");
        event.stopPropagation(); 
      });

      document.addEventListener("click", function(event) {
        if (!toggleContent.contains(event.target) && !toggleBtn.contains(event.target)) {
          toggleContent.classList.remove("show");
        }
      });
    });
