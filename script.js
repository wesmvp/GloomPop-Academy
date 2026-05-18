const STORAGE_KEY = "gloompopAcademyV3";

const rarityClass = {
  Common: "common",
  Uncommon: "uncommon",
  Rare: "rare",
  Epic: "epic",
  Legendary: "legendary",
  Forbidden: "forbidden"
};

const rarityTextClass = {
  Common: "commonText",
  Uncommon: "uncommonText",
  Rare: "rareText",
  Epic: "epicText",
  Legendary: "legendaryText",
  Forbidden: "forbiddenText"
};

const factions = {
  "Angel Bloom": {
    slogan: "Half halo, half bad decision.",
    result:
      "You got Angel Bloom because you need everything to look pretty even when it is actively falling apart. You are the type to say you are fine, then make it everyone’s aesthetic problem."
  },

  "Ink Ghoul": {
    slogan: "Messy, loud, loyal, and allergic to being normal.",
    result:
      "You got Ink Ghoul because you treat rules like rough drafts. You are probably fun, probably a problem, and definitely the reason the bathroom wall has a nickname now."
  },

  "Lovely Hex": {
    slogan: "Cute curse. Worse personality.",
    result:
      "You got Lovely Hex because you weaponize sweetness. You say 'aww' like a threat and somehow make revenge look handmade."
  },

  "DeadHeart": {
    slogan: "Cute, emotional, dramatic, and weirdly dangerous.",
    result:
      "You got DeadHeart because you can turn a normal Tuesday into a tragic romance arc and somehow make everyone else apologize."
  },

  "Dollbite": {
    slogan: "Pretty until the jaw unhinges.",
    result:
      "You got Dollbite because you look harmless in the exact way haunted dolls look harmless. Everyone should have read the warning label."
  },

  "ChalkBorn": {
    slogan: "Haunted notebook energy.",
    result:
      "You got ChalkBorn because your personality is 40% haunted notebook, 40% bad idea, and 20% pretending you meant to do that."
  }
};

const quizQuestions = [
  {
    q: "Your friend says you are being dramatic. You say...",
    a: [
      ["Correct. Finally, someone is paying attention.", "DeadHeart"],
      ["I’m not dramatic, I’m branded.", "Angel Bloom"],
      ["I’ll write that on the wall later.", "Ink Ghoul"],
      ["Say it again but sweeter.", "Lovely Hex"],
      ["My porcelain feelings are cracking.", "Dollbite"],
      ["The chalk predicted this.", "ChalkBorn"]
    ]
  },

  {
    q: "Pick the worst place to have a breakdown.",
    a: [
      ["Under perfect lighting", "Angel Bloom"],
      ["A graffiti-covered stairwell", "Ink Ghoul"],
      ["During a confession you planned badly", "DeadHeart"],
      ["At a cute little tea party that was definitely cursed", "Dollbite"],
      ["In front of a mirror that starts giving advice", "Lovely Hex"],
      ["In detention while the board writes back", "ChalkBorn"]
    ]
  },

  {
    q: "Your toxic trait is...",
    a: [
      ["Turning sadness into an entire identity", "DeadHeart"],
      ["Looking innocent while being the problem", "Angel Bloom"],
      ["Starting chaos then saying it was already like that", "Ink Ghoul"],
      ["Being sweet in a way that makes people nervous", "Lovely Hex"],
      ["Smiling at the exact wrong time", "Dollbite"],
      ["Making jokes during actual danger", "ChalkBorn"]
    ]
  },

  {
    q: "Pick your academy crime.",
    a: [
      ["Stealing the morning announcements", "Angel Bloom"],
      ["Tagging your name on a cursed locker", "Ink Ghoul"],
      ["Writing love notes that count as threats", "DeadHeart"],
      ["Starting a hex chain letter", "Lovely Hex"],
      ["Locking someone inside a dollhouse hallway", "Dollbite"],
      ["Drawing a door and walking through it", "ChalkBorn"]
    ]
  },

  {
    q: "Pick a profile caption.",
    a: [
      ["Still glowing. Still unstable.", "Angel Bloom"],
      ["Sorry about the wall.", "Ink Ghoul"],
      ["I loved once. It became everyone’s issue.", "DeadHeart"],
      ["Be nice or be cursed cutely.", "Lovely Hex"],
      ["Do not tap the glass.", "Dollbite"],
      ["I was absent but my shadow attended.", "ChalkBorn"]
    ]
  },

  {
    q: "Pick a club activity.",
    a: [
      ["Performing like nothing is wrong", "Angel Bloom"],
      ["Making a mess and calling it culture", "Ink Ghoul"],
      ["Crying in formalwear", "DeadHeart"],
      ["Hexing crushes for character development", "Lovely Hex"],
      ["Practicing smiling without blinking", "Dollbite"],
      ["Summoning something from a chalk outline", "ChalkBorn"]
    ]
  },

  {
    q: "People underestimate you because...",
    a: [
      ["You look too cute to be that unstable", "Angel Bloom"],
      ["You act like you don’t care until you very much do", "Ink Ghoul"],
      ["You make pain look fashionable", "DeadHeart"],
      ["You say everything with a heart at the end", "Lovely Hex"],
      ["You stand too still", "Dollbite"],
      ["You seem unserious until the lights flicker", "ChalkBorn"]
    ]
  },

  {
    q: "Your final warning label says...",
    a: [
      ["May cause obsession with aesthetics.", "Angel Bloom"],
      ["Do not leave unattended near paint.", "Ink Ghoul"],
      ["Emotionally flammable.", "DeadHeart"],
      ["Sweetness may contain hexes.", "Lovely Hex"],
      ["Not a toy. Not anymore.", "Dollbite"],
      ["Do not erase.", "ChalkBorn"]
    ]
  }
];

