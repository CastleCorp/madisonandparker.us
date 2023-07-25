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
});
/**
* End picture frame, overlay functionality
*/

/**
* Begin instructions modal functionality
*/
const getCookie = name => {
    const nameExpression = `${name}=`;
    const cookies = document.cookie.split(';');
    const cookie = cookies.find(currentCookie => currentCookie.includes(nameExpression));
    return cookie ? cookie.trim().substring(nameExpression.length, cookie.length) : null;
}

const setCookie = (name, value, expire = 365, path = '/') => {
    const date = new Date();
    date.setTime(date.getTime() + (expire * 24 * 3600 * 1000));
    const expires = date.toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=${path}`;
}

cookieName = 'showInstructions';
const cookie = getCookie(cookieName);

if (cookie == 'show') {
    instructions.style.display = 'block';
    overlay.style.display = 'block';
} else {
    instructions.style.display = 'none';
    overlay.style.display = 'none';
}

instructionsCheckbox.addEventListener('change', (event) => {
    if (instructionsCheckbox.checked == true) {
        setCookie(cookieName, 'show', 7);
    } else {
        setCookie(cookieName, 'dontShow', 7);
    }
});

closeInstructions.addEventListener("click", (event) => {
    instructions.style.display = 'none';
    overlay.style.display = 'none';
});
/**
* End instructions modal functionality
*/