// --- Translations ---
const translations = {
  en: {
    title: 'Spirit Calculator',
    subtitle: 'Alcohol Content Tools',
    tab_temp: 'Temp Correction',
    tab_dilution: 'Dilution',
    tab_blending: 'Blending',
    tab_converter: 'ABV / Proof',
    btn_calculate: 'Calculate',
    btn_convert: 'Convert',
    // Temperature
    temp_title: 'Temperature Correction',
    temp_desc: 'Correct your hydrometer reading to the true ABV based on liquid temperature.',
    temp_reading_label: 'Hydrometer Reading (% ABV)',
    temp_reading_ph: 'e.g. 65.0',
    temp_liquid_label: 'Liquid Temperature',
    temp_liquid_ph: 'e.g. 25',
    temp_ref_label: 'Reference Temperature',
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
    err_target_lower: 'Target ABV must be lower than current ABV.',
    err_target_zero: 'Target ABV must be greater than 0.',
    err_vol_zero: 'Volume must be greater than 0.',
    err_valid_number: 'Please enter a valid positive number.',
    // Results
    res_corrected_abv: 'Corrected ABV',
    res_correction: 'Correction',
    res_hydrometer_read: 'Hydrometer read',
    res_at: 'at',
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
    tab_temp: 'ტემპ. კორექცია',
    tab_dilution: 'განზავება',
    tab_blending: 'შერევა',
    tab_converter: 'ალკ. / პრუფი',
    btn_calculate: 'გამოთვლა',
    btn_convert: 'კონვერტაცია',
    // Temperature
    temp_title: 'ტემპერატურის კორექცია',
    temp_desc: 'შეასწორეთ ჰიდრომეტრის ჩვენება რეალურ ალკ.%-ზე სითხის ტემპერატურის მიხედვით.',
    temp_reading_label: 'ჰიდრომეტრის ჩვენება (% ალკ.)',
    temp_reading_ph: 'მაგ. 65.0',
    temp_liquid_label: 'სითხის ტემპერატურა',
    temp_liquid_ph: 'მაგ. 25',
    temp_ref_label: 'საცნობარო ტემპერატურა',
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
    err_target_lower: 'სასურველი ალკ.% უნდა იყოს მიმდინარეზე ნაკლები.',
    err_target_zero: 'სასურველი ალკ.% უნდა იყოს 0-ზე მეტი.',
    err_vol_zero: 'მოცულობა უნდა იყოს 0-ზე მეტი.',
    err_valid_number: 'გთხოვთ შეიყვანოთ დადებითი რიცხვი.',
    // Results
    res_corrected_abv: 'შესწორებული ალკ.',
    res_correction: 'კორექცია',
    res_hydrometer_read: 'ჰიდრომეტრმა აჩვენა',
    res_at: '',
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
    document.getElementById('temp-ref-unit').textContent = tempUnit.current === 'C' ? '°C' : '°F';
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
function temperatureCorrection(readingABV, tempC, refTempC) {
  const delta = tempC - refTempC;
  const factor = 0.40 - (readingABV - 40) * 0.001;
  const corrected = readingABV + (delta * Math.max(factor, 0.25));
  return Math.round(corrected * 10) / 10;
}

document.getElementById('temp-calc').addEventListener('click', () => {
  const reading = parseFloat(document.getElementById('temp-reading').value);
  let temp = parseFloat(document.getElementById('temp-actual').value);
  let refTemp = parseFloat(document.getElementById('temp-reference').value);

  if (isNaN(reading) || isNaN(temp) || isNaN(refTemp)) {
    return showError('temp-result', t('err_fill_all'));
  }
  if (reading < 0 || reading > 100) {
    return showError('temp-result', t('err_abv_range'));
  }

  if (tempUnit.current === 'F') {
    temp = (temp - 32) * 5 / 9;
    refTemp = (refTemp - 32) * 5 / 9;
  }

  const corrected = temperatureCorrection(reading, temp, refTemp);
  const diff = Math.round((corrected - reading) * 10) / 10;
  const sign = diff >= 0 ? '+' : '';
  const displayTemp = parseFloat(document.getElementById('temp-actual').value);

  showResult('temp-result', `
    <div class="result-label">${t('res_corrected_abv')}</div>
    <div class="result-value">${corrected}%</div>
    <div class="result-detail">
      ${t('res_correction')}: ${sign}${diff}%<br>
      ${t('res_hydrometer_read')} ${reading}% ${t('res_at')} ${displayTemp}°${tempUnit.current}
    </div>
  `);
});

// --- 2. Dilution Calculator ---
document.getElementById('dil-calc').addEventListener('click', () => {
  const vol = parseFloat(document.getElementById('dil-volume').value);
  const abv = parseFloat(document.getElementById('dil-abv').value);
  const target = parseFloat(document.getElementById('dil-target').value);

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

// --- 3. Blending Calculator ---
document.getElementById('blend-calc').addEventListener('click', () => {
  const v1 = parseFloat(document.getElementById('blend-vol1').value);
  const a1 = parseFloat(document.getElementById('blend-abv1').value);
  const v2 = parseFloat(document.getElementById('blend-vol2').value);
  const a2 = parseFloat(document.getElementById('blend-abv2').value);

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

// --- 4. ABV / Proof Converter ---
document.getElementById('conv-calc').addEventListener('click', () => {
  const value = parseFloat(document.getElementById('conv-value').value);
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
applyLanguage();

// --- Service Worker Registration ---
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').catch(() => {});
}
