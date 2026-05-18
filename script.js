const STORAGE_KEY = "gloompopAcademyV4";

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

const rarityScore = {
  Common: 5,
  Uncommon: 15,
  Rare: 40,
  Epic: 100,
  Legendary: 250,
  Forbidden: 700
};

const monsterTypes = [
  "DeadHeart",
  "Graffiti Ghoul",
  "LovelyAngel",
  "Velvet Bat",
  "ChalkBorn",
  "Mascot Mutant",
  "Plush Rot",
  "Skull Idol",
  "Moth Kid"
];

const factions = {
  "Angel Bloom": {
    slogan: "Half halo, half bad decision.",
    result:
      "You got Angel Bloom. You care about presentation, image, and making even chaos look intentional. You probably say you are fine and then redesign your entire life around one bad mood."
  },

  "Ink Ghoul": {
    slogan: "Messy, loud, loyal, and allergic to being normal.",
    result:
      "You got Ink Ghoul. You are independent, reactive, and hard to control. You like people who feel real, not polished, and you would rather make a mess than pretend everything is cute."
  },

  "Lovely Hex": {
    slogan: "Cute curse. Worse personality.",
    result:
      "You got Lovely Hex. You are sweet when you want to be, but you notice everything. You remember little details, good and bad, and you know exactly how to make something feel personal."
  },

  "DeadHeart": {
    slogan: "Cute, emotional, dramatic, and weirdly dangerous.",
    result:
      "You got DeadHeart. You feel things hard and pretend you do not. You are romantic, intense, and probably turn normal situations into emotional lore without meaning to."
  },

  "Dollbite": {
    slogan: "Pretty until the jaw unhinges.",
    result:
      "You got Dollbite. You are controlled on the outside and strange underneath. People may think they have you figured out, but they are usually working with very outdated information."
  },

  "ChalkBorn": {
    slogan: "Haunted notebook energy.",
    result:
      "You got ChalkBorn. You are observant, weirdly calm, and good at finding patterns. You may act unserious, but you are usually paying more attention than everyone else."
  }
};

