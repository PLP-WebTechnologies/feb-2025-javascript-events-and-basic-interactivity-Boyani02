// Change text content dynamically
document.addEventListener('DOMContentLoaded', function() {
    // Change welcome message after 3 seconds
    setTimeout(function() {
        const welcomeMessage = document.querySelector('#home p');
        if (welcomeMessage) {
            welcomeMessage.textContent = "Discover amazing recipes and restaurants near you!";
            welcomeMessage.style.color = "#7d3cff";
            welcomeMessage.style.fontWeight = "bold";
        }
    }, 3000);

    //Modify CSS styles for featured dishes
    const featuredImages = document.querySelectorAll('main section:nth-of-type(3) img');
    featuredImages.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease";
            this.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
        });
        
        img.addEventListener('mouseout', function() {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
        });
    });

    // 3. Add/remove elements when button is clicked
    const toggleButton = document.getElementById('toggle-offers-btn');
    
    toggleButton.addEventListener('click', function() {
        const offersContainer = document.getElementById('special-offers-container');
        const specialOffers = document.getElementById('special-offers');
        
        if (specialOffers) {
            specialOffers.remove();
            this.textContent = "Show Special Offers";
        } else {
            const newElement = document.createElement('div');
            newElement.id = "special-offers";
            newElement.innerHTML = `
                <h3>Today's Special Offers!</h3>
                <ul>
                    <li>20% off all Italian dishes</li>
                    <li>Free dessert with any main course</li>
                    <li>Happy Hour: 4-6PM daily (50% off drinks)</li>
                    <li>Weekend Brunch Special</li>
                </ul>
            `;
            offersContainer.appendChild(newElement);
            this.textContent = "Hide Special Offers";
        }
    });

    //Form submission handler
    const registrationForm = document.querySelector('#register form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Thank you for registering! We'll send you updates soon.");
            this.reset();
        });
    }
});