// --- Translations ---
const translations = {
  en: {
    title: 'Spirit Calculator',
    subtitle: 'Alcohol Content Tools',
    tab_density: 'Table 1',
    tab_temp: 'Table 2',
    tab_volume: 'Table 4',
    tab_dilution: 'Dilution',
    tab_blending: 'Blending',
    tab_converter: 'ABV / Proof',
    btn_calculate: 'Calculate',
    btn_convert: 'Convert',
    // Temperature
    temp_title: 'Temperature Correction',
    temp_desc: 'Correct your spirometer reading to the true ABV at 20°C based on liquid temperature.',
    temp_table_label: 'Lookup Table',
    temp_table_1: 'Table 1',
    temp_table_2: 'Table 2',
    temp_reading_label: 'Spirometer Reading (%)',
    temp_reading_ph: 'e.g. 65.0',
    temp_liquid_label: 'Liquid Temperature',
    temp_liquid_ph: 'e.g. 25',
    // Dilution
    dil_title: 'Dilution Calculator',
    dil_desc: 'Calculate how much water to add to reach your target ABV.',
    dil_volume_label: 'Current Volume (liters)',
    dil_volume_ph: 'e.g. 5.0',
    dil_abv_label: 'Current ABV (%)',
    dil_abv_ph: 'e.g. 70.0',
    dil_target_label: 'Target ABV (%)',
    dil_target_ph: 'e.g. 40.0',
    // Blending
    blend_title: 'Blending Calculator',
    blend_desc: 'Mix two spirits and find the resulting ABV.',
    blend_spirit_a: 'Spirit A',
    blend_spirit_b: 'Spirit B',
    blend_vol_label: 'Volume (liters)',
    blend_vol_ph: 'e.g. 3.0',
    blend_abv_label: 'ABV (%)',
    blend_abv_ph: 'e.g. 60.0',
    // Converter
    conv_title: 'ABV / Proof Converter',
    conv_desc: 'Convert between ABV%, US Proof, and Gay-Lussac (GL).',
    conv_value_label: 'Value',
    conv_value_ph: 'e.g. 40',
    conv_from_label: 'Convert from',
    conv_abv: 'ABV %',
    conv_proof: 'US Proof',
    conv_gl: 'Gay-Lussac',
    // Errors
    err_fill_all: 'Please fill in all fields.',
    err_abv_range: 'ABV must be between 0 and 100.',
    err_temp_range: 'Temperature must be between 0°C and 35°C.',
    err_out_of_range: 'Value is outside the table range.',
    err_target_lower: 'Target ABV must be lower than current ABV.',
    err_target_zero: 'Target ABV must be greater than 0.',
    err_vol_zero: 'Volume must be greater than 0.',
    err_valid_number: 'Please enter a valid positive number.',
    err_table_not_loaded: 'Table {n} is not available.',
    // Table 1: density lookup
    t1_title: 'Density Lookup',
    t1_desc: 'Find the density of a water-alcohol solution at a given temperature using Table 1.',
    t1_abv_label: 'Alcohol Content at 20°C (%)',
    t1_abv_ph: 'e.g. 40.0',
    t1_temp_label: 'Temperature (°C)',
    t1_temp_ph: 'e.g. 20',
    res_density: 'Density',
    // Volume calculator
    vol_title: 'Pure Alcohol Volume',
    vol_desc: 'Calculate the volume of pure ethyl alcohol in a solution using Table 4 multipliers.',
    vol_volume_label: 'Volume of Solution (liters)',
    vol_volume_ph: 'e.g. 10.0',
    vol_abv_label: 'Alcohol Content at 20°C (%)',
    vol_abv_ph: 'e.g. 40.0',
    vol_temp_label: 'Liquid Temperature (°C)',
    vol_temp_ph: 'e.g. 20',
    // Results
    res_corrected_abv: 'Corrected ABV',
    res_correction: 'Correction',
    res_hydrometer_read: 'Spirometer read',
    res_at: 'at',
    res_via_table: 'via Table',
    res_multiplier: 'Multiplier',
    res_pure_alcohol: 'Pure Alcohol Volume',
    res_water_to_add: 'Water to Add',
    res_final_volume: 'Final volume',
    res_starting: 'Starting',
    res_resulting_abv: 'Resulting ABV',
    res_total_volume: 'Total volume',
    res_conversion: 'Conversion Results',
  },
  ka: {
    title: 'სპირტის კალკულატორი',
    subtitle: 'ალკოჰოლის შემცველობის ხელსაწყოები',
    tab_density: 'ცხრილი 1',
    tab_temp: 'ცხრილი 2',
    tab_volume: 'ცხრილი 4',
    tab_dilution: 'განზავება',
    tab_blending: 'შერევა',
    tab_converter: 'ალკ. / პრუფი',
    btn_calculate: 'გამოთვლა',
    btn_convert: 'კონვერტაცია',
    // Temperature
    temp_title: 'ტემპერატურის კორექცია',
    temp_desc: 'შეასწორეთ სპირტომეტრის ჩვენება 20°C-ზე რეალურ ალკ.%-ზე სითხის ტემპერატურის მიხედვით.',
    temp_table_label: 'საძიებო ცხრილი',
    temp_table_1: 'ცხრილი 1',
    temp_table_2: 'ცხრილი 2',
    temp_reading_label: 'სპირტომეტრის ჩვენება (%)',
    temp_reading_ph: 'მაგ. 65.0',
    temp_liquid_label: 'სითხის ტემპერატურა',
    temp_liquid_ph: 'მაგ. 25',
    // Dilution
    dil_title: 'განზავების კალკულატორი',
    dil_desc: 'გამოთვალეთ რამდენი წყალი დაამატოთ სასურველ ალკ.%-მდე.',
    dil_volume_label: 'მიმდინარე მოცულობა (ლიტრი)',
    dil_volume_ph: 'მაგ. 5.0',
    dil_abv_label: 'მიმდინარე ალკ. (%)',
    dil_abv_ph: 'მაგ. 70.0',
    dil_target_label: 'სასურველი ალკ. (%)',
    dil_target_ph: 'მაგ. 40.0',
    // Blending
    blend_title: 'შერევის კალკულატორი',
    blend_desc: 'შეურიეთ ორი სპირტი და გაიგეთ საბოლოო ალკ.%.',
    blend_spirit_a: 'სპირტი A',
    blend_spirit_b: 'სპირტი B',
    blend_vol_label: 'მოცულობა (ლიტრი)',
    blend_vol_ph: 'მაგ. 3.0',
    blend_abv_label: 'ალკ. (%)',
    blend_abv_ph: 'მაგ. 60.0',
    // Converter
    conv_title: 'ალკ. / პრუფის კონვერტორი',
    conv_desc: 'გადაიყვანეთ ალკ.%, US პრუფი და გეი-ლუსაკი (GL) ერთმანეთში.',
    conv_value_label: 'მნიშვნელობა',
    conv_value_ph: 'მაგ. 40',
    conv_from_label: 'გადაიყვანეთ',
    conv_abv: 'ალკ. %',
    conv_proof: 'US პრუფი',
    conv_gl: 'გეი-ლუსაკი',
    // Errors
    err_fill_all: 'გთხოვთ შეავსოთ ყველა ველი.',
    err_abv_range: 'ალკ.% უნდა იყოს 0-დან 100-მდე.',
    err_temp_range: 'ტემპერატურა უნდა იყოს 0°C-დან 35°C-მდე.',
    err_out_of_range: 'მნიშვნელობა ცხრილის დიაპაზონს გარეთ.',
    err_target_lower: 'სასურველი ალკ.% უნდა იყოს მიმდინარეზე ნაკლები.',
    err_target_zero: 'სასურველი ალკ.% უნდა იყოს 0-ზე მეტი.',
    err_vol_zero: 'მოცულობა უნდა იყოს 0-ზე მეტი.',
    err_valid_number: 'გთხოვთ შეიყვანოთ დადებითი რიცხვი.',
    err_table_not_loaded: 'ცხრილი {n} მიუწვდომელია.',
    // Table 1: density lookup
    t1_title: 'სიმკვრივის ცხრილი',
    t1_desc: 'ცხრილი 1-ის გამოყენებით განსაზღვრეთ წყლის-სპირტის ხსნარის სიმკვრივე მოცემულ ტემპერატურაზე.',
    t1_abv_label: 'ალკოჰოლის შემცველობა 20°C-ზე (%)',
    t1_abv_ph: 'მაგ. 40.0',
    t1_temp_label: 'ტემპერატურა (°C)',
    t1_temp_ph: 'მაგ. 20',
    res_density: 'სიმკვრივე',
    // Volume calculator
    vol_title: 'სუფთა სპირტის მოცულობა',
    vol_desc: 'გამოთვალეთ სუფთა ეთილის სპირტის მოცულობა ხსნარში ცხრილი 4-ის გამამრავლებლების გამოყენებით.',
    vol_volume_label: 'ხსნარის მოცულობა (ლიტრი)',
    vol_volume_ph: 'მაგ. 10.0',
    vol_abv_label: 'ალკოჰოლის შემცველობა 20°C-ზე (%)',
    vol_abv_ph: 'მაგ. 40.0',
    vol_temp_label: 'სითხის ტემპერატურა (°C)',
    vol_temp_ph: 'მაგ. 20',
    // Results
    res_corrected_abv: 'შესწორებული ალკ.',
    res_correction: 'კორექცია',
    res_hydrometer_read: 'სპირტომეტრმა აჩვენა',
    res_at: '',
    res_via_table: 'ცხრილი',
    res_multiplier: 'გამამრავლებელი',
    res_pure_alcohol: 'სუფთა სპირტის მოცულობა',
    res_water_to_add: 'დასამატებელი წყალი',
    res_final_volume: 'საბოლოო მოცულობა',
    res_starting: 'საწყისი',
    res_resulting_abv: 'საბოლოო ალკ.',
    res_total_volume: 'ჯამური მოცულობა',
    res_conversion: 'კონვერტაციის შედეგი',
  }
};

