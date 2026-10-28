<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Masuk - SIJapanese Portal Pembelajaran &amp; Dashboard Master Guru</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet" />
  <style>
    :root {
      --red: #D9383A;
      --red-dark: #B91C1C;
      --blue: #2563EB;
      --blue-dark: #1D4ED8;
      --yellow: #F59E0B;
      --green: #10B981;
      --purple: #8B5CF6;
      --text: #0F172A;
      --text-soft: #64748B;
      --bg: #F8FAFC;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background: radial-gradient(circle at 10% 20%, #FEE2E2 0%, #EFF6FF 50%, #F8FAFC 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px 16px;
      color: var(--text);
    }
    .login-container {
      width: 100%;
      max-width: 480px;
    }
    .login-card {
      background: #FFFFFF;
      border: 1.5px solid #E2E8F0;
      border-radius: 24px;
      padding: 2.5rem 2.2rem;
      box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.12);
      position: relative;
      overflow: hidden;
    }
    .login-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 6px;
      background: linear-gradient(90deg, var(--red) 0%, var(--yellow) 25%, var(--green) 50%, var(--blue) 75%, var(--purple) 100%);
    }
    .login-header {
      text-align: center;
      margin-bottom: 2rem;
    }
    .logo-badge {
      width: 58px;
      height: 58px;
      border-radius: 18px;
      background: #FEF2F2;
      border: 2px solid #FECACA;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.85rem;
      box-shadow: 0 4px 14px rgba(217, 56, 58, 0.2);
    }
    .logo-badge svg {
      width: 32px;
      height: 32px;
    }
    .login-title {
      font-size: 1.6rem;
      font-weight: 800;
      color: var(--text);
      letter-spacing: -0.02em;
    }
    .login-title span {
      color: var(--red);
    }
    .login-sub {
      font-size: 0.9rem;
      color: var(--text-soft);
      margin-top: 0.35rem;
    }
    .alert-box {
      padding: 0.85rem 1rem;
      border-radius: 12px;
      font-size: 0.86rem;
      font-weight: 700;
      margin-bottom: 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .alert-error {
      background: #FEF2F2;
      border: 1.5px solid #FECACA;
      color: #DC2626;
    }
    .alert-warning {
      background: #FFFBEB;
      border: 1.5px solid #FDE68A;
      color: #B45309;
    }
    .alert-success {
      background: #ECFDF5;
      border: 1.5px solid #A7F3D0;
      color: #065F46;
    }
    .form-group {
      margin-bottom: 1.15rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    .form-group label {
      font-size: 0.84rem;
      font-weight: 800;
      color: #334155;
    }
    .form-group input {
      width: 100%;
      padding: 0.75rem 1rem;
      border: 1.5px solid #CBD5E1;
      border-radius: 12px;
      font-size: 0.95rem;
      font-family: inherit;
      color: var(--text);
      background: #FFFFFF;
      transition: all 0.2s ease;
      outline: none;
    }
    .form-group input:focus {
      border-color: var(--blue);
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
    }
    .btn-submit-login {
      width: 100%;
      padding: 0.85rem;
      background: linear-gradient(135deg, var(--red) 0%, var(--red-dark) 100%);
      color: #FFFFFF;
      border: none;
      border-radius: 14px;
      font-size: 1rem;
      font-weight: 800;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(217, 56, 58, 0.35);
      transition: all 0.2s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }
    .btn-submit-login:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(217, 56, 58, 0.45);
    }
    .demo-accounts-wrap {
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1.5px dashed #E2E8F0;
    }
    .demo-title {
      font-size: 0.82rem;
      font-weight: 800;
      color: var(--text-soft);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 0.85rem;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
    }
    .demo-grid {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .demo-card {
      background: #F8FAFC;
      border: 1.5px solid #E2E8F0;
      border-radius: 14px;
      padding: 0.85rem 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .demo-card:hover {
      background: #FFFFFF;
      transform: translateY(-2px);
    }
    .demo-card.card-guru:hover {
      border-color: var(--red);
      box-shadow: 0 4px 14px rgba(217, 56, 58, 0.15);
    }
    .demo-card.card-siswa:hover {
      border-color: var(--blue);
      box-shadow: 0 4px 14px rgba(37, 99, 235, 0.15);
    }
    .demo-info {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .demo-avatar {
      font-size: 1.8rem;
    }
    .demo-details strong {
      display: block;
      font-size: 0.9rem;
      color: var(--text);
    }
    .demo-details span {
      font-size: 0.76rem;
      color: var(--text-soft);
    }
    .demo-badge-role {
      font-size: 0.68rem;
      font-weight: 800;
      padding: 0.15rem 0.5rem;
      border-radius: 9999px;
      display: inline-block;
      margin-top: 0.2rem;
    }
    .role-badge-guru {
      background: #FEF2F2;
      color: var(--red);
      border: 1px solid #FECACA;
    }
    .role-badge-siswa {
      background: #EFF6FF;
      color: var(--blue);
      border: 1px solid #BFDBFE;
    }
    .btn-use-demo {
      padding: 0.4rem 0.75rem;
      border-radius: 8px;
      border: 1.5px solid #CBD5E1;
      background: #FFFFFF;
      font-size: 0.78rem;
      font-weight: 800;
      color: var(--text);
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s ease;
    }
    .demo-card:hover .btn-use-demo {
      background: var(--blue);
      border-color: var(--blue);
      color: #FFFFFF;
    }
    .demo-card.card-guru:hover .btn-use-demo {
      background: var(--red);
      border-color: var(--red);
      color: #FFFFFF;
    }
    .bottom-links {
      margin-top: 1.5rem;
      text-align: center;
      font-size: 0.85rem;
      color: var(--text-soft);
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .bottom-links a {
      color: var(--blue);
      font-weight: 700;
      text-decoration: none;
    }
    .bottom-links a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <div class="login-container">
    <div class="login-card">
      <div class="login-header">
        <div class="logo-badge">
          <svg viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="14" fill="#D9383A"/>
            <path d="M8 11h16M9 8v15M23 8v15M7 14h18" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <h1 class="login-title">SI<span>Japanese</span></h1>
        <p class="login-sub">Masuk ke Portal Siswa &amp; Dashboard Master Guru</p>
      </div>

      <!-- Flash Alerts -->
      @if(session('error'))
      <div class="alert-box alert-error">
        <span>⚠️</span> <span>{{ session('error') }}</span>
      </div>
      @endif

      @if(session('warning'))
      <div class="alert-box alert-warning">
        <span>🔒</span> <span>{{ session('warning') }}</span>
      </div>
      @endif

      @if(session('success'))
      <div class="alert-box alert-success">
        <span>✓</span> <span>{{ session('success') }}</span>
      </div>
      @endif

      @if($errors->any())
      <div class="alert-box alert-error">
        <span>⚠️</span> <span>{{ $errors->first() }}</span>
      </div>
      @endif

      <!-- Form Login -->
      <form action="{{ route('login.post') }}" method="POST">
        @csrf

        <div class="form-group">
          <label>Email Pengguna</label>
          <input type="email" name="email" id="input-email" placeholder="contoh: guru@sijapanese.sch.id" value="{{ old('email') }}" required autofocus />
        </div>

        <div class="form-group">
          <label>Kata Sandi</label>
          <input type="password" name="password" id="input-password" placeholder="Masukkan kata sandi..." required />
        </div>

        <button type="submit" class="btn-submit-login">
          <span>Masuk Sekarang</span>
          <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2.5;stroke-linecap:round;"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </form>

      <!-- KARTU CONTOH AKUN GURU & SISWA -->
      <div class="demo-accounts-wrap">
        <div class="demo-title">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          <span>PILIH CONTOH AKUN UNTUK COBA:</span>
        </div>

        <div class="demo-grid">
          <!-- Akun Guru -->
          <div class="demo-card card-guru" onclick="useDemoAccount('guru@sijapanese.sch.id', 'password')">
            <div class="demo-info">
              <div style="width:44px; height:44px; border-radius:50%; overflow:hidden; flex-shrink:0; border:1.5px solid #FECACA;">
                <img src="{{ asset('img/avatar_tanaka.svg') }}" alt="Sensei Tanaka" style="width:100%; height:100%; object-fit:cover;">
              </div>
              <div class="demo-details">
                <strong>Sensei Tanaka</strong>
                <span>guru@sijapanese.sch.id</span>
                <div>
                  <span class="demo-badge-role role-badge-guru">Guru Pengajar (Akses /guru)</span>
                </div>
              </div>
            </div>
            <button type="button" class="btn-use-demo">Gunakan Akun &rarr;</button>
          </div>

          <!-- Akun Siswa 1 -->
          <div class="demo-card card-siswa" onclick="useDemoAccount('kenji@sijapanese.sch.id', 'password')">
            <div class="demo-info">
              <div style="width:44px; height:44px; border-radius:50%; overflow:hidden; flex-shrink:0; border:1.5px solid #BFDBFE;">
                <img src="{{ asset('img/avatar_anggata.svg') }}" alt="Anggata Ramadhan" style="width:100%; height:100%; object-fit:cover;">
              </div>
              <div class="demo-details">
                <strong>Anggata Al Haadi Ramadhan</strong>
                <span>kenji@sijapanese.sch.id</span>
                <div>
                  <span class="demo-badge-role role-badge-siswa">Siswa Belajar N5</span>
                </div>
              </div>
            </div>
            <button type="button" class="btn-use-demo">Gunakan Akun &rarr;</button>
          </div>

          <!-- Akun Siswa 2 -->
          <div class="demo-card card-siswa" onclick="useDemoAccount('aoi@sijapanese.sch.id', 'password')">
            <div class="demo-info">
              <div style="width:44px; height:44px; border-radius:50%; overflow:hidden; flex-shrink:0; border:1.5px solid #BFDBFE;">
                <img src="{{ asset('img/avatar_aoi.svg') }}" alt="Aoi Sorano" style="width:100%; height:100%; object-fit:cover;">
              </div>
              <div class="demo-details">
                <strong>Aoi Sorano</strong>
                <span>aoi@sijapanese.sch.id</span>
                <div>
                  <span class="demo-badge-role role-badge-siswa">Siswi Belajar N4</span>
                </div>
              </div>
            </div>
            <button type="button" class="btn-use-demo">Gunakan Akun &rarr;</button>
          </div>
        </div>
      </div>

      <div class="bottom-links">
        <div>Belum punya akun murid? <a href="{{ route('register') }}">Daftar Siswa Baru</a></div>
        <div><a href="{{ route('home') }}">← Kembali ke Beranda Aplikasi</a></div>
      </div>
    </div>
  </div>

  <script>
    function useDemoAccount(email, password) {
      document.getElementById('input-email').value = email;
      document.getElementById('input-password').value = password;
      // Auto submit agar langsung login
      document.querySelector('form').submit();
    }
  </script>
</body>
</html>
