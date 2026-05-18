const factions = {
  "Rotten Hearts": {
    desc: "Cute, emotional, dramatic, and weirdly dangerous. You weaponize feelings and make it look adorable.",
    color: "black / hot pink / sickly green"
  },
  "Ink Rats": {
    desc: "Chaotic street-style goblins with graffiti souls. Loud, loyal, competitive, and impossible to ignore.",
    color: "black / cyan / slime green"
  },
  "Velvet Bats": {
    desc: "Elegant little nightmares. Quiet until provoked, then suddenly everyone regrets the group project.",
    color: "black / purple / silver"
  },
  "Static Angels": {
    desc: "Pop-idol halos with corrupted audio. Sweet voice, glitchy motives, dangerous sparkle.",
    color: "white / pink / electric blue"
  },
  "Chalk Demons": {
    desc: "Messy cursed creatives. You doodle on reality until it starts doodling back.",
    color: "charcoal / chalk white / neon yellow"
  },
  "Dollhouse Riot": {
    desc: "Pretty, broken, furious, and theatrical. The tea party is fake. The rebellion is not.",
    color: "pastel pink / black / porcelain white"
  }
};

const quotes = [
  "“I’m not dramatic. I’m foreshadowing.”",
  "“Do not open my locker. It bites.”",
  "“I came here to learn and make everyone uncomfortable.”",
  "“My homework was eaten by a prophecy.”",
  "“I’m fine. That was the curse talking.”",
  "“The mascot knows what you did.”"
];