let currentLang = localStorage.getItem('spirit-calc-lang') || 'en';

function t(key) {
  return translations[currentLang][key] || translations.en[key] || key;
}

function applyLanguage() {
  document.documentElement.lang = currentLang === 'ka' ? 'ka' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  // Clear results when switching language
  document.querySelectorAll('.result').forEach(el => {
    el.classList.remove('visible');
    el.innerHTML = '';
  });
}

// --- Language Switcher ---
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentLang = btn.dataset.lang;
    localStorage.setItem('spirit-calc-lang', currentLang);
    applyLanguage();
  });
});

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
  });
});

// --- Helper: parse numeric input (accepts both . and , as decimal separator) ---
function parseNum(id) {
  return parseFloat(document.getElementById(id).value.replace(',', '.'));
}

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

// Table 2 is always available via TABLE2 constant (table2.js).
// Table 1 is loaded from JSON when available.
const loadedTables = { '1': null };
let selectedTable = localStorage.getItem('spirit-calc-table') || '2';

function initTableSelector() {
  document.querySelectorAll('.toggle[data-table]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.table === selectedTable);
    btn.addEventListener('click', () => {
      if (btn.disabled) return;
      document.querySelectorAll('.toggle[data-table]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedTable = btn.dataset.table;
      localStorage.setItem('spirit-calc-table', selectedTable);
      const result = document.getElementById('temp-result');
      result.classList.remove('visible');
      result.innerHTML = '';
    });
  });
}

