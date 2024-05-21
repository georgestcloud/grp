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
    image.style.height = "900px"; // Adjust height as needed
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
          <p>
              <span>G</span><span>R</span><span>E</span><span>E</span><span>N</span>
              <span>I</span><span>N</span><span>F</span><span>R</span><span>A</span><span>S</span><span>T</span><span>R</span><span>U</span><span>C</span><span>T</span><span>U</span><span>R</span><span>E</span>
              <span>A</span><span>N</span><span>D</span>
              <span>P</span><span>O</span><span>W</span><span>E</span><span>R</span>
              <span>I</span><span>N</span><span>V</span><span>E</span><span>S</span><span>T</span><span>M</span><span>E</span><span>N</span><span>T</span><span>S</span>
              <span>P</span><span>L</span><span>C</span>
               is a company dedicated to advancing sustainable energy solutions. Their current flagship initiative involves the comprehensive development and management of a Solar Photovoltaic (PV) Farm in Mill City Clean Energy City, Iwopin, Ogun State. This project will feature a 250 MWA solar farm and a 63 MW/126 MWh Battery Energy Storage System (BESS).
              <br> The company's scope of work encompasses the entire project lifecycle, including design, construction, financing, commissioning, operation, and maintenance.
          </p>
          <p>
              A key component of the project is its integration with the West African Power Pool through a 440V HVDC Submarine Transmission cable, linking Iwopin, Nigeria, to Sakete, Benin Republic, in its first phase. <br> Additionally, the initiative includes the establishment of a Marine Wildlife Conservation Centre and a Biogas Generation Project utilizing Water Hyacinth Biomass (WHB), in collaboration with the World Wildlife Fund.
          </p>
          <p>
              The Mill City Solar PV Project aims to reduce reliance on carbon-based fuels, achieve renewable energy targets, and lower greenhouse gas emissions, reflecting the company's commitment to environmental sustainability and clean energy.
          </p>

          <P> The power generation plant is to be connected to the West African Power Pool via a 440V HVDC Submarine Transmission cable that will originate from Iwopin, Nigeria and terminate in Sakete, Benin Republic in the first phase. </p>


          <p>The Project will also feature a Marine Wildlife Conservation Centre and a Biogas Generation Project to be driven by (WHB) Water Hyacinth Biomass in partnership with the World Wildlife Fund.   </p>

    
          <br>
          <b>The Mill City Solar PV Project will :</b><br>
          <ul>
            <li>Reduce energy dependence on carbon-based fuels.</li>
            <li>Meet renewable energy targets.</li>
            <li>Reduce greenhouse gas emission rates.</li>
           
          </ul>
          
    

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

  // Create the placeholder content as HTML
  const placeholderContent = `
    
      <p><span><strong class="kala"> Habitat Restoration: </strong> We will support the restoration of critical habitats, such as seagrass beds, which are essential for the survival of manatees.</span></p> <hr>
      <p><span><strong class="kala"> Awareness and Education: </strong> Through community outreach programs, we will raise awareness about the importance of manatee conservation and promote practices that reduce human impact on their populations.</span></p>
     <hr> <p><span><strong class="kala"> Research and Monitoring: </strong> Collaborating with WWF, we will fund and participate in research projects to monitor manatee populations and health, informing better conservation strategies.</span></p>
    <hr>
    <p>By addressing the challenges posed by Water Hyacinth and focusing on manatee conservation, Green Infrastructure and Power Investments Plc demonstrates a deliberate and impactful commitment to environmental sustainability. Our initiatives not only curb ecological threats but also foster a harmonious coexistence between renewable energy development and biodiversity preservation.</p>
  `;

  // Set the placeholder content
  dropdown.innerHTML = placeholderContent;

  // Get the position of the button
  const button = document.getElementById('showDropdownBtn');
  const rect = button.getBoundingClientRect();

  dropdown.style.position = 'absolute';
  dropdown.style.top = `${rect.bottom + window.scrollY}px`; // Position below the button
  dropdown.style.left = `${rect.left + window.scrollX}px`; // Align with the left side of the button

  document.body.appendChild(dropdown);

  document.body.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target) && event.target !== button) {
      dropdown.remove();
    }
  });
  
  event.stopPropagation();
});
