document.addEventListener("DOMContentLoaded", function() {
    const petalContainer = document.getElementById('petal-container');
    
    for (let i = 0; i < 30; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.animationDelay = `${Math.random() * 4}s`;
        petalContainer.appendChild(petal);
    }
});
