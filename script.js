document.addEventListener('DOMContentLoaded', function() {
  var carousel = document.querySelector('#demo');
  var paginationButtons = carousel.querySelectorAll('.carousel-pagination button');
  var carouselItems = carousel.querySelectorAll('.carousel-item');
  var carouselInstance = new bootstrap.Carousel(carousel, {
      interval: 5000 // Set interval to 5 seconds (5000 milliseconds)
  });

  carousel.addEventListener('slid.bs.carousel', function() {
      var activeIndex = carousel.querySelector('.carousel-item.active').getAttribute('data-bs-slide-to');
      paginationButtons.forEach(function(button, index) {
          if (index == activeIndex) {
              button.classList.add('active');
          } else {
              button.classList.remove('active');
          }
      });
  });

  var swipeLeftButton = document.createElement('button');
  swipeLeftButton.classList.add('carousel-swipe', 'carousel-swipe-left');
  swipeLeftButton.innerHTML = '&lt;'; // You can put your left arrow icon or text here
  swipeLeftButton.addEventListener('click', function() {
      carouselInstance.prev();
  });
  carousel.appendChild(swipeLeftButton);

  var swipeRightButton = document.createElement('button');
  swipeRightButton.classList.add('carousel-swipe', 'carousel-swipe-right');
  swipeRightButton.innerHTML = '&gt;'; // You can put your right arrow icon or text here
  swipeRightButton.addEventListener('click', function() {
      carouselInstance.next();
  });
  carousel.appendChild(swipeRightButton);
});



// Function to check if the device is in mobile browser desktop mode
function isMobileBrowserDesktopMode() {
return window.innerWidth >= 700 && window.innerWidth <= 1024;
}

// Apply the style if in mobile browser desktop mode
function applyStyleForMobileBrowserDesktopMode() {
if (isMobileBrowserDesktopMode()) {
  var carouselContainer = document.getElementById("demo"); // Assuming "demo" is the ID of the carousel container
  var carouselImages = document.querySelectorAll(".carousel-item img");
  carouselImages.forEach(function(image) {
    image.style.height = "950px"; // Adjust height as needed
  });
  carouselContainer.style.height = "auto"; // Reset height to auto to accommodate the increased image height
}
}



// Apply the style when the page loads and on window resize
window.onload = applyStyleForMobileBrowserDesktopMode;
window.onresize = applyStyleForMobileBrowserDesktopMode;



// Function to increase font size and weight for carousel captions in mobile browser desktop mode
function adjustCarouselCaptionStyle() {
if (isMobileBrowserDesktopMode()) {
  var carouselCaptions = document.querySelectorAll(".carousel-caption");
  carouselCaptions.forEach(function(caption) {
    caption.style.fontWeight = "bold";
    caption.style.fontSize = "55px";
  });
}
}

// Apply the style for carousel captions when the page loads and on window resize
window.onload = function() {
applyStyleForMobileBrowserDesktopMode();
adjustCarouselCaptionStyle();
};
window.onresize = function() {
applyStyleForMobileBrowserDesktopMode();
adjustCarouselCaptionStyle();
};






























































