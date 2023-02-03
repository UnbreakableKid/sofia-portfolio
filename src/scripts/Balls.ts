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
const maskCanvas = document.getElementById("canvas") as HTMLCanvasElement;
const maskCtx = maskCanvas.getContext("2d") as CanvasRenderingContext2D;

var h1 = document.getElementById("sofia");
var h1Rect = h1!.getBoundingClientRect();

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

  if (Math.random() < 0.001) {
    // dont put the ball over the rectangle
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;

    if (x > h1Rect.left && x < h1Rect.right) {
      x = Math.random() * canvas.width * 0.5 + canvas.width * 0.5;
    }

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
    let ball = balls[i];
    let dx = mouse.x - ball.x;
    let dy = mouse.y - ball.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    const lightModeColor = 255 - distance / 5;

    const darkModeColor = 255 - distance / 5;
    ball.color = !isDarkMode
      ? `rgb(${lightModeColor}, ${lightModeColor}, ${lightModeColor})`
      : `rgb(${darkModeColor}, ${darkModeColor}, ${darkModeColor})`;

    if (distance < 30) {
      ball.x += dx * 0.05;
      ball.y += dy * 0.05;
    }

    const isBallTouchingTopOfH1 =
      ball.x + ball.size >= h1Rect.left &&
      ball.x - ball.size <= h1Rect.right &&
      ball.y + ball.size >= h1Rect.top &&
      ball.y - ball.size <= h1Rect.bottom;

    const isBallTouchingBottomOfH1 =
      ball.x + ball.size >= h1Rect.left &&
      ball.x - ball.size <= h1Rect.right &&
      ball.y + ball.size >= h1Rect.bottom &&
      ball.y - ball.size <= h1Rect.bottom;

    if (ball.y - ball.size <= 0) {
      ball.direction = 1;
    } else if (ball.y + ball.size >= canvas.height) {
      ball.direction = -1;
      ball.slowingDown = true;
    }

    if (ball.slowingDown && ball.velocity < 0.1) {
      ball.slowingDown = false;
    }

    if (ball.slowingDown) {
      ball.velocity -= 0.01;
    }

    ball.y += ball.velocity * ball.direction;

    if (balls.length > 100) {
      balls.splice(i, 1);
      i--;
      continue;
    }

    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
  }
}

animate();
