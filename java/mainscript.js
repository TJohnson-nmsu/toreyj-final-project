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