const quizQuestions = [
  {
    q: "When a group project starts going badly, what do you usually do?",
    a: [
      ["Try to make the final result still look good, even if it is a disaster behind the scenes.", "Angel Bloom"],
      ["Take over the part nobody else wants and do it your own way.", "Ink Ghoul"],
      ["Keep track of who caused the problem, even if you do not say it out loud.", "Lovely Hex"],
      ["Get frustrated because you care more than you wanted to.", "DeadHeart"],
      ["Stay quiet, fix your part, and let everyone underestimate you.", "Dollbite"],
      ["Notice the pattern of what went wrong and remember it for next time.", "ChalkBorn"]
    ]
  },

  {
    q: "What kind of compliment actually works on you?",
    a: [
      ["That your style or taste is good.", "Angel Bloom"],
      ["That you are real and not fake.", "Ink Ghoul"],
      ["That you are thoughtful or hard to read.", "Lovely Hex"],
      ["That you care deeply, even when you hide it.", "DeadHeart"],
      ["That you seem calm but interesting.", "Dollbite"],
      ["That you are smarter than people expected.", "ChalkBorn"]
    ]
  },

  {
    q: "Pick the most annoying type of person.",
    a: [
      ["Someone with no sense of presentation.", "Angel Bloom"],
      ["Someone who acts better than everyone.", "Ink Ghoul"],
      ["Someone who forgets what you did for them.", "Lovely Hex"],
      ["Someone who acts like feelings are embarrassing.", "DeadHeart"],
      ["Someone who thinks quiet means weak.", "Dollbite"],
      ["Someone who never thinks before talking.", "ChalkBorn"]
    ]
  },

  {
    q: "If your profile went viral, what would it probably be for?",
    a: [
      ["The aesthetic being way better than expected.", "Angel Bloom"],
      ["A chaotic post that somehow everyone agrees with.", "Ink Ghoul"],
      ["A cute post with a slightly threatening undertone.", "Lovely Hex"],
      ["Something emotional that people pretend did not hit them.", "DeadHeart"],
      ["A picture that looks normal until people notice one weird detail.", "Dollbite"],
      ["A joke or observation that is way too accurate.", "ChalkBorn"]
    ]
  },

  {
    q: "What do you usually do when someone hurts your feelings?",
    a: [
      ["Act fine and make yourself look even better.", "Angel Bloom"],
      ["Distance yourself and stop caring loudly.", "Ink Ghoul"],
      ["Remember exactly what happened and adjust how you treat them.", "Lovely Hex"],
      ["Overthink it even if you know you should not.", "DeadHeart"],
      ["Get quiet and become harder to reach.", "Dollbite"],
      ["Analyze why it bothered you before reacting.", "ChalkBorn"]
    ]
  },

  {
    q: "Pick the best kind of friend.",
    a: [
      ["Someone who hypes you up and makes life feel bigger.", "Angel Bloom"],
      ["Someone loyal who does not act fake around you.", "Ink Ghoul"],
      ["Someone who notices small things and remembers them.", "Lovely Hex"],
      ["Someone who understands your moods without making it weird.", "DeadHeart"],
      ["Someone calm, strange, and secretly funny.", "Dollbite"],
      ["Someone smart who can talk about random stuff for hours.", "ChalkBorn"]
    ]
  },

  {
    q: "What is your worst habit?",
    a: [
      ["Caring too much about how things look.", "Angel Bloom"],
      ["Rejecting things before they can reject you.", "Ink Ghoul"],
      ["Keeping score in your head.", "Lovely Hex"],
      ["Making emotions bigger by replaying them.", "DeadHeart"],
      ["Acting unaffected when you are not.", "Dollbite"],
      ["Thinking so much that you miss the simple answer.", "ChalkBorn"]
    ]
  },

  {
    q: "What kind of room would you feel most comfortable in?",
    a: [
      ["A bright, decorated room that feels like a music video.", "Angel Bloom"],
      ["A messy room with posters, paint, and stuff everywhere.", "Ink Ghoul"],
      ["A cute room with candles, mirrors, and hidden details.", "Lovely Hex"],
      ["A dark cozy room with emotional lighting.", "DeadHeart"],
      ["A clean room with old dolls, soft things, and something slightly off.", "Dollbite"],
      ["A quiet room with notebooks, chalkboards, and weird little collections.", "ChalkBorn"]
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
let currentCustomizeCategory = "curse";
let currentCollectionCategory = "curse";

let selected = {
  curse: state.equipped.curse,
  pet: state.equipped.pet,
  color: state.equipped.color
};

function defaultState() {
  return {
    profile: {
      name: "",
      monsterType: "Unrolled",
      monsterChoices: [],
      monsterRollsUsed: false,
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
  state.profile.club = document.getElementById("club").value;

  const monsterSelect = document.getElementById("monsterType");
  state.profile.monsterType = monsterSelect.value || "Unrolled";

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
  currentCustomizeCategory = "curse";
  currentCollectionCategory = "curse";

  startQuiz();
  renderAll();
  showSection("homeSection");
}

function rollMonsterOptions() {
  if (state.profile.monsterRollsUsed) {
    document.getElementById("monsterRollText").textContent =
      "Monster choices are already rolled. Pick one of your 3 options.";
    return;
  }

  const shuffled = [...monsterTypes].sort(() => Math.random() - 0.5);
  state.profile.monsterChoices = shuffled.slice(0, 3);
  state.profile.monsterType = state.profile.monsterChoices[0];
  state.profile.monsterRollsUsed = true;

  saveState();
  renderAll();
}

function chooseMonster(monster) {
  if (!state.profile.monsterChoices.includes(monster)) {
    return;
  }

  state.profile.monsterType = monster;
  saveState();
  renderAll();
}

function renderMonsterSetup() {
  const select = document.getElementById("monsterType");
  const choicesBox = document.getElementById("monsterChoices");
  const text = document.getElementById("monsterRollText");

  select.innerHTML = "";

  const choices =
    state.profile.monsterChoices.length > 0
      ? state.profile.monsterChoices
      : ["Unrolled"];

  choices.forEach((monster) => {
    const option = document.createElement("option");
    option.value = monster;
    option.textContent = monster;
    select.appendChild(option);
  });

  select.value = state.profile.monsterType || choices[0];

  choicesBox.innerHTML = "";

  if (state.profile.monsterChoices.length === 0) {
    text.textContent = "Roll 3 monster choices, then pick one.";
    return;
  }

  text.textContent = "Choose one of your 3 monster options.";

  state.profile.monsterChoices.forEach((monster) => {
    const btn = document.createElement("button");
    btn.className =
      "monster-choice" +
      (state.profile.monsterType === monster ? " selected" : "");

    btn.textContent = monster;

    btn.onclick = () => {
      chooseMonster(monster);
    };

    choicesBox.appendChild(btn);
  });
}

function renderID() {
  document.getElementById("studentName").value = state.profile.name || "";
  document.getElementById("club").value = state.profile.club;

  renderMonsterSetup();

  const equippedCurse = findItem(state.equipped.curse);
  const equippedPet = findItem(state.equipped.pet);
  const equippedColor = findItem(state.equipped.color);

  const accent = equippedColor?.hex || "#ff4fd8";
  document.documentElement.style.setProperty("--id-accent", accent);

  const name = state.profile.name || "Unnamed Student";
  const monster = state.profile.monsterType || "Unrolled";
  const faction = state.profile.faction || "No Faction";
  const club = state.profile.club;
  const curse = equippedCurse ? equippedCurse.name : "None";
  const pet = equippedPet ? equippedPet.name : "None";
  const colorName = equippedColor ? equippedColor.name : "Default";
  const popularity = calculatePopularityScore();

  document.getElementById("idName").textContent = name;
  document.getElementById("idMonster").textContent = monster;
  document.getElementById("idFaction").textContent = faction;
  document.getElementById("idClub").textContent = club;
  document.getElementById("idCurse").textContent = curse;
  document.getElementById("idPet").textContent = pet;
  document.getElementById("idColorName").textContent = colorName;
  document.getElementById("idPopularityScore").textContent = popularity;

  document.getElementById("verifiedTag").textContent =
    state.profile.faction ? "PLACED" : "UNPLACED";

  const factionData = factions[state.profile.faction];

  document.getElementById("idQuote").textContent = factionData
    ? `“${factionData.slogan}”`
    : "“I haven’t been placed yet.”";

  setRarityText("idCurse", equippedCurse?.rarity);
  setRarityText("idPet", equippedPet?.rarity);
  setRarityText("idColorName", equippedColor?.rarity);

  const avatar = getMonsterAvatar(monster);
  document.getElementById("avatarIcon").textContent = avatar;

  renderMiniID({
    name,
    monster,
    faction,
    curse,
    pet,
    avatar,
    popularity
  });
}

function renderMiniID(data) {
  document.getElementById("miniName").textContent = data.name;
  document.getElementById("miniMonster").textContent = data.monster;
  document.getElementById("miniFaction").textContent = data.faction;
  document.getElementById("miniCurse").textContent = data.curse;
  document.getElementById("miniPet").textContent = data.pet;
  document.getElementById("miniAvatarIcon").textContent = data.avatar;

  document.getElementById("miniVerifiedTag").textContent =
    state.profile.faction ? "PLACED" : "UNPLACED";

  document.getElementById("homePopularityScore").textContent = data.popularity;
  document.getElementById("rankingPreviewScore").textContent = data.popularity;
  document.getElementById("rankingScore").textContent = data.popularity;

  const displayName = state.profile.name || "You";
  document.getElementById("rankingPreviewName").textContent = displayName;
  document.getElementById("rankingName").textContent = displayName;
}

function getMonsterAvatar(monster) {
  const avatarMap = {
    DeadHeart: "♡",
    "Graffiti Ghoul": "✦",
    LovelyAngel: "✧",
    "Velvet Bat": "🦇",
    ChalkBorn: "☽",
    "Mascot Mutant": "☻",
    "Plush Rot": "✿",
    "Skull Idol": "☠",
    "Moth Kid": "𖤐",
    Unrolled: "?"
  };

  return avatarMap[monster] || "☠";
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

  const shuffledAnswers = [...question.a].sort(() => Math.random() - 0.5);

  box.innerHTML = `<h3>${quizIndex + 1}/8 — ${question.q}</h3>`;

  shuffledAnswers.forEach(([text, faction]) => {
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
  animateRollButton();
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

function animateRollButton() {
  const btn = document.getElementById("rollButton");

  if (!btn) {
    return;
  }

  btn.classList.remove("roll-pop");

  void btn.offsetWidth;

  btn.classList.add("roll-pop");

  setTimeout(() => {
    btn.classList.remove("roll-pop");
    btn.blur();
  }, 260);
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

  document.getElementById("homeRollsLeft").textContent =
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

function showCustomizeCategory(category) {
  currentCustomizeCategory = category;

  document.querySelectorAll(".tab-button").forEach((btn) => {
    btn.classList.remove("active");
  });

  const buttons = document.querySelectorAll(".tab-button");

  if (category === "curse") buttons[0].classList.add("active");
  if (category === "pet") buttons[1].classList.add("active");
  if (category === "color") buttons[2].classList.add("active");

  renderCustomize();
}

function renderCustomize() {
  selected.curse = state.equipped.curse;
  selected.pet = state.equipped.pet;
  selected.color = state.equipped.color;

  const title = document.getElementById("customizeCurrentTitle");
  title.textContent = labelCategoryPlural(currentCustomizeCategory);

  renderCustomCategory("customizeGrid", currentCustomizeCategory);
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

function showCollectionCategory(category) {
  currentCollectionCategory = category;

  document.querySelectorAll(".collection-tab-button").forEach((btn) => {
    btn.classList.remove("active");
  });

  const buttons = document.querySelectorAll(".collection-tab-button");

  if (category === "curse") buttons[0].classList.add("active");
  if (category === "pet") buttons[1].classList.add("active");
  if (category === "color") buttons[2].classList.add("active");

  renderCollection();
}

function renderCollection() {
  const title = document.getElementById("collectionCurrentTitle");
  title.textContent = labelCategoryPlural(currentCollectionCategory);

  renderCollectionCategory("collectionGrid", currentCollectionCategory);

  document.getElementById("curseCount").textContent =
    state.inventory.curse.length;

  document.getElementById("petCount").textContent =
    state.inventory.pet.length;

  document.getElementById("colorCount").textContent =
    state.inventory.color.length;

  const totalItems =
    state.inventory.curse.length +
    state.inventory.pet.length +
    state.inventory.color.length;

  document.getElementById("homeCollectionCount").textContent = totalItems;
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

function calculatePopularityScore() {
  let score = 0;

  ["curse", "pet", "color"].forEach((category) => {
    state.inventory[category].forEach((id) => {
      const ownedItem = findItem(id);

      if (ownedItem) {
        score += rarityScore[ownedItem.rarity] || 0;
      }
    });
  });

  const equippedCurse = findItem(state.equipped.curse);
  const equippedPet = findItem(state.equipped.pet);
  const equippedColor = findItem(state.equipped.color);

  if (equippedCurse) score += Math.floor((rarityScore[equippedCurse.rarity] || 0) * 0.25);
  if (equippedPet) score += Math.floor((rarityScore[equippedPet.rarity] || 0) * 0.25);
  if (equippedColor) score += Math.floor((rarityScore[equippedColor.rarity] || 0) * 0.25);

  if (state.profile.faction) score += 25;
  if (state.profile.monsterType && state.profile.monsterType !== "Unrolled") score += 15;
  if (state.profile.name) score += 10;

  return score;
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

function labelCategoryPlural(category) {
  const labels = {
    curse: "Curses",
    pet: "Pets",
    color: "ID Colors"
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
