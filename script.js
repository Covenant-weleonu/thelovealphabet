// SAVE NAME
function saveName() {
  const nameInput = document.getElementById("nameInput");

  if (!nameInput || nameInput.value.trim() === "") {
    alert("Please enter your name 💖");
    return;
  }

  localStorage.setItem("username", nameInput.value.trim());
  window.location.href = "letters.html";
}


// LOAD 26 LETTERS ONLY
function loadLetters() {
  const container = document.getElementById("letters");
  if (!container) return;

  container.innerHTML = ""; // prevents duplication

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i];

    const btn = document.createElement("button");
    btn.textContent = letter;
    btn.classList.add("letter-btn");

    btn.onclick = function () {
      localStorage.setItem("selectedLetter", letter);
      window.location.href = "message.html";
    };

    container.appendChild(btn);
  }
}


// SHOW MESSAGE
function showMessage() {
  const messageContainer = document.getElementById("finalMessage");
  if (!messageContainer) return;

  const name = localStorage.getItem("username") || "Sweetheart";
  const letter = localStorage.getItem("selectedLetter") || "A";

  const messages = {
    A: `A beautiful soul like ${name} deserves endless happiness 💖`,
    B: `Bright smiles and warm moments surround ${name} 💕`,
    C: `Cherished and celebrated, ${name} brings light everywhere ✨`,
    D: `Delight follows someone as wonderful as ${name} 💘`,
    E: `Every day shines brighter with ${name} around 🌹`,
    F: `Filled with kindness and charm, ${name} stands out 💞`,
    G: `Grace and goodness naturally describe ${name} 💖`,
    H: `Happiness grows wherever ${name} goes 💓`,
    I: `Incredible energy makes ${name} unforgettable 💌`,
    J: `Joy surrounds ${name} in the sweetest way 🌸`,
    K: `Kind hearts like ${name}'s make the world better ✨`,
    L: `Love and laughter suit ${name} perfectly 💕`,
    M: `Magical moments follow ${name} everywhere 💖`,
    N: `Nothing compares to the warmth ${name} brings 🌷`,
    O: `Optimism and sweetness define ${name} 💘`,
    P: `Pure positivity shines through ${name} 💓`,
    Q: `Quiet beauty makes ${name} truly special 💞`,
    R: `Radiant and rare, ${name} lights up every space 🌹`,
    S: `Smiles appear easily around ${name} 💖`,
    T: `Tender moments suit ${name} perfectly 💕`,
    U: `Unmatched charm makes ${name} unforgettable ✨`,
    V: `Vibrant energy surrounds ${name} daily 💘`,
    W: `Warmth follows ${name} everywhere 💓`,
    X: `XOXO and sweet vibes belong to ${name} 💌`,
    Y: `Youthful spirit defines ${name} beautifully 💖`,
    Z: `Zealous joy and sparkle fit ${name} perfectly 🌹`
  };

  messageContainer.textContent = messages[letter];
}


// TRY AGAIN BUTTON
function tryAgain() {
  window.location.href = "index.html";
}


// AUTO RUN
document.addEventListener("DOMContentLoaded", function () {
  loadLetters();
  showMessage();
});
