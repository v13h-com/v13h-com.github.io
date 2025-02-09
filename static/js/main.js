// /static/js/main.js

document.addEventListener('DOMContentLoaded', function() {

    // --- Simple text animation (optional) ---
    const aiText = document.getElementById('ai-text');
    const words = ["Future", "Innovation", "Technology", "Transformation", "Blockchain", "Artificial Intelligence", "Cryptocurrency", "Fintech"];
    let wordIndex = 0;

    function changeWord() {
        wordIndex = (wordIndex + 1) % words.length;
        aiText.textContent = words[wordIndex];
        aiText.style.animation = 'none';  // Reset the animation
        void aiText.offsetWidth;         // Trigger reflow (forces restart)
        aiText.style.animation = null;
    }

    setInterval(changeWord, 4000); // Change word every 4 seconds


    // ---  Transformation animation (more complex) ---

    const container = document.querySelector('.container');
    const numElements = 20; // Number of animated elements

    function createTransformElement() {
        const element = document.createElement('div');
        element.classList.add('transform-element');
        container.appendChild(element);

        // Randomize initial position (optional, for variety)
        element.style.left = `${Math.random() * 100}vw`;
        element.style.top = `${Math.random() * 100}vh`;
         // Randomize animation delay for a staggered effect
        element.style.animationDelay = `${Math.random() * 5}s`;


        // Remove the element after its animation completes (for performance)
        element.addEventListener('animationend', () => {
             element.remove();
        });
    }
    // Create multiple elements
    for (let i = 0; i < numElements; i++) {
         createTransformElement();
    }

    // Continuously create new elements (optional, for a constant animation)
    setInterval(createTransformElement, 2000); // Create a new one every 2 second


});


function random() {
  return Math.random();
}