function item(category, name, rarity, desc) {
  return {
    id: `${category}:${name}`,
    category,
    name,
    rarity,
    desc
  };
}

function colorItem(name, rarity, hex, desc) {
  return {
    id: `color:${name}`,
    category: "color",
    name,
    rarity,
    hex,
    desc
  };
}

const curses = [
  item("curse", "Locker Bite", "Common", "Your locker clicks its teeth when someone lies near it."),
  item("curse", "Glitter Cough", "Common", "Every bad excuse comes out sparkly."),
  item("curse", "Mirror Smudge", "Common", "Your reflection is always slightly disappointed."),
  item("curse", "Chalk Fever", "Common", "You leave little white fingerprints on bad decisions."),
  item("curse", "Mascot Stare", "Common", "Mascots turn their heads when you pass."),

  item("curse", "Candy Rot", "Uncommon", "Sweet things spoil faster around you."),
  item("curse", "False Halo", "Uncommon", "You look innocent in photos you should not be in."),
  item("curse", "Doll Blink", "Uncommon", "People swear you moved when nobody looked."),
  item("curse", "Bathroom Oracle", "Uncommon", "Mirrors give you advice, but only terrible advice."),
  item("curse", "Pink Noise", "Uncommon", "Silence around you has a beat."),

  item("curse", "Velvet Curse", "Rare", "Your insults land softly and still ruin people."),
  item("curse", "Neon Bruise", "Rare", "Your aura looks like a pretty bad idea."),
  item("curse", "Porcelain Smile", "Rare", "You smile too calmly when things crack."),
  item("curse", "Static Kiss", "Rare", "Your compliments sound like a warning."),
  item("curse", "Ink Fever", "Rare", "Your name appears in places it should not."),

  item("curse", "Blacklight Heart", "Epic", "Your worst choices glow in the dark."),
  item("curse", "Mascot Possession", "Epic", "Something school-spirited has taken interest in you."),
  item("curse", "Dollhouse Teeth", "Epic", "Small rooms feel hungry around you."),
  item("curse", "Mirror Twin", "Epic", "Your reflection occasionally clocks in without you."),
  item("curse", "Lovebite Hex", "Epic", "Affection around you becomes legally suspicious."),

  item("curse", "The Glitter Plague", "Legendary", "The academy still finds glitter from the last outbreak."),
  item("curse", "The Rotten Halo", "Legendary", "You look holy from far away and expensive up close."),
  item("curse", "The Yearbook Curse", "Legendary", "Every photo of you looks like evidence."),
  item("curse", "The Heartbreak Signal", "Legendary", "People receive emotional damage before you enter."),
  item("curse", "The Graveyard Prom", "Legendary", "Dead things save you a dance."),

  item("curse", "The Mascot Wore My Face", "Forbidden", "No one knows which one of you graduated."),
  item("curse", "The Smile That Stayed", "Forbidden", "You stopped smiling. It did not."),
  item("curse", "I Was Never Enrolled", "Forbidden", "The records insist you are not real."),
  item("curse", "The Locker Under The School", "Forbidden", "It opens only when the bell rings backward."),
  item("curse", "The Bell Rang Back", "Forbidden", "Class ended. Something answered.")
];

