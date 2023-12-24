const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';

let x = 0;
ctx.fillRect(50, 50, 100, 100);

function animate(){
    ctx.clearRect(0, 0, 600, 600);
    ctx.fillRect(x, 50, 100, 100);
    x++;
    requestAnimationFrame(animate);
}

animate();
