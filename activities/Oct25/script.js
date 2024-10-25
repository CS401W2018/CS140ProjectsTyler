document.addEventListener('DOMContentLoaded', () => {
    const toggleNavButton = document.querySelector('.NavBarButton');
    const nav = document.getElementById('navbar');

    // Initially hide the navigation
    nav.style.display = 'none';

    toggleNavButton.addEventListener('click', () => {
        if (nav.style.display === 'none' || nav.style.display === '') {
            nav.style.display = 'flex'; // Show the navigation
        } else {
            nav.style.display = 'none'; // Hide the navigation
        }
    });
});
