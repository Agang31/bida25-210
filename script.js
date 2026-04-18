console.log("JavaScript is connected!"); 
const toggleButton = document.getElementById('theme-toggle'); 
toggleButton.addEventListener('click', function() { 
    document.body.classList.toggle('dark-mode'); 
    document.querySelector('header').classList.toogle('dark-mode');
    document.querySelector('footer').classList.toogle('dark-mode');
    if (document.body.classList.contains('dark-mode')) { 
        toggleButton.textContent = 'Light Mode'; 
    } else { 
        toggleButton.textContent = 'Dark Mode'; 
    } 
}); 