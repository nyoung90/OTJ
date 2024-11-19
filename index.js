// Wait for the window to load
window.onload = function() {
    // Get the image element by its ID
    const img = document.getElementById('myImage');
    
    // Remove the 'hidden' class after the window is loaded to trigger the fade-in effect
    setTimeout(function() {
        img.classList.remove('hidden'); // This will remove the hidden class and trigger the fade-in
    }, 100); // Start after 100ms
};

