console.log("JavaScript is connected!"); 
const toggleButton = document.getElementById('theme-toggle'); 
toggleButton.addEventListener('click', function() { 
    document.body.classList.toggle('dark-mode'); 

    if (document.body.classList.contains('dark-mode')) { 
        toggleButton.textContent = 'Light Mode'; 
    } else { 
        toggleButton.textContent = 'Dark Mode'; 
    } 
}); 

window.onload = function() {
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-banner').style.display = 'block';
    }
}