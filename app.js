// --- Tab Navigation ---
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.calculator');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// --- Temperature Unit Toggle ---
const tempUnit = { current: 'C' };
const toggleBtns = document.querySelectorAll('.toggle[data-unit]');

toggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    toggleBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    tempUnit.current = btn.dataset.unit;
    document.getElementById('temp-ref-unit').textContent = tempUnit.current === 'C' ? '°C' : '°F';
    // Update default reference temp
    const refInput = document.getElementById('temp-reference');
    refInput.value = tempUnit.current === 'C' ? '20' : '68';
  });
});

// --- Helper: show result ---
function showResult(elementId, content) {
  const el = document.getElementById(elementId);
  el.innerHTML = content;
  el.classList.add('visible');
}

function showError(elementId, message) {
  showResult(elementId, `<div class="result-error">${message}</div>`);
}

// --- 1. Temperature Correction ---
// Uses a simplified OIML-based correction factor.
// The correction is approximately: for each degree C above 20°C, ABV reads
// about 0.4% lower than actual (varies with ABV, this is simplified).
function temperatureCorrection(readingABV, tempC, refTempC) {
  // Simplified correction factor (works reasonably well for spirits 20-80% ABV)
  // More accurate tables exist (OIML R-22) but this gives a good approximation.
  const delta = tempC - refTempC;
  // Correction factor varies with ABV, approximate as linear
  // At ~40% ABV, correction is ~0.4% per °C
  // At ~70% ABV, correction is ~0.35% per °C
  const factor = 0.40 - (readingABV - 40) * 0.001;
  const corrected = readingABV + (delta * Math.max(factor, 0.25));
  return Math.round(corrected * 10) / 10;
}

document.getElementById('temp-calc').addEventListener('click', () => {
  const reading = parseFloat(document.getElementById('temp-reading').value);
  let temp = parseFloat(document.getElementById('temp-actual').value);
  let refTemp = parseFloat(document.getElementById('temp-reference').value);

  if (isNaN(reading) || isNaN(temp) || isNaN(refTemp)) {
    return showError('temp-result', 'Please fill in all fields.');
  }
  if (reading < 0 || reading > 100) {
    return showError('temp-result', 'ABV must be between 0 and 100.');
  }

  // Convert to Celsius if needed
  if (tempUnit.current === 'F') {
    temp = (temp - 32) * 5 / 9;
    refTemp = (refTemp - 32) * 5 / 9;
  }

  const corrected = temperatureCorrection(reading, temp, refTemp);
  const diff = Math.round((corrected - reading) * 10) / 10;
  const sign = diff >= 0 ? '+' : '';

  showResult('temp-result', `
    <div class="result-label">Corrected ABV</div>
    <div class="result-value">${corrected}%</div>
    <div class="result-detail">
      Correction: ${sign}${diff}%<br>
      Hydrometer read ${reading}% at ${parseFloat(document.getElementById('temp-actual').value)}°${tempUnit.current}
    </div>
  `);
});

// --- 2. Dilution Calculator ---
// V1 * ABV1 = V2 * ABV2 => V2 = V1 * ABV1 / ABV2 => Water = V2 - V1
document.getElementById('dil-calc').addEventListener('click', () => {
  const vol = parseFloat(document.getElementById('dil-volume').value);
  const abv = parseFloat(document.getElementById('dil-abv').value);
  const target = parseFloat(document.getElementById('dil-target').value);

  if (isNaN(vol) || isNaN(abv) || isNaN(target)) {
    return showError('dil-result', 'Please fill in all fields.');
  }
  if (target >= abv) {
    return showError('dil-result', 'Target ABV must be lower than current ABV.');
  }
  if (target <= 0) {
    return showError('dil-result', 'Target ABV must be greater than 0.');
  }
  if (vol <= 0) {
    return showError('dil-result', 'Volume must be greater than 0.');
  }

  const finalVol = Math.round(((vol * abv) / target) * 100) / 100;
  const waterToAdd = Math.round((finalVol - vol) * 100) / 100;

  showResult('dil-result', `
    <div class="result-label">Water to Add</div>
    <div class="result-value">${waterToAdd} L</div>
    <div class="result-detail">
      Final volume: ${finalVol} L at ${target}% ABV<br>
      Starting: ${vol} L at ${abv}%
    </div>
  `);
});

// --- 3. Blending Calculator ---
// (V1 * ABV1 + V2 * ABV2) / (V1 + V2) = result ABV
document.getElementById('blend-calc').addEventListener('click', () => {
  const v1 = parseFloat(document.getElementById('blend-vol1').value);
  const a1 = parseFloat(document.getElementById('blend-abv1').value);
  const v2 = parseFloat(document.getElementById('blend-vol2').value);
  const a2 = parseFloat(document.getElementById('blend-abv2').value);

  if (isNaN(v1) || isNaN(a1) || isNaN(v2) || isNaN(a2)) {
    return showError('blend-result', 'Please fill in all fields.');
  }
  if (v1 <= 0 || v2 <= 0) {
    return showError('blend-result', 'Volumes must be greater than 0.');
  }

  const totalVol = Math.round((v1 + v2) * 100) / 100;
  const resultABV = Math.round(((v1 * a1 + v2 * a2) / (v1 + v2)) * 10) / 10;

  showResult('blend-result', `
    <div class="result-label">Resulting ABV</div>
    <div class="result-value">${resultABV}%</div>
    <div class="result-detail">
      Total volume: ${totalVol} L<br>
      Spirit A: ${v1} L at ${a1}% + Spirit B: ${v2} L at ${a2}%
    </div>
  `);
});

// --- 4. ABV / Proof Converter ---
// ABV % = Gay-Lussac (GL) = US Proof / 2
document.getElementById('conv-calc').addEventListener('click', () => {
  const value = parseFloat(document.getElementById('conv-value').value);
  const from = document.querySelector('input[name="conv-from"]:checked').value;

  if (isNaN(value) || value < 0) {
    return showError('conv-result', 'Please enter a valid positive number.');
  }

  let abv, proof, gl;

  if (from === 'abv') {
    abv = value;
    proof = value * 2;
    gl = value;
  } else if (from === 'proof') {
    abv = value / 2;
    proof = value;
    gl = value / 2;
  } else {
    abv = value;
    proof = value * 2;
    gl = value;
  }

  abv = Math.round(abv * 100) / 100;
  proof = Math.round(proof * 100) / 100;
  gl = Math.round(gl * 100) / 100;

  showResult('conv-result', `
    <div class="result-label">Conversion Results</div>
    <div class="result-value">${abv}% ABV</div>
    <div class="result-detail">
      US Proof: ${proof}<br>
      Gay-Lussac (GL): ${gl}°
    </div>
  `);
});

// --- Service Worker Registration ---
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').catch(() => {});
}