function showSection(id) {
  document.querySelectorAll(".panel").forEach(panel => panel.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function makeID() {
  const name = document.getElementById("studentName").value.trim() || "Moxie Rot";
  const type = document.getElementById("monsterType").value;
  const faction = document.getElementById("idFaction").value;
  const club = document.getElementById("club").value;
  const curse = document.getElementById("curse").value;

  document.getElementById("cardName").textContent = name;
  document.getElementById("cardType").textContent = type;
  document.getElementById("cardFaction").textContent = faction;
  document.getElementById("cardClub").textContent = club;
  document.getElementById("cardCurse").textContent = curse;
  document.getElementById("cardQuote").textContent = randomFrom(quotes);

  const avatarMap = {
    "Bubblegum Ghoul": "☠",
    "Ink Brat": "✦",
    "Rotten Angel": "♡",
    "Chalk Demon": "☽",
    "Static Bunny": "⚡",
    "Velvet Bat": "🦇",
    "Dollhouse Witch": "✿",
    "Skullpop Idol": "★"
  };

  document.querySelector(".avatar").textContent = avatarMap[type] || "☠";
}

const quizQuestions = [
  {
    q: "Pick your detention snack.",
    a: [
      ["Poison candy", "Rotten Hearts"],
      ["Spray paint fumes", "Ink Rats"],
      ["Black cherry tea", "Velvet Bats"],
      ["Glitter soda", "Static Angels"],
      ["Chalk dust cookies", "Chalk Demons"],
      ["Porcelain cake", "Dollhouse Riot"]
    ]
  },
  {
    q: "Pick your weapon.",
    a: [
      ["Heart-shaped scissors", "Rotten Hearts"],
      ["Neon paint bat", "Ink Rats"],
      ["Velvet umbrella blade", "Velvet Bats"],
      ["Microphone halo", "Static Angels"],
      ["Cursed chalk", "Chalk Demons"],
      ["Cracked teacup", "Dollhouse Riot"]
    ]
  },
  {
    q: "Pick your toxic trait.",
    a: [
      ["Crying, then winning", "Rotten Hearts"],
      ["Starting chaos for fun", "Ink Rats"],
      ["Acting mysterious on purpose", "Velvet Bats"],
      ["Performing through the breakdown", "Static Angels"],
      ["Making jokes at the worst time", "Chalk Demons"],
      ["Smiling while planning revenge", "Dollhouse Riot"]
    ]
  },
  {
    q: "Pick a room.",
    a: [
      ["Bathroom mirror with messages", "Rotten Hearts"],
      ["Rooftop covered in stickers", "Ink Rats"],
      ["Quiet library with bats", "Velvet Bats"],
      ["Abandoned stage", "Static Angels"],
      ["Possessed art room", "Chalk Demons"],
      ["Tiny dollhouse hallway", "Dollhouse Riot"]
    ]
  }
];

let quizIndex = 0;
let quizScore = {};

function startQuiz() {
  quizIndex = 0;
  quizScore = {};
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const box = document.getElementById("quizBox");
  const question = quizQuestions[quizIndex];

  if (!question) {
    const winner = Object.entries(quizScore).sort((a, b) => b[1] - a[1])[0]?.[0] || "Chalk Demons";
    box.innerHTML = `
      <p>Your faction is...</p>
      <div class="result-title">${winner}</div>
      <p><b>Colors:</b> ${factions[winner].color}</p>
      <p>${factions[winner].desc}</p>
      <p class="quote">${randomFrom(quotes)}</p>
    `;
    return;
  }

  box.innerHTML = `<h3>${question.q}</h3>`;
  question.a.forEach(([text, faction]) => {
    const btn = document.createElement("button");
    btn.className = "quiz-answer";
    btn.textContent = text;
    btn.onclick = () => {
      quizScore[faction] = (quizScore[faction] || 0) + 1;
      quizIndex++;
      renderQuizQuestion();
    };
    box.appendChild(btn);
  });
}

const fortunes = [
  {
    curse: "Glitter Rot",
    color: "bruised purple",
    pet: "a two-faced moth",
    warning: "Do not trust mirrors after 6 PM."
  },
  {
    curse: "Mascot Fever",
    color: "toxic pink",
    pet: "a rabid plush bunny",
    warning: "If the school mascot waves first, run."
  },
  {
    curse: "Static Halo",
    color: "electric blue",
    pet: "a haunted microphone",
    warning: "Your favorite song may start giving instructions."
  },
  {
    curse: "Chalk Bite",
    color: "dirty white",
    pet: "a tiny board eraser with teeth",
    warning: "Anything you draw today may become legally responsible for you."
  },
  {
    curse: "Dollhouse Riot",
    color: "porcelain pink",
    pet: "a cracked tea spider",
    warning: "Small doors are not smaller on the inside."
  }
];

function makeFortune() {
  const f = randomFrom(fortunes);
  document.getElementById("fortuneText").innerHTML = `
    <b>Curse:</b> ${f.curse}<br>
    <b>Lucky color:</b> ${f.color}<br>
    <b>Assigned pet:</b> ${f.pet}<br>
    <b>Warning:</b> ${f.warning}
  `;
}

const studentCards = [
  {
    name: "Bubblegum Ghoul",
    rarity: "Rare",
    desc: "A detention legend who cries acid glitter and smiles during fire drills.",
    power: "Turns embarrassment into poison.",
    weakness: "Sincere compliments."
  },
  {
    name: "Ink Brat",
    rarity: "Common",
    desc: "Spray-paints hearts on cursed lockers and calls it emotional support.",
    power: "Gets faster when blamed.",
    weakness: "Being told to use indoor voice."
  },
  {
    name: "Static Bunny",
    rarity: "Weird",
    desc: "A cute little signal disaster who only speaks in song hooks and threats.",
    power: "Can make any room feel like a music video.",
    weakness: "Silence."
  },
  {
    name: "Velvet Bat",
    rarity: "Rare",
    desc: "Elegant, sleepy, and one insult away from summoning a chandelier.",
    power: "Turns shade into actual darkness.",
    weakness: "Morning announcements."
  },
  {
    name: "Chalk Demon",
    rarity: "Cursed",
    desc: "Doodles portals in the margins of homework and forgets which ones are real.",
    power: "Draws temporary monsters.",
    weakness: "Rain."
  },
  {
    name: "Rotten Angel",
    rarity: "Legendary",
    desc: "A fallen hallway celebrity with a cracked halo and perfect eyeliner.",
    power: "Makes bad decisions look holy.",
    weakness: "Accountability."
  },
  {
    name: "Dollhouse Witch",
    rarity: "Forbidden",
    desc: "Polite, pretty, and absolutely not allowed near tiny furniture anymore.",
    power: "Shrinks problems until they become collectibles.",
    weakness: "Being underestimated."
  }
];

function drawCard() {
  const card = randomFrom(studentCards);
  document.getElementById("cardRarity").textContent = card.rarity;
  document.getElementById("charName").textContent = card.name;
  document.getElementById("charDesc").textContent = card.desc;
  document.getElementById("charPower").textContent = card.power;
  document.getElementById("charWeakness").textContent = card.weakness;

  saveToGallery(card);
  renderGallery();
}

function saveToGallery(card) {
  const gallery = JSON.parse(localStorage.getItem("gloompopGallery") || "[]");
  gallery.unshift({
    ...card,
    pulledAt: new Date().toLocaleString()
  });
  localStorage.setItem("gloompopGallery", JSON.stringify(gallery.slice(0, 30)));
}

function renderGallery() {
  const gallery = JSON.parse(localStorage.getItem("gloompopGallery") || "[]");
  const el = document.getElementById("gallery");
  el.innerHTML = "";

  if (gallery.length === 0) {
    el.innerHTML = `<p class="tiny">No cards yet. Draw one.</p>`;
    return;
  }

  gallery.forEach(card => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.innerHTML = `
      <span class="rarity">${card.rarity}</span>
      <h3>${card.name}</h3>
      <p>${card.desc}</p>
      <p class="tiny">${card.pulledAt}</p>
    `;
    el.appendChild(item);
  });
}

function clearGallery() {
  localStorage.removeItem("gloompopGallery");
  renderGallery();
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

startQuiz();
makeFortune();
renderGallery();
