const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.heigth = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';

ctx.fillRect(50, 50, 100, 100);

function animate(){
    ctx.clearRect(0, 0, 600, 600);
    ctx.fillRect(50, 50, 100, 100);
    requestAnimationFrame(animate);
}

animate();
