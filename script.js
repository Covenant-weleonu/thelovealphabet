// Save name and go to letters page
function saveName() {
    const name = document.getElementById("nameInput").value.trim();
    if (name === "") {
        alert("Please enter a name 💕");
        return;
    }
    localStorage.setItem("valentineName", name);
    window.location.href = "letters.html";
}

// Generate alphabet buttons on letters page
if (document.getElementById("letters")) {
    const lettersDiv = document.getElementById("letters");

    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        const btn = document.createElement("button");
        btn.textContent = letter;

        btn.onclick = function() {
            localStorage.setItem("chosenLetter", letter);
            window.location.href = "message.html";
        };

        lettersDiv.appendChild(btn);
    }
}

// Display final love message on message page
if (document.getElementById("finalMessage")) {
    const name = localStorage.getItem("valentineName");
    const letter = localStorage.getItem("chosenLetter");
    const messageDiv = document.getElementById("finalMessage");

    const loveMessages = {
        A: `A single glance from ${name} can turn the whole day into something beautiful.`,
        B: `Being close to ${name} feels like finding warmth on the coldest night.`,
        C: `Caught somewhere between a smile and a heartbeat… there’s ${name}.`,
        D: `Deep down, everything feels softer whenever ${name} is near.`,
        E: `Every little thing reminds the heart of ${name} in the sweetest way.`,
        F: `Falling for ${name} feels gentle… like love was always meant to happen.`,
        G: `Give the world a reason to glow, and it would look a lot like ${name}.`,
        H: `Holding onto moments with ${name} feels like holding onto forever.`,
        I: `If love had a favorite place to rest, it would be right beside ${name}.`,
        J: `Just the thought of ${name} can make the heart skip without warning.`,
        K: `Kind eyes like ${name}'s make the world feel safe and warm.`,
        L: `Love feels quieter, deeper, and sweeter with ${name} in it.`,
        M: `Moments shared with ${name} linger long after they’re gone.`,
        N: `Nothing feels quite as tender as a memory that includes ${name}.`,
        O: `Only a heartbeat away, and suddenly ${name} becomes the whole world.`,
        P: `Peace feels real in the presence of ${name}.`,
        Q: `Quiet nights feel less lonely with thoughts of ${name} drifting in.`,
        R: `Right there in the middle of a smile, you’ll find ${name}.`,
        S: `Soft laughter from ${name} could melt even the hardest day.`,
        T: `Time slows down in the most beautiful way around ${name}.`,
        U: `Under every star, there’s a wish that somehow leads to ${name}.`,
        V: `Very few things feel as right as standing close to ${name}.`,
        W: `When ${name} smiles, the world forgets how to be ordinary.`,
        X: `XOXO feels sweeter when it carries the warmth of ${name}.`,
        Y: `You can search everywhere, but a feeling like ${name} is rare.`,
        Z: `Zero doubts — some hearts were simply meant to meet ${name}.`
    };

    if (name && letter && loveMessages[letter]) {
        messageDiv.textContent = loveMessages[letter];
    } else {
        messageDiv.textContent = "Something went wrong 💔 Please start again.";
    }
}

// Go back to home page
function goHome() {
    localStorage.clear();
    window.location.href = "index.html";
      }
