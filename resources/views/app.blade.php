<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="SIJapanese - Platform Edukasi Bahasa Jepang Interaktif untuk Menguasai Hiragana, Katakana, Kosakata, dan Sky Atk Defense." />
  <title>SIJapanese - Belajar Bahasa Jepang Interaktif</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@400;500;700;900&family=M+PLUS+Rounded+1c:wght@500;700;800;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/materi.css" />
  <link rel="stylesheet" href="css/auth.css" />
  <link rel="stylesheet" href="css/mobile_vibrant.css" />
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <style>
    html, body {
      background-color: #FAF6F0 !important;
      color: #2D2520;
    }
    #app {
      min-height: 100vh;
      background-color: #FAF6F0;
    }
  </style>
</head>
<body>

    <!-- ZERO-FLICKER SESSION PRELOADER (Mencegah Dashboard Muncul Singkat Saat Reload) -->
    <script>
      (function() {
        try {
          var savedPage = sessionStorage.getItem('sijapanese_active_page');
          var validPages = ['home', 'materi', 'hiragana', 'katakana', 'vocabulary', 'games', 'monster'];
          if (savedPage && savedPage !== 'home' && validPages.indexOf(savedPage) !== -1) {
            document.write('<style id="pre-active-style">#page-home { display: none !important; } #page-' + savedPage + ' { display: block !important; }</style>');
          } else {
            sessionStorage.setItem('sijapanese_active_page', 'home');
          }
        } catch(e) {}
      })();
    </script>

  <div id="app">
    <!-- TOP NAVIGATION -->
    <nav class="navbar" id="navbar">
      <div class="nav-logo" onclick="showPage('home')" style="cursor:pointer" title="Beranda SIJapanese">
        <span class="logo-crest">
          <svg viewBox="0 0 32 32" class="svg-crest">
            <circle cx="16" cy="16" r="14" fill="#BA3D27"/>
            <path d="M8 11h16M9 8v15M23 8v15M7 14h18" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </span>
        <span class="logo-text">SI<span class="logo-accent">Japanese</span></span>
      </div>

      <div class="nav-links">
        <button class="nav-btn active" data-page="home" onclick="showPage('home')">
          <svg viewBox="0 0 24 24" class="svg-icon"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <span>Beranda</span>
        </button>
        <button class="nav-btn" data-page="materi" onclick="showPage('materi')">
          <svg viewBox="0 0 24 24" class="svg-icon"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M12 6v14"/></svg>
          <span>Materi</span>
        </button>
        <button class="nav-btn" data-page="hiragana" onclick="showPage('hiragana')">
          <span class="kana-badge">あ</span>
          <span>Hiragana</span>
        </button>
        <button class="nav-btn" data-page="katakana" onclick="showPage('katakana')">
          <span class="kana-badge">ア</span>
          <span>Katakana</span>
        </button>
        <button class="nav-btn" data-page="vocabulary" onclick="showPage('vocabulary')">
          <svg viewBox="0 0 24 24" class="svg-icon"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/></svg>
          <span>Kosakata</span>
        </button>
        <button class="nav-btn" data-page="games" onclick="showPage('games')">
          <svg viewBox="0 0 24 24" class="svg-icon"><rect width="20" height="12" x="2" y="6" rx="6"/><path d="M6 12h4m-2-2v4m10-2h.01m-4 0h.01"/></svg>
          <span>Mini Games</span>
        </button>
      </div>

      <!-- Widget Profil & Auth Pengguna (Sesuai Desain KondangSensei Adaptasi) -->
      <div class="nav-user-widget" id="nav-user-widget"></div>
    </nav>

    <!-- HOME PAGE -->
    <div id="page-home" class="page active">
      <section class="hero">
        <div class="hero-bg">
          <div class="sakura-container" id="sakura-container"></div>
          <div class="hero-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
          </div>
        </div>

        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            <span>Platform Belajar Bahasa Jepang Interaktif</span>
          </div>

          <h1 class="hero-title">
            Kuasai Bahasa Jepang<br/>
            <span class="hero-title-jp">日本語</span> dengan Cepat &amp; Presisi
          </h1>

          <p class="hero-subtitle">
            Pelajari 104 Hiragana &amp; 104 Katakana (Aksara Dasar, Tenten, Maru, &amp; Gabungan Yōon), serta kosakata penting melalui visual terstruktur dan pelafalan asli.
          </p>

          <div class="hero-cta">
            <button class="btn-primary" onclick="showPage('materi')">
              <svg viewBox="0 0 24 24" class="svg-icon"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              <span>Mulai Belajar (Materi &amp; Komik)</span>
              <svg viewBox="0 0 24 24" class="svg-icon-arrow"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
            <button class="btn-secondary" onclick="showPage('games')">
              <svg viewBox="0 0 24 24" class="svg-icon"><rect width="20" height="12" x="2" y="6" rx="6"/><path d="M6 12h4m-2-2v4m10-2h.01m-4 0h.01"/></svg>
              <span>Mini Games</span>
            </button>
          </div>

          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">104</span>
              <span class="stat-label">Aksara Hiragana</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">104</span>
              <span class="stat-label">Aksara Katakana</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">100+</span>
              <span class="stat-label">Kosakata Praktis</span>
            </div>
          </div>
        </div>

        <div class="hero-visual">
          <div class="floating-cards" id="hero-floating-cards">
            <div class="float-card card-a" data-kana="あ" style="--delay:0s"><span class="card-jp">あ</span><span class="card-ro">a</span></div>
            <div class="float-card card-b" data-kana="か" style="--delay:0.5s"><span class="card-jp">か</span><span class="card-ro">ka</span></div>
            <div class="float-card card-c" data-kana="さ" style="--delay:1s"><span class="card-jp">さ</span><span class="card-ro">sa</span></div>
            <div class="float-card card-d" data-kana="ア" style="--delay:1.5s"><span class="card-jp">ア</span><span class="card-ro">a</span></div>
            <div class="float-card card-e" data-kana="な" style="--delay:0.3s"><span class="card-jp">な</span><span class="card-ro">na</span></div>
          </div>
          <div class="hero-mascot-art" onclick="speakJapanese('にほんご')" title="SIJapanese - にほんご" style="cursor:pointer">
            <svg class="mascot-emblem-svg" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="54" fill="#C82333" opacity="0.95"/>
              <circle cx="60" cy="60" r="46" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.6"/>
              <!-- Torii Gate Silhouette -->
              <path d="M30 46Q60 41 90 46" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" fill="none"/>
              <line x1="36" y1="52" x2="84" y2="52" stroke="#FFFFFF" stroke-width="2.5"/>
              <line x1="42" y1="46" x2="42" y2="86" stroke="#FFFFFF" stroke-width="3.5"/>
              <line x1="78" y1="46" x2="78" y2="86" stroke="#FFFFFF" stroke-width="3.5"/>
              <rect x="55" y="47" width="10" height="9" fill="#FFFFFF"/>
              <!-- Sun / Cloud Accent -->
              <path d="M26 86h68" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
            </svg>
          </div>
        </div>
      </section>

      <!-- MODULES SECTION -->
      <section class="features-section">
        <div class="section-header">
          <span class="section-tag">KURIKULUM PEMBELAJARAN</span>
          <h2>Modul &amp; Materi Pembelajaran</h2>
          <p>Pilih materi dasar atau latihan bertahap sesuai kemampuanmu</p>
        </div>

        <div class="feature-cards">
          <div class="feature-card card-orange" onclick="showPage('materi')">
            <div class="feature-header-row">
              <div class="feature-icon-wrap" style="background:var(--red-pale); color:var(--red);">
                <svg viewBox="0 0 24 24" class="svg-icon-large"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M12 6v14"/></svg>
              </div>
              <div class="feature-badge" style="background:#FEE2E2; color:#991B1B;">Cerita Komik + Quest</div>
            </div>
            <h3>Materi &amp; Petualangan Kenji</h3>
            <p>Kurikulum interaktif sekolah dengan komik cerita berwarna, pelafalan audio asli, kupas kalimat, dan quest latihan.</p>
            <div class="feature-footer">
              <span>Mulai Belajar</span>
              <svg viewBox="0 0 24 24" class="svg-icon-mini"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
          </div>
          <div class="feature-card card-red" onclick="showPage('hiragana')">
            <div class="feature-header-row">
              <div class="feature-icon-wrap red-icon">
                <span class="feature-kana">ひ</span>
              </div>
              <div class="feature-badge red-badge">104 Aksara</div>
            </div>
            <h3>Hiragana (ひらがな)</h3>
            <p>Aksara fonetik lengkap: 46 huruf dasar, 20 tenten (dakuon), 5 maru (handakuon), &amp; 33 gabungan (yōon).</p>
            <div class="feature-footer">
              <span>Buka Modul</span>
              <svg viewBox="0 0 24 24" class="svg-icon-mini"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
          </div>

          <div class="feature-card card-blue" onclick="showPage('katakana')">
            <div class="feature-header-row">
              <div class="feature-icon-wrap blue-icon">
                <span class="feature-kana">カ</span>
              </div>
              <div class="feature-badge blue-badge">104 Aksara</div>
            </div>
            <h3>Katakana (カタカナ)</h3>
            <p>Aksara serapan lengkap: 46 huruf dasar, 20 tenten (dakuon), 5 maru (handakuon), &amp; 33 gabungan (yōon).</p>
            <div class="feature-footer">
              <span>Buka Modul</span>
              <svg viewBox="0 0 24 24" class="svg-icon-mini"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
          </div>

          <div class="feature-card card-yellow" onclick="showPage('vocabulary')">
            <div class="feature-header-row">
              <div class="feature-icon-wrap yellow-icon">
                <svg viewBox="0 0 24 24" class="svg-icon-large"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/></svg>
              </div>
              <div class="feature-badge yellow-badge">100+ Kosakata</div>
            </div>
            <h3>Kosakata Praktis (単語)</h3>
            <p>Pelajari kosakata sehari-hari: angka, warna, anggota keluarga, kuliner, dan ungkapan salam.</p>
            <div class="feature-footer">
              <span>Buka Modul</span>
              <svg viewBox="0 0 24 24" class="svg-icon-mini"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
          </div>

          <div class="feature-card card-green" onclick="showPage('games')">
            <div class="feature-header-row">
              <div class="feature-icon-wrap green-icon">
                <svg viewBox="0 0 24 24" class="svg-icon-large"><rect width="20" height="12" x="2" y="6" rx="6"/><path d="M6 12h4m-2-2v4m10-2h.01m-4 0h.01"/></svg>
              </div>
              <div class="feature-badge green-badge">6 Game Edukasi</div>
            </div>
            <h3>Mini Games &amp; Arcade</h3>
            <p>Uji refleks hafalan melalui Kana Blast (Turret Blaster), Sky Atk Defense, Flash Card, Memory Match, Speed Quiz, dan Word Builder.</p>
            <div class="feature-footer">
              <span>Buka Mini Games</span>
              <svg viewBox="0 0 24 24" class="svg-icon-mini"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
          </div>
        </div>
      </section>

      <!-- PROGRESS SECTION -->
      <section class="progress-section">
        <div class="section-header">
          <span class="section-tag">PENCAPAIAN PRIBADI</span>
          <h2>Pantauan Kemajuan Belajar</h2>
          <p>Lacak hafalan aksara dan perolehan poin yang telah kamu selesaikan</p>
        </div>

        <div class="progress-cards">
          <div class="progress-card">
            <div class="progress-label">
              <div class="progress-title-wrap">
                <span class="progress-dot red-dot"></span>
                <span class="progress-name">Hiragana Dikuasai</span>
              </div>
              <span id="hiragana-progress-text" class="progress-count">0 / 104</span>
            </div>
            <div class="progress-bar-wrap">
              <div class="progress-bar red" id="hiragana-progress-bar" style="width:0%"></div>
            </div>
          </div>

          <div class="progress-card">
            <div class="progress-label">
              <div class="progress-title-wrap">
                <span class="progress-dot blue-dot"></span>
                <span class="progress-name">Katakana Dikuasai</span>
              </div>
              <span id="katakana-progress-text" class="progress-count">0 / 104</span>
            </div>
            <div class="progress-bar-wrap">
              <div class="progress-bar blue" id="katakana-progress-bar" style="width:0%"></div>
            </div>
          </div>

          <div class="progress-card">
            <div class="progress-label">
              <div class="progress-title-wrap">
                <span class="progress-dot yellow-dot"></span>
                <span class="progress-name">Kosakata Dikuasai</span>
              </div>
              <span id="vocab-progress-text" class="progress-count">0 / 50</span>
            </div>
            <div class="progress-bar-wrap">
              <div class="progress-bar yellow" id="vocab-progress-bar" style="width:0%"></div>
            </div>
          </div>

          <div class="progress-card">
            <div class="progress-label">
              <div class="progress-title-wrap">
                <span class="progress-dot green-dot"></span>
                <span class="progress-name">Mini Games &amp; Arcade</span>
              </div>
              <span id="games-progress-text" class="progress-count">Rekor: Sky Atk (0 Poin) | Blast (0 Poin)</span>
            </div>
            <div class="progress-bar-wrap">
              <div class="progress-bar green" id="games-progress-bar" style="width:0%"></div>
            </div>
          </div>
        </div>

        </section>
    </div>

    <!-- HIRAGANA PAGE -->
    <div id="page-hiragana" class="page">
      <div class="page-header red-header">
        <div class="page-header-content">
          <button class="back-btn" onclick="handleKanaBack('hiragana')">
            <svg viewBox="0 0 24 24" class="svg-icon-mini"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            <span>Kembali</span>
          </button>
          <div class="page-title-wrap">
            <h1>ひらがな <span class="sub-title">Hiragana</span></h1>
            <p>104 Aksara Lengkap: Dasar, Tenten (濁音), Maru (半濁音), &amp; Gabungan (拗音)</p>
          </div>
          <div class="page-mode-toggle">
            <button class="mode-btn active" id="hiragana-mode-learn" onclick="setMode('hiragana','learn')">
              <svg viewBox="0 0 24 24" class="svg-icon-mini"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              <span>Belajar</span>
            </button>
            <button class="mode-btn" id="hiragana-mode-quiz" onclick="setMode('hiragana','quiz')">
              <svg viewBox="0 0 24 24" class="svg-icon-mini"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              <span>Kuis</span>
            </button>
            <button class="mode-btn" id="hiragana-romaji-toggle" onclick="toggleRomajiVisibility('hiragana')" title="Sembunyikan/Tampilkan Romaji untuk Hafalan">
              <svg viewBox="0 0 24 24" class="svg-icon-mini"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              <span id="hiragana-romaji-label">Romaji: ON</span>
            </button>
          </div>
        </div>
      </div>
      <div id="hiragana-learn-mode" class="char-grid-container"></div>
      <div id="hiragana-quiz-mode" class="quiz-container hidden">
        <div class="quiz-card-wrap" id="hiragana-quiz-wrap"></div>
      </div>
    </div>

    <!-- KATAKANA PAGE -->
    <div id="page-katakana" class="page">
      <div class="page-header blue-header">
        <div class="page-header-content">
          <button class="back-btn" onclick="handleKanaBack('katakana')">
            <svg viewBox="0 0 24 24" class="svg-icon-mini"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            <span>Kembali</span>
          </button>
          <div class="page-title-wrap">
            <h1>カタカナ <span class="sub-title">Katakana</span></h1>
            <p>104 Aksara Lengkap: Dasar, Tenten (濁音), Maru (半濁音), &amp; Gabungan (拗音)</p>
          </div>
          <div class="page-mode-toggle">
            <button class="mode-btn active" id="katakana-mode-learn" onclick="setMode('katakana','learn')">
              <svg viewBox="0 0 24 24" class="svg-icon-mini"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              <span>Belajar</span>
            </button>
            <button class="mode-btn" id="katakana-mode-quiz" onclick="setMode('katakana','quiz')">
              <svg viewBox="0 0 24 24" class="svg-icon-mini"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              <span>Kuis</span>
            </button>
            <button class="mode-btn" id="katakana-romaji-toggle" onclick="toggleRomajiVisibility('katakana')" title="Sembunyikan/Tampilkan Romaji untuk Hafalan">
              <svg viewBox="0 0 24 24" class="svg-icon-mini"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              <span id="katakana-romaji-label">Romaji: ON</span>
            </button>
          </div>
        </div>
      </div>
      <div id="katakana-learn-mode" class="char-grid-container"></div>
      <div id="katakana-quiz-mode" class="quiz-container hidden">
        <div class="quiz-card-wrap" id="katakana-quiz-wrap"></div>
      </div>
    </div>

    <!-- VOCABULARY PAGE -->
    <div id="page-vocabulary" class="page">
      <div class="page-header yellow-header">
        <div class="page-header-content">
          <button class="back-btn" onclick="showPage('home')">
            <svg viewBox="0 0 24 24" class="svg-icon-mini"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            <span>Kembali</span>
          </button>
          <div class="page-title-wrap">
            <h1>単語集 <span class="sub-title">Kosakata Bahasa Jepang</span></h1>
            <p>Kumpulan Kosakata Tematik Praktis Sehari-hari dengan Audio</p>
          </div>
        </div>
      </div>

      <div class="vocab-tabs">
        <button class="tab-btn active" id="tab-numbers" onclick="showVocabCategory('numbers')">
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/></svg>
          <span>Angka (数字)</span>
        </button>
        <button class="tab-btn" id="tab-colors" onclick="showVocabCategory('colors')">
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2Z"/></svg>
          <span>Warna (色)</span>
        </button>
        <button class="tab-btn" id="tab-family" onclick="showVocabCategory('family')">
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          <span>Keluarga (家族)</span>
        </button>
        <button class="tab-btn" id="tab-food" onclick="showVocabCategory('food')">
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><path d="M18 10h-1.26A8 8 0 1 0 4 10H3a1 1 0 0 0-1 1 9 9 0 0 0 9 9v1H7v2h10v-2h-4v-1a9 9 0 0 0 9-9 1 1 0 0 0-1-1Z"/><path d="M7 6c1 1.5 1 2.5 1 4m4-4c1 1.5 1 2.5 1 4m4-4c1 1.5 1 2.5 1 4"/></svg>
          <span>Makanan (食べ物)</span>
        </button>
        <button class="tab-btn" id="tab-greetings" onclick="showVocabCategory('greetings')">
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span>Sapaan (挨拶)</span>
        </button>
      </div>

      <div class="vocab-grid" id="vocab-grid"></div>
    </div>

    <!-- MATERI & STORY LEARNING PAGE -->
    <div id="page-materi" class="page">
      <div class="materi-page-container">

        <!-- 1. CATALOG / CURRICULUM VIEW -->
        <div id="materi-catalog-view" class="materi-catalog-view">
          <!-- Hero Banner Berwarna Orisinal -->
          <div class="materi-hero-banner">
            <div class="materi-banner-inner">
              <div class="materi-banner-text">
                <div class="materi-banner-badges">
                  <span class="badge-pill-brand"> MODUL INTERAKTIF</span>
                  <span class="badge-pill-sub">Kurikulum Siswa Terstruktur</span>
                </div>
                <h1 class="materi-banner-title">
                  <span class="materi-banner-jp">さくらクエスト</span><br/>
                  Petualangan Kenji &amp; Kiko
                </h1>
                <p class="materi-banner-desc">
                  Pelajari bahasa Jepang langkah demi langkah lewat komik cerita visual, pelafalan audio penutur asli, kupas tuntas kalimat, dan tantangan quest kuis berhadiah poin!
                </p>
                <div class="materi-banner-cast">
                  <div class="materi-cast-chip">
                    <span class="materi-cast-avatar-box" style="background:#DBEAFE;"></span>
                    <span>Kenji (Siswa)</span>
                  </div>
                  <div class="materi-cast-chip">
                    <span class="materi-cast-avatar-box" style="background:#DCFCE7;"></span>
                    <span>Kiko (Pemandu)</span>
                  </div>
                  <div class="materi-cast-chip">
                    <span class="materi-cast-avatar-box" style="background:#FEE2E2;"></span>
                    <span>Sensei Tanaka</span>
                  </div>
                </div>
              </div>
              <div class="materi-hero-artwork">
                <svg viewBox="0 0 200 160" style="width:100%;height:100%;">
                  <defs>
                    <linearGradient id="sakuraBrandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#FEE2E2"/>
                      <stop offset="50%" stop-color="#DBEAFE"/>
                      <stop offset="100%" stop-color="#DCFCE7"/>
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="80" r="70" fill="url(#sakuraBrandGrad)" opacity="0.6"/>
                  <!-- Torii Gate Silhouette -->
                  <rect x="70" y="38" width="60" height="7" rx="3" fill="#D9383A"/>
                  <rect x="65" y="32" width="70" height="6" rx="2" fill="#D9383A"/>
                  <line x1="78" y1="38" x2="78" y2="100" stroke="#D9383A" stroke-width="5" stroke-linecap="round"/>
                  <line x1="122" y1="38" x2="122" y2="100" stroke="#D9383A" stroke-width="5" stroke-linecap="round"/>
                  <!-- Mascot Character Emblem -->
                  <circle cx="100" cy="95" r="30" fill="#2563EB" stroke="#1E3A8A" stroke-width="2.5"/>
                  <circle cx="100" cy="95" r="24" fill="#FFFFFF"/>
                  <text x="100" y="103" font-size="20" font-family="'Noto Sans JP', sans-serif" font-weight="900" fill="#D9383A" text-anchor="middle">日</text>
                  <!-- Cherry Blossom Petals -->
                  <circle cx="50" cy="50" r="6" fill="#F472B6" opacity="0.8"/>
                  <circle cx="155" cy="65" r="7" fill="#F472B6" opacity="0.8"/>
                  <circle cx="140" cy="120" r="5" fill="#F472B6" opacity="0.8"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- MISI UTAMA: HIRAGANA, KATAKANA & PERCAKAPAN LIBURAN KE JEPANG -->
          <div class="materi-mission-card">
            <div class="mission-text-wrap">
              <span class="mission-tag">Misi Belajar Utama</span>
              <h3 class="mission-title">Kuasai Hiragana, Katakana &amp; Percakapan Praktis Liburan ke Jepang!</h3>
              <p class="mission-desc">Dirancang khusus agar Anda fasih membaca menu, papan stasiun, belanja di konbini, dan memesan makanan langsung ke orang Jepang dengan percaya diri.</p>
            </div>
            <div class="mission-actions-row">
              <button class="btn-mission-shortcut shortcut-hira" onclick="showPage('hiragana')">
                <span>あ</span>
                <span>Latihan Hiragana (104 Aksara)</span>
              </button>
              <button class="btn-mission-shortcut shortcut-kata" onclick="showPage('katakana')">
                <span>ア</span>
                <span>Latihan Katakana (104 Aksara)</span>
              </button>
              <button class="btn-mission-shortcut shortcut-travel" onclick="selectLevelTab('n5')">
                <span></span>
                <span>Modul Wisata N5 &amp; N4</span>
              </button>
            </div>
          </div>

          <!-- Level Tabs Berwarna (Dinamis dari SQLite & Master Dashboard) -->
          <div class="materi-level-nav" id="materi-level-nav">
            <button class="materi-level-btn lvl-n5 active">
              <span class="lvl-name">N5 Dasar</span>
              <span class="lvl-sub">Fondasi &amp; Aksara</span>
            </button>
            <button class="materi-level-btn lvl-n4">
              <span class="lvl-name">N4 Percakapan</span>
              <span class="lvl-sub">Situasi Sehari-hari</span>
            </button>
            <button class="materi-level-btn lvl-n3">
              <span class="lvl-name">N3 Menengah</span>
              <span class="lvl-sub">Pemahaman Konteks</span>
            </button>
            <button class="materi-level-btn lvl-n2">
              <span class="lvl-name">N2 Lanjutan</span>
              <span class="lvl-sub">Bahasa Formal</span>
            </button>
            <button class="materi-level-btn lvl-n1">
              <span class="lvl-name">N1 Mahir</span>
              <span class="lvl-sub">Kelancaran Total</span>
            </button>
          </div>

          <!-- Lessons List -->
          <div class="materi-lesson-list" id="materi-lesson-items">
            <!-- Populated dynamically by js/materi.js -->
          </div>
        </div>

        <!-- 2. DETAIL LESSON VIEW (STEPPER) -->
        <div id="materi-lesson-view" class="materi-lesson-view">
          <!-- Top Navigation Header -->
          <div class="lesson-nav-top">
            <button class="btn-back-catalog" onclick="closeLessonToCatalog()" title="Kembali ke Daftar Modul">
              <svg viewBox="0 0 24 24" class="svg-icon-mini"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              <span>Daftar Modul</span>
            </button>

            <div class="lesson-top-title">
              <span id="lesson-top-title-text">Pelajaran 1: Misteri 3 Aksara (Kanji, Hiragana, &amp; Katakana)</span>
            </div>
          </div>

          <!-- Stepper Tab Bar (Card Concept Sesuai Desain Referensi) -->
          <div class="lesson-stepper-bar">
            <button type="button" class="step-btn active" data-step="mulai" onclick="setLessonStep('mulai')">
              <span class="step-badge">Langkah 1</span>
              <span class="step-title">Pengantar</span>
            </button>
            <button type="button" class="step-btn" data-step="komik" onclick="setLessonStep('komik')">
              <span class="step-badge">Langkah 2</span>
              <span class="step-title">Komik Cerita</span>
            </button>
            <button type="button" class="step-btn" data-step="huruf" onclick="setLessonStep('huruf')">
              <span class="step-badge">Langkah 3</span>
              <span class="step-title">3 Aksara</span>
            </button>
            <button type="button" class="step-btn" data-step="kalimat" onclick="setLessonStep('kalimat')">
              <span class="step-badge">Langkah 4</span>
              <span class="step-title">Bedah Kalimat</span>
            </button>
            <button type="button" class="step-btn" data-step="romaji" onclick="setLessonStep('romaji')">
              <span class="step-badge">Langkah 5</span>
              <span class="step-title">Huruf Romaji</span>
            </button>
            <button type="button" class="step-btn" data-step="kuis" onclick="setLessonStep('kuis')">
              <span class="step-badge">Langkah 6</span>
              <span class="step-title">Quest Kuis</span>
            </button>
          </div>

          <!-- STEP 1: MULAI -->
          <div class="lesson-step-content active" id="step-content-mulai">
            <div class="badge-pill-brand" style="margin-bottom:0.8rem;">N5 • Pelajaran 1 • Pengantar Pemula</div>
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:1.5rem; margin-bottom:1.5rem; flex-wrap:wrap;">
              <div>
                <h2 style="font-size:1.85rem; font-weight:800; color:var(--text); line-height:1.25; margin-bottom:0.4rem;">
                  Selamat Datang di Jepang! Pengantar Bahasa, Budaya &amp; Sopan Santun (Aisatsu)
                </h2>
                <p style="color:var(--text-soft); font-size:1.02rem; line-height:1.5; max-width:680px;">
                  Jepang adalah negeri yang memadukan keindahan tradisi kuno dengan teknologi modern. Di modul pengantar awal ini, kita akan mempelajari pengetahuan umum tentang Jepang, etika salam dasar, dan memahami gambaran besar 3 jenis tulisan Jepang sebelum belajar membaca.
                </p>
              </div>
              <div class="reward-tag-pill" style="background:#FFFBEB; border:1.5px solid #FDE68A; padding:0.6rem 1rem; border-radius:12px; display:inline-flex; align-items:center; gap:0.5rem; color:#B45309; font-weight:700;">
                <span>Reward Selesai: +50 Poin</span>
              </div>
            </div>

            <div class="intro-dialog-card" style="background:var(--card); border:1.5px solid var(--border); border-radius:18px; padding:1.4rem; box-shadow:var(--shadow-sm); margin-bottom:2rem;">
              <div style="display:flex; gap:1.2rem; align-items:center;">
                <img src="img/avatar_tanaka.svg" style="width:52px; height:52px; border-radius:50%; border:2px solid #2563EB; flex-shrink:0;" alt="Sensei Tanaka" />
                <div>
                  <h4 style="font-size:1.02rem; font-weight:800; color:var(--text); margin-bottom:0.25rem;">Petunjuk dari Sensei Tanaka &amp; Kiko:</h4>
                  <p style="font-size:0.92rem; color:var(--text-soft); line-height:1.5;">
                    Konnichiwa, Kenji! Selamat datang di Jepang! Sebagai langkah awal pemula, kita berkenalan dulu dengan kebudayaan Jepang, etika dasar, serta 3 aksara tulisan. Kita fokus dulu memahami fondasi Hiragana &amp; Katakana. Untuk Kanji, cukup ketahui fungsinya sebagai lambang makna, nanti akan kita pelajari bertahap di akhir modul!
                  </p>
                </div>
              </div>
            </div>

            <div class="step-bottom-nav">
              <div></div>
              <button type="button" class="btn-step-next" onclick="setLessonStep('komik')">
                <span>Lanjut ke Langkah 2: Komik Cerita </span>
                <svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>

          <!-- STEP 2: KOMIK CERITA (SEDERHANA & BERSIH) -->
          <div class="lesson-step-content" id="step-content-komik">
            <div class="manga-book-container">
              <!-- Manga Header Sederhana -->
              <div class="manga-book-header" style="margin-bottom:1.2rem; padding-bottom:0.8rem;">
                <div class="manga-title-wrap">
                  <span class="manga-badge-brand">Langkah 2 • Komik</span>
                  <h2>Pengalaman Pertama Kenji di Jepang</h2>
                </div>
              </div>

              <!-- 4-Panel Manga Strip List (Bersih & Fokus pada Gambar) -->
              <div class="manga-panel-list">

                <!-- PANEL 1: KEDATANGAN DI TOKYO -->
                <div class="manga-panel-item">
                  <div class="manga-panel-topbar bar-station">
                    <span class="manga-panel-tag">Panel 1</span>
                    <span>Pertama kali Kenji ke Jepang...</span>
                  </div>
                  <div class="manga-panel-art-wrap">
                    <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="p1Sky" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stop-color="#38BDF8"/>
                          <stop offset="60%" stop-color="#BAE6FD"/>
                          <stop offset="100%" stop-color="#F0F9FF"/>
                        </linearGradient>
                        <linearGradient id="p1Building" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stop-color="#FEF3C7"/>
                          <stop offset="100%" stop-color="#FDE68A"/>
                        </linearGradient>
                        <linearGradient id="p1Jihanki" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stop-color="#3B82F6"/>
                          <stop offset="100%" stop-color="#1D4ED8"/>
                        </linearGradient>
                        <linearGradient id="p1Blossom" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stop-color="#F472B6"/>
                          <stop offset="100%" stop-color="#FDA4AF"/>
                        </linearGradient>
                        <linearGradient id="p1Suitcase" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stop-color="#94A3B8"/>
                          <stop offset="100%" stop-color="#475569"/>
                        </linearGradient>
                      </defs>

                      <!-- Sky Background -->
                      <rect width="700" height="240" fill="url(#p1Sky)"/>

                      <!-- Tokyo Tower & Distant Skyline -->
                      <path d="M520 220 L532 110 L534 110 L546 220 Z" fill="#FDA4AF" opacity="0.6"/>
                      <line x1="533" y1="110" x2="533" y2="85" stroke="#F43F5E" stroke-width="2" opacity="0.7"/>
                      <rect x="470" y="150" width="35" height="70" fill="#CBD5E1" opacity="0.5"/>
                      <rect x="560" y="160" width="45" height="60" fill="#CBD5E1" opacity="0.5"/>

                      <!-- Clouds -->
                      <ellipse cx="160" cy="65" rx="55" ry="20" fill="#FFFFFF" opacity="0.9"/>
                      <ellipse cx="190" cy="55" rx="40" ry="22" fill="#FFFFFF" opacity="0.9"/>
                      <ellipse cx="420" cy="80" rx="65" ry="22" fill="#FFFFFF" opacity="0.85"/>
                      <ellipse cx="460" cy="70" rx="45" ry="24" fill="#FFFFFF" opacity="0.85"/>

                      <!-- Japanese Houses & Stores Background -->
                      <rect x="0" y="110" width="180" height="110" fill="#F1F5F9"/>
                      <polygon points="-10,110 90,70 190,110" fill="#334155"/>
                      <rect x="25" y="130" width="55" height="50" fill="#FEF08A" stroke="#78350F" stroke-width="2"/>
                      <line x1="52" y1="130" x2="52" y2="180" stroke="#78350F" stroke-width="2"/>
                      <line x1="25" y1="155" x2="80" y2="155" stroke="#78350F" stroke-width="2"/>

                      <rect x="180" y="125" width="220" height="95" fill="url(#p1Building)"/>
                      <polygon points="170,125 290,92 410,125" fill="#1E293B"/>
                      <rect x="200" y="145" width="80" height="75" fill="#FFFFFF" stroke="#9A3412" stroke-width="2"/>
                      <line x1="240" y1="145" x2="240" y2="220" stroke="#9A3412" stroke-width="2"/>
                      <rect x="300" y="145" width="75" height="55" fill="#FEF08A" stroke="#9A3412" stroke-width="2"/>

                      <rect x="400" y="115" width="300" height="105" fill="#E2E8F0"/>
                      <polygon points="390,115 550,80 710,115" fill="#475569"/>

                      <!-- Telephone Pole (Denchu) with Wires -->
                      <rect x="155" y="40" width="8" height="180" fill="#64748B"/>
                      <rect x="140" y="60" width="38" height="5" fill="#475569"/>
                      <rect x="145" y="80" width="28" height="4" fill="#475569"/>
                      <path d="M-20 62 Q155 75 350 64 T720 70" fill="none" stroke="#334155" stroke-width="1.8"/>
                      <path d="M-20 82 Q155 95 400 85 T720 90" fill="none" stroke="#334155" stroke-width="1.4"/>

                      <!-- Street & Sidewalk Ground -->
                      <rect x="0" y="220" width="700" height="140" fill="#94A3B8"/>
                      <rect x="0" y="220" width="700" height="25" fill="#CBD5E1"/>
                      <line x1="0" y1="245" x2="700" y2="245" stroke="#64748B" stroke-width="3"/>
                      <rect x="0" y="238" width="700" height="5" fill="#F59E0B"/>

                      <!-- Vending Machine (Jihanki) on Right -->
                      <rect x="580" y="130" width="65" height="105" rx="5" fill="url(#p1Jihanki)" stroke="#1E3A8A" stroke-width="2"/>
                      <rect x="588" y="140" width="49" height="35" rx="3" fill="#FFFFFF"/>
                      <circle cx="595" cy="150" r="4" fill="#EF4444"/>
                      <circle cx="605" cy="150" r="4" fill="#10B981"/>
                      <circle cx="615" cy="150" r="4" fill="#F59E0B"/>
                      <circle cx="625" cy="150" r="4" fill="#3B82F6"/>
                      <circle cx="595" cy="165" r="4" fill="#8B5CF6"/>
                      <circle cx="605" cy="165" r="4" fill="#06B6D4"/>
                      <circle cx="615" cy="165" r="4" fill="#EC4899"/>
                      <circle cx="625" cy="165" r="4" fill="#10B981"/>
                      <rect x="592" y="205" width="41" height="20" rx="3" fill="#1E293B"/>

                      <!-- Parked City Bicycle -->
                      <circle cx="510" cy="235" r="18" fill="none" stroke="#334155" stroke-width="2.5"/>
                      <circle cx="550" cy="235" r="18" fill="none" stroke="#334155" stroke-width="2.5"/>
                      <path d="M510 235 L530 235 L545 215 L525 215 Z" fill="none" stroke="#0284C7" stroke-width="3"/>
                      <line x1="545" y1="215" x2="550" y2="235" stroke="#0284C7" stroke-width="3"/>
                      <line x1="525" y1="215" x2="520" y2="205" stroke="#334155" stroke-width="3"/>
                      <line x1="515" y1="205" x2="525" y2="205" stroke="#1E293B" stroke-width="4"/>
                      <rect x="546" y="205" width="12" height="10" fill="#E2E8F0" stroke="#475569" stroke-width="1.5"/>

                      <!-- Cherry Blossom Tree on Left -->
                      <path d="M-20 235 Q30 180 50 100 Q60 50 90 20" fill="none" stroke="#78350F" stroke-width="16" stroke-linecap="round"/>
                      <path d="M45 130 Q80 110 110 80" fill="none" stroke="#78350F" stroke-width="8" stroke-linecap="round"/>
                      <circle cx="70" cy="35" r="28" fill="url(#p1Blossom)"/>
                      <circle cx="105" cy="45" r="32" fill="url(#p1Blossom)"/>
                      <circle cx="50" cy="70" r="26" fill="url(#p1Blossom)"/>
                      <circle cx="120" cy="85" r="24" fill="url(#p1Blossom)"/>
                      <circle cx="85" cy="65" r="30" fill="#FBCFE8"/>
                      <!-- Drifting Sakura Petals -->
                      <path d="M140 100 Q150 95 155 105 Q145 115 140 100 Z" fill="#F472B6"/>
                      <path d="M220 120 Q230 115 235 125 Q225 135 220 120 Z" fill="#F472B6"/>
                      <path d="M320 90 Q330 85 335 95 Q325 105 320 90 Z" fill="#FDA4AF"/>

                      <!-- Kenji Character -->
                      <ellipse cx="330" cy="335" rx="42" ry="10" fill="#475569" opacity="0.4"/>
                      <ellipse cx="400" cy="338" rx="22" ry="7" fill="#475569" opacity="0.4"/>

                      <!-- Trolley Suitcase -->
                      <rect x="385" y="270" width="34" height="58" rx="6" fill="url(#p1Suitcase)" stroke="#1E293B" stroke-width="2"/>
                      <line x1="392" y1="270" x2="392" y2="320" stroke="#CBD5E1" stroke-width="2"/>
                      <line x1="412" y1="270" x2="412" y2="320" stroke="#CBD5E1" stroke-width="2"/>
                      <path d="M397 270 L397 235 L407 235 L407 270" fill="none" stroke="#1E293B" stroke-width="3"/>
                      <rect x="394" y="232" width="16" height="5" rx="2" fill="#D9383A"/>
                      <circle cx="392" cy="330" r="5" fill="#1E293B"/>
                      <circle cx="412" cy="330" r="5" fill="#1E293B"/>

                      <!-- Kenji Body -->
                      <rect x="296" y="222" width="22" height="38" rx="8" fill="#B45309" stroke="#78350F" stroke-width="2"/>
                      <path d="M318 275 L310 325 L325 330" fill="none" stroke="#1E3A8A" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M336 275 L346 322 L360 326" fill="none" stroke="#1E3A8A" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
                      <ellipse cx="320" cy="330" rx="12" ry="6" fill="#EF4444"/>
                      <ellipse cx="355" cy="326" rx="12" ry="6" fill="#EF4444"/>

                      <rect x="312" y="215" width="34" height="65" rx="8" fill="#3B82F6" stroke="#1E3A8A" stroke-width="2"/>
                      <polygon points="324,215 334,215 331,250 327,250" fill="#FFFFFF"/>
                      <path d="M320 215 Q318 240 322 265" fill="none" stroke="#B45309" stroke-width="4"/>

                      <path d="M340 225 Q375 235 397 235" fill="none" stroke="#FFEDD5" stroke-width="8" stroke-linecap="round"/>
                      <path d="M315 225 Q295 240 305 260" fill="none" stroke="#FFEDD5" stroke-width="8" stroke-linecap="round"/>

                      <circle cx="332" cy="185" r="24" fill="#FFEDD5"/>
                      <ellipse cx="318" cy="192" rx="4" ry="2" fill="#FDA4AF"/>
                      <ellipse cx="344" cy="192" rx="4" ry="2" fill="#FDA4AF"/>
                      <ellipse cx="322" cy="182" rx="3.5" ry="5.5" fill="#1E293B"/>
                      <circle cx="323" cy="180" r="1.5" fill="#FFFFFF"/>
                      <ellipse cx="342" cy="182" rx="3.5" ry="5.5" fill="#1E293B"/>
                      <circle cx="343" cy="180" r="1.5" fill="#FFFFFF"/>
                      <path d="M328 193 Q332 201 336 193 Z" fill="#EF4444"/>

                      <path d="M310 180 Q305 160 328 158 Q355 158 355 180 Q350 166 332 168 Q315 168 310 180 Z" fill="#78350F"/>
                      <path d="M312 170 Q332 150 352 170 Z" fill="#DC2626"/>
                      <path d="M348 168 Q368 165 372 173 Q355 174 348 168 Z" fill="#991B1B"/>

                      <!-- COMIC SPEECH BUBBLE (SINGKAT & JELAS) -->
                      <g transform="translate(190, 20)">
                        <rect x="0" y="0" width="220" height="52" rx="12" fill="#FFFFFF" stroke="#1E293B" stroke-width="2.5"/>
                        <polygon points="120,52 130,64 138,52" fill="#FFFFFF"/>
                        <polyline points="120,52 130,64 138,52" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round"/>
                        <line x1="121" y1="52" x2="137" y2="52" stroke="#FFFFFF" stroke-width="3"/>
                        <text x="14" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#2563EB"> KENJI</text>
                        <text x="14" y="38" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="13.5" fill="#0F172A">Wah~ akhirnya di Jepang!</text>
                      </g>
                    </svg>
                    <div class="manga-panel-num-tag">1</div>
                  </div>
                </div>

                <!-- PANEL 2: KEDAI RAMEN (KATAKANA) -->
                <div class="manga-panel-item">
                  <div class="manga-panel-topbar bar-ramen">
                    <span class="manga-panel-tag">Panel 2</span>
                    <span>Kedai Ramen</span>
                  </div>
                  <div class="manga-panel-art-wrap">
                    <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="p2Roof" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stop-color="#334155"/>
                          <stop offset="100%" stop-color="#1E293B"/>
                        </linearGradient>
                        <linearGradient id="p2SignWood" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stop-color="#FDE68A"/>
                          <stop offset="50%" stop-color="#FEF3C7"/>
                          <stop offset="100%" stop-color="#FCD34D"/>
                        </linearGradient>
                        <linearGradient id="p2Lantern" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stop-color="#EF4444"/>
                          <stop offset="60%" stop-color="#DC2626"/>
                          <stop offset="100%" stop-color="#991B1B"/>
                        </linearGradient>
                      </defs>

                      <rect width="700" height="240" fill="#FEF9C3" opacity="0.5"/>

                      <!-- Ramen Storefront -->
                      <rect x="140" y="70" width="420" height="170" fill="#78350F"/>
                      <polygon points="100,70 350,25 600,70" fill="url(#p2Roof)"/>
                      <polygon points="80,80 350,35 620,80" fill="#0F172A"/>

                      <!-- Plang: ラーメン -->
                      <rect x="230" y="80" width="240" height="65" rx="8" fill="url(#p2SignWood)" stroke="#92400E" stroke-width="4"/>
                      <text x="350" y="125" font-family="'Noto Sans JP', sans-serif" font-weight="900" font-size="36" fill="#78350F" text-anchor="middle" letter-spacing="4">ラーメン</text>

                      <!-- Noren Curtains -->
                      <rect x="220" y="150" width="80" height="65" fill="#1E3A8A"/>
                      <rect x="310" y="150" width="80" height="65" fill="#1E3A8A"/>
                      <rect x="400" y="150" width="80" height="65" fill="#1E3A8A"/>
                      <circle cx="260" cy="180" r="12" fill="none" stroke="#FFFFFF" stroke-width="3"/>
                      <circle cx="350" cy="180" r="12" fill="none" stroke="#FFFFFF" stroke-width="3"/>
                      <circle cx="440" cy="180" r="12" fill="none" stroke="#FFFFFF" stroke-width="3"/>

                      <!-- Lanterns -->
                      <ellipse cx="177" cy="140" rx="22" ry="32" fill="url(#p2Lantern)"/>
                      <text x="177" y="146" font-family="'Noto Sans JP', sans-serif" font-weight="900" font-size="16" fill="#FEF2F2" text-anchor="middle">拉麺</text>
                      <ellipse cx="527" cy="140" rx="22" ry="32" fill="url(#p2Lantern)"/>
                      <text x="527" y="146" font-family="'Noto Sans JP', sans-serif" font-weight="900" font-size="16" fill="#FEF2F2" text-anchor="middle">拉麺</text>

                      <!-- Ground -->
                      <rect x="0" y="240" width="700" height="120" fill="#CBD5E1"/>

                      <!-- Stool with Steaming Ramen Bowl -->
                      <rect x="330" y="240" width="40" height="45" rx="3" fill="#B45309"/>
                      <ellipse cx="350" cy="240" rx="25" ry="12" fill="#1E293B"/>
                      <ellipse cx="350" cy="238" rx="21" ry="8" fill="#F59E0B"/>
                      <circle cx="344" cy="237" r="5" fill="#FFFFFF"/>
                      <circle cx="344" cy="237" r="3" fill="none" stroke="#EC4899" stroke-width="1.5"/>
                      <ellipse cx="356" cy="236" rx="4" ry="3" fill="#FFFFFF"/>
                      <circle cx="356" cy="236" r="2" fill="#F97316"/>
                      <path d="M345 228 Q340 215 348 205 Q355 195 348 185" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.8" stroke-linecap="round"/>
                      <path d="M355 228 Q362 215 355 205 Q348 195 356 185" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.8" stroke-linecap="round"/>

                      <!-- Kenji (Bingung) -->
                      <ellipse cx="220" cy="335" rx="32" ry="8" fill="#475569" opacity="0.35"/>
                      <line x1="212" y1="275" x2="208" y2="330" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
                      <line x1="228" y1="275" x2="232" y2="330" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
                      <ellipse cx="206" cy="332" rx="10" ry="5" fill="#EF4444"/>
                      <ellipse cx="234" cy="332" rx="10" ry="5" fill="#EF4444"/>
                      <rect x="204" y="215" width="32" height="62" rx="8" fill="#3B82F6"/>
                      <path d="M206 225 Q188 205 204 180" fill="none" stroke="#FFEDD5" stroke-width="8" stroke-linecap="round"/>
                      <path d="M234 225 Q245 240 240 260" fill="none" stroke="#FFEDD5" stroke-width="8" stroke-linecap="round"/>
                      <circle cx="220" cy="182" r="23" fill="#FFEDD5"/>
                      <ellipse cx="210" cy="190" rx="3" ry="2" fill="#FDA4AF"/>
                      <ellipse cx="230" cy="190" rx="3" ry="2" fill="#FDA4AF"/>
                      <circle cx="212" cy="180" r="3.5" fill="#1E293B"/>
                      <circle cx="228" cy="180" r="3.5" fill="#1E293B"/>
                      <path d="M214 195 Q220 192 226 195" fill="none" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round"/>
                      <path d="M202 176 Q198 156 220 155 Q242 155 242 176 Z" fill="#78350F"/>
                      <g transform="translate(165, 140)">
                        <circle cx="16" cy="16" r="16" fill="#FEF08A" stroke="#EAB308" stroke-width="2"/>
                        <text x="16" y="23" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="20" fill="#B45309" text-anchor="middle">?</text>
                      </g>

                      <!-- Sensei Tanaka (Menunjuk Plang) -->
                      <ellipse cx="480" cy="335" rx="34" ry="8" fill="#475569" opacity="0.35"/>
                      <line x1="472" y1="270" x2="470" y2="330" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
                      <line x1="488" y1="270" x2="490" y2="330" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
                      <ellipse cx="468" cy="332" rx="10" ry="5" fill="#1E293B"/>
                      <ellipse cx="492" cy="332" rx="10" ry="5" fill="#1E293B"/>
                      <rect x="464" y="210" width="34" height="65" rx="8" fill="#15803D" stroke="#14532D" stroke-width="2"/>
                      <polygon points="475,210 487,210 484,240 478,240" fill="#FFFFFF"/>
                      <polygon points="480,215 483,215 482,245 480,245" fill="#DC2626"/>
                      <path d="M466 220 L420 170" fill="none" stroke="#FFEDD5" stroke-width="7" stroke-linecap="round"/>
                      <line x1="422" y1="172" x2="380" y2="135" stroke="#B45309" stroke-width="3.5" stroke-linecap="round"/>
                      <circle cx="379" cy="134" r="4" fill="#DC2626"/>
                      <circle cx="482" cy="178" r="23" fill="#FFEDD5"/>
                      <circle cx="475" cy="177" r="7" fill="none" stroke="#0F172A" stroke-width="2.5"/>
                      <circle cx="489" cy="177" r="7" fill="none" stroke="#0F172A" stroke-width="2.5"/>
                      <path d="M478 190 Q482 196 486 190" fill="none" stroke="#B91C1C" stroke-width="2.5" stroke-linecap="round"/>
                      <path d="M464 172 Q460 152 482 152 Q504 152 502 172 Z" fill="#1E293B"/>

                      <!-- BUBBLE KENJI -->
                      <g transform="translate(30, 20)">
                        <rect x="0" y="0" width="230" height="48" rx="12" fill="#FFFFFF" stroke="#1E293B" stroke-width="2.5"/>
                        <polygon points="170,48 180,60 188,48" fill="#FFFFFF"/>
                        <polyline points="170,48 180,60 188,48" stroke="#1E293B" stroke-width="2.5"/>
                        <line x1="171" y1="48" x2="187" y2="48" stroke="#FFFFFF" stroke-width="3"/>
                        <text x="12" y="19" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#2563EB"> KENJI</text>
                        <text x="12" y="36" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="12.5" fill="#0F172A">Huruf kotak itu... nggak kebaca!</text>
                      </g>

                      <!-- BUBBLE SENSEI -->
                      <g transform="translate(425, 20)">
                        <rect x="0" y="0" width="245" height="48" rx="12" fill="#FFFFFF" stroke="#1E293B" stroke-width="2.5"/>
                        <polygon points="70,48 60,60 52,48" fill="#FFFFFF"/>
                        <polyline points="70,48 60,60 52,48" stroke="#1E293B" stroke-width="2.5"/>
                        <line x1="53" y1="48" x2="69" y2="48" stroke="#FFFFFF" stroke-width="3"/>
                        <text x="12" y="19" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#D9383A"> SENSEI TANAKA</text>
                        <text x="12" y="36" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="12.5" fill="#0F172A">Itu katakana! ラーメン = ramen~</text>
                      </g>
                    </svg>
                    <div class="manga-panel-num-tag">2</div>
                  </div>
                </div>

                <!-- PANEL 3: STASIUN KERETA (KANJI) -->
                <div class="manga-panel-item">
                  <div class="manga-panel-topbar bar-kanji">
                    <span class="manga-panel-tag">Panel 3</span>
                    <span>Stasiun Kereta</span>
                  </div>
                  <div class="manga-panel-art-wrap">
                    <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="p3Train" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stop-color="#F8FAFC"/>
                          <stop offset="100%" stop-color="#E2E8F0"/>
                        </linearGradient>
                      </defs>

                      <rect width="700" height="150" fill="#E0F2FE"/>
                      <rect x="0" y="0" width="700" height="28" fill="#334155"/>

                      <!-- Plang: 東京 -->
                      <g transform="translate(200, 35)">
                        <line x1="50" y1="-10" x2="50" y2="10" stroke="#0F172A" stroke-width="3"/>
                        <line x1="250" y1="-10" x2="250" y2="10" stroke="#0F172A" stroke-width="3"/>
                        <rect x="0" y="10" width="300" height="78" rx="8" fill="#FFFFFF" stroke="#1E293B" stroke-width="3"/>
                        <rect x="10" y="18" width="280" height="7" fill="#10B981" rx="2"/>
                        <text x="150" y="56" font-family="'Noto Sans JP', sans-serif" font-weight="900" font-size="34" fill="#0F172A" text-anchor="middle" letter-spacing="8">東京</text>
                        <text x="150" y="74" font-family="'Noto Sans JP', sans-serif" font-weight="700" font-size="12" fill="#475569" text-anchor="middle">とうきょう • TOKYO</text>
                      </g>

                      <!-- Train -->
                      <rect x="420" y="125" width="300" height="145" rx="12" fill="url(#p3Train)" stroke="#334155" stroke-width="3"/>
                      <rect x="420" y="185" width="300" height="18" fill="#10B981"/>
                      <rect x="440" y="140" width="70" height="38" rx="5" fill="#38BDF8" stroke="#0369A1" stroke-width="2"/>
                      <rect x="530" y="140" width="70" height="38" rx="5" fill="#38BDF8" stroke="#0369A1" stroke-width="2"/>

                      <!-- Platform -->
                      <rect x="0" y="240" width="700" height="120" fill="#94A3B8"/>
                      <rect x="0" y="255" width="700" height="14" fill="#F59E0B"/>

                      <!-- Kenji Lompat Senang -->
                      <ellipse cx="210" cy="340" rx="28" ry="7" fill="#475569" opacity="0.3"/>
                      <path d="M202 265 L190 295 L180 290" fill="none" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
                      <path d="M218 265 L230 295 L242 290" fill="none" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
                      <rect x="195" y="200" width="30" height="65" rx="8" fill="#3B82F6"/>
                      <path d="M198 215 L170 175" fill="none" stroke="#FFEDD5" stroke-width="8" stroke-linecap="round"/>
                      <path d="M222 215 L250 175" fill="none" stroke="#FFEDD5" stroke-width="8" stroke-linecap="round"/>
                      <circle cx="210" cy="165" r="23" fill="#FFEDD5"/>
                      <polygon points="202,160 204,164 208,164 205,167 206,171 202,168 198,171 199,167 196,164 200,164" fill="#EAB308"/>
                      <polygon points="218,160 220,164 224,164 221,167 222,171 218,168 214,171 215,167 212,164 216,164" fill="#EAB308"/>
                      <path d="M205 174 Q210 183 215 174 Z" fill="#DC2626"/>
                      <path d="M192 160 Q188 140 210 138 Q232 138 230 160 Z" fill="#78350F"/>

                      <!-- Sensei Jempol Ganda -->
                      <ellipse cx="360" cy="335" rx="32" ry="8" fill="#475569" opacity="0.35"/>
                      <line x1="352" y1="270" x2="350" y2="330" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
                      <line x1="368" y1="270" x2="370" y2="330" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
                      <rect x="344" y="210" width="34" height="65" rx="8" fill="#15803D" stroke="#14532D" stroke-width="2"/>
                      <path d="M346 220 Q330 230 332 215" fill="none" stroke="#FFEDD5" stroke-width="7" stroke-linecap="round"/>
                      <circle cx="332" cy="212" r="5" fill="#FFEDD5"/>
                      <path d="M376 220 Q392 230 390 215" fill="none" stroke="#FFEDD5" stroke-width="7" stroke-linecap="round"/>
                      <circle cx="390" cy="212" r="5" fill="#FFEDD5"/>
                      <circle cx="362" cy="178" r="23" fill="#FFEDD5"/>
                      <circle cx="355" cy="177" r="7" fill="none" stroke="#0F172A" stroke-width="2.5"/>
                      <circle cx="369" cy="177" r="7" fill="none" stroke="#0F172A" stroke-width="2.5"/>
                      <path d="M358 190 Q362 196 366 190" fill="none" stroke="#B91C1C" stroke-width="2.5" stroke-linecap="round"/>
                      <path d="M344 172 Q340 152 362 152 Q384 152 382 172 Z" fill="#1E293B"/>

                      <!-- BUBBLE KENJI -->
                      <g transform="translate(20, 18)">
                        <rect x="0" y="0" width="225" height="48" rx="12" fill="#FFFFFF" stroke="#1E293B" stroke-width="2.5"/>
                        <polygon points="150,48 160,60 170,48" fill="#FFFFFF"/>
                        <polyline points="150,48 160,60 170,48" stroke="#1E293B" stroke-width="2.5"/>
                        <line x1="151" y1="48" x2="169" y2="48" stroke="#FFFFFF" stroke-width="3"/>
                        <text x="12" y="19" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#2563EB"> KENJI</text>
                        <text x="12" y="36" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="12.5" fill="#0F172A">Yang ini aku bisa baca! Tokyo!</text>
                      </g>

                      <!-- BUBBLE SENSEI -->
                      <g transform="translate(425, 18)">
                        <rect x="0" y="0" width="245" height="48" rx="12" fill="#FFFFFF" stroke="#1E293B" stroke-width="2.5"/>
                        <polygon points="40,48 30,60 24,48" fill="#FFFFFF"/>
                        <polyline points="40,48 30,60 24,48" stroke="#1E293B" stroke-width="2.5"/>
                        <line x1="25" y1="48" x2="39" y2="48" stroke="#FFFFFF" stroke-width="3"/>
                        <text x="12" y="19" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#D9383A"> SENSEI TANAKA</text>
                        <text x="12" y="36" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="12.5" fill="#0F172A">Itu kanji! Tiap huruf punya arti~</text>
                      </g>
                    </svg>
                    <div class="manga-panel-num-tag">3</div>
                  </div>
                </div>

                <!-- PANEL 4: RESTORAN SUSHI (HIRAGANA) -->
                <div class="manga-panel-item">
                  <div class="manga-panel-topbar bar-sushi">
                    <span class="manga-panel-tag">Panel 4</span>
                    <span>Kedai Sushi</span>
                  </div>
                  <div class="manga-panel-art-wrap">
                    <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="p4Noren" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stop-color="#166534"/>
                          <stop offset="100%" stop-color="#14532D"/>
                        </linearGradient>
                        <linearGradient id="p4Wood" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stop-color="#D97706"/>
                          <stop offset="50%" stop-color="#FBBF24"/>
                          <stop offset="100%" stop-color="#B45309"/>
                        </linearGradient>
                      </defs>

                      <rect width="700" height="230" fill="#FEF3C7" opacity="0.4"/>
                      <rect x="150" y="80" width="400" height="160" fill="#78350F"/>
                      <polygon points="110,80 350,38 590,80" fill="#1E293B"/>

                      <!-- Plang: すし -->
                      <rect x="250" y="85" width="200" height="60" rx="6" fill="url(#p4Wood)" stroke="#78350F" stroke-width="3"/>
                      <text x="350" y="128" font-family="'Noto Sans JP', sans-serif" font-weight="900" font-size="36" fill="#78350F" text-anchor="middle" letter-spacing="8">すし</text>

                      <!-- Noren & Lantern -->
                      <rect x="230" y="150" width="75" height="60" fill="url(#p4Noren)"/>
                      <rect x="315" y="150" width="75" height="60" fill="url(#p4Noren)"/>
                      <rect x="400" y="150" width="75" height="60" fill="url(#p4Noren)"/>
                      <ellipse cx="195" cy="140" rx="18" ry="26" fill="#DC2626"/>
                      <text x="195" y="146" font-family="'Noto Sans JP', sans-serif" font-weight="900" font-size="14" fill="#FFFFFF" text-anchor="middle">寿し</text>

                      <!-- Ground & Counter -->
                      <rect x="0" y="240" width="700" height="120" fill="#E2E8F0"/>
                      <rect x="420" y="225" width="90" height="35" rx="4" fill="#B45309"/>
                      <rect x="430" y="220" width="70" height="10" rx="2" fill="#FDE68A" stroke="#78350F" stroke-width="1.5"/>
                      <rect x="435" y="213" width="18" height="9" rx="3" fill="#EA580C"/>
                      <rect x="458" y="213" width="18" height="9" rx="3" fill="#B91C1C"/>
                      <rect x="479" y="213" width="18" height="9" rx="3" fill="#EAB308"/>

                      <!-- Kenji Pusing (Mata Spiral) -->
                      <ellipse cx="230" cy="335" rx="34" ry="8" fill="#475569" opacity="0.35"/>
                      <line x1="222" y1="275" x2="216" y2="330" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
                      <line x1="238" y1="275" x2="244" y2="330" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
                      <rect x="214" y="215" width="32" height="62" rx="8" fill="#3B82F6"/>
                      <path d="M216 230 L205 200 L212 192" fill="none" stroke="#FFEDD5" stroke-width="7" stroke-linecap="round"/>
                      <path d="M244 230 L255 200 L248 192" fill="none" stroke="#FFEDD5" stroke-width="7" stroke-linecap="round"/>
                      <circle cx="230" cy="182" r="23" fill="#FFEDD5"/>
                      <!-- Spiral eyes -->
                      <path d="M220 180 A3 3 0 0 1 223 183 A5 5 0 0 1 217 184 A7 7 0 0 1 224 176" fill="none" stroke="#1E293B" stroke-width="2"/>
                      <path d="M236 180 A3 3 0 0 1 239 183 A5 5 0 0 1 233 184 A7 7 0 0 1 240 176" fill="none" stroke="#1E293B" stroke-width="2"/>
                      <path d="M224 196 Q228 193 232 196 Q236 199 240 196" fill="none" stroke="#1E293B" stroke-width="2" stroke-linecap="round"/>
                      <ellipse cx="230" cy="150" rx="16" ry="6" fill="none" stroke="#EAB308" stroke-width="2"/>
                      <path d="M212 176 Q208 156 230 155 Q252 155 252 176 Z" fill="#78350F"/>

                      <!-- Sensei Senyum Ramah -->
                      <ellipse cx="360" cy="335" rx="32" ry="8" fill="#475569" opacity="0.35"/>
                      <line x1="352" y1="270" x2="350" y2="330" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
                      <line x1="368" y1="270" x2="370" y2="330" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
                      <rect x="344" y="210" width="34" height="65" rx="8" fill="#15803D" stroke="#14532D" stroke-width="2"/>
                      <path d="M346 220 Q290 220 252 222" fill="none" stroke="#FFEDD5" stroke-width="7" stroke-linecap="round"/>
                      <circle cx="362" cy="178" r="23" fill="#FFEDD5"/>
                      <circle cx="355" cy="177" r="7" fill="none" stroke="#0F172A" stroke-width="2.5"/>
                      <circle cx="369" cy="177" r="7" fill="none" stroke="#0F172A" stroke-width="2.5"/>
                      <path d="M352 176 Q355 172 358 176" fill="none" stroke="#0F172A" stroke-width="2.5"/>
                      <path d="M366 176 Q369 172 372 176" fill="none" stroke="#0F172A" stroke-width="2.5"/>
                      <path d="M358 190 Q362 196 366 190" fill="none" stroke="#B91C1C" stroke-width="2.5" stroke-linecap="round"/>
                      <path d="M344 172 Q340 152 362 152 Q384 152 382 172 Z" fill="#1E293B"/>

                      <!-- BUBBLE KENJI -->
                      <g transform="translate(25, 20)">
                        <rect x="0" y="0" width="230" height="48" rx="12" fill="#FFFFFF" stroke="#1E293B" stroke-width="2.5"/>
                        <polygon points="160,48 170,60 178,48" fill="#FFFFFF"/>
                        <polyline points="160,48 170,60 178,48" stroke="#1E293B" stroke-width="2.5"/>
                        <line x1="161" y1="48" x2="177" y2="48" stroke="#FFFFFF" stroke-width="3"/>
                        <text x="12" y="19" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#2563EB"> KENJI</text>
                        <text x="12" y="36" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="12.5" fill="#0F172A">Kalau yang bulat ini...? Pusing~</text>
                      </g>

                      <!-- BUBBLE SENSEI -->
                      <g transform="translate(425, 20)">
                        <rect x="0" y="0" width="245" height="48" rx="12" fill="#FFFFFF" stroke="#1E293B" stroke-width="2.5"/>
                        <polygon points="50,48 40,60 32,48" fill="#FFFFFF"/>
                        <polyline points="50,48 40,60 32,48" stroke="#1E293B" stroke-width="2.5"/>
                        <line x1="33" y1="48" x2="49" y2="48" stroke="#FFFFFF" stroke-width="3"/>
                        <text x="12" y="19" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#D9383A"> SENSEI TANAKA</text>
                        <text x="12" y="36" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="12.5" fill="#0F172A">Hiragana! Huruf paling dasar~</text>
                      </g>
                    </svg>
                    <div class="manga-panel-num-tag">4</div>
                  </div>
                </div>

              </div>

                            <!-- Catatan Penjelasan Sensei Tanaka (Matching Screenshot 2) -->
              <div class="manga-teacher-note">
                <div class="manga-teacher-avatar">
                  <img src="img/avatar_tanaka.svg" alt="Sensei Tanaka" />
                </div>
                <div class="manga-teacher-body">
                  <div class="manga-teacher-title">Catatan Sensei Tanaka &amp; Kiko:</div>
                  <div class="manga-teacher-text">
                    <strong>びよういん</strong> itu salon kecantikan, <strong>びょういん</strong> itu rumah sakit: satu aksara kecil mengubah segalanya! Di Jepang, 1 kalimat memadukan <strong>Kanji</strong> (makna), <strong>Hiragana</strong> (tata bahasa), dan <strong>Katakana</strong> (serapan). Furigana kecil di atas Kanji adalah kunci penyelamat cara baca!
                  </div>
                </div>
              </div>
            </div>

            <div class="step-bottom-nav">
              <button class="btn-step-prev" onclick="setLessonStep('mulai')">
                <svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="15 18 9 12 15 6"/></svg>
                <span>Pengantar</span>
              </button>
              <button class="btn-step-next" onclick="setLessonStep('huruf')">
                <span>Berikutnya: 3 Aksara</span>
                <svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>

                    <!-- STEP 3: 3 JENIS HURUF (AESTHETIC ACCORDING TO SCREENSHOT 1) -->
          <div class="lesson-step-content" id="step-content-huruf">
            <div class="huruf-header-section">
              <div class="huruf-header-text">
                <h2>3 jenis huruf</h2>
                <div class="huruf-subtitle">
                  Tulisan Jepang = <span class="hl-kanji">kanji</span> + <span class="hl-hira">hiragana</span> + <span class="hl-kata">katakana</span>
                </div>
              </div>

              <!-- Mascot Cat Sensei with Speech Bubble -->
              <div class="huruf-mascot-wrap">
                <div class="mascot-speech-bubble">
                  Ketiganya muncul dalam satu kalimat!
                </div>
                <svg class="mascot-cat-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="speakJapanese('日本語の文字は、漢字とひらがなとカタカナです')" title="Ketuk Sensei Cat untuk dengar suara!">
                  <!-- Ears -->
                  <polygon points="28,25 45,5 54,32" fill="#EA580C" stroke="#9A3412" stroke-width="2.5" stroke-linejoin="round"/>
                  <polygon points="34,22 44,11 50,28" fill="#FDBA74"/>
                  <polygon points="92,25 75,5 66,32" fill="#EA580C" stroke="#9A3412" stroke-width="2.5" stroke-linejoin="round"/>
                  <polygon points="86,22 76,11 70,28" fill="#FDBA74"/>
                  <!-- Head -->
                  <ellipse cx="60" cy="52" rx="42" ry="34" fill="#FB923C" stroke="#9A3412" stroke-width="2.5"/>
                  <!-- Forehead Stripes -->
                  <path d="M60 22 L60 33" stroke="#9A3412" stroke-width="2.5" stroke-linecap="round"/>
                  <path d="M52 25 L55 34" stroke="#9A3412" stroke-width="2" stroke-linecap="round"/>
                  <path d="M68 25 L65 34" stroke="#9A3412" stroke-width="2" stroke-linecap="round"/>
                  <!-- Cheeks / Muzzle -->
                  <ellipse cx="53" cy="62" rx="10" ry="7" fill="#FFF7ED"/>
                  <ellipse cx="67" cy="62" rx="10" ry="7" fill="#FFF7ED"/>
                  <polygon points="60,57 56,53 64,53" fill="#BE123C"/>
                  <path d="M57 60 Q60 64 63 60" stroke="#7C2D12" stroke-width="1.8" fill="none" stroke-linecap="round"/>
                  <!-- Eyeglasses -->
                  <circle cx="45" cy="48" r="11" fill="none" stroke="#1E293B" stroke-width="2.8"/>
                  <circle cx="75" cy="48" r="11" fill="none" stroke="#1E293B" stroke-width="2.8"/>
                  <line x1="56" y1="48" x2="64" y2="48" stroke="#1E293B" stroke-width="2.8"/>
                  <line x1="34" y1="46" x2="26" y2="44" stroke="#1E293B" stroke-width="2.5"/>
                  <line x1="86" y1="46" x2="94" y2="44" stroke="#1E293B" stroke-width="2.5"/>
                  <!-- Eyes inside glasses -->
                  <circle cx="45" cy="48" r="4.5" fill="#1E293B"/>
                  <circle cx="43" cy="46" r="1.5" fill="#FFFFFF"/>
                  <circle cx="75" cy="48" r="4.5" fill="#1E293B"/>
                  <circle cx="73" cy="46" r="1.5" fill="#FFFFFF"/>
                  <!-- Whiskers -->
                  <line x1="28" y1="58" x2="14" y2="55" stroke="#7C2D12" stroke-width="1.8" stroke-linecap="round"/>
                  <line x1="28" y1="63" x2="14" y2="65" stroke="#7C2D12" stroke-width="1.8" stroke-linecap="round"/>
                  <line x1="92" y1="58" x2="106" y2="55" stroke="#7C2D12" stroke-width="1.8" stroke-linecap="round"/>
                  <line x1="92" y1="63" x2="106" y2="65" stroke="#7C2D12" stroke-width="1.8" stroke-linecap="round"/>
                  <!-- Body & Vest -->
                  <path d="M38 82 Q60 76 82 82 L88 116 Q60 120 32 116 Z" fill="#92400E" stroke="#78350F" stroke-width="2"/>
                  <!-- Shirt collar & Tie -->
                  <polygon points="60,82 54,76 66,76" fill="#FFFFFF"/>
                  <polygon points="60,82 57,98 60,102 63,98" fill="#DC2626"/>
                  <!-- Book in Right Arm -->
                  <rect x="22" y="88" width="28" height="26" rx="3" fill="#3B82F6" stroke="#1E3A8A" stroke-width="1.8" transform="rotate(-15 22 88)"/>
                  <line x1="26" y1="94" x2="44" y2="89" stroke="#DBEAFE" stroke-width="2" transform="rotate(-15 22 88)"/>
                  <line x1="26" y1="100" x2="44" y2="95" stroke="#DBEAFE" stroke-width="2" transform="rotate(-15 22 88)"/>
                  <circle cx="38" cy="98" r="6" fill="#FB923C"/>
                  <!-- Pointer Stick in Left Arm -->
                  <line x1="84" y1="92" x2="114" y2="28" stroke="#78350F" stroke-width="3.5" stroke-linecap="round"/>
                  <circle cx="114" cy="28" r="3.5" fill="#F59E0B"/>
                  <circle cx="84" cy="92" r="6" fill="#FB923C"/>
                </svg>
              </div>
            </div>

            <!-- Frame Showcase: 3 Cards + Sentence Circles -->
            <div class="huruf-showcase-box">
              <div class="huruf-3cards-grid">
                <!-- Kanji Card -->
                <div class="huruf-main-card card-kanji" onclick="speakJapanese('かんじ')">
                  <div class="huruf-big-char">字</div>
                  <div class="huruf-card-title">Kanji</div>
                  <div class="huruf-role-pill">Menunjukkan arti</div>
                </div>

                <!-- Hiragana Card -->
                <div class="huruf-main-card card-hiragana" onclick="speakJapanese('ひらがな')">
                  <div class="huruf-big-char">あ</div>
                  <div class="huruf-card-title">Hiragana</div>
                  <div class="huruf-role-pill">Menulis tata bahasa &amp; kata asli Jepang</div>
                </div>

                <!-- Katakana Card -->
                <div class="huruf-main-card card-katakana" onclick="speakJapanese('カタカナ')">
                  <div class="huruf-big-char">ア</div>
                  <div class="huruf-card-title">Katakana</div>
                  <div class="huruf-role-pill">Menulis kata serapan asing</div>
                </div>
              </div>

              <!-- Combined Sentence Showcase in Frame -->
              <div class="huruf-combined-box">
                <div class="huruf-combined-label">Ketiga jenis huruf dipakai bersama: Makan ramen di Tokyo.</div>
                <div class="huruf-chars-flex">
                  <span class="char-circle-item c-kanji" title="Kanji: Tou" onclick="speakJapanese('とう')">東</span>
                  <span class="char-circle-item c-kanji" title="Kanji: Kyou" onclick="speakJapanese('きょう')">京</span>
                  <span class="char-circle-item c-hira" title="Hiragana: de" onclick="speakJapanese('で')">で</span>
                  <span class="char-circle-item c-kata" title="Katakana: ra" onclick="speakJapanese('ラ')">ラ</span>
                  <span class="char-circle-item c-kata" title="Katakana: tanda panjang ー" onclick="speakJapanese('ー')">ー</span>
                  <span class="char-circle-item c-kata" title="Katakana: me" onclick="speakJapanese('メ')">メ</span>
                  <span class="char-circle-item c-kata" title="Katakana: n" onclick="speakJapanese('ン')">ン</span>
                  <span class="char-circle-item c-hira" title="Hiragana: o" onclick="speakJapanese('を')">を</span>
                  <span class="char-circle-item c-kanji" title="Kanji: ta" onclick="speakJapanese('た')">食</span>
                  <span class="char-circle-item c-hira" title="Hiragana: be" onclick="speakJapanese('べ')">べ</span>
                  <span class="char-circle-item c-hira" title="Hiragana: ma" onclick="speakJapanese('ま')">ま</span>
                  <span class="char-circle-item c-hira" title="Hiragana: su" onclick="speakJapanese('す')">す</span>
                  <span class="char-circle-item c-punct">。</span>
                </div>
              </div>
            </div>

            <!-- 3 Informational Chips Row -->
            <div class="huruf-chips-row">
              <div class="huruf-info-chip">
                <span></span>
                <span>Romaji ≠ huruf Jepang</span>
              </div>
              <div class="huruf-info-chip">
                <span></span>
                <span>46 hiragana, 46 katakana</span>
              </div>
              <div class="huruf-info-chip">
                <span>#1</span>
                <span>Mulai dari hiragana</span>
              </div>
            </div>

            <!-- 3 Expandable Rows with "Lihat contoh" -->
            <div class="huruf-rows-list">
              <!-- Row 1: Kanji -->
              <div class="huruf-row-card row-kanji">
                <div class="huruf-row-header" onclick="toggleHurufExamples('kanji')">
                  <div class="huruf-row-left">
                    <div class="huruf-circle-badge">字</div>
                    <div class="huruf-row-info">
                      <h4>Kanji</h4>
                      <p>Menunjukkan arti • Rumit, mirip huruf Mandarin</p>
                    </div>
                  </div>
                  <button class="btn-toggle-examples" id="btn-toggle-kanji">
                    <span>Lihat contoh</span>
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none"><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                </div>
                <div class="huruf-examples-panel" id="panel-examples-kanji">
                  <div class="huruf-examples-grid">
                    <div class="huruf-example-chip" onclick="speakJapanese('にほん')">
                      <div class="ex-text-wrap">
                        <span class="ex-japanese">日本</span>
                        <span class="ex-meaning">Nihon • Jepang</span>
                      </div>
                      <button class="ex-speaker-btn">Audio: </button>
                    </div>
                    <div class="huruf-example-chip" onclick="speakJapanese('やま')">
                      <div class="ex-text-wrap">
                        <span class="ex-japanese">山</span>
                        <span class="ex-meaning">Yama • Gunung</span>
                      </div>
                      <button class="ex-speaker-btn">Audio: </button>
                    </div>
                    <div class="huruf-example-chip" onclick="speakJapanese('かわ')">
                      <div class="ex-text-wrap">
                        <span class="ex-japanese">川</span>
                        <span class="ex-meaning">Kawa • Sungai</span>
                      </div>
                      <button class="ex-speaker-btn">Audio: </button>
                    </div>
                    <div class="huruf-example-chip" onclick="speakJapanese('みず')">
                      <div class="ex-text-wrap">
                        <span class="ex-japanese">水</span>
                        <span class="ex-meaning">Mizu • Air</span>
                      </div>
                      <button class="ex-speaker-btn">Audio: </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Row 2: Hiragana -->
              <div class="huruf-row-card row-hiragana">
                <div class="huruf-row-header" onclick="toggleHurufExamples('hiragana')">
                  <div class="huruf-row-left">
                    <div class="huruf-circle-badge">あ</div>
                    <div class="huruf-row-info">
                      <h4>Hiragana</h4>
                      <p>Menulis tata bahasa &amp; kata asli Jepang • Bulat dan melengkung</p>
                    </div>
                  </div>
                  <button class="btn-toggle-examples" id="btn-toggle-hiragana">
                    <span>Lihat contoh</span>
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none"><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                </div>
                <div class="huruf-examples-panel" id="panel-examples-hiragana">
                  <div class="huruf-examples-grid">
                    <div class="huruf-example-chip" onclick="speakJapanese('ありがとう')">
                      <div class="ex-text-wrap">
                        <span class="ex-japanese">ありがとう</span>
                        <span class="ex-meaning">Arigatou • Terima kasih</span>
                      </div>
                      <button class="ex-speaker-btn">Audio: </button>
                    </div>
                    <div class="huruf-example-chip" onclick="speakJapanese('こんにちは')">
                      <div class="ex-text-wrap">
                        <span class="ex-japanese">こんにちは</span>
                        <span class="ex-meaning">Konnichiwa • Halo</span>
                      </div>
                      <button class="ex-speaker-btn">Audio: </button>
                    </div>
                    <div class="huruf-example-chip" onclick="speakJapanese('さようなら')">
                      <div class="ex-text-wrap">
                        <span class="ex-japanese">さようなら</span>
                        <span class="ex-meaning">Sayounara • Selamat tinggal</span>
                      </div>
                      <button class="ex-speaker-btn">Audio: </button>
                    </div>
                    <div class="huruf-example-chip" onclick="speakJapanese('ねこ')">
                      <div class="ex-text-wrap">
                        <span class="ex-japanese">ねこ</span>
                        <span class="ex-meaning">Neko • Kucing</span>
                      </div>
                      <button class="ex-speaker-btn">Audio: </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Row 3: Katakana -->
              <div class="huruf-row-card row-katakana">
                <div class="huruf-row-header" onclick="toggleHurufExamples('katakana')">
                  <div class="huruf-row-left">
                    <div class="huruf-circle-badge">ア</div>
                    <div class="huruf-row-info">
                      <h4>Katakana</h4>
                      <p>Menulis kata serapan asing • Kotak, runcing, garisnya lurus</p>
                    </div>
                  </div>
                  <button class="btn-toggle-examples" id="btn-toggle-katakana">
                    <span>Lihat contoh</span>
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none"><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                </div>
                <div class="huruf-examples-panel" id="panel-examples-katakana">
                  <div class="huruf-examples-grid">
                    <div class="huruf-example-chip" onclick="speakJapanese('ラーメン')">
                      <div class="ex-text-wrap">
                        <span class="ex-japanese">ラーメン</span>
                        <span class="ex-meaning">Raamen • Ramen</span>
                      </div>
                      <button class="ex-speaker-btn">Audio: </button>
                    </div>
                    <div class="huruf-example-chip" onclick="speakJapanese('コーヒー')">
                      <div class="ex-text-wrap">
                        <span class="ex-japanese">コーヒー</span>
                        <span class="ex-meaning">Koohii • Kopi</span>
                      </div>
                      <button class="ex-speaker-btn">Audio: </button>
                    </div>
                    <div class="huruf-example-chip" onclick="speakJapanese('アニメ')">
                      <div class="ex-text-wrap">
                        <span class="ex-japanese">アニメ</span>
                        <span class="ex-meaning">Anime • Animasi</span>
                      </div>
                      <button class="ex-speaker-btn">Audio: </button>
                    </div>
                    <div class="huruf-example-chip" onclick="speakJapanese('テレビ')">
                      <div class="ex-text-wrap">
                        <span class="ex-japanese">テレビ</span>
                        <span class="ex-meaning">Terebi • Televisi</span>
                      </div>
                      <button class="ex-speaker-btn">Audio: </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Stepper Bottom Navigation -->
            <div class="step-bottom-nav">
              <button class="btn-step-prev" onclick="setLessonStep('komik')">
                <svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="15 18 9 12 15 6"/></svg>
                <span>Komik</span>
              </button>
              <button class="btn-step-orange-next" onclick="setLessonStep('kalimat')">
                <span>Berikutnya: Kalimat</span>
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>

          <!-- STEP 4: BEDAH KALIMAT (AESTHETIC ACCORDING TO SCREENSHOT 2 + INTERACTIVE FEATURES) -->
          <div class="lesson-step-content" id="step-content-kalimat">
            <div class="kalimat-step-header">
              <span class="kalimat-step-tag">Langkah 4 • Kalimat</span>
              <h2 class="kalimat-step-title">Tiga jenis huruf dalam satu kalimat</h2>
              <p class="kalimat-step-desc">Tekan tombol di bawah untuk menyorot satu jenis huruf saja, lalu lihat tugas masing-masing.</p>
            </div>

            <!-- Big Interactive Sentence Card -->
            <div class="kalimat-hero-box">
              <div class="kalimat-toolbar">
                <button class="btn-tool-pill" id="furigana-toggle-btn" onclick="toggleFurigana()" title="Sembunyikan atau tampilkan cara baca kanji">
                  <span>読</span>
                  <span id="furigana-toggle-label">Furigana: ON</span>
                </button>
                <button class="btn-tool-pill" onclick="speakJapanese('とうきょうで ラーメンを たべます')" title="Dengarkan pelafalan penuh kalimat ini">
                  <span>Audio: </span>
                  <span>Dengar Pelafalan Kalimat</span>
                </button>
              </div>

              <!-- Sentence Bubbles Row -->
              <div class="kalimat-chars-container">
                <!-- Group 1: 東京 (Kanji) -->
                <div class="kalimat-word-group" data-word="tokyo" onclick="highlightWordInSentence('tokyo'); speakJapanese('とうきょう');">
                  <div class="kalimat-char-bubble k-kanji" data-type="kanji" title="Kanji: Tou">
                    <span class="furigana-ruby">とう</span>
                    <span>東</span>
                  </div>
                  <div class="kalimat-char-bubble k-kanji" data-type="kanji" title="Kanji: Kyou">
                    <span class="furigana-ruby">きょう</span>
                    <span>京</span>
                  </div>
                </div>

                <!-- Group 2: で (Hiragana) -->
                <div class="kalimat-word-group" data-word="de" onclick="highlightWordInSentence('de'); speakJapanese('で');">
                  <div class="kalimat-char-bubble k-hira" data-type="hiragana" title="Hiragana: de">
                    <span>で</span>
                  </div>
                </div>

                <!-- Group 3: ラーメン (Katakana) -->
                <div class="kalimat-word-group" data-word="ramen" onclick="highlightWordInSentence('ramen'); speakJapanese('ラーメン');">
                  <div class="kalimat-char-bubble k-kata" data-type="katakana" title="Katakana: ra">
                    <span>ラ</span>
                  </div>
                  <div class="kalimat-char-bubble k-kata" data-type="katakana" title="Katakana: ー">
                    <span>ー</span>
                  </div>
                  <div class="kalimat-char-bubble k-kata" data-type="katakana" title="Katakana: me">
                    <span>メ</span>
                  </div>
                  <div class="kalimat-char-bubble k-kata" data-type="katakana" title="Katakana: n">
                    <span>ン</span>
                  </div>
                </div>

                <!-- Group 4: を (Hiragana) -->
                <div class="kalimat-word-group" data-word="o" onclick="highlightWordInSentence('o'); speakJapanese('を');">
                  <div class="kalimat-char-bubble k-hira" data-type="hiragana" title="Hiragana: o">
                    <span>を</span>
                  </div>
                </div>

                <!-- Group 5: 食 (Kanji) -->
                <div class="kalimat-word-group" data-word="tabe" onclick="highlightWordInSentence('tabe'); speakJapanese('た');">
                  <div class="kalimat-char-bubble k-kanji" data-type="kanji" title="Kanji: ta">
                    <span class="furigana-ruby">た</span>
                    <span>食</span>
                  </div>
                </div>

                <!-- Group 6: べます (Hiragana) -->
                <div class="kalimat-word-group" data-word="masu" onclick="highlightWordInSentence('masu'); speakJapanese('べます');">
                  <div class="kalimat-char-bubble k-hira" data-type="hiragana" title="Hiragana: be">
                    <span>べ</span>
                  </div>
                  <div class="kalimat-char-bubble k-hira" data-type="hiragana" title="Hiragana: ma">
                    <span>ま</span>
                  </div>
                  <div class="kalimat-char-bubble k-hira" data-type="hiragana" title="Hiragana: su">
                    <span>す</span>
                  </div>
                </div>

                <div class="kalimat-char-bubble k-punct">。</div>
              </div>

              <!-- Sentence Romaji and Meaning -->
              <div class="kalimat-meta-wrap">
                <div class="kalimat-romaji-text">Tokyo de ramen o tabemasu.</div>
                <h3 class="kalimat-arti-text">Makan ramen di Tokyo.</h3>
              </div>
            </div>

            <!-- Filter Buttons Bar (Matching Screenshot 2) -->
            <div class="kalimat-filter-pills">
              <button class="btn-filter-tag active" data-filter="all" onclick="filterSentenceScript('all')">
                Semua
              </button>
              <button class="btn-filter-tag" data-filter="kanji" onclick="filterSentenceScript('kanji')">
                Hanya kanji
              </button>
              <button class="btn-filter-tag" data-filter="hiragana" onclick="filterSentenceScript('hiragana')">
                Hanya hiragana
              </button>
              <button class="btn-filter-tag" data-filter="katakana" onclick="filterSentenceScript('katakana')">
                Hanya katakana
              </button>
            </div>

            <!-- 6 Detailed Breakdown Cards (Matching Screenshot 2) -->
            <div class="kalimat-breakdown-list">
              <!-- Item 1: 東京 -->
              <div class="kalimat-breakdown-card" data-type="kanji" data-word="tokyo" onclick="highlightWordInSentence('tokyo'); speakJapanese('とうきょう');">
                <div class="breakdown-badge-pill pill-kanji"><ruby>東京<rt>とうきょう</rt></ruby></div>
                <div class="breakdown-text-body">
                  <span class="breakdown-script-tag tag-kanji">kanji</span> • Nama tempat, ditulis dengan kanji. Setiap kanji punya arti: 東 = timur, 京 = ibu kota.
                </div>
                <button class="btn-breakdown-speaker" onclick="event.stopPropagation(); speakJapanese('とうきょう');" title="Dengar pelafalan">Audio: </button>
              </div>

              <!-- Item 2: で -->
              <div class="kalimat-breakdown-card" data-type="hiragana" data-word="de" onclick="highlightWordInSentence('de'); speakJapanese('で');">
                <div class="breakdown-badge-pill pill-hiragana">で</div>
                <div class="breakdown-text-body">
                  <span class="breakdown-script-tag tag-hiragana">hiragana</span> • Kata kecil yang berarti "di", tapi letaknya sesudah nama tempat (Tokyo de = di Tokyo). Unsur tata bahasa ditulis dengan hiragana.
                </div>
                <button class="btn-breakdown-speaker" onclick="event.stopPropagation(); speakJapanese('で');" title="Dengar pelafalan">Audio: </button>
              </div>

              <!-- Item 3: ラーメン -->
              <div class="kalimat-breakdown-card" data-type="katakana" data-word="ramen" onclick="highlightWordInSentence('ramen'); speakJapanese('ラーメン');">
                <div class="breakdown-badge-pill pill-katakana">ラーメン</div>
                <div class="breakdown-text-body">
                  <span class="breakdown-script-tag tag-katakana">katakana</span> • Ramen adalah kata dari luar negeri yang masuk ke Jepang, jadi ditulis dengan katakana. ー adalah tanda bunyi panjang (ra → raa).
                </div>
                <button class="btn-breakdown-speaker" onclick="event.stopPropagation(); speakJapanese('ラーメン');" title="Dengar pelafalan">Audio: </button>
              </div>

              <!-- Item 4: を -->
              <div class="kalimat-breakdown-card" data-type="hiragana" data-word="o" onclick="highlightWordInSentence('o'); speakJapanese('を');">
                <div class="breakdown-badge-pill pill-hiragana">を</div>
                <div class="breakdown-text-body">
                  <span class="breakdown-script-tag tag-hiragana">hiragana</span> • Kata kecil penanda "apa yang dimakan", ditulis dengan hiragana.
                </div>
                <button class="btn-breakdown-speaker" onclick="event.stopPropagation(); speakJapanese('を');" title="Dengar pelafalan">Audio: </button>
              </div>

              <!-- Item 5: 食 -->
              <div class="kalimat-breakdown-card" data-type="kanji" data-word="tabe" onclick="highlightWordInSentence('tabe'); speakJapanese('た');">
                <div class="breakdown-badge-pill pill-kanji"><ruby>食<rt>た</rt></ruby></div>
                <div class="breakdown-text-body">
                  <span class="breakdown-script-tag tag-kanji">kanji</span> • Artinya "makan", ditulis dengan kanji.
                </div>
                <button class="btn-breakdown-speaker" onclick="event.stopPropagation(); speakJapanese('たべる');" title="Dengar pelafalan">Audio: </button>
              </div>

              <!-- Item 6: べます -->
              <div class="kalimat-breakdown-card" data-type="hiragana" data-word="masu" onclick="highlightWordInSentence('masu'); speakJapanese('べます');">
                <div class="breakdown-badge-pill pill-hiragana">べます</div>
                <div class="breakdown-text-body">
                  <span class="breakdown-script-tag tag-hiragana">hiragana</span> • Bagian akhir kata kerja (menunjukkan bentuk sopan dan waktu), ditulis dengan hiragana.
                </div>
                <button class="btn-breakdown-speaker" onclick="event.stopPropagation(); speakJapanese('べます');" title="Dengar pelafalan">Audio: </button>
              </div>
            </div>

            <!-- Gamified Interactive Mini Challenge -->
            <div class="kalimat-challenge-card">
              <div class="challenge-header">
                
                <span>Tantangan Cepat: Uji Pemahaman Aksara</span>
              </div>
              <div class="challenge-question">
                Mengapa kata <strong>「ラーメン」 (Ramen)</strong> harus ditulis menggunakan huruf Katakana dan bukan Hiragana?
              </div>
              <div class="challenge-options-grid">
                <button class="btn-challenge-opt" onclick="checkMiniChallenge(this, false, 'Kurang tepat. Ramen bukan makanan tradisional kuno, melainkan adaptasi mie gandum dari luar negeri.')">
                  A. Karena ramen adalah makanan tradisional kuno para kaisar Jepang.
                </button>
                <button class="btn-challenge-opt" onclick="checkMiniChallenge(this, true, 'Tepat sekali! Katakana difungsikan khusus untuk menyerap kosakata luar negeri atau internasional.')">
                  B. Karena ramen adalah kata serapan dari luar negeri yang masuk dan populer di Jepang.
                </button>
                <button class="btn-challenge-opt" onclick="checkMiniChallenge(this, false, 'Bukan itu alasannya. Makanan asli Jepang seperti udon (うどん) tetap ditulis dengan Hiragana.')">
                  C. Karena semua menu mie wajib ditulis dengan huruf Katakana.
                </button>
              </div>
              <div class="challenge-feedback-box" id="mini-challenge-feedback"></div>
            </div>

            <!-- Stepper Bottom Navigation -->
            <div class="step-bottom-nav">
              <button class="btn-step-prev" onclick="setLessonStep('huruf')">
                <svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="15 18 9 12 15 6"/></svg>
                <span>Huruf</span>
              </button>
              <button class="btn-step-orange-next" onclick="setLessonStep('romaji')">
                <span>Berikutnya: Romaji</span>
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>


          <!-- STEP 5: ROMAJI -->
          <div class="lesson-step-content" id="step-content-romaji">
            <div style="margin-bottom:1.5rem;">
              <span class="badge-pill-sub">Langkah 5 • Alfabet Latin</span>
              <h2 style="font-size:1.6rem; font-weight:800; color:var(--text); margin:0.4rem 0 0.2rem;">Kedudukan Romaji dalam Bahasa Jepang</h2>
              <p style="color:var(--text-soft); font-size:0.92rem;">Romaji (ローマ字) adalah transkripsi bunyi aksara Jepang ke huruf latin (a, b, c...)</p>
            </div>

            <div style="background:#FFFBEB; border:1.5px solid #FCD34D; border-radius:16px; padding:1.8rem; margin-bottom:1.5rem;">
              <h3 style="font-size:1.15rem; color:#92400E; margin-bottom:0.8rem;"> Catatan Penting untuk Siswa di Kelas:</h3>
              <p style="color:#78350F; line-height:1.6; margin-bottom:1rem;">
                Meskipun Romaji mudah dibaca, masyarakat Jepang <strong>tidak pernah menggunakan Romaji</strong> untuk komunikasi resmi atau buku bacaan. Romaji hanya berfungsi sebagai:
              </p>
              <ul style="margin-left:1.5rem; color:#78350F; line-height:1.7; margin-bottom:1.2rem;">
                <li>Alat bantu input keyboard saat mengetik di smartphone dan laptop.</li>
                <li>Rambu petunjuk jalur kereta cepat bagi turis mancanegara.</li>
                <li>Jembatan fonetik di pertemuan awal sebelum siswa menghafal aksara sejati.</li>
              </ul>
              <div style="background:var(--card); border:1px solid #FDE68A; border-radius:12px; padding:1rem; color:#B45309; font-size:0.9rem; line-height:1.5;">
                <strong> Kunci Sukses:</strong> Untuk fasih membaca teks bahasa Jepang asli, jangan terlalu lama bergantung pada Romaji. Di Pelajaran 2, kita akan langsung menaklukkan <strong>Hiragana</strong> bersama-sama!
              </div>
            </div>

            <div class="step-bottom-nav">
              <button class="btn-step-prev" onclick="setLessonStep('kalimat')">
                <svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="15 18 9 12 15 6"/></svg>
                <span>Bedah Kalimat</span>
              </button>
              <button class="btn-step-next" onclick="setLessonStep('kuis')">
                <span>Berikutnya: Tantangan Quest</span>
                <svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>

          <!-- STEP 6: SOAL QUEST ORISINAL -->
          <div class="lesson-step-content" id="step-content-kuis">
            <div style="margin-bottom:1.5rem;">
              <span class="badge-pill-brand">Langkah 6 • Tantangan Quest Kelas</span>
              <h2 style="font-size:1.6rem; font-weight:800; color:var(--text); margin:0.4rem 0 0.2rem;">Quest Evaluasi: Uji Pemahamanmu!</h2>
              <p style="color:var(--text-soft); font-size:0.92rem;">Jawab 3 soal tantangan orisinal berikut untuk mengklaim reward poin pembelajaran.</p>
            </div>

                        <!-- Wadah Soal Dinamis dari Database Master Guru / SQLite -->
            <div id="dynamic-quests-container">
              <!-- Soal Quest Bersih Terpadu Scroll ke Bawah -->
              <div class="quest-card quest-box" data-quest-id="1" data-explanation="Dalam percakapan, Guru Kucing menjelaskan bahwa kata 東京 ditulis dengan Kanji, sedangkan ラーメン ditulis dengan Katakana." data-points="25">
                <div class="quest-illustration-card">
                  <img src="img/comic_station.svg" class="quest-illustration-img" alt="Papan Stasiun Tokyo" draggable="false" />
                </div>
                <div class="quest-card-header">
                  <span class="quest-q-num">Soal 1</span>
                  <span class="quest-q-content" style="font-size:1.22rem; font-weight:700; line-height:1.5;">
                    Dengarkan percakapan antara Rin dan Guru Kucing di depan stasiun. Berdasarkan penjelasan Guru Kucing, aksara apakah yang digunakan untuk menulis kata 「東京」(Tōkyō)?
                  </span>
                </div>
                <div class="chokai-audio-player">
                  <button type="button" class="btn-chokai-play" onclick="playChokaiAudio(this, '先生、駅前の看板に「東京ラーメン」と書いてありますが、ぜんぶ同じ種類の文字ですか？……いいえ、違いますよ。「東京」は漢字で、「ラーメン」はカタカナで書かれていますよ。……なるほど、外国から来た言葉だからカタカナなんですね！')">
                    <span class="chokai-play-label">Putar Audio Percakapan</span>
                  </button>
                  <div class="chokai-audio-hint">Dengarkan percakapan audio untuk menjawab pertanyaan di bawah.</div>
                </div>
                <div class="quest-pill-options">
                  <button type="button" class="quest-pill-btn quest-opt-btn" data-correct="1" onclick="handleQuestOptionClick(this, event)">
                    <span>Kanji (漢字) — Aksara lambang makna asal Tiongkok</span>
                  </button>
                  <button type="button" class="quest-pill-btn quest-opt-btn" data-correct="0" onclick="handleQuestOptionClick(this, event)">
                    <span>Katakana (カタカナ) — Aksara serapan luar negeri</span>
                  </button>
                  <button type="button" class="quest-pill-btn quest-opt-btn" data-correct="0" onclick="handleQuestOptionClick(this, event)">
                    <span>Hiragana (ひらがな) — Aksara tata bahasa asli Jepang</span>
                  </button>
                  <button type="button" class="quest-pill-btn quest-opt-btn" data-correct="0" onclick="handleQuestOptionClick(this, event)">
                    <span>Romaji — Aksara alfabet latin</span>
                  </button>
                </div>
                <div class="quest-feedback-box"></div>
              </div>

              <div class="quest-card quest-box" data-quest-id="2" data-explanation="Rin dan gurunya membahas penulisan すし dengan aksara Hiragana yang berkarakter melengkung lentur dan halus khas asli Jepang." data-points="25">
                <div class="quest-card-header">
                  <span class="quest-q-num">Soal 2</span>
                  <span class="quest-q-content" style="font-size:1.22rem; font-weight:700; line-height:1.5;">
                    Dengarkan percakapan belajar menulis berikut. Ciri aksara apa yang sedang dibahas saat Rin menulis kata 「すし」 (Sushi)?
                  </span>
                </div>
                <div class="chokai-audio-player">
                  <button type="button" class="btn-chokai-play" onclick="playChokaiAudio(this, 'りんは今、ひらがなを練習しているの？……はい！「すし」の「す」と「し」を書いています。曲がり角が多くて柔らかい形ですね！……そうですね、それが日本のひらがなの特徴ですよ。')">
                    <span class="chokai-play-label">Putar Audio Percakapan</span>
                  </button>
                  <div class="chokai-audio-hint">Dengarkan percakapan audio untuk menjawab pertanyaan di bawah.</div>
                </div>
                <div class="quest-pill-options">
                  <button type="button" class="quest-pill-btn quest-opt-btn" data-correct="1" onclick="handleQuestOptionClick(this, event)">
                    <span>Hiragana — Berbentuk garis melengkung lentur asli Jepang</span>
                  </button>
                  <button type="button" class="quest-pill-btn quest-opt-btn" data-correct="0" onclick="handleQuestOptionClick(this, event)">
                    <span>Kanji — Berasal dari guratan ribuan simbol makna</span>
                  </button>
                  <button type="button" class="quest-pill-btn quest-opt-btn" data-correct="0" onclick="handleQuestOptionClick(this, event)">
                    <span>Katakana — Bergaris kaku dan lurus tegas</span>
                  </button>
                  <button type="button" class="quest-pill-btn quest-opt-btn" data-correct="0" onclick="handleQuestOptionClick(this, event)">
                    <span>Romaji — Ditulis dengan alfabet latin barat</span>
                  </button>
                </div>
                <div class="quest-feedback-box"></div>
              </div>
            </div>

            <div class="step-bottom-nav">
              <button class="btn-step-prev" onclick="setLessonStep('romaji')">
                <svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="15 18 9 12 15 6"/></svg>
                <span>Huruf Romaji</span>
              </button>
              <button class="btn-step-next" style="background:var(--green);" onclick="finishCurrentLesson()">
                <span>Tuntaskan Quest Pelajaran </span>
                <svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>

                    <!-- STEP 7: SELESAI -->
          <div class="lesson-step-content" id="step-content-selesai">
            <div class="celebrate-card">
              <div class="celebrate-badge-tag">Pencapaian Modul</div>
              <h2 class="celebrate-title">Modul Selesai Dikuasai</h2>
              <div class="celebrate-module-name">Pelajaran 1: Misteri 3 Aksara (Kanji, Hiragana, &amp; Katakana)</div>
              <p class="celebrate-desc">
                Anda telah menuntaskan seluruh materi, komik, dan latihan pada modul ini dengan baik.
              </p>

              <div class="celebrate-reward-pill">
                <div class="celebrate-reward-item">
                  <span class="celebrate-reward-label">Status</span>
                  <span class="celebrate-reward-val">Tuntas</span>
                </div>
                <div class="celebrate-reward-item">
                  <span class="celebrate-reward-label">Bonus Poin</span>
                  <span class="celebrate-reward-val highlight">+50 Poin</span>
                </div>
                <div class="celebrate-reward-item">
                  <span class="celebrate-reward-label">Tingkat</span>
                  <span class="celebrate-reward-val">N5 Dasar</span>
                </div>
              </div>

              <div class="celebrate-actions">
                <button type="button" class="btn-celebrate-primary" onclick="openLesson(2)">
                  <span>Lanjut Pelajaran 2: Salam Ramah &amp; Sumimasen</span>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </button>

                <div class="celebrate-sub-actions">
                  <button type="button" class="btn-celebrate-secondary" onclick="setLessonStep('kuis')">
                    <span>Review Pembahasan Kuis</span>
                  </button>
                  <button type="button" class="btn-celebrate-secondary" onclick="closeLessonToCatalog()">
                    <span>Daftar Modul Kurikulum</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

          <!-- MINI GAMES PAGE -->
    <div id="page-games" class="page">
      <div class="page-header green-header">
        <div class="page-header-content">
          <button class="back-btn" id="games-back-btn" onclick="showPage('home')">
            <svg viewBox="0 0 24 24" class="svg-icon-mini"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            <span>Kembali</span>
          </button>
          <div class="page-title-wrap">
            <h1>ミニゲーム <span class="sub-title" id="game-page-title">Mini Games Bahasa Jepang</span></h1>
            <p id="game-page-subtitle">Uji pemahaman dan kecepatan refleks membaca aksara Jepang</p>
          </div>
        </div>
      </div>

      <div id="game-menu" class="game-menu">
        <div class="game-card game-card-featured" onclick="startGame('kana-blast')">
          <div class="featured-badge-blast">MODE BARU </div>
          <div class="game-icon-wrap icon-cyan-blast">
            <svg viewBox="0 0 24 24" class="svg-icon-large">
              <circle cx="12" cy="17" r="5" fill="none" stroke="currentColor" stroke-width="2"/>
              <line x1="12" y1="12" x2="12" y2="4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              <line x1="9" y1="7" x2="15" y2="7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <circle cx="6" cy="7" r="2.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/>
              <circle cx="18" cy="8" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/>
            </svg>
          </div>
          <h3>Kana Blast (Turret Blaster)</h3>
          <p>Bidik bubble aksara Jepang yang melayang sesuai romaji target pada turret di bawah! Gaya arcade Quizlet Blast.</p>
          <div class="game-difficulty"><span class="diff-dot cyan-dot"></span> Tingkat: Cepat &amp; Seru</div>
        </div>

        <div class="game-card game-card-monster" onclick="showPage('monster')">
          <div class="game-icon-wrap icon-purple">
            <svg viewBox="0 0 24 24" class="svg-icon-large">
              <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/>
              <line x1="13" x2="19" y1="19" y2="13"/>
              <line x1="16" x2="20" y1="16" y2="20"/>
              <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/>
            </svg>
          </div>
          <h3>Sky Atk Defense</h3>
          <p>Pertahankan gerbang desa dari serbuan siluman langit! Uji kecepatan mengetik aksara Jepang tanpa romaji.</p>
          <div class="game-difficulty"><span class="diff-dot purple-dot"></span> Tingkat: Pertahanan Refleks</div>
        </div>

        <div class="game-card" onclick="startGame('flash-card')">
          <div class="game-icon-wrap icon-cyan">
            <svg viewBox="0 0 24 24" class="svg-icon-large"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
          </div>
          <h3>Flash Card</h3>
          <p>Tebak huruf Hiragana &amp; Katakana, cek pelafalan, dan evaluasi ingatanmu.</p>
          <div class="game-difficulty"><span class="diff-dot green-dot"></span> Tingkat: Pemula</div>
        </div>

        <div class="game-card" onclick="startGame('memory-match')">
          <div class="game-icon-wrap icon-indigo">
            <svg viewBox="0 0 24 24" class="svg-icon-large"><path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1"/><rect width="15" height="14" x="8" y="7" rx="2"/></svg>
          </div>
          <h3>Memory Match</h3>
          <p>Buka dan cocokkan pasangan kartu huruf Jepang dengan bacaan romajinya.</p>
          <div class="game-difficulty"><span class="diff-dot yellow-dot"></span> Tingkat: Menengah</div>
        </div>

        <div class="game-card" onclick="startGame('speed-quiz')">
          <div class="game-icon-wrap icon-orange">
            <svg viewBox="0 0 24 24" class="svg-icon-large"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/><path d="m13 2 4 4"/></svg>
          </div>
          <h3>Speed Quiz</h3>
          <p>Jawab kuis romaji secepat mungkin sebelum penghitung waktu habis!</p>
          <div class="game-difficulty"><span class="diff-dot orange-dot"></span> Tingkat: Cepat</div>
        </div>

        <div class="game-card" onclick="startGame('word-builder')">
          <div class="game-icon-wrap icon-rose">
            <svg viewBox="0 0 24 24" class="svg-icon-large"><path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/></svg>
          </div>
          <h3>Word Builder</h3>
          <p>Susun kepingan huruf Hiragana menjadi kosakata bermakna utuh.</p>
          <div class="game-difficulty"><span class="diff-dot red-dot"></span> Tingkat: Tantangan</div>
        </div>
      </div>

      <div id="game-screen" class="game-screen hidden"></div>
    </div>

    <!-- MONSTER SLAYER PAGE -->
    <div id="page-monster" class="page">
      <div class="page-header purple-header">
        <div class="page-header-content">
          <button class="back-btn" onclick="exitMonsterGame()">
            <svg viewBox="0 0 24 24" class="svg-icon-mini"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            <span>Kembali</span>
          </button>
          <div class="page-title-wrap">
            <h1>モンスター討伐 <span class="sub-title">Sky Atk Defense</span></h1>
            <p>Hafalkan aksara! Siluman menyerbu turun dari atas tanpa romaji. Tebas sebelum mencapai gerbang!</p>
          </div>
          <div class="monster-header-controls">
            <div class="ms-pure-badge">
              <span class="badge-dot-amber"></span>
              <span>Hafalan Murni (Tanpa Romaji)</span>
            </div>
            <button class="btn-icon" id="ms-sound-btn" onclick="toggleMonsterSound()" title="Aktif/Nonaktifkan Efek Suara">
              <svg viewBox="0 0 24 24" class="svg-icon-mini" id="ms-sound-icon"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
              <span id="ms-sound-text">Suara: ON</span>
            </button>
          </div>
        </div>
      </div>

      <div class="monster-arena-wrapper">
        <!-- LOBBY / SETTINGS SCREEN -->
        <div id="ms-lobby" class="ms-lobby-card">
          <div class="ms-lobby-hero">
            <div class="ms-lobby-mascot-art">
              <svg class="lobby-banner-svg" viewBox="0 0 140 100">
                <circle cx="70" cy="50" r="42" fill="#7C3AED" opacity="0.15"/>
                <!-- Crossed Katanas -->
                <line x1="25" y1="25" x2="115" y2="75" stroke="#7C3AED" stroke-width="4" stroke-linecap="round"/>
                <line x1="25" y1="75" x2="115" y2="25" stroke="#DC2626" stroke-width="4" stroke-linecap="round"/>
                <!-- Center Shield Crest -->
                <polygon points="70,30 88,44 82,72 70,80 58,72 52,44" fill="#1F2937" stroke="#F59E0B" stroke-width="2"/>
                <text x="70" y="60" text-anchor="middle" fill="#FFFFFF" font-family="'Noto Sans JP', sans-serif" font-weight="900" font-size="14">討</text>
              </svg>
            </div>
            <h2>Sky Atk Defense</h2>
            <p>Siluman yokai menyerbu turun dari atas langit! Tanpa teks romaji, uji daya ingat murnimu: ketik romaji aksara yang ada pada monster secepat mungkin sebelum menyentuh barikade desa!</p>
          </div>

          <div class="ms-settings-grid">
            <div class="ms-setting-group">
              <label>Pilihan Aksara Latihan:</label>
              <div class="ms-pill-selector">
                <button class="ms-pill active" data-mode="hiragana" onclick="setMonsterMode('hiragana')">Hiragana (ひらがな)</button>
                <button class="ms-pill" data-mode="katakana" onclick="setMonsterMode('katakana')">Katakana (カタカナ)</button>
                <button class="ms-pill" data-mode="mix" onclick="setMonsterMode('mix')">Campuran (Kana)</button>
                <button class="ms-pill" data-mode="words" onclick="setMonsterMode('words')">Kata Pendek (単語)</button>
              </div>
            </div>

            <div class="ms-setting-group">
              <label>Kecepatan Jatuh Monster:</label>
              <div class="ms-pill-selector">
                <button class="ms-pill" data-speed="slow" onclick="setMonsterSpeed('slow')">Santai (Pemula)</button>
                <button class="ms-pill active" data-speed="normal" onclick="setMonsterSpeed('normal')">Sedang (Standar)</button>
                <button class="ms-pill" data-speed="fast" onclick="setMonsterSpeed('fast')">Kilat (Tantangan)</button>
              </div>
            </div>
          </div>

          <div class="ms-lobby-stats">
            <div class="ms-stat-box">
              <span class="ms-stat-title">Skor Tertinggi</span>
              <span class="ms-stat-val" id="ms-high-score">0</span>
            </div>
            <div class="ms-stat-box">
              <span class="ms-stat-title">Monster Ditebas</span>
              <span class="ms-stat-val" id="ms-total-kills">0</span>
            </div>
            <div class="ms-stat-box">
              <span class="ms-stat-title">Kombo Maksimum</span>
              <span class="ms-stat-val" id="ms-max-combo">0x</span>
            </div>
          </div>

          <button class="btn-start-battle" onclick="startMonsterGame()">
            <svg viewBox="0 0 24 24" class="svg-icon"><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" x2="19" y1="19" y2="13"/><line x1="16" x2="20" y1="16" y2="20"/><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/></svg>
            <span>Mulai Pertarungan!</span>
          </button>
        </div>

        <!-- BATTLE SCREEN -->
        <div id="ms-battle" class="ms-battle-card hidden">
          <!-- TOP HUD -->
          <div class="ms-hud">
            <div class="ms-hud-lives" id="ms-lives">
              <!-- Dynamically rendered SVG hearts -->
            </div>
            <div class="ms-hud-info">
              <div class="ms-hud-item"><span class="label">Wave:</span> <strong id="ms-wave-display">1</strong></div>
              <div class="ms-hud-item"><span class="label">Skor:</span> <strong id="ms-score-display">0</strong></div>
              <div class="ms-hud-item"><span class="label">Kombo:</span> <strong id="ms-combo-display" class="combo-text">0x</strong></div>
            </div>
            <button class="btn-pause" id="ms-pause-btn" onclick="toggleMonsterPause()" title="Jeda Pertarungan">
              <svg viewBox="0 0 24 24" class="svg-icon-mini" id="ms-pause-icon"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
            </button>
          </div>

          <!-- BATTLE ARENA (TOP-DOWN SERBUAN LANGIT) -->
          <div class="ms-arena" id="ms-arena">
            <div class="ms-arena-bg">
              <!-- Sky Moon & Stars at top -->
              <div class="ms-bg-stars"></div>
              <div class="ms-bg-moon-art">
                <svg viewBox="0 0 60 60" class="arena-moon-svg">
                  <circle cx="30" cy="30" r="24" fill="#FEF08A"/>
                  <circle cx="25" cy="24" r="4" fill="#FDE047" opacity="0.4"/>
                  <circle cx="37" cy="34" r="5" fill="#FDE047" opacity="0.3"/>
                </svg>
              </div>

              <!-- Village Roofs / Torii Gate at Bottom -->
              <div class="ms-bg-village-silhouette">
                <svg viewBox="0 0 800 120" preserveAspectRatio="none" class="village-roofs-svg">
                  <!-- Torii gate center left -->
                  <path d="M220 50Q260 44 300 50" stroke="#DC2626" stroke-width="4" stroke-linecap="round" fill="none"/>
                  <line x1="228" y1="58" x2="292" y2="58" stroke="#DC2626" stroke-width="3"/>
                  <line x1="236" y1="50" x2="236" y2="120" stroke="#991B1B" stroke-width="4"/>
                  <line x1="284" y1="50" x2="284" y2="120" stroke="#991B1B" stroke-width="4"/>
                  <!-- Traditional Pagoda Roof Curves -->
                  <path d="M0 120L0 90Q50 78 100 86L100 120" fill="#0B0F19"/>
                  <path d="M90 120L90 80Q150 68 210 76L210 120" fill="#090D16"/>
                  <path d="M310 120L310 75Q370 65 430 74L430 120" fill="#0B0F19"/>
                  <path d="M420 120L420 85Q500 70 580 80L580 120" fill="#090D16"/>
                  <path d="M570 120L570 78Q680 62 800 75L800 120" fill="#0B0F19"/>
                </svg>
              </div>
            </div>

            <!-- MONSTER CONTAINER (SPAWN FROM TOP) -->
            <div class="ms-monsters-track" id="ms-monsters-track"></div>

            <!-- DEFENSE BARRIER AT BOTTOM -->
            <div class="ms-defense-barrier-bottom">
              <div class="ms-barrier-line"></div>
              <div class="ms-barrier-glow"></div>
              <div class="ms-player-hero" id="ms-player">
                <div class="hero-character-art">
                  <svg class="hero-ninja-svg" viewBox="0 0 64 64" width="56" height="56">
                    <circle cx="32" cy="22" r="13" fill="#1F2937"/>
                    <rect x="19" y="16" width="26" height="6" fill="#DC2626" rx="2"/>
                    <path d="M19 18C13 16 9 20 5 18M19 20C15 22 11 26 7 28" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
                    <rect x="22" y="22" width="20" height="5" rx="2" fill="#F9FAFB"/>
                    <circle cx="27" cy="24.5" r="1.5" fill="#111827"/>
                    <circle cx="37" cy="24.5" r="1.5" fill="#111827"/>
                    <path d="M20 35C20 31 24 29 32 29C40 29 44 31 44 35L42 50H22L20 35Z" fill="#111827"/>
                    <line x1="14" y1="48" x2="48" y2="14" stroke="#E5E7EB" stroke-width="3" stroke-linecap="round"/>
                    <line x1="12" y1="50" x2="18" y2="44" stroke="#DC2626" stroke-width="4" stroke-linecap="round"/>
                  </svg>
                </div>
                <div class="hero-barrier-tag">GERBANG DESA</div>
              </div>
            </div>

            <!-- SLASH & FX LAYER -->
            <div class="ms-fx-layer" id="ms-fx-layer"></div>

            <!-- WAVE ANNOUNCEMENT -->
            <div id="ms-wave-banner" class="ms-wave-banner hidden">
              <span id="ms-wave-text">WAVE 1</span>
            </div>
          </div>

          <!-- INPUT CONTROLS -->
          <div class="ms-controls">
            <div class="ms-input-bar">
              <span class="ms-input-icon">
                <svg viewBox="0 0 24 24" class="svg-icon-mini"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="6" x2="6" y1="9" y2="9"/><line x1="10" x2="10" y1="9" y2="9"/><line x1="14" x2="14" y1="9" y2="9"/><line x1="18" x2="18" y1="9" y2="9"/><line x1="6" x2="6" y1="13" y2="13"/><line x1="18" x2="18" y1="13" y2="13"/><line x1="10" x2="14" y1="13" y2="13"/></svg>
              </span>
              <input type="text" id="ms-input" class="ms-input-field" placeholder="Ketik langsung dengan keyboard fisil (contoh: ka, sa, tsu)..." autocomplete="off" autocapitalize="off" spellcheck="false" />
              <button class="ms-clear-btn" onclick="clearMonsterInput()" title="Bersihkan input">x</button>
            </div>
          </div>
        </div>

        <!-- GAME OVER MODAL -->
        <div id="ms-gameover-modal" class="ms-modal-overlay hidden">
          <div class="ms-gameover-card">
            <div class="ms-go-icon-art">
              <svg viewBox="0 0 64 64" class="go-crest-svg">
                <circle cx="32" cy="32" r="28" fill="#1F2937" stroke="#DC2626" stroke-width="3"/>
                <line x1="20" y1="20" x2="44" y2="44" stroke="#DC2626" stroke-width="4" stroke-linecap="round"/>
                <line x1="44" y1="20" x2="20" y2="44" stroke="#DC2626" stroke-width="4" stroke-linecap="round"/>
              </svg>
            </div>
            <h2>Pertahanan Telah Tembus!</h2>
            <p>Monster berhasil melintasi garis batas desa. Tetap semangat dan asah kembali kecepatan mengetikmu!</p>

            <div class="ms-go-stats">
              <div class="go-stat-item">
                <span>Skor Akhir</span>
                <strong id="ms-final-score">0</strong>
              </div>
              <div class="go-stat-item">
                <span>Wave Tercapai</span>
                <strong id="ms-final-wave">1</strong>
              </div>
              <div class="go-stat-item">
                <span>Monster Ditebas</span>
                <strong id="ms-final-kills">0</strong>
              </div>
              <div class="go-stat-item">
                <span>Kombo Tertinggi</span>
                <strong id="ms-final-combo">0x</strong>
              </div>
            </div>

            <div class="ms-go-actions">
              <button class="btn-primary" onclick="restartMonsterGame()">
                <svg viewBox="0 0 24 24" class="svg-icon-mini"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
                <span>Coba Lagi</span>
              </button>
              <button class="btn-secondary" onclick="exitMonsterGame()">
                <svg viewBox="0 0 24 24" class="svg-icon-mini"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                <span>Kembali ke Menu</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- FOOTER COPYRIGHT -->
    <footer class="site-footer">
      <div class="footer-inner">
        <p class="footer-copy">&copy; 2026 SIJapanese. All rights reserved.</p>
      </div>
    </footer>
  </div>

  <!-- MOBILE BOTTOM NAVIGATION BAR -->
  <nav class="mobile-bottom-nav">
    <button class="mob-nav-btn active" data-page="home" onclick="showPage('home')">
      <svg viewBox="0 0 24 24" class="svg-icon"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      <span class="mob-label">Beranda</span>
    </button>
    <button class="mob-nav-btn" data-page="materi" onclick="showPage('materi')">
      <svg viewBox="0 0 24 24" class="svg-icon"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M12 6v14"/></svg>
      <span class="mob-label">Materi</span>
    </button>
    <button class="mob-nav-btn" data-page="hiragana" onclick="showPage('hiragana')">
      <span class="mob-kana-badge">あ</span>
      <span class="mob-label">Hiragana</span>
    </button>
    <button class="mob-nav-btn" data-page="katakana" onclick="showPage('katakana')">
      <span class="mob-kana-badge">ア</span>
      <span class="mob-label">Katakana</span>
    </button>
    <button class="mob-nav-btn" data-page="vocabulary" onclick="showPage('vocabulary')">
      <svg viewBox="0 0 24 24" class="svg-icon"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/></svg>
      <span class="mob-label">Kosakata</span>
    </button>
    <button class="mob-nav-btn" data-page="games" onclick="showPage('games')">
      <svg viewBox="0 0 24 24" class="svg-icon"><rect width="20" height="12" x="2" y="6" rx="6"/><path d="M6 12h4m-2-2v4m10-2h.01m-4 0h.01"/></svg>
      <span class="mob-label">Games</span>
    </button>
  </nav>

  <!-- CHARACTER DETAIL MODAL -->
  <div id="char-modal" class="modal-overlay hidden" onclick="closeModal()">
    <div class="modal-card" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="closeModal()" title="Tutup Modal">
        <svg viewBox="0 0 24 24" class="svg-icon-mini"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>

      <div class="modal-char" id="modal-char">あ</div>
      <div class="modal-romaji" id="modal-romaji">a</div>

      <div class="modal-audio-row">
        <button class="modal-audio-btn" id="modal-audio-btn" title="Dengarkan pelafalan">
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
          <span>Dengarkan Pelafalan</span>
        </button>
      </div>

      <div class="modal-example" id="modal-example"></div>
      <div class="modal-mnemonic" id="modal-mnemonic"></div>

      <div class="modal-actions">
        <button class="modal-btn primary" id="modal-mark-btn" onclick="markLearned()">
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="20 6 9 17 4 12"/></svg>
          <span>Tandai Sudah Hafal</span>
        </button>
      </div>
    </div>
  </div>

  <!-- AUTH MODAL (LOGIN & REGISTER) -->
  <div id="auth-modal" class="modal-overlay hidden" onclick="closeAuthModal()">
    <div class="modal-card auth-modal-card" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="closeAuthModal()" title="Tutup Modal">
        <svg viewBox="0 0 24 24" class="svg-icon-mini"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>

      <div class="auth-modal-header">
        <div class="auth-logo-badge"></div>
        <h2 class="auth-modal-title">SIJapanese Akun</h2>
        <p class="auth-modal-sub">Masuk untuk menyimpan poin, kemajuan belajar &amp; akses dashboard!</p>
      </div>

      <!-- Tab Buttons -->
      <div class="auth-tabs-row">
        <button id="tab-btn-login" class="auth-tab-btn active" onclick="switchAuthTab('login')">Masuk (Login)</button>
        <button id="tab-btn-register" class="auth-tab-btn" onclick="switchAuthTab('register')">Daftar Akun Baru</button>
      </div>

      <!-- Quick Demo Switcher -->
      <div class="auth-quick-demo">
        <span class="quick-demo-label"> 1-Click Coba Akun Demo:</span>
        <div class="quick-demo-btns">
          <button type="button" class="btn-demo-chip chip-guru" onclick="loginDemo('guru')" title="Masuk sebagai Guru Bahasa Jepang">
            <span></span> <strong>Guru Jepang</strong>
          </button>
          <button type="button" class="btn-demo-chip chip-siswa" onclick="loginDemo('siswa')" title="Masuk sebagai Siswa (Kenji)">
            <span></span> <strong>Siswa (Kenji)</strong>
          </button>
        </div>
      </div>

      <!-- Login Form -->
      <form id="auth-login-form" onsubmit="handleLoginSubmit(event)" class="auth-form">
        <div id="auth-login-error" class="auth-error-alert" style="display:none;"></div>

        <div class="form-group">
          <label>Email Pengguna</label>
          <input type="email" name="email" placeholder="contoh: guru@sijapanese.sch.id" required />
        </div>

        <div class="form-group">
          <label>Kata Sandi</label>
          <input type="password" name="password" placeholder="Masukkan kata sandi..." required />
        </div>

        <button type="submit" class="btn-auth-submit btn-red">
          <span>Masuk Sekarang</span>
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </form>

      <!-- Register Form -->
      <form id="auth-register-form" onsubmit="handleRegisterSubmit(event)" class="auth-form" style="display:none;">
        <div id="auth-register-error" class="auth-error-alert" style="display:none;"></div>

        <div class="form-group">
          <label>Nama Lengkap Siswa</label>
          <input type="text" name="name" placeholder="contoh: Kenji Pratama" required />
        </div>

        <div class="form-group">
          <label>Email Siswa</label>
          <input type="email" name="email" placeholder="contoh: kenji@sekolah.sch.id" required />
        </div>

        <div class="form-group">
          <label>Pilih Avatar Karakter</label>
          <select name="avatar">
            <option value="img/avatar_anggata.svg">Anggata Al Haadi (Siswa)</option>
            <option value="img/avatar_aoi.svg">Aoi Sorano (Siswi)</option>
            <option value="img/avatar_tanaka.svg">Sensei Tanaka (Guru)</option>
          </select>
        </div>

        <div class="form-group">
          <label>Kata Sandi</label>
          <input type="password" name="password" placeholder="Minimal 6 karakter..." required minlength="6" />
        </div>

        <button type="submit" class="btn-auth-submit btn-blue">
          <span>Buat Akun Siswa</span>
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </form>
    </div>
  </div>

  <!-- PROFILE EDIT MODAL -->
  <div id="profile-edit-modal" class="modal-overlay hidden" onclick="closeProfileModal()">
    <div class="modal-card auth-modal-card" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="closeProfileModal()" title="Tutup Modal">
        <svg viewBox="0 0 24 24" class="svg-icon-mini"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>

      <div class="auth-modal-header">
        <div class="auth-logo-badge" style="background:#EFF6FF;">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563EB" stroke-width="2.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </div>
        <h2 class="auth-modal-title">Pengaturan Profil</h2>
        <p class="auth-modal-sub">Ubah nama tampilan atau avatar karaktermu</p>
      </div>

      <form onsubmit="handleProfileUpdate(event)" class="auth-form">
        <div class="form-group">
          <label>Nama Lengkap</label>
          <input type="text" id="profile-edit-name" required />
        </div>

        <div class="form-group">
          <label>Avatar Karakter</label>
          <select id="profile-edit-avatar">
            <option value="img/avatar_anggata.svg">Anggata Al Haadi (Siswa)</option>
            <option value="img/avatar_aoi.svg">Aoi Sorano (Siswi)</option>
            <option value="img/avatar_tanaka.svg">Sensei Tanaka (Guru)</option>
          </select>
        </div>

        <div class="form-group">
          <label>Ganti Kata Sandi (Opsional)</label>
          <input type="password" id="profile-edit-password" placeholder="Biarkan kosong jika tidak diubah" />
        </div>

        <button type="submit" class="btn-auth-submit btn-green">
          <span>Simpan Perubahan</span>
        </button>
      </form>
    </div>
  </div>

  <div id="toast" class="toast hidden"></div>

  <script src="js/data.js"></script>
  <script src="js/app.js"></script>
  <script src="js/materi.js"></script>
  <script src="js/auth.js"></script>
</body>
</html>