// music_genre_wheel.js

// Basic HTML structure for the spinning wheel
const htmlContent = `
<div class="wheel-container">
  <div class="wheel" id="musicWheel">
    <!-- Wheel slices dynamically added by JavaScript -->
  </div>
  <button id="spinButton">Spin the Wheel</button>
</div>`;

document.body.innerHTML = htmlContent;

// CSS for the spinning wheel and its slices
const style = document.createElement('style');
style.textContent = `
  .wheel-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }

  #musicWheel {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 5px solid #000;
    position: relative;
    transform: rotate(0deg);
    transition: transform 4s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }

  #musicWheel .slice {
    position: absolute;
    width: 50%;
    height: 50%;
    background-color: #f39c12;
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
    transform-origin: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
  }

  #spinButton {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
`;
document.head.appendChild(style);

// JavaScript for the spinning wheel functionality

const genres = ["Rock", "Metal", "Punk", "Grunge", "Hardcore", "Industrial", "Alternative", "Electronica"];

const wheel = document.getElementById("musicWheel");
const spinButton = document.getElementById("spinButton");

// Create the slices on the spinning wheel
function createWheelSlices() {
  const sliceAngle = 360 / genres.length;
  genres.forEach((genre, index) => {
    const slice = document.createElement("div");
    slice.classList.add("slice");
    slice.style.transform = `rotate(${index * sliceAngle}deg)`;
    slice.style.backgroundColor = index % 2 === 0 ? "#c0392b" : "#8e44ad";
    slice.textContent = genre;
    wheel.appendChild(slice);
  });
}
createWheelSlices();

// Spin logic
let currentAngle = 0;
spinButton.addEventListener("click", () => {
  const randomAngle = Math.floor(Math.random() * 360) + 1080; // At least 3 full spins
  currentAngle += randomAngle;
  wheel.style.transform = `rotate(-${currentAngle}deg)`;
});