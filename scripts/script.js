// JavaScript Document
console.log("hi");

// Begin dropdown menu js code 
document.addEventListener('DOMContentLoaded', function() {
    const dropdownItems = document.querySelectorAll('.header1 ul:nth-of-type(2) li');
    
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(event) {
            const dropdown = this.querySelector('.dropdown');
            if (dropdown) {
                dropdown.style.display = dropdown.style.display === 'none' || dropdown.style.display === '' ? 'block' : 'none';
            }
            event.stopPropagation();
        });
    });
});
// Einde dropdown menu js code 