// JavaScript to create and display the modal
document.addEventListener('DOMContentLoaded', (event) => {
  const openModalBtn = document.getElementById("openModal");
  
  // Event listener to create and display the modal
  openModalBtn.addEventListener('click', function() {
      const modal = document.createElement("div");
      modal.classList.add("modal");
      
      const modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");
      
      const modalHeader = document.createElement("div");
      modalHeader.classList.add("modal-header");
      
      const headerTitle = document.createElement("h2");
      headerTitle.textContent = "Green Infrastructure";
      
      const closeModalBtn = document.createElement("span");
      closeModalBtn.classList.add("close");
      closeModalBtn.textContent = "×";
      
      modalHeader.appendChild(headerTitle);
      modalHeader.appendChild(closeModalBtn);
      
      const modalBody = document.createElement("div");
      modalBody.classList.add("modal-body");
      modalBody.innerHTML = ` 
          
          
    

      `;
      
      modalContent.appendChild(modalHeader);
      modalContent.appendChild(modalBody);
      
      modal.appendChild(modalContent);
      
      document.body.appendChild(modal);
      
      // Event listener to close the modal using the 'X' button
      closeModalBtn.addEventListener('click', function() {
          modal.style.display = "none";
      });

      // Event listener to close the modal when clicking outside of it
      window.addEventListener('click', function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      });

      // Dynamically adjust modal height and width based on screen size
      function adjustModalStyle() {
          if (window.innerWidth >= 1100) {
              modal.style.height = "100%";
              modal.style.overflowY = "scroll";
          } else if (window.innerWidth < 800) {
              modal.style.width = "100%";
          }
      }

      // Apply the style for modal when the page loads and on window resize
      window.onload = adjustModalStyle;
      window.onresize = adjustModalStyle;
      
      // Display the modal
      modal.style.display = "block";
  });
});
















document.addEventListener('DOMContentLoaded', function() {
  const dropdownBtn = document.getElementById("dropdownBtn");
  const dropdownMenu = document.getElementById("dropdownMenu");

  dropdownBtn.addEventListener('click', function() {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
      if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
      }
    }
  });
});


























document.addEventListener("DOMContentLoaded", function() {
  const counterElement = document.querySelector('.counter-number');
  const duration = parseInt(counterElement.getAttribute('data-duration'), 10);
  const toValue = parseInt(counterElement.getAttribute('data-to-value'), 10);
  const frameRate = 60;
  const totalFrames = Math.round(duration / (1000 / frameRate));
  let currentFrame = 0;

  const countUp = () => {
    currentFrame++;
    const progress = currentFrame / totalFrames;
    const currentCount = Math.round(toValue * progress);
    counterElement.textContent = currentCount;

    if (currentFrame < totalFrames) {
      requestAnimationFrame(countUp);
    } else {
      counterElement.textContent = toValue;
    }
  };

  countUp();
});











document.addEventListener('DOMContentLoaded', function() {
  const countNumber = document.querySelector('.count-number');
  const finalText = document.querySelector('.final-text');
  const duration = parseInt(countNumber.getAttribute('data-duration'));
  const toValue = parseInt(countNumber.getAttribute('data-to-value'));
  const interval = duration / toValue;

  let currentValue = 0;
  const intervalId = setInterval(function() {
    countNumber.textContent = currentValue++;
    if (currentValue > toValue) {
      clearInterval(intervalId);
      countNumber.textContent = toValue;
      finalText.style.display = 'block';
    }
  }, interval);
});
































function countdown(start, end, duration) {
  const element = document.querySelector('.moses-countdown');
  const totalSteps = Math.abs(end - start);
  const stepDuration = duration / totalSteps;

  let current = start;
  const step = (start < end) ? 1 : -1;

  const interval = setInterval(() => {
      element.innerHTML = current + ' <span class="jess">MWh BESS</span>';
      current += step;

      if (current === end + step) {
          clearInterval(interval);
      }
  }, stepDuration);
}

countdown(0, 500, 4000);


















































