// Function to show the popup
function showPopup(imageSrc, title, description) {
    // Set the image, title and description
    document.getElementById('popup-image').src = imageSrc;
    document.getElementById('popupTitle').textContent = title;
    document.getElementById('popupDescription').textContent = description;

    // Display the popup
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Close popup when clicking outside the content
window.addEventListener('click', function (event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
