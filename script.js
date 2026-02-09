// ------------------ SAVE NAME ------------------
function saveName() {
  const nameInput = document.getElementById("nameInput");
  if (!nameInput) return;

  const name = nameInput.value.trim();
  if (!name) {
    alert("Please enter your beautiful name 💖");
    return;
  }

  localStorage.setItem("username", name);
  window.location.href = "letters.html";
}

// ------------------ LOAD LETTERS ------------------
function loadLetters() {
  const lettersContainer = document.getElementById("letters");
  if (!lettersContainer) return;

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  alphabet.forEach(letter => {
    const btn = document.createElement("button");
    btn.textContent = letter;
    btn.classList.add("letter-btn");

    btn.onclick = () => {
      localStorage.setItem("selectedLetter", letter);
      window.location.href = "message.html";
    };

    lettersContainer.appendChild(btn);
  });
}

// ------------------ SHOW FINAL MESSAGE ------------------
function showMessage() {
  const messageContainer = document.getElementById("finalMessage");
  if (!messageContainer) return;

  const name = localStorage.getItem("username") || "Sweetheart";
  const letter = localStorage.getItem("selectedLetter") || "A";

  const messages = [
    `${letter} is for Amazing, just like you, ${name} 💖`,
    `${letter} begins a beautiful story written just for you, ${name} 💌`,
    `${name}, ${letter} stands for the love that shines in your heart 💕`,
    `Roses are red, violets are blue, ${letter} starts a love message for you, ${name} 🌹`,
    `${letter} marks the beginning of something magical for you, ${name} ✨`
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  messageContainer.textContent = randomMessage;
}

// ------------------ TRY AGAIN ------------------
function tryAgain() {
  localStorage.removeItem("username");
  localStorage.removeItem("selectedLetter");
  window.location.href = "index.html";
}

// ------------------ AUTO RUN WHEN PAGE LOADS ------------------
document.addEventListener("DOMContentLoaded", () => {
  loadLetters();
  showMessage();
});
// ------------------ SAVE NAME ------------------
function saveName() {
  const nameInput = document.getElementById("nameInput");
  if (!nameInput) return;

  const name = nameInput.value.trim();
  if (!name) {
    alert("Please enter your beautiful name 💖");
    return;
  }

  localStorage.setItem("username", name);
  window.location.href = "letters.html";
}

// ------------------ LOAD LETTERS ------------------
function loadLetters() {
  const lettersContainer = document.getElementById("letters");
  if (!lettersContainer) return;

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  alphabet.forEach(letter => {
    const btn = document.createElement("button");
    btn.textContent = letter;
    btn.classList.add("letter-btn");

    btn.onclick = () => {
      localStorage.setItem("selectedLetter", letter);
      window.location.href = "message.html";
    };

    lettersContainer.appendChild(btn);
  });
}

// ------------------ SHOW FINAL MESSAGE ------------------
function showMessage() {
  const messageContainer = document.getElementById("finalMessage");
  if (!messageContainer) return;

  const name = localStorage.getItem("username") || "Sweetheart";
  const letter = localStorage.getItem("selectedLetter") || "A";

  const messages = [
    `${letter} is for Amazing, just like you, ${name} 💖`,
    `${letter} begins a beautiful story written just for you, ${name} 💌`,
    `${name}, ${letter} stands for the love that shines in your heart 💕`,
    `Roses are red, violets are blue, ${letter} starts a love message for you, ${name} 🌹`,
    `${letter} marks the beginning of something magical for you, ${name} ✨`
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  messageContainer.textContent = randomMessage;
}

// ------------------ TRY AGAIN ------------------
function tryAgain() {
  localStorage.removeItem("username");
  localStorage.removeItem("selectedLetter");
  window.location.href = "index.html";
}

// ------------------ AUTO RUN WHEN PAGE LOADS ------------------
document.addEventListener("DOMContentLoaded", () => {
  loadLetters();
  showMessage();
});
