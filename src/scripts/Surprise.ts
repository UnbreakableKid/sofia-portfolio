import confetti from "canvas-confetti";

// check if user types sofia (clicks s then o then f and so on). if so, show confetti.
let sofiaCount = 0;
const sofiaTimeoutDuration = 2000;

const sofiaH1 = document.getElementById("sofia");

function sofiaCheck(e: { key: string }) {
  if (sofiaH1 === null) return;
  if (e.key === "s") {
    sofiaCount++;
    sofiaH1.innerHTML = '<span style="color:red">' + "S" + "</span>" + "ofia";
  } else if (e.key === "o" && sofiaCount === 1) {
    sofiaCount++;
    sofiaH1.innerHTML =
      '<span style="color:red">' + "S" + "o" + "</span>" + "fia";
  } else if (e.key === "f" && sofiaCount === 2) {
    sofiaCount++;
    sofiaH1.innerHTML =
      '<span style="color:red">' + "S" + "o" + "f" + "</span>" + "ia";
  } else if (e.key === "i" && sofiaCount === 3) {
    sofiaCount++;
    sofiaH1.innerHTML =
      '<span style="color:red">' + "S" + "o" + "f" + "i" + "</span>" + "a";
  } else if (e.key === "a" && sofiaCount === 4) {
    sofiaH1.innerHTML =
      '<span style="color:red">' + "S" + "o" + "f" + "i" + "a" + "</span>";
    sofiaConfetti();
    sofiaCount++;
  } else {
    sofiaCount = 0;
    sofiaH1.innerHTML = "Sofia";
  }

  if (sofiaCount === 5) {
    setTimeout(() => {
      sofiaCount = 0;
      sofiaH1.innerHTML = "Sofia";
    }, sofiaTimeoutDuration);
  }
}

document.addEventListener("keydown", sofiaCheck);

function sofiaConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}
