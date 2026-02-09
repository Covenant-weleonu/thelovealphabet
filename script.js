function showMessage() {
  const messageContainer = document.getElementById("finalMessage");
  if (!messageContainer) return;

  const name = localStorage.getItem("username") || "Sweetheart";
  const letter = localStorage.getItem("selectedLetter") || "A";

  const loveMessages = {
    A: `A wonderful heart like ${name} deserves endless happiness and beautiful moments 💖`,
    B: `Bright smiles and warm days surround someone as special as ${name} 💕`,
    C: `Cherished and celebrated, ${name} brings light wherever they go ✨`,
    D: `Delight and joy naturally follow a soul like ${name} 💘`,
    E: `Every day feels brighter with someone as amazing as ${name} 🌹`,
    F: `Filled with kindness and charm, ${name} makes the world sweeter 💞`,
    G: `Grace and goodness shine effortlessly through ${name} 💖`,
    H: `Happiness grows wherever ${name} shares a smile 💓`,
    I: `Incredible energy and warmth define someone like ${name} 💌`,
    J: `Joy seems to follow ${name} everywhere 🌸`,
    K: `Kind words and lovely moments always surround ${name} ✨`,
    L: `Love and laughter suit ${name} perfectly 💕`,
    M: `Moments become magical around someone like ${name} 💖`,
    N: `Nothing compares to the warmth that ${name} brings 🌷`,
    O: `Optimism and sweetness beautifully describe ${name} 💘`,
    P: `Pure positivity shines brightly through ${name} 💓`,
    Q: `Quiet strength and beauty define ${name} 💞`,
    R: `Radiant and rare, ${name} is truly unforgettable 🌹`,
    S: `Smiles grow easily in the presence of ${name} 💖`,
    T: `Tender moments and sweet memories suit ${name} perfectly 💕`,
    U: `Unmatched charm and grace make ${name} stand out ✨`,
    V: `Vibrant and valuable, ${name} brightens every space 💘`,
    W: `Warmth and wonder follow ${name} everywhere 💓`,
    X: `XOXO and sweet vibes surround ${name} today 💌`,
    Y: `Youthful spirit and bright energy define ${name} 💖`,
    Z: `Zealous joy and sparkle naturally belong to ${name} 🌹`
  };

  messageContainer.textContent = loveMessages[letter];
}
