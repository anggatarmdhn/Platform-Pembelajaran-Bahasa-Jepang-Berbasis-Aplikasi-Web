// ====================================================
// にほんごGO! - Main App Logic & Educational Engine
// ====================================================

// ===== STATE =====
let state = {
  score: 0,
  learnedHiragana: new Set(),
  learnedKatakana: new Set(),
  learnedVocab: new Set(),
  currentModalChar: null,
  currentModalType: null,
  currentHiraganaFilter: 'Semua',
  currentKatakanaFilter: 'Semua',
};

// ===== MASTER SAVE DATA & PERSISTENCE ENGINE =====
const MASTER_SAVE_KEY = 'sijapanese_master_save';
let lastSavedTime = null;

function getMasterSavePayload() {
  return {
    version: 2,
    appName: 'SIJapanese',
    savedAt: new Date().toISOString(),
    score: state.score || 0,
    learnedHiragana: [...state.learnedHiragana],
    learnedKatakana: [...state.learnedKatakana],
    learnedVocab: [...state.learnedVocab],
    monsterStats: {
      highScore: (typeof msState !== 'undefined' && msState.highScore) ? msState.highScore : 0,
      totalKills: (typeof msState !== 'undefined' && msState.totalKills) ? msState.totalKills : 0,
      recordMaxCombo: (typeof msState !== 'undefined' && msState.recordMaxCombo) ? msState.recordMaxCombo : 0,
    },
    blastStats: {
      highScore: (typeof blastState !== 'undefined' && blastState.highScore) ? blastState.highScore : 0,
    }
  };
}

function loadState() {
  try {
    // 1. Try master save key
    const rawMaster = localStorage.getItem(MASTER_SAVE_KEY);
    let loaded = null;
    if (rawMaster) {
      loaded = JSON.parse(rawMaster);
    } else {
      // 2. Legacy fallback
      const rawLegacy = localStorage.getItem('sijapanese_data') || localStorage.getItem('nihongoGO');
      if (rawLegacy) {
        loaded = JSON.parse(rawLegacy);
      }
    }

    if (loaded) {
      state.score = typeof loaded.score === 'number' ? loaded.score : 0;
      state.learnedHiragana = new Set(Array.isArray(loaded.learnedHiragana) ? loaded.learnedHiragana : []);
      state.learnedKatakana = new Set(Array.isArray(loaded.learnedKatakana) ? loaded.learnedKatakana : []);
      state.learnedVocab = new Set(Array.isArray(loaded.learnedVocab) ? loaded.learnedVocab : []);

      if (loaded.monsterStats && typeof msState !== 'undefined') {
        msState.highScore = loaded.monsterStats.highScore || 0;
        msState.totalKills = loaded.monsterStats.totalKills || 0;
        msState.recordMaxCombo = loaded.monsterStats.recordMaxCombo || 0;
      }
      if (loaded.blastStats && typeof blastState !== 'undefined') {
        blastState.highScore = loaded.blastStats.highScore || 0;
      }

      lastSavedTime = loaded.savedAt ? new Date(loaded.savedAt) : new Date();
    } else {
      lastSavedTime = new Date();
    }
  } catch (e) {
    console.warn('Gagal memuat save data:', e);
    lastSavedTime = new Date();
  }
  updateSaveStatusUI();
}

function saveState() {
  try {
    const payload = getMasterSavePayload();
    localStorage.setItem(MASTER_SAVE_KEY, JSON.stringify(payload));
    
    // Mirror to legacy keys for maximum compatibility
    localStorage.setItem('sijapanese_data', JSON.stringify({
      score: payload.score,
      learnedHiragana: payload.learnedHiragana,
      learnedKatakana: payload.learnedKatakana,
      learnedVocab: payload.learnedVocab,
    }));
    if (payload.monsterStats) {
      localStorage.setItem('msStats', JSON.stringify(payload.monsterStats));
    }
    if (payload.blastStats) {
      localStorage.setItem('blastStats', JSON.stringify(payload.blastStats));
    }

    lastSavedTime = new Date();
    updateSaveStatusUI();
  } catch (e) {
    console.warn('Gagal menyimpan save data:', e);
  }
}

function updateSaveStatusUI() {
  const el = document.getElementById('save-timestamp-display');
  if (!el) return;
  if (!lastSavedTime) {
    el.textContent = 'Terakhir disimpan: Otomatis tersimpan';
    return;
  }
  const timeStr = lastSavedTime.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  el.textContent = `Terakhir disimpan: Hari ini pukul ${timeStr}`;
}

// ===== EXPORT (BACKUP) SAVE DATA =====
function exportSaveData() {
  try {
    const payload = getMasterSavePayload();
    const jsonStr = JSON.stringify(payload, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10);
    const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, '');
    a.href = url;
    a.download = `SIJapanese_Backup_${dateStr}_${timeStr}.json`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 200);
    showToast('File kemajuan berhasil dicadangkan ke komputer!', 'success');
  } catch (err) {
    showToast('Gagal mencadangkan file.', 'error');
  }
}

// ===== IMPORT (RESTORE) SAVE DATA =====
function triggerImportSave() {
  const input = document.getElementById('save-file-input');
  if (input) input.click();
}

function handleImportSave(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data || typeof data.score !== 'number') {
        throw new Error('Format file tidak dikenali.');
      }

      state.score = data.score || 0;
      state.learnedHiragana = new Set(Array.isArray(data.learnedHiragana) ? data.learnedHiragana : []);
      state.learnedKatakana = new Set(Array.isArray(data.learnedKatakana) ? data.learnedKatakana : []);
      state.learnedVocab = new Set(Array.isArray(data.learnedVocab) ? data.learnedVocab : []);

      if (data.monsterStats && typeof msState !== 'undefined') {
        msState.highScore = data.monsterStats.highScore || 0;
        msState.totalKills = data.monsterStats.totalKills || 0;
        msState.recordMaxCombo = data.monsterStats.recordMaxCombo || 0;
      }
      if (data.blastStats && typeof blastState !== 'undefined') {
        blastState.highScore = data.blastStats.highScore || 0;
      }

      saveState();
      updateScoreDisplay();
      updateProgressBars();
      renderCharGrid('hiragana', state.currentHiraganaFilter || 'Semua');
      renderCharGrid('katakana', state.currentKatakanaFilter || 'Semua');
      showToast(`Data berhasil dipulihkan! Total: ${state.score} Poin (${state.learnedHiragana.size} Hiragana, ${state.learnedKatakana.size} Katakana)`, 'success');
    } catch (err) {
      showToast('Gagal memulihkan file: Format data cadangan tidak valid.', 'error');
    }
    event.target.value = '';
  };
  reader.readAsText(file);
}

// ===== RESET ALL PROGRESS =====
function resetAllProgress() {
  const confirmed = confirm(
    'PERINGATAN:\nApakah Anda yakin ingin mereset seluruh kemajuan belajar, hafalan huruf, dan rekor skor ke 0?\n\nJika belum yakin, silakan klik tombol "Cadangkan Data (.json)" terlebih dahulu.'
  );
  if (!confirmed) return;

  state.score = 0;
  state.learnedHiragana.clear();
  state.learnedKatakana.clear();
  state.learnedVocab.clear();
  if (typeof msState !== 'undefined') {
    msState.highScore = 0;
    msState.totalKills = 0;
    msState.recordMaxCombo = 0;
  }
  if (typeof blastState !== 'undefined') {
    blastState.highScore = 0;
  }

  saveState();
  updateScoreDisplay();
  updateProgressBars();
  renderCharGrid('hiragana', state.currentHiraganaFilter || 'Semua');
  renderCharGrid('katakana', state.currentKatakanaFilter || 'Semua');
  showToast('Seluruh progres belajar telah direset ke 0.', 'info');
}

// ===== AUDIO ENGINE (SPEECH & SYNTHESIS) =====
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) audioCtx = new AudioContextClass();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}


// ====================================================
// BULLETPROOF JAPANESE AUDIO ENGINE (NATIVE SPEAKER + SYNTHESIS)
// ====================================================
let activeJapaneseAudio = null;
let isAudioUnlocked = false;

// Audio Unlocker for Mobile Safari / Android Chrome Autoplay Restrictions
function unlockAudioEngine() {
  if (isAudioUnlocked) return;
  isAudioUnlocked = true;
  try {
    const silent = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
    silent.play().catch(() => {});
  } catch (e) {}

  if ('speechSynthesis' in window) {
    try {
      window.speechSynthesis.resume();
    } catch (e) {}
  }

  try {
    const ctx = getAudioContext();
    if (ctx && ctx.state === 'suspended') {
      ctx.resume();
    }
  } catch (e) {}
}

document.addEventListener('touchstart', unlockAudioEngine, { once: true, passive: true });
document.addEventListener('click', unlockAudioEngine, { once: true });

function speakJapanese(text) {
  if (!text) return;
  const cleanText = String(text)
    .replace(/<rt>[^<]*<\/rt>/gi, '')
    .replace(/<rp>[^<]*<\/rp>/gi, '')
    .replace(/<[^>]*>/g, '')
    .trim();
  if (!cleanText) return;

  unlockAudioEngine();

  // Stop previous stream if playing
  if (activeJapaneseAudio) {
    try {
      activeJapaneseAudio.pause();
      activeJapaneseAudio.currentTime = 0;
    } catch (e) {}
    activeJapaneseAudio = null;
  }

  // Tier 1: Local / Same-Origin Cached TTS Proxy (No CORS, Zero Blocking, Instant)
  try {
    const encoded = encodeURIComponent(cleanText);
    const audioUrl = '/api/tts?q=' + encoded;
    const audio = new Audio(audioUrl);
    activeJapaneseAudio = audio;

    let fallbackTriggered = false;
    const triggerFallback = () => {
      if (fallbackTriggered) return;
      fallbackTriggered = true;
      speakJapaneseSpeechSynthesis(cleanText);
    };

    audio.onerror = triggerFallback;

    // Timeout if audio stream is blocked or slow
    const timeoutTimer = setTimeout(() => {
      if (audio.readyState === 0 && !audio.ended) {
        triggerFallback();
      }
    }, 1800);

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          clearTimeout(timeoutTimer);
        })
        .catch((err) => {
          clearTimeout(timeoutTimer);
          triggerFallback();
        });
    }
  } catch (err) {
    speakJapaneseSpeechSynthesis(cleanText);
  }
}

function speakJapaneseSpeechSynthesis(text) {
  if (!('speechSynthesis' in window)) {
    playChimeTone(440);
    return;
  }
  try {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
    window.speechSynthesis.cancel();

    setTimeout(() => {
      try {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.88;
        utterance.pitch = 1.0;

        const voices = window.speechSynthesis.getVoices();
        if (voices && voices.length > 0) {
          const jaVoice = voices.find(v => 
            v.lang === 'ja-JP' || 
            (v.lang && v.lang.toLowerCase().startsWith('ja'))
          );
          if (jaVoice) {
            utterance.voice = jaVoice;
          }
        }

        utterance.onerror = () => {
          playChimeTone(523.25); // C5 note fallback
        };

        window.speechSynthesis.speak(utterance);
      } catch (e) {
        playChimeTone(523.25);
      }
    }, 20);
  } catch (e) {
    playChimeTone(523.25);
  }
}

// Tier 3: Tonal Audio Synthesizer Fallback (Web Audio API)
function playChimeTone(freq = 440) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.35);
  } catch (e) {}
}

window.speakJapanese = speakJapanese;
window.unlockAudioEngine = unlockAudioEngine;

// Warm up voices on browser load
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    // Voices list ready
  };
}

// ===== NAVIGATION =====
function showPage(page) {
  try {
    sessionStorage.setItem('sijapanese_active_page', page);
  } catch (e) {}
  // If navigating away from monster game, pause it
  if (msState && msState.running && page !== 'monster') {
    toggleMonsterPause(true);
  }

  // Clear any running game timer
  if (page !== 'games') {
    clearInterval(gameTimer);
  }

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.mob-nav-btn').forEach(b => b.classList.remove('active'));

  const targetPage = document.getElementById('page-' + page);
  if (targetPage) {
    targetPage.classList.add('active');
  } else {
    const homePage = document.getElementById('page-home');
    if (homePage) homePage.classList.add('active');
    page = 'home';
  }

  const activeNavPage = (page === 'monster') ? 'games' : page;
  const navBtn = document.querySelector('.nav-btn[data-page="' + activeNavPage + '"]');
  if (navBtn) navBtn.classList.add('active');

  const mobBtn = document.querySelector('.mob-nav-btn[data-page="' + activeNavPage + '"]');
  if (mobBtn) mobBtn.classList.add('active');

  window.scrollTo(0, 0);

  if (page === 'hiragana') renderCharGrid('hiragana');
  if (page === 'katakana') renderCharGrid('katakana');
  if (page === 'vocabulary') showVocabCategory('numbers');
  if (page === 'home') updateProgressBars();
  if (page === 'games') showGameMenu();
  if (page === 'monster') initMonsterLobby();
  if (page === 'materi') {
    if (typeof initMateriPage === 'function') initMateriPage();
  }
}

// ===== SAKURA ANIMATION =====
function createSakura() {
  const container = document.getElementById('sakura-container');
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < 16; i++) {
    const s = document.createElement('div');
    s.className = 'sakura-petal';
    s.style.left = Math.random() * 100 + '%';
    s.style.animationDuration = (Math.random() * 6 + 6) + 's';
    s.style.animationDelay = (Math.random() * 8) + 's';
    const size = Math.random() * 8 + 8;
    s.style.width = size + 'px';
    s.style.height = (size * 1.3) + 'px';
    container.appendChild(s);
  }
}

// ===== SCORE =====
function addScore(points) {
  state.score += points;
  saveState();
  updateScoreDisplay();
}

function updateScoreDisplay() {
  const ts = document.getElementById('total-score');
  if (ts) ts.textContent = state.score;
  const gsd = document.getElementById('game-score-display');
  if (gsd) gsd.textContent = state.score;
}

// ===== PROGRESS BARS =====
function updateProgressBars() {
  const hi = state.learnedHiragana.size;
  const ka = state.learnedKatakana.size;
  const vo = state.learnedVocab.size;
  const totalHi = (typeof HIRAGANA !== 'undefined') ? HIRAGANA.length : 104;
  const totalKa = (typeof KATAKANA !== 'undefined') ? KATAKANA.length : 104;

  const hit = document.getElementById('hiragana-progress-text');
  const kat = document.getElementById('katakana-progress-text');
  const vot = document.getElementById('vocab-progress-text');

  if (hit) hit.textContent = hi + ' / ' + totalHi;
  if (kat) kat.textContent = ka + ' / ' + totalKa;
  if (vot) vot.textContent = vo + ' / 50';

  const hib = document.getElementById('hiragana-progress-bar');
  const kab = document.getElementById('katakana-progress-bar');
  const vob = document.getElementById('vocab-progress-bar');

  // Mini games & Arcade stats
  const gamest = document.getElementById('games-progress-text');
  const gamesb = document.getElementById('games-progress-bar');
  const msHigh = (typeof msState !== 'undefined' && msState.highScore) ? msState.highScore : 0;
  const blastHigh = (typeof blastState !== 'undefined' && blastState.highScore) ? blastState.highScore : 0;
  if (gamest) gamest.textContent = `Rekor: Sky Atk (${msHigh} Poin) | Blast (${blastHigh} Poin)`;

  setTimeout(() => {
    if (hib) hib.style.width = Math.min(hi / totalHi * 100, 100) + '%';
    if (kab) kab.style.width = Math.min(ka / totalKa * 100, 100) + '%';
    if (vob) vob.style.width = Math.min(vo / 50 * 100, 100) + '%';
    if (gamesb) {
      const activeScoreCount = (msHigh > 0 ? 1 : 0) + (blastHigh > 0 ? 1 : 0);
      gamesb.style.width = (activeScoreCount * 50) + '%';
    }
  }, 50);

  updateSaveStatusUI();
}

// ===== CHAR GRID & FILTERS (GOJŪON A-KA-SA-TA-NA-HA-MA-YA-RA-WA) =====
let romajiVisibility = { hiragana: true, katakana: true };
let kanaFilterState = {
  hiragana: { category: 'Semua', group: 'Semua' },
  katakana: { category: 'Semua', group: 'Semua' }
};

const KANA_ROW_DEFS = {
  Dasar: [
    { key: 'A', id: 'Vokal', label: 'Baris A (Vokal)', vowels: ['a', 'i', 'u', 'e', 'o'] },
    { key: 'Ka', id: 'Baris K', label: 'Baris Ka', vowels: ['ka', 'ki', 'ku', 'ke', 'ko'] },
    { key: 'Sa', id: 'Baris S', label: 'Baris Sa', vowels: ['sa', 'shi', 'su', 'se', 'so'] },
    { key: 'Ta', id: 'Baris T', label: 'Baris Ta', vowels: ['ta', 'chi', 'tsu', 'te', 'to'] },
    { key: 'Na', id: 'Baris N', label: 'Baris Na', vowels: ['na', 'ni', 'nu', 'ne', 'no'] },
    { key: 'Ha', id: 'Baris H', label: 'Baris Ha', vowels: ['ha', 'hi', 'fu', 'he', 'ho'] },
    { key: 'Ma', id: 'Baris M', label: 'Baris Ma', vowels: ['ma', 'mi', 'mu', 'me', 'mo'] },
    { key: 'Ya', id: 'Baris Y', label: 'Baris Ya', vowels: ['ya', null, 'yu', null, 'yo'] },
    { key: 'Ra', id: 'Baris R', label: 'Baris Ra', vowels: ['ra', 'ri', 'ru', 're', 'ro'] },
    { key: 'Wa', id: 'Baris W', label: 'Baris Wa', vowels: ['wa', null, null, null, 'wo'] },
    { key: 'N', id: 'Huruf N', label: 'Huruf N', vowels: ['n', null, null, null, null] },
  ],
  Tenten: [
    { key: 'Ga', idH: 'Baris G (が)', idK: 'Baris G (ガ)', label: 'Baris Ga', vowels: ['ga', 'gi', 'gu', 'ge', 'go'] },
    { key: 'Za', idH: 'Baris Z (ざ)', idK: 'Baris Z (ザ)', label: 'Baris Za', vowels: ['za', 'ji', 'zu', 'ze', 'zo'] },
    { key: 'Da', idH: 'Baris D (だ)', idK: 'Baris D (ダ)', label: 'Baris Da', vowels: ['da', 'ji', 'zu', 'de', 'do'] },
    { key: 'Ba', idH: 'Baris B (ば)', idK: 'Baris B (バ)', label: 'Baris Ba', vowels: ['ba', 'bi', 'bu', 'be', 'bo'] },
  ],
  Maru: [
    { key: 'Pa', idH: 'Baris P (ぱ)', idK: 'Baris P (パ)', label: 'Baris Pa', vowels: ['pa', 'pi', 'pu', 'pe', 'po'] },
  ],
  Gabungan: [
    { key: 'Kya', idH: 'Baris Kya (きゃ)', idK: 'Baris Kya (キャ)', label: 'Baris Kya', vowels: ['kya', 'kyu', 'kyo'] },
    { key: 'Sha', idH: 'Baris Sha (しゃ)', idK: 'Baris Sha (シャ)', label: 'Baris Sha', vowels: ['sha', 'shu', 'sho'] },
    { key: 'Cha', idH: 'Baris Cha (ちゃ)', idK: 'Baris Cha (チャ)', label: 'Baris Cha', vowels: ['cha', 'chu', 'cho'] },
    { key: 'Nya', idH: 'Baris Nya (にゃ)', idK: 'Baris Nya (ニャ)', label: 'Baris Nya', vowels: ['nya', 'nyu', 'nyo'] },
    { key: 'Hya', idH: 'Baris Hya (ひゃ)', idK: 'Baris Hya (ヒャ)', label: 'Baris Hya', vowels: ['hya', 'hyu', 'hyo'] },
    { key: 'Mya', idH: 'Baris Mya (みゃ)', idK: 'Baris Mya (ミャ)', label: 'Baris Mya', vowels: ['mya', 'myu', 'myo'] },
    { key: 'Rya', idH: 'Baris Rya (りゃ)', idK: 'Baris Rya (リャ)', label: 'Baris Rya', vowels: ['rya', 'ryu', 'ryo'] },
    { key: 'Gya', idH: 'Baris Gya (ぎゃ)', idK: 'Baris Gya (ギャ)', label: 'Baris Gya', vowels: ['gya', 'gyu', 'gyo'] },
    { key: 'Ja', idH: 'Baris Ja (じゃ)', idK: 'Baris Ja (ジャ)', label: 'Baris Ja', vowels: ['ja', 'ju', 'jo'] },
    { key: 'Bya', idH: 'Baris Bya (びゃ)', idK: 'Baris Bya (ビャ)', label: 'Baris Bya', vowels: ['bya', 'byu', 'byo'] },
    { key: 'Pya', idH: 'Baris Pya (ぴゃ)', idK: 'Baris Pya (ピャ)', label: 'Baris Pya', vowels: ['pya', 'pyu', 'pyo'] },
  ]
};

function toggleRomajiVisibility(type) {
  romajiVisibility[type] = !romajiVisibility[type];
  const container = document.getElementById(type + '-learn-mode');
  if (container) {
    container.classList.toggle('hide-romaji', !romajiVisibility[type]);
  }
  const label = document.getElementById(type + '-romaji-label');
  if (label) {
    label.textContent = romajiVisibility[type] ? 'Romaji: ON' : 'Romaji: OFF (Hafalan)';
  }
  showToast(romajiVisibility[type] ? 'Romaji Ditampilkan' : 'Romaji Disembunyikan (Mode Hafalan Murni)', 'info');
}

function filterKanaCategory(type, category) {
  kanaFilterState[type].category = category;
  kanaFilterState[type].group = 'Semua';
  renderCharGrid(type);
}

function filterKanaGroup(type, groupKey) {
  kanaFilterState[type].group = groupKey;
  renderCharGrid(type);
}

function renderKanaCardHtml(c, type, learned) {
  if (!c) {
    return `<div class="char-card char-card-empty"><span class="empty-dash">—</span></div>`;
  }
  const isLearned = learned.has(c.char);
  const isCombo = (c.char.length > 1);
  return `
    <div class="char-card ${isLearned ? 'learned' : ''} ${isCombo ? 'card-combo' : ''}" onclick="openModal('${c.char}', '${type}')">
      <button class="char-audio-btn" title="Dengarkan pelafalan" onclick="event.stopPropagation(); speakJapanese('${c.char}')">
        <svg viewBox="0 0 24 24" class="svg-icon-mini"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
      </button>
      <span class="char-main ${isCombo ? 'char-combo' : ''}">${c.char}</span>
      <span class="char-romaji">${c.romaji}</span>
      ${isLearned ? '<span class="char-check-badge">✓</span>' : ''}
    </div>
  `;
}

