function saveName() {
  const name = document.getElementById("nameInput").value.trim();
  if (!name) {
    alert("Please enter your name 💕");
    return;
  }
  localStorage.setItem("username", name);
  window.location.href = "letters.html";
}

function loadLetters() {
  const container = document.getElementById("letters");
  for (let i = 65; i <= 90; i++) {
    let letter = String.fromCharCode(i);
    let btn = document.createElement("button");
    btn.innerText = letter;
    btn.onclick = () => {
      localStorage.setItem("letter", letter);
      window.location.href = "message.html";
    };
    container.appendChild(btn);
  }
}

function showFinalMessage() {
  const name = localStorage.getItem("username");
  const letter = localStorage.getItem("letter");

  const messages = {
    A: n => `Always remember how special you are, ${n}.`,
    B: n => `Beautiful hearts deserve endless love, ${n}.`,
    C: n => `Cherish every moment, because you are loved, ${n}.`,
    D: n => `Dreams feel sweeter when you smile, ${n}.`,
    E: n => `Every heartbeat whispers love for you, ${n}.`,
    F: n => `Forever would still feel short with you, ${n}.`,
    G: n => `Grace and warmth follow you everywhere, ${n}.`,
    H: n => `Happiness lives wherever you are, ${n}.`,
    I: n => `In every universe, you matter, ${n}.`,
    J: n => `Joy shines brighter because of you, ${n}.`,
    K: n => `Kind souls like yours are rare, ${n}.`,
    L: n => `Love blooms effortlessly around you, ${n}.`,
    M: n => `Moments feel magical when you’re near, ${n}.`,
    N: n => `Nothing compares to your smile, ${n}.`,
    O: n => `Only love follows your footsteps, ${n}.`,
    P: n => `Pure hearts attract beautiful stories, ${n}.`,
    Q: n => `Quiet love speaks loudest with you, ${n}.`,
    R: n => `Radiance flows naturally from you, ${n}.`,
    S: n => `Sweetness defines everything about you, ${n}.`,
    T: n => `True love always finds its way to you, ${n}.`,
    U: n => `Unforgettable is your presence, ${n}.`,
    V: n => `Valentine magic lives in you, ${n}.`,
    W: n => `Warm love surrounds your heart, ${n}.`,
    X: n => `XOXO will never be enough for you, ${n}.`,
    Y: n => `You are deeply cherished, ${n}.`,
    Z: n => `Zeal for love shines within you, ${n}.`
  };

  document.getElementById("finalMessage").innerText =
    messages[letter](name);
}

function tryAgain() {
  localStorage.clear();
  window.location.href = "index.html";
}
