



function debug() {
    var userInput = document.getElementById('problemInput').value;
    var duckResponse = generateDuckResponse(userInput);
    displayResponseWithTypingEffect(duckResponse);
    animateDuckTalking();
}


function displayResponseWithTypingEffect(response) {
    var responseElement = document.getElementById('duckResponse');
    responseElement.innerHTML = ''; // Clear previous content

    var index = 0;
    var typingInterval = setInterval(function() {
        responseElement.innerHTML += response[index];
        index++;
        if (index === response.length) {
            clearInterval(typingInterval);
        }
    }, 50); 
    
}

function generateDuckResponse(problem) {
    var responses = [
        "Have you tried Googling it?...",
        "Hmm... I think you might be missing a semicolon somewhere....",
        "That sounds like a job for Stack Overflow!...",
        "I wont give you the answer because I know you got this yourself!...",
        "Remember, every bug is just a feature in disguise....",
        "Quack! Quack! Keep calm and debug on!...",
        "Don't worry, even the best programmers get stuck sometimes....",
        "Maybe it's time for a coffee break?",
        "Have you considered asking a real duck for help?...",
        "Try explaining your problem out loud. Sometimes that helps!...",
        "You're doing great! Just keep swimming... I mean coding!...",
        "Why not try turning it into a rubber duck problem?...",
        "Let's think outside the box... or should I say outside the pond?...",
        "It's not a bug, it's a feature!...",
        "Remember, the journey of a thousand bugs begins with a single line of code...",
        "Keep calm and code on! ...",

    ];
    var randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}