function renderCharGrid(type) {
  const data = type === 'hiragana' ? HIRAGANA : KATAKANA;
  const container = document.getElementById(type + '-learn-mode');
  if (!container) return;

  container.classList.toggle('hide-romaji', !romajiVisibility[type]);

  const learned = type === 'hiragana' ? state.learnedHiragana : state.learnedKatakana;
  const currentCat = kanaFilterState[type].category;
  const currentGrp = kanaFilterState[type].group;

  // Categories list
  const categories = [
    { id: 'Semua', name: 'Semua', count: data.length },
    { id: 'Dasar', name: 'Dasar (Seion)', count: data.filter(c => c.category === 'Dasar').length },
    { id: 'Tenten', name: 'Tenten (Dakuon 濁音)', count: data.filter(c => c.category === 'Tenten').length },
    { id: 'Maru', name: 'Maru (Handakuon 半濁音)', count: data.filter(c => c.category === 'Maru').length },
    { id: 'Gabungan', name: 'Gabungan (Yōon 拗音)', count: data.filter(c => c.category === 'Gabungan').length }
  ];

  // Build row pills based on category in strict Gojuon order
  let rowPillList = [{ id: 'Semua', label: 'Semua Baris' }];
  if (currentCat === 'Semua' || currentCat === 'Dasar') {
    KANA_ROW_DEFS.Dasar.forEach(r => rowPillList.push({ id: r.key, label: r.key }));
  } else if (currentCat === 'Tenten') {
    KANA_ROW_DEFS.Tenten.forEach(r => rowPillList.push({ id: r.key, label: r.key }));
  } else if (currentCat === 'Maru') {
    KANA_ROW_DEFS.Maru.forEach(r => rowPillList.push({ id: r.key, label: r.key }));
  } else if (currentCat === 'Gabungan') {
    KANA_ROW_DEFS.Gabungan.forEach(r => rowPillList.push({ id: r.key, label: r.key }));
  }

  // HTML Generation
  let html = `
    <div class="char-filter-wrapper">
      <div class="char-filter-section">
        <div class="char-filter-label">Kategori Aksara:</div>
        <div class="char-filter-bar category-filter-bar">
          ${categories.map(cat => `
            <button class="filter-pill filter-cat-pill ${(currentCat === cat.id) ? 'active cat-active-' + cat.id.toLowerCase() : ''}"
                    onclick="filterKanaCategory('${type}', '${cat.id}')">
              <span>${cat.name}</span>
              <span class="pill-count">${cat.count}</span>
            </button>
          `).join('')}
        </div>
      </div>

      <div class="char-filter-section sub-filter-section">
        <div class="char-filter-label">Urutan Baris (Akasatanahamayarawa):</div>
        <div class="char-filter-bar group-filter-bar">
          ${rowPillList.map(g => `
            <button class="filter-pill filter-grp-pill ${(currentGrp === g.id) ? 'active' : ''}"
                    onclick="filterKanaGroup('${type}', '${g.id}')">
              ${g.label}
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Determine which sections to render
  const sectionsToRender = [];
  if (currentCat === 'Semua') {
    sectionsToRender.push({ cat: 'Dasar', title: 'Aksara Dasar (Gojūon 五十音: A-Ka-Sa-Ta-Na-Ha-Ma-Ya-Ra-Wa)', count: 46, rows: KANA_ROW_DEFS.Dasar });
    if (currentGrp === 'Semua') {
      sectionsToRender.push({ cat: 'Tenten', title: 'Aksara Tenten (Dakuon 濁音: Ga-Za-Da-Ba)', count: 20, rows: KANA_ROW_DEFS.Tenten });
      sectionsToRender.push({ cat: 'Maru', title: 'Aksara Maru (Handakuon 半濁音: Pa)', count: 5, rows: KANA_ROW_DEFS.Maru });
      sectionsToRender.push({ cat: 'Gabungan', title: 'Aksara Gabungan (Yōon 拗音: Kya, Sha, Cha...)', count: 33, rows: KANA_ROW_DEFS.Gabungan });
    }
  } else if (currentCat === 'Dasar') {
    sectionsToRender.push({ cat: 'Dasar', title: 'Aksara Dasar (Gojūon 五十音: A-Ka-Sa-Ta-Na-Ha-Ma-Ya-Ra-Wa)', count: 46, rows: KANA_ROW_DEFS.Dasar });
  } else if (currentCat === 'Tenten') {
    sectionsToRender.push({ cat: 'Tenten', title: 'Aksara Tenten (Dakuon 濁音: Ga-Za-Da-Ba)', count: 20, rows: KANA_ROW_DEFS.Tenten });
  } else if (currentCat === 'Maru') {
    sectionsToRender.push({ cat: 'Maru', title: 'Aksara Maru (Handakuon 半濁音: Pa)', count: 5, rows: KANA_ROW_DEFS.Maru });
  } else if (currentCat === 'Gabungan') {
    sectionsToRender.push({ cat: 'Gabungan', title: 'Aksara Gabungan (Yōon 拗音: Kya, Sha, Cha...)', count: 33, rows: KANA_ROW_DEFS.Gabungan });
  }

  // Render each section table
  sectionsToRender.forEach(sec => {
    let rows = sec.rows;
    if (currentGrp !== 'Semua') {
      rows = rows.filter(r => r.key === currentGrp);
    }
    if (rows.length === 0) return;

    const catClass = 'cat-tag-' + sec.cat.toLowerCase();
    const isYoon = (sec.cat === 'Gabungan');

    html += `
      <div class="gojuon-section">
        <div class="char-group-title">
          <span class="group-dot ${catClass}"></span>
          <span class="group-name">${sec.title}</span>
          <span class="group-category-badge ${catClass}">${sec.cat}</span>
          <span class="group-count">(${rows.length} baris)</span>
        </div>

        <div class="gojuon-table-wrap">
          <!-- Column Headers -->
          <div class="gojuon-header-row ${isYoon ? 'header-combo' : ''}">
            <div class="gojuon-head-col label-head">Baris</div>
            ${isYoon ? `
              <div class="gojuon-head-col">-ya (ゃ/ャ)</div>
              <div class="gojuon-head-col">-yu (ゅ/ュ)</div>
              <div class="gojuon-head-col">-yo (ょ/ョ)</div>
            ` : `
              <div class="gojuon-head-col">A (あ)</div>
              <div class="gojuon-head-col">I (い)</div>
              <div class="gojuon-head-col">U (う)</div>
              <div class="gojuon-head-col">E (え)</div>
              <div class="gojuon-head-col">O (お)</div>
            `}
          </div>

          <!-- Gojuon Rows in strict A-Ka-Sa-Ta-Na-Ha-Ma-Ya-Ra-Wa order -->
          <div class="gojuon-rows-list">
            ${rows.map(rowDef => `
              <div class="gojuon-row ${isYoon ? 'row-combo' : ''}">
                <div class="gojuon-row-badge" title="${rowDef.label}">
                  <span class="row-badge-key">${rowDef.key}</span>
                </div>
                <div class="gojuon-cells-grid ${isYoon ? 'cells-combo' : 'cells-standard'}">
                  ${rowDef.vowels.map(v => {
                    if (!v) return renderKanaCardHtml(null, type, learned);
                    const c = data.find(x => x.romaji === v && (
                      x.group === rowDef.id || x.group === rowDef.idH || x.group === rowDef.idK
                    ));
                    return renderKanaCardHtml(c, type, learned);
                  }).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// ===== CHARACTER DETAIL MODAL =====
function openModal(charOrObj, type) {
  let charObj;
  if (typeof charOrObj === 'string') {
    const data = type === 'hiragana' ? HIRAGANA : KATAKANA;
    charObj = data.find(c => c.char === charOrObj);
  } else {
    charObj = charOrObj;
  }
  if (!charObj) return;

  state.currentModalChar = charObj;
  state.currentModalType = type;

  document.getElementById('modal-char').textContent = charObj.char;
  document.getElementById('modal-romaji').textContent = charObj.romaji;
  document.getElementById('modal-example').innerHTML = '<strong>Contoh Kata:</strong> ' + (charObj.example || '-');
  document.getElementById('modal-mnemonic').innerHTML = charObj.mnemonic ? '<strong>Tips Menghafal:</strong> ' + charObj.mnemonic : '';

  const audioBtn = document.getElementById('modal-audio-btn');
  if (audioBtn) {
    audioBtn.onclick = () => speakJapanese(charObj.char);
  }

  const isLearned = (type === 'hiragana' ? state.learnedHiragana : state.learnedKatakana).has(charObj.char);
  const markBtn = document.getElementById('modal-mark-btn');
  if (markBtn) {
    markBtn.innerHTML = isLearned
      ? '<svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="20 6 9 17 4 12"/></svg> <span>Sudah Dikuasai</span>'
      : '<svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="20 6 9 17 4 12"/></svg> <span>Tandai Sudah Hafal</span>';
    markBtn.className = 'modal-btn ' + (isLearned ? 'secondary' : 'primary');
  }

  // Auto speak character when modal opens for auditory feedback
  speakJapanese(charObj.char);

  document.getElementById('char-modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('char-modal').classList.add('hidden');
  state.currentModalChar = null;
}

function markLearned() {
  if (!state.currentModalChar) return;
  const char = state.currentModalChar.char;
  const type = state.currentModalType;
  let isNew = false;

  if (type === 'hiragana' && !state.learnedHiragana.has(char)) {
    state.learnedHiragana.add(char);
    isNew = true;
    addScore(5);
  } else if (type === 'katakana' && !state.learnedKatakana.has(char)) {
    state.learnedKatakana.add(char);
    isNew = true;
    addScore(5);
  }

  saveState();
  renderCharGrid(type, type === 'hiragana' ? state.currentHiraganaFilter : state.currentKatakanaFilter);

  if (isNew) {
    showToast('Tersimpan! +5 Poin untuk hafalan aksara ' + char + ' (' + state.currentModalChar.romaji + ')', 'success');
  } else {
    showToast('Aksara ' + char + ' sudah tercatat sebelumnya.', 'info');
  }

  closeModal();
  updateProgressBars();
}

// ===== MODE TOGGLE (LEARN / QUIZ) =====
let quizState = {};


// Tombol kembali di header huruf: Jika sedang di kuis, tetap di halaman aksara dan kembali ke mode belajar
function handleKanaBack(type) {
  const quizMode = document.getElementById(type + '-quiz-mode');
  if (quizMode && !quizMode.classList.contains('hidden')) {
    setMode(type, 'learn');
    return;
  }
  showPage('home');
}
window.handleKanaBack = handleKanaBack;

function setMode(type, mode) {
  const learnBtn = document.getElementById(type + '-mode-learn');
  const quizBtn = document.getElementById(type + '-mode-quiz');
  const learnMode = document.getElementById(type + '-learn-mode');
  const quizMode = document.getElementById(type + '-quiz-mode');

  if (learnBtn) learnBtn.classList.toggle('active', mode === 'learn');
  if (quizBtn) quizBtn.classList.toggle('active', mode === 'quiz');
  if (learnMode) learnMode.classList.toggle('hidden', mode !== 'learn');
  if (quizMode) quizMode.classList.toggle('hidden', mode !== 'quiz');

  if (mode === 'quiz') startQuiz(type);
}

function startQuiz(type) {
  const data = type === 'hiragana' ? HIRAGANA : KATAKANA;
  const shuffled = shuffle([...data]);
  const questions = shuffled.slice(0, 15);

  quizState[type] = { questions, current: 0, correct: 0, answered: false };
  renderQuizQuestion(type);
}

function renderQuizQuestion(type) {
  const qs = quizState[type];
  const wrap = document.getElementById(type + '-quiz-wrap');
  if (!wrap) return;

  if (qs.current >= qs.questions.length) {
    renderQuizResult(type);
    return;
  }

  const q = qs.questions[qs.current];
  const data = type === 'hiragana' ? HIRAGANA : KATAKANA;
  const wrong = shuffle(data.filter(c => c.romaji !== q.romaji)).slice(0, 3).map(c => c.romaji);
  const options = shuffle([q.romaji, ...wrong]);

  wrap.innerHTML = `
    <div class="quiz-score-bar">
      <span>Soal ${qs.current + 1} dari ${qs.questions.length}</span>
      <span>${qs.correct} Jawaban Benar</span>
      <span>+${qs.correct * 3} Poin</span>
    </div>
    <div class="quiz-question-card">
      <div class="quiz-char-row">
        <span class="quiz-char">${q.char}</span>
        <button class="quiz-sound-btn" onclick="speakJapanese('${q.char}')" title="Dengarkan Suara">
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
        </button>
      </div>
      <p class="quiz-instruction">Pilih bacaan romaji yang tepat:</p>
    </div>
    <div class="quiz-options">
      ${options.map((opt, idx) => `
        <button class="quiz-option-btn" id="qopt-${idx}" data-val="${opt}" onclick="answerQuiz('${type}', '${opt}', '${q.romaji}', 'qopt-${idx}')">
          ${opt}
        </button>
      `).join('')}
    </div>
  `;

  // Auto speak kana prompt
  speakJapanese(q.char);
}

function answerQuiz(type, chosen, correct, btnId) {
  const qs = quizState[type];
  if (qs.answered) return;
  qs.answered = true;

  const isCorrect = chosen === correct;
  if (isCorrect) {
    qs.correct++;
    addScore(3);
    showToast('Tepat sekali! +3 Poin (' + correct + ')', 'success');
  } else {
    showToast('Kurang tepat. Jawaban yang benar: ' + correct, 'error');
  }

  document.querySelectorAll('.quiz-option-btn').forEach(btn => {
    btn.disabled = true;
    if (btn.getAttribute('data-val') === correct) {
      btn.classList.add('correct');
    } else if (btn.id === btnId) {
      btn.classList.add('wrong');
    }
  });

  setTimeout(() => {
    qs.current++;
    qs.answered = false;
    renderQuizQuestion(type);
  }, 1100);
}

function renderQuizResult(type) {
  const qs = quizState[type];
  const wrap = document.getElementById(type + '-quiz-wrap');
  if (!wrap) return;

  const pct = Math.round(qs.correct / qs.questions.length * 100);
  const msg = pct >= 80 ? 'Luar Biasa! Pemahaman Sangat Baik' : pct >= 60 ? 'Bagus! Terus Asah Hafalanmu' : 'Tetap Semangat, Latihan Lagi!';

  wrap.innerHTML = `
    <div class="quiz-result-card">
      <div class="quiz-result-crest">
        <svg viewBox="0 0 64 64" class="svg-crest-large">
          <circle cx="32" cy="32" r="28" fill="#1E293B"/>
          <polygon points="32 12 37 23 49 24 40 33 43 45 32 39 21 45 24 33 15 24 27 23" fill="#F59E0B"/>
        </svg>
      </div>
      <div class="quiz-result-title">${msg}</div>
      <p class="quiz-result-subtitle">Hasil Jawaban Benar:</p>
      <div class="quiz-result-score">${qs.correct} / ${qs.questions.length}</div>
      <div class="quiz-result-pct">Akurasi: ${pct}%</div>
      <button class="quiz-result-restart" onclick="startQuiz('${type}')">
        <svg viewBox="0 0 24 24" class="svg-icon-mini"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
        <span>Mulai Ulang Kuis</span>
      </button>
    </div>
  `;
}

// ===== VOCABULARY SECTION =====
function showVocabCategory(cat) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const tabEl = document.getElementById('tab-' + cat);
  if (tabEl) tabEl.classList.add('active');

  const data = VOCABULARY[cat] || [];
  const grid = document.getElementById('vocab-grid');
  if (!grid) return;
  grid.innerHTML = '';

  data.forEach((item, i) => {
    const card = document.createElement('div');
    const isLearned = state.learnedVocab.has(item.jp);
    card.className = 'vocab-card' + (isLearned ? ' learned' : '');
    card.style.animationDelay = (i * 0.03) + 's';

    card.innerHTML = `
      <div class="vocab-card-top">
        <span class="vocab-badge-number">${i + 1}</span>
        <button class="vocab-audio-btn" title="Dengarkan pelafalan" onclick="event.stopPropagation(); speakJapanese('${item.jp}')">
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
        </button>
      </div>
      <div class="vocab-jp">${item.jp}</div>
      <div class="vocab-reading">${item.reading}</div>
      <div class="vocab-id">${item.id}</div>
      <div class="vocab-card-footer">
        <span class="vocab-status-pill">${isLearned ? 'Sudah Dikuasai' : '+2 Poin Saat Dipelajari'}</span>
      </div>
    `;

    card.onclick = () => {
      speakJapanese(item.jp);
      if (!state.learnedVocab.has(item.jp)) {
        state.learnedVocab.add(item.jp);
        addScore(2);
        saveState();
        showToast('Kosakata Baru: ' + item.jp + ' (' + item.reading + ') +2 Poin!', 'success');
        card.classList.add('learned');
        const pill = card.querySelector('.vocab-status-pill');
        if (pill) pill.textContent = 'Sudah Dikuasai';
        updateProgressBars();
      }
    };

    grid.appendChild(card);
  });
}

// ====================================================
// MASTER GAME CONFIGURATION & QUESTION BANK MANAGER
// ====================================================
const GAME_CONFIG_STORAGE_KEY = 'sijapanese_minigames_config';

const PRESET_HIRAGANA_46 = [
  { char: 'あ', romaji: 'a', mean: 'Vokal A' },
  { char: 'い', romaji: 'i', mean: 'Vokal I' },
  { char: 'う', romaji: 'u', mean: 'Vokal U' },
  { char: 'え', romaji: 'e', mean: 'Vokal E' },
  { char: 'お', romaji: 'o', mean: 'Vokal O' },
  { char: 'か', romaji: 'ka', mean: 'Baris K - Ka' },
  { char: 'き', romaji: 'ki', mean: 'Baris K - Ki' },
  { char: 'く', romaji: 'ku', mean: 'Baris K - Ku' },
  { char: 'け', romaji: 'ke', mean: 'Baris K - Ke' },
  { char: 'こ', romaji: 'ko', mean: 'Baris K - Ko' },
  { char: 'さ', romaji: 'sa', mean: 'Baris S - Sa' },
  { char: 'し', romaji: 'shi', mean: 'Baris S - Shi' },
  { char: 'す', romaji: 'su', mean: 'Baris S - Su' },
  { char: 'せ', romaji: 'se', mean: 'Baris S - Se' },
  { char: 'そ', romaji: 'so', mean: 'Baris S - So' },
  { char: 'た', romaji: 'ta', mean: 'Baris T - Ta' },
  { char: 'ち', romaji: 'chi', mean: 'Baris T - Chi' },
  { char: 'つ', romaji: 'tsu', mean: 'Baris T - Tsu' },
  { char: 'て', romaji: 'te', mean: 'Baris T - Te' },
  { char: 'と', romaji: 'to', mean: 'Baris T - To' },
  { char: 'な', romaji: 'na', mean: 'Baris N - Na' },
  { char: 'に', romaji: 'ni', mean: 'Baris N - Ni' },
  { char: 'ぬ', romaji: 'nu', mean: 'Baris N - Nu' },
  { char: 'ね', romaji: 'ne', mean: 'Baris N - Ne' },
  { char: 'の', romaji: 'no', mean: 'Baris N - No' },
  { char: 'は', romaji: 'ha', mean: 'Baris H - Ha' },
  { char: 'ひ', romaji: 'hi', mean: 'Baris H - Hi' },
  { char: 'ふ', romaji: 'fu', mean: 'Baris H - Fu' },
  { char: 'へ', romaji: 'he', mean: 'Baris H - He' },
  { char: 'ほ', romaji: 'ho', mean: 'Baris H - Ho' },
  { char: 'ま', romaji: 'ma', mean: 'Baris M - Ma' },
  { char: 'み', romaji: 'mi', mean: 'Baris M - Mi' },
  { char: 'む', romaji: 'mu', mean: 'Baris M - Mu' },
  { char: 'め', romaji: 'me', mean: 'Baris M - Me' },
  { char: 'も', romaji: 'mo', mean: 'Baris M - Mo' },
  { char: 'や', romaji: 'ya', mean: 'Baris Y - Ya' },
  { char: 'ゆ', romaji: 'yu', mean: 'Baris Y - Yu' },
  { char: 'よ', romaji: 'yo', mean: 'Baris Y - Yo' },
  { char: 'ら', romaji: 'ra', mean: 'Baris R - Ra' },
  { char: 'り', romaji: 'ri', mean: 'Baris R - Ri' },
  { char: 'る', romaji: 'ru', mean: 'Baris R - Ru' },
  { char: 'れ', romaji: 're', mean: 'Baris R - Re' },
  { char: 'ろ', romaji: 'ro', mean: 'Baris R - Ro' },
  { char: 'わ', romaji: 'wa', mean: 'Baris W - Wa' },
  { char: 'を', romaji: 'wo', mean: 'Baris W - Wo (Partikel)' },
  { char: 'ん', romaji: 'n', mean: 'Konsonan Sengau N' }
];

const PRESET_KATAKANA_46 = [
  { char: 'ア', romaji: 'a', mean: 'Vokal A' },
  { char: 'イ', romaji: 'i', mean: 'Vokal I' },
  { char: 'ウ', romaji: 'u', mean: 'Vokal U' },
  { char: 'エ', romaji: 'e', mean: 'Vokal E' },
  { char: 'オ', romaji: 'o', mean: 'Vokal O' },
  { char: 'カ', romaji: 'ka', mean: 'Baris K - Ka' },
  { char: 'キ', romaji: 'ki', mean: 'Baris K - Ki' },
  { char: 'ク', romaji: 'ku', mean: 'Baris K - Ku' },
  { char: 'ケ', romaji: 'ke', mean: 'Baris K - Ke' },
  { char: 'コ', romaji: 'ko', mean: 'Baris K - Ko' },
  { char: 'サ', romaji: 'sa', mean: 'Baris S - Sa' },
  { char: 'シ', romaji: 'shi', mean: 'Baris S - Shi' },
  { char: 'ス', romaji: 'su', mean: 'Baris S - Su' },
  { char: 'セ', romaji: 'se', mean: 'Baris S - Se' },
  { char: 'ソ', romaji: 'so', mean: 'Baris S - So' },
  { char: 'タ', romaji: 'ta', mean: 'Baris T - Ta' },
  { char: 'チ', romaji: 'chi', mean: 'Baris T - Chi' },
  { char: 'ツ', romaji: 'tsu', mean: 'Baris T - Tsu' },
  { char: 'テ', romaji: 'te', mean: 'Baris T - Te' },
  { char: 'ト', romaji: 'to', mean: 'Baris T - To' },
  { char: 'ナ', romaji: 'na', mean: 'Baris N - Na' },
  { char: 'ニ', romaji: 'ni', mean: 'Baris N - Ni' },
  { char: 'ヌ', romaji: 'nu', mean: 'Baris N - Nu' },
  { char: 'ネ', romaji: 'ne', mean: 'Baris N - Ne' },
  { char: 'ノ', romaji: 'no', mean: 'Baris N - No' },
  { char: 'ハ', romaji: 'ha', mean: 'Baris H - Ha' },
  { char: 'ヒ', romaji: 'hi', mean: 'Baris H - Hi' },
  { char: 'フ', romaji: 'fu', mean: 'Baris H - Fu' },
  { char: 'ヘ', romaji: 'he', mean: 'Baris H - He' },
  { char: 'ホ', romaji: 'ho', mean: 'Baris H - Ho' },
  { char: 'マ', romaji: 'ma', mean: 'Baris M - Ma' },
  { char: 'ミ', romaji: 'mi', mean: 'Baris M - Mi' },
  { char: 'ム', romaji: 'mu', mean: 'Baris M - Mu' },
  { char: 'メ', romaji: 'me', mean: 'Baris M - Me' },
  { char: 'モ', romaji: 'mo', mean: 'Baris M - Mo' },
  { char: 'ヤ', romaji: 'ya', mean: 'Baris Y - Ya' },
  { char: 'ユ', romaji: 'yu', mean: 'Baris Y - Yu' },
  { char: 'ヨ', romaji: 'yo', mean: 'Baris Y - Yo' },
  { char: 'ラ', romaji: 'ra', mean: 'Baris R - Ra' },
  { char: 'リ', romaji: 'ri', mean: 'Baris R - Ri' },
  { char: 'ル', romaji: 'ru', mean: 'Baris R - Ru' },
  { char: 'レ', romaji: 're', mean: 'Baris R - Re' },
  { char: 'ロ', romaji: 'ro', mean: 'Baris R - Ro' },
  { char: 'ワ', romaji: 'wa', mean: 'Baris W - Wa' },
  { char: 'ヲ', romaji: 'wo', mean: 'Baris W - Wo (Partikel)' },
  { char: 'ン', romaji: 'n', mean: 'Konsonan Sengau N' }
];

const PRESET_KANJI_N5 = [
  { char: '日', romaji: 'hi / nichi', mean: 'Matahari / Hari' },
  { char: '月', romaji: 'tsuki / getsu', mean: 'Bulan' },
  { char: '木', romaji: 'ki / moku', mean: 'Pohon / Kayu' },
  { char: '山', romaji: 'yama / san', mean: 'Gunung' },
  { char: '川', romaji: 'kawa / gawa', mean: 'Sungai' },
  { char: '田', romaji: 'ta / da', mean: 'Sawah' },
  { char: '人', romaji: 'hito / jin', mean: 'Orang / Manusia' },
  { char: '口', romaji: 'kuchi / guchi', mean: 'Mulut' },
  { char: '車', romaji: 'kuruma / sha', mean: 'Mobil / Kendaraan' },
  { char: '門', romaji: 'mon', mean: 'Gerbang' },
  { char: '火', romaji: 'hi / ka', mean: 'Api' },
  { char: '水', romaji: 'mizu / sui', mean: 'Air' },
  { char: '金', romaji: 'kane / kin', mean: 'Emas / Uang' },
  { char: '土', romaji: 'tsuchi / do', mean: 'Tanah' },
  { char: '本', romaji: 'hon', mean: 'Buku / Asal' }
];

const PRESET_VOCAB_HIRAGANA = [
  { char: 'かさ', romaji: 'kasa', mean: 'Payung' },
  { char: 'ねこ', romaji: 'neko', mean: 'Kucing' },
  { char: 'いぬ', romaji: 'inu', mean: 'Anjing' },
  { char: 'ほん', romaji: 'hon', mean: 'Buku' },
  { char: 'みず', romaji: 'mizu', mean: 'Air' },
  { char: 'さくら', romaji: 'sakura', mean: 'Bunga Sakura' },
  { char: 'はな', romaji: 'hana', mean: 'Bunga / Hidung' },
  { char: 'えき', romaji: 'eki', mean: 'Stasiun' },
  { char: 'あめ', romaji: 'ame', mean: 'Hujan' },
  { char: 'すし', romaji: 'sushi', mean: 'Sushi' },
  { char: 'やま', romaji: 'yama', mean: 'Gunung' },
  { char: 'かわ', romaji: 'kawa', mean: 'Sungai' },
  { char: 'つき', romaji: 'tsuki', mean: 'Bulan' },
  { char: 'くるま', romaji: 'kuruma', mean: 'Mobil' },
  { char: 'せんせい', romaji: 'sensei', mean: 'Guru' },
  { char: 'ともだち', romaji: 'tomodachi', mean: 'Teman' },
  { char: 'がくせい', romaji: 'gakusei', mean: 'Murid / Siswa' },
  { char: 'りんご', romaji: 'ringo', mean: 'Apel' },
  { char: 'とり', romaji: 'tori', mean: 'Burung' },
  { char: 'さかな', romaji: 'sakana', mean: 'Ikan' },
  { char: 'みかん', romaji: 'mikan', mean: 'Jeruk' },
  { char: 'たまご', romaji: 'tamago', mean: 'Telur' },
  { char: 'てがみ', romaji: 'tegami', mean: 'Surat' },
  { char: 'あさ', romaji: 'asa', mean: 'Pagi Hari' },
  { char: 'よる', romaji: 'yoru', mean: 'Malam Hari' }
];

const PRESET_VOCAB_KATAKANA = [
  { char: 'パン', romaji: 'pan', mean: 'Roti' },
  { char: 'テレビ', romaji: 'terebi', mean: 'Televisi' },
  { char: 'カメラ', romaji: 'kamera', mean: 'Kamera' },
  { char: 'バス', romaji: 'basu', mean: 'Bus' },
  { char: 'トイレ', romaji: 'toire', mean: 'Toilet' },
  { char: 'ドア', romaji: 'doa', mean: 'Pintu' },
  { char: 'ノート', romaji: 'nooto', mean: 'Buku Catatan' },
  { char: 'ペン', romaji: 'pen', mean: 'Pulpen' },
  { char: 'ホテル', romaji: 'hoteru', mean: 'Hotel' },
  { char: 'コーヒー', romaji: 'koohii', mean: 'Kopi' },
  { char: 'タクシー', romaji: 'takushii', mean: 'Taksi' },
  { char: 'ラジオ', romaji: 'rajio', mean: 'Radio' },
  { char: 'アイス', romaji: 'aisu', mean: 'Es Krim' },
  { char: 'ケーキ', romaji: 'keeki', mean: 'Kue' },
  { char: 'ミルク', romaji: 'miruku', mean: 'Susu' },
  { char: 'シャツ', romaji: 'shatsu', mean: 'Kemeja / Kaos' },
  { char: 'ベッド', romaji: 'beddo', mean: 'Tempat Tidur' },
  { char: 'ビル', romaji: 'biru', mean: 'Gedung' }
];

function buildDefaultQuestions(gameId) {
  const list = [];
  const hMode = (gameId === 'kana-blast' || gameId === 'flash-card' || gameId === 'memory-match' || gameId === 'speed-quiz') ? 'vocab-hiragana' : 'words';
  const kMode = (gameId === 'kana-blast' || gameId === 'flash-card' || gameId === 'memory-match' || gameId === 'speed-quiz') ? 'vocab-katakana' : 'words';

  // 1. Kosakata Hiragana Utuh (kasa, neko, inu, dll)
  PRESET_VOCAB_HIRAGANA.forEach((item, idx) => {
    list.push({
      id: `${gameId}_vh_${idx + 1}`,
      char: item.char,
      romaji: item.romaji,
      mean: item.mean,
      mode: hMode
    });
  });

  // 2. Kosakata Katakana Utuh (pan, terebi, kamera, dll)
  PRESET_VOCAB_KATAKANA.forEach((item, idx) => {
    list.push({
      id: `${gameId}_vk_${idx + 1}`,
      char: item.char,
      romaji: item.romaji,
      mean: item.mean,
      mode: kMode
    });
  });

  // 3. 15 Kanji N5 Dasar
  PRESET_KANJI_N5.forEach((item, idx) => {
    list.push({
      id: `${gameId}_kanji_${idx + 1}`,
      char: item.char,
      romaji: item.romaji,
      mean: item.mean,
      mode: 'kanji-n5'
    });
  });

  return list;
}

const DEFAULT_GAME_CONFIG = {
  'kana-blast': {
    title: 'Kana Blast (Turret Blaster)',
    durations: [30, 45, 60, 90, 999],
    defaultDuration: 60,
    subModes: [
      { id: 'vocab-hiragana', name: 'Kosakata Hiragana (かさ, ねこ, dll.)', active: true },
      { id: 'vocab-katakana', name: 'Kosakata Katakana (パン, テレビ, dll.)', active: true },
      { id: 'kanji-n5', name: 'Kanji N5 Dasar (日, 月, 木, 山, dll.)', active: true },
      { id: 'kana-hiragana', name: 'Aksara Hiragana Dasar', active: true },
      { id: 'kana-katakana', name: 'Aksara Katakana Dasar', active: true },
      { id: 'mix', name: 'Campuran Ekstrem (Kana & Kata)', active: true }
    ],
    customQuestions: buildDefaultQuestions('kana-blast')
  },
  'sky-defense': {
    title: 'Sky Atk Defense (Gerbang Desa)',
    speeds: ['slow', 'normal', 'fast'],
    defaultSpeed: 'normal',
    subModes: [
      { id: 'words', name: 'Kosakata Mini (ねこ, いぬ, かさ, dll.)', active: true },
      { id: 'hiragana', name: 'Hiragana Saja', active: true },
      { id: 'katakana', name: 'Katakana Saja', active: true },
      { id: 'kanji-n5', name: 'Kanji N5 Dasar', active: true },
      { id: 'mix', name: 'Campuran Hiragana & Katakana', active: true }
    ],
    customQuestions: buildDefaultQuestions('sky-defense')
  },
  'flash-card': {
    title: 'Flash Card Kosakata & Kanji',
    subModes: [
      { id: 'all', name: 'Semua Kosakata & Kanji', active: true },
      { id: 'vocab-hiragana', name: 'Kosakata Hiragana (かさ, ねこ)', active: true },
      { id: 'vocab-katakana', name: 'Kosakata Katakana (パン, テレビ)', active: true },
      { id: 'kanji-n5', name: 'Kanji N5 Dasar', active: true }
    ],
    customQuestions: buildDefaultQuestions('flash-card')
  },
  'memory-match': {
    title: 'Memory Match',
    pairsCount: 8,
    subModes: [
      { id: 'all', name: 'Semua Kosakata (Hiragana & Katakana)', active: true },
      { id: 'vocab-hiragana', name: 'Kosakata Hiragana Saja (かさ, ねこ)', active: true },
      { id: 'vocab-katakana', name: 'Kosakata Katakana Saja (パン, テレビ)', active: true },
      { id: 'kanji-n5', name: 'Kanji N5 Dasar', active: true }
    ],
    customQuestions: buildDefaultQuestions('memory-match')
  },
  'speed-quiz': {
    title: 'Speed Quiz Mode',
    duration: 30,
    subModes: [
      { id: 'all', name: 'Semua Kosakata & Kanji', active: true },
      { id: 'vocab-hiragana', name: 'Kosakata Hiragana (かさ, ねこ)', active: true },
      { id: 'vocab-katakana', name: 'Kosakata Katakana (パン, テレビ)', active: true },
      { id: 'kanji-n5', name: 'Kanji N5 Dasar', active: true }
    ],
    customQuestions: buildDefaultQuestions('speed-quiz')
  },
  'word-builder': {
    title: 'Word Builder',
    duration: 90,
    subModes: [
      { id: 'word-builder', name: 'Susun Kosakata', active: true }
    ],
    customQuestions: [
      { id: 'wb_c1', char: 'とうきょう', mean: 'Tokyo (Ibu kota Jepang)', romaji: 't-o-u-k-y-o-u', answer: ['と','う','き','ょ','う'], chars: ['と','う','き','ょ','う','か','さ','ね'], mode: 'word-builder' },
      { id: 'wb_c2', char: 'ふじさん', mean: 'Gunung Fuji', romaji: 'f-u-j-i-s-a-n', answer: ['ふ','じ','さ','ん'], chars: ['ふ','じ','さ','ん','や','ま','て','ら'], mode: 'word-builder' },
      { id: 'wb_c3', char: 'ありがとう', mean: 'Terima Kasih', romaji: 'a-r-i-g-a-t-o-u', answer: ['あ','り','が','と','う'], chars: ['あ','り','が','と','う','こ','そ','ね'], mode: 'word-builder' },
      { id: 'wb_c4', char: 'おはよう', mean: 'Selamat Pagi', romaji: 'o-h-a-y-o-u', answer: ['お','は','よ','う'], chars: ['お','は','よ','う','み','ず','ね','こ'], mode: 'word-builder' },
      { id: 'wb_c5', char: 'ねこ', mean: 'Kucing Lucu', romaji: 'n-e-k-o', answer: ['ね','こ'], chars: ['ね','こ','い','ぬ','と','り','さ','る'], mode: 'word-builder' },
      { id: 'wb_c6', char: 'さくら', mean: 'Bunga Sakura Musim Semi', romaji: 's-a-k-u-r-a', answer: ['さ','く','ら'], chars: ['さ','く','ら','は','な','き','く','さ'], mode: 'word-builder' },
      { id: 'wb_c7', char: 'せんせい', mean: 'Guru Pengajar', romaji: 's-e-n-s-e-i', answer: ['せ','ん','せ','い'], chars: ['せ','ん','せ','い','が','く','こ','う'], mode: 'word-builder' }
    ]
  }
};

const GameConfigManager = {
  _dbCache: null,
  _listeners: [],

  subscribe(fn) {
    if (typeof fn === 'function') this._listeners.push(fn);
  },

  notify() {
    this._listeners.forEach(fn => {
      try { fn(this.get()); } catch (e) {}
    });
  },

  initFromServer(serverConfigs, serverQuestions) {
    if (!serverConfigs || !Array.isArray(serverConfigs) || serverConfigs.length === 0) return;
    const cache = JSON.parse(JSON.stringify(DEFAULT_GAME_CONFIG));
    serverConfigs.forEach(cfg => {
      const gId = cfg.game_id;
      const qList = (serverQuestions || []).filter(q => q.game_id === gId).map(q => ({
        id: String(q.id),
        char: q.char,
        romaji: q.romaji,
        mean: q.meaning,
        mode: q.sub_mode,
        extra_data: q.extra_data
      }));
      cache[gId] = {
        title: cfg.title,
        duration: cfg.duration,
        defaultDuration: cfg.duration,
        durations: [30, 45, 60, 90, 999],
        subModes: Array.isArray(cfg.sub_modes) ? cfg.sub_modes : (DEFAULT_GAME_CONFIG[gId] ? DEFAULT_GAME_CONFIG[gId].subModes : []),
        customQuestions: qList.length > 0 ? qList : (DEFAULT_GAME_CONFIG[gId] ? DEFAULT_GAME_CONFIG[gId].customQuestions : [])
      };
    });
    this._dbCache = cache;
    this.save(cache);
    this.notify();
  },

  async syncFromDatabase() {
    try {
      const res = await fetch('/api/minigames/config');
      if (!res.ok) return;
      const json = await res.json();
      if (json && json.success && json.data) {
        const cache = JSON.parse(JSON.stringify(DEFAULT_GAME_CONFIG));
        for (const gId in json.data) {
          const item = json.data[gId];
          cache[gId] = {
            title: item.title,
            duration: item.duration,
            defaultDuration: item.duration,
            durations: [30, 45, 60, 90, 999],
            subModes: item.subModes || (DEFAULT_GAME_CONFIG[gId] ? DEFAULT_GAME_CONFIG[gId].subModes : []),
            customQuestions: item.customQuestions || []
          };
        }
        this._dbCache = cache;
        this.save(cache);
        this.notify();
      }
    } catch (e) {
      console.warn('GameConfigManager: Gagal sync dari database, menggunakan fallback.', e);
    }
  },

  get() {
    if (this._dbCache) return this._dbCache;
    try {
      const raw = localStorage.getItem(GAME_CONFIG_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        this._dbCache = parsed;
        return parsed;
      }
    } catch (e) {}
    this._dbCache = JSON.parse(JSON.stringify(DEFAULT_GAME_CONFIG));
    return this._dbCache;
  },

  save(config) {
    this._dbCache = config;
    try {
      localStorage.setItem(GAME_CONFIG_STORAGE_KEY, JSON.stringify(config));
    } catch (e) {}
  },

  getGame(gameId) {
    const all = this.get();
    return all[gameId] || DEFAULT_GAME_CONFIG[gameId] || null;
  },

  getSubModes(gameId) {
    const g = this.getGame(gameId);
    return (g && g.subModes) ? g.subModes.filter(m => m.active !== false) : [];
  },

  getAllSubModes(gameId) {
    const g = this.getGame(gameId);
    return (g && g.subModes) ? g.subModes : [];
  },

  getDurations(gameId) {
    const g = this.getGame(gameId);
    return (g && g.durations) ? g.durations : [30, 45, 60, 90, 999];
  },

  getDuration(gameId, fallback = 30) {
    const g = this.getGame(gameId);
    return (g && g.duration) ? g.duration : (g && g.defaultDuration ? g.defaultDuration : fallback);
  },

  getQuestions(gameId, mode = null) {
    const g = this.getGame(gameId);
    if (!g || !g.customQuestions) return [];
    if (!mode || mode === 'all' || mode === 'mix') return g.customQuestions;
    return g.customQuestions.filter(q => {
      if (q.mode === mode) return true;
      if (mode === 'vocab-hiragana' && (q.mode === 'vocab-hiragana' || q.mode === 'kana-hiragana' || q.mode === 'hiragana' || q.mode === 'words')) return true;
      if (mode === 'vocab-katakana' && (q.mode === 'vocab-katakana' || q.mode === 'kana-katakana' || q.mode === 'katakana')) return true;
      if (mode === 'hiragana' && (q.mode === 'hiragana' || q.mode === 'kana-hiragana' || q.mode === 'vocab-hiragana' || q.mode === 'words')) return true;
      if (mode === 'katakana' && (q.mode === 'katakana' || q.mode === 'kana-katakana' || q.mode === 'vocab-katakana')) return true;
      if (mode.includes('kanji') && (q.mode && q.mode.includes('kanji'))) return true;
      return false;
    });
  },

  async setDuration(gameId, duration) {
    const dur = parseInt(duration, 10);
    const all = this.get();
    if (all[gameId]) {
      all[gameId].duration = dur;
      all[gameId].defaultDuration = dur;
      this.save(all);
    }
    try {
      await fetch('/api/minigames/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ game_id: gameId, duration: dur })
      });
    } catch (e) {}
    this.notify();
  },

  async addSubMode(gameId, modeObj) {
    const all = this.get();
    if (all[gameId]) {
      if (!all[gameId].subModes) all[gameId].subModes = [];
      all[gameId].subModes.push(modeObj);
      this.save(all);
    }
    try {
      await fetch('/api/minigames/submodes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ game_id: gameId, id: modeObj.id, name: modeObj.name })
      });
    } catch (e) {}
    this.notify();
  },

  async toggleSubMode(gameId, modeId) {
    const all = this.get();
    if (all[gameId] && all[gameId].subModes) {
      const target = all[gameId].subModes.find(m => m.id === modeId);
      if (target) {
        target.active = !target.active;
        this.save(all);
      }
    }
    try {
      await fetch('/api/minigames/submodes/toggle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ game_id: gameId, submode_id: modeId })
      });
    } catch (e) {}
    this.notify();
  },

  async deleteSubMode(gameId, modeId) {
    const all = this.get();
    if (all[gameId] && all[gameId].subModes) {
      all[gameId].subModes = all[gameId].subModes.filter(m => m.id !== modeId);
      this.save(all);
    }
    try {
      await fetch('/api/minigames/submodes', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ game_id: gameId, submode_id: modeId })
      });
    } catch (e) {}
    this.notify();
  },

  async addQuestion(gameId, questionObj) {
    let savedQuestion = null;
    try {
      const res = await fetch('/api/minigames/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          game_id: gameId,
          sub_mode: questionObj.mode || 'vocab-hiragana',
          char: questionObj.char,
          romaji: questionObj.romaji,
          meaning: questionObj.mean || questionObj.meaning || ''
        })
      });
      const data = await res.json();
      if (data && data.success && data.question) {
        savedQuestion = data.question;
      }
    } catch (e) {}

    const itemToAdd = savedQuestion || {
      id: questionObj.id || ('q_' + Date.now()),
      char: questionObj.char,
      romaji: questionObj.romaji,
      mean: questionObj.mean || questionObj.meaning || '',
      mode: questionObj.mode || 'vocab-hiragana'
    };

    const all = this.get();
    if (all[gameId]) {
      if (!all[gameId].customQuestions) all[gameId].customQuestions = [];
      all[gameId].customQuestions.push(itemToAdd);
      this.save(all);
    }
    this.notify();
    return itemToAdd;
  },

  async updateQuestion(gameId, questionId, updatedObj) {
    try {
      if (!String(questionId).startsWith('cfg_') && !String(questionId).startsWith('q_')) {
        await fetch(`/api/minigames/questions/${questionId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            sub_mode: updatedObj.mode,
            char: updatedObj.char,
            romaji: updatedObj.romaji,
            meaning: updatedObj.mean || updatedObj.meaning || ''
          })
        });
      }
    } catch (e) {}

    const all = this.get();
    if (all[gameId] && all[gameId].customQuestions) {
      const idx = all[gameId].customQuestions.findIndex(q => String(q.id) === String(questionId));
      if (idx !== -1) {
        all[gameId].customQuestions[idx] = Object.assign(all[gameId].customQuestions[idx], updatedObj);
        this.save(all);
      }
    }
    this.notify();
  },

  async deleteQuestion(gameId, questionId) {
    try {
      if (!String(questionId).startsWith('cfg_') && !String(questionId).startsWith('q_')) {
        await fetch(`/api/minigames/questions/${questionId}`, {
          method: 'DELETE',
          headers: { 'Accept': 'application/json' }
        });
      }
    } catch (e) {}

    const all = this.get();
    if (all[gameId] && all[gameId].customQuestions) {
      all[gameId].customQuestions = all[gameId].customQuestions.filter(q => String(q.id) !== String(questionId));
      this.save(all);
    }
    this.notify();
  },

  async loadPreset(gameId, presetType) {
    let toAdd = [];
    if (presetType === 'hiragana' || presetType === 'vocab-hiragana') {
      toAdd = PRESET_VOCAB_HIRAGANA.map(item => ({
        char: item.char,
        romaji: item.romaji,
        mean: item.mean,
        mode: 'vocab-hiragana'
      }));
    } else if (presetType === 'katakana' || presetType === 'vocab-katakana') {
      toAdd = PRESET_VOCAB_KATAKANA.map(item => ({
        char: item.char,
        romaji: item.romaji,
        mean: item.mean,
        mode: 'vocab-katakana'
      }));
    } else if (presetType === 'kanji-n5') {
      toAdd = PRESET_KANJI_N5.map(item => ({
        char: item.char,
        romaji: item.romaji,
        mean: item.mean,
        mode: 'kanji-n5'
      }));
    }

    let addedCount = 0;
    const all = this.get();
    const existing = (all[gameId] && all[gameId].customQuestions) || [];
    const existingKeys = new Set(existing.map(q => q.char + '_' + (q.mode || '')));

    for (const item of toAdd) {
      if (!existingKeys.has(item.char + '_' + item.mode)) {
        await this.addQuestion(gameId, item);
        addedCount++;
      }
    }
    return addedCount;
  },

  async resetToDefault(gameId = null) {
    try {
      await fetch('/api/minigames/reset', { method: 'POST', headers: { 'Accept': 'application/json' } });
      await this.syncFromDatabase();
    } catch (e) {
      if (!gameId) {
        this.save(DEFAULT_GAME_CONFIG);
      } else {
        const all = this.get();
        all[gameId] = JSON.parse(JSON.stringify(DEFAULT_GAME_CONFIG[gameId]));
        this.save(all);
      }
      this.notify();
    }
  }
};

window.GameConfigManager = GameConfigManager;

// Otomatis sinkronisasi kosakata minigames dari database SQLite
if (typeof window !== 'undefined') {
  setTimeout(() => {
    try {
      GameConfigManager.syncFromDatabase();
    } catch (e) {}
  }, 100);
}

// ===== MINI GAMES =====
let currentGame = null;
let gameTimer = null;

function showGameMenu() {
  clearInterval(gameTimer);
  stopBlastGame();
  const menu = document.getElementById('game-menu');
  const screen = document.getElementById('game-screen');
  const pageHeader = document.querySelector('#page-games .page-header');
  if (pageHeader) pageHeader.classList.remove('game-active-header');

  if (menu) menu.classList.remove('hidden');
  if (screen) {
    screen.classList.add('hidden');
    screen.innerHTML = '';
  }
  const title = document.getElementById('game-page-title');
  const sub = document.getElementById('game-page-subtitle');
  if (title) title.textContent = 'Mini Games Bahasa Jepang';
  if (sub) sub.textContent = 'Uji pemahaman dan kecepatan refleks membaca aksara Jepang';

  const backBtn = document.getElementById('games-back-btn');
  if (backBtn) backBtn.onclick = () => showPage('home');
}

function startGame(type) {
  clearInterval(gameTimer);
  stopBlastGame();
  const menu = document.getElementById('game-menu');
  const screen = document.getElementById('game-screen');
  const pageHeader = document.querySelector('#page-games .page-header');
  if (pageHeader) pageHeader.classList.add('game-active-header');

  if (menu) menu.classList.add('hidden');
  if (screen) screen.classList.remove('hidden');

  const backBtn = document.getElementById('games-back-btn');
  if (backBtn) backBtn.onclick = showGameMenu;

  currentGame = type;

  if (type === 'flash-card') startFlashCard();
  else if (type === 'memory-match') startMemoryMatch();
  else if (type === 'speed-quiz') startSpeedQuiz();
  else if (type === 'word-builder') startWordBuilder();
  else if (type === 'kana-blast') startKanaBlast();
}

// ==== 1. FLASH CARD GAME (HIRAGANA, KATAKANA, & HURUF BERBINTANG) ====
const FLASH_STARRED_KEY = 'sijapanese_flashcard_starred';

function getFlashStoredIds(key = FLASH_STARRED_KEY) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveFlashStoredIds(key, ids) {
  try {
    localStorage.setItem(key, JSON.stringify(ids));
  } catch (e) {}
}

function isFlashCardStarred(cardId) {
  return getFlashStoredIds(FLASH_STARRED_KEY).includes(cardId);
}

function toggleFlashCardStar(cardId, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  let starred = getFlashStoredIds(FLASH_STARRED_KEY);
  const idx = starred.indexOf(cardId);
  const isNowStarred = idx === -1;
  if (isNowStarred) {
    starred.push(cardId);
    showToast('Huruf ditandai untuk dihafalkan.', 'success');
  } else {
    starred.splice(idx, 1);
    showToast('Tanda bintang dihapus dari huruf.', 'info');
  }
  saveFlashStoredIds(FLASH_STARRED_KEY, starred);
  renderFlashCard();
}

function getFlashMasterList() {
  const list = [];
  
  // 1. Prioritaskan Bank Soal dari GameConfigManager (Hiragana, Katakana, Kanji, dll.)
  if (typeof GameConfigManager !== 'undefined') {
    const customList = GameConfigManager.getQuestions('flash-card');
    if (customList && customList.length > 0) {
      customList.forEach(q => {
        const modeKey = q.mode || q.subMode || 'hiragana';
        const isKanji = modeKey.includes('kanji');
        const isKata = modeKey.includes('katakana');
        const isHira = !isKanji && !isKata;
        list.push({
          id: 'cfg_' + (q.id || Math.random().toString(36).substr(2, 9)),
          char: q.char,
          romaji: q.romaji,
          type: isHira ? 'hiragana' : (isKata ? 'katakana' : modeKey),
          typeLabel: isHira ? 'Hiragana' : (isKata ? 'Katakana' : (isKanji ? 'Kanji' : modeKey.toUpperCase())),
          badgeClass: isHira ? 'hiragana' : (isKata ? 'katakana' : (isKanji ? 'kanji' : 'hiragana')),
          category: 'Bank Soal Guru',
          group: q.mean || q.meaning || '',
          example: q.example || (q.mean ? `${q.char} = ${q.mean}` : ''),
          meaning: q.mean || q.meaning || '',
          speech: q.char
        });
      });
      return list;
    }
  }

  // Fallback jika belum tersimpan di GameConfigManager
  if (typeof HIRAGANA !== 'undefined' && Array.isArray(HIRAGANA)) {
    HIRAGANA.forEach((h, idx) => {
      list.push({
        id: 'h_' + (h.char || idx),
        char: h.char,
        romaji: h.romaji,
        type: 'hiragana',
        typeLabel: 'Hiragana',
        badgeClass: 'hiragana',
        category: h.category || 'Dasar',
        group: h.group || '',
        example: h.example || '',
        meaning: h.mnemonic || '',
        speech: h.char
      });
    });
  }

  if (typeof KATAKANA !== 'undefined' && Array.isArray(KATAKANA)) {
    KATAKANA.forEach((k, idx) => {
      list.push({
        id: 'k_' + (k.char || idx),
        char: k.char,
        romaji: k.romaji,
        type: 'katakana',
        typeLabel: 'Katakana',
        badgeClass: 'katakana',
        category: k.category || 'Dasar',
        group: k.group || '',
        example: k.example || '',
        meaning: k.mnemonic || '',
        speech: k.char
      });
    });
  }

  return list;
}

let flashState = {
  mode: 'all',
  cards: [],
  current: 0,
  know: 0,
  dontknow: 0,
  knowCards: [],
  unlearnedCards: [],
  round: 1,
  revealed: false,
};

function getFlashModeLabel(mode) {
  if (mode === 'hiragana') return 'Hiragana';
  if (mode === 'katakana') return 'Katakana';
  if (mode === 'starred') return 'Huruf Berbintang';
  if (mode === 'kanji-n5') return 'Kanji N5 Dasar';
  return 'Semua Huruf';
}

function startFlashCard(mode = null) {
  const title = document.getElementById('game-page-title');
  if (title) title.textContent = 'Flash Card Mode';

  if (mode) {
    flashState.mode = mode;
  } else if (!flashState.mode) {
    flashState.mode = 'all';
  }

  const master = getFlashMasterList();
  let filtered = [];
  const currentMode = flashState.mode;

  if (currentMode === 'all') {
    filtered = master;
  } else if (currentMode === 'starred') {
    const starredIds = new Set(getFlashStoredIds(FLASH_STARRED_KEY));
    filtered = master.filter(c => starredIds.has(c.id));
  } else {
    filtered = master.filter(c => c.type === currentMode);
  }

  flashState.cards = shuffle([...filtered]);
  flashState.current = 0;
  flashState.know = 0;
  flashState.dontknow = 0;
  flashState.knowCards = [];
  flashState.unlearnedCards = [];
  flashState.round = 1;
  flashState.revealed = false;

  renderFlashCard();
}

function setFlashMode(newMode) {
  startFlashCard(newMode);
}

function continueUnlearnedFlashCards() {
  if (!flashState.unlearnedCards || flashState.unlearnedCards.length === 0) return;

  flashState.cards = shuffle([...flashState.unlearnedCards]);
  flashState.current = 0;
  flashState.know = 0;
  flashState.dontknow = 0;
  flashState.knowCards = [];
  flashState.unlearnedCards = [];
  flashState.round++;
  flashState.revealed = false;

  showToast(`Melanjutkan ${flashState.cards.length} huruf yang belum hafal`, 'info');
  renderFlashCard();
}

function resetFlashCardSession() {
  startFlashCard(flashState.mode);
  showToast('Sesi flash card direset ke awal.', 'info');
}

function renderFlashCard() {
  const screen = document.getElementById('game-screen');
  if (!screen) return;
  const fs = flashState;

  const starredIds = getFlashStoredIds(FLASH_STARRED_KEY);
  const starredCount = starredIds.length;

  const topBarHtml = `
    <div class="game-top-bar">
      <button class="btn-game-back" onclick="showGameMenu()">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        <span>Kembali ke Menu Game</span>
      </button>
      <span class="game-top-title">Flash Card Mode</span>
    </div>
  `;

  const activeSubModes = (typeof GameConfigManager !== 'undefined')
    ? GameConfigManager.getSubModes('flash-card')
    : [
        { id: 'all', name: 'Semua Huruf' },
        { id: 'hiragana', name: 'Hiragana' },
        { id: 'katakana', name: 'Katakana' },
        { id: 'kanji-n5', name: 'Kanji N5' }
      ];

  const subChipsHtml = activeSubModes.map(sm => `
    <button class="flash-filter-chip ${fs.mode === sm.id ? 'active' : ''}" onclick="setFlashMode('${sm.id}')">
      <span>${sm.name}</span>
    </button>
  `).join('');

  const filterTabsHtml = `
    <div class="flash-filter-container">
      <div class="flash-filter-scroll">
        ${subChipsHtml}
        <button class="flash-filter-chip star-chip ${fs.mode === 'starred' ? 'active' : ''}" onclick="setFlashMode('starred')">
          <span>Huruf Berbintang (${starredCount})</span>
        </button>
      </div>
    </div>
  `;

  // Case 1: Empty deck in filtered mode
  if (!fs.cards || fs.cards.length === 0) {
    const isStarredMode = fs.mode === 'starred';
    
    screen.innerHTML = `
      <div class="flash-game-container">
        ${topBarHtml}
        ${filterTabsHtml}
        <div class="flash-empty-card">
          <div class="flash-empty-crest">
            <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <h3>${isStarredMode ? 'Belum Ada Huruf Berbintang' : 'Kartu Kosong'}</h3>
          <p>
            ${isStarredMode 
              ? 'Tandai huruf yang paling susah dihafal dengan tombol bintang saat latihan. Huruf pilihanmu akan tersimpan rapi di sini.'
              : 'Pilih kategori huruf lain di atas untuk mulai berlatih.'}
          </p>
          <div class="flash-empty-actions">
            <button class="flash-empty-btn primary" onclick="setFlashMode('all')">Mulai Semua Huruf</button>
            <button class="flash-empty-btn secondary" onclick="setFlashMode('hiragana')">Latihan Hiragana</button>
            <button class="flash-empty-btn secondary" onclick="setFlashMode('katakana')">Latihan Katakana</button>
          </div>
        </div>
      </div>
    `;
    return;
  }

  // Case 2: Session finished
  if (fs.current >= fs.cards.length) {
    const hasUnlearned = fs.unlearnedCards && fs.unlearnedCards.length > 0;

    screen.innerHTML = `
      <div class="flash-game-container">
        ${topBarHtml}
        ${filterTabsHtml}
        <div class="quiz-result-card flash-result-card">
          <div class="quiz-result-crest">
            <svg viewBox="0 0 64 64" class="svg-crest-large">
              <circle cx="32" cy="32" r="28" fill="#FAF1EE"/>
              <polyline points="20 32 28 40 44 24" stroke="#BA5444" stroke-width="4" stroke-linecap="round" fill="none"/>
            </svg>
          </div>
          <div class="quiz-result-title">
            ${hasUnlearned ? 'Putaran Flash Card Selesai' : 'Semua Huruf Berhasil Dihafal!'}
          </div>
          <p style="margin:8px 0; color:var(--text-soft);">
            Mode: <strong>${getFlashModeLabel(fs.mode)}</strong>${fs.round > 1 ? ` • Putaran ${fs.round}` : ''} • ${fs.cards.length} huruf telah dipelajari.
          </p>
          
          <div class="flash-result-stats">
            <div class="flash-stat-pill green">
              <span>Sudah Hafal: <strong>${fs.know}</strong></span>
            </div>
            <div class="flash-stat-pill red">
              <span>Belum Hafal: <strong>${fs.dontknow}</strong></span>
            </div>
          </div>

          <div class="flash-result-buttons">
            ${hasUnlearned ? `
              <button class="flash-result-btn primary" onclick="continueUnlearnedFlashCards()">
                <span>Lanjut Huruf yang Belum Hafal (${fs.unlearnedCards.length})</span>
              </button>
            ` : `
              <button class="flash-result-btn primary" onclick="resetFlashCardSession()">
                <span>Mulai Ulang dari Awal</span>
              </button>
            `}

            <button class="flash-result-btn secondary" onclick="resetFlashCardSession()">
              <span>Reset Sesi ke Awal</span>
            </button>

            ${starredCount > 0 && fs.mode !== 'starred' ? `
              <button class="flash-result-btn star" onclick="setFlashMode('starred')">
                <span>Latih Huruf Berbintang (${starredCount})</span>
              </button>
            ` : ''}

            <button class="flash-result-btn secondary" onclick="setFlashMode('all')">
              <span>Kembali ke Semua Huruf</span>
            </button>
            <button class="flash-result-btn secondary" onclick="showGameMenu()">
              <span>Kembali ke Menu Game</span>
            </button>
          </div>
        </div>
      </div>
    `;
    return;
  }

  // Case 3: Active Card
  const card = fs.cards[fs.current];
  const isStarred = isFlashCardStarred(card.id);

  screen.innerHTML = `
    <div class="flash-game-container">
      ${topBarHtml}
      ${filterTabsHtml}

      <div class="flash-progress-info">
        <div class="flash-progress-left">
          <span class="flash-count">Kartu ${fs.current + 1} / ${fs.cards.length}${fs.round > 1 ? ` (Putaran ${fs.round})` : ''}</span>
          <button class="flash-reset-inline-btn" title="Reset sesi ini ke awal" onclick="resetFlashCardSession()">Reset Sesi</button>
        </div>
        <div class="flash-counters">
          <span class="count-know" title="Sudah Hafal">Hafal: ${fs.know}</span>
          <span class="count-dont" title="Belum Hafal">Belum: ${fs.dontknow}</span>
        </div>
      </div>

      <div class="flash-card" id="flash-card-el" onclick="revealFlash()">
        <div class="flash-card-topbar">
          <div class="flash-card-badges">
            <span class="flash-type-badge ${card.badgeClass}">${card.typeLabel}</span>
            ${card.category ? `<span class="flash-sub-badge">${card.category}</span>` : ''}
          </div>
          <div class="flash-card-actions">
            <button class="flash-action-btn audio-btn" title="Dengarkan pelafalan" onclick="event.stopPropagation(); speakJapanese('${card.speech}')">
              <svg viewBox="0 0 24 24" class="svg-icon-mini"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            </button>
            <button class="flash-action-btn star-btn ${isStarred ? 'active' : ''}" title="${isStarred ? 'Hapus dari huruf berbintang' : 'Tandai sebagai huruf yang susah dihafal'}" onclick="toggleFlashCardStar('${card.id}', event)">
              <svg viewBox="0 0 24 24" class="svg-star-icon"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </button>
          </div>
        </div>

        <div class="flash-card-body">
          <span class="flash-char">${card.char}</span>
          <div class="flash-answer" id="flash-answer" style="display:none;">
            <span class="flash-romaji">${card.romaji}</span>
            ${card.example ? `<span class="flash-example">${card.example}</span>` : ''}
          </div>
          <p class="flash-hint" id="flash-hint">
            <span>Klik kartu untuk membuka bacaan</span>
          </p>
        </div>
      </div>

      <div class="flash-btn-row" id="flash-btns">
        <button class="flash-btn audio-listen" onclick="speakJapanese('${card.speech}')">
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
          <span>Dengarkan Suara</span>
        </button>
        <button class="flash-btn reveal" onclick="revealFlash()">
          <span>Buka Jawaban</span>
        </button>
      </div>
    </div>
  `;

  speakJapanese(card.speech);
}

function revealFlash() {
  if (flashState.revealed) return;
  flashState.revealed = true;
  const ans = document.getElementById('flash-answer');
  const hint = document.getElementById('flash-hint');
  const btns = document.getElementById('flash-btns');

  if (ans) ans.style.display = 'flex';
  if (hint) hint.style.display = 'none';

  if (btns) {
    btns.innerHTML = `
      <button class="flash-btn know" onclick="flashAnswer(true)">
        <svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Sudah Hafal (+2 Poin)</span>
      </button>
      <button class="flash-btn dontknow" onclick="flashAnswer(false)">
        <span>Belum Hafal</span>
      </button>
    `;
  }
}

function flashAnswer(know) {
  const card = flashState.cards[flashState.current];
  if (!card) return;

  if (know) {
    flashState.know++;
    flashState.knowCards.push(card);
    addScore(2);
  } else {
    flashState.dontknow++;
    flashState.unlearnedCards.push(card);
  }

  flashState.current++;
  flashState.revealed = false;
  renderFlashCard();
}

// ==== 2. MEMORY MATCH GAME ====
let memState = {};

function startMemoryMatch(mode = null) {
  const title = document.getElementById('game-page-title');
  if (title) title.textContent = 'Memory Match Mode';

  if (mode) memState.mode = mode;
  else if (!memState.mode) memState.mode = 'hiragana';

  const m = memState.mode;
  let poolSource = [];

  if (typeof GameConfigManager !== 'undefined') {
    const q = GameConfigManager.getQuestions('memory-match', m);
    if (q && q.length > 0) {
      poolSource = q.map(item => ({ char: item.char, romaji: item.romaji }));
    }
  }

  if (!poolSource || poolSource.length === 0) {
    if (m === 'katakana') {
      poolSource = KATAKANA.map(k => ({ char: k.char, romaji: k.romaji }));
    } else if (m === 'all') {
      poolSource = [
        ...HIRAGANA.map(h => ({ char: h.char, romaji: h.romaji })),
        ...KATAKANA.map(k => ({ char: k.char, romaji: k.romaji }))
      ];
    } else if (m === 'kanji-n5' || m.includes('kanji')) {
      poolSource = PRESET_KANJI_N5.map(k => ({ char: k.char, romaji: k.romaji }));
    } else {
      poolSource = HIRAGANA.map(h => ({ char: h.char, romaji: h.romaji }));
    }
  }

  const pool = shuffle(poolSource).slice(0, 8);
  const pairs = shuffle([
    ...pool.map((c, i) => ({ id: i, type: 'jp', val: c.char, match: i, audio: c.char })),
    ...pool.map((c, i) => ({ id: i + 8, type: 'ro', val: c.romaji, match: i, audio: c.char })),
  ]);

  memState = {
    mode: m,
    cards: pairs,
    flipped: [],
    matched: new Set(),
    moves: 0,
    waiting: false,
  };
  renderMemoryGrid();
}

function renderMemoryGrid() {
  const screen = document.getElementById('game-screen');
  if (!screen) return;
  const ms = memState;
  const allMatched = ms.matched.size === (ms.cards.length / 2);

  const topBarHtml = `
    <div class="game-top-bar">
      <button class="btn-game-back" onclick="showGameMenu()">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        <span>Kembali ke Menu Game</span>
      </button>
      <span class="game-top-title">Memory Match Mode</span>
    </div>
  `;

  const activeSubModes = (typeof GameConfigManager !== 'undefined')
    ? GameConfigManager.getSubModes('memory-match')
    : [
        { id: 'hiragana', name: 'Hiragana Saja' },
        { id: 'katakana', name: 'Katakana Saja' },
        { id: 'kanji-n5', name: 'Kanji N5 Dasar' },
        { id: 'all', name: 'Campuran' }
      ];

  const subChipsHtml = `
    <div class="flash-filter-container" style="margin-bottom:14px;">
      <div class="flash-filter-scroll">
        ${activeSubModes.map(sm => `
          <button class="flash-filter-chip ${ms.mode === sm.id ? 'active' : ''}" onclick="startMemoryMatch('${sm.id}')">
            <span>${sm.name}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;

  screen.innerHTML = `
    ${topBarHtml}
    ${subChipsHtml}
    <div class="memory-stats">
      <div class="mem-stat">Langkah: ${ms.moves}</div>
      <div class="mem-stat">Cocok: ${ms.matched.size} / ${ms.cards.length / 2}</div>
      <div class="mem-stat">Total Skor: ${state.score} poin</div>
    </div>
    <div class="memory-grid" id="memory-grid">
      ${ms.cards.map((c, idx) => {
        const isFlipped = ms.flipped.includes(idx) || ms.matched.has(c.match);
        const isMatched = ms.matched.has(c.match);
        return `
          <div class="memory-card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}"
               id="mc-${idx}" onclick="flipMemory(${idx})">
            ${isFlipped ? `
              <span class="memory-card-inner ${c.type === 'jp' ? 'jp-char' : 'ro-char'}">${c.val}</span>
            ` : `
              <svg viewBox="0 0 40 40" class="card-back-pattern">
                <rect width="40" height="40" rx="6" fill="#1E293B"/>
                <circle cx="20" cy="20" r="10" stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3" fill="none"/>
                <path d="M20 14v12M14 20h12" stroke="#475569" stroke-width="1.5"/>
              </svg>
            `}
          </div>
        `;
      }).join('')}
    </div>
    ${allMatched ? `
      <div class="quiz-result-card" style="margin-top:24px;">
        <div class="quiz-result-crest">
          <svg viewBox="0 0 64 64" class="svg-crest-large">
            <circle cx="32" cy="32" r="28" fill="#1E293B"/>
            <polygon points="32 12 37 23 49 24 40 33 43 45 32 39 21 45 24 33 15 24 27 23" fill="#F59E0B"/>
          </svg>
        </div>
        <div class="quiz-result-title">Selesai! Seluruh Kartu Cocok!</div>
        <p style="color:var(--text-soft);">Berhasil diselesaikan dalam ${ms.moves} kali tebakan.</p>
        <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap; margin-top:16px;">
          <button class="quiz-result-restart" onclick="startMemoryMatch(memState.mode)">
            <svg viewBox="0 0 24 24" class="svg-icon-mini"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
            <span>Mainkan Lagi</span>
          </button>
          <button class="quiz-result-restart" style="background:#F1F5F9; color:#334155;" onclick="showGameMenu()">
            <span>Kembali ke Menu Game</span>
          </button>
        </div>
      </div>
    ` : ''}
  `;
}

function flipMemory(idx) {
  const ms = memState;
  if (ms.waiting) return;
  if (ms.flipped.includes(idx)) return;
  if (ms.matched.has(ms.cards[idx].match)) return;
  if (ms.flipped.length >= 2) return;

  ms.flipped.push(idx);
  renderMemoryGrid();

  if (ms.flipped.length === 2) {
    ms.moves++;
    ms.waiting = true;
    const [a, b] = ms.flipped;

    if (ms.cards[a].match === ms.cards[b].match) {
      ms.matched.add(ms.cards[a].match);
      addScore(10);
      showToast('Pasangan Cocok! +10 Poin', 'success');
      speakJapanese(ms.cards[a].audio);
      ms.flipped = [];
      ms.waiting = false;
      setTimeout(renderMemoryGrid, 350);
    } else {
      setTimeout(() => {
        ms.flipped = [];
        ms.waiting = false;
        renderMemoryGrid();
      }, 900);
    }
  }
}

// ==== 3. SPEED QUIZ GAME ====
let speedState = {};

function startSpeedQuiz(mode = null) {
  const title = document.getElementById('game-page-title');
  if (title) title.textContent = 'Speed Quiz Mode';

  clearInterval(gameTimer);

  if (mode) speedState.mode = mode;
  else if (!speedState.mode) speedState.mode = 'all';

  const m = speedState.mode;
  let combined = [];

  if (typeof GameConfigManager !== 'undefined') {
    const q = GameConfigManager.getQuestions('speed-quiz', m);
    if (q && q.length > 0) {
      combined = q.map(item => ({ char: item.char, romaji: item.romaji }));
    }
  }

  if (!combined || combined.length === 0) {
    if (m === 'hiragana') {
      combined = HIRAGANA.map(h => ({ char: h.char, romaji: h.romaji }));
    } else if (m === 'katakana') {
      combined = KATAKANA.map(k => ({ char: k.char, romaji: k.romaji }));
    } else if (m === 'kanji-n5' || m.includes('kanji')) {
      combined = PRESET_KANJI_N5.map(k => ({ char: k.char, romaji: k.romaji }));
    } else {
      combined = [
        ...HIRAGANA.map(h => ({ char: h.char, romaji: h.romaji })),
        ...KATAKANA.map(k => ({ char: k.char, romaji: k.romaji }))
      ];
    }
  }

  const configuredDuration = (typeof GameConfigManager !== 'undefined')
    ? GameConfigManager.getDuration('speed-quiz', 30)
    : 30;

  speedState = {
    mode: m,
    questions: shuffle(combined),
    current: 0,
    correct: 0,
    wrong: 0,
    maxTime: configuredDuration,
    timeLeft: configuredDuration,
    running: true,
  };

  renderSpeedQuiz();

  gameTimer = setInterval(() => {
    if (!speedState.running) return;
    speedState.timeLeft--;
    updateTimerDisplay();

    if (speedState.timeLeft <= 0) {
      speedState.running = false;
      clearInterval(gameTimer);
      renderSpeedResult();
    }
  }, 1000);
}

function renderSpeedQuiz() {
  const ss = speedState;
  const q = ss.questions[ss.current % ss.questions.length];
  const allChars = ss.questions;
  const wrong = shuffle(allChars.filter(c => c.romaji !== q.romaji)).slice(0, 3).map(c => c.romaji);
  const options = shuffle([q.romaji, ...wrong]);

  const topBarHtml = `
    <div class="game-top-bar">
      <button class="btn-game-back" onclick="clearInterval(gameTimer); showGameMenu();">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        <span>Kembali ke Menu Game</span>
      </button>
      <span class="game-top-title">Speed Quiz Mode</span>
    </div>
  `;

  const activeSubModes = (typeof GameConfigManager !== 'undefined')
    ? GameConfigManager.getSubModes('speed-quiz')
    : [
        { id: 'all', name: 'Semua Huruf' },
        { id: 'hiragana', name: 'Hiragana Saja' },
        { id: 'katakana', name: 'Katakana Saja' },
        { id: 'kanji-n5', name: 'Kanji N5 Dasar' }
      ];

  const subChipsHtml = `
    <div class="flash-filter-container" style="margin-bottom:14px;">
      <div class="flash-filter-scroll">
        ${activeSubModes.map(sm => `
          <button class="flash-filter-chip ${ss.mode === sm.id ? 'active' : ''}" onclick="startSpeedQuiz('${sm.id}')">
            <span>${sm.name}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;

  const screen = document.getElementById('game-screen');
  if (!screen) return;

  screen.innerHTML = `
    ${topBarHtml}
    ${subChipsHtml}
    <div class="speed-header">
      <div class="speed-timer-block">
        <div class="speed-timer" id="speed-timer">${ss.timeLeft}s</div>
        <div class="speed-timer-sub">Sisa Waktu</div>
      </div>
      <div class="speed-score">
        <span class="speed-correct">Benar: ${ss.correct}</span>
        <span class="speed-wrong">Salah: ${ss.wrong}</span>
      </div>
    </div>
    <div class="timer-bar-wrap">
      <div class="timer-bar" id="timer-bar" style="width:${(ss.timeLeft / ss.maxTime) * 100}%"></div>
    </div>
    <div class="quiz-question-card">
      <div class="quiz-char-row">
        <span class="quiz-char">${q.char}</span>
        <button class="quiz-sound-btn" onclick="speakJapanese('${q.char}')" title="Dengarkan Suara">
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
        </button>
      </div>
      <p class="quiz-instruction">Pilih romaji yang sesuai:</p>
    </div>
    <div class="quiz-options">
      ${options.map(opt => `
        <button class="quiz-option-btn" onclick="answerSpeed('${opt}','${q.romaji}')">
          ${opt}
        </button>
      `).join('')}
    </div>
  `;

  speakJapanese(q.char);
}

function updateTimerDisplay() {
  const el = document.getElementById('speed-timer');
  const bar = document.getElementById('timer-bar');
  if (el) el.textContent = speedState.timeLeft + 's';
  if (bar) bar.style.width = ((speedState.timeLeft / speedState.maxTime) * 100) + '%';
  if (speedState.timeLeft <= 8 && el) {
    el.style.color = '#EF4444';
  } else if (el) {
    el.style.color = '';
  }
}

function answerSpeed(chosen, correct) {
  if (!speedState.running) return;
  const isCorrect = chosen === correct;

  if (isCorrect) {
    speedState.correct++;
    speedState.timeLeft = Math.min(speedState.timeLeft + 2, speedState.maxTime);
    addScore(5);
    showToast('Tepat! +5 Poin & Tambah 2 Detik', 'success');
  } else {
    speedState.wrong++;
    speedState.timeLeft = Math.max(speedState.timeLeft - 3, 1);
    showToast('Salah! Romaji yang benar: ' + correct + ' (-3s)', 'error');
  }

  speedState.current++;
  renderSpeedQuiz();
}

function renderSpeedResult() {
  const ss = speedState;
  const screen = document.getElementById('game-screen');
  if (!screen) return;
  const total = ss.correct + ss.wrong;
  const pct = total > 0 ? Math.round(ss.correct / total * 100) : 0;

  const topBarHtml = `
    <div class="game-top-bar">
      <button class="btn-game-back" onclick="showGameMenu()">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        <span>Kembali ke Menu Game</span>
      </button>
      <span class="game-top-title">Speed Quiz Selesai</span>
    </div>
  `;

  screen.innerHTML = `
    ${topBarHtml}
    <div class="quiz-result-card">
      <div class="quiz-result-crest">
        <svg viewBox="0 0 64 64" class="svg-crest-large">
          <circle cx="32" cy="32" r="28" fill="#1E293B"/>
          <circle cx="32" cy="32" r="16" fill="none" stroke="#F59E0B" stroke-width="3"/>
          <polyline points="32 22 32 32 38 38" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="quiz-result-title">Waktu Habis!</div>
      <div style="display:flex; gap:16px; justify-content:center; margin:16px 0; flex-wrap:wrap;">
        <div class="stat-pill green-pill">Benar: ${ss.correct}</div>
        <div class="stat-pill red-pill">Salah: ${ss.wrong}</div>
      </div>
      <p style="color:var(--text-soft);">Akurasi Jawaban: ${pct}%</p>
      <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap; margin-top:16px;">
        <button class="quiz-result-restart" onclick="startSpeedQuiz(speedState.mode)">
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
          <span>Main Lagi</span>
        </button>
        <button class="quiz-result-restart" style="background:#F1F5F9; color:#334155;" onclick="showGameMenu()">
          <span>Kembali ke Menu Game</span>
        </button>
      </div>
    </div>
  `;
}

// ==== 4. WORD BUILDER GAME ====
let wbState = {};

function startWordBuilder() {
  const title = document.getElementById('game-page-title');
  if (title) title.textContent = 'Word Builder Mode';

  let words = [...WORD_BUILDER_WORDS];
  if (typeof GameConfigManager !== 'undefined') {
    const extra = GameConfigManager.getQuestions('word-builder');
    if (extra && extra.length > 0) {
      extra.forEach(item => {
        if (item.answer && item.chars) {
          words.push(item);
        } else if (item.char) {
          // auto build word builder structure from single char/word
          const charsArr = item.char.split('');
          const dummyDistractors = ['あ','い','う','え','お','か','さ','た','な','は'];
          const dist = shuffle(dummyDistractors.filter(d => !charsArr.includes(d))).slice(0, 3);
          words.push({
            meaning: item.mean || item.meaning || item.romaji,
            hint: item.romaji,
            answer: charsArr,
            chars: shuffle([...charsArr, ...dist])
          });
        }
      });
    }
  }

  wbState = {
    words: shuffle(words),
    current: 0,
    score: 0,
    currentAnswer: [],
    usedChoices: {},
  };
  renderWordBuilder();
}

function renderWordBuilder() {
  const ws = wbState;
  const screen = document.getElementById('game-screen');
  if (!screen) return;

  const topBarHtml = `
    <div class="game-top-bar">
      <button class="btn-game-back" onclick="showGameMenu()">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        <span>Kembali ke Menu Game</span>
      </button>
      <span class="game-top-title">Word Builder Mode</span>
    </div>
  `;

  if (ws.current >= ws.words.length) {
    screen.innerHTML = `
      ${topBarHtml}
      <div class="quiz-result-card">
        <div class="quiz-result-crest">
          <svg viewBox="0 0 64 64" class="svg-crest-large">
            <circle cx="32" cy="32" r="28" fill="#1E293B"/>
            <polyline points="20 32 28 40 44 24" stroke="#10B981" stroke-width="4" stroke-linecap="round" fill="none"/>
          </svg>
        </div>
        <div class="quiz-result-title">Latihan Word Builder Selesai!</div>
        <p style="color:var(--text-soft); margin:8px 0;">Skor akhir penyusunan kata: <b>${ws.score} / ${ws.words.length}</b></p>
        <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap; margin-top:16px;">
          <button class="quiz-result-restart" onclick="startWordBuilder()">
            <svg viewBox="0 0 24 24" class="svg-icon-mini"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
            <span>Ulangi Tantangan</span>
          </button>
          <button class="quiz-result-restart" style="background:#F1F5F9; color:#334155;" onclick="showGameMenu()">
            <span>Kembali ke Menu Game</span>
          </button>
        </div>
      </div>
    `;
    return;
  }

  const word = ws.words[ws.current];
  const shuffledChars = shuffle([...word.chars]);

  screen.innerHTML = `
    ${topBarHtml}
    <div class="wb-header-bar">
      <span>Kata ${ws.current + 1} dari ${ws.words.length}</span>
      <span>${ws.score} Kata Berhasil Disusun</span>
    </div>
    <div class="wb-target">
      <div class="wb-meaning-row">
        <span class="wb-meaning">${word.meaning}</span>
        <button class="wb-audio-btn" onclick="speakJapanese('${word.answer.join('')}')" title="Dengarkan kata">
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
        </button>
      </div>
      <div class="wb-hint">${word.hint || word.romaji || ''}</div>
      <div class="wb-answer-slots" id="wb-slots">
        ${word.answer.map((_, i) => `
          <div class="wb-slot" id="wb-slot-${i}" onclick="removeFromSlot(${i})">_</div>
        `).join('')}
      </div>
    </div>
    <p style="text-align:center; color:var(--text-soft); font-size:0.9rem; margin-bottom:12px;">Pilih huruf di bawah ini untuk mengisi kotak:</p>
    <div class="wb-choices" id="wb-choices">
      ${shuffledChars.map((c, i) => `
        <div class="wb-choice" id="wb-choice-${i}" onclick="addToSlot(${i}, '${c}')">
          ${c}
        </div>
      `).join('')}
    </div>
    <div class="wb-actions">
      <button class="wb-btn clear" onclick="clearWbSlots()">
        <span>Reset Kotak</span>
      </button>
      <button class="wb-btn submit" onclick="submitWb()">
        <svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Periksa Kata</span>
      </button>
    </div>
  `;

  wbState.currentAnswer = new Array(word.answer.length).fill(null);
  wbState.usedChoices = {};
  wbState.shuffledChars = shuffledChars;

  speakJapanese(word.answer.join(''));
}

function addToSlot(choiceIdx, char) {
  const ws = wbState;
  if (ws.usedChoices[choiceIdx]) return;

  const emptySlot = ws.currentAnswer.indexOf(null);
  if (emptySlot === -1) return;

  ws.currentAnswer[emptySlot] = { char, choiceIdx };
  ws.usedChoices[choiceIdx] = true;

  const slotEl = document.getElementById('wb-slot-' + emptySlot);
  if (slotEl) {
    slotEl.textContent = char;
    slotEl.classList.add('filled');
  }
  const choiceEl = document.getElementById('wb-choice-' + choiceIdx);
  if (choiceEl) choiceEl.classList.add('used');
}

function removeFromSlot(slotIdx) {
  const ws = wbState;
  const entry = ws.currentAnswer[slotIdx];
  if (!entry) return;

  const choiceIdx = entry.choiceIdx;
  ws.currentAnswer[slotIdx] = null;
  delete ws.usedChoices[choiceIdx];

  const slotEl = document.getElementById('wb-slot-' + slotIdx);
  if (slotEl) {
    slotEl.textContent = '_';
    slotEl.classList.remove('filled');
  }
  const choiceEl = document.getElementById('wb-choice-' + choiceIdx);
  if (choiceEl) choiceEl.classList.remove('used');
}

function clearWbSlots() {
  const word = wbState.words[wbState.current];
  wbState.currentAnswer = new Array(word.answer.length).fill(null);
  wbState.usedChoices = {};
  document.querySelectorAll('.wb-slot').forEach(s => {
    s.textContent = '_';
    s.classList.remove('filled');
  });
  document.querySelectorAll('.wb-choice').forEach(c => c.classList.remove('used'));
}

function submitWb() {
  const ws = wbState;
  const word = ws.words[ws.current];
  const answer = ws.currentAnswer.map(a => a ? a.char : null);

  if (answer.includes(null)) {
    showToast('Lengkapi semua kotak huruf terlebih dahulu.', 'info');
    return;
  }

  const isCorrect = answer.join('') === word.answer.join('');
  if (isCorrect) {
    ws.score++;
    addScore(15);
    showToast('Hebat! Susunan kata benar: ' + word.answer.join('') + ' (+15 Poin)', 'success');
    speakJapanese(word.answer.join(''));
  } else {
    showToast('Susunan kurang tepat. Kata yang benar: ' + word.answer.join(''), 'error');
  }

  ws.current++;
  setTimeout(renderWordBuilder, 1200);
}

// ==== 5. KANA BLAST (QUIZLET-STYLE TURRET BLASTER) ====
const BLAST_VOCAB_HIRAGANA = [
  { char: 'かさ', romaji: 'kasa', mean: 'Payung' },
  { char: 'ねこ', romaji: 'neko', mean: 'Kucing' },
  { char: 'いぬ', romaji: 'inu', mean: 'Anjing' },
  { char: 'さくら', romaji: 'sakura', mean: 'Bunga Sakura' },
  { char: 'みず', romaji: 'mizu', mean: 'Air' },
  { char: 'やま', romaji: 'yama', mean: 'Gunung' },
  { char: 'すし', romaji: 'sushi', mean: 'Sushi' },
  { char: 'はな', romaji: 'hana', mean: 'Bunga' },
  { char: 'とり', romaji: 'tori', mean: 'Burung' },
  { char: 'あめ', romaji: 'ame', mean: 'Hujan' },
  { char: 'つき', romaji: 'tsuki', mean: 'Bulan' },
  { char: 'ほん', romaji: 'hon', mean: 'Buku' },
  { char: 'くるま', romaji: 'kuruma', mean: 'Mobil' },
  { char: 'そら', romaji: 'sora', mean: 'Langit' },
  { char: 'ゆき', romaji: 'yuki', mean: 'Salju' },
  { char: 'かわ', romaji: 'kawa', mean: 'Sungai' },
  { char: 'てんき', romaji: 'tenki', mean: 'Cuaca' },
  { char: 'がっこう', romaji: 'gakkou', mean: 'Sekolah' },
  { char: 'でんしゃ', romaji: 'densha', mean: 'Kereta' },
  { char: 'さかな', romaji: 'sakana', mean: 'Ikan' },
  { char: 'ごはん', romaji: 'gohan', mean: 'Nasi' },
  { char: 'おちゃ', romaji: 'ocha', mean: 'Teh Hijau' },
  { char: 'あさ', romaji: 'asa', mean: 'Pagi' },
  { char: 'よる', romaji: 'yoru', mean: 'Malam' },
  { char: 'えき', romaji: 'eki', mean: 'Stasiun' },
  { char: 'うみ', romaji: 'umi', mean: 'Laut' },
  { char: 'いえ', romaji: 'ie', mean: 'Rumah' },
  { char: 'まち', romaji: 'machi', mean: 'Kota' },
  { char: 'ともだち', romaji: 'tomodachi', mean: 'Teman' },
  { char: 'て', romaji: 'te', mean: 'Tangan' },
  { char: 'め', romaji: 'me', mean: 'Mata' },
  { char: 'みち', romaji: 'michi', mean: 'Jalan' },
  { char: 'ふね', romaji: 'fune', mean: 'Kapal' },
  { char: 'き', romaji: 'ki', mean: 'Pohon' },
];

const BLAST_VOCAB_KATAKANA = [
  { char: 'パン', romaji: 'pan', mean: 'Roti' },
  { char: 'テレビ', romaji: 'terebi', mean: 'TV' },
  { char: 'コーヒー', romaji: 'koohii', mean: 'Kopi' },
  { char: 'カメラ', romaji: 'kamera', mean: 'Kamera' },
  { char: 'バス', romaji: 'basu', mean: 'Bus' },
  { char: 'アイス', romaji: 'aisu', mean: 'Es Krim' },
  { char: 'シャツ', romaji: 'shatsu', mean: 'Kemeja' },
  { char: 'ドア', romaji: 'doa', mean: 'Pintu' },
  { char: 'ラジオ', romaji: 'rajio', mean: 'Radio' },
  { char: 'ポスト', romaji: 'posuto', mean: 'Kotak Pos' },
  { char: 'ケーキ', romaji: 'keeki', mean: 'Kue' },
  { char: 'ジュース', romaji: 'juusu', mean: 'Jus' },
  { char: 'ホテル', romaji: 'hoteru', mean: 'Hotel' },
  { char: 'タクシー', romaji: 'takushii', mean: 'Taksi' },
  { char: 'ノート', romaji: 'nooto', mean: 'Buku Catatan' },
  { char: 'ピアノ', romaji: 'piano', mean: 'Piano' },
  { char: 'トマト', romaji: 'tomato', mean: 'Tomat' },
  { char: 'ベッド', romaji: 'beddo', mean: 'Tempat Tidur' },
  { char: 'プール', romaji: 'puuru', mean: 'Kolam' },
  { char: 'ボール', romaji: 'booru', mean: 'Bola' },
  { char: 'ミルク', romaji: 'miruku', mean: 'Susu' },
  { char: 'フォーク', romaji: 'fooku', mean: 'Garpu' },
  { char: 'スプーン', romaji: 'supuun', mean: 'Sendok' },
  { char: 'ナイフ', romaji: 'naifu', mean: 'Pisau' },
];

let blastState = {
  mode: 'vocab-hiragana',
  duration: 60,
  timeLeft: 60,
  score: 0,
  combo: 0,
  maxCombo: 0,
  blastedCount: 0,
  totalShots: 0,
  running: false,
  paused: false,
  targetItem: null,
  bubbles: [],
  animId: null,
  timerInterval: null,
  highScore: 0,
  soundEnabled: true,
  autoVoice: false, // Default: Hening tanpa suara TTS otomatis di game Kana Blast
  barrelAngle: 0,
};

function loadBlastStats() {
  try {
    const saved = JSON.parse(localStorage.getItem('blastStats') || '{}');
    blastState.highScore = saved.highScore || 0;
  } catch (e) {}
}

function saveBlastStats() {
  try {
    localStorage.setItem('blastStats', JSON.stringify({
      highScore: blastState.highScore,
    }));
  } catch (e) {}
}

function playBlastSfx(type) {
  if (!blastState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    if (type === 'laser') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(1350, now);
      osc.frequency.exponentialRampToValueAtTime(130, now + 0.12);
      gain.gain.setValueAtTime(0.28, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === 'pop') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(980, now + 0.03);
      osc.frequency.exponentialRampToValueAtTime(160, now + 0.13);
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.13);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.13);
    } else if (type === 'wrong') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(170, now);
      osc.frequency.setValueAtTime(115, now + 0.08);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    } else if (type === 'combo') {
      const step = Math.min(blastState.combo, 12);
      const freq = 480 * Math.pow(1.05946, step);
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.25, now + 0.16);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.16);
    } else if (type === 'gameover') {
      [440, 554.37, 659.25, 880].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.25, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.35);
      });
    }
  } catch (e) {}
}

function startKanaBlast() {
  loadBlastStats();
  const title = document.getElementById('game-page-title');
  const sub = document.getElementById('game-page-subtitle');
  if (title) title.textContent = 'Kana Blast (Turret Blaster)';
  if (sub) sub.textContent = 'Perhatikan bacaan romaji pada turret meriam di bawah, lalu tembak bubble huruf Jepang yang melayang!';

  renderBlastLobby();
}

function renderBlastLobby() {
  stopBlastGame();
  const screen = document.getElementById('game-screen');
  if (!screen) return;

  const topBarHtml = `
    <div class="game-top-bar">
      <button class="btn-game-back" onclick="showGameMenu()">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        <span>Kembali ke Menu Game</span>
      </button>
      <span class="game-top-title">Kana Blast (Turret Blaster)</span>
    </div>
  `;

  const activeBlastSubModes = (typeof GameConfigManager !== 'undefined')
    ? GameConfigManager.getSubModes('kana-blast')
    : [
        { id: 'vocab-hiragana', name: 'Kosakata Hiragana (かさ, ねこ, dll.)' },
        { id: 'vocab-katakana', name: 'Kosakata Katakana (パン, テレビ, dll.)' },
        { id: 'kanji-n5', name: 'Kanji N5 Dasar (日, 月, 木, 山, dll.)' },
        { id: 'kana-hiragana', name: 'Aksara Hiragana (104 Huruf)' },
        { id: 'kana-katakana', name: 'Aksara Katakana (104 Huruf)' },
        { id: 'mix', name: 'Campuran Ekstrem (Kana & Kata)' }
      ];

  const subModePillsHtml = activeBlastSubModes.map(sm => `
    <button class="blast-pill ${blastState.mode === sm.id ? 'active' : ''}" onclick="setBlastMode('${sm.id}')">
      <span>${sm.name}</span>
    </button>
  `).join('');

  const defaultSec = (typeof GameConfigManager !== 'undefined')
    ? GameConfigManager.getDuration('kana-blast', 60)
    : 60;

  screen.innerHTML = `
    ${topBarHtml}
    <div class="blast-lobby-card">
      <div class="blast-lobby-hero">
        <div class="blast-hero-art">
          <svg class="blast-hero-svg" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="#0284C7" opacity="0.15"/>
            <!-- Floating Bubbles -->
            <circle cx="35" cy="35" r="18" fill="url(#bubbleGradA)" opacity="0.85"/>
            <circle cx="85" cy="40" r="16" fill="url(#bubbleGradB)" opacity="0.85"/>
            <circle cx="60" cy="22" r="12" fill="url(#bubbleGradC)" opacity="0.7"/>
            <text x="35" y="41" text-anchor="middle" fill="#FFFFFF" font-family="'Noto Sans JP', sans-serif" font-weight="900" font-size="14">傘</text>
            <text x="85" y="46" text-anchor="middle" fill="#FFFFFF" font-family="'Noto Sans JP', sans-serif" font-weight="900" font-size="13">猫</text>
            <!-- Turret Canon -->
            <line x1="60" y1="92" x2="60" y2="58" stroke="#38BDF8" stroke-width="6" stroke-linecap="round"/>
            <polygon points="56,58 64,58 60,50" fill="#38BDF8"/>
            <circle cx="60" cy="95" r="22" fill="#0F172A" stroke="#0284C7" stroke-width="4"/>
            <circle cx="60" cy="95" r="12" fill="#0284C7" opacity="0.8"/>
            <!-- Linear Gradients -->
            <defs>
              <linearGradient id="bubbleGradA" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#38BDF8"/>
                <stop offset="100%" stop-color="#0284C7"/>
              </linearGradient>
              <linearGradient id="bubbleGradB" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#F472B6"/>
                <stop offset="100%" stop-color="#DB2777"/>
              </linearGradient>
              <linearGradient id="bubbleGradC" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#FBBF24"/>
                <stop offset="100%" stop-color="#D97706"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h2>KANA BLAST</h2>
        <p>Gaya arcade Quizlet Blast! Di bawah terdapat <strong>turret meriam</strong> bertuliskan romaji target (contoh: <code>kasa</code>). Bidik dan tembak <strong>bubble aksara Jepang</strong> (contoh: <code>かさ</code>) yang beterbangan acak sebelum waktu habis!</p>
      </div>

      <div class="blast-settings-box">
        <div class="blast-setting-group">
          <label class="blast-setting-label">Pilihan Materi:</label>
          <div class="blast-pill-grid">
            ${subModePillsHtml}
          </div>
        </div>

        <div class="blast-setting-group">
          <label class="blast-setting-label">Durasi Waktu:</label>
          <div class="blast-pill-grid blast-duration-grid">
            <button class="blast-pill ${blastState.duration === 30 ? 'active' : ''}" onclick="setBlastDuration(30)">30 Detik (Blitz)</button>
            <button class="blast-pill ${blastState.duration === 45 ? 'active' : ''}" onclick="setBlastDuration(45)">45 Detik</button>
            <button class="blast-pill ${blastState.duration === 60 ? 'active' : ''}" onclick="setBlastDuration(60)">60 Detik (Standar)</button>
            <button class="blast-pill ${blastState.duration === 90 ? 'active' : ''}" onclick="setBlastDuration(90)">90 Detik (Maraton)</button>
            <button class="blast-pill ${blastState.duration === 999 ? 'active' : ''}" onclick="setBlastDuration(999)">Santai (Tanpa Batas)</button>
          </div>
        </div>

        <div class="blast-setting-group">
          <label class="blast-setting-label">Suara Soal (TTS Pelafalan):</label>
          <div class="blast-pill-grid">
            <button class="blast-pill ${!blastState.autoVoice ? 'active' : ''}" onclick="setBlastAutoVoice(false)">Hening / Tanpa Suara TTS</button>
            <button class="blast-pill ${blastState.autoVoice ? 'active' : ''}" onclick="setBlastAutoVoice(true)">Ucapkan Saat Target Muncul</button>
          </div>
        </div>
      </div>

      <div class="blast-lobby-stats-row">
        <div class="blast-stat-card">
          <div class="stat-card-title">Skor Tertinggi</div>
          <div class="stat-card-val gold-val" id="blast-lobby-highscore">${blastState.highScore}</div>
        </div>
        <div class="blast-stat-card">
          <div class="stat-card-title">Mekanik Permainan</div>
          <div class="stat-card-val cyan-val">Auto-Aim &amp; Laser Beam</div>
        </div>
      </div>

      <div class="blast-lobby-actions">
        <button class="blast-start-btn" onclick="initBlastBattle()">
          <svg viewBox="0 0 24 24" class="svg-icon"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <span>Mulai Tembak! (Start Blast)</span>
        </button>
      </div>
    </div>
  `;
}

function setBlastMode(mode) {
  blastState.mode = mode;
  document.querySelectorAll('.blast-setting-group .blast-pill-grid:first-of-type .blast-pill').forEach(btn => {
    btn.classList.remove('active');
  });
  renderBlastLobby();
}

function setBlastDuration(sec) {
  blastState.duration = sec;
  document.querySelectorAll('.blast-duration-grid .blast-pill').forEach(btn => {
    btn.classList.remove('active');
  });
  renderBlastLobby();
}

function setBlastAutoVoice(val) {
  blastState.autoVoice = !!val;
  renderBlastLobby();
}

function getBlastPool() {
  if (typeof GameConfigManager !== 'undefined') {
    const q = GameConfigManager.getQuestions('kana-blast', blastState.mode);
    if (q && q.length > 0) return q;
  }
  if (blastState.mode === 'vocab-hiragana') return BLAST_VOCAB_HIRAGANA;
  if (blastState.mode === 'vocab-katakana') return BLAST_VOCAB_KATAKANA;
  if (blastState.mode === 'kanji-n5' || blastState.mode.includes('kanji')) {
    return PRESET_KANJI_N5;
  }
  if (blastState.mode === 'kana-hiragana' || blastState.mode === 'hiragana') {
    return PRESET_HIRAGANA_46;
  }
  if (blastState.mode === 'kana-katakana' || blastState.mode === 'katakana') {
    return PRESET_KATAKANA_46;
  }
  return [...PRESET_VOCAB_HIRAGANA, ...PRESET_VOCAB_KATAKANA];
}

function initBlastBattle() {
  blastState.score = 0;
  blastState.combo = 0;
  blastState.maxCombo = 0;
  blastState.blastedCount = 0;
  blastState.totalShots = 0;
  blastState.timeLeft = blastState.duration;
  blastState.running = true;
  blastState.paused = false;
  blastState.bubbles = [];
  blastState.barrelAngle = 0;

  const screen = document.getElementById('game-screen');
  if (!screen) return;

  const modeLabel = blastState.mode === 'vocab-hiragana' ? 'Kosakata Hiragana' :
                    blastState.mode === 'vocab-katakana' ? 'Kosakata Katakana' :
                    blastState.mode === 'kanji-n5' ? 'Kanji N5 Dasar' :
                    blastState.mode === 'kana-hiragana' ? 'Aksara Hiragana' :
                    blastState.mode === 'kana-katakana' ? 'Aksara Katakana' : 'Campuran';

  screen.innerHTML = `
    <div class="blast-game-container">
      <!-- HUD BAR (2-ROW CLEAN LAYOUT) -->
      <div class="blast-hud">
        <div class="blast-hud-row-top">
          <div class="blast-hud-left">
            <button class="blast-hud-btn" onclick="stopBlastGame(); showGameMenu();" title="Kembali ke Menu Game">
              <svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="15 18 9 12 15 6"/></svg>
              <span>Menu Game</span>
            </button>
            <button class="blast-hud-btn" onclick="renderBlastLobby()" title="Kembali ke Pengaturan">
              <svg viewBox="0 0 24 24" class="svg-icon-mini"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              <span>Lobi</span>
            </button>
            <div class="blast-hud-mode-pill">${modeLabel}</div>
          </div>

          <div class="blast-hud-right">
            <div class="blast-combo-pill" id="blast-combo-pill">
              <span id="blast-combo-text">1x Streak</span>
            </div>
            <div class="blast-score-pill">
              <svg viewBox="0 0 24 24" class="svg-icon-mini filled-gold"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <span id="blast-score-text">0</span>
            </div>
            <button class="blast-hud-btn icon-only" id="blast-sound-btn" onclick="toggleBlastSound()" title="Efek Suara">
              <svg viewBox="0 0 24 24" class="svg-icon-mini" id="blast-sound-icon">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
              </svg>
            </button>
            <button class="blast-hud-btn icon-only" id="blast-pause-btn" onclick="toggleBlastPause()" title="Jeda">
              <svg viewBox="0 0 24 24" class="svg-icon-mini" id="blast-pause-icon">
                <rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="blast-hud-row-target">
          <div class="blast-timer-pill" id="blast-timer-pill">
            <svg viewBox="0 0 24 24" class="svg-icon-mini"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
            <span id="blast-timer-text">${blastState.timeLeft < 900 ? blastState.timeLeft + 's' : '∞'}</span>
          </div>

          <!-- Prominent Holographic Target Banner in HUD -->
          <div class="blast-holo-target-box">
            <span class="holo-target-label">TARGET:</span>
            <div style="display:inline-flex; align-items:center; gap:8px;">
              <span class="holo-target-romaji" id="blast-target-romaji">---</span>
              <button type="button" class="blast-target-speaker-btn" id="blast-target-speaker" onclick="speakCurrentBlastTarget()" title="Dengarkan pelafalan target">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
              </button>
            </div>
            <span class="holo-target-sub" id="blast-target-sub">Memuat target...</span>
          </div>

          <div class="blast-hud-hint">KLIK BUBBLE SESUAI BACAAN</div>
        </div>
      </div>

      <!-- ARENA -->
      <div class="blast-arena" id="blast-arena">
        <!-- Crosshair Reticle -->
        <div class="blast-crosshair" id="blast-crosshair"></div>

        <!-- Cosmic Grid & Stars -->
        <div class="blast-arena-bg"></div>

        <!-- Laser and Particle FX Layer -->
        <div class="blast-fx-layer" id="blast-fx-layer"></div>

        <!-- Bubble Sky Area -->
        <div class="blast-sky" id="blast-sky"></div>

        <!-- High-Tech Arcade Turret Blaster at Bottom -->
        <div class="blast-turret-wrap" id="blast-turret-wrap">
          <!-- Aiming Cannon Barrel with Muzzle Flash -->
          <div class="blast-turret-barrel" id="blast-turret-barrel">
            <div class="blast-muzzle-flash" id="blast-muzzle-flash"></div>
            <div class="blast-muzzle-glow"></div>
            <div class="blast-barrel-pipe">
              <div class="blast-barrel-rail left"></div>
              <div class="blast-barrel-core"></div>
              <div class="blast-barrel-rail right"></div>
            </div>
          </div>

          <!-- Base Pedestal Mount with Kanji Symbol -->
          <div class="blast-cannon-mount">
            <div class="blast-mount-ring"></div>
            <div class="blast-mount-core">
              <span class="blast-mount-symbol">砲</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Dynamic Pointer Aiming Tracker
  const arenaEl = document.getElementById('blast-arena');
  if (arenaEl) {
    arenaEl.onpointermove = (e) => {
      if (!blastState.running || blastState.paused) return;
      updateBlastAimAngle(e.clientX, e.clientY);
    };
    arenaEl.onpointerleave = () => {
      const crosshair = document.getElementById('blast-crosshair');
      if (crosshair) crosshair.classList.remove('visible');
    };
  }

  // Spawn initial bubbles
  populateInitialBlastBubbles();

  // Start timers and animation loop
  startBlastTimers();
  blastState.animId = requestAnimationFrame(blastGameLoop);
}

function updateBlastAimAngle(clientX, clientY) {
  const arena = document.getElementById('blast-arena');
  const turret = document.getElementById('blast-turret-wrap');
  const barrel = document.getElementById('blast-turret-barrel');
  const crosshair = document.getElementById('blast-crosshair');
  if (!arena || !turret || !barrel) return;

  const arenaRect = arena.getBoundingClientRect();
  const turretRect = turret.getBoundingClientRect();

  const px = clientX - arenaRect.left;
  const py = clientY - arenaRect.top;

  if (crosshair) {
    crosshair.style.left = px + 'px';
    crosshair.style.top = py + 'px';
    crosshair.classList.add('visible');
  }

  const turretOriginX = (turretRect.left + turretRect.width / 2) - arenaRect.left;
  const turretOriginY = turretRect.top - arenaRect.top + 45;

  const dx = px - turretOriginX;
  const dy = py - turretOriginY;
  const angleRad = Math.atan2(dy, dx);
  const angleDeg = angleRad * (180 / Math.PI) + 90;

  // Clamp aiming angle between -80deg and +80deg so it aims upwards nicely
  const clampedDeg = Math.max(-80, Math.min(80, angleDeg));
  blastState.barrelAngle = clampedDeg;
  barrel.style.setProperty('--current-rot', clampedDeg + 'deg');
  barrel.style.transform = `translateX(-50%) rotate(${clampedDeg}deg)`;
}

const BUBBLE_THEMES = ['cyan', 'indigo', 'violet', 'emerald', 'amber', 'rose'];

function populateInitialBlastBubbles() {
  const pool = getBlastPool();
  const shuffled = shuffle(pool);
  const sky = document.getElementById('blast-sky');
  if (!sky) return;
  sky.innerHTML = '';
  blastState.bubbles = [];

  // Pick 7 distinct items from pool
  const chosenItems = shuffled.slice(0, Math.min(7, shuffled.length));

  chosenItems.forEach((item, idx) => {
    createBlastBubble(item, idx, chosenItems.length);
  });

  // Pick target from the spawned bubbles
  pickNextBlastTarget();
}

function createBlastBubble(item, idx = 0, total = 7) {
  const sky = document.getElementById('blast-sky');
  if (!sky) return;

  const bubbleId = 'bubble-' + Date.now() + '-' + Math.floor(Math.random() * 10000);
  const theme = BUBBLE_THEMES[Math.floor(Math.random() * BUBBLE_THEMES.length)];

  // Distribute initial slots evenly so they don't spawn stacked
  const col = idx % 4;
  const row = Math.floor(idx / 4);
  const baseX = 12 + col * 22 + (Math.random() * 8 - 4);
  const baseY = 10 + row * 22 + (Math.random() * 8 - 4);

  const bubbleObj = {
    id: bubbleId,
    char: item.char,
    romaji: item.romaji,
    mean: item.mean || '',
    x: Math.max(8, Math.min(82, baseX)),
    y: Math.max(8, Math.min(54, baseY)),
    vx: (Math.random() - 0.5) * 0.24,
    vy: (Math.random() - 0.5) * 0.20,
    theme: theme,
    popping: false,
  };

  // Ensure minimum drift velocity so bubbles don't stand still
  if (Math.abs(bubbleObj.vx) < 0.08) bubbleObj.vx = bubbleObj.vx < 0 ? -0.12 : 0.12;
  if (Math.abs(bubbleObj.vy) < 0.08) bubbleObj.vy = bubbleObj.vy < 0 ? -0.10 : 0.10;

  blastState.bubbles.push(bubbleObj);

  const el = document.createElement('div');
  el.id = bubbleId;
  el.className = `blast-bubble theme-${theme}`;
  el.style.left = bubbleObj.x + '%';
  el.style.top = bubbleObj.y + '%';
  el.innerHTML = `
    <div class="bubble-gloss"></div>
    <div class="bubble-inner">
      <span class="bubble-char ${item.char.length > 2 ? 'small-text' : ''}">${item.char}</span>
    </div>
  `;

  // Attach shoot event (supports both pointerdown, click, and touch)
  el.onpointerdown = (e) => {
    e.preventDefault();
    shootBlastBubble(bubbleId, e);
  };

  sky.appendChild(el);
}

function spawnReplacementBubble() {
  const pool = getBlastPool();
  // Find words not currently in active bubbles
  const currentChars = new Set(blastState.bubbles.map(b => b.char));
  const available = pool.filter(p => !currentChars.has(p.char));
  const nextItem = available.length > 0
    ? available[Math.floor(Math.random() * available.length)]
    : pool[Math.floor(Math.random() * pool.length)];

  createBlastBubble(nextItem, blastState.bubbles.length, 7);
}

function pickNextBlastTarget() {
  if (blastState.bubbles.length === 0) return;
  // Pick one of the active non-popping bubbles
  const eligible = blastState.bubbles.filter(b => !b.popping);
  if (eligible.length === 0) return;

  const target = eligible[Math.floor(Math.random() * eligible.length)];
  blastState.targetItem = target;

  const romajiEl = document.getElementById('blast-target-romaji');
  const subEl = document.getElementById('blast-target-sub');
  if (romajiEl) {
    romajiEl.textContent = target.romaji;
    romajiEl.classList.remove('pulse-reload');
    void romajiEl.offsetWidth; // trigger reflow
    romajiEl.classList.add('pulse-reload');
  }
  if (subEl) {
    subEl.textContent = target.mean ? target.mean : (blastState.mode.includes('hiragana') ? 'Hiragana' : 'Katakana');
  }

  // Jika opsi autoVoice diaktifkan, baru berbicara saat target soal muncul (bukan saat nembak)
  if (blastState.autoVoice && target && target.char) {
    try {
      speakJapanese(target.char);
    } catch (e) {}
  }
}

function speakCurrentBlastTarget() {
  if (blastState.targetItem && blastState.targetItem.char) {
    speakJapanese(blastState.targetItem.char);
  }
}

function blastGameLoop() {
  if (!blastState.running) return;

  if (!blastState.paused) {
    const bubbles = blastState.bubbles;
    const len = bubbles.length;

    for (let i = 0; i < len; i++) {
      const b = bubbles[i];
      if (b.popping) continue;

      b.x += b.vx;
      b.y += b.vy;

      // Arena wall bounce limits
      if (b.x <= 6) { b.x = 6; b.vx = Math.abs(b.vx); }
      else if (b.x >= 84) { b.x = 84; b.vx = -Math.abs(b.vx); }

      if (b.y <= 6) { b.y = 6; b.vy = Math.abs(b.vy); }
      else if (b.y >= 54) { b.y = 54; b.vy = -Math.abs(b.vy); }

      // Soft repulsion with other bubbles so they stay spaced nicely
      for (let j = i + 1; j < len; j++) {
        const b2 = bubbles[j];
        if (b2.popping) continue;
        const dx = b2.x - b.x;
        const dy = b2.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 12 && dist > 0.01) {
          const push = (12 - dist) * 0.015;
          b.x -= (dx / dist) * push;
          b.y -= (dy / dist) * push;
          b2.x += (dx / dist) * push;
          b2.y += (dy / dist) * push;
        }
      }

      // Update element position
      const el = document.getElementById(b.id);
      if (el) {
        el.style.left = b.x + '%';
        el.style.top = b.y + '%';
      }
    }
  }

  blastState.animId = requestAnimationFrame(blastGameLoop);
}

function shootBlastBubble(bubbleId, event) {
  if (!blastState.running || blastState.paused) return;

  const bubble = blastState.bubbles.find(b => b.id === bubbleId);
  if (!bubble || bubble.popping) return;

  blastState.totalShots++;
  const arena = document.getElementById('blast-arena');
  const turret = document.getElementById('blast-turret-wrap');
  const barrel = document.getElementById('blast-turret-barrel');
  const bubbleEl = document.getElementById(bubble.id);
  if (!arena || !turret || !bubbleEl) return;

  const arenaRect = arena.getBoundingClientRect();
  const turretRect = turret.getBoundingClientRect();
  const bubbleRect = bubbleEl.getBoundingClientRect();

  // Turret barrel muzzle point
  const turretOriginX = (turretRect.left + turretRect.width / 2) - arenaRect.left;
  const turretOriginY = turretRect.top - arenaRect.top + 45;

  // Bubble center coordinates
  const bubbleCenterX = (bubbleRect.left + bubbleRect.width / 2) - arenaRect.left;
  const bubbleCenterY = (bubbleRect.top + bubbleRect.height / 2) - arenaRect.top;

  // Calculate aiming angle
  const dx = bubbleCenterX - turretOriginX;
  const dy = bubbleCenterY - turretOriginY;
  const angleRad = Math.atan2(dy, dx);
  const angleDeg = angleRad * (180 / Math.PI) + 90; // +90 because barrel points up vertically
  const clampedDeg = Math.max(-80, Math.min(80, angleDeg));

  if (barrel) {
    barrel.style.setProperty('--current-rot', clampedDeg + 'deg');
    barrel.style.transform = `translateX(-50%) rotate(${clampedDeg}deg)`;
    barrel.classList.remove('cannon-kick');
    void barrel.offsetWidth;
    barrel.classList.add('cannon-kick');
  }

  // Muzzle flash burst
  const muzzleFlash = document.getElementById('blast-muzzle-flash');
  if (muzzleFlash) {
    muzzleFlash.classList.remove('flash-active');
    void muzzleFlash.offsetWidth;
    muzzleFlash.classList.add('flash-active');
  }

  turret.classList.add('turret-fire');
  setTimeout(() => turret.classList.remove('turret-fire'), 220);

  // Calculate muzzle tip position along the barrel direction for laser origin
  const tipAngleRad = (clampedDeg - 90) * (Math.PI / 180);
  const muzzleTipX = turretOriginX + Math.cos(tipAngleRad) * 62;
  const muzzleTipY = turretOriginY + Math.sin(tipAngleRad) * 62;

  // Play laser sound and draw beam
  playBlastSfx('laser');
  drawBlastLaserBeam(muzzleTipX, muzzleTipY, bubbleCenterX, bubbleCenterY);

  // Hit Evaluation
  const isMatch = blastState.targetItem && (bubble.romaji.toLowerCase() === blastState.targetItem.romaji.toLowerCase());

  if (isMatch) {
    // CORRECT POP
    bubble.popping = true;
    blastState.blastedCount++;
    blastState.combo++;
    if (blastState.combo > blastState.maxCombo) blastState.maxCombo = blastState.combo;

    const multiplier = 1 + (blastState.combo - 1) * 0.25;
    const gained = Math.round(100 * multiplier);
    blastState.score += gained;
    addScore(Math.floor(gained / 10)); // Persistent overall score

    playBlastSfx('pop');
    if (blastState.combo > 1) {
      setTimeout(() => playBlastSfx('combo'), 70);
    }
    // Suara bicara ditiadakan saat menembak (jangan pas nembak baru ngomong)

    spawnBlastPopParticles(bubbleCenterX, bubbleCenterY, bubble.theme);
    spawnBlastShockwave(bubbleCenterX, bubbleCenterY, bubble.theme);
    showBlastFloatingText(`+${gained}${blastState.combo > 1 ? ' (' + blastState.combo + 'x STREAK)' : ''}`, bubble.x, bubble.y, '#38BDF8');

    bubbleEl.classList.add('bubble-exploding');
    setTimeout(() => {
      bubbleEl.remove();
      blastState.bubbles = blastState.bubbles.filter(b => b.id !== bubble.id);
      spawnReplacementBubble();
      pickNextBlastTarget();
    }, 280);

    updateBlastHUD();
  } else {
    // WRONG BUBBLE DEFLECT
    playBlastSfx('wrong');
    blastState.combo = 0;
    if (blastState.timeLeft < 900) {
      blastState.timeLeft = Math.max(0, blastState.timeLeft - 2);
    }

    bubbleEl.classList.add('bubble-deflect');
    setTimeout(() => bubbleEl.classList.remove('bubble-deflect'), 400);

    showBlastFloatingText('Salah! -2s', bubble.x, bubble.y, '#EF4444');

    const timerPill = document.getElementById('blast-timer-pill');
    if (timerPill) {
      timerPill.classList.add('timer-penalty');
      setTimeout(() => timerPill.classList.remove('timer-penalty'), 400);
    }
    updateBlastHUD();
  }
}

function drawBlastLaserBeam(x1, y1, x2, y2) {
  const fxLayer = document.getElementById('blast-fx-layer');
  if (!fxLayer) return;

  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  const beam = document.createElement('div');
  beam.className = 'blast-laser-beam';
  beam.style.left = x1 + 'px';
  beam.style.top = y1 + 'px';
  beam.style.width = length + 'px';
  beam.style.transform = `rotate(${angle}deg)`;

  fxLayer.appendChild(beam);
  setTimeout(() => beam.remove(), 160);
}

function spawnBlastPopParticles(cx, cy, theme) {
  const fxLayer = document.getElementById('blast-fx-layer');
  if (!fxLayer) return;

  const colorMap = {
    cyan: '#38BDF8',
    indigo: '#818CF8',
    violet: '#C084FC',
    emerald: '#34D399',
    amber: '#FBBF24',
    rose: '#F472B6',
  };
  const baseColor = colorMap[theme] || '#38BDF8';

  for (let i = 0; i < 14; i++) {
    const p = document.createElement('div');
    p.className = 'blast-pop-particle';
    const angle = (i / 14) * 2 * Math.PI + (Math.random() * 0.4);
    const dist = Math.random() * 48 + 32;
    const px = Math.cos(angle) * dist;
    const py = Math.sin(angle) * dist;

    p.style.left = cx + 'px';
    p.style.top = cy + 'px';
    p.style.setProperty('--dx', px + 'px');
    p.style.setProperty('--dy', py + 'px');
    p.style.background = baseColor;
    p.style.boxShadow = `0 0 10px ${baseColor}`;

    fxLayer.appendChild(p);
    setTimeout(() => p.remove(), 420);
  }
}

function spawnBlastShockwave(cx, cy, theme) {
  const fxLayer = document.getElementById('blast-fx-layer');
  if (!fxLayer) return;

  const sw = document.createElement('div');
  sw.className = `blast-shockwave theme-${theme}`;
  sw.style.left = cx + 'px';
  sw.style.top = cy + 'px';

  fxLayer.appendChild(sw);
  setTimeout(() => sw.remove(), 420);
}

function showBlastFloatingText(text, xPercent, yPercent, color = '#FFFFFF') {
  const fxLayer = document.getElementById('blast-fx-layer');
  if (!fxLayer) return;

  const fl = document.createElement('div');
  fl.className = 'blast-floating-text';
  fl.textContent = text;
  fl.style.left = Math.max(10, Math.min(84, xPercent)) + '%';
  fl.style.top = Math.max(8, Math.min(60, yPercent)) + '%';
  fl.style.color = color;

  fxLayer.appendChild(fl);
  setTimeout(() => fl.remove(), 750);
}

function updateBlastHUD() {
  const timerText = document.getElementById('blast-timer-text');
  const scoreText = document.getElementById('blast-score-text');
  const comboPill = document.getElementById('blast-combo-pill');
  const comboText = document.getElementById('blast-combo-text');

  if (timerText) {
    timerText.textContent = blastState.timeLeft < 900 ? blastState.timeLeft + 's' : '∞';
  }
  if (scoreText) {
    scoreText.textContent = blastState.score;
  }
  if (comboText && comboPill) {
    if (blastState.combo > 1) {
      comboText.textContent = `${blastState.combo}x STREAK`;
      comboPill.classList.add('active');
    } else {
      comboText.textContent = `1x Streak`;
      comboPill.classList.remove('active');
    }
  }
}

function startBlastTimers() {
  clearInterval(blastState.timerInterval);
  if (blastState.duration >= 900) return; // endless mode

  blastState.timerInterval = setInterval(() => {
    if (!blastState.running || blastState.paused) return;

    blastState.timeLeft--;
    updateBlastHUD();

    const timerPill = document.getElementById('blast-timer-pill');
    if (timerPill) {
      timerPill.classList.toggle('timer-urgent', blastState.timeLeft <= 10);
    }

    if (blastState.timeLeft <= 0) {
      triggerBlastGameOver();
    }
  }, 1000);
}

function toggleBlastPause() {
  if (!blastState.running) return;
  blastState.paused = !blastState.paused;

  const icon = document.getElementById('blast-pause-icon');
  if (icon) {
    icon.innerHTML = blastState.paused
      ? '<polygon points="5 3 19 12 5 21 5 3"/>'
      : '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>';
  }

  showToast(blastState.paused ? 'Game Dijeda' : 'Game Dilanjutkan', 'info');
}

function toggleBlastSound() {
  blastState.soundEnabled = !blastState.soundEnabled;
  const icon = document.getElementById('blast-sound-icon');
  if (icon) {
    icon.innerHTML = blastState.soundEnabled
      ? '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>'
      : '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" x2="17" y1="9" y2="15"/><line x1="17" x2="23" y1="9" y2="15"/>';
  }
  showToast(blastState.soundEnabled ? 'Suara Aktif' : 'Suara Dimatikan', 'info');
}

function triggerBlastGameOver() {
  stopBlastGame();
  playBlastSfx('gameover');

  const isNewRecord = blastState.score > blastState.highScore;
  if (isNewRecord) {
    blastState.highScore = blastState.score;
    saveBlastStats();
  }

  const accuracy = blastState.totalShots > 0
    ? Math.round((blastState.blastedCount / blastState.totalShots) * 100)
    : 100;

  const screen = document.getElementById('game-screen');
  if (!screen) return;

  screen.innerHTML = `
    <div class="blast-result-card">
      <div class="blast-result-crest ${isNewRecord ? 'gold-glow' : ''}">
        <svg viewBox="0 0 64 64" class="svg-crest-large">
          <circle cx="32" cy="32" r="28" fill="#0F172A" stroke="${isNewRecord ? '#F59E0B' : '#0284C7'}" stroke-width="3"/>
          <polygon points="32 14 36.5 24.5 48 25.5 39.5 33 42 44.5 32 38.5 22 44.5 24.5 33 16 25.5 27.5 24.5 32 14" fill="${isNewRecord ? '#F59E0B' : '#38BDF8'}"/>
        </svg>
      </div>

      <div class="blast-result-header">
        ${isNewRecord ? '<div class="new-record-pill">REKOR BARU TERCIPTA!</div>' : ''}
        <h2>Sesi Kana Blast Selesai!</h2>
        <p>Refleks menembak dan membaca aksara Jepangmu luar biasa!</p>
      </div>

      <div class="blast-score-banner">
        <span class="score-banner-label">SKOR TOTAL AKHIR</span>
        <span class="score-banner-num">${blastState.score}</span>
        <span class="score-banner-sub">+${Math.floor(blastState.score / 10)} Poin Pembelajaran Tersimpan</span>
      </div>

      <div class="blast-stats-grid">
        <div class="blast-stat-item">
          <span class="stat-num">${blastState.blastedCount}</span>
          <span class="stat-lbl">Bubble Hancur</span>
        </div>
        <div class="blast-stat-item">
          <span class="stat-num">${accuracy}%</span>
          <span class="stat-lbl">Akurasi Tembak</span>
        </div>
        <div class="blast-stat-item">
          <span class="stat-num">${blastState.maxCombo}x</span>
          <span class="stat-lbl">Max Combo</span>
        </div>
        <div class="blast-stat-item">
          <span class="stat-num">${blastState.highScore}</span>
          <span class="stat-lbl">Skor Tertinggi</span>
        </div>
      </div>

      <div class="blast-result-actions">
        <button class="blast-result-btn primary-btn" onclick="initBlastBattle()">
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
          <span>Main Lagi</span>
        </button>
        <button class="blast-result-btn secondary-btn" onclick="renderBlastLobby()">
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          <span>Ganti Mode / Waktu</span>
        </button>
        <button class="blast-result-btn outline-btn" onclick="showGameMenu()">
          <span>Menu Mini Games</span>
        </button>
      </div>
    </div>
  `;
}

function stopBlastGame() {
  blastState.running = false;
  if (blastState.animId) cancelAnimationFrame(blastState.animId);
  if (blastState.timerInterval) clearInterval(blastState.timerInterval);
}

// ===== UTILITIES =====
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let toastTimer = null;
function showToast(msg, type = 'info') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.className = 'toast ' + type;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 2400);
}

// ====================================================
// MONSTER ATTACK / KANA DEFENSE ENGINE
// ====================================================

// Synthesizer Web Audio API (uses global getAudioContext)
function playSfx(type) {
  if (!msState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (type === 'slash') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(160, now + 0.15);
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    } else if (type === 'hit') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(60, now + 0.12);
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === 'explosion') {
      const bufferSize = Math.floor(ctx.sampleRate * 0.18);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(700, now);
      filter.frequency.exponentialRampToValueAtTime(50, now + 0.18);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start(now);
    } else if (type === 'combo') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const step = Math.min(msState.combo, 12);
      const freq = 440 * Math.pow(1.05946, step);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.35, now + 0.15);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    } else if (type === 'hurt') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.linearRampToValueAtTime(45, now + 0.3);
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === 'wave') {
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.2, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.08 + 0.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.2);
      });
    }
  } catch (e) {}
}