const pets = [
  item("pet", "Gumdrop Bat", "Common", "Small, sticky, and emotionally loud."),
  item("pet", "Locker Rat", "Common", "Knows every secret and most lunch schedules."),
  item("pet", "White Bunny", "Common", "Too clean. Definitely guilty."),
  item("pet", "Tiny Goblin", "Common", "Bites ankles and bad vibes."),
  item("pet", "Mirror Toad", "Common", "Croaks your thoughts back incorrectly."),

  item("pet", "Two-Faced Crow", "Uncommon", "One head lies. The other takes notes."),
  item("pet", "Cry Spider", "Uncommon", "Weaves drama into corners."),
  item("pet", "Plush Wolf", "Uncommon", "Soft until it hears gossip."),
  item("pet", "Sticker Slime", "Uncommon", "Leaves cute evidence everywhere."),
  item("pet", "Glitter Snake", "Uncommon", "Shiny, dramatic, venom optional."),
  item("pet", "Hallway Imp", "Uncommon", "Trips people for narrative reasons."),

  item("pet", "Porcelain Crow", "Rare", "Cracks when someone lies."),
  item("pet", "Velvet Snake", "Rare", "Luxury noodle with terrible morals."),
  item("pet", "Neon Gravecat", "Rare", "Purrs near cursed objects."),
  item("pet", "Ink Raccoon", "Rare", "Steals markers and reputations."),
  item("pet", "Mascot Duck", "Rare", "Quacks only during uncomfortable silence."),

  item("pet", "Halo Vulture", "Epic", "Circles over bad relationships."),
  item("pet", "Rat King", "Epic", "A committee of rats wearing one crown."),
  item("pet", "The Bathroom Thing", "Epic", "Lives in stall three. Pays no rent."),
  item("pet", "Graveyard Plush", "Epic", "Still has dirt in the seams."),
  item("pet", "Blacklight Bunny", "Epic", "Only visible during parties and hauntings."),
  item("pet", "Locker Mimic", "Epic", "Pretends to be storage. Eats homework."),

  item("pet", "Prom Night Panda", "Legendary", "Ruined three dances and looked adorable."),
  item("pet", "Saint Parasite", "Legendary", "Blesses you while making things worse."),
  item("pet", "Rotten Imp", "Legendary", "Smells like candy and consequences."),
  item("pet", "The Yearbook Goat", "Legendary", "Chews bad photos into prophecy."),
  item("pet", "Velvet Cerberus", "Legendary", "Three heads. All judgmental."),
  item("pet", "Static Seraph", "Legendary", "A little angel made of radio noise."),

  item("pet", "4 Horsemen", "Forbidden", "They count as one pet for legal reasons."),
  item("pet", "The One Behind The Bell", "Forbidden", "It rings when it wants to be fed."),
  item("pet", "Blackout Boa", "Forbidden", "A snake-shaped absence with teeth."),
  item("pet", "Steam Dragon", "Forbidden", "Hot breath, old internet soul."),
  item("pet", "Death", "Forbidden", "Surprisingly polite. Terrible at fetch.")
];

