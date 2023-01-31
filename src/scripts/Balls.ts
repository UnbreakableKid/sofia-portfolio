export interface Ball {
  x: number;
  y: number;
  size: number;
  color: string;
  velocity: number;
  direction: number;
  slowingDown: boolean;
}
console.log("hi");
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let balls: Ball[] = [];

canvas.addEventListener("click", function (event) {
  let x = event.clientX;
  let y = event.clientY;

  balls.push({
    x: x,
    y: y,
    size: Math.random() * 30 + 10,
    color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`,
    velocity: Math.random() * 5 + 1,
    direction: 1,
    slowingDown: false,
  });
});

function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < balls.length; i++) {
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