// Monster Slayer State
let msState = {
  running: false,
  paused: false,
  mode: 'hiragana', // 'hiragana' | 'katakana' | 'mix' | 'words'
  speedMode: 'normal',
  soundEnabled: true,
  hintEnabled: true,
  lives: 3,
  score: 0,
  combo: 0,
  maxCombo: 0,
  kills: 0,
  wave: 1,
  monstersSpawnedInWave: 0,
  monstersTargetInWave: 8,
  monsters: [],
  activeTarget: null,
  lastFrameTime: 0,
  animId: null,
  spawnTimeout: null,
  highScore: 0,
  totalKills: 0,
  recordMaxCombo: 0,
};

function loadMonsterStats() {
  try {
    const saved = JSON.parse(localStorage.getItem('msStats') || '{}');
    msState.highScore = saved.highScore || 0;
    msState.totalKills = saved.totalKills || 0;
    msState.recordMaxCombo = saved.recordMaxCombo || 0;
  } catch (e) {}
}

function saveMonsterStats() {
  try {
    localStorage.setItem('msStats', JSON.stringify({
      highScore: msState.highScore,
      totalKills: msState.totalKills,
      recordMaxCombo: msState.recordMaxCombo,
    }));
  } catch (e) {}
}

function initMonsterLobby() {
  loadMonsterStats();
  updateMonsterLobbyStats();
  document.getElementById('ms-lobby').classList.remove('hidden');
  document.getElementById('ms-battle').classList.add('hidden');
  document.getElementById('ms-gameover-modal').classList.add('hidden');
}

