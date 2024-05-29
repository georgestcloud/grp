
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













  // Function to open a modal
  function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
  }

  // Function to close a modal
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }

  // Close the modal when clicking outside of the modal content
  window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
      closeModal(event.target.id);
    }
  }


  
  











  function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
  }

  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }

  window.onclick = function(event) {
    const modal = document.getElementById('modal2');
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }






document.getElementById('lionBtn').addEventListener('click', function(event) {
            const dropdownContent = document.getElementById('elephantContent');
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
            event.stopPropagation();
        });

        document.getElementById('closeButton').addEventListener('click', function(event) {
            document.getElementById('elephantContent').style.display = 'none';
            event.stopPropagation();
        });

        function closeDropdown(event) {
            const dropdownContent = document.getElementById('elephantContent');
            const continueReadingBtn = document.getElementById('lionBtn');
            if (!dropdownContent.contains(event.target) && event.target !== continueReadingBtn) {
                dropdownContent.style.display = 'none';
            }
        }

        document.body.addEventListener('click', closeDropdown);
