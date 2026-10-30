<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Daftar Akun Baru - SIJapanese Portal Pembelajaran</title>
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
      --border: #CBD5E1;
      --bg: #F8FAFC;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background: radial-gradient(circle at 10% 20%, #EFF6FF 0%, #F8FAFC 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px 16px;
      color: var(--text);
    }
    .register-container {
      width: 100%;
      max-width: 490px;
    }
    .register-card {
      background: #FFFFFF;
      border: 1.5px solid #E2E8F0;
      border-radius: 24px;
      padding: 2.4rem 2rem;
      box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.10);
      position: relative;
    }
    .header {
      text-align: center;
      margin-bottom: 1.8rem;
    }
    .logo-badge {
      width: 58px;
      height: 58px;
      border-radius: 18px;
      background: #EFF6FF;
      border: 2px solid #BFDBFE;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.85rem;
      box-shadow: 0 4px 14px rgba(37, 99, 235, 0.15);
    }
    .logo-badge svg {
      width: 30px;
      height: 30px;
    }
    .header h1 {
      font-size: 1.55rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: var(--text);
    }
    .header p {
      color: var(--text-soft);
      font-size: 0.88rem;
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
      background: #FEF2F2;
      border: 1.5px solid #FECACA;
      color: #DC2626;
    }
    .form-group {
      margin-bottom: 1.15rem;
      display: flex;
      flex-direction: column;
      gap: 0.45rem;
    }
    .form-group label {
      font-size: 0.86rem;
      font-weight: 700;
      color: #334155;
    }
    .form-group input,
    .form-group select {
      width: 100%;
      padding: 0.85rem 1rem;
      border: 1.5px solid var(--border);
      border-radius: 12px;
      font-size: 0.95rem;
      font-family: inherit;
      color: var(--text);
      background: #FFFFFF;
      outline: none;
      transition: all 0.2s ease;
    }
    .form-group input:focus,
    .form-group select:focus {
      border-color: var(--blue);
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
    }

    /* Role Selector */
    .role-selector-wrap {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.75rem;
      margin-bottom: 0.25rem;
    }
    .role-option {
      cursor: pointer;
      position: relative;
    }
    .role-option input {
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }
    .role-card-inner {
      padding: 0.85rem 0.75rem;
      border: 2px solid #E2E8F0;
      border-radius: 14px;
      background: #F8FAFC;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.35rem;
      transition: all 0.2s ease;
      text-align: center;
    }
    .role-icon {
      font-size: 1.5rem;
    }
    .role-name {
      font-size: 0.88rem;
      font-weight: 800;
      color: var(--text);
    }
    .role-desc {
      font-size: 0.72rem;
      color: var(--text-soft);
      line-height: 1.2;
    }
    .role-option input:checked + .role-card-inner {
      border-color: var(--blue);
      background: #EFF6FF;
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.12);
    }
    .role-option.role-guru input:checked + .role-card-inner {
      border-color: var(--red);
      background: #FEF2F2;
      box-shadow: 0 4px 12px rgba(217, 56, 58, 0.12);
    }

    .btn-submit {
      width: 100%;
      padding: 0.9rem 1.2rem;
      background: linear-gradient(135deg, var(--blue) 0%, var(--blue-dark) 100%);
      color: #FFFFFF;
      border: none;
      border-radius: 14px;
      font-size: 1rem;
      font-weight: 800;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
      transition: all 0.2s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 0.6rem;
    }
    .btn-submit:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
    }
    .btn-submit:active {
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
      .register-card {
        padding: 1.8rem 1.3rem;
        border-radius: 20px;
      }
      .header h1 {
        font-size: 1.4rem;
      }
      .form-group input,
      .form-group select {
        padding: 0.8rem 0.9rem;
        font-size: 0.92rem;
      }
      .btn-submit {
        padding: 0.85rem;
        font-size: 0.95rem;
      }
    }
  </style>
