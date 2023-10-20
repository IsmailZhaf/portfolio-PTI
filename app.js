import Typed from "typed.js";
import confetti from "canvas-confetti";

new Typed("#heading", {
  strings: ["Hey There!", "I am a Product Designer", "Future Software Engineer", "An Indie Maker."],
  typeSpeed: 78,
  backSpeed: 98,
  cursorChar: "_",
  loop: true,
});

const form = document.getElementById("form");
form.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    confetti.create(canvas, {
      resize: true,
      useWorker: true,
    });
    confetti({ particleCount: 400, spread: 320 });
    canvas.remove();
    form.value = "";
  }
});
