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











































$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items: 1, // Show one item at a time
      loop: true,
      margin: 10,
      nav: true,
      autoplay: true, // Enable auto-play
      autoplayTimeout: 3000, // Change every 3 seconds
      autoplayHoverPause: true // Pause on hover
  });
});


















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