function updateMonsterLobbyStats() {
  const hs = document.getElementById('ms-high-score');
  const tk = document.getElementById('ms-total-kills');
  const mc = document.getElementById('ms-max-combo');
  if (hs) hs.textContent = msState.highScore;
  if (tk) tk.textContent = msState.totalKills;
  if (mc) mc.textContent = msState.recordMaxCombo + 'x';
}

function toggleMonsterSound() {
  msState.soundEnabled = !msState.soundEnabled;
  const txt = document.getElementById('ms-sound-text');
  const icon = document.getElementById('ms-sound-icon');
  if (txt) txt.textContent = msState.soundEnabled ? 'Suara: ON' : 'Suara: OFF';
  if (icon) {
    icon.innerHTML = msState.soundEnabled
      ? '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>'
      : '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" x2="17" y1="9" y2="15"/><line x1="17" x2="23" y1="9" y2="15"/>';
  }
  showToast(msState.soundEnabled ? 'Efek Suara Aktif' : 'Efek Suara Dimatikan', 'info');
}

function toggleMonsterHint() {
  msState.hintEnabled = !msState.hintEnabled;
  const txt = document.getElementById('ms-hint-text');
  if (txt) txt.textContent = msState.hintEnabled ? 'Hint: ON' : 'Hint: OFF';
  document.querySelectorAll('.monster-hint').forEach(el => {
    el.style.display = msState.hintEnabled ? 'block' : 'none';
  });
  showToast(msState.hintEnabled ? 'Petunjuk Romaji Aktif' : 'Petunjuk Romaji Dinonaktifkan', 'info');
}

