// ====================================================
// SIJapanese - User Authentication, Loading Transitions & Modal
// Tanpa Log / Bersih & Dilengkapi Loading Animasi Antar Akun
// Menggunakan Karakter Vektor Anime Asli (Bukan Emoji Pasaran)
// ====================================================

const DEMO_ACCOUNTS = {
  guru: {
    id: 1,
    name: 'Sensei Tanaka',
    email: 'guru@sijapanese.sch.id',
    role: 'guru',
    avatar: 'img/avatar_tanaka.svg',
    reg_no: 'SIJ-2026-GURU01',
    nationality: 'JAPAN',
    gender: 'Laki-laki (MALE)',
    birthdate: '1988/04/12',
    target_level: 'Pengajar (N1 - N5)',
    score: 999,
    completed_quests: 12
  },
  kenji: {
    id: 2,
    name: 'Anggata Al Haadi Ramadhan',
    email: 'kenji@sijapanese.sch.id',
    role: 'siswa',
    avatar: 'img/avatar_anggata.svg',
    reg_no: 'JFT-2026-51720',
    nationality: 'INDONESIA',
    gender: 'Laki-laki (MALE)',
    birthdate: '2007/09/16',
    target_level: 'JLPT N5 (Dasar 1)',
    score: 1250,
    completed_quests: 4
  },
  aoi: {
    id: 3,
    name: 'Aoi Sorano',
    email: 'aoi@sijapanese.sch.id',
    role: 'siswa',
    avatar: 'img/avatar_aoi.svg',
    reg_no: 'JFT-2026-51721',
    nationality: 'INDONESIA',
    gender: 'Perempuan (FEMALE)',
    birthdate: '2008/01/20',
    target_level: 'JLPT N4 (Dasar 2)',
    score: 480,
    completed_quests: 2
  }
};

function getSavedUser() {
  // 1. Cek sesi Laravel jika disuntikkan via window.LARAVEL_USER
  if (typeof window !== 'undefined' && window.LARAVEL_USER !== undefined) {
    return window.LARAVEL_USER;
  }

  // 2. Cek local storage (mode statis/offline)
  try {
    const saved = localStorage.getItem('sijapanese_active_user') || localStorage.getItem('sijapanese_auth_user');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.email) {
        if (!parsed.avatar || parsed.avatar.length <= 4) {
          if (parsed.role === 'guru') parsed.avatar = 'img/avatar_tanaka.svg';
          else if (parsed.name && parsed.name.includes('Aoi')) parsed.avatar = 'img/avatar_aoi.svg';
          else parsed.avatar = 'img/avatar_anggata.svg';
        }
        return parsed;
      }
    }
  } catch (e) {}

  return null;
}

let currentUser = getSavedUser();
let isUserLoggedIn = currentUser !== null;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuthSystem);
  } else {
    initAuthSystem();
  }
}

function initAuthSystem() {
  currentUser = getSavedUser();
  isUserLoggedIn = currentUser !== null;
  injectAuthModals();
  renderUserWidget();
}

// Helper untuk render elemen avatar (Mendukung SVG / PNG gambar maupun teks)
function renderAvatarHtml(avatar, altText = 'Avatar', extraClass = '') {
  if (!avatar) return `<span class="${extraClass}">👤</span>`;
  if (avatar.startsWith('img/') || avatar.startsWith('/') || avatar.endsWith('.svg') || avatar.endsWith('.png')) {
    return `<img src="${avatar}" alt="${escapeHtml(altText)}" class="${extraClass}" />`;
  }
  return `<span class="${extraClass}">${escapeHtml(avatar)}</span>`;
}

