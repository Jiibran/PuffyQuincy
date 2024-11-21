// script.js

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

// Toggle Function untuk Dropdown Menyala / Mati
function toggleDropdown(dropdown) {
    dropdown.classList.toggle('show');
}

// Event Listeners untuk Ikon
cartIcon.addEventListener('click', (event) => {
    event.stopPropagation(); // Mencegah event bubbling
    toggleDropdown(cartDropdown.parentElement);
    // Tutup dropdown lain jika terbuka
    if (locationDropdown.parentElement.classList.contains('show')) {
        locationDropdown.parentElement.classList.remove('show');
    }
});

locationIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleDropdown(locationDropdown.parentElement);
    // Tutup dropdown lain jika terbuka
    if (cartDropdown.parentElement.classList.contains('show')) {
        cartDropdown.parentElement.classList.remove('show');
    }
});

// Tutup Dropdown saat Klik di Luar
window.addEventListener('click', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove('show');
    });
});

// Quantity Controls
const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const quantityInput = document.getElementById('quantityInput');

// Pastikan nilai awal tidak nol
quantityInput.value = 1;
quantityInput.min = 1;

// Decrease Quantity
decreaseBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
});

// Increase Quantity
increaseBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let currentQuantity = parseInt(quantityInput.value);
    if (!isNaN(currentQuantity)) {
        quantityInput.value = currentQuantity + 1;
    }
});