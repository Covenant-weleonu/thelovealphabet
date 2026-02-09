// ---------- PAGE 1 ----------
function goToLetters() {
  const name = document.getElementById("nameInput").value.trim();

  if (name === "") {
    alert("Please enter your name 💖");
    return;
  }

  sessionStorage.setItem("username", name);
  window.location.href = "letters.html";
}


// ---------- PAGE 2 ----------
function loadLetters() {
  const container = document.getElementById("letters");
  if (!container) return;

  const name = sessionStorage.getItem("username");

  // If user reloads or no name exists → go home
  if (!name) {
    window.location.href = "index.html";
    return;
  }

  container.innerHTML = "";

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i];

    const btn = document.createElement("button");
    btn.textContent = letter;

    btn.onclick = function () {
      sessionStorage.setItem("selectedLetter", letter);
      window.location.href = "message.html";
    };

    container.appendChild(btn);
  }
}


// ---------- PAGE 3 ----------
function showMessage() {
  const messageBox = document.getElementById("finalMessage");
  if (!messageBox) return;

  const name = sessionStorage.getItem("username");
  const letter = sessionStorage.getItem("selectedLetter");

  // If user reloads or accesses directly → go home
  if (!name || !letter) {
    window.location.href = "index.html";
    return;
  }

  const messages = {
    A: `A beautiful presence like ${name} brings warmth everywhere 💖`,
    B: `Bright smiles naturally follow ${name} 💕`,
    C: `Charm and kindness define ${name} ✨`,
    D: `Delight surrounds someone as special as ${name} 💘`,
    E: `Every moment shines brighter with ${name} 🌹`,
    F: `Friendliness and grace suit ${name} perfectly 💞`,
    G: `Great energy makes ${name} unforgettable 💖`,
    H: `Happiness grows wherever ${name} goes 💓`,
    I: `Incredible spirit sets ${name} apart 💌`,
    J: `Joy flows easily around ${name} 🌸`,
    K: `Kind hearts like ${name}'s are rare ✨`,
    L: `Love and laughter follow ${name} 💕`,
    M: `Magic seems to surround ${name} 💖`,
    N: `Natural charm makes ${name} shine 🌷`,
    O: `Optimism radiates from ${name} 💘`,
    P: `Positivity follows ${name} everywhere 💓`,
    Q: `Quiet strength defines ${name} 💞`,
    R: `Radiance belongs naturally to ${name} 🌹`,
    S: `Sweet moments suit ${name} 💖`,
    T: `Tender smiles light up ${name}'s world 💕`,
    U: `Unique and wonderful, ${name} stands out ✨`,
    V: `Vibrance surrounds ${name} 💘`,
    W: `Warmth flows wherever ${name} goes 💓`,
    X: `X-factor energy makes ${name} unforgettable 💌`,
    Y: `Youthful joy defines ${name} 💖`,
    Z: `Zeal and sparkle fit ${name} perfectly 🌹`
  };

  messageBox.textContent = messages[letter];
}


// ---------- BACK HOME ----------
function goHome() {
  sessionStorage.clear();
  window.location.href = "index.html";
}


// ---------- AUTO RUN ----------
window.onload = function () {
  loadLetters();
  showMessage();
};
