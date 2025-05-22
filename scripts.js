const quotes = [
    "You met a kitty! They don't give you hand but are cute.",
    "You got 0 error message when you compile. (Is it good?)",
    "World greeting back to you.",
    "Grap your coffee and take a break.",
    "When you see this, Straighten your back.",
    "You know I like chocolate more.",
    "Hey, you look so cool today!",
    "Ctrl + S for your project now.",
    "I bake cheesecake for you.",
    "Giraffe is walking down the street."
];

// Function to get a random message
function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to show a random message in the HTML element with id 'message'
function showRandomMessage() {
    const messageElement = document.getElementById('message');
    if (messageElement) {
        messageElement.textContent = getRandomMessage();
    }
}

// Initialize the message when the HTML is loaded
document.addEventListener('DOMContentLoaded', showRandomMessage);