// ====================================================
// RENDER BUBBLE PROFIL DI NAVBAR
// ====================================================
function renderUserWidget() {
  const container = document.getElementById('nav-user-widget');
  if (!container) return;

  if (!isUserLoggedIn || !currentUser) {
    const isStatic = window.location.pathname.endsWith('.html');
    const loginUrl = isStatic ? 'login.html' : '/login';
    const registerUrl = isStatic ? 'register.html' : '/register';

    container.innerHTML = `
      <div class="nav-auth-wrap not-logged-in" style="display:flex; align-items:center; gap:0.5rem;">
        <a href="${loginUrl}" class="btn-nav-masuk" style="text-decoration:none; padding:0.4rem 0.9rem; border-radius:9999px; font-weight:700; font-size:0.85rem; border:1.5px solid #CBD5E1; color:#1E293B; background:transparent;">Masuk</a>
        <a href="${registerUrl}" class="btn-nav-daftar" style="text-decoration:none; padding:0.4rem 0.9rem; border-radius:9999px; font-weight:700; font-size:0.85rem; border:1.5px solid #D9383A; color:#FFFFFF; background:#D9383A;">Daftar</a>
      </div>
    `;
    return;
  }

  const isGuru = currentUser.role === 'guru';
  const firstName = currentUser.name ? currentUser.name.split(' ')[0] : 'User';
  const avatarPath = currentUser.avatar || (isGuru ? 'img/avatar_tanaka.svg' : 'img/avatar_anggata.svg');

  container.innerHTML = `
    <div class="nav-auth-wrap">
      <!-- Poin Kompak -->
      <div class="nav-score-compact" title="Total Poin: ${currentUser.score || 0}">
        <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <span>${currentUser.score || 0}</span>
      </div>

      <!-- Bubble Profil (Pas mencet keluar modal profil peserta) -->
      <button class="nav-profile-bubble-btn ${isGuru ? 'is-guru' : ''}" onclick="openProfileModal()" title="Profil: ${escapeHtml(currentUser.name)} - Klik untuk lihat profil & pengaturan">
        <div class="bubble-avatar-circle">
          ${renderAvatarHtml(avatarPath, currentUser.name)}
          <span class="bubble-online-status"></span>
        </div>
        <span class="bubble-name-text">${escapeHtml(firstName)}</span>
        <svg viewBox="0 0 24 24" class="svg-caret-mini"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
    </div>
  `;
}

// ====================================================
// FUNGSI ANIMASI LOADING TRANSISI TIAP PINDAH LOGIN / AKUN
// ====================================================
function showLoadingOverlay(title, sub, avatar, duration = 750) {
  const overlay = document.getElementById('sij-loading-overlay');
  if (!overlay) return Promise.resolve();

  document.getElementById('sij-loading-title').textContent = title;
  document.getElementById('sij-loading-sub').textContent = sub;
  
  const avatarContainer = document.getElementById('sij-loading-avatar');
  if (avatarContainer) {
    if (avatar && (avatar.startsWith('img/') || avatar.startsWith('/') || avatar.endsWith('.svg') || avatar.endsWith('.png'))) {
      avatarContainer.innerHTML = `<img src="${avatar}" alt="Avatar" style="width:38px;height:38px;border-radius:50%;object-fit:cover;display:block;" />`;
    } else {
      avatarContainer.textContent = avatar || '🎌';
    }
  }

  const fill = overlay.querySelector('.sij-loading-progress-fill');
  if (fill) {
    fill.style.animation = 'none';
    fill.offsetHeight;
    fill.style.animation = `fillProgress ${duration / 1000}s ease forwards`;
  }

  overlay.classList.add('show');

  return new Promise(resolve => {
    setTimeout(() => {
      overlay.classList.remove('show');
      setTimeout(resolve, 200);
    }, duration);
  });
}

