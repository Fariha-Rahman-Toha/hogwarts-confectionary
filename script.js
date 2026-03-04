// =============================================
// GAME DATA
// =============================================

const INGREDIENTS = {
  base: [
    { id: 'sponge', emoji: '🟡', name: 'Sponge' },
    { id: 'choco', emoji: '🟤', name: 'Chocolate' },
    { id: 'vanilla', emoji: '☁️', name: 'Vanilla' },
    { id: 'lemon', emoji: '🍋', name: 'Lemon' },
  ],
  flavour: [
    { id: 'butterbeer', emoji: '🍺', name: 'Butterbeer' },
    { id: 'pumpkin', emoji: '🎃', name: 'Pumpkin' },
    { id: 'licorice', emoji: '⚫', name: 'Licorice' },
    { id: 'raspberry', emoji: '🍇', name: 'Raspberry' },
  ],
  frosting: [
    { id: 'cream', emoji: '🍦', name: 'Cream' },
    { id: 'fudge', emoji: '🍫', name: 'Fudge' },
    { id: 'caramel', emoji: '🟠', name: 'Caramel' },
    { id: 'lavender', emoji: '🫐', name: 'Blueberry' },
  ],
  topping: [
    { id: 'lightning', emoji: '⚡', name: 'Lightning' },
    { id: 'stars', emoji: '⭐', name: 'Stars' },
    { id: 'potion', emoji: '🧪', name: 'Potion' },
    { id: 'wand', emoji: '🪄', name: 'Wand' },
    { id: 'quaffle', emoji: '🟡', name: 'Quidditch' },
  ]
};

const SLOTS = ['base', 'flavour', 'frosting', 'topping'];
const SLOT_LABELS = ['Base Layer', 'Flavour', 'Frosting', 'Topping'];
const MAX_ATTEMPTS = 6;

const WIN_MESSAGES = [
  "You have mastered the art of magical confectionery. Professor Dumbledore is most impressed.",
  "Splendid work! Even Madam Pomfrey couldn't resist a slice.",
  "Extraordinary! Your cake would win the Triwizard Bake-Off.",
  "Brilliant! Ten points to your house for such culinary wizardry!"
];

const LOSE_MESSAGES = [
  "The cake collapsed. Even the house elves look disappointed.",
  "Alas! The Sorting Hat refuses to taste this creation.",
  "A Dementor sneezed on it. Perhaps try again?",
  "Peeves has claimed this cake. Better luck next time."
];

// =============================================
// RIDDLES
// Each riddle maps to a specific [base, flavour, frosting, topping] combo
// =============================================

