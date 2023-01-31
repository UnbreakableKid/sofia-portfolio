export interface Ball {
  x: number;
  y: number;
  size: number;
  color: string;
  velocity: number;
  direction: number;
  slowingDown: boolean;
}

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const mouse = { x: -100, y: -100 };

canvas.addEventListener("mousemove", function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let balls: Ball[] = [];

canvas.addEventListener("click", function (event) {
  //see if html has class dark
  const isDarkMode = document.documentElement.classList.contains("dark");
  let x = event.clientX;
  let y = event.clientY;

  balls.push({
    x: x,
    y: y,
    size: Math.random() * 30 + 10,
    color: !isDarkMode ? `rgb(0,0,0)` : `rgb(255,255,255)`,
    velocity: Math.random() * 5 + 1,
    direction: 1,
    slowingDown: false,
  });
});

function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const isDarkMode = document.documentElement.classList.contains("dark");

  if (Math.random() < 0.05) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;

    balls.push({
      x: x,
      y: y,
      size: Math.random() * 30 + 10,
      color: !isDarkMode ? `rgb(0,0,0)` : `rgb(255,255,255)`,
      velocity: Math.random() * 5 + 1,
      direction: 1,
      slowingDown: false,
    });
  }

  for (let i = 0; i < balls.length; i++) {
    let dx = mouse.x - balls[i].x;
    let dy = mouse.y - balls[i].y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    balls[i].color = !isDarkMode
      ? `rgb(${distance / 5}, ${distance / 5}, ${distance / 5})`
      : `rgb(${255 - distance / 5}, ${255 - distance / 5}, ${
          255 - distance / 5
        })`;

    if (distance < 20) {
      balls[i].x += dx * 0.05;
      balls[i].y += dy * 0.05;
    }

    if (balls[i].y + balls[i].size >= canvas.height) {
      balls[i].direction = -1;
      balls[i].slowingDown = true;
    } else if (balls[i].y - balls[i].size <= 0) {
      balls[i].direction = 1;
    }

    if (balls[i].slowingDown) {
      balls[i].velocity -= 0.01;
    }

    balls[i].y += balls[i].velocity * balls[i].direction;

    ctx.beginPath();
    ctx.fillStyle = balls[i].color;
    ctx.arc(balls[i].x, balls[i].y, balls[i].size, 0, Math.PI * 2);
    ctx.fill();
  }
}

animate();
