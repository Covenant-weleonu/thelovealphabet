// -------------------- AIRTABLE CONFIG --------------------
const AIRTABLE_API_KEY = "patDOVC3Yzb9TAmGz.6331c0cc9bca0550a7f7b571e57364df104960db5c5d8e4a3d1cc6c08f6679b4";   // PAT 
const BASE_ID = "appuH4Klw8aLOF5y7";           // Base ID
const TABLE_NAME = "submissions";         // table name

// -------------------- SAVE NAME --------------------
async function saveName() {
  const nameInput = document.getElementById("nameInput");
  if (!nameInput) return;

  const name = nameInput.value.trim();
  if (!name) return alert("Enter your name 💕");

  // Save locally for flow between pages
  localStorage.setItem("username", name);

  // Send name to Airtable
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;
  const data = { fields: { name: name, created_at: new Date().toISOString() } };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${AIRTABLE_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log("Airtable name saved:", result);
  } catch (err) {
    console.error("Error saving name to Airtable:", err);
  }

  // Redirect to letters page
  window.location.href = "letters.html";
}

// -------------------- LOAD LETTERS --------------------
function loadLetters() {
  const lettersDiv = document.getElementById("letters");
  if (!lettersDiv) return;

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  lettersDiv.innerHTML = "";

  letters.forEach(letter => {
    const btn = document.createElement("button");
    btn.textContent = letter;

    btn.onclick = async () => {
      localStorage.setItem("letter", letter);
      const username = localStorage.getItem("username");
      if (!username) return;

      // Find Airtable record for this username
      const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}?filterByFormula=({name}='${username}')`;

      try {
        const fetchRes = await fetch(url, { headers: { "Authorization": `Bearer ${AIRTABLE_API_KEY}` } });
        const fetchData = await fetchRes.json();

        if (fetchData.records.length > 0) {
          const recordId = fetchData.records[0].id;
          const updateUrl = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}/${recordId}`;
          const updateData = { fields: { letter: letter } };

          const updateRes = await fetch(updateUrl, {
            method: "PATCH",
            headers: {
              "Authorization": `Bearer ${AIRTABLE_API_KEY}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(updateData)
          });

          const updateResult = await updateRes.json();
          console.log("Airtable letter saved:", updateResult);
        } else {
          console.warn("No record found to update letter");
        }
      } catch (err) {
        console.error("Error updating letter in Airtable:", err);
      }

      // Go to message page
      window.location.href = "message.html";
    };

    lettersDiv.appendChild(btn);
  });
}

// -------------------- SHOW FINAL MESSAGE --------------------
function showFinalMessage() {
  const messageEl = document.getElementById("finalMessage");
  if (!messageEl) return;

  const username = localStorage.getItem("username") || "Sweetheart";
  const letter = localStorage.getItem("letter") || "A";

  const messages = [
    `${letter} is the start of something magical for ${username} 💖`,
    `Dear ${username}, your love journey begins with ${letter} 💌`,
    `${username}, today ${letter} brings you a sweet surprise 💘`,
    `Roses are red, violets are blue, ${letter} starts a special message for you, ${username} 🌹`,
    `Hello ${username}! The letter ${letter} whispers love just for you 💞`
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  messageEl.textContent = randomMessage;
}

// -------------------- TRY AGAIN --------------------
function tryAgain() {
  localStorage.removeItem("username");
  localStorage.removeItem("letter");
  window.location.href = "index.html";
}

// -------------------- INITIALIZATION --------------------
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("letters")) loadLetters();
  if (document.getElementById("finalMessage")) showFinalMessage();
});