const RIDDLES = [
  {
    code: ['sponge','butterbeer','cream','lightning'],
    text: "A golden cloud rose from the Three Broomsticks, soft and airy as a summer breeze. The innkeeper's famous brew seeped into every crumb. A blanket of white silk was draped over all — and above, a bolt of sky-fire cracked the darkness."
  },
  {
    code: ['sponge','butterbeer','cream','stars'],
    text: "Light as a Hufflepuff's laugh, the sponge baked golden. Into it went the warmth of the inn's most beloved brew. The pale silk frosting was spread with a gentle hand. At last, tiny lights of the night sky were scattered upon the top."
  },
  {
    code: ['sponge','butterbeer','cream','wand'],
    text: "Soft golden layers rose like morning over Hogwarts. The barrel's amber magic was folded within. A cloak of ivory cream sealed the warmth inside. Atop it all rested the instrument of every wizard's power."
  },
  {
    code: ['sponge','butterbeer','cream','quaffle'],
    text: "A featherlight base baked to a warm yellow hue. The Three Broomsticks' finest poured in with care. Pale frosting like fresh snowfall covered all. The golden Quidditch ball of the Chasers crowned the peak."
  },
  {
    code: ['sponge','butterbeer','fudge','lightning'],
    text: "Golden layers rose in the castle kitchen at dawn. The beloved amber brew of Hogsmeade swirled within. A rich dark mantle of fudge was drawn across. Then, like Dumbledore's warning, a bolt of lightning was placed upon the top."
  },
  {
    code: ['sponge','butterbeer','fudge','stars'],
    text: "An airy golden foundation — baked as light as a feather. Warm butterscotch ale was stirred into the batter. A deep, dark cloak of fudge embraced it whole. Above, the constellations Dumbledore loved sparkled."
  },
  {
    code: ['sponge','butterbeer','caramel','wand'],
    text: "She found a golden realm, soft and yielding as first light. There, a frothy amber potion had been stirred in. Over all flowed a river of burnt amber sweetness. A wooden instrument of power rested on top."
  },
  {
    code: ['sponge','pumpkin','lavender','stars'],
    text: "A pale golden field lay beneath the harvest moon. Into it crept the spirit of the great orange lantern. A haze of purple twilight settled as the frosting. Under the midnight sky, tiny stars were pinned like jewels."
  },
  {
    code: ['choco','licorice','fudge','lightning'],
    text: "Dark as the Forbidden Forest at midnight, the base was set. Into it went the coiling black serpent's own flavour. A deep earthen mantle of fudge sealed the darkness in. At the peak — the storm's own signature crackled."
  },
  {
    code: ['choco','licorice','fudge','wand'],
    text: "The darkest of all bases was chosen by a Slytherin hand. The twisting, coiling root of shadow was blended within. Then fudge, dark as dungeon stone, was spread all over. And atop: the very wand that cast the first spell."
  },
  {
    code: ['choco','licorice','caramel','stars'],
    text: "A slab of dark brown earth formed the foundation. The serpent's candy flavour wound its way through the batter. Amber rivers of caramel ran over the top like rivers of gold. Stars, stolen from the astronomy tower, were the final touch."
  },
  {
    code: ['choco','raspberry','lavender','potion'],
    text: "Deep brown soil gave the cake its roots. Small purple fruits, plucked from the vine, burst within. A dusky violet frosting bloomed across the surface. A bubbling green vial — Slughorn's pride — was carefully placed on top."
  },
  {
    code: ['choco','pumpkin','fudge','lightning'],
    text: "A rich dark base, worthy of a dungeon feast. Into it was pressed the spirit of Halloween's own lantern. Dark fudge, thick as dragon hide, was smoothed across. Above it all, a jagged bolt of light split the sky."
  },
  {
    code: ['choco','pumpkin','lavender','wand'],
    text: "Darkness formed the bedrock of this creation. The great orange keeper of the harvest flavoured its soul. A field of purple blooms was spread gently over the top. And a slender wooden twig of power pointed skyward."
  },
  {
    code: ['vanilla','butterbeer','cream','potion'],
    text: "As white and pure as a Patronus, the base was readied. The golden drink of Hogsmeade breathed warmth into it. A veil of pale cream was drawn over the whole. And Snape's prized vial, shimmering green, perched at the very top."
  },
  {
    code: ['vanilla','raspberry','lavender','stars'],
    text: "A pale and gentle canvas awaited its destiny. The wild purple berries of the Forbidden Forest were crushed in. Twilight-coloured lavender frosting settled across the top like dusk. Stars — the very ones Trelawney read — adorned the peak."
  },
  {
    code: ['vanilla','pumpkin','cream','quaffle'],
    text: "Pure and unadorned, the base was cool as marble. Into it the harvest gourd's spirit breathed warm spice. A veil of white silk frosting was swept over. And finally, the golden sphere of the Chasers was set in pride of place."
  },
  {
    code: ['vanilla','licorice','caramel','lightning'],
    text: "Pale as a ghost, the foundation was set in the oven. Dark coils of the black root lent their depth. Over all poured a slow river of amber sweetness. Then, with a crack, the storm's jagged mark appeared."
  },
  {
    code: ['lemon','pumpkin','lavender','stars'],
    text: "Off she goes to the lemon grove and fell upon a pumpkin. She found a velvety lavender land underneath. Upon the lights of a starry night she looked upward — and the sky was the final decoration."
  },
  {
    code: ['lemon','raspberry','cream','wand'],
    text: "A bright citrus sun baked into the very base. Small purple-red fruits tumbled in, tart and wild. The whole was wrapped in the softest white frosting. And the wizard's most faithful tool was laid gently on top."
  },
  {
    code: ['lemon','butterbeer','caramel','quaffle'],
    text: "A zest of sunlight formed the golden base. The warm amber brew from Madam Rosmerta's tap swirled within. Rivers of burnt sugar caramel cascaded over the sides. The Quidditch Quaffle — golden as the sun — crowned the peak."
  },
  {
    code: ['lemon','licorice','fudge','potion'],
    text: "Bright as a Lumos charm, the citrus base was set. Into it the dark serpentine flavour wound like shadow. A deep fudge mantle cloaked the brightness beneath. And Slughorn's mysterious vial was the very last addition."
  },
  {
    code: ['sponge','raspberry','lavender','potion'],
    text: "A soft golden sponge, light as a first-year's robes. Wild purple berries from beyond the forest edge were folded in. The dusky lavender frosting settled like twilight over the hills. A bottled secret from the potions dungeon stood guard atop."
  },
  {
    code: ['choco','butterbeer','lavender','quaffle'],
    text: "Dark earthy depths formed the foundation of this cake. Into it went the amber warmth of Hogsmeade's finest. A haze of violet lavender settled across the surface. And the golden sphere — sought by Chasers across the pitch — finished it all."
  },
];

