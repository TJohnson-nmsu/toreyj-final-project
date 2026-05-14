// Newsletter subscription form //
function setupNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    const subscriptionConfirmation = document.getElementById('subscription-confirmation');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            subscriptionConfirmation = document.getElementById('subscription-confirmation');
            const emailInput = document.getElementById('user-email');
            const email = emailInput.value;
            subscriptionConfirmation.textContent = `Thank you for subscribing with ${email}!`;
            newsletterForm.reset();
        });
    }
}
