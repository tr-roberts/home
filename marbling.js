const marblingCanvas = document.getElementById('marbling-canvas');
const marblingContext = marblingCanvas.getContext('2d');

function randomPosition() {
    return Math.random();
}

function drawMarbling() {
    const colors = ['#ff0000', '#00ff00', '#0000ff']; // Customize colors as needed

    // Clear canvas
    marblingContext.clearRect(0, 0, marblingCanvas.width, marblingCanvas.height);

    // Draw marbling patterns
    for (let i = 0; i < 100; i++) {
        const x = randomPosition() * marblingCanvas.width;
        const y = randomPosition() * marblingCanvas.height;
        const radius = randomPosition() * 10 + 5;
        const color = colors[Math.floor(randomPosition() * colors.length)];

        marblingContext.beginPath();
        marblingContext.arc(x, y, radius, 0, 2 * Math.PI);
        marblingContext.fillStyle = color;
        marblingContext.fill();
        marblingContext.closePath();
    }

    // Request animation frame for smooth animation
    requestAnimationFrame(drawMarbling);
}

// Start the marbling animation
drawMarbling();

