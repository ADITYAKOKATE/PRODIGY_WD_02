// script.js
let timer;
let elapsedTime = 0;
let isRunning = false;
let lapCounter = 0;

const timeDisplay = document.getElementById("time-display");
const startButton = document.getElementById("start-btn");
const pauseButton = document.getElementById("pause-btn");
const resetButton = document.getElementById("reset-btn");
const lapButton = document.getElementById("lap-btn");
const lapTimesContainer = document.getElementById("lap-times");

// Start Timer
startButton.addEventListener("click", () => {
    if (!isRunning) {
        timer = setInterval(updateTime, 1000);
        isRunning = true;
    }
});

// Pause Timer
pauseButton.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
});

// Reset Timer
resetButton.addEventListener("click", () => {
    clearInterval(timer);
    elapsedTime = 0;
    lapCounter = 0;
    isRunning = false;
    timeDisplay.textContent = "00:00:00";
    lapTimesContainer.innerHTML = ""; // Clear lap times
});

// Record Lap
lapButton.addEventListener("click", () => {
    if (isRunning) {
        lapCounter++;
        const lapTime = formatTime(elapsedTime);
        const lapElement = document.createElement("p");
        lapElement.textContent = `Lap ${lapCounter}: ${lapTime}`;
        lapTimesContainer.appendChild(lapElement);
    }
});

// Update Time Display
function updateTime() {
    elapsedTime++;
    timeDisplay.textContent = formatTime(elapsedTime);
}

// Format Time (HH:MM:SS)
function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

// Pad Single Digit Numbers with Leading Zero
function pad(number) {
    return number < 10 ? "0" + number : number;
}
