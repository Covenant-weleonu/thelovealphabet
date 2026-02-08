// -------------------- SUPABASE SETUP --------------------
const SUPABASE_URL = "https://bggwdxkeiqhjnbqfutgi.supabase.co";     
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnZ3dkeGtlaXFoam5icWZ1dGdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1NjcyNDcsImV4cCI6MjA4NjE0MzI0N30.sgcqdp7pctcnOYzFXRd3L_xRZZLLxtqqQj5mBHwZmcQ";  

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// -------------------- SAVE NAME --------------------
async function saveName() {
  const nameInput = document.getElementById("nameInput");
  if (!nameInput) return; // not on this page
  const name = nameInput.value.trim();
  if (!name) return alert("Enter your name 💕");

  // Save locally for flow
  localStorage.setItem("username", name);

  // Save to Supabase
  try {
    const { data, error } = await supabaseClient
      .from("submissions")
      .insert([{ name }]);
    if (error) console.error("Error saving name:", error);
    else console.log("Name saved:", data);
  } catch (err) {
    console.error("Supabase error:", err);
  }

  // Redirect to letters page
  window.location.href = "letters.html";
}

// -------------------- LOAD LETTERS --------------------
function loadLetters() {
  const lettersDiv = document.getElementById("letters");
  if (!lettersDiv) return; // not on this page

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  lettersDiv.innerHTML = "";

  letters.forEach(l => {
    const btn = document.createElement("button");
    btn.textContent = l;

    btn.onclick = async () => {
      localStorage.setItem("letter", l);

      const username = localStorage.getItem("username");
      if (!username) return;

      // Update Supabase submission with the selected letter
      try {
        const { data, error } = await supabaseClient
          .from("submissions")
          .update({ letter: l })
          .eq("name", username)
          .order("created_at", { ascending: false })
          .limit(1);

        if (error) console.error("Error saving letter:", error);
        else console.log("Letter saved:", data);
      } catch (err) {
        console.error("Supabase error:", err);
      }

      // Go to final message
      window.location.href = "message.html";
    };

    lettersDiv.appendChild(btn);
  });
}

// -------------------- SHOW FINAL MESSAGE --------------------
function showFinalMessage() {
  const messageEl = document.getElementById("finalMessage");
  if (!messageEl) return; // not on this page

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
  localStorage.removeItem("letter");
  window.location.href = "index.html";
}

// -------------------- INITIALIZATION --------------------
// Call automatically if the function exists on the page
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("letters")) loadLetters();
  if (document.getElementById("finalMessage")) showFinalMessage();
});
