// Newsletter subscription form //
function setupNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    const subscriptionConfirmation = document.getElementById('subscription-confirmation');
    // Updted the event listener to see if this gets the form to appear//
    if (newsletterForm && subscriptionConfirmation) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Get the email input value and display a confirmation message //
            const emailInput = document.getElementById('user-email');
            const email = emailInput.value;
            subscriptionConfirmation.textContent = `Thank you for subscribing with ${email}! We will keep you updated with our latest innovations and eco-friendly tips.`;
            //Reset the form after submission//
            newsletterForm.reset();
        });
    }
}
document.addEventListener('DOMContentLoaded', setupNewsletterForm);
//Impact statistics section//
function displayImpactStatistics() {
    const impactStatsSection = document.getElementById('impact-stats');
    if (impactStatsSection) {
        const stats = [
            { label: 'Carbon Emissions Reduced', value: '1,000,000 kg' },
            { label: 'Trees Planted', value: '10,000' },
            { label: 'Water Saved', value: '500,000 liters' },
            { label: 'Energy Saved', value: '2,000,000 kWh' }
        ];
        stats.forEach(stat => {
            const statElement = document.createElement('div');
            statElement.classList.add('stat');
            statElement.innerHTML = `<h3>${stat.value}</h3><p>${stat.label}</p>`;
            impactStatsSection.appendChild(statElement);
        }
        );
    }
}
//Filter products by category//
function filterProducts(category) {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        if (category === 'All' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
//Search Products//
const searchInput = document.querySelector('.search-input')
searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? 'block' : 'none';
    });
}
);

