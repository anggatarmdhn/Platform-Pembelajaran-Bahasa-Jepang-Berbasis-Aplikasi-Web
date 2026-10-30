<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Masuk - SIJapanese Portal Pembelajaran &amp; Dashboard Guru</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet" />
  <style>
    :root {
      --red: #D9383A;
      --red-dark: #B91C1C;
      --blue: #2563EB;
      --blue-dark: #1D4ED8;
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
      max-width: 460px;
    }
    .login-card {
      background: #FFFFFF;
      border: 1.5px solid #E2E8F0;
      border-radius: 24px;
      padding: 2.4rem 2rem;
      box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.10);
      position: relative;
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
      box-shadow: 0 4px 14px rgba(217, 56, 58, 0.15);
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
      color: #D97706;
    }
    .alert-success {
      background: #ECFDF5;
      border: 1.5px solid #A7F3D0;
      color: #065F46;
    }
    .form-group {
      margin-bottom: 1.2rem;
      display: flex;
      flex-direction: column;
      gap: 0.45rem;
    }
    .form-group label {
      font-size: 0.86rem;
      font-weight: 700;
      color: #334155;
    }
    .form-group input {
      width: 100%;
      padding: 0.85rem 1rem;
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
      border-color: var(--red);
      box-shadow: 0 0 0 3px rgba(217, 56, 58, 0.12);
    }
    .btn-submit-login {
      width: 100%;
      padding: 0.9rem 1.2rem;
      background: linear-gradient(135deg, var(--red) 0%, var(--red-dark) 100%);
      color: #FFFFFF;
      border: none;
      border-radius: 14px;
      font-size: 1rem;
      font-weight: 800;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(217, 56, 58, 0.3);
      transition: all 0.2s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 0.6rem;
    }
    .btn-submit-login:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(217, 56, 58, 0.4);
    }
    .btn-submit-login:active {
      transform: translateY(0);
    }
    .bottom-links {
      margin-top: 1.75rem;
      padding-top: 1.25rem;
      border-top: 1.5px solid #F1F5F9;
      text-align: center;
      font-size: 0.88rem;
      color: var(--text-soft);
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
    }
    .bottom-links a {
      color: var(--blue);
      font-weight: 700;
      text-decoration: none;
      transition: color 0.15s ease;
    }
    .bottom-links a:hover {
      color: var(--blue-dark);
      text-decoration: underline;
    }
    @media (max-width: 480px) {
      body {
        padding: 16px 12px;
      }
      .login-card {
        padding: 1.8rem 1.3rem;
        border-radius: 20px;
      }
      .login-title {
        font-size: 1.45rem;
      }
      .login-sub {
        font-size: 0.85rem;
      }
      .form-group input {
        font-size: 0.92rem;
        padding: 0.8rem 0.9rem;
      }
      .btn-submit-login {
        padding: 0.85rem;
        font-size: 0.95rem;
      }
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
        <p class="login-sub">Masuk ke Portal Siswa &amp; Dashboard Guru</p>
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
          <label for="input-email">Alamat Email</label>
          <input type="email" name="email" id="input-email" placeholder="contoh: nama@email.com" value="{{ old('email') }}" required autofocus autocomplete="email" />
        </div>

        <div class="form-group">
          <label for="input-password">Kata Sandi</label>
          <input type="password" name="password" id="input-password" placeholder="Masukkan kata sandi..." required autocomplete="current-password" />
        </div>

        <button type="submit" class="btn-submit-login">
          <span>Masuk Sekarang</span>
          <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2.5;stroke-linecap:round;"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </form>

      <div class="bottom-links">
        <div>Belum memiliki akun? <a href="{{ route('register') }}">Daftar Akun Baru</a></div>
        <div><a href="{{ route('home') }}">← Kembali ke Beranda</a></div>
      </div>
    </div>
  </div>

</body>
</html>
