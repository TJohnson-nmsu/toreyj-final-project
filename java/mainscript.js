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
    const seasonLabel = document.querySelector('.season-label')
    //Rounds for the games//
    let currentRound = 1;
    const maxRound = 6;
    //Need to add flowers when the roof is clicked. VS code was nice and fixed some of the errors that appeared as I was trying to make this game. I did have a past prject when you had to fins donuts so I am trying to apply that conecept.//
    const seasons = [
        'Spring',
        'Summer',
        'Fall',
        "Winter",
    ]
    const flowerEmojis = [
        '🌻', '🌹', '🌷', '🌼', '🌸', '🌿', '🌵', '🍄'];
        
    
    function plantFlower(roof, countSpan) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.textContent = flowerEmojis [Math.floor(Math.random()* flowerEmojis.length)]
    }  
    //Redmoved orginal list and update with css names//
    flower.style.position = 'absolute';
    flower.style.left = Math.random () * 80 + 10 + '%';
    flower.style.top = Math.random () * 80 + 10 + '%';
    flower.style.fontsize = '1.6rem';
    flower.style.cursor = 'default';
    flower.styles.lineHeight = '1'
    flower.styles.userSelect = 'none';
    flower.styles.animation = 'pop 0.3s ease forwards';
    roof.appendChild(flower);
    //Add counter for flowers//
    count.countSpan.textContent = roof.childElementCount;

roofA.style.position = 'relative';
roofB.style.position = 'relative';

roofA.addEventListener('click', () =>{
    plantFlower(roofA, flowersA);
    gameMessage.textContent = 'You Planted A Flower On Roof A! Keep Going!';
});
roofB.addEventListener('click', () =>{
    plantFlower(roofB, flowersB);
    gameMessage.textContent = 'You Planted A Flower On Roof B! Keep Going!';
});
//Copied over the next round button from previous scripte//
nextRoundBtn.addEventListener('click', () => {
        if (currentRound < maxRound) {
            currentRound++;
            roundDisplay.textContent  = currentRound;
            seasonLabel.textContent   = 'Season: ' +seasons[currentRound - 1];
            gameMessage.textContent = 'Round ${currentRound} started! Plant more flowers!' ;
        } else {
            const total = roofA.childElementCount + roofB.childElementCount;
            gameMessage.textContent   = 'Congratulations! You planted a total of ${total} flowers and hekoed the garden bloom!';
            nextRoundBtn.textContent  ='Play Again!'
            nextRoundBtn.removeEventListener('click', arguements.callee);
            nextRoundBtn.addEventListener('click', resetGame, { once: true });
            launchConfetti();
        }
    });
    //Reset the game//
    function resetGame () {
        currentRound.textContent = 1;
        roundDisplay.textContent  = 1;
        seasonLabel.textContent ='Season: Spring Time!';
        gameMessage.textContent = 'Garden Reset! Lets start planting.';
        flowersA.textContent      = '0';
        flowersB.textContent      = '0';
        roofA.innerHTML= '';
        roofB.innerHTML= '';
        nextRoundBtn.textContent  = 'Next Round →';
        nextRoundBtn.disabled     = false;

    }
// Confetti signals gameover//
function launchConfetti (){
    const emojis = [
        '🌻', '🌹', '🌷', '🌼', '🌸', '🌿', '🌵', '🍄'];
        for (let i=0; i<40;i++){
            const el = document.createElement ('div');
            el.className ='confetti-piece';
            el.textContent = emojis[Math.floor(Math.random ()* emojis.length)];
            el.style.left = Math.random() * 100 + 'vw';
            el.style.animationDuration = (2.5 + Math.random () * 2) + 's';
            el.style.animationDelay =(Math.random() * 1.5) + 's';
            el.style.fontSize = (1 + Math.random ()* 1.5) + 's';
            document.body.appendChild(el);
            el.addEventListener('animation',() => el.remove());
        }
}
roundDisplay.Display.textContent = currentRound;
gameMessage.textContent = 'Click a rooftop to plant you first flower';
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