// ====================================================
// INJEKSI MODAL PROFIL, LOGIN & LOADING OVERLAY
// ====================================================
function injectAuthModals() {
  if (document.getElementById('modal-user-profile')) return;

  const guruUrl = (window.location.port === '8080') ? '/guru' : 'guru.html';

  const modalHtml = `
    <!-- LOADING OVERLAY ANIMASI (TIAP PINDAH LOGIN / AKUN) -->
    <div class="sij-loading-overlay" id="sij-loading-overlay">
      <div class="sij-loading-card">
        <div class="sij-spinner-ring">
          <div class="sij-spinner-inner">
            <span id="sij-loading-avatar">🎌</span>
          </div>
        </div>
        <h4 class="sij-loading-title" id="sij-loading-title">Memuat Akun...</h4>
        <p class="sij-loading-sub" id="sij-loading-sub">Mohon tunggu sebentar...</p>
        <div class="sij-loading-progress-bar">
          <div class="sij-loading-progress-fill"></div>
        </div>
      </div>
    </div>

    <!-- MODAL PROFIL PESERTA & SERTIFIKAT (MUNCUL PAS MENCET PROFIL) -->
    <div class="sij-modal-backdrop" id="modal-user-profile" onclick="handleBackdropClick(event, 'modal-user-profile')">
      <div class="sij-modal-card">
        <div class="sij-modal-header">
          <div class="sij-modal-titles">
            <h3>Profil Peserta &amp; Sertifikat</h3>
            <p>Data resmi yang tercetak pada rapor &amp; kemajuan belajar</p>
          </div>
          <button class="sij-modal-close-btn" onclick="closeProfileModal()">&times;</button>
        </div>

        <div class="sij-modal-body">
          <!-- Informasi Akun Pengguna -->
          <div id="prof-role-banner" style="background:#F8FAFC; border:1.5px solid #E2E8F0; border-radius:14px; padding:0.75rem 1rem; margin-bottom:1.15rem; display:flex; align-items:center; justify-content:space-between; gap:0.75rem;">
            <div style="display:flex; align-items:center; gap:0.75rem;">
              <div id="prof-role-icon-wrap"></div>
              <div>
                <strong id="prof-role-title" style="font-size:0.86rem; color:#0F172A; display:block;">Akun Pengguna</strong>
                <small id="prof-role-email" style="color:#64748B; font-size:0.75rem;"></small>
              </div>
            </div>
            <div>
              <span id="prof-role-badge" style="font-size:0.75rem; font-weight:800; padding:0.25rem 0.65rem; border-radius:9999px; border:1px solid #E2E8F0;">
                Akun Aktif
              </span>
            </div>
          </div>

          <form id="form-sij-profile" onsubmit="saveProfileModal(event)">
            
            <!-- Pasfoto Formal 3x4 -->
            <div class="sij-pasfoto-wrapper">
              <div class="sij-pasfoto-box" id="profile-avatar-display-box">
                ${renderAvatarHtml(currentUser.avatar, currentUser.name, 'profile-modal-avatar-img')}
              </div>
              <div class="sij-pasfoto-badge-row">
                <span>Pasfoto Formal Siswa (3x4):</span>
                <span class="sij-badge-foto-kustom">Foto Resmi</span>
              </div>
              <div class="sij-pasfoto-buttons">
                <button type="button" class="btn-pasfoto-upload" onclick="pickNextAvatar()">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                  <span>Ganti Karakter Siswa</span>
                </button>
                <button type="button" class="btn-pasfoto-anonim" onclick="setAnonymousAvatar()">
                  <span>Siluet Anonim</span>
                </button>
              </div>
            </div>

            <!-- Form Data Peserta -->
            <div class="sij-form-group">
              <label for="prof-nama">Nama Lengkap (Huruf Romawi):</label>
              <input type="text" id="prof-nama" class="sij-form-input" required />
            </div>

            <div class="sij-form-group">
              <label for="prof-reg">Nomor Registrasi Ujian (Registration No.):</label>
              <input type="text" id="prof-reg" class="sij-form-input" required />
            </div>

            <div class="sij-form-row">
              <div class="sij-form-group">
                <label for="prof-nat">Kewarganegaraan:</label>
                <input type="text" id="prof-nat" class="sij-form-input" value="INDONESIA" />
              </div>
              <div class="sij-form-group">
                <label for="prof-gender">Jenis Kelamin:</label>
                <select id="prof-gender" class="sij-form-input">
                  <option value="Laki-laki (MALE)">Laki-laki (MALE)</option>
                  <option value="Perempuan (FEMALE)">Perempuan (FEMALE)</option>
                </select>
              </div>
            </div>

            <div class="sij-form-row">
              <div class="sij-form-group">
                <label for="prof-birth">Tanggal Lahir (YYYY/MM/DD):</label>
                <input type="text" id="prof-birth" class="sij-form-input" placeholder="2007/09/16" />
              </div>
              <div class="sij-form-group">
                <label for="prof-level">Target Tingkat Belajar:</label>
                <select id="prof-level" class="sij-form-input">
                  <option value="JLPT N5 (Dasar 1)">JLPT N5 (Dasar 1)</option>
                  <option value="JLPT N4 (Dasar 2)">JLPT N4 (Dasar 2)</option>
                  <option value="JLPT N3 (Menengah)">JLPT N3 (Menengah)</option>
                </select>
              </div>
            </div>

            <!-- Akses Master Guru jika akun guru -->
            <div id="guru-shortcut-area" style="display:none;" class="guru-access-box">
              <div>
                <strong style="color:#B91C1C; font-size:0.86rem; display:block;">Hak Akses Guru Pengajar</strong>
                <small style="color:#64748B;">Kelola kotak level (N5-N1), modul &amp; kuis</small>
              </div>
              <a href="${guruUrl}" class="btn-open-guru-dash">Buka Dashboard Guru &rarr;</a>
            </div>

            <button type="submit" class="btn-sij-save-profile">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
              <span>Simpan Perubahan Profil</span>
            </button>
          </form>

          <div class="modal-actions-row" style="justify-content:center; padding-top:0.5rem;">
            <button type="button" class="btn-modal-logout" onclick="logoutFromModal()" style="width:100%; justify-content:center; padding:0.65rem 1rem; border-radius:12px;">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              <span>Keluar dari Akun (Logout)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

// ====================================================
// LOGIKA MODAL PROFIL (PAS MENCET BUBBLE)
// ====================================================
const AVATAR_PRESETS = [
  'img/avatar_anggata.svg',
  'img/avatar_aoi.svg',
  'img/avatar_tanaka.svg'
];
let currentAvatarIdx = 0;

function openProfileModal() {
  if (!currentUser) {
    goToLogin();
    return;
  }
  const modal = document.getElementById('modal-user-profile');
  if (!modal) return;

  const isGuru = currentUser.role === 'guru';

  document.getElementById('prof-nama').value = currentUser.name || '';
  document.getElementById('prof-reg').value = currentUser.reg_no || (isGuru ? 'SIJ-2026-GURU01' : 'JFT-2026-51720');
  document.getElementById('prof-nat').value = currentUser.nationality || (isGuru ? 'JAPAN' : 'INDONESIA');
  document.getElementById('prof-gender').value = currentUser.gender || 'Laki-laki (MALE)';
  document.getElementById('prof-birth').value = currentUser.birthdate || (isGuru ? '1988/04/12' : '2007/09/16');
  document.getElementById('prof-level').value = currentUser.target_level || (isGuru ? 'Pengajar (N1 - N5)' : 'JLPT N5 (Dasar 1)');

  const avatarBox = document.getElementById('profile-avatar-display-box');
  if (avatarBox) {
    avatarBox.innerHTML = renderAvatarHtml(currentUser.avatar, currentUser.name, 'profile-modal-avatar-img');
  }

  const roleIconWrap = document.getElementById('prof-role-icon-wrap');
  const roleTitle = document.getElementById('prof-role-title');
  const roleEmail = document.getElementById('prof-role-email');
  const roleBadge = document.getElementById('prof-role-badge');

  if (roleIconWrap) {
    roleIconWrap.innerHTML = renderAvatarHtml(currentUser.avatar, currentUser.name, 'prof-role-avatar-thumb');
  }
  if (roleTitle) roleTitle.textContent = isGuru ? 'Guru Pengajar (Master)' : 'Siswa Belajar';
  if (roleEmail) roleEmail.textContent = currentUser.email || '';
  if (roleBadge) {
    roleBadge.textContent = isGuru ? 'Master Guru' : 'Siswa Aktif';
    roleBadge.style.background = isGuru ? '#FEF2F2' : '#EFF6FF';
    roleBadge.style.color = isGuru ? '#D9383A' : '#2563EB';
    roleBadge.style.borderColor = isGuru ? '#FECACA' : '#BFDBFE';
  }

  const guruBox = document.getElementById('guru-shortcut-area');
  if (guruBox) {
    guruBox.style.display = isGuru ? 'flex' : 'none';
  }

  modal.classList.add('show');
}

function closeProfileModal() {
  const modal = document.getElementById('modal-user-profile');
  if (!modal) return;
  modal.classList.remove('show');
}

function pickNextAvatar() {
  currentAvatarIdx = (currentAvatarIdx + 1) % AVATAR_PRESETS.length;
  const newAvatar = AVATAR_PRESETS[currentAvatarIdx];
  currentUser.avatar = newAvatar;
  const avatarBox = document.getElementById('profile-avatar-display-box');
  if (avatarBox) {
    avatarBox.innerHTML = renderAvatarHtml(newAvatar, currentUser.name, 'profile-modal-avatar-img');
  }
}

function setAnonymousAvatar() {
  currentUser.avatar = 'img/avatar_anggata.svg';
  const avatarBox = document.getElementById('profile-avatar-display-box');
  if (avatarBox) {
    avatarBox.innerHTML = renderAvatarHtml(currentUser.avatar, currentUser.name, 'profile-modal-avatar-img');
  }
}

async function saveProfileModal(e) {
  e.preventDefault();
  currentUser.name = document.getElementById('prof-nama').value.trim();
  currentUser.reg_no = document.getElementById('prof-reg').value.trim();
  currentUser.nationality = document.getElementById('prof-nat').value.trim();
  currentUser.gender = document.getElementById('prof-gender').value;
  currentUser.birthdate = document.getElementById('prof-birth').value.trim();
  currentUser.target_level = document.getElementById('prof-level').value;

  saveUser(currentUser);

  // Sync to Laravel database if session is authenticated
  try {
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    await fetch('/api/auth/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...(csrfToken ? { 'X-CSRF-TOKEN': csrfToken } : {})
      },
      body: JSON.stringify({
        name: currentUser.name,
        avatar: currentUser.avatar
      })
    });
  } catch (err) {}

  closeProfileModal();
  await showLoadingOverlay('Menyimpan Profil...', 'Memperbarui data identitas peserta...', currentUser.avatar, 600);
  renderUserWidget();
}

function goToLogin() {
  const isLaravel = window.location.pathname.startsWith('/guru') || window.location.pathname.startsWith('/belajar') || window.location.pathname.startsWith('/modul') || window.location.port === '8080';
  window.location.href = isLaravel ? '/login' : 'login.html';
}

function openLoginModal() {
  goToLogin();
}

function closeLoginModal() {
  // deprecated, no quick-login modal
}

async function logoutFromModal() {
  closeProfileModal();
  await logoutUser();
}

async function logoutUser() {
  await showLoadingOverlay('Mengeluarkan Akun...', 'Membersihkan sesi login...', 'img/avatar_anggata.svg', 500);
  isUserLoggedIn = false;
  currentUser = null;
  try {
    localStorage.removeItem('sijapanese_active_user');
    localStorage.removeItem('sijapanese_auth_user');
    sessionStorage.clear();
  } catch (e) {}

  const laravelLogoutForm = document.getElementById('logout-form');
  if (laravelLogoutForm) {
    laravelLogoutForm.submit();
  } else {
    renderUserWidget();
    const isStatic = window.location.pathname.endsWith('.html');
    window.location.href = isStatic ? 'index.html' : '/';
  }
}

function saveUser(user) {
  try {
    localStorage.setItem('sijapanese_active_user', JSON.stringify(user));
    localStorage.setItem('sijapanese_auth_user', JSON.stringify(user));
  } catch (e) {}
}

function handleBackdropClick(e, modalId) {
  if (e.target.id === modalId) {
    document.getElementById(modalId).classList.remove('show');
  }
}

window.addPointsToUser = function(points) {
  if (!points || !currentUser) return;
  currentUser.score = (currentUser.score || 0) + points;
  saveUser(currentUser);
  renderUserWidget();
};

function escapeHtml(text) {
  if (text === null || text === undefined) return '';
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return String(text).replace(/[&<>"']/g, function(m) {
    return map[m] || m;
  });
}
