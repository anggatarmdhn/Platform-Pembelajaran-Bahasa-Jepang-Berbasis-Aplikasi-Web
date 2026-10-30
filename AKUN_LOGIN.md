# 🔑 Informasi Akun & Kredensial Login SIJapanese

File ini berisi daftar akun bawaan (default seeder) untuk pengujian dan pengelolaan aplikasi **SIJapanese**. Simpan atau buka file ini kapan saja jika Anda lupa email atau kata sandi.

---

## 👨‍🏫 1. Akun Master Guru (Administrator)
Gunakan akun ini untuk masuk ke **Dashboard Master Guru** (`/guru` atau `guru.html`) guna mengelola kotak level, materi modul, bank soal kuis, mini game, dan memantau siswa.

- **Alamat Email**: `guru@sijapanese.sch.id`
- **Kata Sandi**: `password`
- **Nama Pengguna**: Sensei Tanaka
- **Hak Akses**: **Guru Pengajar / Master** (Akses penuh Dashboard Master Guru)

---

## 🎓 2. Akun Siswa Belajar (Peserta Didik)
Gunakan akun ini untuk masuk ke portal belajar siswa guna mengakses materi modul dan kuis mini game.

### Siswa 1 (Kenji / Anggata)
- **Alamat Email**: `kenji@sijapanese.sch.id`
- **Kata Sandi**: `password`
- **Nama Pengguna**: Anggata Al Haadi Ramadhan
- **Hak Akses**: Siswa Belajar (Level N5)

### Siswa 2 (Aoi)
- **Alamat Email**: `aoi@sijapanese.sch.id`
- **Kata Sandi**: `password`
- **Nama Pengguna**: Aoi Sorano
- **Hak Akses**: Siswa Belajar (Level N4)

---

## 📝 3. Pendaftaran Akun Baru (Multi-Role)
Anda juga bisa mendaftarkan akun baru secara bebas melalui menu **Daftar**:
- URL Laravel: `/register`
- URL Frontend Statis: `register.html`

Pada form registrasi, Anda dapat memilih peran:
1. **🎓 Siswa Belajar**: Untuk akun murid.
2. **👨‍🏫 Guru Pengajar**: Untuk akun guru pengajar baru yang dapat langsung mengakses dashboard master.

---

## 📂 Lokasi Kode Sumber Database Seeder
Jika Anda ingin mengubah password default atau menambahkan akun lain secara permanen di database Laravel:
- File seeder: `database/seeders/DatabaseSeeder.php` (Baris 16–50)
- Perintah eksekusi seeder:
  ```bash
  php artisan db:seed
  ```