async function loadTables() {
  // Table 2 is hardcoded in table2.js — no fetch needed.
  // Try to load Table 1 from JSON.
  await fetch('./tables/table 1 ცხრილი 1/table1_data.json')
    .then(r => { if (!r.ok) throw new Error(); return r.json(); })
    .then(data => { loadedTables['1'] = data; })
    .catch(() => { loadedTables['1'] = null; });

  document.querySelectorAll('.toggle[data-table]').forEach(btn => {
    const key = btn.dataset.table;
    const available = key === '2' || loadedTables[key] !== null;
    btn.disabled = !available;
    if (!available && btn.dataset.table === selectedTable) {
      selectedTable = '2';
      localStorage.setItem('spirit-calc-table', selectedTable);
      document.querySelectorAll('.toggle[data-table]').forEach(b => {
        b.classList.toggle('active', b.dataset.table === selectedTable);
      });
    }
  });
}

// Fast Table 2 lookup using preloaded TABLE2 constant (from table2.js)
const _T2_READINGS = Object.keys(TABLE2).map(parseFloat).sort((a, b) => a - b);

function table2Lookup(spirometerReading, tempC) {
  let loIdx = 0;
  for (let i = 0; i < _T2_READINGS.length; i++) {
    if (_T2_READINGS[i] <= spirometerReading) loIdx = i;
  }
  const hiIdx = (_T2_READINGS[loIdx] < spirometerReading && loIdx < _T2_READINGS.length - 1)
    ? loIdx + 1 : loIdx;
  const sLo = _T2_READINGS[loIdx], sHi = _T2_READINGS[hiIdx];
  const sFrac = sLo === sHi ? 0 : (spirometerReading - sLo) / (sHi - sLo);

  const tLo = Math.floor(tempC);
  const tHi = tempC > tLo ? Math.min(35, tLo + 1) : tLo;
  const tFrac = tempC - tLo;

  function getCell(s, t) {
    const row = TABLE2[s.toFixed(1)];
    if (!row) return null;
    const v = row[t === 35 ? '+35' : String(t)];
    return (v !== undefined && v !== null) ? v : null;
  }

  function lerpT(s) {
    const a = getCell(s, tLo), b = getCell(s, tHi);
    if (a === null && b === null) return null;
    if (a === null) return b;
    if (b === null) return a;
    return a + (b - a) * tFrac;
  }

  const vLo = lerpT(sLo), vHi = lerpT(sHi);
  if (vLo === null && vHi === null) return null;
  if (vLo === null) return Math.round(vHi * 100) / 100;
  if (vHi === null) return Math.round(vLo * 100) / 100;
  return Math.round((vLo + (vHi - vLo) * sFrac) * 100) / 100;
}

