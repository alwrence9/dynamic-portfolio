const canvas = document.getElementsByClassName('waveCanvas');
const ctx = canvas.getContext('2d');

let width, height, lastMouseX, lastMouseY;
let waveAmplitude = 20;
let waveFrequency = 0.02;
const waveSpeed = 0.02;
let waveOffset = 0;

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = document.querySelector('.header').offsetHeight;
}

function drawWave() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#00aaff';
    ctx.beginPath();
    ctx.moveTo(0, height / 2);

    for (let x = 0; x < width; x++) {
        const y = height / 2 + waveAmplitude * Math.sin(x * waveFrequency + waveOffset);
        ctx.lineTo(x, y);
    }

    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fill();

    waveOffset += waveSpeed;
    requestAnimationFrame(drawWave);
}

function handleMouseMove(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    waveAmplitude = 20 + (mouseY / height) * 20;
    waveFrequency = 0.02 + (mouseX / width) * 0.02;
}

function setupWave() {
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    resizeCanvas();
    drawWave();
}