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
document.getElementById('nextBtn').addEventListener('click', () => {
    if (activeIndex < divContainers.length - 1) {
        activeIndex++;
        updateActiveDiv();
    }
});

// Previous button functionality
document.getElementById('prevBtn').addEventListener('click', () => {
    if (activeIndex > 0) {
        activeIndex--;
        updateActiveDiv();
    }
});
