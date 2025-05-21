document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const firstview = document.querySelector('.firstview');
    
    // Get the initial position of the header
    const headerOffset = header.offsetTop;
    
    window.addEventListener('scroll', function() {
        // When the user scrolls past the header's initial position
        if (window.pageYOffset > headerOffset) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
}); 