// =============================================
// GAME STATE
// =============================================

let secretCode = [];
let currentGuess = [null, null, null, null];
let attempts = 0;
let score = 0;
let round = 1;
let best = 0;
let gameOver = false;
let historyLog = [];
let clues = [];

// =============================================
// INIT
// =============================================

function init() {
  // Pick a random riddle and use its code as the secret
  const riddle = RIDDLES[Math.floor(Math.random() * RIDDLES.length)];
  secretCode = [...riddle.code];
  document.getElementById('riddleBox').textContent = riddle.text;

  currentGuess = [null, null, null, null];
  attempts = 0;
  gameOver = false;
  historyLog = [];
  clues = [];

  renderShelves();
  renderSlots();
  renderAttempts();
  renderHistory();
  renderClueLog();
  updateStats();
  document.getElementById('submitBtn').disabled = true;
  hideFeedback();
}

function resetGame() {
  score = 0;
  round = 1;
  best = 0;
  document.getElementById('loseScreen').style.display = 'none';
  init();
}

function nextRound() {
  round++;
  document.getElementById('winScreen').style.display = 'none';
  init();
}

// =============================================
// RENDER
// =============================================

function renderShelves() {
  SLOTS.forEach(slot => {
    const container = document.getElementById(`shelf-${slot}`);
    container.innerHTML = '';
    INGREDIENTS[slot].forEach(ing => {
      const btn = document.createElement('button');
      btn.className = 'ingredient-btn';
      btn.id = `ing-${ing.id}`;
      btn.innerHTML = `<span class="ing-emoji">${ing.emoji}</span><span class="ing-name">${ing.name}</span>`;
      btn.onclick = () => addIngredient(slot, ing.id);
      container.appendChild(btn);
    });
  });
}

function renderSlots() {
  const container = document.getElementById('cakeSlots');
  container.innerHTML = '';
  SLOTS.forEach((slot, i) => {
    const div = document.createElement('div');
    div.className = 'cake-slot' + (currentGuess[i] ? ' filled' : '');
    div.id = `slot-${i}`;
    div.onclick = () => clearSlot(i);

    const labelEl = document.createElement('span');
    labelEl.className = 'slot-label';
    labelEl.textContent = SLOT_LABELS[i];

    if (currentGuess[i]) {
      const ing = getIngredientById(slot, currentGuess[i]);
      div.innerHTML = `<span class="slot-label">${SLOT_LABELS[i]}</span><span class="slot-content">${ing.emoji}</span><span class="slot-text">${ing.name}</span>`;
    } else {
      div.innerHTML = `<span class="slot-label">${SLOT_LABELS[i]}</span><span style="font-size:0.7rem;color:rgba(201,168,76,0.25)">click ingredient below</span>`;
      const indicator = document.createElement('div');
      indicator.className = 'active-slot-indicator';
      div.appendChild(indicator);
    }

    container.appendChild(div);
  });

  const allFilled = currentGuess.every(g => g !== null);
  document.getElementById('submitBtn').disabled = !allFilled;
}

