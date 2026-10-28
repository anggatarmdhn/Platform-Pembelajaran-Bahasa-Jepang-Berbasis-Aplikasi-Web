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
  try {
    const saved = localStorage.getItem('sijapanese_active_user');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Migrasi avatar jika masih format emoji lama
      if (!parsed.avatar || parsed.avatar.length <= 4) {
        if (parsed.role === 'guru') parsed.avatar = 'img/avatar_tanaka.svg';
        else if (parsed.name && parsed.name.includes('Aoi')) parsed.avatar = 'img/avatar_aoi.svg';
        else parsed.avatar = 'img/avatar_anggata.svg';
      }
      return parsed;
    }
  } catch (e) {}
  return DEMO_ACCOUNTS.kenji;
}

let currentUser = getSavedUser();
let isUserLoggedIn = true;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuthSystem);
  } else {
    initAuthSystem();
  }
}

function initAuthSystem() {
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
    container.innerHTML = `
      <div class="nav-auth-wrap">
        <button class="btn-nav-masuk" onclick="openLoginModal()" title="Masuk ke Akun">Masuk</button>
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
          <!-- Banner Akun Aktif & Cepat Ganti Admin/Client -->
          <div id="prof-role-banner" style="background:#F8FAFC; border:1.5px solid #E2E8F0; border-radius:14px; padding:0.75rem 1rem; margin-bottom:1.15rem; display:flex; align-items:center; justify-content:space-between; gap:0.75rem;">
            <div style="display:flex; align-items:center; gap:0.75rem;">
              <div id="prof-role-icon-wrap">
                ${renderAvatarHtml(currentUser.avatar, currentUser.name, 'prof-role-avatar-thumb')}
              </div>
              <div>
                <strong id="prof-role-title" style="font-size:0.86rem; color:#0F172A; display:block;">Akun Siswa Belajar</strong>
                <small id="prof-role-email" style="color:#64748B; font-size:0.75rem;">kenji@sijapanese.sch.id</small>
              </div>
            </div>
            <button type="button" id="prof-role-switch-btn" onclick="toggleAdminClientRole()" style="background:#FFFFFF; border:1.5px solid #CBD5E1; color:#0F172A; font-weight:800; font-size:0.78rem; padding:0.45rem 0.85rem; border-radius:9999px; cursor:pointer; transition:all 0.2s ease; display:inline-flex; align-items:center; gap:0.4rem;">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
              <span id="prof-role-switch-text">Ganti ke Akun Guru</span>
            </button>
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

          <div class="modal-actions-row">
            <button type="button" class="btn-modal-link" onclick="openLoginModalFromProfile()">Ganti Akun Lain</button>
            <button type="button" class="btn-modal-logout" onclick="logoutFromModal()">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              <span>Keluar (Logout)</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL PILIH AKUN PENGGUNA (BERSIH DENGAN AVATAR VEKTOR ANIME RESMI) -->
    <div class="sij-modal-backdrop" id="modal-quick-login" onclick="handleBackdropClick(event, 'modal-quick-login')">
      <div class="sij-modal-card">
        <div class="sij-modal-header">
          <div class="sij-modal-titles">
            <h3>Pilih Akun Pengguna</h3>
            <p>Klik akun di bawah untuk langsung beralih profil</p>
          </div>
          <button class="sij-modal-close-btn" onclick="closeLoginModal()">&times;</button>
        </div>

        <div class="sij-modal-body">
          <div class="sij-demo-account-list">
            <!-- Guru Tanaka -->
            <button type="button" class="sij-demo-account-btn btn-is-guru" onclick="quickLoginAs('guru')">
              <div style="display:flex; align-items:center; gap:0.85rem;">
                <img src="img/avatar_tanaka.svg" alt="Sensei Tanaka" class="demo-acc-avatar-img" />
                <div>
                  <strong style="display:block; color:#0F172A; font-size:0.92rem;">Sensei Tanaka</strong>
                  <small style="color:#64748B;">guru@sijapanese.sch.id</small>
                </div>
              </div>
              <span class="demo-role-pill guru">Guru Pengajar &rarr;</span>
            </button>

            <!-- Siswa Anggata -->
            <button type="button" class="sij-demo-account-btn" onclick="quickLoginAs('kenji')">
              <div style="display:flex; align-items:center; gap:0.85rem;">
                <img src="img/avatar_anggata.svg" alt="Anggata Ramadhan" class="demo-acc-avatar-img" />
                <div>
                  <strong style="display:block; color:#0F172A; font-size:0.92rem;">Anggata Al Haadi Ramadhan</strong>
                  <small style="color:#64748B;">kenji@sijapanese.sch.id • 1.250 Poin</small>
                </div>
              </div>
              <span class="demo-role-pill siswa">Siswa N5 &rarr;</span>
            </button>

            <!-- Siswa Aoi -->
            <button type="button" class="sij-demo-account-btn" onclick="quickLoginAs('aoi')">
              <div style="display:flex; align-items:center; gap:0.85rem;">
                <img src="img/avatar_aoi.svg" alt="Aoi Sorano" class="demo-acc-avatar-img" />
                <div>
                  <strong style="display:block; color:#0F172A; font-size:0.92rem;">Aoi Sorano</strong>
                  <small style="color:#64748B;">aoi@sijapanese.sch.id • 480 Poin</small>
                </div>
              </div>
              <span class="demo-role-pill siswa">Siswa N4 &rarr;</span>
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
  const modal = document.getElementById('modal-user-profile');
  if (!modal) return;

  document.getElementById('prof-nama').value = currentUser.name || 'Anggata Al Haadi Ramadhan';
  document.getElementById('prof-reg').value = currentUser.reg_no || 'JFT-2026-51720';
  document.getElementById('prof-nat').value = currentUser.nationality || 'INDONESIA';
  document.getElementById('prof-gender').value = currentUser.gender || 'Laki-laki (MALE)';
  document.getElementById('prof-birth').value = currentUser.birthdate || '2007/09/16';
  document.getElementById('prof-level').value = currentUser.target_level || 'JLPT N5 (Dasar 1)';

  const avatarBox = document.getElementById('profile-avatar-display-box');
  if (avatarBox) {
    avatarBox.innerHTML = renderAvatarHtml(currentUser.avatar, currentUser.name, 'profile-modal-avatar-img');
  }

  const isGuru = currentUser.role === 'guru';
  const roleIconWrap = document.getElementById('prof-role-icon-wrap');
  const roleTitle = document.getElementById('prof-role-title');
  const roleEmail = document.getElementById('prof-role-email');
  const roleBtn = document.getElementById('prof-role-switch-btn');
  const roleBtnText = document.getElementById('prof-role-switch-text');

  if (roleIconWrap) {
    roleIconWrap.innerHTML = renderAvatarHtml(currentUser.avatar, currentUser.name, 'prof-role-avatar-thumb');
  }
  if (roleTitle) roleTitle.textContent = isGuru ? 'Akun Admin (Guru Master)' : 'Akun Client (Siswa Belajar)';
  if (roleEmail) roleEmail.textContent = currentUser.email || (isGuru ? 'guru@sijapanese.sch.id' : 'kenji@sijapanese.sch.id');
  
  if (roleBtn) {
    if (roleBtnText) roleBtnText.textContent = isGuru ? 'Ganti ke Akun Siswa' : 'Ganti ke Akun Guru';
    roleBtn.style.borderColor = isGuru ? '#BFDBFE' : '#FECACA';
    roleBtn.style.color = isGuru ? '#2563EB' : '#D9383A';
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

async function toggleAdminClientRole() {
  closeProfileModal();
  if (currentUser.role === 'guru') {
    await quickLoginAs('kenji');
  } else {
    await quickLoginAs('guru');
  }
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
  closeProfileModal();
  await showLoadingOverlay('Menyimpan Profil...', 'Memperbarui data identitas peserta...', currentUser.avatar, 600);
  renderUserWidget();
}

function openLoginModalFromProfile() {
  closeProfileModal();
  openLoginModal();
}

async function logoutFromModal() {
  closeProfileModal();
  await logoutUser();
}

// ====================================================
// LOGIKA MODAL LOGIN DENGAN LOADING ANIMASI
// ====================================================
function openLoginModal() {
  const modal = document.getElementById('modal-quick-login');
  if (modal) modal.classList.add('show');
}

function closeLoginModal() {
  const modal = document.getElementById('modal-quick-login');
  if (modal) modal.classList.remove('show');
}

async function quickLoginAs(roleKey) {
  const account = DEMO_ACCOUNTS[roleKey];
  if (!account) return;

  closeLoginModal();

  if (account.role === 'guru') {
    await showLoadingOverlay('Memuat Akun Guru...', 'Mempersiapkan Dashboard Master Guru...', 'img/avatar_tanaka.svg', 750);
    currentUser = { ...account };
    isUserLoggedIn = true;
    saveUser(currentUser);
    renderUserWidget();
    const guruUrl = (window.location.port === '8080') ? '/guru' : 'guru.html';
    window.location.href = guruUrl;
  } else {
    const avatar = account.avatar || 'img/avatar_anggata.svg';
    const firstName = account.name.split(' ')[0];
    await showLoadingOverlay(`Memuat Akun ${firstName}...`, 'Menyiapkan modul materi & progres kuis...', avatar, 700);
    currentUser = { ...account };
    isUserLoggedIn = true;
    saveUser(currentUser);
    renderUserWidget();
  }
}

async function logoutUser() {
  await showLoadingOverlay('Mengeluarkan Akun...', 'Membersihkan sesi login...', 'img/avatar_anggata.svg', 600);
  isUserLoggedIn = false;
  try {
    localStorage.removeItem('sijapanese_active_user');
  } catch (e) {}

  renderUserWidget();
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
