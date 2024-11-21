// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Swiper
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // Cart Dropdown Functionality
    const cartIcon = document.getElementById('cartIcon');
    const cartDropdown = document.getElementById('cartDropdown');

    // Location Dropdown Functionality
    const locationIcon = document.getElementById('locationIcon');
    const locationDropdown = document.getElementById('locationDropdown');

    // Toggle Function for Dropdowns
    function toggleDropdown(dropdown) {
        dropdown.classList.toggle('show');
    }

    // Event Listeners for Icons
    cartIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent event bubbling
        toggleDropdown(cartDropdown.parentElement);
        // Close other dropdown if open
        if (locationDropdown.parentElement.classList.contains('show')) {
            locationDropdown.parentElement.classList.remove('show');
        }
    });

    locationIcon.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleDropdown(locationDropdown.parentElement);
        // Close other dropdown if open
        if (cartDropdown.parentElement.classList.contains('show')) {
            cartDropdown.parentElement.classList.remove('show');
        }
    });

    // Close Dropdowns When Clicking Outside
    window.addEventListener('click', () => {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    });

    // Prevent Closing When Clicking Inside Dropdown
    cartDropdown.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Close Cart Dropdown When Clicking Close Button
    const closeCartButton = document.getElementById('closeCart');
    if (closeCartButton) {
        closeCartButton.addEventListener('click', (event) => {
            event.stopPropagation();
            cartDropdown.parentElement.classList.remove('show');
        });
    }

    // Quantity Controls

    // Decrease Quantity Buttons
    const decreaseButtons = document.querySelectorAll('.decreaseBtn');
    decreaseButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const quantityControls = event.target.closest('.quantity-controls');
            const input = quantityControls.querySelector('.quantityInput');
            let currentQuantity = parseInt(input.value, 10);
            if (currentQuantity > 1) {
                input.value = currentQuantity - 1;
                console.log(`Decreased quantity to ${input.value}`);
            }
        });
    });

    // Increase Quantity Buttons
    const increaseButtons = document.querySelectorAll('.increaseBtn');
    increaseButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const quantityControls = event.target.closest('.quantity-controls');
            const input = quantityControls.querySelector('.quantityInput');
            let currentQuantity = parseInt(input.value, 10);
            if (!isNaN(currentQuantity)) {
                input.value = currentQuantity + 1;
                console.log(`Increased quantity to ${input.value}`);
            }
        });
    });
});