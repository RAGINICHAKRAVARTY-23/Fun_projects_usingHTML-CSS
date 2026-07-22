const gift = document.getElementById("gift");
const img = document.getElementById("countImage");

const images = [
    "1.png",
    "2.png",
    "3.png",
    "i.png",
    "Love.png",
    "you.png"
];

gift.addEventListener("click", () => {
    gift.style.display = "none";
    img.style.display = "block";

    let index = 0;
    img.src = images[index];

    const interval = setInterval(() => {
        index++;

        if (index < images.length) {
            img.src = images[index];

            if (images[index] === "you.png") {
                img.style.width = "500px";
            }
        } else {
            clearInterval(interval);
            setInterval(createHeart, 300);
        }
    }, 1000);
});

function createHeart() {
    const heart = document.createElement("img");
    heart.src = "heart.png";
    heart.classList.add("heart");

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-60px";

    const size = 25 + Math.random() * 35;
    heart.style.width = size + "px";

    document.getElementById("hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Drawing canvas
const canvas = document.getElementById("drawCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let drawing = false;

document.addEventListener("mousedown", () => {
    drawing = true;
});

document.addEventListener("mouseup", () => {
    drawing = false;
});

document.addEventListener("mousemove", (e) => {
    if (drawing) {
        drawHeart(e.clientX, e.clientY);
    }
});

function drawHeart(x, y) {
    ctx.save();
    ctx.translate(x, y);

    ctx.beginPath();
    ctx.moveTo(0, 5);

    ctx.bezierCurveTo(-15, -10, -25, 10, 0, 25);
    ctx.bezierCurveTo(25, 10, 15, -10, 0, 5);

    ctx.fillStyle = "pink";
    ctx.shadowBlur = 20;
    ctx.shadowColor = "hotpink";

    ctx.fill();
    ctx.restore();
}