const colors = [
  colorItem("Gray", "Common", "#9b9b9b", "Plain but usable."),
  colorItem("Lime", "Common", "#b7ff4a", "Bright starter chaos."),
  colorItem("Orange", "Common", "#ff9b42", "Loud hallway energy."),
  colorItem("Light Blue", "Common", "#7fd7ff", "Soft, clean, suspicious."),
  colorItem("Brown", "Common", "#9b6b3f", "Muddy but honest."),

  colorItem("Pink", "Uncommon", "#ff75c8", "Cute enough to be a warning."),
  colorItem("Purple", "Uncommon", "#9b5cff", "Basic witch but effective."),
  colorItem("Teal", "Uncommon", "#35ead2", "Wet neon vibe."),
  colorItem("White", "Uncommon", "#f3f3f3", "Too clean for this school."),
  colorItem("Yellow", "Uncommon", "#ffe45c", "Mascot-adjacent."),

  colorItem("Hot Pink", "Rare", "#ff2ebd", "Postable immediately."),
  colorItem("Cyan", "Rare", "#41e7ff", "Arcade bathroom lighting."),
  colorItem("Violet", "Rare", "#7e35ff", "Very dramatic. Respectfully."),
  colorItem("Crimson", "Rare", "#d7263d", "Looks like trouble got a filter."),
  colorItem("Silver", "Rare", "#c7d0d9", "Cold, shiny, and expensive-looking."),

  colorItem("Black", "Epic", "#050505", "The obvious flex."),
  colorItem("Red", "Epic", "#ff243e", "Aggressive profile behavior."),
  colorItem("Neon Green", "Epic", "#39ff14", "Toxic and proud."),
  colorItem("Royal Purple", "Epic", "#5d21d2", "Villain scholarship color."),
  colorItem("Ice Blue", "Epic", "#9eefff", "Emotionally unavailable but pretty."),

  colorItem("Gold", "Legendary", "#ffd35a", "Everyone knows why this is here."),
  colorItem("Black & Red", "Legendary", "#ff1f3d", "The classic menace combo."),
  colorItem("Pink & Black", "Legendary", "#ff4fd8", "Cute but not safe."),
  colorItem("Purple & Gold", "Legendary", "#d7a8ff", "Royal drama department."),
  colorItem("White & Gold", "Legendary", "#fff1a8", "Angel problem behavior.")
];

const allItems = [...curses, ...pets, ...colors];

let state = loadState();
let quizIndex = 0;
let quizScore = {};

let selected = {
  curse: state.equipped.curse,
  pet: state.equipped.pet,
  color: state.equipped.color
};