function setMonsterMode(mode) {
  msState.mode = mode;
  document.querySelectorAll('#ms-lobby [data-mode]').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-mode') === mode);
  });
}

function setMonsterSpeed(speed) {
  msState.speedMode = speed;
  document.querySelectorAll('#ms-lobby [data-speed]').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-speed') === speed);
  });
}

// SVGs for Monsters
const MONSTER_SVGS = {
  slime: `
    <svg class="monster-svg slime-svg" viewBox="0 0 64 64" width="52" height="52">
      <path d="M12 44C10 32 18 20 32 18C46 20 54 32 52 44C50 54 44 58 32 58C20 58 14 54 12 44Z" fill="#10B981"/>
      <ellipse cx="24" cy="36" rx="4" ry="5" fill="#064E3B"/>
      <ellipse cx="40" cy="36" rx="4" ry="5" fill="#064E3B"/>
      <circle cx="23" cy="34" r="1.5" fill="#FFF"/>
      <circle cx="39" cy="34" r="1.5" fill="#FFF"/>
      <path d="M28 44Q32 48 36 44" stroke="#064E3B" stroke-width="2" stroke-linecap="round" fill="none"/>
    </svg>
  `,
  ghost: `
    <svg class="monster-svg ghost-svg" viewBox="0 0 64 64" width="52" height="52">
      <path d="M32 12C20 12 16 24 16 38C16 50 20 56 24 50C28 44 30 52 34 50C38 48 40 54 44 50C48 46 48 40 48 38C48 24 44 12 32 12Z" fill="#8B5CF6"/>
      <circle cx="26" cy="30" r="4" fill="#1E1B4B"/>
      <circle cx="38" cy="30" r="4" fill="#1E1B4B"/>
      <circle cx="25" cy="29" r="1.5" fill="#A78BFA"/>
      <circle cx="37" cy="29" r="1.5" fill="#A78BFA"/>
      <ellipse cx="32" cy="40" rx="3" ry="4" fill="#1E1B4B"/>
    </svg>
  `,
  oni: `
    <svg class="monster-svg oni-svg" viewBox="0 0 64 64" width="54" height="54">
      <path d="M18 16L12 8C14 16 18 20 22 22" fill="#EAB308"/>
      <path d="M46 16L52 8C50 16 46 20 42 22" fill="#EAB308"/>
      <rect x="14" y="20" width="36" height="34" rx="14" fill="#EF4444"/>
      <circle cx="24" cy="34" r="5" fill="#FEF08A"/>
      <circle cx="40" cy="34" r="5" fill="#FEF08A"/>
      <circle cx="24" cy="34" r="2.5" fill="#7F1D1D"/>
      <circle cx="40" cy="34" r="2.5" fill="#7F1D1D"/>
      <path d="M22 46H42" stroke="#450A0A" stroke-width="2.5" stroke-linecap="round"/>
      <polygon points="26,46 28,42 30,46" fill="#FFF"/>
      <polygon points="34,46 36,42 38,46" fill="#FFF"/>
    </svg>
  `,
  kitsune: `
    <svg class="monster-svg kitsune-svg" viewBox="0 0 64 64" width="54" height="54">
      <path d="M12 26L18 8L30 22" fill="#F97316"/>
      <path d="M52 26L46 8L34 22" fill="#F97316"/>
      <path d="M16 26C16 38 24 54 32 58C40 54 48 38 48 26C48 22 44 20 32 20C20 20 16 22 16 26Z" fill="#FFF"/>
      <path d="M20 34Q26 38 28 34" stroke="#DC2626" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M44 34Q38 38 36 34" stroke="#DC2626" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <circle cx="32" cy="46" r="3" fill="#1F2937"/>
    </svg>
  `,
  dragon: `
    <svg class="monster-svg dragon-svg" viewBox="0 0 64 64" width="60" height="60">
      <path d="M14 18L6 10M50 18L58 10" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
      <path d="M20 20C12 28 14 44 32 54C50 44 52 28 44 20C38 14 26 14 20 20Z" fill="#2563EB"/>
      <circle cx="25" cy="31" r="3" fill="#FEF08A"/>
      <circle cx="39" cy="31" r="3" fill="#FEF08A"/>
      <circle cx="25" cy="31" r="1.5" fill="#1E3A8A"/>
      <circle cx="39" cy="31" r="1.5" fill="#1E3A8A"/>
      <path d="M26 42Q32 46 38 42" stroke="#FFF" stroke-width="2" stroke-linecap="round" fill="none"/>
    </svg>
  `,
};

