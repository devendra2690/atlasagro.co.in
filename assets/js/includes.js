// assets/js/includes.js
document.addEventListener("DOMContentLoaded", function() {
    
    // Load Header
    fetch('/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('site-header').innerHTML = data;
        });

    // Load Footer
    fetch('/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('site-footer').innerHTML = data;
            
            // Dynamic Year Update
            const yearSpan = document.getElementById('footer-year');
            if(yearSpan) yearSpan.textContent = new Date().getFullYear();
        });
});