document.getElementById('showDropdownBtn').addEventListener('click', function(event) {
  // Check if the dropdown already exists and remove it
  const existingDropdown = document.querySelector('.visible-dropdown');
  if (existingDropdown) {
    existingDropdown.remove();
    return; // Exit the function to prevent re-creating the dropdown
  }

  // Create the dropdown div
  const dropdown = document.createElement('div');
  dropdown.classList.add('visible-dropdown');

  // Create the close button
  const closeButton = document.createElement('button');
  closeButton.innerText = 'Close';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '10px';
  closeButton.style.right = '10px';
  closeButton.style.backgroundColor = 'red';
  closeButton.style.color = 'white';
  closeButton.style.border = 'none';
  closeButton.style.padding = '10px';
  closeButton.style.cursor = 'pointer';

  // Add event listener to the close button
  closeButton.addEventListener('click', function() {
    dropdown.remove();
  });

  // Create the placeholder content as HTML
  const placeholderContent = `
    <p><span><strong class="kala"> Habitat Restoration: </strong> We will support the restoration of critical habitats, such as seagrass beds, which are essential for the survival of manatees.</span></p> <hr>
    <p><span><strong class="kala"> Awareness and Education: </strong> Through community outreach programs, we will raise awareness about the importance of manatee conservation and promote practices that reduce human impact on their populations.</span></p>
    <hr>
    <p><span><strong class="kala"> Research and Monitoring: </strong> Collaborating with WWF, we will fund and participate in research projects to monitor manatee populations and health, informing better conservation strategies.</span></p>
    <hr>
    <p>By addressing the challenges posed by Water Hyacinth and focusing on manatee conservation, Green Infrastructure and Power Investments Plc demonstrates a deliberate and impactful commitment to environmental sustainability. Our initiatives not only curb ecological threats but also foster a harmonious coexistence between renewable energy development and biodiversity preservation.</p>
  `;

  // Set the placeholder content
  dropdown.innerHTML = placeholderContent;

  // Style the dropdown to ensure it stays within the viewport and is centered
  dropdown.style.position = 'fixed';
  dropdown.style.top = '50%';
  dropdown.style.left = '50%';
  dropdown.style.transform = 'translate(-50%, -50%)';
  dropdown.style.maxWidth = '90%';
  dropdown.style.maxHeight = '90%';
  dropdown.style.overflowY = 'auto';
  dropdown.style.backgroundColor = '#fff';
  dropdown.style.border = '1px solid #ccc';
  dropdown.style.padding = '20px';
  dropdown.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  dropdown.style.zIndex = '1000'; // Ensure it appears above other content
  dropdown.style.paddingTop = '100px'; // Add padding for the close button

  // Append the close button to the dropdown
  dropdown.appendChild(closeButton);

  document.body.appendChild(dropdown);

  // Stop propagation when clicking on the dropdown itself
  dropdown.addEventListener('click', function(event) {
    event.stopPropagation();
  });

  // Function to close the dropdown
  function closeDropdown(event) {
    if (!dropdown.contains(event.target) && event.target !== button) {
      dropdown.remove();
      document.body.removeEventListener('click', closeDropdown);
    }
  }

  // Add event listener to close the dropdown when clicking outside
  document.body.addEventListener('click', closeDropdown);

  // Stop propagation to prevent immediate closing
  event.stopPropagation();
});




































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






  
  document.querySelector('.custom-container').addEventListener('mousemove', function(e) {
    const container = this;
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate the movement range
    const moveX = (mouseX / rect.width - 0.5) * 70; // Adjust multiplier for effect strength
    const moveY = (mouseY / rect.height - 0.5) * 70; // Adjust multiplier for effect strength

    // Set the background position to follow the mouse movement
    container.style.backgroundPosition = `${40 + moveX}% ${40 + moveY}%`;
  });









document.addEventListener("DOMContentLoaded", function() {
  const text = "Empowering  a  Greener  Future.";
  const delay = 200; // Decreased delay between each letter
  const container = document.getElementById("koko");
  
  let index = 0;
  
  function addLetter() {
      if (index < text.length) {
          container.textContent += text[index];
          index++;
          setTimeout(addLetter, delay);
      }
  }
  
  addLetter();
});










document.addEventListener("DOMContentLoaded", function() {
  const text = "Corporate Social Responsibility (CSR) Initiatives";
  const delay = 100; // Decreased delay between each letter
  const container = document.getElementById("leg");
  
  let index = 0;
  
  function addLetter() {
      if (index < text.length) {
          container.textContent += text[index];
          index++;
          setTimeout(addLetter, delay);
      }
  }
  
  addLetter();
});

