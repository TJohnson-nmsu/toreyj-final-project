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
        const text = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = text.includes(query) ? 'block' : 'none';
    }); 
} );
//Comparison table sorting//    
function filterProducts(category) {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        if (category === 'Whole Greenhouse' || card.dataset.category === category)   {
            card.style.display = 'flex';
        } else {
            const cardCategory = card.getAttribute('data-category');
            card.style.display = (cardCategory === category) ? 'flex' : 'none';
        }
    });
}
//Quiz functionality//
document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');
    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let totalscore = 0;
        const questions = quizForm.querySelectorAll('input[type="radio"]:checked');
        if (questions.length < 10) {
                        alert ("You must answer all the seeds of knowledge to find out your eco score! Please answer all the questions before submitting the quiz.");
            return;
        }
        questions.forEach(function (input) {
            totalscore += parseInt(input.dataset.score);
        });
        const percentage = (totalscore / 10) * 100;
        let resultMessage = 'Thank you for taking the quiz! Your Eco Score is: ' + percentage + '%.\n';
        if (percentage >= 80) {
            resultMessage += 'Excellent! Your roots of knowledge are strong, and you are well on your way to becoming an eco-warrior! Congratulations on being a sustainable superstar!';
        } else if (percentage >= 50) {
            resultMessage += 'Good job! You are eco-conscious and have a solid understanding of sustainability. Keep nurturing your knowledge and growing your eco-friendly habits!';
        } else {
            resultMessage += 'Keep learning! Your eco score indicates that there is room for growth in your sustainability knowledge. Keep watering your roots of knowledge and watch your eco-awareness bloom!';
        }
        alert(resultMessage);
        let resultDiv = document.getElementById('quizResult');
        if (!resultDiv) {
            resultDiv = document.createElement('div');
            resultDiv.id = 'quizResult';
            resultDiv.style.background = 'rgb(255,255,255,0.8)';
            resultDiv.style.padding = '20px';
            resultDiv.style.marginTop = '25px';
            resultDiv.style.borderRadius = '10px';
            quizForm.appendChild(resultDiv);            
        }
        resultDiv.textContent = resultMessage;
    });
});
//Rootop Garden Game//
document.addEventListener('DOMContentLoaded', () => {
    const roofA = document.getElementById('roofA');
    const roofB = document.getElementById('roofB');
    const nextRoundBtn = document.getElementById('nextRound');
    const roundDisplay = document.getElementById('round');
    const gameMessage = document.getElementById('gameMessage');
    const flowersA = document.getElementById('flowersA');
    const flowersB = document.getElementById('flowersB');
    let currentRound = 1;
    const maxRound = 6;
    //Need to add flowers when the roof is clicked. VS code was nice and fixed some of the errors that appeared as I was trying to make this game. I did have a past prject when you had to fins donuts so I am trying to apply that conecept.//
    function plantFlower(roof) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = Math.random() * 80 + 10 + '%';
        flower.style.top = Math.random() * 80 + 10 + '%';
        roof.appendChild(flower);
        if (roof.id === 'roofA') {
            flowersA.textContent = roof.childElementCount;
        } else {
            flowersB.textContent = roof.childElementCount;
        }
    }  
    roofA.addEventListener('click', () => {
        plantFlower(roofA);
        gameMessage.textContent = 'You planted a flower on Roof A! Keep going!';
    });
    roofB.addEventListener('click', () => {
        plantFlower(roofB);
        gameMessage.textContent = 'You planted a flower on Roof B! Keep going!';
    });
    nextRoundBtn.addEventListener('click', () => {
        if (currentRound < maxRound) {
            currentRound++;
            roundDisplay.textContent = currentRound;
            gameMessage.textContent = `Round ${currentRound} started! Plant more flowers to win!`;
        } else {
            gameMessage.textContent = 'Congratulations! You have completed all rounds and helped the garden bloom!';
            nextRoundBtn.disabled = true;
        }
    }); 
    roundDisplay.textContent = currentRound;
});
//Animation for the impact statistics section//
document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelectorAll('.stat-number');
    CountQueuingStrategy.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            let count = +counter.innerText;
            const increment = Math.ceil(target / 200); 
            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 20);
            }
        };         updateCount();
    }   
    )   ;
});