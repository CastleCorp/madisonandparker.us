// Constants
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const firstDiv = document.getElementById('1');
const firstIcon = firstDiv.querySelector('i');
const divContainers = document.querySelectorAll('.timeline .container');
const contentDivs = document.querySelectorAll('.content');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalSubtitle = document.getElementById('modalSubtitle');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');
const pictureFrames = document.querySelectorAll('.picture-frame');
const instructions = document.getElementById('instructions');
const instructionsCheckbox = document.getElementById('instructionsCheckbox');
const closeInstructions = document.getElementById('closeInstructions');
const showAllButton = document.getElementById('showAll');

// Set the first timeline container to be active at page load
firstDiv.classList.add('active');
firstIcon.classList.add('fa-beat');


/**
* Reset active to the first div
*/
function reset() {
    activeIndex = 0;
    updateActiveDiv();
}

/**
* Begin active div, nav functionality
*/
let activeIndex = 0;
// Function to update the active div and scroll to it
function updateActiveDiv() {
    divContainers.forEach((div, index) => {
        if (index === activeIndex) {
            div.classList.add('active');
            let icon = div.querySelector("i");
            icon.classList.add("fa-beat");
        } else {
            div.classList.remove('active');
            let icon = div.querySelector("i")
            icon.classList.remove("fa-beat");
        }
    });
    
    // Scroll to the active div
    divContainers[activeIndex].scrollIntoView({ behavior: 'smooth' });
}

// Next button functionality
nextBtn.addEventListener('click', () => {
    if (activeIndex < divContainers.length - 1) {
        activeIndex++;
        updateActiveDiv();
    }
});

// Previous button functionality
prevBtn.addEventListener('click', () => {
    if (activeIndex > 0) {
        activeIndex--;
        updateActiveDiv();
    }
});
/**
* End active div, nav functionality
*/

/**
* Begin picture frame, overlay functionality
*/
// Add click listeners to each picture frame
pictureFrames.forEach((content, index) => {
    let image = content.querySelector('img');
    
    // Set picture frame to image src, alt text as subtitle
    pictureFrames[index].addEventListener('click', () => {
        modalImage.src = image.src;
        modalSubtitle.innerText = image.alt;
        
        // Display modal with image, disable nav
        modal.style.display = 'block';
        overlay.style.display = 'block';
        nextBtn.disabled = true;
        prevBtn.disabled = true;
    });
});

// When the close button or overlay are clicked, close the modal
function closeModal() {
    overlay.style.display = 'none';
    modal.style.display = 'none';
    nextBtn.disabled = false;
    prevBtn.disabled = false;
}

closeBtn.addEventListener('click', () => {
    closeModal();
});

overlay.addEventListener('click', () => {
    closeModal();
    instructions.style.display = "none";
});
/**
* End picture frame, overlay functionality
*/
/** 
 * Begin instructions modal functionality 
 */
function showInstructions() {
    let storedPreference = localStorage.getItem("showInstructions");
    if(storedPreference === null) {
        localStorage.setItem("showInstructions", "true");
        location.reload();
    }

    if(storedPreference === "true") {
        overlay.style.display = "block";
        instructions.style.display = "block";
    } else {
        overlay.style.display = "none";
        instructions.style.display = "none";
    }
}

closeInstructions.addEventListener("click", () => {
    if(instructionsCheckbox.checked) {
        localStorage.setItem("showInstructions", "true");
    } else {
        localStorage.setItem("showInstructions", "false");
    }

    instructions.style.display = 'none';
    overlay.style.display = 'none';
})

showInstructions();
/** 
 * End instructions modal functionality 
 */