</head>
<body>

  <div class="register-container">
    <div class="register-card">
      <div class="header">
        <div class="logo-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <line x1="19" y1="8" x2="19" y2="14"/>
            <line x1="22" y1="11" x2="16" y2="11"/>
          </svg>
        </div>
        <h1>Pendaftaran Akun</h1>
        <p>Bergabung ke platform pembelajaran bahasa Jepang SIJapanese</p>
      </div>

      @if($errors->any())
      <div class="alert-box">
        <span>⚠️</span> <span>{{ $errors->first() }}</span>
      </div>
      @endif

      <form action="{{ route('register.post') }}" method="POST">
        @csrf

        <!-- Pilihan Peran Akun -->
        <div class="form-group">
          <label>Daftar Sebagai:</label>
          <div class="role-selector-wrap">
            <label class="role-option">
              <input type="radio" name="role" value="siswa" checked onchange="toggleRoleFields('siswa')" />
              <div class="role-card-inner">
                <span class="role-icon">🎓</span>
                <span class="role-name">Siswa Belajar</span>
                <span class="role-desc">Akses materi modul &amp; mini game kuis</span>
              </div>
            </label>

            <label class="role-option role-guru">
              <input type="radio" name="role" value="guru" onchange="toggleRoleFields('guru')" />
              <div class="role-card-inner">
                <span class="role-icon">👨‍🏫</span>
                <span class="role-name">Guru Pengajar</span>
                <span class="role-desc">Akses dashboard master kelola materi &amp; soal</span>
              </div>
            </label>
          </div>
        </div>

        <div class="form-group">
          <label for="reg-name">Nama Lengkap</label>
          <input type="text" name="name" id="reg-name" placeholder="contoh: Anggata Ramadhan" value="{{ old('name') }}" required autocomplete="name" />
        </div>

        <div class="form-group">
          <label for="reg-email">Alamat Email</label>
          <input type="email" name="email" id="reg-email" placeholder="contoh: nama@email.com" value="{{ old('email') }}" required autocomplete="email" />
        </div>

        <div class="form-group" id="wrap-avatar">
          <label for="reg-avatar">Pilihan Karakter Avatar</label>
          <select name="avatar" id="reg-avatar">
            <option value="img/avatar_anggata.svg">Anggata Al Haadi (Siswa Laki-laki)</option>
            <option value="img/avatar_aoi.svg">Aoi Sorano (Siswi Perempuan)</option>
            <option value="img/avatar_tanaka.svg">Sensei Tanaka (Guru Pengajar)</option>
          </select>
        </div>

        <div class="form-group">
          <label for="reg-pass">Kata Sandi</label>
          <input type="password" name="password" id="reg-pass" placeholder="Minimal 6 karakter..." required minlength="6" autocomplete="new-password" />
        </div>

        <button type="submit" class="btn-submit" id="btn-submit-reg">
          <span>Daftar Akun Baru</span>
          <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2.5;stroke-linecap:round;"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </form>

      <div class="bottom-links">
        <div>Sudah memiliki akun? <a href="{{ route('login') }}">Masuk di sini</a></div>
        <div><a href="{{ route('home') }}">← Kembali ke Beranda</a></div>
      </div>
    </div>
  </div>

  <script>
    function toggleRoleFields(role) {
      const avatarSelect = document.getElementById('reg-avatar');
      const submitBtn = document.getElementById('btn-submit-reg');
      if (role === 'guru') {
        avatarSelect.value = 'img/avatar_tanaka.svg';
        submitBtn.style.background = 'linear-gradient(135deg, #D9383A 0%, #B91C1C 100%)';
        submitBtn.style.boxShadow = '0 4px 14px rgba(217, 56, 58, 0.3)';
      } else {
        avatarSelect.value = 'img/avatar_anggata.svg';
        submitBtn.style.background = 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)';
        submitBtn.style.boxShadow = '0 4px 14px rgba(37, 99, 235, 0.3)';
      }
    }
  </script>
</body>
</html>