// Generic bilinear interpolation for JSON-based tables (Table 1, etc.)
function linearInterp(x, x1, x2, y1, y2) {
  if (x1 === x2) return y1;
  return y1 + (y2 - y1) * (x - x1) / (x2 - x1);
}

function getTableValue(data, spirReading, tempC) {
  const rKeyMap = {};
  Object.keys(data).forEach(k => { rKeyMap[Number(k)] = k; });
  const rNums = Object.keys(rKeyMap).map(Number).sort((a, b) => b - a);

  if (rNums.length === 0) return null;

  const rMin = rNums[rNums.length - 1];
  const rMax = rNums[0];
  const r = Math.max(rMin, Math.min(rMax, spirReading));

  let rLo = rMin, rHi = rMax;
  for (let i = 0; i < rNums.length - 1; i++) {
    if (rNums[i] >= r && rNums[i + 1] <= r) {
      rHi = rNums[i];
      rLo = rNums[i + 1];
      break;
    }
  }

  function getValueAtReading(rNum) {
    const row = data[rKeyMap[rNum]];
    if (!row) return null;
    const tEntries = Object.entries(row)
      .map(([k, v]) => ({ t: parseFloat(k), v }))
      .filter(e => e.v !== null && !isNaN(e.v))
      .sort((a, b) => b.t - a.t);
    if (tEntries.length === 0) return null;
    const tClamped = Math.max(tEntries[tEntries.length - 1].t, Math.min(tEntries[0].t, tempC));
    if (tClamped >= tEntries[0].t) return tEntries[0].v;
    if (tClamped <= tEntries[tEntries.length - 1].t) return tEntries[tEntries.length - 1].v;
    for (let i = 0; i < tEntries.length - 1; i++) {
      if (tEntries[i].t >= tClamped && tEntries[i + 1].t <= tClamped) {
        return linearInterp(tClamped, tEntries[i + 1].t, tEntries[i].t, tEntries[i + 1].v, tEntries[i].v);
      }
    }
    return null;
  }

  if (rLo === rHi) return getValueAtReading(rLo);
  const vLo = getValueAtReading(rLo);
  const vHi = getValueAtReading(rHi);
  if (vLo === null && vHi === null) return null;
  if (vLo === null) return vHi;
  if (vHi === null) return vLo;
  return linearInterp(r, rLo, rHi, vLo, vHi);
}

document.getElementById('temp-calc').addEventListener('click', () => {
  const reading = parseNum('temp-reading');
  let temp = parseNum('temp-actual');

  if (isNaN(reading) || isNaN(temp)) {
    return showError('temp-result', t('err_fill_all'));
  }
  if (reading < 0.5 || reading > 105) {
    return showError('temp-result', t('err_abv_range'));
  }

  if (tempUnit.current === 'F') temp = (temp - 32) * 5 / 9;
  temp = Math.round(temp * 10) / 10;

  if (temp < 0 || temp > 35) {
    return showError('temp-result', t('err_temp_range'));
  }

  let corrected;
  if (selectedTable === '2') {
    corrected = table2Lookup(reading, temp);
  } else {
    const table = loadedTables[selectedTable];
    if (!table) {
      return showError('temp-result', t('err_table_not_loaded').replace('{n}', selectedTable));
    }
    corrected = getTableValue(table.data, reading, temp);
  }

  if (corrected === null) {
    return showError('temp-result', t('err_out_of_range'));
  }

  const diff = Math.round((corrected - reading) * 100) / 100;
  const sign = diff >= 0 ? '+' : '';
  const displayTemp = parseNum('temp-actual');

  showResult('temp-result', `
    <div class="result-label">${t('res_corrected_abv')}</div>
    <div class="result-value">${corrected.toFixed(2)}%</div>
    <div class="result-detail">
      ${t('res_correction')}: ${sign}${diff.toFixed(2)}%<br>
      ${t('res_hydrometer_read')} ${reading}% ${t('res_at')} ${displayTemp}°${tempUnit.current}<br>
      ${t('res_via_table')} ${selectedTable}
    </div>
  `);
});

