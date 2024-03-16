function createRaindrop() {

    // Remove any existing raindrops
    const existingRaindrops = document.querySelectorAll('.raindrop-container');
    existingRaindrops.forEach(raindrop => raindrop.remove());


    // Get the position and size of the letter i
    const iElement = document.querySelector('#i');
    const iWidth = iElement.getBoundingClientRect().width;
    const iX = iElement.getBoundingClientRect().left;
    const iY = iElement.getBoundingClientRect().top;

    // Create raindropcontainer
    const raindropContainer = document.createElement('div');
    raindropContainer.classList.add('raindrop-container');
    const body = document.querySelector('body');
    body.appendChild(raindropContainer);


    // Set the initial position and size of the raindropcontainer
    raindropContainer.style.position = 'absolute';
    raindropContainer.style.left = `${iX}px`;
    raindropContainer.style.top = `${iY + iWidth/1.5}px`;
    raindropContainer.style.width = `${iWidth}px`;
    raindropContainer.style.height = `${iWidth}px`;
    raindropContainer.style.display = 'flex';
    raindropContainer.style.justifyContent = 'center';


    // Create a new raindrop
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindropContainer.appendChild(raindrop);

    raindrop.style.width = '40%';
    raindrop.style.height = '40%';
    raindrop.style.backgroundColor = `rgb(19, 121, 255)`;
    

   
    // Make the shape of a raindrop
    raindrop.style.borderRadius = '0 60% 60% 60%';
    raindrop.style.transform = 'scale(0) rotate(45deg)'; 

    // Animate the raindrop to appear
    setTimeout(() => {
        raindrop.style.transition = 'transform 1s';
        raindrop.style.transform = 'scale(1.2) rotate(45deg) translate(0, 0)';
    }, 0);

    // Animate the raindrop to fall
    setTimeout(() => {
        raindrop.style.transition = 'transform 0.5s linear, width 0.5s linear, height 0.5s linear'; 
    raindrop.style.transform = `rotate(45deg) translate(${iWidth}px, ${iWidth}px)`; 
    raindrop.style.width = '0%'; 
    raindrop.style.height = '0%'; 
    }, 2000);
   


    const word = document.querySelector('.word-container');
    const currentOpacity = parseFloat(word.style.opacity) || 0.1; 
    const newOpacity = currentOpacity + 0.1;

    // Animate the word to fade in
    setTimeout(() => {
        word.style.opacity = newOpacity;
        word.style.transition = 'opacity 0.5s'; 
    }, 2400);
   

   
  }


function raindropAnimation() {
    createRaindrop();
}



raindropAnimation()
setInterval(raindropAnimation, 3000);


window.addEventListener("resize", notify);
function notify() {
    raindropAnimation()
}