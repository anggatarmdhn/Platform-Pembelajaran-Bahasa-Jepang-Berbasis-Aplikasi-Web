<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Daftar Siswa Baru - SIJapanese</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet" />
  <style>
    :root {
      --red: #D9383A;
      --blue: #2563EB;
      --text: #0F172A;
      --text-soft: #64748B;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
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
    .register-card {
      width: 100%;
      max-width: 480px;
      background: #FFFFFF;
      border: 1.5px solid #E2E8F0;
      border-radius: 24px;
      padding: 2.5rem 2.2rem;
      box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.12);
      position: relative;
      overflow: hidden;
    }
    .register-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 6px;
      background: linear-gradient(90deg, #2563EB 0%, #10B981 100%);
    }
    .header { text-align: center; margin-bottom: 2rem; }
    .header h1 { font-size: 1.5rem; font-weight: 800; }
    .header p { color: var(--text-soft); font-size: 0.88rem; margin-top: 0.25rem; }
    .form-group { margin-bottom: 1.15rem; display: flex; flex-direction: column; gap: 0.4rem; }
    .form-group label { font-size: 0.84rem; font-weight: 800; color: #334155; }
    .form-group input, .form-group select {
      width: 100%; padding: 0.75rem 1rem; border: 1.5px solid #CBD5E1; border-radius: 12px;
      font-size: 0.95rem; font-family: inherit; color: var(--text); background: #FFFFFF; outline: none;
    }
    .form-group input:focus, .form-group select:focus {
      border-color: var(--blue); box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
    }
    .btn-submit {
      width: 100%; padding: 0.85rem; background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%);
      color: #FFFFFF; border: none; border-radius: 14px; font-size: 1rem; font-weight: 800;
      cursor: pointer; box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35); transition: all 0.2s ease;
      margin-top: 0.5rem;
    }
    .btn-submit:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(37, 99, 235, 0.45); }
    .bottom-links { margin-top: 1.5rem; text-align: center; font-size: 0.85rem; color: var(--text-soft); }
    .bottom-links a { color: var(--blue); font-weight: 700; text-decoration: none; }
  </style>
</head>
<body>
  <div class="register-card">
    <div class="header">
      <h1>Pendaftaran Siswa Baru</h1>
      <p>Buat akun murid untuk menyimpan akumulasi poin &amp; riwayat belajar</p>
    </div>

    @if($errors->any())
    <div style="background:#FEF2F2; border:1px solid #FECACA; color:#DC2626; padding:0.75rem 1rem; border-radius:10px; font-size:0.85rem; font-weight:700; margin-bottom:1rem;">
      {{ $errors->first() }}
    </div>
    @endif

    <form action="{{ route('register.post') }}" method="POST">
      @csrf
      <div class="form-group">
        <label>Nama Lengkap Siswa</label>
        <input type="text" name="name" placeholder="contoh: Budi Pratama" value="{{ old('name') }}" required />
      </div>

      <div class="form-group">
        <label>Alamat Email</label>
        <input type="email" name="email" placeholder="contoh: budi@sekolah.sch.id" value="{{ old('email') }}" required />
      </div>

      <div class="form-group">
        <label>Pilih Avatar Karakter</label>
        <select name="avatar">
          <option value="img/avatar_anggata.svg">Anggata Al Haadi (Siswa)</option>
          <option value="img/avatar_aoi.svg">Aoi Sorano (Siswi)</option>
        </select>
      </div>

      <div class="form-group">
        <label>Kata Sandi</label>
        <input type="password" name="password" placeholder="Minimal 6 karakter..." required minlength="6" />
      </div>

      <button type="submit" class="btn-submit">Daftar Akun Siswa</button>
    </form>

    <div class="bottom-links">
      <div>Sudah punya akun? <a href="{{ route('login') }}">Masuk di sini</a></div>
      <div style="margin-top:0.4rem;"><a href="{{ route('home') }}">← Kembali ke Beranda</a></div>
    </div>
  </div>
</body>
</html>