function defaultState() {
  return {
    profile: {
      name: "",
      monsterType: "DeadHeart",
      club: "Blackout Cheer",
      faction: null
    },

    inventory: {
      curse: [],
      pet: [],
      color: []
    },

    equipped: {
      curse: null,
      pet: null,
      color: null
    },

    rolls: {
      remaining: 3,
      lastRefresh: Date.now()
    }
  };
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return defaultState();
  }

  try {
    const saved = JSON.parse(raw);
    const fresh = defaultState();

    return {
      ...fresh,
      ...saved,
      profile: {
        ...fresh.profile,
        ...saved.profile
      },
      inventory: {
        ...fresh.inventory,
        ...saved.inventory
      },
      equipped: {
        ...fresh.equipped,
        ...saved.equipped
      },
      rolls: {
        ...fresh.rolls,
        ...saved.rolls
      }
    };
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function showSection(id) {
  document.querySelectorAll(".panel").forEach((panel) => {
    panel.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");

  renderAll();
}

function saveProfile() {
  state.profile.name = document.getElementById("studentName").value.trim();
  state.profile.monsterType = document.getElementById("monsterType").value;
  state.profile.club = document.getElementById("club").value;

  saveState();
  renderAll();
}

function resetPrototype() {
  const yes = confirm("Reset all local prototype data?");

  if (!yes) {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);

  state = defaultState();

  selected = {
    curse: null,
    pet: null,
    color: null
  };

  quizIndex = 0;
  quizScore = {};

  startQuiz();
  renderAll();
}

function renderID() {
  document.getElementById("studentName").value = state.profile.name || "";
  document.getElementById("monsterType").value = state.profile.monsterType;
  document.getElementById("club").value = state.profile.club;

  const equippedCurse = findItem(state.equipped.curse);
  const equippedPet = findItem(state.equipped.pet);
  const equippedColor = findItem(state.equipped.color);

  const accent = equippedColor?.hex || "#ff4fd8";
  document.documentElement.style.setProperty("--id-accent", accent);

  document.getElementById("idName").textContent =
    state.profile.name || "Unnamed Student";

  document.getElementById("idMonster").textContent =
    state.profile.monsterType;

  document.getElementById("idFaction").textContent =
    state.profile.faction || "No Faction";

  document.getElementById("idClub").textContent =
    state.profile.club;

  document.getElementById("idCurse").textContent =
    equippedCurse ? equippedCurse.name : "None";

  document.getElementById("idPet").textContent =
    equippedPet ? equippedPet.name : "None";

  document.getElementById("idColorName").textContent =
    equippedColor ? equippedColor.name : "Default";

  document.getElementById("verifiedTag").textContent =
    state.profile.faction ? "PLACED" : "UNPLACED";

  const faction = factions[state.profile.faction];

  document.getElementById("idQuote").textContent = faction
    ? `“${faction.slogan}”`
    : "“I haven’t been placed yet.”";

  setRarityText("idCurse", equippedCurse?.rarity);
  setRarityText("idPet", equippedPet?.rarity);
  setRarityText("idColorName", equippedColor?.rarity);

  const avatarMap = {
    DeadHeart: "♡",
    "Graffiti Ghoul": "✦",
    LovelyAngel: "✧",
    "Velvet Bat": "🦇",
    ChalkBorn: "☽",
    "Mascot Mutant": "☻",
    "Plush Rot": "✿",
    "Skull Idol": "☠",
    "Moth Kid": "𖤐"
  };

  document.getElementById("avatarIcon").textContent =
    avatarMap[state.profile.monsterType] || "☠";
}

function setRarityText(elementId, rarity) {
  const el = document.getElementById(elementId);

  Object.values(rarityTextClass).forEach((cls) => {
    el.classList.remove(cls);
  });

  if (rarity) {
    el.classList.add(rarityTextClass[rarity]);
  }
}

function startQuiz() {
  if (state.profile.faction) {
    renderQuizLocked();
    return;
  }

  quizIndex = 0;
  quizScore = {};

  renderQuizQuestion();
}

function renderQuizLocked() {
  const locked = document.getElementById("quizLocked");
  const box = document.getElementById("quizBox");

  const faction = state.profile.faction;

  locked.classList.remove("hidden");

  locked.innerHTML = `
    <b>Placement locked:</b> ${faction}<br>
    ${factions[faction].result}
  `;

  box.innerHTML = "";
}

function renderQuizQuestion() {
  const locked = document.getElementById("quizLocked");
  const box = document.getElementById("quizBox");

  locked.classList.add("hidden");

  const question = quizQuestions[quizIndex];

  if (!question) {
    const winner =
      Object.entries(quizScore).sort((a, b) => b[1] - a[1])[0]?.[0] ||
      "ChalkBorn";

    state.profile.faction = winner;

    saveState();

    box.innerHTML = `
      <p>Your official placement is...</p>
      <div class="result-title">${winner}</div>
      <p>${factions[winner].result}</p>
      <button class="primary" onclick="showSection('idSection')">
        View Student ID
      </button>
    `;

    renderID();

    return;
  }

  box.innerHTML = `<h3>${quizIndex + 1}/8 — ${question.q}</h3>`;

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

function refreshRollsIfNeeded() {
  const now = Date.now();
  const day = 24 * 60 * 60 * 1000;

  if (now - state.rolls.lastRefresh >= day) {
    state.rolls.remaining = 3;
    state.rolls.lastRefresh = now;
    saveState();
  }
}

function rollItem() {
  refreshRollsIfNeeded();

  if (state.rolls.remaining <= 0) {
    renderRollCard(null, true, false);
    renderRolls();
    return;
  }

  state.rolls.remaining--;

  const rolled = weightedRoll();

  const owned = state.inventory[rolled.category].includes(rolled.id);

  if (!owned) {
    state.inventory[rolled.category].push(rolled.id);
  }

  saveState();

  renderRollCard(rolled, false, owned);
  renderAll();
}

function weightedRoll() {
  const pool = [];

  allItems.forEach((item) => {
    const weights = {
      Common: 45,
      Uncommon: 28,
      Rare: 15,
      Epic: 8,
      Legendary: 3,
      Forbidden: 1
    };

    const weight = weights[item.rarity] || 1;

    for (let i = 0; i < weight; i++) {
      pool.push(item);
    }
  });

  return randomFrom(pool);
}

function renderRollCard(rolled, noRolls = false, duplicate = false) {
  const rarityEl = document.getElementById("rollRarity");
  const nameEl = document.getElementById("rollName");
  const categoryEl = document.getElementById("rollCategory");
  const descEl = document.getElementById("rollDesc");

  if (noRolls) {
    rarityEl.textContent = "LOCKED";
    rarityEl.className = "rarity forbidden";

    nameEl.textContent = "No rolls left";
    categoryEl.textContent = "Come back after the refresh.";
    descEl.textContent = nextRefreshText();

    return;
  }

  if (!rolled) {
    return;
  }

  rarityEl.textContent = duplicate ? "DUPLICATE" : rolled.rarity;
  rarityEl.className = duplicate
    ? "rarity forbidden"
    : `rarity ${rarityClass[rolled.rarity]}`;

  nameEl.textContent = rolled.name;
  categoryEl.textContent = `Category: ${labelCategory(rolled.category)}`;

  descEl.textContent = duplicate
    ? "Duplicate. You got nothing, and yes, the roll is still gone."
    : rolled.desc;
}

function renderRolls() {
  refreshRollsIfNeeded();

  document.getElementById("rollsLeft").textContent =
    state.rolls.remaining;

  document.getElementById("rollResetText").textContent =
    nextRefreshText();
}

function nextRefreshText() {
  const day = 24 * 60 * 60 * 1000;
  const msLeft = Math.max(0, day - (Date.now() - state.rolls.lastRefresh));

  const hours = Math.floor(msLeft / (60 * 60 * 1000));
  const minutes = Math.floor(
    (msLeft % (60 * 60 * 1000)) / (60 * 1000)
  );

  return `Rolls refresh in ${hours}h ${minutes}m.`;
}

function renderCustomize() {
  selected.curse = state.equipped.curse;
  selected.pet = state.equipped.pet;
  selected.color = state.equipped.color;

  renderCustomCategory("customCurses", "curse");
  renderCustomCategory("customPets", "pet");
  renderCustomCategory("customColors", "color");
}

function renderCustomCategory(elementId, category) {
  const el = document.getElementById(elementId);
  const ids = state.inventory[category];

  el.innerHTML = "";

  if (ids.length === 0) {
    el.innerHTML = `<p class="tiny">No ${labelCategory(category).toLowerCase()} owned yet.</p>`;
    return;
  }

  ids
    .map(findItem)
    .filter(Boolean)
    .forEach((item) => {
      const box = document.createElement("div");

      box.className = `item-box ${
        selected[category] === item.id ? "selected" : ""
      }`;

      box.onclick = () => {
        selected[category] =
          selected[category] === item.id ? null : item.id;

        renderCustomCategory(elementId, category);
      };

      box.innerHTML = `
        <span class="rarity ${rarityClass[item.rarity]}">${item.rarity}</span>
        <span class="item-name">${item.name}</span>
        <p class="tiny">${item.desc}</p>
      `;

      el.appendChild(box);
    });
}

function applyCustomization() {
  state.equipped.curse = selected.curse;
  state.equipped.pet = selected.pet;
  state.equipped.color = selected.color;

  saveState();

  renderAll();
  showSection("idSection");
}

function clearEquipped() {
  selected = {
    curse: null,
    pet: null,
    color: null
  };

  state.equipped = {
    curse: null,
    pet: null,
    color: null
  };

  saveState();
  renderAll();
}

function renderCollection() {
  renderCollectionCategory("collectionCurses", "curse");
  renderCollectionCategory("collectionPets", "pet");
  renderCollectionCategory("collectionColors", "color");

  document.getElementById("curseCount").textContent =
    state.inventory.curse.length;

  document.getElementById("petCount").textContent =
    state.inventory.pet.length;

  document.getElementById("colorCount").textContent =
    state.inventory.color.length;
}

function renderCollectionCategory(elementId, category) {
  const el = document.getElementById(elementId);
  const ids = state.inventory[category];

  el.innerHTML = "";

  if (ids.length === 0) {
    el.innerHTML = `<p class="tiny">Nothing here yet.</p>`;
    return;
  }

  ids
    .map(findItem)
    .filter(Boolean)
    .forEach((item) => {
      const box = document.createElement("div");

      box.className = "gallery-item";

      box.innerHTML = `
        <span class="rarity ${rarityClass[item.rarity]}">${item.rarity}</span>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
      `;

      el.appendChild(box);
    });
}

function findItem(id) {
  if (!id) {
    return null;
  }

  return allItems.find((item) => item.id === id) || null;
}

function labelCategory(category) {
  const labels = {
    curse: "Curse",
    pet: "Pet",
    color: "ID Color"
  };

  return labels[category] || category;
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function renderAll() {
  renderID();
  renderRolls();
  renderCustomize();
  renderCollection();

  if (state.profile.faction) {
    renderQuizLocked();
  } else {
    const quizBox = document.getElementById("quizBox");

    if (!quizBox.innerHTML.trim()) {
      startQuiz();
    }
  }
}

startQuiz();
renderAll();