const MONSTER_PROFILES = [
  { type: 'slime', name: 'Slime', pts: 50 },
  { type: 'ghost', name: 'Obake', pts: 75 },
  { type: 'oni', name: 'Oni', pts: 100 },
  { type: 'kitsune', name: 'Kitsune', pts: 80 },
  { type: 'dragon', name: 'Ryu Boss', pts: 250 },
];

function getRandomKanaItem() {
  if (typeof GameConfigManager !== 'undefined') {
    const qList = GameConfigManager.getQuestions('sky-defense', msState.mode);
    if (qList && qList.length > 0) {
      const item = qList[Math.floor(Math.random() * qList.length)];
      return { char: item.char, romaji: item.romaji, type: item.mode || msState.mode };
    }
  }
  if (msState.mode === 'hiragana') return HIRAGANA[Math.floor(Math.random() * HIRAGANA.length)];
  if (msState.mode === 'katakana') return KATAKANA[Math.floor(Math.random() * KATAKANA.length)];
  if (msState.mode === 'kanji-n5' || msState.mode.includes('kanji')) {
    if (typeof GameConfigManager !== 'undefined') {
      const q = GameConfigManager.getQuestions('sky-defense', msState.mode);
      if (q && q.length > 0) return q[Math.floor(Math.random() * q.length)];
    }
    const kanjiList = [
      { char: '日', romaji: 'hi' },
      { char: '月', romaji: 'tsuki' },
      { char: '木', romaji: 'ki' },
      { char: '山', romaji: 'yama' },
      { char: '川', romaji: 'kawa' },
      { char: '火', romaji: 'hi' },
      { char: '水', romaji: 'mizu' },
      { char: '人', romaji: 'hito' },
      { char: '本', romaji: 'hon' },
      { char: '車', romaji: 'kuruma' }
    ];
    return kanjiList[Math.floor(Math.random() * kanjiList.length)];
  }
  if (msState.mode === 'mix') {
    const pool = [...HIRAGANA, ...KATAKANA];
    return pool[Math.floor(Math.random() * pool.length)];
  }
  if (msState.mode === 'words') {
    const wordList = [
      { char: 'ねこ', romaji: 'neko' },
      { char: 'いぬ', romaji: 'inu' },
      { char: 'あめ', romaji: 'ame' },
      { char: 'みず', romaji: 'mizu' },
      { char: 'やま', romaji: 'yama' },
      { char: 'すし', romaji: 'sushi' },
      { char: 'ほん', romaji: 'hon' },
      { char: 'はな', romaji: 'hana' },
      { char: 'そら', romaji: 'sora' },
      { char: 'ゆき', romaji: 'yuki' },
      { char: 'つき', romaji: 'tsuki' },
      { char: 'とり', romaji: 'tori' },
    ];
    return wordList[Math.floor(Math.random() * wordList.length)];
  }
  return HIRAGANA[0];
}

