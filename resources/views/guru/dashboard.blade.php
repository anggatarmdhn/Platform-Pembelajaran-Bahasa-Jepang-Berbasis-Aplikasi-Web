<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="csrf-token" content="{{ csrf_token() }}" />
  <title>Dashboard Master Guru - SIJapanese</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="{{ asset('css/style.css') }}" />
  <link rel="stylesheet" href="{{ asset('css/materi.css') }}" />
  <style>
    /* Styling Khusus Guru Master Dashboard */
    :root {
      --guru-bg: #F8FAFC;
      --card-white: #FFFFFF;
    }
    body {
      background: var(--guru-bg);
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: #0F172A;
      margin: 0;
      padding: 0;
    }
    .guru-navbar {
      background: #FFFFFF;
      border-bottom: 2px solid #E2E8F0;
      padding: 0.85rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);
    }
    .guru-nav-left {
      display: flex;
      align-items: center;
      gap: 1.2rem;
    }
    .badge-master-guru {
      background: #FEF2F2;
      color: #D9383A;
      border: 1.5px solid #FCA5A5;
      font-size: 0.76rem;
      font-weight: 800;
      padding: 0.35rem 0.85rem;
      border-radius: var(--radius-pill);
      letter-spacing: 0.5px;
    }
    .btn-return-app {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: #F1F5F9;
      color: #1E293B;
      border: 1.5px solid #CBD5E1;
      padding: 0.45rem 1rem;
      border-radius: var(--radius-pill);
      font-size: 0.85rem;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .btn-return-app:hover {
      background: #DBEAFE;
      color: #1D4ED8;
      border-color: #93C5FD;
    }
    .guru-profile-bar {
      display: flex;
      align-items: center;
      gap: 0.85rem;
    }
    .guru-avatar-circle {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: #FEE2E2;
      border: 2px solid #D9383A;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
    }
    .guru-info-text {
      display: flex;
      flex-direction: column;
      line-height: 1.25;
    }
    .guru-name {
      font-weight: 800;
      font-size: 0.95rem;
    }
    .guru-role-sub {
      font-size: 0.72rem;
      color: #D9383A;
      font-weight: 700;
    }

    /* Layout Konten */
    .guru-container {
      max-width: 1200px;
      margin: 1.8rem auto 4rem;
      padding: 0 1.5rem;
    }

    /* KPI Stat Cards (Warna-Warni) */
    .guru-kpi-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
      gap: 1.2rem;
      margin-bottom: 2rem;
    }
    .kpi-card {
      background: #FFFFFF;
      border-radius: 16px;
      padding: 1.4rem;
      border: 1.5px solid #E2E8F0;
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
      position: relative;
      overflow: hidden;
      transition: transform 0.2s ease;
    }
    .kpi-card:hover {
      transform: translateY(-3px);
    }
    .kpi-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
    }
    .kpi-red::before { background: var(--red); }
    .kpi-blue::before { background: var(--blue); }
    .kpi-yellow::before { background: var(--yellow); }
    .kpi-green::before { background: var(--green); }
    .kpi-purple::before { background: var(--purple); }

    .kpi-label {
      font-size: 0.82rem;
      font-weight: 700;
      color: #64748B;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .kpi-value {
      font-size: 2.1rem;
      font-weight: 900;
      color: #0F172A;
      margin: 0.35rem 0 0.2rem;
    }
    .kpi-sub {
      font-size: 0.78rem;
      color: #94A3B8;
      font-weight: 600;
    }

    /* Tab Navigasi Master */
    .guru-tabs-nav {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      background: #FFFFFF;
      padding: 0.6rem;
      border-radius: 16px;
      border: 1.5px solid #E2E8F0;
      margin-bottom: 1.8rem;
      overflow-x: auto;
    }
    .guru-tab-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.65rem 1.2rem;
      border-radius: 12px;
      border: none;
      background: transparent;
      color: #475569;
      font-weight: 700;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.2s ease;
      white-space: nowrap;
    }
    .guru-tab-btn.active {
      background: var(--red);
      color: #FFFFFF;
      box-shadow: 0 4px 12px rgba(217, 56, 58, 0.25);
    }
    .guru-tab-content {
      display: none;
    }
    .guru-tab-content.active {
      display: block;
    }

    /* Box Card Standard */
    .master-card {
      background: #FFFFFF;
      border: 1.5px solid #E2E8F0;
      border-radius: 18px;
      padding: 1.8rem;
      box-shadow: 0 6px 18px rgba(15, 23, 42, 0.04);
      margin-bottom: 1.8rem;
    }
    .master-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 1.5px solid #F1F5F9;
    }
    .master-card-title h3 {
      font-size: 1.35rem;
      font-weight: 800;
      margin: 0 0 0.2rem;
      color: #0F172A;
    }
    .master-card-title p {
      margin: 0;
      color: #64748B;
      font-size: 0.88rem;
    }

    /* Action Buttons */
    .btn-guru-primary {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      background: var(--red);
      color: #FFFFFF;
      border: none;
      padding: 0.6rem 1.25rem;
      border-radius: var(--radius-pill);
      font-weight: 800;
      font-size: 0.88rem;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(217, 56, 58, 0.25);
      transition: all 0.2s ease;
    }
    .btn-guru-primary:hover {
      background: var(--red-dark);
      transform: translateY(-2px);
    }

    .btn-preset {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      background: #F8FAFC;
      border: 1.5px solid #CBD5E1;
      padding: 0.45rem 0.95rem;
      border-radius: var(--radius-pill);
      font-size: 0.82rem;
      font-weight: 700;
      color: #1E293B;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .btn-preset:hover {
      border-color: var(--blue);
      background: var(--blue-pale);
      color: var(--blue);
    }

    /* Grid Level Cards */
    .levels-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.3rem;
    }
    .level-admin-card {
      border: 2px solid var(--lvl-accent, #CBD5E1);
      border-radius: 16px;
      background: #FFFFFF;
      padding: 1.3rem;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);
      transition: transform 0.2s ease;
    }
    .level-admin-card:hover {
      transform: translateY(-3px);
    }
    .level-top-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.8rem;
    }
    .level-code-badge {
      background: var(--lvl-accent, #CBD5E1);
      color: #FFFFFF;
      font-size: 0.8rem;
      font-weight: 900;
      padding: 0.3rem 0.75rem;
      border-radius: var(--radius-pill);
      text-transform: uppercase;
    }
    .level-status-pill {
      font-size: 0.72rem;
      font-weight: 800;
      padding: 0.25rem 0.65rem;
      border-radius: var(--radius-pill);
    }
    .status-active { background: #ECFDF5; color: #065F46; }
    .status-inactive { background: #F1F5F9; color: #64748B; }

    .level-name-h4 {
      font-size: 1.25rem;
      font-weight: 800;
      margin: 0 0 0.2rem;
      color: #0F172A;
    }
    .level-sub-desc {
      font-size: 0.84rem;
      color: #64748B;
      margin-bottom: 1.1rem;
    }
    .level-meta-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.82rem;
      font-weight: 700;
      color: #475569;
      border-top: 1.5px dashed #E2E8F0;
      padding-top: 0.8rem;
      margin-top: 0.8rem;
    }

    /* Tabel Manajemen */
    .guru-table-wrap {
      overflow-x: auto;
    }
    .guru-table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
    }
    .guru-table th {
      background: #F8FAFC;
      color: #475569;
      font-weight: 800;
      font-size: 0.78rem;
      text-transform: uppercase;
      padding: 0.85rem 1rem;
      border-bottom: 2px solid #E2E8F0;
    }
    .guru-table td {
      padding: 1rem;
      border-bottom: 1px solid #F1F5F9;
      font-size: 0.9rem;
      color: #1E293B;
      vertical-align: middle;
    }
    .guru-table tr:hover td {
      background: #F8FAFC;
    }

    /* Modal Form */
    .guru-modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, 0.6);
      backdrop-filter: blur(4px);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 1rem;
    }
    .guru-modal-backdrop.show {
      display: flex;
    }
    .guru-modal-box {
      background: #FFFFFF;
      border-radius: 20px;
      width: 100%;
      max-width: 560px;
      max-height: 90vh;
      overflow-y: auto;
      padding: 2rem;
      box-shadow: 0 20px 40px -10px rgba(15, 23, 42, 0.25);
      position: relative;
    }
    .guru-modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      padding-bottom: 0.8rem;
      border-bottom: 1.5px solid #E2E8F0;
    }
    .guru-modal-header h3 {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 800;
      color: #0F172A;
    }
    .btn-close-modal {
      background: transparent;
      border: none;
      font-size: 1.4rem;
      cursor: pointer;
      color: #94A3B8;
      transition: color 0.2s;
    }
    .btn-close-modal:hover { color: #0F172A; }

    .form-group {
      margin-bottom: 1.2rem;
    }
    .form-group label {
      display: block;
      font-size: 0.85rem;
      font-weight: 700;
      color: #334155;
      margin-bottom: 0.4rem;
    }
    .form-control {
      width: 100%;
      box-sizing: border-box;
      padding: 0.65rem 0.95rem;
      border: 1.5px solid #CBD5E1;
      border-radius: 10px;
      font-size: 0.9rem;
      font-family: inherit;
      transition: border-color 0.2s;
    }
    .form-control:focus {
      outline: none;
      border-color: var(--blue);
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }
    .modal-btn-row {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.8rem;
      margin-top: 1.8rem;
      padding-top: 1rem;
      border-top: 1.5px solid #E2E8F0;
    }
    .btn-cancel {
      background: #F1F5F9;
      border: 1.5px solid #CBD5E1;
      color: #475569;
      padding: 0.6rem 1.2rem;
      border-radius: var(--radius-pill);
      font-weight: 700;
      cursor: pointer;
    }

    /* Styling Pilihan Ganda & Bank Soal */
    .opt-row-box {
      transition: all 0.2s ease;
    }
    .opt-row-box:focus-within {
      border-color: #3B82F6 !important;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15);
    }
    .opt-row-box.is-correct {
      border-color: #10B981 !important;
      background: #ECFDF5 !important;
    }
    .quest-admin-item {
      background: #FFFFFF;
      border: 1.5px solid #E2E8F0;
      border-radius: 16px;
      padding: 1.3rem;
      transition: all 0.2s ease;
      box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);
    }
    .quest-admin-item:hover {
      border-color: #CBD5E1;
      box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
    }
    .quest-thumb-preview {
      width: 140px;
      height: 90px;
      border-radius: 10px;
      overflow: hidden;
      border: 1.5px solid #CBD5E1;
      background: #F8FAFC;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .quest-thumb-preview img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.2s ease;
    }
    .quest-thumb-preview:hover img {
      transform: scale(1.05);
    }
    .badge-has-img {
      background: #EFF6FF;
      color: #1D4ED8;
      font-size: 0.74rem;
      font-weight: 800;
      padding: 0.25rem 0.65rem;
      border-radius: var(--radius-pill);
      border: 1px solid #BFDBFE;
    }
    .badge-no-img {
      background: #F1F5F9;
      color: #64748B;
      font-size: 0.74rem;
      font-weight: 700;
      padding: 0.25rem 0.65rem;
      border-radius: var(--radius-pill);
      border: 1px solid #E2E8F0;
    }
  </style>
