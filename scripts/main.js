const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const firstDiv = document.getElementById('1');
firstDiv.classList.add('active');

const firstIcon = firstDiv.querySelector('i');
firstIcon.classList.add('fa-beat');


// Get all the div containers inside the timeline
const divContainers = document.querySelectorAll('.timeline .container');

// Variable to keep track of the currently active div
let activeIndex = 0;

function reset() {
    activeIndex = 0;
    updateActiveDiv();
}

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

const contentDivs = document.querySelectorAll('.content');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalSubtitle = document.getElementById('modalSubtitle');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');

const pictureFrames = document.querySelectorAll('.picture-frame');
pictureFrames.forEach((content, index) => {
    const image = content.querySelector('img');

    pictureFrames[index].addEventListener('click', () => {
    modalImage.src = image.src;
    modalSubtitle.innerText = image.alt; // Set the alt text as the subtitle
    modal.style.display = 'block';
    overlay.style.display = 'block';
    nextBtn.disabled = true;
    prevBtn.disabled = true;
    });
});

closeBtn.addEventListener('click', () => {
    closeModal();
});

overlay.addEventListener('click', () => {
    closeModal();
});

function closeModal() {
    overlay.style.display = 'none';
    modal.style.display = 'none';
    nextBtn.disabled = false;
    prevBtn.disabled = false;
}