function startMonsterGame() {
  getAudioContext();
  stopMonsterLoop(); // Clear any existing animation frames and timeouts to prevent stacking
  msState.running = true;
  msState.paused = false;
  msState.barrierInvulnerable = false;
  msState.lives = 3;
  msState.score = 0;
  msState.combo = 0;
  msState.maxCombo = 0;
  msState.kills = 0;
  msState.wave = 1;
  msState.monstersSpawnedInWave = 0;
  msState.monstersTargetInWave = 8;
  msState.monsters = [];
  msState.activeTarget = null;

  document.getElementById('ms-lobby').classList.add('hidden');
  document.getElementById('ms-battle').classList.remove('hidden');
  document.getElementById('ms-gameover-modal').classList.add('hidden');
  document.getElementById('ms-monsters-track').innerHTML = '';
  document.getElementById('ms-fx-layer').innerHTML = '';

  updateMonsterHUD();
  clearMonsterInput();

  const inp = document.getElementById('ms-input');
  if (inp) {
    inp.focus();
    inp.oninput = (e) => handleMonsterInput(e.target.value);
    inp.onkeydown = (e) => {
      if (e.key === 'Backspace') {
        handleMonsterBackspace();
      }
    };
  }

  // Klik arena untuk selalu fokus ke input fisik
  const arena = document.getElementById('ms-arena');
  if (arena) {
    arena.onclick = () => {
      const inputEl = document.getElementById('ms-input');
      if (inputEl) inputEl.focus();
    };
  }

  showWaveBanner(1);
  msState.lastFrameTime = performance.now();
  msState.animId = requestAnimationFrame(monsterGameLoop);

  setTimeout(scheduleNextMonsterSpawn, 1800);
}

