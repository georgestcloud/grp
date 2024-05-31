

document.getElementById("elephant-menuButton").addEventListener("click", function() {
    const navList = document.querySelector(".elephant-nav-list");
    navList.classList.toggle("show");
  });
  
  document.addEventListener("click", function(event) {
    const navList = document.querySelector(".elephant-nav-list");
    const menuButton = document.getElementById("elephant-menuButton");
    if (!navList.contains(event.target) && !menuButton.contains(event.target)) {
      navList.classList.remove("show");
    }
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
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
  
  
  
  
  
  
  
  
  
          const textElement = document.getElementById('text');
          const text = textElement.innerText;
          textElement.innerText = '';
        
          let index = 0;
          const interval = setInterval(function() {
            if (index < text.length) {
              textElement.innerText += text[index];
              index++;
            } else {
              clearInterval(interval);
            }
          }, 100); // Adjust the interval (in milliseconds) to change the speed
        