function renderAttempts() {
  const container = document.getElementById('attempts');
  container.innerHTML = '';
  for (let i = 0; i < MAX_ATTEMPTS; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart' + (i >= (MAX_ATTEMPTS - attempts) ? ' lost' : '');
    heart.textContent = '🩸';
    container.appendChild(heart);
  }
}

function renderHistory() {
  const container = document.getElementById('history');
  container.innerHTML = '';
  historyLog.forEach(entry => {
    const row = document.createElement('div');
    row.className = 'history-row';

    const guessSpan = document.createElement('div');
    guessSpan.className = 'history-guess';
    entry.guess.forEach((id, i) => {
      const ing = getIngredientById(SLOTS[i], id);
      guessSpan.innerHTML += `<span title="${ing.name}">${ing.emoji}</span>`;
    });

    const resultSpan = document.createElement('div');
    resultSpan.className = 'history-result';
    entry.result.forEach(r => {
      const dot = document.createElement('div');
      dot.className = `dot ${r}`;
      resultSpan.appendChild(dot);
    });

    row.appendChild(guessSpan);
    row.appendChild(resultSpan);
    container.appendChild(row);
  });
  container.scrollTop = container.scrollHeight;
}

function updateStats() {
  document.getElementById('score').textContent = score;
  document.getElementById('round').textContent = round;
  document.getElementById('best').textContent = best;
}

// =============================================
// GAME LOGIC
// =============================================

function getIngredientById(slot, id) {
  return INGREDIENTS[slot].find(i => i.id === id) || { emoji: '❓', name: '?' };
}

function addIngredient(slot, id) {
  const slotIndex = SLOTS.indexOf(slot);
  if (currentGuess[slotIndex] !== null) {
    // Replace
    currentGuess[slotIndex] = id;
  } else {
    currentGuess[slotIndex] = id;
  }
  renderSlots();
}

function clearSlot(index) {
  currentGuess[index] = null;
  renderSlots();
}

function submitGuess() {
  if (gameOver) return;
  if (!currentGuess.every(g => g !== null)) return;

  attempts++;
  const result = evaluateGuess(currentGuess, secretCode);

  historyLog.push({ guess: [...currentGuess], result });
  const clueText = generateClue(currentGuess, result, attempts);
  clues.push(clueText);
  renderHistory();
  renderClueLog();
  renderAttempts();
  renderSlotResults(result);

  if (result.every(r => r === 'correct')) {
    // WIN
    const pts = Math.max(10, (MAX_ATTEMPTS - attempts + 1) * 20);
    score += pts;
    if (score > best) best = score;
    updateStats();
    setTimeout(() => showWin(pts), 800);
    gameOver = true;
  } else if (attempts >= MAX_ATTEMPTS) {
    // LOSE
    setTimeout(() => showLose(), 800);
    gameOver = true;
  } else {
    showFeedback(result);
    // Reset guess
    setTimeout(() => {
      currentGuess = [null, null, null, null];
      renderSlots();
    }, 600);
  }
}

function evaluateGuess(guess, secret) {
  const result = Array(4).fill('wrong');
  const secretCopy = [...secret];
  const guessCopy = [...guess];

  // First pass: exact matches
  for (let i = 0; i < 4; i++) {
    if (guessCopy[i] === secretCopy[i]) {
      result[i] = 'correct';
      secretCopy[i] = null;
      guessCopy[i] = null;
    }
  }

  // Second pass: misplaced
  for (let i = 0; i < 4; i++) {
    if (guessCopy[i] !== null) {
      const j = secretCopy.indexOf(guessCopy[i]);
      if (j !== -1) {
        result[i] = 'misplaced';
        secretCopy[j] = null;
      }
    }
  }

  return result;
}

function renderSlotResults(result) {
  result.forEach((r, i) => {
    const slot = document.getElementById(`slot-${i}`);
    if (slot) {
      slot.classList.add(r === 'correct' ? 'correct' : r === 'misplaced' ? 'filled' : 'wrong');
    }
  });
}