// Global listener agar ketikan keyboard fisik langsung masuk ke game
document.addEventListener('keydown', (e) => {
  const battle = document.getElementById('ms-battle');
  if (battle && !battle.classList.contains('hidden') && typeof msState !== 'undefined' && msState.running && !msState.paused) {
    const inp = document.getElementById('ms-input');

    // Cegah tombol Backspace menavigasi riwayat browser (penyebab utama game tertutup!)
    if (e.key === 'Backspace') {
      e.preventDefault();
      if (inp) {
        if (document.activeElement !== inp) inp.focus();
        inp.value = inp.value.slice(0, -1);
        handleMonsterBackspace();
      }
      return;
    }

    // Cegah tombol Spasi atau Enter memicu tombol lain di background
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      return;
    }

    if (inp && document.activeElement !== inp) {
      if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
        inp.focus();
      }
    }
  }
});

function stopMonsterLoop() {
  msState.running = false;
  if (msState.animId) cancelAnimationFrame(msState.animId);
  if (msState.spawnTimeout) clearTimeout(msState.spawnTimeout);
}

function toggleMonsterPause(forcePause) {
  if (!msState.running) return;
  msState.paused = forcePause !== undefined ? forcePause : !msState.paused;
  const icon = document.getElementById('ms-pause-icon');
  if (icon) {
    icon.innerHTML = msState.paused
      ? '<polygon points="5 3 19 12 5 21 5 3"/>'
      : '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>';
  }

  if (!msState.paused) {
    msState.lastFrameTime = performance.now();
    msState.animId = requestAnimationFrame(monsterGameLoop);
    scheduleNextMonsterSpawn();
  }
}

function updateMonsterHUD() {
  const livesWrap = document.getElementById('ms-lives');
  if (livesWrap) {
    let heartsHtml = '';
    for (let i = 0; i < 3; i++) {
      const active = i < msState.lives;
      heartsHtml += `
        <svg viewBox="0 0 24 24" class="svg-heart ${active ? 'active' : 'broken'}">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                fill="${active ? '#EF4444' : '#334155'}"
                stroke="${active ? '#DC2626' : '#1E293B'}" stroke-width="1.5"/>
        </svg>
      `;
    }
    livesWrap.innerHTML = heartsHtml;
  }

  const waveEl = document.getElementById('ms-wave-display');
  const scoreEl = document.getElementById('ms-score-display');
  const comboEl = document.getElementById('ms-combo-display');

  if (waveEl) waveEl.textContent = msState.wave;
  if (scoreEl) scoreEl.textContent = msState.score;
  if (comboEl) {
    comboEl.textContent = msState.combo + 'x';
    comboEl.classList.toggle('combo-high', msState.combo >= 5);
  }
}

function showWaveBanner(w) {
  const banner = document.getElementById('ms-wave-banner');
  const txt = document.getElementById('ms-wave-text');
  if (!banner || !txt) return;
  txt.textContent = 'WAVE ' + w;
  banner.classList.remove('hidden');
  playSfx('wave');
  setTimeout(() => {
    banner.classList.add('hidden');
  }, 1600);
}

function spawnMonster() {
  if (!msState.running || msState.paused) return;

  // 5 vertical lanes across the sky (X positions in %)
  const lanes = [14, 32, 50, 68, 86];

  // Prevent monsters from spawning on top of each other in the same lane:
  // Check which lanes have an active monster near the spawn entry (progress < 26%)
  const busyLanes = new Set(
    msState.monsters
      .filter(m => !m.dead && m.progress < 26)
      .map(m => m.xPercent)
  );

  const availableLanes = lanes.filter(l => !busyLanes.has(l));
  if (availableLanes.length === 0) {
    // If all lanes currently have a monster near the top, delay spawn by 600ms
    setTimeout(spawnMonster, 600);
    return;
  }

  const xPercent = availableLanes[Math.floor(Math.random() * availableLanes.length)];

  // Try to pick a kana character that is not already currently on screen
  const activeChars = new Set(msState.monsters.filter(m => !m.dead).map(m => m.char));
  let item = getRandomKanaItem();
  let tries = 0;
  while (activeChars.has(item.char) && tries < 10) {
    item = getRandomKanaItem();
    tries++;
  }

  const isBoss = (msState.monstersSpawnedInWave === msState.monstersTargetInWave - 1);
  const profile = isBoss
    ? MONSTER_PROFILES.find(p => p.type === 'dragon')
    : MONSTER_PROFILES[Math.floor(Math.random() * (MONSTER_PROFILES.length - 1))];

  // Base falling speed factor
  let speedFactor = 0.048 + (msState.wave * 0.0075);
  if (msState.speedMode === 'slow') speedFactor *= 0.7;
  if (msState.speedMode === 'fast') speedFactor *= 1.35;
  if (profile.type === 'ghost') speedFactor *= 1.15;
  if (profile.type === 'oni') speedFactor *= 0.85;

  const monsterId = 'mob-' + Date.now() + '-' + Math.floor(Math.random() * 1000);

  const monster = {
    id: monsterId,
    char: item.char,
    romaji: item.romaji.toLowerCase(),
    matchedLen: 0,
    progress: 0, // 0 = sky at top, 78+ = defense gate at bottom
    xPercent: xPercent,
    speed: speedFactor,
    type: profile.type,
    pts: profile.pts,
    isBoss: isBoss,
    dead: false,
  };

  msState.monsters.push(monster);
  msState.monstersSpawnedInWave++;
  renderMonsterElement(monster);
}

function renderMonsterElement(m) {
  const trackContainer = document.getElementById('ms-monsters-track');
  if (!trackContainer) return;

  const el = document.createElement('div');
  el.className = `ms-monster ms-monster-${m.type} ${m.isBoss ? 'ms-boss' : ''}`;
  el.id = m.id;
  el.style.left = m.xPercent + '%';
  el.style.top = '0%';

  // Pure Kana Badge: NO ROMAJI SHOWN. Pure memorization test!
  el.innerHTML = `
    <div class="monster-badge">
      <span class="monster-kana">${m.char}</span>
    </div>
    <div class="monster-avatar">
      ${MONSTER_SVGS[m.type] || MONSTER_SVGS.slime}
    </div>
    <div class="monster-shadow"></div>
  `;

  el.onclick = () => {
    msState.activeTarget = m;
    highlightTargetMonster();
    const inp = document.getElementById('ms-input');
    if (inp) inp.focus();
  };

  trackContainer.appendChild(el);
}

function scheduleNextMonsterSpawn() {
  if (!msState.running || msState.paused) return;

  if (msState.monstersSpawnedInWave < msState.monstersTargetInWave) {
    let delay = Math.max(1600 - msState.wave * 110, 800);
    if (msState.speedMode === 'slow') delay *= 1.3;
    if (msState.speedMode === 'fast') delay *= 0.75;

    msState.spawnTimeout = setTimeout(() => {
      spawnMonster();
      scheduleNextMonsterSpawn();
    }, delay);
  }
}

function monsterGameLoop(now) {
  if (!msState.running) return;

  if (!msState.paused) {
    // Clamp delta-time agar saat tab browser tidak aktif/lag, monster tidak loncat langsung ke gerbang
    const rawDt = (now - msState.lastFrameTime) / 1000;
    const dt = Math.min(Math.max(rawDt, 0), 0.045);
    msState.lastFrameTime = now;

    const breachedList = [];

    for (let i = 0; i < msState.monsters.length; i++) {
      const m = msState.monsters[i];
      if (!m || m.dead) continue;

      // Drop down vertically from top (0%) towards the gate (78%)
      m.progress += m.speed * dt * 100;

      // Prevent same-lane overlapping: keep minimum 15% vertical gap
      for (let j = i + 1; j < msState.monsters.length; j++) {
        const m2 = msState.monsters[j];
        if (!m2 || m2.dead || m2.xPercent !== m.xPercent) continue;
        const diff = Math.abs(m.progress - m2.progress);
        if (diff < 15) {
          if (m.progress < m2.progress) {
            m.progress = Math.max(0, m2.progress - 15);
          } else {
            m2.progress = Math.max(0, m.progress - 15);
          }
        }
      }

      const el = document.getElementById(m.id);
      if (el) {
        el.style.top = m.progress + '%';
        if (m.progress > 58) {
          el.classList.add('danger-zone');
        }
      }

      // Reached bottom defense gate
      if (m.progress >= 78) {
        breachedList.push(m);
      }
    }

    // Proses monster yang mencapai gerbang secara aman tanpa merusak indeks loop
    for (const b of breachedList) {
      if (msState.running) {
        monsterBreachedDefense(b);
      }
    }

    if (!msState.running) return; // Jika game over dipicu, hentikan loop sekarang

    if (msState.monsters.length === 0 && msState.monstersSpawnedInWave >= msState.monstersTargetInWave) {
      waveCompleted();
    }
  } else {
    msState.lastFrameTime = now;
  }

  if (msState.running) {
    msState.animId = requestAnimationFrame(monsterGameLoop);
  }
}

function monsterBreachedDefense(m) {
  if (m.dead) return;
  m.dead = true;
  msState.monsters = msState.monsters.filter(mob => mob.id !== m.id);

  const el = document.getElementById(m.id);
  if (el) el.remove();

  if (msState.activeTarget && msState.activeTarget.id === m.id) {
    msState.activeTarget = null;
    clearMonsterInput();
  }

  // Grace period perisai (1.2 detik): Jika 2 monster tiba bersamaan, tidak langsung membuang 2 nyawa sekaligus
  if (!msState.barrierInvulnerable) {
    msState.lives--;
    msState.combo = 0;
    updateMonsterHUD();
    playSfx('hurt');

    msState.barrierInvulnerable = true;
    const barrier = document.querySelector('.ms-defense-barrier-bottom');
    if (barrier) barrier.classList.add('barrier-damage-flash');
    setTimeout(() => {
      msState.barrierInvulnerable = false;
      if (barrier) barrier.classList.remove('barrier-damage-flash');
    }, 1200);

    const arena = document.getElementById('ms-arena');
    if (arena) {
      arena.classList.add('arena-shake');
      setTimeout(() => arena.classList.remove('arena-shake'), 400);
    }

    showFloatingText('Gerbang Ditembus! -1 Nyawa', m.xPercent, 76, '#EF4444');
  } else {
    showFloatingText('Perisai Bertahan!', m.xPercent, 76, '#F59E0B');
  }

  if (msState.lives <= 0) {
    triggerGameOver();
  }
}

function waveCompleted() {
  msState.wave++;
  msState.monstersSpawnedInWave = 0;
  msState.monstersTargetInWave = 8 + msState.wave * 2;
  const waveBonus = msState.wave * 100;
  msState.score += waveBonus;
  addScore(Math.floor(waveBonus / 10));
  updateMonsterHUD();

  showWaveBanner(msState.wave);
  showFloatingText('Wave Cleared! +' + waveBonus, 50, 40, '#F59E0B');

  setTimeout(scheduleNextMonsterSpawn, 2000);
}

function handleMonsterInput(typed) {
  typed = typed.toLowerCase().trim();
  if (!typed) {
    resetMonsterInputHighlight();
    return;
  }

  // Find candidate closest to the bottom defense gate
  if (!msState.activeTarget || msState.activeTarget.dead) {
    const sorted = [...msState.monsters].filter(m => !m.dead).sort((a, b) => b.progress - a.progress);
    const candidate = sorted.find(m => m.romaji.startsWith(typed));
    if (candidate) {
      msState.activeTarget = candidate;
    }
  }

  if (msState.activeTarget) {
    const target = msState.activeTarget;
    if (target.romaji.startsWith(typed)) {
      target.matchedLen = typed.length;
      updateMonsterBadgeHighlight(target);

      if (typed === target.romaji) {
        killMonster(target);
      } else {
        playSfx('hit');
      }
    } else {
      msState.combo = 0;
      updateMonsterHUD();
      const inp = document.getElementById('ms-input');
      if (inp) {
        inp.classList.add('input-wrong');
        setTimeout(() => inp.classList.remove('input-wrong'), 300);
      }
    }
  }
}

function handleMonsterBackspace() {
  const inp = document.getElementById('ms-input');
  if (!inp) return;
  const val = inp.value.toLowerCase().trim();
  if (msState.activeTarget) {
    msState.activeTarget.matchedLen = val.length;
    updateMonsterBadgeHighlight(msState.activeTarget);
    if (val.length === 0) {
      msState.activeTarget = null;
      highlightTargetMonster();
    }
  }
}

function pressVirtualKey(key) {
  const inp = document.getElementById('ms-input');
  if (!inp) return;
  if (key === 'BACK') {
    inp.value = inp.value.slice(0, -1);
    handleMonsterBackspace();
  } else {
    inp.value += key.toLowerCase();
    handleMonsterInput(inp.value);
  }
  inp.focus();
}

function clearMonsterInput() {
  const inp = document.getElementById('ms-input');
  if (inp) inp.value = '';
  if (msState.activeTarget) {
    msState.activeTarget.matchedLen = 0;
    updateMonsterBadgeHighlight(msState.activeTarget);
    msState.activeTarget = null;
  }
  highlightTargetMonster();
}

function resetMonsterInputHighlight() {
  if (msState.activeTarget) {
    msState.activeTarget.matchedLen = 0;
    updateMonsterBadgeHighlight(msState.activeTarget);
    msState.activeTarget = null;
    highlightTargetMonster();
  }
}

function updateMonsterBadgeHighlight(target) {
  highlightTargetMonster();
}

function highlightTargetMonster() {
  document.querySelectorAll('.ms-monster').forEach(el => {
    el.classList.remove('target-locked');
  });
  if (msState.activeTarget) {
    const activeEl = document.getElementById(msState.activeTarget.id);
    if (activeEl) activeEl.classList.add('target-locked');
  }
}

function killMonster(target) {
  target.dead = true;
  playSfx('slash');
  setTimeout(() => playSfx('explosion'), 50);

  msState.combo++;
  if (msState.combo > msState.maxCombo) msState.maxCombo = msState.combo;
  if (msState.combo > msState.recordMaxCombo) msState.recordMaxCombo = msState.combo;
  msState.kills++;
  msState.totalKills++;

  const comboMultiplier = 1 + (msState.combo - 1) * 0.25;
  const gainedScore = Math.round(target.pts * comboMultiplier);
  msState.score += gainedScore;
  addScore(Math.floor(gainedScore / 5));
  saveMonsterStats();

  updateMonsterHUD();
  playSfx('combo');

  // Hero dashes to target's lane at the bottom and strikes upward!
  const player = document.getElementById('ms-player');
  if (player) {
    player.style.left = target.xPercent + '%';
    player.classList.add('hero-attack');
    setTimeout(() => player.classList.remove('hero-attack'), 280);
  }

  triggerSlashFx(target);
  showFloatingText(`+${gainedScore}${msState.combo > 1 ? ' x' + msState.combo : ''}`, target.xPercent, target.progress, '#F59E0B');

  const el = document.getElementById(target.id);
  if (el) {
    el.classList.add('monster-destroyed');
    setTimeout(() => el.remove(), 350);
  }

  msState.monsters = msState.monsters.filter(m => m.id !== target.id);
  msState.activeTarget = null;
  clearMonsterInput();
}

function triggerSlashFx(target) {
  const fxLayer = document.getElementById('ms-fx-layer');
  if (!fxLayer) return;

  const slash = document.createElement('div');
  slash.className = 'slash-beam';
  slash.style.left = target.xPercent + '%';
  slash.style.top = target.progress + '%';
  const deg = (Math.random() * 80 - 40);
  slash.style.transform = `translate(-50%, -50%) rotate(${deg}deg)`;

  fxLayer.appendChild(slash);
  setTimeout(() => slash.remove(), 400);
}

function showFloatingText(text, xPercent, yPercent, color = '#FFF') {
  const fxLayer = document.getElementById('ms-fx-layer');
  if (!fxLayer) return;

  const fl = document.createElement('div');
  fl.className = 'ms-floating-text';
  fl.textContent = text;
  fl.style.left = Math.max(10, Math.min(88, xPercent)) + '%';
  fl.style.top = Math.max(10, Math.min(80, yPercent)) + '%';
  fl.style.color = color;

  fxLayer.appendChild(fl);
  setTimeout(() => fl.remove(), 800);
}

function triggerGameOver() {
  stopMonsterLoop();
  if (msState.score > msState.highScore) {
    msState.highScore = msState.score;
  }
  saveMonsterStats();

  const fs = document.getElementById('ms-final-score');
  const fw = document.getElementById('ms-final-wave');
  const fk = document.getElementById('ms-final-kills');
  const fc = document.getElementById('ms-final-combo');

  if (fs) fs.textContent = msState.score;
  if (fw) fw.textContent = msState.wave;
  if (fk) fk.textContent = msState.kills;
  if (fc) fc.textContent = msState.maxCombo + 'x';

  const modal = document.getElementById('ms-gameover-modal');
  if (modal) modal.classList.remove('hidden');
}

function restartMonsterGame() {
  document.getElementById('ms-gameover-modal').classList.add('hidden');
  startMonsterGame();
}

function exitMonsterGame() {
  if (msState.running && !msState.paused) {
    toggleMonsterPause(true);
    if (!confirm('Pertarungan sedang berlangsung. Yakin ingin keluar ke menu mini games?')) {
      toggleMonsterPause(false);
      return;
    }
  }
  stopMonsterLoop();
  msState.monsters = [];
  const track = document.getElementById('ms-monsters-track');
  if (track) track.innerHTML = '';
  document.getElementById('ms-gameover-modal').classList.add('hidden');
  initMonsterLobby();
  showPage('games');
}

// ===== INTERACTIVE FLOATING KANA CARDS (HERO) =====
function initFloatingCards() {
  const container = document.getElementById('hero-floating-cards');
  if (!container) return;

  const cards = container.querySelectorAll('.float-card');
  cards.forEach(card => {
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let initialLeft = 0;
    let initialTop = 0;
    let hasMoved = false;

    // Prevent default browser drag image/ghost
    card.addEventListener('dragstart', (e) => e.preventDefault());

    card.addEventListener('pointerdown', (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      isDragging = true;
      hasMoved = false;
      startX = e.clientX;
      startY = e.clientY;

      const rect = card.getBoundingClientRect();
      const parentRect = container.getBoundingClientRect();
      initialLeft = rect.left - parentRect.left;
      initialTop = rect.top - parentRect.top;

      // Lock to current pixel position
      card.style.left = `${initialLeft}px`;
      card.style.top = `${initialTop}px`;
      card.style.bottom = 'auto';
      card.style.right = 'auto';
      card.classList.add('is-dragging');

      try {
        card.setPointerCapture(e.pointerId);
      } catch (_) {}
    });

    card.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        hasMoved = true;
      }

      const parentRect = container.getBoundingClientRect();
      const cardWidth = card.offsetWidth;
      const cardHeight = card.offsetHeight;

      // Restrict within bounding box
      const maxLeft = parentRect.width - cardWidth + 24;
      const minLeft = -24;
      const maxTop = parentRect.height - cardHeight + 24;
      const minTop = -24;

      const newLeft = Math.max(minLeft, Math.min(maxLeft, initialLeft + dx));
      const newTop = Math.max(minTop, Math.min(maxTop, initialTop + dy));

      card.style.left = `${newLeft}px`;
      card.style.top = `${newTop}px`;
    });

    const endDrag = (e) => {
      if (!isDragging) return;
      isDragging = false;
      card.classList.remove('is-dragging');
      try {
        card.releasePointerCapture(e.pointerId);
      } catch (_) {}

      // Click event without significant drag: pronounce kana
      if (!hasMoved) {
        const kana = card.getAttribute('data-kana') || card.querySelector('.card-jp')?.textContent?.trim();
        if (kana) {
          speakJapanese(kana);
        }
      }
    };

    card.addEventListener('pointerup', endDrag);
    card.addEventListener('pointercancel', endDrag);
  });
}

// ===== DOM INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  try {
    const savedPage = sessionStorage.getItem('sijapanese_active_page');
    const validPages = ['home', 'materi', 'hiragana', 'katakana', 'vocabulary', 'games', 'monster'];
    if (savedPage && savedPage !== 'home' && validPages.includes(savedPage) && document.getElementById('page-' + savedPage)) {
      showPage(savedPage);
      if (savedPage === 'materi') {
        const savedLesson = sessionStorage.getItem('sijapanese_active_lesson_id');
        const savedStep = sessionStorage.getItem('sijapanese_active_step');
        if (savedLesson && typeof openLesson === 'function') {
          openLesson(parseInt(savedLesson, 10), savedStep || 'mulai');
        }
      }
    } else {
      showPage('home');
    }
  } catch (e) {
    try { showPage('home'); } catch (err) {}
  }

  // Bersihkan pre-active style setelah showPage aktif
  const pre = document.getElementById('pre-active-style');
  if (pre) pre.remove();
  loadState();
  updateScoreDisplay();
  createSakura();
  updateProgressBars();
  initFloatingCards();
  renderCharGrid('hiragana', 'Semua');
  renderCharGrid('katakana', 'Semua');
  showVocabCategory('numbers');
});