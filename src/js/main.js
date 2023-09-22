
// fixed header
document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("header");

    window.addEventListener("scroll", function() {
        if (window.scrollY === 0) {
            // Scrolled back to the top
            header.classList.remove("header-fixed");
        } else {
            // Scrolling down
            header.classList.add("header-fixed");
        }
    });
});


let isHamburger = true; // Initial state is hamburger icon

function toggleIcon() {
    const iconContainer = document.getElementById('iconContainer');
    const hamburgerIcon = document.getElementById('hamburgerIcon');

    if (isHamburger) {
        // Change to cross icon
        hamburgerIcon.innerHTML = `
            <rect width="100" height="15" rx="10" style="opacity: 0;"></rect>
            <rect y="30" width="100" height="15" rx="10" transform="translate(0, 15)" style="transform-origin: center; transform: rotate(45deg);"></rect>
            <rect y="60" width="100" height="15" rx="10" transform="translate(0, 15)" style="transform-origin: center; transform: rotate(-45deg);"></rect>
        `;
        console.log("menu-ham");
    } else {
        // Change back to hamburger icon
        hamburgerIcon.innerHTML = `
            <rect class="close-btn" width="100" height="15" rx="10"></rect>
            <rect y="30" width="100" height="15" rx="10"></rect>
            <rect y="60" width="100" height="15" rx="10"></rect>
        `;
        console.log("menu-close");
    }

    isHamburger = !isHamburger; // Toggle the state
}


// let isHamburger = true; // Initial state is hamburger icon

function toggleIcon() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const crossIcon = document.getElementById('crossIcon');
    const headerbck = document.getElementById('header');

    if (mobileMenu) {
        if (mobileMenu.classList.contains("hidden")) {
            // Change to cross icon and show mobile menu
            hamburgerIcon.style.display = 'none';
            crossIcon.style.display = 'block';
            mobileMenu.classList.remove("hidden");
            headerbck.classList.add("header-bck")
            headerbck.classList.remove("header")
             // Disable scroll
             disableScroll();
        } else {
            // Change back to hamburger icon and hide mobile menu
            hamburgerIcon.style.display = 'block';
            crossIcon.style.display = 'none';
            mobileMenu.classList.add("hidden");
            headerbck.classList.remove("header-bck")
            headerbck.classList.add("header")
              // Enable scroll
              enableScroll();
        }
    }
}


// Function to disable scroll
function disableScroll() {
    window.onscroll = function () {
        window.scrollTo(0, 0);
    };
}

// Function to enable scroll
function enableScroll() {
    window.onscroll = null;
}