function showFeedback(result) {
  const correct = result.filter(r => r === 'correct').length;
  const misplaced = result.filter(r => r === 'misplaced').length;

  let msg = '';
  if (correct === 0 && misplaced === 0) {
    msg = "None of those ingredients are in the secret recipe...";
  } else if (correct === 3) {
    msg = "So close! One more ingredient to find...";
  } else if (correct > 0 && misplaced > 0) {
    msg = `${correct} in the right place, ${misplaced} in the wrong slot — keep brewing!`;
  } else if (correct > 0) {
    msg = `${correct} ingredient${correct > 1 ? 's' : ''} perfectly placed!`;
  } else {
    msg = `${misplaced} right ingredient${misplaced > 1 ? 's' : ''}, wrong slot${misplaced > 1 ? 's' : ''}!`;
  }

  const el = document.getElementById('feedback');
  el.textContent = msg;
  el.className = 'feedback show ' + (correct > 0 ? 'success' : 'fail');
}

function hideFeedback() {
  const el = document.getElementById('feedback');
  el.className = 'feedback';
}

function showWin(pts) {
  const msg = WIN_MESSAGES[Math.floor(Math.random() * WIN_MESSAGES.length)];
  document.getElementById('winMsg').textContent = msg;
  document.getElementById('winScore').textContent = `+${pts} House Points earned!`;
  document.getElementById('winScreen').style.display = 'flex';
  createSparkles();
}

function showLose() {
  const msg = LOSE_MESSAGES[Math.floor(Math.random() * LOSE_MESSAGES.length)];
  document.getElementById('loseMsg').textContent = msg;

  const answer = secretCode.map((id, i) => getIngredientById(SLOTS[i], id).emoji).join(' → ');
  document.getElementById('loseAnswer').textContent = `The secret was: ${answer}`;
  document.getElementById('loseScreen').style.display = 'flex';
}

function createSparkles() {
  const container = document.getElementById('sparkles');
  container.innerHTML = '';
  const symbols = ['⭐', '✨', '⚡', '🌟', '💫', '🔮'];
  for (let i = 0; i < 20; i++) {
    const el = document.createElement('div');
    el.className = 'sparkle';
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left = Math.random() * 100 + '%';
    el.style.animationDuration = (3 + Math.random() * 4) + 's';
    el.style.animationDelay = (Math.random() * 3) + 's';
    el.style.fontSize = (0.8 + Math.random()) + 'rem';
    container.appendChild(el);
  }
}

function generateClue(guess, result, attemptNum) {
  const correctCount = result.filter(r => r === 'correct').length;
  const misplacedCount = result.filter(r => r === 'misplaced').length;
  const wrongCount = result.filter(r => r === 'wrong').length;

  // Build specific clue messages based on what happened
  const lines = [];

  // Identify confirmed correct ingredients and their slots
  result.forEach((r, i) => {
    const ing = getIngredientById(SLOTS[i], guess[i]);
    if (r === 'correct') {
      lines.push(`The ${SLOT_LABELS[i]} is indeed ${ing.name} ${ing.emoji} — perfectly placed!`);
    }
  });

  // Identify misplaced
  result.forEach((r, i) => {
    const ing = getIngredientById(SLOTS[i], guess[i]);
    if (r === 'misplaced') {
      lines.push(`${ing.name} ${ing.emoji} is in the recipe, but not as the ${SLOT_LABELS[i]}.`);
    }
  });

  // Identify ingredients confirmed absent
  const absentNames = [];
  result.forEach((r, i) => {
    const ing = getIngredientById(SLOTS[i], guess[i]);
    if (r === 'wrong') absentNames.push(`${ing.name} ${ing.emoji}`);
  });
  if (absentNames.length > 0) {
    lines.push(`${absentNames.join(', ')} ${absentNames.length === 1 ? 'is' : 'are'} not part of the secret recipe.`);
  }

  return { attemptNum, lines };
}

function renderClueLog() {
  const container = document.getElementById('clueLog');
  const empty = document.getElementById('clueEmpty');
  container.innerHTML = '';

  if (clues.length === 0) {
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  clues.forEach(clue => {
    const entry = document.createElement('div');
    entry.className = 'clue-entry';
    const numSpan = `<span class="clue-num">ATTEMPT ${clue.attemptNum}</span>`;
    entry.innerHTML = numSpan + clue.lines.join('<br>');
    container.appendChild(entry);
  });

  container.scrollTop = container.scrollHeight;
}

// =============================================
// START
// =============================================
init();