// --- 1. Density Lookup (Table 1) ---
let table1Lookup = null;

fetch('./tables/table 2 ცხრილი 2/alcohol_density_table_complete.json')
  .then(r => { if (!r.ok) throw new Error(); return r.json(); })
  .then(data => { table1Lookup = buildDensityLookup(data); })
  .catch(() => { table1Lookup = null; });

function buildDensityLookup(data) {
  // Flatten all pages into: { alcohol_percent: { temperature: density } }
  const lookup = {};
  for (const page of data.tables) {
    const percentages = page.alcohol_percent;
    for (const [tempKey, densities] of Object.entries(page.data)) {
      const temp = parseFloat(tempKey);
      if (isNaN(temp)) continue;
      for (let i = 0; i < percentages.length; i++) {
        const pct = percentages[i];
        if (!lookup[pct]) lookup[pct] = {};
        // First value wins for any duplicate temperature keys
        if (lookup[pct][temp] === undefined) lookup[pct][temp] = densities[i];
      }
    }
  }
  return lookup;
}

function getDensity(abv, tempC) {
  if (!table1Lookup) return null;
  const allPcts = Object.keys(table1Lookup).map(Number).sort((a, b) => a - b);
  if (allPcts.length === 0) return null;

  const p = Math.max(allPcts[0], Math.min(allPcts[allPcts.length - 1], abv));
  let pLo = allPcts[0], pHi = allPcts[allPcts.length - 1];
  for (let i = 0; i < allPcts.length - 1; i++) {
    if (allPcts[i] <= p && allPcts[i + 1] >= p) { pLo = allPcts[i]; pHi = allPcts[i + 1]; break; }
  }

  function densityAtPct(pct) {
    const tm = table1Lookup[pct];
    if (!tm) return null;
    const temps = Object.keys(tm).map(Number).sort((a, b) => a - b);
    const t = Math.max(temps[0], Math.min(temps[temps.length - 1], tempC));
    if (t <= temps[0]) return tm[temps[0]];
    if (t >= temps[temps.length - 1]) return tm[temps[temps.length - 1]];
    for (let i = 0; i < temps.length - 1; i++) {
      if (temps[i] <= t && temps[i + 1] >= t) {
        return tm[temps[i]] + (tm[temps[i + 1]] - tm[temps[i]]) * (t - temps[i]) / (temps[i + 1] - temps[i]);
      }
    }
    return null;
  }

  const dLo = densityAtPct(pLo);
  const dHi = densityAtPct(pHi);
  if (dLo === null && dHi === null) return null;
  if (dLo === null) return dHi;
  if (dHi === null) return dLo;
  if (pLo === pHi) return dLo;
  return dLo + (dHi - dLo) * (p - pLo) / (pHi - pLo);
}

document.getElementById('t1-calc').addEventListener('click', () => {
  const abv = parseNum('t1-abv');
  const temp = parseNum('t1-temp');

  if (isNaN(abv) || isNaN(temp)) {
    return showError('t1-result', t('err_fill_all'));
  }
  if (abv < 0 || abv > 100) {
    return showError('t1-result', t('err_abv_range'));
  }
  if (!table1Lookup) {
    return showError('t1-result', t('err_table_not_loaded').replace('{n}', '1'));
  }

  const density = getDensity(abv, temp);
  if (density === null) {
    return showError('t1-result', t('err_out_of_range'));
  }

  showResult('t1-result', `
    <div class="result-label">${t('res_density')}</div>
    <div class="result-value">${density.toFixed(5)} g/mL</div>
    <div class="result-detail">
      ${abv}% ${t('res_at')} ${temp}°C<br>
      ${t('res_via_table')} 1
    </div>
  `);
});

// --- 2. Pure Alcohol Volume Calculator (Table 4) ---
let table4Data = null;

fetch('./tables/table 2 ცხრილი 2/table4_data.json')
  .then(r => { if (!r.ok) throw new Error(); return r.json(); })
  .then(data => { table4Data = data; })
  .catch(() => { table4Data = null; });