</head>
<body>

  <!-- TOP NAVBAR GURU -->
  <header class="guru-navbar">
    <div class="guru-nav-left">
      <div class="nav-logo" style="cursor:default;">
        <span class="logo-crest">
          <svg viewBox="0 0 32 32" class="svg-crest">
            <circle cx="16" cy="16" r="14" fill="#D9383A"/>
            <path d="M8 11h16M9 8v15M23 8v15M7 14h18" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </span>
        <span class="logo-text">SI<span class="logo-accent">Japanese</span></span>
      </div>
      <span class="badge-master-guru">MASTER DASHBOARD GURU</span>
      <a href="{{ route('home') }}" class="btn-return-app" title="Kembali ke portal murid" onclick="try{sessionStorage.setItem('sijapanese_active_page','home');sessionStorage.removeItem('sijapanese_active_lesson_id');sessionStorage.removeItem('sijapanese_active_step');}catch(e){}">
        <svg viewBox="0 0 24 24" class="svg-icon-mini" style="width:16px;height:16px;"><polyline points="15 18 9 12 15 6"/></svg>
        <span>Lihat Web Siswa</span>
      </a>
    </div>

    <div class="guru-profile-bar">
      <div class="guru-avatar-circle" style="overflow:hidden;">
        @php
          $gAvatar = auth()->user()->avatar ?? 'img/avatar_tanaka.svg';
        @endphp
        @if(str_contains($gAvatar, '/') || str_contains($gAvatar, '.svg') || str_contains($gAvatar, '.png'))
          <img src="{{ asset($gAvatar) }}" alt="Sensei Tanaka" style="width:100%; height:100%; border-radius:50%; object-fit:cover; display:block;" />
        @else
          <span>{{ $gAvatar }}</span>
        @endif
      </div>
      <div class="guru-info-text">
        <span class="guru-name">{{ auth()->user()->name }}</span>
        <span class="guru-role-sub">Guru Bahasa Jepang</span>
      </div>
      <form action="{{ route('auth.logout') }}" method="POST" style="margin-left:0.8rem;">
        @csrf
        <button type="submit" class="btn-preset" style="color:#DC2626; border-color:#FECACA;" title="Keluar">
          Keluar
        </button>
      </form>
    </div>
  </header>

  <main class="guru-container">

    @if(session('success'))
    <div style="background:#ECFDF5; border:1.5px solid #10B981; color:#065F46; padding:0.95rem 1.4rem; border-radius:14px; margin-bottom:1.5rem; display:flex; align-items:center; justify-content:space-between; font-weight:700; box-shadow:0 4px 12px rgba(16,185,129,0.12);">
      <div style="display:flex; align-items:center; gap:0.65rem;">
        <span style="font-size:1.25rem;"></span>
        <span>{{ session('success') }}</span>
      </div>
      <button type="button" onclick="this.parentElement.remove()" style="background:transparent; border:none; font-size:1.3rem; cursor:pointer; color:#065F46; line-height:1;">&times;</button>
    </div>
    @endif

    @if(session('error'))
    <div style="background:#FEF2F2; border:1.5px solid #EF4444; color:#991B1B; padding:0.95rem 1.4rem; border-radius:14px; margin-bottom:1.5rem; display:flex; align-items:center; justify-content:space-between; font-weight:700; box-shadow:0 4px 12px rgba(239,68,68,0.12);">
      <div style="display:flex; align-items:center; gap:0.65rem;">
        <span style="font-size:1.25rem;"></span>
        <span>{{ session('error') }}</span>
      </div>
      <button type="button" onclick="this.parentElement.remove()" style="background:transparent; border:none; font-size:1.3rem; cursor:pointer; color:#991B1B; line-height:1;">&times;</button>
    </div>
    @endif

    @if(isset($errors) && $errors->any())
    <div style="background:#FEF2F2; border:1.5px solid #EF4444; color:#991B1B; padding:0.95rem 1.4rem; border-radius:14px; margin-bottom:1.5rem; font-weight:600;">
      <div style="font-weight:800; margin-bottom:0.4rem;">Perhatian: Ada kesalahan input data:</div>
      <ul style="margin:0; padding-left:1.2rem;">
        @foreach($errors->all() as $err)
        <li>{{ $err }}</li>
        @endforeach
      </ul>
    </div>
    @endif

    <!-- KPI STAT CARDS -->
    <section class="guru-kpi-grid">
      <div class="kpi-card kpi-red">
        <div class="kpi-label">Siswa Terdaftar</div>
        <div class="kpi-value">{{ $stats['total_students'] }}</div>
        <div class="kpi-sub">Murid yang sedang belajar</div>
      </div>
      <div class="kpi-card kpi-blue">
        <div class="kpi-label">Kotak Level Aktif</div>
        <div class="kpi-value">{{ $stats['active_levels'] }} <span style="font-size:1.1rem; color:#94A3B8;">/ {{ $stats['total_levels'] }}</span></div>
        <div class="kpi-sub">N5, N4, dan tingkatan kustom</div>
      </div>
      <div class="kpi-card kpi-yellow">
        <div class="kpi-label">Modul Materi</div>
        <div class="kpi-value">{{ $stats['total_lessons'] }}</div>
        <div class="kpi-sub">Total materi kurikulum</div>
      </div>
      <div class="kpi-card kpi-green">
        <div class="kpi-label">Bank Soal Quest</div>
        <div class="kpi-value">{{ $stats['total_quests'] }}</div>
        <div class="kpi-sub">Tantangan kuis terpasang</div>
      </div>
      <div class="kpi-card kpi-purple">
        <div class="kpi-label">Poin Siswa Tertinggi</div>
        <div class="kpi-value">{{ $stats['highest_score'] }}</div>
        <div class="kpi-sub">Skor pencapaian murid</div>
      </div>
    </section>

    <!-- TAB NAVIGASI UTAMA -->
    <div class="guru-tabs-nav">
      <button class="guru-tab-btn active" onclick="switchGuruTab('levels')">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
        <span>Kotak Level Materi</span>
      </button>
      <button class="guru-tab-btn" onclick="switchGuruTab('lessons')">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
        <span>Modul Pelajaran</span>
      </button>
      <button class="guru-tab-btn" onclick="switchGuruTab('quests')">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        <span>Bank Soal &amp; Kuis</span>
      </button>
      <button class="guru-tab-btn" onclick="switchGuruTab('students')">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        <span>Pantauan Siswa &amp; Nilai</span>
      </button>
      <button class="guru-tab-btn" onclick="switchGuruTab('minigames')">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <span>Kelola Mini Games &amp; Bank Soal</span>
      </button>
    </div>

    <!-- ==============================================
         TAB 1: MANAJEMEN KOTAK LEVEL (N5, N4, N3, N2, N1)
         ============================================== -->
    <div class="guru-tab-content active" id="guru-tab-levels">
      <div class="master-card">
        <div class="master-card-header">
          <div class="master-card-title">
            <h3>Manajemen Kotak Level Materi (Tingkatan Belajar)</h3>
            <p>Kotak level ini muncul langsung sebagai tab navigasi di halaman <strong>Materi</strong> murid. Tambah tingkatan baru sesuai kemajuan kelas!</p>
          </div>
          <div style="display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
            <button class="btn-preset" onclick="addPresetLevel('n3')">+ Tambah N3 Menengah</button>
            <button class="btn-preset" onclick="addPresetLevel('n2')">+ Tambah N2 Lanjutan</button>
            <button class="btn-preset" onclick="addPresetLevel('n1')">+ Tambah N1 Mahir</button>
            <button class="btn-guru-primary" onclick="openAddLevelModal()">
              <span>+ Level Kustom Baru</span>
            </button>
          </div>
        </div>

        <div class="levels-grid">
          @foreach($levels as $lvl)
          <div class="level-admin-card" style="--lvl-accent: {{ $lvl->accent_color }};">
            <div>
              <div class="level-top-row">
                <span class="level-code-badge">{{ strtoupper($lvl->code) }}</span>
                <span class="level-status-pill {{ $lvl->is_active ? 'status-active' : 'status-inactive' }}">
                  {{ $lvl->is_active ? 'Aktif di Siswa' : 'Nonaktif' }}
                </span>
              </div>
              <h4 class="level-name-h4">{{ $lvl->name }}</h4>
              <div class="level-sub-desc">{{ $lvl->sub }}</div>
            </div>

            <div>
              <div class="level-meta-row">
                <span>{{ $lvl->lessons->count() }} Modul Materi</span>
                <div style="display:flex; gap:0.4rem;">
                  <button class="btn-preset" style="padding:0.25rem 0.65rem;" onclick="openEditLevelModal({{ $lvl->id }}, '{{ addslashes($lvl->name) }}', '{{ addslashes($lvl->sub) }}', '{{ $lvl->accent_color }}', {{ $lvl->is_active ? 'true' : 'false' }}, {{ $lvl->order }})">
                    Edit
                  </button>
                  <button class="btn-preset" style="padding:0.25rem 0.65rem; color:#DC2626; border-color:#FECACA;" onclick="deleteLevel({{ $lvl->id }}, '{{ addslashes($lvl->name) }}')">
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
          @endforeach
        </div>
      </div>
    </div>

    <!-- ==============================================
         TAB 2: MANAJEMEN MODUL PELAJARAN
         ============================================== -->
    <div class="guru-tab-content" id="guru-tab-lessons">
      <div class="master-card">
        <div class="master-card-header">
          <div class="master-card-title">
            <h3>Daftar Modul Kurikulum Bahasa Jepang</h3>
            <p>Kelola judul, estimasi waktu belajar, dan isi penjelasan modul untuk masing-masing level.</p>
          </div>
          <button class="btn-guru-primary" onclick="openAddLessonModal()">
            <span>+ Tambah Modul Baru</span>
          </button>
        </div>

        <div class="guru-table-wrap">
          <table class="guru-table">
            <thead>
              <tr>
                <th style="width:50px;">No</th>
                <th>Level</th>
                <th>Judul Modul</th>
                <th>Komik &amp; Audio Pembahasan</th>
                <th>Estimasi</th>
                <th>Badge</th>
                <th>Soal</th>
                <th style="text-align:right;">Aksi</th>
              </tr>
            </thead>
            <tbody>
              @forelse($lessons as $les)
              <tr id="lesson-row-{{ $les->id }}">
                <td><strong>{{ $les->lesson_number }}</strong></td>
                <td>
                  <span class="level-code-badge" style="background:{{ $les->level->accent_color ?? '#2563EB' }}; font-size:0.7rem;">
                    {{ strtoupper($les->level->code ?? 'N5') }}
                  </span>
                </td>
                <td>
                  <strong style="font-size:0.95rem; color:#0F172A;">{{ $les->title }}</strong>
                  <div style="font-size:0.78rem; color:#64748B; margin-top:0.15rem;">{{ $les->subtitle }}</div>
                  @if(!empty($les->mascot_tip))
                  <div style="font-size:0.74rem; color:#334155; margin-top:0.35rem; background:#F8FAFC; border:1px solid #E2E8F0; border-left:3px solid #2563EB; padding:0.25rem 0.5rem; border-radius:6px; max-width:320px;">
                    <strong>Sensei Tanaka:</strong> {{ \Illuminate\Support\Str::limit($les->mascot_tip, 65) }}
                  </div>
                  @endif
                </td>
                <td>
                  <div style="display:flex; align-items:center; gap:0.6rem;">
                    @if(!empty($les->comic_image))
                    <div style="width:70px; height:46px; border-radius:8px; overflow:hidden; border:1.5px solid #CBD5E1; background:#F1F5F9; flex-shrink:0;">
                      <img src="{{ asset($les->comic_image) }}" alt="Komik Modul" style="width:100%; height:100%; object-fit:cover;" />
                    </div>
                    @else
                    <span style="font-size:0.72rem; color:#94A3B8; background:#F1F5F9; padding:0.2rem 0.5rem; border-radius:6px;">Komik Bawaan</span>
                    @endif
                    <div>
                      @if(!empty($les->audio_text))
                      <span style="font-size:0.72rem; font-weight:800; background:#ECFDF5; color:#065F46; border:1px solid #A7F3D0; padding:0.2rem 0.55rem; border-radius:12px; display:inline-block;">
                        Audio  {{ \Illuminate\Support\Str::limit($les->audio_label ?: 'Audio Komik', 18) }}
                      </span>
                      @else
                      <span style="font-size:0.72rem; color:#94A3B8;">Tanpa Audio</span>
                      @endif
                    </div>
                  </div>
                </td>
                <td style="font-size:0.85rem; font-weight:700;">{{ $les->est_minutes }} Menit</td>
                <td>
                  <span class="materi-card-badge {{ $les->badge_class }}">{{ $les->badge }}</span>
                </td>
                <td><strong style="color:#2563EB;">{{ $les->quests->count() }}</strong> Soal</td>
                <td style="text-align:right;">
                  <button type="button" class="btn-guru-primary" style="padding:0.3rem 0.8rem; font-size:0.8rem;" onclick="openEditLessonModal({{ $les->id }})">
                    <span>Edit</span>
                  </button>
                  <button type="button" class="btn-preset" style="padding:0.3rem 0.65rem; color:#DC2626; border-color:#FECACA; font-size:0.8rem;" onclick="deleteLesson({{ $les->id }}, '{{ addslashes($les->title) }}')">
                    Hapus
                  </button>
                </td>
              </tr>
              @empty
              <tr>
                <td colspan="8" style="text-align:center; padding:2rem; color:#94A3B8;">
                  Belum ada modul pelajaran. Silakan klik tombol "+ Tambah Modul Baru".
                </td>
              </tr>
              @endforelse
            </tbody>
          </table>
        </div>
      </div>
    </div>

        <!-- ==============================================
         TAB 3: BANK SOAL QUEST & KUIS INTERAKTIF
         ============================================== -->
    <div class="guru-tab-content" id="guru-tab-quests">
      <div class="master-card">
        <div class="master-card-header">
          <div class="master-card-title">
            <h3>Bank Soal Quest Interaktif Berhadiah Poin</h3>
            <p>Kelola dan edit pertanyaan, gambar ilustrasi komik, opsi jawaban (A, B, C, D), kunci jawaban benar, dan penjelasan pembahasan soal.</p>
          </div>
          <div style="display:flex; align-items:center; gap:0.8rem; flex-wrap:wrap;">
            <!-- Filter Dropdown Modul -->
            <div style="display:flex; align-items:center; gap:0.4rem;">
              <label style="font-size:0.82rem; font-weight:700; color:#64748B;">Filter Modul:</label>
              <select id="filter-quest-lesson" onchange="filterQuestsByLesson(this.value)" class="form-control" style="width:auto; min-width:200px; font-weight:700; padding:0.45rem 0.8rem;">
                <option value="all">Semua Modul Materi ({{ $quests->count() }} Soal)</option>
                @foreach($lessons as $les)
                <option value="{{ $les->id }}">{{ $les->title }} ({{ strtoupper($les->level->code ?? 'N5') }})</option>
                @endforeach
              </select>
            </div>
            <button class="btn-guru-primary" onclick="openAddQuestModal()">
              <span>+ Buat Soal Quest Baru</span>
            </button>
          </div>
        </div>

        <div id="quest-list-container" style="display:flex; flex-direction:column; gap:1.2rem;">
          @forelse($quests as $q)
          <div class="quest-admin-item" id="quest-item-{{ $q->id }}" data-lesson-id="{{ $q->lesson_id }}">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;">
              <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
                <span style="background:var(--blue); color:#FFF; font-size:0.75rem; font-weight:800; padding:0.25rem 0.75rem; border-radius:var(--radius-pill);">
                  {{ $q->badge_text }}
                </span>
                <span style="font-size:0.82rem; font-weight:700; color:#475569;">
                  {{ $q->lesson->title ?? 'Pelajaran' }} ({{ strtoupper($q->lesson->level->code ?? 'N5') }})
                </span>
                @if(!empty($q->image_url))
                <span class="badge-has-img">Ada Gambar Ilustrasi</span>
                @else
                <span class="badge-no-img">Teks Saja</span>
                @endif
              </div>
              <div style="display:flex; align-items:center; gap:0.5rem;">
                <span style="background:#FEF3C7; color:#92400E; font-size:0.75rem; font-weight:800; padding:0.25rem 0.7rem; border-radius:var(--radius-pill);">
                  {{ $q->points }} Poin
                </span>
                <button type="button" class="btn-guru-primary" style="padding:0.35rem 0.95rem; font-size:0.82rem;" onclick="openEditQuestModal({{ $q->id }})">
                  <span>Edit Soal</span>
                </button>
                <button type="button" class="btn-preset" style="padding:0.35rem 0.75rem; color:#DC2626; border-color:#FECACA; font-size:0.82rem;" onclick="deleteQuest({{ $q->id }})">
                  Hapus
                </button>
              </div>
            </div>

            <!-- Pertanyaan & Preview Gambar -->
            <div style="display:flex; gap:1.2rem; align-items:flex-start; margin:0.8rem 0; flex-wrap:wrap;">
              @if(!empty($q->image_url))
              <div class="quest-thumb-preview" title="Klik untuk pratinjau">
                <img src="{{ asset($q->image_url) }}" alt="Ilustrasi Soal" />
              </div>
              @endif
              <div style="flex:1; min-width:240px;">
                <div style="font-size:1.05rem; font-weight:800; color:#0F172A; line-height:1.45;">
                  {{ $q->question }}
                </div>
                @if(!empty($q->audio_text))
                <div style="margin-top:0.5rem; font-size:0.82rem; background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:0.4rem 0.75rem; display:inline-flex; align-items:center; gap:0.5rem; color:#334155;">
                  <span><strong>Audio {{ $q->audio_label ?: 'Chokai Audio' }}:</strong> {{ \Illuminate\Support\Str::limit($q->audio_text, 70) }}</span>
                </div>
                @endif
              </div>
            </div>

            <!-- Opsi Pilihan Ganda -->
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:0.6rem; margin:0.9rem 0 0.6rem;">
              @foreach($q->options ?? [] as $idx => $opt)
              @php
                $lbl = !empty($opt['label']) ? $opt['label'] : chr(65 + $idx);
                $isCorr = !empty($opt['isCorrect']);
              @endphp
              <div style="background:{{ $isCorr ? '#ECFDF5' : '#FFFFFF' }}; border:1.5px solid {{ $isCorr ? '#10B981' : '#E2E8F0' }}; border-radius:10px; padding:0.6rem 0.85rem; font-size:0.86rem; font-weight:600; display:flex; align-items:center; gap:0.5rem;">
                <span style="font-weight:800; color:{{ $isCorr ? '#065F46' : '#64748B' }}; width:20px;">{{ $lbl }}.</span>
                <span style="flex:1;">{{ $opt['text'] }}</span>
                @if($isCorr)
                <span style="color:#059669; font-weight:900; font-size:0.75rem; background:#D1FAE5; padding:0.15rem 0.5rem; border-radius:var(--radius-pill); white-space:nowrap;">Kunci Benar</span>
                @endif
              </div>
              @endforeach
            </div>

            <!-- Penjelasan Kunci Jawaban -->
            <div style="font-size:0.85rem; color:#1E3A8A; background:#EFF6FF; border-left:3.5px solid var(--blue); padding:0.6rem 0.95rem; border-radius:6px; margin-top:0.7rem;">
              <strong>Penjelasan:</strong>
              @if(!empty($q->explanation))
                {{ $q->explanation }}
              @else
                <span style="color:#64748B; font-style:italic;">(Belum ada penjelasan — klik Edit Soal untuk menambahkan pembahasan bagi siswa)</span>
              @endif
            </div>
          </div>
          @empty
          <div style="text-align:center; padding:3rem 2rem; color:#94A3B8; background:#FFFFFF; border-radius:16px; border:1.5px dashed #CBD5E1;">
            <p style="font-size:1.1rem; font-weight:700; margin-bottom:0.5rem;">Belum ada soal kuis yang terpasang.</p>
            <p style="font-size:0.88rem; margin-bottom:1.2rem;">Klik tombol di bawah untuk menambah tantangan kuis baru untuk siswa.</p>
            <button class="btn-guru-primary" onclick="openAddQuestModal()">+ Buat Soal Quest Baru</button>
          </div>
          @endforelse
        </div>
      </div>
    </div>

    <!-- ==============================================
         TAB 4: PANTAUAN SISWA & NILAI
         ============================================== -->
    <div class="guru-tab-content" id="guru-tab-students">
      <div class="master-card">
        <div class="master-card-header">
          <div class="master-card-title">
            <h3>Pantauan Kemajuan &amp; Poin Siswa</h3>
            <p>Daftar murid yang telah bergabung, perolehan poin dari kuis dan latihan, serta modul yang diselesaikan.</p>
          </div>
        </div>

        <div class="guru-table-wrap">
          <table class="guru-table">
            <thead>
              <tr>
                <th style="width:60px;">Peringkat</th>
                <th>Siswa</th>
                <th>Email</th>
                <th>Poin Belajar</th>
                <th>Materi Selesai</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              @forelse($students as $idx => $std)
              <tr>
                <td>
                  @if($idx === 0)
                  <span style="font-size:1.3rem;">#1</span>
                  @elseif($idx === 1)
                  <span style="font-size:1.3rem;">#2</span>
                  @elseif($idx === 2)
                  <span style="font-size:1.3rem;">#3</span>
                  @else
                  <strong>#{{ $idx + 1 }}</strong>
                  @endif
                </td>
                <td>
                  <div style="display:flex; align-items:center; gap:0.65rem;">
                    <div style="width:36px; height:36px; border-radius:50%; overflow:hidden; flex-shrink:0; border:1.5px solid #CBD5E1; background:#F8FAFC; display:flex; align-items:center; justify-content:center;">
                      @php
                        $stdAv = $std->avatar ?? 'img/avatar_anggata.svg';
                      @endphp
                      @if(str_contains($stdAv, '/') || str_contains($stdAv, '.svg') || str_contains($stdAv, '.png'))
                        <img src="{{ asset($stdAv) }}" alt="{{ $std->name }}" style="width:100%; height:100%; object-fit:cover;" />
                      @else
                        <span>{{ $stdAv }}</span>
                      @endif
                    </div>
                    <div>
                      <strong style="color:#0F172A;">{{ $std->name }}</strong>
                    </div>
                  </div>
                </td>
                <td style="color:#64748B;">{{ $std->email }}</td>
                <td>
                  <span style="background:#FEF3C7; color:#92400E; font-weight:800; font-size:0.85rem; padding:0.3rem 0.8rem; border-radius:var(--radius-pill);">
                    {{ $std->score }} Poin
                  </span>
                </td>
                <td>
                  <strong>{{ is_array($std->completed_lessons) ? count($std->completed_lessons) : 0 }}</strong> Modul
                </td>
                <td>
                  <span class="level-status-pill status-active">Aktif Belajar</span>
                </td>
              </tr>
              @empty
              <tr>
                <td colspan="6" style="text-align:center; padding:2rem; color:#94A3B8;">
                  Belum ada murid yang terdaftar.
                </td>
              </tr>
              @endforelse
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- ==============================================
         TAB 5: KELOLA MINI GAMES & BANK SOAL GAME
         ============================================== -->
    <div class="guru-tab-content" id="guru-tab-minigames">
      <div class="master-card">
        <div class="master-card-header">
          <div class="master-card-title">
            <h3>Pusat Pengaturan Mini Games &amp; Bank Soal Aksara</h3>
            <p>Kelola durasi waktu permainan, tambah sub-mode baru (seperti <strong>Kanji N5 Dasar, Kanji N4 Wisata</strong>), dan kelola bank soal atau kosakata untuk masing-masing game murid.</p>
          </div>
          <div style="display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
            <button type="button" class="btn-preset" onclick="loadAdminPresetKanji()" title="Muat paket 15 Kanji N5 standar">+ Paket Kanji N5</button>
            <button type="button" class="btn-guru-primary" onclick="openAddGameQuestionModal()">
              <span>+ Tambah Soal / Karakter</span>
            </button>
          </div>
        </div>

        <div class="admin-minigames-wrap">
          <!-- Game Selection Chips -->
          <div class="admin-games-selector" id="admin-games-selector">
            <button type="button" class="admin-game-chip active" id="chip-game-kana-blast" onclick="switchAdminGameTab('kana-blast')">
              <span>Kana Blast (Turret Blaster)</span>
            </button>
            <button type="button" class="admin-game-chip" id="chip-game-sky-defense" onclick="switchAdminGameTab('sky-defense')">
              <span>Sky Atk Defense</span>
            </button>
            <button type="button" class="admin-game-chip" id="chip-game-flash-card" onclick="switchAdminGameTab('flash-card')">
              <span>Flash Card</span>
            </button>
            <button type="button" class="admin-game-chip" id="chip-game-memory-match" onclick="switchAdminGameTab('memory-match')">
              <span>Memory Match</span>
            </button>
            <button type="button" class="admin-game-chip" id="chip-game-speed-quiz" onclick="switchAdminGameTab('speed-quiz')">
              <span>Speed Quiz</span>
            </button>
            <button type="button" class="admin-game-chip" id="chip-game-word-builder" onclick="switchAdminGameTab('word-builder')">
              <span>Word Builder</span>
            </button>
          </div>

          <!-- Game Dynamic Details Panel -->
          <div class="admin-game-details" id="admin-game-details">
            <!-- Dynamically populated by JS renderAdminGameView() -->
          </div>
        </div>
      </div>
    </div>

  </main>

  <!-- ==============================================
       MODAL: TAMBAH LEVEL KUSTOM
       ============================================== -->
  <div class="guru-modal-backdrop" id="modal-add-level">
    <div class="guru-modal-box">
      <div class="guru-modal-header">
        <h3>Tambah Kotak Level Baru</h3>
        <button class="btn-close-modal" onclick="closeModal('modal-add-level')">&times;</button>
      </div>
      <form action="{{ route('guru.levels.store') }}" method="POST">
        @csrf
        <div class="form-group">
          <label>Kode Level (Unik, huruf kecil):</label>
          <input type="text" name="code" class="form-control" placeholder="contoh: n3, n2, khusus" required />
        </div>
        <div class="form-group">
          <label>Nama Level:</label>
          <input type="text" name="name" class="form-control" placeholder="contoh: N3 Menengah" required />
        </div>
        <div class="form-group">
          <label>Sub-judul / Deskripsi Pendek:</label>
          <input type="text" name="sub" class="form-control" placeholder="contoh: Pemahaman Konteks Kalimat" required />
        </div>
        <div class="form-group">
          <label>Warna Aksen Kotak (Hex):</label>
          <select name="accent_color" class="form-control">
            <option value="#D9383A">Merah (#D9383A)</option>
            <option value="#2563EB" selected>Biru (#2563EB)</option>
            <option value="#F59E0B">Kuning / Amber (#F59E0B)</option>
            <option value="#10B981">Hijau (#10B981)</option>
            <option value="#8B5CF6">Ungu (#8B5CF6)</option>
          </select>
        </div>
        <div class="modal-btn-row">
          <button type="button" class="btn-cancel" onclick="closeModal('modal-add-level')">Batal</button>
          <button type="submit" class="btn-guru-primary">Simpan Kotak Level</button>
        </div>
      </form>
    </div>
  </div>

  <!-- MODAL: EDIT LEVEL -->
  <div class="guru-modal-backdrop" id="modal-edit-level">
    <div class="guru-modal-box">
      <div class="guru-modal-header">
        <h3>Edit Kotak Level</h3>
        <button class="btn-close-modal" onclick="closeModal('modal-edit-level')">&times;</button>
      </div>
      <form id="form-edit-level" method="POST">
        @csrf
        @method('PUT')
        <div class="form-group">
          <label>Nama Level:</label>
          <input type="text" name="name" id="edit-level-name" class="form-control" required />
        </div>
        <div class="form-group">
          <label>Sub-judul / Deskripsi Pendek:</label>
          <input type="text" name="sub" id="edit-level-sub" class="form-control" required />
        </div>
        <div class="form-group">
          <label>Warna Aksen:</label>
          <select name="accent_color" id="edit-level-color" class="form-control">
            <option value="#D9383A">Merah (#D9383A)</option>
            <option value="#2563EB">Biru (#2563EB)</option>
            <option value="#F59E0B">Kuning / Amber (#F59E0B)</option>
            <option value="#10B981">Hijau (#10B981)</option>
            <option value="#8B5CF6">Ungu (#8B5CF6)</option>
          </select>
        </div>
        <div class="modal-btn-row">
          <button type="button" class="btn-cancel" onclick="closeModal('modal-edit-level')">Batal</button>
          <button type="submit" class="btn-guru-primary">Perbarui Level</button>
        </div>
      </form>
    </div>
  </div>

  <!-- ==============================================
       MODAL: TAMBAH MODUL PELAJARAN
       ============================================== -->
  <div class="guru-modal-backdrop" id="modal-add-lesson">
    <div class="guru-modal-box">
      <div class="guru-modal-header">
        <h3>Tambah Modul Pelajaran Baru</h3>
        <button class="btn-close-modal" onclick="closeModal('modal-add-lesson')">&times;</button>
      </div>
      <form action="{{ route('guru.lessons.store') }}" method="POST">
        @csrf
        <div class="form-group">
          <label>Pilih Kotak Level:</label>
          <select name="level_id" class="form-control" required>
            @foreach($levels as $lvl)
            <option value="{{ $lvl->id }}">{{ $lvl->name }} ({{ strtoupper($lvl->code) }})</option>
            @endforeach
          </select>
        </div>
        <div class="form-group">
          <label>Nomor Pelajaran:</label>
          <input type="number" name="lesson_number" class="form-control" value="1" min="1" required />
        </div>
        <div class="form-group">
          <label>Judul Modul Pelajaran:</label>
          <input type="text" name="title" class="form-control" placeholder="contoh: Percakapan di Stasiun & Membeli Tiket" required />
        </div>
        <div class="form-group">
          <label>Sub-judul / Rincian Materi:</label>
          <input type="text" name="subtitle" class="form-control" placeholder="contoh: Mempelajari kosakata tiket, petunjuk arah, dan percakapan" />
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.8rem;">
          <div class="form-group">
            <label>Badge Kategori:</label>
            <input type="text" name="badge" class="form-control" value="Modul Baru" />
          </div>
          <div class="form-group">
            <label>Estimasi Menit:</label>
            <input type="number" name="est_minutes" class="form-control" value="15" />
          </div>
        </div>
        <div class="modal-btn-row">
          <button type="button" class="btn-cancel" onclick="closeModal('modal-add-lesson')">Batal</button>
          <button type="submit" class="btn-guru-primary">Simpan Modul</button>
        </div>
      </form>
    </div>
  </div>

  <!-- MODAL: EDIT MODUL PELAJARAN (LENGKAP DENGAN KOMIK, AUDIO & CATATAN SENSEI TANAKA) -->
  <div class="guru-modal-backdrop" id="modal-edit-lesson">
    <div class="guru-modal-box" style="max-width:680px;">
      <div class="guru-modal-header">
        <div>
          <h3 id="edit-lesson-modal-title">Edit Modul &amp; Pembahasan Komik</h3>
          <span style="font-size:0.8rem; color:#64748B;">Atur judul, estimasi, ilustrasi komik visual, pelafalan audio, dan catatan Sensei Tanaka</span>
        </div>
        <button class="btn-close-modal" onclick="closeModal('modal-edit-lesson')">&times;</button>
      </div>
      <form id="form-edit-lesson" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        
        <!-- Informasi Umum Modul -->
        <div class="form-group">
          <label>Judul Modul:</label>
          <input type="text" name="title" id="edit-lesson-title" class="form-control" required />
        </div>
        <div class="form-group">
          <label>Sub-judul / Rincian Materi:</label>
          <input type="text" name="subtitle" id="edit-lesson-subtitle" class="form-control" />
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.8rem;">
          <div class="form-group">
            <label>Badge Kategori:</label>
            <input type="text" name="badge" id="edit-lesson-badge" class="form-control" />
          </div>
          <div class="form-group">
            <label>Estimasi Menit:</label>
            <input type="number" name="est_minutes" id="edit-lesson-minutes" class="form-control" />
          </div>
        </div>

        <!--  Gambar Komik Pembahasan Awal -->
        <div style="background:#F8FAFC; padding:1.2rem; border-radius:14px; border:1.5px solid #E2E8F0; margin-bottom:1.2rem;">
          <label style="font-weight:800; color:#0F172A; display:block; margin-bottom:0.3rem;">
            Gambar Ilustrasi Komik Pembahasan Awal (Langkah 2):
          </label>
          <p style="font-size:0.8rem; color:#64748B; margin:0 0 0.8rem;">Pilih template komik cerita petualangan Jepang atau upload file gambar sendiri dari komputer</p>

          <div class="form-group">
            <label style="font-size:0.8rem; color:#475569;">Pilih Template Komik Cerita:</label>
            <select name="comic_image" id="edit-lesson-comic-image" class="form-control" onchange="handleLessonComicTemplateChange()">
              <option value="">-- Gunakan Ilustrasi Komik Bawaan Default --</option>
              <option value="img/comic_ramen.svg">Kedai Ramen Katakana Tokyo (ラーメン)</option>
              <option value="img/comic_aisatsu.svg">Suasana Kelas Salam Aisatsu (おはようございます)</option>
              <option value="img/comic_station.svg">Papan Stasiun Kereta Tokyo (東京 / とうきょう)</option>
              <option value="img/comic_konbini.svg">Minimarket Konbini & Uang Yen (¥150)</option>
              <option value="img/comic_hotel.svg">Check-in Hotel / Ryokan (ホテル)</option>
              <option value="img/comic_directions.svg">Petunjuk Arah Wisata & Stasiun (まっすぐ)</option>
              <option value="img/comic_souvenir.svg">Toko Suvenir Asakusa (おみやげ)</option>
              <option value="img/comic_emergency.svg">Situasi Darurat & Bantuan (トイレ / 英語)</option>
              <option value="__custom__">-- Masukkan Path / URL Gambar Kustom --</option>
            </select>
          </div>

          <div class="form-group" id="edit-lesson-custom-url-group" style="display:none;">
            <label style="font-size:0.8rem; color:#475569;">Path / URL Gambar Kustom:</label>
            <input type="text" id="edit-lesson-custom-url" class="form-control" placeholder="Contoh: img/comic_ramen.svg atau https://..." oninput="handleLessonCustomUrlInput()" />
          </div>

          <div class="form-group" style="margin-bottom:0.8rem;">
            <label style="font-size:0.8rem; color:#475569;">Atau Upload File Gambar Komik Baru (PNG, JPG, SVG, WebP):</label>
            <input type="file" name="comic_file" id="edit-lesson-comic-file" class="form-control" accept="image/*" onchange="previewLessonUploadedImage(this)" />
          </div>

          <!-- Live Preview & Checkbox Hapus -->
          <div id="edit-lesson-preview-wrap" style="display:flex; align-items:center; gap:1rem; padding:0.6rem; background:#FFFFFF; border:1px solid #CBD5E1; border-radius:10px;">
            <div style="width:100px; height:65px; border-radius:8px; overflow:hidden; background:#F1F5F9; border:1px solid #E2E8F0; flex-shrink:0; display:flex; align-items:center; justify-content:center;">
              <img id="edit-lesson-preview-img" src="" alt="Preview Komik" style="width:100%; height:100%; object-fit:cover; display:none;" />
              <span id="edit-lesson-preview-none" style="font-size:0.75rem; color:#94A3B8; text-align:center;">Komik Default</span>
            </div>
            <div style="flex:1;">
              <div id="edit-lesson-preview-text" style="font-size:0.82rem; font-weight:700; color:#334155;">Ilustrasi Komik Default</div>
              <label style="display:inline-flex; align-items:center; gap:0.4rem; font-size:0.8rem; color:#DC2626; cursor:pointer; margin-top:0.35rem;">
                <input type="checkbox" name="remove_comic_image" value="1" id="edit-lesson-remove-comic" onchange="handleRemoveLessonComicCheckbox()" />
                <span>Reset gambar komik (kembali ke ilustrasi komik bawaan)</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Audio  Audio Pelafalan Percakapan Komik -->
        <div style="background:#F8FAFC; border:1.5px solid #E2E8F0; border-radius:14px; padding:1.2rem; margin-bottom:1.2rem;">
          <label style="font-weight:800; color:#0F172A; display:block; margin-bottom:0.3rem;">
            Audio  Audio Pelafalan Percakapan Komik:
          </label>
          <p style="font-size:0.8rem; color:#64748B; margin:0 0 0.8rem;">Dengarkan suara asli Jepang dialog komik ini langsung di layar belajar siswa</p>
          <div class="form-group">
            <label style="font-size:0.8rem; color:#475569;">Label / Judul Audio:</label>
            <input type="text" name="audio_label" id="edit-lesson-audio-label" class="form-control" placeholder="Contoh: Percakapan Kenji & Sensei Tanaka di Tokyo" />
          </div>
          <div class="form-group" style="margin-bottom:0;">
            <label style="font-size:0.8rem; color:#475569;">Teks Dialog Jepang (Dibacakan Audio Player):</label>
            <textarea name="audio_text" id="edit-lesson-audio-text" class="form-control" rows="3" placeholder="Tuliskan teks kalimat/percakapan bahasa Jepang aslinya..."></textarea>
          </div>
        </div>

        <!-- Catatan Pembahasan Sensei Tanaka & Kiko -->
        <div style="background:#EFF6FF; border:1.5px solid #BFDBFE; border-radius:14px; padding:1.2rem; margin-bottom:1.2rem;">
          <label style="font-weight:800; color:#1E3A8A; display:block; margin-bottom:0.3rem;">
            Catatan Pembahasan Sensei Tanaka &amp; Kiko (Langkah 1 &amp; Langkah 2):
          </label>
          <p style="font-size:0.8rem; color:#3B82F6; margin:0 0 0.6rem;">Pesan dan tips penting dari Sensei Tanaka yang ditampilkan di bawah komik dan pengantar modul</p>
          <textarea name="mascot_tip" id="edit-lesson-mascot-tip" class="form-control" rows="3" placeholder="Tuliskan tips belajar, penjelasan tata bahasa, atau trik mengingat dari Sensei Tanaka..."></textarea>
        </div>

        <div class="modal-btn-row">
          <button type="button" class="btn-cancel" onclick="closeModal('modal-edit-lesson')">Batal</button>
          <button type="submit" class="btn-guru-primary">Perbarui Modul &amp; Komik</button>
        </div>
      </form>
    </div>
  </div>

    <!-- ==============================================
       MODAL: TAMBAH SOAL QUEST BARU
       ============================================== -->
  <div class="guru-modal-backdrop" id="modal-add-quest">
    <div class="guru-modal-box" style="max-width:680px;">
      <div class="guru-modal-header">
        <div>
          <h3>Buat Soal Quest Baru</h3>
          <span style="font-size:0.8rem; color:#64748B;">Lengkapi pertanyaan, pilihan jawaban, kunci benar, gambar, dan penjelasan</span>
        </div>
        <button class="btn-close-modal" onclick="closeModal('modal-add-quest')">&times;</button>
      </div>
      <form action="{{ route('guru.quests.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        
        <!-- 1. Tautan Modul Pelajaran -->
        <div class="form-group">
          <label>Tautkan ke Modul Pelajaran:</label>
          <select name="lesson_id" class="form-control" required>
            @foreach($lessons as $les)
            <option value="{{ $les->id }}">{{ $les->title }} ({{ strtoupper($les->level->code ?? 'N5') }})</option>
            @endforeach
          </select>
        </div>

        <!-- 2. Pertanyaan Soal -->
        <div class="form-group">
          <label>Teks Pertanyaan Soal:</label>
          <textarea name="question" class="form-control" rows="3" placeholder="Tuliskan pertanyaan soal latihan..." required></textarea>
        </div>

        <!-- 3. Badge & Poin -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.8rem;">
          <div class="form-group">
            <label>Badge Header:</label>
            <input type="text" name="badge_text" class="form-control" value="Tantangan Quest" />
          </div>
          <div class="form-group">
            <label>Poin Hadiah Kuis:</label>
            <input type="number" name="points" class="form-control" value="25" />
          </div>
        </div>

        <!-- 4. Gambar Ilustrasi Soal -->
        <div style="background:#F8FAFC; padding:1.2rem; border-radius:14px; border:1.5px solid #E2E8F0; margin-bottom:1.2rem;">
          <label style="font-weight:800; color:#0F172A; display:block; margin-bottom:0.3rem;">
            Gambar Ilustrasi Soal (Opsional):
          </label>
          <p style="font-size:0.8rem; color:#64748B; margin:0 0 0.8rem;">Pilih template komik visual beresolusi tajam atau upload file gambar sendiri</p>

          <div class="form-group">
            <label style="font-size:0.8rem; color:#475569;">Pilih Template Ilustrasi Komik:</label>
            <select name="image_url" id="add-quest-image-url" class="form-control" onchange="handleImageTemplateChange('add')">
              <option value="">-- Tanpa Ilustrasi Gambar (Hanya Teks) --</option>
              <option value="img/comic_ramen.svg">Kedai Ramen Katakana (ラーメン)</option>
              <option value="img/comic_aisatsu.svg">Suasana Kelas Aisatsu (おはようございます)</option>
              <option value="img/comic_station.svg">Papan Stasiun Kereta Tokyo (東京 / とうきょう)</option>
              <option value="img/comic_konbini.svg">Minimarket Konbini & Uang Yen (¥150)</option>
              <option value="img/comic_hotel.svg">Check-in Hotel / Ryokan (ホテル)</option>
              <option value="img/comic_directions.svg">Petunjuk Arah Wisata & Stasiun (まっすぐ)</option>
              <option value="img/comic_souvenir.svg">Toko Suvenir Asakusa (おみやげ)</option>
              <option value="img/comic_emergency.svg">Situasi Darurat & Bantuan (トイレ / 英語)</option>
              <option value="__custom__">-- Masukkan Path / URL Gambar Kustom --</option>
            </select>
          </div>

          <div class="form-group" id="add-quest-custom-url-group" style="display:none;">
            <label style="font-size:0.8rem; color:#475569;">Path / URL Gambar Kustom:</label>
            <input type="text" id="add-quest-custom-url" class="form-control" placeholder="Contoh: img/comic_ramen.svg atau https://..." oninput="handleCustomUrlInput('add')" />
          </div>

          <div class="form-group" style="margin-bottom:0.8rem;">
            <label style="font-size:0.8rem; color:#475569;">Atau Upload File Gambar Baru (PNG, JPG, SVG, WebP):</label>
            <input type="file" name="image_file" class="form-control" accept="image/*" onchange="previewUploadedImage('add', this)" />
          </div>

          <!-- Live Preview -->
          <div id="add-quest-preview-wrap" style="display:flex; align-items:center; gap:1rem; padding:0.6rem; background:#FFFFFF; border:1px solid #CBD5E1; border-radius:10px;">
            <div style="width:90px; height:60px; border-radius:8px; overflow:hidden; background:#F1F5F9; border:1px solid #E2E8F0; flex-shrink:0; display:flex; align-items:center; justify-content:center;">
              <img id="add-quest-preview-img" src="" alt="Preview Gambar" style="width:100%; height:100%; object-fit:cover; display:none;" />
              <span id="add-quest-preview-none" style="font-size:0.75rem; color:#94A3B8; text-align:center;">Tanpa Gambar</span>
            </div>
            <div style="flex:1;">
              <div id="add-quest-preview-text" style="font-size:0.82rem; font-weight:700; color:#334155;">Tidak ada gambar dipilih</div>
            </div>
          </div>
        </div>

        <!-- 5. Semua Pilihan Jawaban (A, B, C, D) & Kunci Benar -->
        <div style="background:#F8FAFC; padding:1.2rem; border-radius:14px; border:1.5px solid #E2E8F0; margin-bottom:1.2rem;">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.8rem; flex-wrap:wrap; gap:0.5rem;">
            <label style="font-weight:800; color:#0F172A; margin:0;">
              Pilihan Jawaban (Pilih Radio Jawaban Benar):
            </label>
            <span style="font-size:0.78rem; background:#DCFCE7; color:#166534; font-weight:700; padding:0.2rem 0.6rem; border-radius:var(--radius-pill);">
              Tandai 1 radio button sebagai kunci benar
            </span>
          </div>

          <div style="display:flex; flex-direction:column; gap:0.75rem;">
            <!-- OPSI A -->
            <div class="opt-row-box is-correct" id="add-opt-box-a" style="display:flex; align-items:center; gap:0.6rem; background:#ECFDF5; border:1.5px solid #10B981; border-radius:10px; padding:0.4rem 0.8rem;">
              <input type="radio" name="correct_opt" value="A" id="add-radio-opt-a" checked style="width:18px; height:18px; cursor:pointer;" onchange="highlightCorrectOption('add')" required />
              <span style="font-weight:800; color:#1E293B; width:20px;">A.</span>
              <input type="text" name="opt_a" class="form-control" placeholder="Pilihan A..." required style="border:none; box-shadow:none; padding:0.4rem 0.2rem;" />
              <span class="correct-badge-pill" id="add-badge-correct-a" style="font-size:0.72rem; font-weight:800; color:#10B981; margin-left:auto;">Kunci Benar</span>
            </div>

            <!-- OPSI B -->
            <div class="opt-row-box" id="add-opt-box-b" style="display:flex; align-items:center; gap:0.6rem; background:#FFFFFF; border:1.5px solid #CBD5E1; border-radius:10px; padding:0.4rem 0.8rem;">
              <input type="radio" name="correct_opt" value="B" id="add-radio-opt-b" style="width:18px; height:18px; cursor:pointer;" onchange="highlightCorrectOption('add')" />
              <span style="font-weight:800; color:#1E293B; width:20px;">B.</span>
              <input type="text" name="opt_b" class="form-control" placeholder="Pilihan B..." required style="border:none; box-shadow:none; padding:0.4rem 0.2rem;" />
              <span class="correct-badge-pill" id="add-badge-correct-b" style="font-size:0.72rem; font-weight:800; color:#10B981; margin-left:auto; display:none;">Kunci Benar</span>
            </div>

            <!-- OPSI C -->
            <div class="opt-row-box" id="add-opt-box-c" style="display:flex; align-items:center; gap:0.6rem; background:#FFFFFF; border:1.5px solid #CBD5E1; border-radius:10px; padding:0.4rem 0.8rem;">
              <input type="radio" name="correct_opt" value="C" id="add-radio-opt-c" style="width:18px; height:18px; cursor:pointer;" onchange="highlightCorrectOption('add')" />
              <span style="font-weight:800; color:#1E293B; width:20px;">C.</span>
              <input type="text" name="opt_c" class="form-control" placeholder="Pilihan C..." required style="border:none; box-shadow:none; padding:0.4rem 0.2rem;" />
              <span class="correct-badge-pill" id="add-badge-correct-c" style="font-size:0.72rem; font-weight:800; color:#10B981; margin-left:auto; display:none;">Kunci Benar</span>
            </div>

            <!-- OPSI D -->
            <div class="opt-row-box" id="add-opt-box-d" style="display:flex; align-items:center; gap:0.6rem; background:#FFFFFF; border:1.5px solid #CBD5E1; border-radius:10px; padding:0.4rem 0.8rem;">
              <input type="radio" name="correct_opt" value="D" id="add-radio-opt-d" style="width:18px; height:18px; cursor:pointer;" onchange="highlightCorrectOption('add')" />
              <span style="font-weight:800; color:#1E293B; width:20px;">D.</span>
              <input type="text" name="opt_d" class="form-control" placeholder="Pilihan D..." required style="border:none; box-shadow:none; padding:0.4rem 0.2rem;" />
              <span class="correct-badge-pill" id="add-badge-correct-d" style="font-size:0.72rem; font-weight:800; color:#10B981; margin-left:auto; display:none;">Kunci Benar</span>
            </div>
          </div>
        </div>

        <!-- 6. Penjelasan Kunci Jawaban -->
        <div class="form-group" style="background:#EFF6FF; padding:1.2rem; border-radius:14px; border:1.5px solid #BFDBFE;">
          <label style="font-weight:800; color:#1E3A8A; display:block; margin-bottom:0.4rem;">
             Penjelasan Kunci Jawaban:
          </label>
          <p style="font-size:0.8rem; color:#3B82F6; margin:0 0 0.6rem;">Penjelasan ini akan muncul di layar siswa saat mereka menjawab soal untuk membantu pemahaman materi secara mendalam.</p>
          <textarea name="explanation" class="form-control" rows="3" placeholder="Jelaskan alasan jawaban benar agar siswa memahami konsepnya..."></textarea>
        </div>

        <!-- 7. Audio Percakapan Chokai (Opsional) -->
        <details style="background:#F8FAFC; border:1.5px solid #E2E8F0; border-radius:12px; padding:0.8rem 1rem; margin-bottom:1.2rem;">
          <summary style="font-weight:800; color:#475569; cursor:pointer; font-size:0.88rem;">
            Audio  Pengaturan Audio Chokai (Listening Dialogue - Opsional)
          </summary>
          <div style="margin-top:0.8rem; display:flex; flex-direction:column; gap:0.6rem;">
            <div class="form-group" style="margin:0;">
              <label style="font-size:0.8rem;">Label Audio:</label>
              <input type="text" name="audio_label" class="form-control" placeholder="Contoh: Percakapan di Kedai Ramen" />
            </div>
            <div class="form-group" style="margin:0;">
              <label style="font-size:0.8rem;">Teks Percakapan Audio (Jepang):</label>
              <textarea name="audio_text" class="form-control" rows="2" placeholder="Teks dialog Jepang yang akan dibacakan mesin suara TTS..."></textarea>
            </div>
          </div>
        </details>

        <div class="modal-btn-row">
          <button type="button" class="btn-cancel" onclick="closeModal('modal-add-quest')">Batal</button>
          <button type="submit" class="btn-guru-primary">Simpan Soal Baru</button>
        </div>
      </form>
    </div>
  </div>

  <!-- ==============================================
       MODAL: EDIT SOAL QUEST (LENGKAP SEMUA FITUR)
       ============================================== -->
  <div class="guru-modal-backdrop" id="modal-edit-quest">
    <div class="guru-modal-box" style="max-width:680px;">
      <div class="guru-modal-header">
        <div>
          <h3 id="edit-quest-modal-title">Edit Soal Quest</h3>
          <span style="font-size:0.8rem; color:#64748B;">Perbarui pertanyaan, gambar, semua pilihan opsi, kunci jawaban, dan penjelasannya</span>
        </div>
        <button class="btn-close-modal" onclick="closeModal('modal-edit-quest')">&times;</button>
      </div>
      <form id="form-edit-quest" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        
        <!-- 1. Tautan Modul Pelajaran -->
        <div class="form-group">
          <label>Tautkan ke Modul Pelajaran:</label>
          <select name="lesson_id" id="edit-quest-lesson-id" class="form-control" required>
            @foreach($lessons as $les)
            <option value="{{ $les->id }}">{{ $les->title }} ({{ strtoupper($les->level->code ?? 'N5') }})</option>
            @endforeach
          </select>
        </div>

        <!-- 2. Pertanyaan Soal -->
        <div class="form-group">
          <label>Teks Pertanyaan Soal:</label>
          <textarea name="question" id="edit-quest-question" class="form-control" rows="3" placeholder="Tuliskan pertanyaan soal latihan..." required></textarea>
        </div>

        <!-- 3. Badge & Poin -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.8rem;">
          <div class="form-group">
            <label>Badge Header:</label>
            <input type="text" name="badge_text" id="edit-quest-badge" class="form-control" placeholder="Contoh: Soal 1 • Identifikasi Bentuk" />
          </div>
          <div class="form-group">
            <label>Poin Hadiah Kuis:</label>
            <input type="number" name="points" id="edit-quest-points" class="form-control" value="25" />
          </div>
        </div>

        <!-- 4. Gambar Ilustrasi Soal -->
        <div style="background:#F8FAFC; padding:1.2rem; border-radius:14px; border:1.5px solid #E2E8F0; margin-bottom:1.2rem;">
          <label style="font-weight:800; color:#0F172A; display:block; margin-bottom:0.3rem;">
            Gambar Ilustrasi Soal:
          </label>
          <p style="font-size:0.8rem; color:#64748B; margin:0 0 0.8rem;">Ganti dengan template komik visual, upload gambar baru, atau hapus gambar</p>

          <div class="form-group">
            <label style="font-size:0.8rem; color:#475569;">Pilih Template Ilustrasi Komik:</label>
            <select name="image_url" id="edit-quest-image-url" class="form-control" onchange="handleImageTemplateChange('edit')">
              <option value="">-- Tanpa Ilustrasi Gambar (Hanya Teks) --</option>
              <option value="img/comic_ramen.svg">Kedai Ramen Katakana (ラーメン)</option>
              <option value="img/comic_aisatsu.svg">Suasana Kelas Aisatsu (おはようございます)</option>
              <option value="img/comic_station.svg">Papan Stasiun Kereta Tokyo (東京 / とうきょう)</option>
              <option value="img/comic_konbini.svg">Minimarket Konbini & Uang Yen (¥150)</option>
              <option value="img/comic_hotel.svg">Check-in Hotel / Ryokan (ホテル)</option>
              <option value="img/comic_directions.svg">Petunjuk Arah Wisata & Stasiun (まっすぐ)</option>
              <option value="img/comic_souvenir.svg">Toko Suvenir Asakusa (おみやげ)</option>
              <option value="img/comic_emergency.svg">Situasi Darurat & Bantuan (トイレ / 英語)</option>
              <option value="__custom__">-- Masukkan Path / URL Gambar Kustom --</option>
            </select>
          </div>

          <div class="form-group" id="edit-quest-custom-url-group" style="display:none;">
            <label style="font-size:0.8rem; color:#475569;">Path / URL Gambar Kustom:</label>
            <input type="text" id="edit-quest-custom-url" class="form-control" placeholder="Contoh: img/comic_ramen.svg atau https://..." oninput="handleCustomUrlInput('edit')" />
          </div>

          <div class="form-group" style="margin-bottom:0.8rem;">
            <label style="font-size:0.8rem; color:#475569;">Atau Upload File Gambar Baru (PNG, JPG, SVG, WebP):</label>
            <input type="file" name="image_file" id="edit-quest-image-file" class="form-control" accept="image/*" onchange="previewUploadedImage('edit', this)" />
          </div>

          <!-- Live Preview & Checkbox Hapus -->
          <div id="edit-quest-preview-wrap" style="display:flex; align-items:center; gap:1rem; padding:0.6rem; background:#FFFFFF; border:1px solid #CBD5E1; border-radius:10px;">
            <div style="width:90px; height:60px; border-radius:8px; overflow:hidden; background:#F1F5F9; border:1px solid #E2E8F0; flex-shrink:0; display:flex; align-items:center; justify-content:center;">
              <img id="edit-quest-preview-img" src="" alt="Preview Gambar" style="width:100%; height:100%; object-fit:cover; display:none;" />
              <span id="edit-quest-preview-none" style="font-size:0.75rem; color:#94A3B8; text-align:center;">Tanpa Gambar</span>
            </div>
            <div style="flex:1;">
              <div id="edit-quest-preview-text" style="font-size:0.82rem; font-weight:700; color:#334155;">Tidak ada gambar terpasang</div>
              <label style="display:inline-flex; align-items:center; gap:0.4rem; font-size:0.8rem; color:#DC2626; cursor:pointer; margin-top:0.35rem;">
                <input type="checkbox" name="remove_image" value="1" id="edit-quest-remove-image" onchange="handleRemoveImageCheckbox('edit')" />
                <span>Hapus gambar dari soal ini (jadikan teks saja)</span>
              </label>
            </div>
          </div>
        </div>

        <!-- 5. Semua Pilihan Jawaban (A, B, C, D) & Kunci Benar -->
        <div style="background:#F8FAFC; padding:1.2rem; border-radius:14px; border:1.5px solid #E2E8F0; margin-bottom:1.2rem;">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.8rem; flex-wrap:wrap; gap:0.5rem;">
            <label style="font-weight:800; color:#0F172A; margin:0;">
              Semua Pilihan Jawaban &amp; Kunci Benar:
            </label>
            <span style="font-size:0.78rem; background:#DCFCE7; color:#166534; font-weight:700; padding:0.2rem 0.6rem; border-radius:var(--radius-pill);">
              Pilih radio button pada opsi yang benar
            </span>
          </div>

          <div style="display:flex; flex-direction:column; gap:0.75rem;">
            <!-- OPSI A -->
            <div class="opt-row-box" id="edit-opt-box-a" style="display:flex; align-items:center; gap:0.6rem; background:#FFFFFF; border:1.5px solid #CBD5E1; border-radius:10px; padding:0.4rem 0.8rem;">
              <input type="radio" name="correct_opt" value="A" id="edit-radio-opt-a" style="width:18px; height:18px; cursor:pointer;" onchange="highlightCorrectOption('edit')" required />
              <span style="font-weight:800; color:#1E293B; width:20px;">A.</span>
              <input type="text" name="opt_a" id="edit-quest-opt-a" class="form-control" placeholder="Teks pilihan A..." required style="border:none; box-shadow:none; padding:0.4rem 0.2rem;" />
              <span class="correct-badge-pill" id="edit-badge-correct-a" style="font-size:0.72rem; font-weight:800; color:#10B981; margin-left:auto; display:none;">Kunci Benar</span>
            </div>

            <!-- OPSI B -->
            <div class="opt-row-box" id="edit-opt-box-b" style="display:flex; align-items:center; gap:0.6rem; background:#FFFFFF; border:1.5px solid #CBD5E1; border-radius:10px; padding:0.4rem 0.8rem;">
              <input type="radio" name="correct_opt" value="B" id="edit-radio-opt-b" style="width:18px; height:18px; cursor:pointer;" onchange="highlightCorrectOption('edit')" />
              <span style="font-weight:800; color:#1E293B; width:20px;">B.</span>
              <input type="text" name="opt_b" id="edit-quest-opt-b" class="form-control" placeholder="Teks pilihan B..." required style="border:none; box-shadow:none; padding:0.4rem 0.2rem;" />
              <span class="correct-badge-pill" id="edit-badge-correct-b" style="font-size:0.72rem; font-weight:800; color:#10B981; margin-left:auto; display:none;">Kunci Benar</span>
            </div>

            <!-- OPSI C -->
            <div class="opt-row-box" id="edit-opt-box-c" style="display:flex; align-items:center; gap:0.6rem; background:#FFFFFF; border:1.5px solid #CBD5E1; border-radius:10px; padding:0.4rem 0.8rem;">
              <input type="radio" name="correct_opt" value="C" id="edit-radio-opt-c" style="width:18px; height:18px; cursor:pointer;" onchange="highlightCorrectOption('edit')" />
              <span style="font-weight:800; color:#1E293B; width:20px;">C.</span>
              <input type="text" name="opt_c" id="edit-quest-opt-c" class="form-control" placeholder="Teks pilihan C..." required style="border:none; box-shadow:none; padding:0.4rem 0.2rem;" />
              <span class="correct-badge-pill" id="edit-badge-correct-c" style="font-size:0.72rem; font-weight:800; color:#10B981; margin-left:auto; display:none;">Kunci Benar</span>
            </div>

            <!-- OPSI D -->
            <div class="opt-row-box" id="edit-opt-box-d" style="display:flex; align-items:center; gap:0.6rem; background:#FFFFFF; border:1.5px solid #CBD5E1; border-radius:10px; padding:0.4rem 0.8rem;">
              <input type="radio" name="correct_opt" value="D" id="edit-radio-opt-d" style="width:18px; height:18px; cursor:pointer;" onchange="highlightCorrectOption('edit')" />
              <span style="font-weight:800; color:#1E293B; width:20px;">D.</span>
              <input type="text" name="opt_d" id="edit-quest-opt-d" class="form-control" placeholder="Teks pilihan D..." required style="border:none; box-shadow:none; padding:0.4rem 0.2rem;" />
              <span class="correct-badge-pill" id="edit-badge-correct-d" style="font-size:0.72rem; font-weight:800; color:#10B981; margin-left:auto; display:none;">Kunci Benar</span>
            </div>
          </div>
        </div>

        <!-- 6. Penjelasan Kunci Jawaban -->
        <div class="form-group" style="background:#EFF6FF; padding:1.2rem; border-radius:14px; border:1.5px solid #BFDBFE;">
          <label style="font-weight:800; color:#1E3A8A; display:block; margin-bottom:0.4rem;">
             Penjelasan / Pembahasan Kunci Jawaban:
          </label>
          <p style="font-size:0.8rem; color:#3B82F6; margin:0 0 0.6rem;">Penjelasan ini akan muncul di layar siswa saat mereka menjawab kuis untuk membantu pemahaman materi secara mendalam.</p>
          <textarea name="explanation" id="edit-quest-explanation" class="form-control" rows="3" placeholder="Tuliskan alasan mengapa jawaban tersebut benar..."></textarea>
        </div>

        <!-- 7. Audio Percakapan Chokai (Opsional) -->
        <details style="background:#F8FAFC; border:1.5px solid #E2E8F0; border-radius:12px; padding:0.8rem 1rem; margin-bottom:1.2rem;">
          <summary style="font-weight:800; color:#475569; cursor:pointer; font-size:0.88rem;">
            Audio  Pengaturan Audio Chokai (Listening Dialogue - Opsional)
          </summary>
          <div style="margin-top:0.8rem; display:flex; flex-direction:column; gap:0.6rem;">
            <div class="form-group" style="margin:0;">
              <label style="font-size:0.8rem;">Label Audio:</label>
              <input type="text" name="audio_label" id="edit-quest-audio-label" class="form-control" placeholder="Contoh: Percakapan Rin & Guru Kucing" />
            </div>
            <div class="form-group" style="margin:0;">
              <label style="font-size:0.8rem;">Teks Percakapan Audio (Jepang):</label>
              <textarea name="audio_text" id="edit-quest-audio-text" class="form-control" rows="2" placeholder="Teks dialog Jepang yang akan dibacakan mesin suara TTS..."></textarea>
            </div>
          </div>
        </details>

        <div class="modal-btn-row">
          <button type="button" class="btn-cancel" onclick="closeModal('modal-edit-quest')">Batal</button>
          <button type="submit" class="btn-guru-primary">Simpan Perubahan Soal</button>
        </div>
      </form>
    </div>
  <!-- ==============================================
       MODAL: TAMBAH SUB-MODE MINIGAME BARU
       ============================================== -->
  <div class="guru-modal-backdrop" id="modal-add-submode">
    <div class="guru-modal-box">
      <div class="guru-modal-header">
        <h3>Tambah Sub-Mode Game Baru</h3>
        <button type="button" class="btn-close-modal" onclick="closeModal('modal-add-submode')">&times;</button>
      </div>
      <form onsubmit="submitAddSubMode(event)">
        <div class="form-group">
          <label>Game Tujuan:</label>
          <input type="text" id="submode-target-game" class="form-control" readonly style="background:#F1F5F9; font-weight:700;" />
        </div>
        <div class="form-group">
          <label>ID Sub-Mode (Unik, huruf kecil tanpa spasi):</label>
          <input type="text" id="submode-id" class="form-control" placeholder="contoh: kanji-n5, kanji-n4, tema-hewan" required />
          <small style="color:#64748B;">Digunakan sebagai pengenal teknis sub-mode.</small>
        </div>
        <div class="form-group">
          <label>Nama Tampilan Sub-Mode (Muncul di layar siswa):</label>
          <input type="text" id="submode-name" class="form-control" placeholder="contoh: Kanji N5 Dasar (日, 月, dll.)" required />
        </div>
        <div class="modal-btn-row">
          <button type="button" class="btn-cancel" onclick="closeModal('modal-add-submode')">Batal</button>
          <button type="submit" class="btn-guru-primary">Tambahkan Sub-Mode</button>
        </div>
      </form>
    </div>
  </div>

  <!-- ==============================================
       MODAL: TAMBAH / EDIT SOAL MINIGAME
       ============================================== -->
  <div class="guru-modal-backdrop" id="modal-add-game-question">
    <div class="guru-modal-box">
      <div class="guru-modal-header">
        <h3 id="modal-game-q-title">Tambah Soal / Karakter Game</h3>
        <button type="button" class="btn-close-modal" onclick="closeModal('modal-add-game-question')">&times;</button>
      </div>
      <form onsubmit="submitAddGameQuestion(event)">
        <input type="hidden" id="game-q-edit-id" value="" />
        <div class="form-group">
          <label>Game Tujuan:</label>
          <select id="game-q-target" class="form-control" onchange="updateSubmodeDropdownForModal()">
            <option value="kana-blast">Kana Blast (Turret Blaster)</option>
            <option value="sky-defense">Sky Atk Defense (Gerbang Desa)</option>
            <option value="flash-card">Flash Card</option>
            <option value="memory-match">Memory Match</option>
            <option value="speed-quiz">Speed Quiz</option>
            <option value="word-builder">Word Builder</option>
          </select>
        </div>
        <div class="form-group">
          <label>Sub-Mode / Kategori Soal:</label>
          <select id="game-q-submode" class="form-control" required>
            <!-- Populated dynamically -->
          </select>
        </div>
        <div class="form-group">
          <label>Karakter / Kata Aksara Jepang:</label>
          <input type="text" id="game-q-char" class="form-control" placeholder="contoh: 日 atau 山 atau ねこ" required style="font-size:1.15rem; font-family:'Noto Sans JP', sans-serif;" />
        </div>
        <div class="form-group">
          <label>Romaji / Cara Baca Latin:</label>
          <input type="text" id="game-q-romaji" class="form-control" placeholder="contoh: hi / nichi atau yama atau neko" required />
        </div>
        <div class="form-group">
          <label>Arti Bahasa Indonesia:</label>
          <input type="text" id="game-q-mean" class="form-control" placeholder="contoh: Matahari / Hari" required />
        </div>
        <div class="modal-btn-row">
          <button type="button" class="btn-cancel" onclick="closeModal('modal-add-game-question')">Batal</button>
          <button type="submit" class="btn-guru-primary">Simpan ke Bank Soal Game</button>
        </div>
      </form>
    </div>
  </div>

  <script src="{{ asset('js/app.js') }}"></script>
  <script>
    // Tab Switching
    function switchGuruTab(tabKey) {
      document.querySelectorAll('.guru-tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.guru-tab-content').forEach(c => c.classList.remove('active'));

      event.currentTarget.classList.add('active');
      const target = document.getElementById('guru-tab-' + tabKey);
      if (target) target.classList.add('active');

      if (tabKey === 'minigames') {
        renderAdminGameView();
      }
    }

    // Modal Helpers
    function openModal(id) {
      document.getElementById(id).classList.add('show');
    }
    function closeModal(id) {
      document.getElementById(id).classList.remove('show');
    }

    function openAddLevelModal() {
      openModal('modal-add-level');
    }

    function openEditLevelModal(id, name, sub, color, isActive, order) {
      document.getElementById('form-edit-level').action = '/guru/levels/' + id;
      document.getElementById('edit-level-name').value = name;
      document.getElementById('edit-level-sub').value = sub;
      document.getElementById('edit-level-color').value = color;
      openModal('modal-edit-level');
    }

    // One-Click Preset Add (N3 / N2 / N1)
    async function addPresetLevel(code) {
      const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      try {
        const res = await fetch('/guru/levels/preset', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': token,
            'Accept': 'application/json'
          },
          body: JSON.stringify({ preset: code })
        });
        const data = await res.json();
        if (data.success) {
          alert('' + data.message);
          window.location.reload();
        } else {
          alert(data.message || 'Gagal menambahkan level preset.');
        }
      } catch (err) {
        alert('Terjadi kesalahan koneksi.');
      }
    }

    async function deleteLevel(id, name) {
      if (!confirm('Hapus kotak level "' + name + '" beserta modul di dalamnya?')) return;
      const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      try {
        const res = await fetch('/guru/levels/' + id, {
          method: 'DELETE',
          headers: {
            'X-CSRF-TOKEN': token,
            'Accept': 'application/json'
          }
        });
        const data = await res.json();
        if (data.success) {
          window.location.reload();
        }
      } catch (err) {
        alert('Gagal menghapus level.');
      }
    }

    const allLessonsData = @json($lessons);

    function openAddLessonModal() {
      openModal('modal-add-lesson');
    }

    function openEditLessonModal(id) {
      const les = allLessonsData.find(item => item.id == id);
      if (!les) {
        alert('Data modul materi #' + id + ' tidak ditemukan.');
        return;
      }

      document.getElementById('form-edit-lesson').action = '/guru/lessons/' + les.id;
      document.getElementById('edit-lesson-modal-title').textContent = 'Edit Modul: ' + les.title;
      document.getElementById('edit-lesson-title').value = les.title || '';
      document.getElementById('edit-lesson-subtitle').value = les.subtitle || '';
      document.getElementById('edit-lesson-badge').value = les.badge || '';
      document.getElementById('edit-lesson-minutes').value = les.est_minutes || 15;

      // Comic image setup
      const sel = document.getElementById('edit-lesson-comic-image');
      const customGrp = document.getElementById('edit-lesson-custom-url-group');
      const customInp = document.getElementById('edit-lesson-custom-url');
      const fileInp = document.getElementById('edit-lesson-comic-file');
      const removeChk = document.getElementById('edit-lesson-remove-comic');
      const prevImg = document.getElementById('edit-lesson-preview-img');
      const prevNone = document.getElementById('edit-lesson-preview-none');
      const prevTxt = document.getElementById('edit-lesson-preview-text');

      if (fileInp) fileInp.value = '';
      if (removeChk) removeChk.checked = false;

      const img = les.comic_image || '';
      let matchedOption = false;
      if (sel) {
        for (let i = 0; i < sel.options.length; i++) {
          if (sel.options[i].value === img) {
            sel.selectedIndex = i;
            matchedOption = true;
            break;
          }
        }
        if (!matchedOption && img) {
          sel.value = '__custom__';
          if (customGrp) customGrp.style.display = 'block';
          if (customInp) customInp.value = img;
        } else {
          if (customGrp) customGrp.style.display = 'none';
          if (customInp) customInp.value = '';
        }
      }

      if (img) {
        const src = (img.startsWith('http') || img.startsWith('/')) ? img : ('/' + img);
        if (prevImg) { prevImg.src = src; prevImg.style.display = 'block'; }
        if (prevNone) prevNone.style.display = 'none';
        if (prevTxt) prevTxt.textContent = img;
      } else {
        if (prevImg) { prevImg.src = ''; prevImg.style.display = 'none'; }
        if (prevNone) prevNone.style.display = 'block';
        if (prevTxt) prevTxt.textContent = 'Ilustrasi Komik Bawaan Default';
      }

      // Audio & Mascot Tip
      const audLabel = document.getElementById('edit-lesson-audio-label');
      const audText = document.getElementById('edit-lesson-audio-text');
      const tipText = document.getElementById('edit-lesson-mascot-tip');

      if (audLabel) audLabel.value = les.audio_label || '';
      if (audText) audText.value = les.audio_text || '';
      if (tipText) tipText.value = les.mascot_tip || '';

      openModal('modal-edit-lesson');
    }

    function handleLessonComicTemplateChange() {
      const sel = document.getElementById('edit-lesson-comic-image');
      const customGrp = document.getElementById('edit-lesson-custom-url-group');
      const customInp = document.getElementById('edit-lesson-custom-url');
      const prevImg = document.getElementById('edit-lesson-preview-img');
      const prevNone = document.getElementById('edit-lesson-preview-none');
      const prevTxt = document.getElementById('edit-lesson-preview-text');
      const removeChk = document.getElementById('edit-lesson-remove-comic');
      if (removeChk) removeChk.checked = false;

      const val = sel.value;
      if (val === '__custom__') {
        if (customGrp) customGrp.style.display = 'block';
        if (customInp) customInp.focus();
      } else {
        if (customGrp) customGrp.style.display = 'none';
        if (val) {
          const src = (val.startsWith('http') || val.startsWith('/')) ? val : ('/' + val);
          if (prevImg) { prevImg.src = src; prevImg.style.display = 'block'; }
          if (prevNone) prevNone.style.display = 'none';
          if (prevTxt) prevTxt.textContent = val;
        } else {
          if (prevImg) { prevImg.src = ''; prevImg.style.display = 'none'; }
          if (prevNone) prevNone.style.display = 'block';
          if (prevTxt) prevTxt.textContent = 'Ilustrasi Komik Bawaan Default';
        }
      }
    }

    function handleLessonCustomUrlInput() {
      const customInp = document.getElementById('edit-lesson-custom-url');
      const prevImg = document.getElementById('edit-lesson-preview-img');
      const prevNone = document.getElementById('edit-lesson-preview-none');
      const prevTxt = document.getElementById('edit-lesson-preview-text');
      const url = customInp.value.trim();
      if (url) {
        const src = (url.startsWith('http') || url.startsWith('/')) ? url : ('/' + url);
        if (prevImg) { prevImg.src = src; prevImg.style.display = 'block'; }
        if (prevNone) prevNone.style.display = 'none';
        if (prevTxt) prevTxt.textContent = url;
      } else {
        if (prevImg) { prevImg.src = ''; prevImg.style.display = 'none'; }
        if (prevNone) prevNone.style.display = 'block';
        if (prevTxt) prevTxt.textContent = 'Ilustrasi Komik Bawaan Default';
      }
    }

    function previewLessonUploadedImage(input) {
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
          const prevImg = document.getElementById('edit-lesson-preview-img');
          const prevNone = document.getElementById('edit-lesson-preview-none');
          const prevTxt = document.getElementById('edit-lesson-preview-text');
          const removeChk = document.getElementById('edit-lesson-remove-comic');
          if (removeChk) removeChk.checked = false;
          if (prevImg) { prevImg.src = e.target.result; prevImg.style.display = 'block'; }
          if (prevNone) prevNone.style.display = 'none';
          if (prevTxt) prevTxt.textContent = 'Upload file: ' + input.files[0].name + ' (' + Math.round(input.files[0].size/1024) + ' KB)';
        };
        reader.readAsDataURL(input.files[0]);
      }
    }

    function handleRemoveLessonComicCheckbox() {
      const removeChk = document.getElementById('edit-lesson-remove-comic');
      const prevImg = document.getElementById('edit-lesson-preview-img');
      const prevNone = document.getElementById('edit-lesson-preview-none');
      const prevTxt = document.getElementById('edit-lesson-preview-text');
      const sel = document.getElementById('edit-lesson-comic-image');
      const fileInp = document.getElementById('edit-lesson-comic-file');
      if (removeChk && removeChk.checked) {
        if (sel) sel.value = '';
        if (fileInp) fileInp.value = '';
        if (prevImg) { prevImg.src = ''; prevImg.style.display = 'none'; }
        if (prevNone) prevNone.style.display = 'block';
        if (prevTxt) prevTxt.textContent = 'Gambar komik akan direset ke bawaan default';
      }
    }

    async function deleteLesson(id, title) {
      if (!confirm('Hapus modul materi "' + title + '"?')) return;
      const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      try {
        const res = await fetch('/guru/lessons/' + id, {
          method: 'DELETE',
          headers: {
            'X-CSRF-TOKEN': token,
            'Accept': 'application/json'
          }
        });
        const data = await res.json();
        if (data.success) {
          window.location.reload();
        }
      } catch (err) {
        alert('Gagal menghapus modul.');
      }
    }

    // ==========================================
    // BANK SOAL QUEST LOGIC (EDIT, TAMBAH, PREVIEW)
    // ==========================================
    const allQuestsData = @json($quests);

    function openAddQuestModal() {
      document.getElementById('add-quest-image-url').value = '';
      handleImageTemplateChange('add');
      highlightCorrectOption('add');
      openModal('modal-add-quest');
    }

    function openEditQuestModal(id) {
      const q = allQuestsData.find(item => item.id === id);
      if (!q) {
        alert('Data soal #' + id + ' tidak ditemukan.');
        return;
      }

      document.getElementById('edit-quest-modal-title').textContent = 'Edit Soal Quest #' + q.id + ' (Pelajaran ' + q.lesson_id + ')';
      document.getElementById('form-edit-quest').action = '/guru/quests/' + q.id;

      // Fill basic fields
      document.getElementById('edit-quest-lesson-id').value = q.lesson_id;
      document.getElementById('edit-quest-question').value = q.question || '';
      document.getElementById('edit-quest-badge').value = q.badge_text || '';
      document.getElementById('edit-quest-points').value = q.points || 25;
      document.getElementById('edit-quest-explanation').value = q.explanation || '';
      document.getElementById('edit-quest-audio-text').value = q.audio_text || '';
      document.getElementById('edit-quest-audio-label').value = q.audio_label || '';

      // Uncheck remove image
      const removeImgCheckbox = document.getElementById('edit-quest-remove-image');
      if (removeImgCheckbox) removeImgCheckbox.checked = false;

      // Handle Image
      const imgSelect = document.getElementById('edit-quest-image-url');
      const customUrlGroup = document.getElementById('edit-quest-custom-url-group');
      const customUrlInput = document.getElementById('edit-quest-custom-url');
      
      const standardComics = [
        'img/comic_ramen.svg',
        'img/comic_aisatsu.svg',
        'img/comic_station.svg',
        'img/comic_konbini.svg',
        'img/comic_hotel.svg',
        'img/comic_directions.svg',
        'img/comic_souvenir.svg',
        'img/comic_emergency.svg'
      ];

      if (!q.image_url) {
        imgSelect.value = '';
        customUrlGroup.style.display = 'none';
        customUrlInput.value = '';
      } else if (standardComics.includes(q.image_url)) {
        imgSelect.value = q.image_url;
        customUrlGroup.style.display = 'none';
        customUrlInput.value = '';
      } else {
        imgSelect.value = '__custom__';
        customUrlGroup.style.display = 'block';
        customUrlInput.value = q.image_url;
      }
      updatePreviewDisplay('edit', q.image_url);

      // Handle Options & Correct Answer
      const opts = q.options || [];
      const optA = opts[0] ? opts[0].text : '';
      const optB = opts[1] ? opts[1].text : '';
      const optC = opts[2] ? opts[2].text : '';
      const optD = opts[3] ? opts[3].text : '';

      document.getElementById('edit-quest-opt-a').value = optA;
      document.getElementById('edit-quest-opt-b').value = optB;
      document.getElementById('edit-quest-opt-c').value = optC;
      document.getElementById('edit-quest-opt-d').value = optD;

      // Detect correct option
      let correctKey = 'A';
      if (opts[0] && opts[0].isCorrect) correctKey = 'A';
      else if (opts[1] && opts[1].isCorrect) correctKey = 'B';
      else if (opts[2] && opts[2].isCorrect) correctKey = 'C';
      else if (opts[3] && opts[3].isCorrect) correctKey = 'D';

      const radio = document.getElementById('edit-radio-opt-' + correctKey.toLowerCase());
      if (radio) radio.checked = true;
      highlightCorrectOption('edit');

      openModal('modal-edit-quest');
    }

    // Highlight radio button selection
    function highlightCorrectOption(type) {
      const keys = ['a', 'b', 'c', 'd'];
      keys.forEach(k => {
        const radio = document.getElementById(type + '-radio-opt-' + k);
        const box = document.getElementById(type + '-opt-box-' + k);
        const badge = document.getElementById(type + '-badge-correct-' + k);
        if (radio && radio.checked) {
          if (box) {
            box.classList.add('is-correct');
            box.style.background = '#ECFDF5';
            box.style.borderColor = '#10B981';
          }
          if (badge) badge.style.display = 'inline';
        } else {
          if (box) {
            box.classList.remove('is-correct');
            box.style.background = '#FFFFFF';
            box.style.borderColor = '#CBD5E1';
          }
          if (badge) badge.style.display = 'none';
        }
      });
    }

    // Image Template Change Handler
    function handleImageTemplateChange(type) {
      const select = document.getElementById(type + '-quest-image-url');
      const customGroup = document.getElementById(type + '-quest-custom-url-group');
      const customInput = document.getElementById(type + '-quest-custom-url');
      const val = select.value;

      if (val === '__custom__') {
        customGroup.style.display = 'block';
        updatePreviewDisplay(type, customInput.value);
      } else {
        customGroup.style.display = 'none';
        updatePreviewDisplay(type, val);
      }
    }

    function handleCustomUrlInput(type) {
      const customInput = document.getElementById(type + '-quest-custom-url');
      const select = document.getElementById(type + '-quest-image-url');
      if (select.value === '__custom__') {
        updatePreviewDisplay(type, customInput.value);
      }
    }

    function previewUploadedImage(type, input) {
      if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
          updatePreviewDisplay(type, e.target.result, file.name);
        };
        reader.readAsDataURL(file);
      }
    }

    function handleRemoveImageCheckbox(type) {
      const cb = document.getElementById(type + '-quest-remove-image');
      if (cb && cb.checked) {
        updatePreviewDisplay(type, null);
      } else {
        handleImageTemplateChange(type);
      }
    }

    function updatePreviewDisplay(type, src, customLabel) {
      const img = document.getElementById(type + '-quest-preview-img');
      const noneSpan = document.getElementById(type + '-quest-preview-none');
      const text = document.getElementById(type + '-quest-preview-text');

      if (src && src.trim() !== '') {
        img.src = src.startsWith('data:') || src.startsWith('http') || src.startsWith('/') ? src : ('/' + src);
        img.style.display = 'block';
        noneSpan.style.display = 'none';
        text.textContent = customLabel ? ('File baru: ' + customLabel) : ('Gambar aktif: ' + src.split('/').pop());
        text.style.color = '#1D4ED8';
      } else {
        img.src = '';
        img.style.display = 'none';
        noneSpan.style.display = 'block';
        text.textContent = 'Tidak ada gambar terpasang (Hanya teks)';
        text.style.color = '#64748B';
      }
    }

    // Filter Quests by Lesson
    function filterQuestsByLesson(lessonId) {
      const items = document.querySelectorAll('.quest-admin-item');
      items.forEach(item => {
        if (lessonId === 'all' || item.getAttribute('data-lesson-id') === String(lessonId)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }

    async function deleteQuest(id) {
      if (!confirm('Hapus soal quest #' + id + ' secara permanen?')) return;
      const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      try {
        const res = await fetch('/guru/quests/' + id, {
          method: 'DELETE',
          headers: {
            'X-CSRF-TOKEN': token,
            'Accept': 'application/json'
          }
        });
        const data = await res.json();
        if (data.success) {
          const item = document.getElementById('quest-item-' + id);
          if (item) item.remove();
          alert('Soal berhasil dihapus.');
        } else {
          alert('Gagal menghapus soal: ' + (data.message || ''));
        }
      } catch (err) {
        alert('Gagal menghapus soal.');
      }
    }

    // ==========================================
    // MINIGAMES MASTER ADMINISTRATION LOGIC
    // ==========================================
    let currentAdminGame = 'kana-blast';

    function switchAdminGameTab(gameKey) {
      currentAdminGame = gameKey;
      document.querySelectorAll('.admin-game-chip').forEach(btn => btn.classList.remove('active'));
      const activeBtn = document.getElementById('chip-game-' + gameKey);
      if (activeBtn) activeBtn.classList.add('active');
      renderAdminGameView();
    }

    function renderAdminGameView() {
      const container = document.getElementById('admin-game-details');
      if (!container || typeof GameConfigManager === 'undefined') return;

      const g = GameConfigManager.getGame(currentAdminGame);
      if (!g) return;

      const subModes = GameConfigManager.getAllSubModes(currentAdminGame);
      const questions = GameConfigManager.getQuestions(currentAdminGame);
      const duration = GameConfigManager.getDuration(currentAdminGame, 60);

      container.innerHTML = `
        <!-- CARD 1: PENGATURAN DURASI / WAKTU PERMAINAN -->
        <div class="admin-settings-card">
          <div class="admin-card-head">
            <div>
              <h4>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#BE5544" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
                <span>Pengaturan Waktu &amp; Kecepatan (${g.title})</span>
              </h4>
              <p>Atur limit waktu bermain siswa agar latihan membaca aksara lebih menantang atau santai.</p>
            </div>
            <button type="button" class="btn-guru-primary" onclick="saveAdminGameDuration()">
              <span>Simpan Pengaturan Waktu</span>
            </button>
          </div>
          
          <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap;">
            <div style="display:flex; align-items:center; gap:8px;">
              <label style="font-weight:700; font-size:0.9rem;">Waktu Standar Permainan:</label>
              <input type="number" id="admin-game-duration-input" class="form-control" style="width:110px; font-weight:800; font-size:1.1rem; text-align:center;" value="${duration < 900 ? duration : 60}" min="10" max="300" step="5" />
              <span style="font-weight:700; color:#64748B;">Detik</span>
            </div>
            <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
              <span style="font-size:0.8rem; color:#64748B; font-weight:700;">Preset Cepat:</span>
              <button type="button" class="btn-preset" onclick="document.getElementById('admin-game-duration-input').value = 30">30s (Blitz)</button>
              <button type="button" class="btn-preset" onclick="document.getElementById('admin-game-duration-input').value = 45">45s</button>
              <button type="button" class="btn-preset" onclick="document.getElementById('admin-game-duration-input').value = 60">60s (Standar)</button>
              <button type="button" class="btn-preset" onclick="document.getElementById('admin-game-duration-input').value = 90">90s (Maraton)</button>
            </div>
          </div>
        </div>

        <!-- CARD 2: KELOLA SUB-MODE PERMAINAN (HIRAGANA, KATAKANA, KANJI, DLL) -->
        <div class="admin-settings-card">
          <div class="admin-card-head">
            <div>
              <h4>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563EB" stroke-width="2.2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                <span>Sub-Mode Permainan (${subModes.length} Mode Tersedia)</span>
              </h4>
              <p>Aktifkan, nonaktifkan, atau tambah sub-mode baru (contoh: <strong>Kanji N5 Dasar, Kanji N4 Wisata</strong>) untuk game ini.</p>
            </div>
            <button type="button" class="btn-preset" style="color:#2563EB; border-color:#BFDBFE;" onclick="openAddSubModeModal()">
              <span>+ Tambah Sub-Mode Baru</span>
            </button>
          </div>

          <div class="admin-submodes-list">
            ${subModes.map(sm => `
              <div class="admin-submode-badge ${sm.active !== false ? 'is-active' : 'is-inactive'}">
                <span>${sm.name}</span>
                <button type="button" onclick="toggleAdminSubMode('${sm.id}')" style="background:transparent; border:none; cursor:pointer; font-weight:800; font-size:0.8rem; color:${sm.active !== false ? '#10B981' : '#64748B'};" title="Ubah Status">
                  ${sm.active !== false ? 'Aktif' : 'Nonaktif'}
                </button>
                ${(sm.id.startsWith('custom') || sm.id === 'kanji-n5' || sm.id === 'kanji-n4') ? `
                  <button type="button" onclick="deleteAdminSubMode('${sm.id}')" style="background:transparent; border:none; cursor:pointer; color:#DC2626; font-size:1rem; line-height:1;" title="Hapus Sub-Mode">&times;</button>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- CARD 3: BANK SOAL / KOSAKATA GAME -->
        <div class="admin-settings-card">
          <div class="admin-card-head">
            <div>
              <h4>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#059669" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                <span>Bank Soal &amp; Karakter Aksara (${questions.length} Butir Soal Terpasang)</span>
              </h4>
              <p>Kelola karakter aksara Jepang, romaji cara baca, dan arti bahasa Indonesia yang akan muncul saat siswa bermain.</p>
            </div>
            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <button type="button" class="btn-preset" onclick="loadAdminPresetKanji()" title="Muat paket 15 Kanji N5 standar">+ Paket Kanji N5</button>
              <button type="button" class="btn-guru-primary" onclick="openAddGameQuestionModal()">
                <span>+ Tambah Soal Baru</span>
              </button>
              <button type="button" class="btn-preset" style="color:#DC2626; border-color:#FECACA;" onclick="resetAdminGameDefault()">
                <span>Reset Awal</span>
              </button>
            </div>
          </div>

          <div class="admin-table-wrap">
            <table class="admin-soal-table">
              <thead>
                <tr>
                  <th style="width:40px;">#</th>
                  <th style="width:120px;">Karakter / Aksara</th>
                  <th>Romaji (Cara Baca)</th>
                  <th>Arti Bahasa Indonesia</th>
                  <th>Sub-Mode Target</th>
                  <th style="width:120px; text-align:center;">Aksi</th>
                </tr>
              </thead>
              <tbody>
                ${questions.length === 0 ? `
                  <tr>
                    <td colspan="6" style="text-align:center; padding:2rem; color:#94A3B8;">Belum ada soal kustom di game ini. Silakan klik "+ Tambah Soal Baru" atau "+ Paket Kanji N5".</td>
                  </tr>
                ` : questions.map((q, idx) => `
                  <tr>
                    <td><strong>${idx + 1}</strong></td>
                    <td><span class="char-preview-pill">${q.char}</span></td>
                    <td><strong>${q.romaji}</strong></td>
                    <td>${q.mean || '-'}</td>
                    <td><span style="font-size:0.75rem; padding:3px 10px; border-radius:12px; background:#EFF6FF; color:#1D4ED8; font-weight:700;">${q.mode || 'Semua'}</span></td>
                    <td style="text-align:center;">
                      <button type="button" class="btn-preset" style="padding:4px 8px; font-size:0.78rem;" onclick="editAdminGameQuestion('${q.id}')">Edit</button>
                      <button type="button" class="btn-preset" style="padding:4px 8px; font-size:0.78rem; color:#DC2626; border-color:#FECACA;" onclick="deleteAdminGameQuestion('${q.id}')">Hapus</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    function saveAdminGameDuration() {
      const input = document.getElementById('admin-game-duration-input');
      if (!input) return;
      const sec = parseInt(input.value, 10);
      if (isNaN(sec) || sec < 5) {
        alert('Masukkan durasi detik yang valid (minimal 5 detik).');
        return;
      }
      GameConfigManager.setDuration(currentAdminGame, sec);
      alert(`Durasi waktu bermain untuk ${currentAdminGame} berhasil disimpan: ${sec} detik!`);
      renderAdminGameView();
    }

    function openAddSubModeModal() {
      const targetInput = document.getElementById('submode-target-game');
      const idInput = document.getElementById('submode-id');
      const nameInput = document.getElementById('submode-name');
      if (targetInput) targetInput.value = currentAdminGame;
      if (idInput) idInput.value = '';
      if (nameInput) nameInput.value = '';
      openModal('modal-add-submode');
    }

    function submitAddSubMode(e) {
      e.preventDefault();
      const id = document.getElementById('submode-id').value.trim().toLowerCase().replace(/[^a-z0-9-_]/g, '-');
      const name = document.getElementById('submode-name').value.trim();
      if (!id || !name) return;

      GameConfigManager.addSubMode(currentAdminGame, { id, name, active: true });
      closeModal('modal-add-submode');
      alert(`Sub-mode "${name}" berhasil ditambahkan!`);
      renderAdminGameView();
    }

    function toggleAdminSubMode(modeId) {
      GameConfigManager.toggleSubMode(currentAdminGame, modeId);
      renderAdminGameView();
    }

    function deleteAdminSubMode(modeId) {
      if (!confirm('Hapus sub-mode ini?')) return;
      GameConfigManager.deleteSubMode(currentAdminGame, modeId);
      renderAdminGameView();
    }

    function updateSubmodeDropdownForModal() {
      const targetGame = document.getElementById('game-q-target').value;
      const subSelect = document.getElementById('game-q-submode');
      if (!subSelect) return;
      const subModes = GameConfigManager.getAllSubModes(targetGame);
      subSelect.innerHTML = subModes.map(sm => `<option value="${sm.id}">${sm.name}</option>`).join('');
    }

    function openAddGameQuestionModal() {
      document.getElementById('modal-game-q-title').textContent = 'Tambah Soal / Karakter Game';
      document.getElementById('game-q-edit-id').value = '';
      document.getElementById('game-q-target').value = currentAdminGame;
      document.getElementById('game-q-char').value = '';
      document.getElementById('game-q-romaji').value = '';
      document.getElementById('game-q-mean').value = '';
      updateSubmodeDropdownForModal();
      openModal('modal-add-game-question');
    }

    function submitAddGameQuestion(e) {
      e.preventDefault();
      const targetGame = document.getElementById('game-q-target').value;
      const editId = document.getElementById('game-q-edit-id').value;
      const submode = document.getElementById('game-q-submode').value;
      const char = document.getElementById('game-q-char').value.trim();
      const romaji = document.getElementById('game-q-romaji').value.trim();
      const mean = document.getElementById('game-q-mean').value.trim();

      if (!char || !romaji) return;

      if (editId) {
        GameConfigManager.updateQuestion(targetGame, editId, { char, romaji, mean, mode: submode });
        alert('Soal / karakter berhasil diperbarui!');
      } else {
        const newId = 'q_' + Date.now();
        GameConfigManager.addQuestion(targetGame, { id: newId, char, romaji, mean, mode: submode });
        alert('Soal / karakter baru berhasil ditambahkan ke bank soal!');
      }

      closeModal('modal-add-game-question');
      renderAdminGameView();
    }

    function editAdminGameQuestion(qId) {
      const questions = GameConfigManager.getQuestions(currentAdminGame);
      const q = questions.find(item => item.id === qId);
      if (!q) return;

      document.getElementById('modal-game-q-title').textContent = 'Edit Soal / Karakter Game';
      document.getElementById('game-q-edit-id').value = q.id;
      document.getElementById('game-q-target').value = currentAdminGame;
      updateSubmodeDropdownForModal();
      document.getElementById('game-q-submode').value = q.mode || '';
      document.getElementById('game-q-char').value = q.char || '';
      document.getElementById('game-q-romaji').value = q.romaji || '';
      document.getElementById('game-q-mean').value = q.mean || '';

      openModal('modal-add-game-question');
    }

    function deleteAdminGameQuestion(qId) {
      if (!confirm('Hapus butir soal / karakter ini dari bank game?')) return;
      GameConfigManager.deleteQuestion(currentAdminGame, qId);
      renderAdminGameView();
    }

    function loadAdminPresetKanji() {
      const presetKanji = [
        { char: '日', romaji: 'hi', mean: 'Matahari / Hari', mode: 'kanji-n5' },
        { char: '月', romaji: 'tsuki', mean: 'Bulan', mode: 'kanji-n5' },
        { char: '木', romaji: 'ki', mean: 'Pohon', mode: 'kanji-n5' },
        { char: '山', romaji: 'yama', mean: 'Gunung', mode: 'kanji-n5' },
        { char: '川', romaji: 'kawa', mean: 'Sungai', mode: 'kanji-n5' },
        { char: '田', romaji: 'ta', mean: 'Sawah', mode: 'kanji-n5' },
        { char: '人', romaji: 'hito', mean: 'Orang', mode: 'kanji-n5' },
        { char: '口', romaji: 'kuchi', mean: 'Mulut', mode: 'kanji-n5' },
        { char: '車', romaji: 'kuruma', mean: 'Mobil', mode: 'kanji-n5' },
        { char: '門', romaji: 'mon', mean: 'Gerbang', mode: 'kanji-n5' },
        { char: '火', romaji: 'hi', mean: 'Api', mode: 'kanji-n5' },
        { char: '水', romaji: 'mizu', mean: 'Air', mode: 'kanji-n5' },
        { char: '金', romaji: 'kane', mean: 'Emas / Uang', mode: 'kanji-n5' },
        { char: '土', romaji: 'tsuchi', mean: 'Tanah', mode: 'kanji-n5' },
        { char: '本', romaji: 'hon', mean: 'Buku / Asal', mode: 'kanji-n5' }
      ];

      const existingSubModes = GameConfigManager.getAllSubModes(currentAdminGame);
      if (!existingSubModes.some(m => m.id === 'kanji-n5')) {
        GameConfigManager.addSubMode(currentAdminGame, { id: 'kanji-n5', name: 'Kanji N5 Dasar (日, 月, dll.)', active: true });
      }

      presetKanji.forEach(k => {
        GameConfigManager.addQuestion(currentAdminGame, {
          id: 'k_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
          char: k.char,
          romaji: k.romaji,
          mean: k.mean,
          mode: 'kanji-n5'
        });
      });

      alert('Paket 15 Kanji N5 Dasar berhasil dimuat ke dalam bank game ' + currentAdminGame + '!');
      renderAdminGameView();
    }

    function resetAdminGameDefault() {
      if (!confirm('Kembalikan konfigurasi dan bank soal game ' + currentAdminGame + ' ke pengaturan awal bawaan?')) return;
      GameConfigManager.resetToDefault(currentAdminGame);
      alert('Pengaturan game ' + currentAdminGame + ' berhasil direset ke default.');
      renderAdminGameView();
    }
  </script>
</body>
</html>