document.getElementById('vol-calc').addEventListener('click', () => {
  const vol = parseNum('vol-volume');
  const abv = parseNum('vol-abv');
  const temp = parseNum('vol-temp');

  if (isNaN(vol) || isNaN(abv) || isNaN(temp)) {
    return showError('vol-result', t('err_fill_all'));
  }
  if (vol <= 0) {
    return showError('vol-result', t('err_vol_zero'));
  }
  if (!table4Data) {
    return showError('vol-result', t('err_table_not_loaded').replace('{n}', '4'));
  }

  const multiplier = getTableValue(table4Data.data, abv, temp);
  if (multiplier === null) {
    return showError('vol-result', t('err_out_of_range'));
  }

  const multiplierRounded = Math.round(multiplier * 10000) / 10000;
  const pureAlcohol = Math.round(vol * multiplier * 1000) / 1000;

  showResult('vol-result', `
    <div class="result-label">${t('res_pure_alcohol')}</div>
    <div class="result-value">${pureAlcohol} L</div>
    <div class="result-detail">
      ${t('res_multiplier')}: ${multiplierRounded}<br>
      ${vol} L × ${multiplierRounded} (${t('res_via_table')} 4)
    </div>
  `);
});

// --- 3. Dilution Calculator ---
document.getElementById('dil-calc').addEventListener('click', () => {
  const vol = parseNum('dil-volume');
  const abv = parseNum('dil-abv');
  const target = parseNum('dil-target');

  if (isNaN(vol) || isNaN(abv) || isNaN(target)) {
    return showError('dil-result', t('err_fill_all'));
  }
  if (target >= abv) {
    return showError('dil-result', t('err_target_lower'));
  }
  if (target <= 0) {
    return showError('dil-result', t('err_target_zero'));
  }
  if (vol <= 0) {
    return showError('dil-result', t('err_vol_zero'));
  }

  const finalVol = Math.round(((vol * abv) / target) * 100) / 100;
  const waterToAdd = Math.round((finalVol - vol) * 100) / 100;

  showResult('dil-result', `
    <div class="result-label">${t('res_water_to_add')}</div>
    <div class="result-value">${waterToAdd} L</div>
    <div class="result-detail">
      ${t('res_final_volume')}: ${finalVol} L ${t('res_at')} ${target}% ABV<br>
      ${t('res_starting')}: ${vol} L ${t('res_at')} ${abv}%
    </div>
  `);
});

// --- 4. Blending Calculator ---
document.getElementById('blend-calc').addEventListener('click', () => {
  const v1 = parseNum('blend-vol1');
  const a1 = parseNum('blend-abv1');
  const v2 = parseNum('blend-vol2');
  const a2 = parseNum('blend-abv2');

  if (isNaN(v1) || isNaN(a1) || isNaN(v2) || isNaN(a2)) {
    return showError('blend-result', t('err_fill_all'));
  }
  if (v1 <= 0 || v2 <= 0) {
    return showError('blend-result', t('err_vol_zero'));
  }

  const totalVol = Math.round((v1 + v2) * 100) / 100;
  const resultABV = Math.round(((v1 * a1 + v2 * a2) / (v1 + v2)) * 10) / 10;

  showResult('blend-result', `
    <div class="result-label">${t('res_resulting_abv')}</div>
    <div class="result-value">${resultABV}%</div>
    <div class="result-detail">
      ${t('res_total_volume')}: ${totalVol} L<br>
      ${t('blend_spirit_a')}: ${v1} L ${t('res_at')} ${a1}% + ${t('blend_spirit_b')}: ${v2} L ${t('res_at')} ${a2}%
    </div>
  `);
});

// --- 5. ABV / Proof Converter ---
document.getElementById('conv-calc').addEventListener('click', () => {
  const value = parseNum('conv-value');
  const from = document.querySelector('input[name="conv-from"]:checked').value;

  if (isNaN(value) || value < 0) {
    return showError('conv-result', t('err_valid_number'));
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
    <div class="result-label">${t('res_conversion')}</div>
    <div class="result-value">${abv}% ${t('conv_abv')}</div>
    <div class="result-detail">
      ${t('conv_proof')}: ${proof}<br>
      ${t('conv_gl')} (GL): ${gl}°
    </div>
  `);
});

// --- Init ---
initTableSelector();
loadTables();
applyLanguage();

// --- Service Worker Registration ---
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').catch(() => {});
}
