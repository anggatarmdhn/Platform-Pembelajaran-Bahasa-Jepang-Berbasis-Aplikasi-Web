
// ====================================================
// DATA MODUL DETAIL LENGKAP UNTUK SEMUA PELAJARAN (N5 & N4)
// Setiap modul memiliki Komik SVG, Audio, 3 Aksara/Kosakata, Bedah Kalimat & Kuis
// ====================================================
const LESSON_DETAIL_DATA = {
  1: {
    id: 1,
    level: 'N5',
    num: 1,
    title: 'Pelajaran 1: Pengantar Bahasa Jepang & Rahasia 3 Aksara',
    subtitle: 'Mengenal Budaya Jepang, Salam Aisatsu, dan Perkenalan Huruf (Hiragana, Katakana, & Konsep Kanji)',
    estMinutes: 12,
    rewardPoints: 50,
    nextLessonId: 2,
    intro: {
      tag: 'N5 • Pelajaran 1 • Pengantar Pemula',
      h2: 'Selamat Datang di Jepang! Pengantar Bahasa, Budaya & Sopan Santun (Aisatsu)',
      desc: 'Jepang adalah negeri yang memadukan keindahan tradisi kuno dengan teknologi modern. Di modul pengantar awal ini, kita akan mempelajari pengetahuan umum tentang Jepang, etika salam dasar, dan memahami gambaran besar 3 jenis tulisan Jepang sebelum belajar membaca.',
      mascotTip: 'Konnichiwa, Kenji! Selamat datang di Tokyo! Sebagai pemula yang baru pertama kali melangkah, fokus utama kita adalah memahami budaya dasar serta menguasai Hiragana & Katakana terlebih dahulu. Kanji itu karakter simbol lambang kata—cukup kita kenali wujudnya saja dulu, nanti akan kita pelajari mendalam di level akhir modul!'
    },
    komik: {
      image: 'img/comic_ramen.svg',
      title: 'Adegan Komik: Petualangan Kenji & Sensei Tanaka Menjelajahi Tokyo',
      desc: 'Perhatikan 4 adegan komik petualangan Kenji di bawah ini dan dengarkan percakapan bahasa Jepang aslinya dengan menekan tombol audio!',
      dialogues: [
        { speaker: 'Kenji', avatar: 'Kenji', jp: 'とうきょうに つきました！わぁ～、きれいです！', romaji: 'Tōkyō ni tsukimashita! Waa~, kirei desu!', id: 'Akhirnya sampai di Tokyo! Wah cantiknya pemandangan kota ini!' },
        { speaker: 'Kenji', avatar: 'Kenji', jp: 'あの しかくの もじは... よめないよ！', romaji: 'Ano shikaku no moji wa... belum kebaca!' },
        { speaker: 'Sensei Tanaka', avatar: 'Sensei Tanaka', jp: 'それは カタカナ だよ！「ラーメン」と よむんだ。', romaji: 'Sore wa katakana da yo! "Raamen" to yomun da.', id: 'Itu namanya Katakana! Dibacanya "Ra-a-me-n".' },
        { speaker: 'Kenji', avatar: 'Kenji', jp: 'なるほど！おいしそう！いただきます！', romaji: 'Naruhodo! Oishisō! Itadakimasu!', id: 'Ooh begitu! Kelihatannya lezat! Selamat makan!' }
      ]
    },
    huruf: {
      h2: 'Mengenal 3 Sistem Aksara Jepang (Perkenalan Huruf Pemula)',
      desc: 'Bahasa Jepang memadukan 3 aksara. Pahami fungsi masing-masing huruf, dan ingat: Kuasai Hiragana & Katakana terlebih dahulu!',
      cards: [
        {
          type: 'hiragana',
          label: '1. ひらがな (Hiragana) • FONDASI UTAMA',
          color: '#D9383A',
          bg: '#FFF0F4',
          char: 'あ',
          sub: 'Aksara Lentur Asli Jepang (Wajib Dikuasai Pertama!)',
          tip: 'Bentuknya melengkung halus bagai helai sakura. Digunakan untuk seluruh kata asli bahasa Jepang dan partikel tata bahasa. Contoh: ありがとう (Arigatou), こんにちは (Konnichiwa).',
          audio: 'ひらがな'
        },
        {
          type: 'katakana',
          label: '2. カタカナ (Katakana) • AKSARA KATA SERAPAN',
          color: '#0284C7',
          bg: '#EFF6FF',
          char: 'ア',
          sub: 'Aksara Kotak Bersudut Tegas',
          tip: 'Garisnya lurus dan bersudut kaku. Khusus digunakan untuk menyerap kata/makanan asing (seperti ラーメン Ramen, コーヒー Kopi), nama orang non-Jepang, dan nama negara.',
          audio: 'カタカナ'
        },
        {
          type: 'kanji',
          label: '3. 漢字 (Kanji) • SIMBOL MAKNA (DIPELAJARI NANTI)',
          color: '#7C3AED',
          bg: '#F5F3FF',
          char: '日',
          sub: 'Karakter Simbol Lambang Kata (Sekilas Pengenalan)',
          tip: ' Tenang! Pemula TIDAK diwajibkan menghafal ribuan Kanji sekarang. Kanji adalah huruf simbol asal Tiongkok untuk meringkas arti (contoh: 日本 = Jepang). Kanji akan dipelajari bertahap di akhir modul setelah kamu mahir Hiragana & Katakana!',
          audio: 'かんじ'
        }
      ]
    },
    kalimat: {
      sentenceJp: 'とうきょう で ラーメン を たべます',
      sentenceRomaji: 'Tōkyō de rāmen o tabemasu',
      sentenceId: 'Makan ramen di Tokyo',
      words: [
        { word: 'tokyo', jp: 'とうきょう', kanji: '<ruby>東<rt>とう</rt>京<rt>きょう</rt></ruby>', type: 'kanji', meaning: 'Tokyo (Nama Kota)', audio: 'とうきょう' },
        { word: 'de', jp: 'で', type: 'hiragana', meaning: 'Partikel Lokasi (Di)', audio: 'で' },
        { word: 'ramen', jp: 'ラーメン', type: 'katakana', meaning: 'Ramen (Makanan Serapan Luar)', audio: 'ラーメン' },
        { word: 'o', jp: 'を', type: 'hiragana', meaning: 'Partikel Objek (Yang disantap)', audio: 'を' },
        { word: 'tabemasu', jp: 'たべます', kanji: '<ruby>食<rt>た</rt></ruby>べます', type: 'kanji', meaning: 'Makan (Kata Kerja Sopan)', audio: 'たべます' }
      ],
      challenge: {
        q: 'Dalam kalimat di atas, manakah kata yang ditulis dengan Katakana karena merupakan makanan serapan luar negeri?',
        opts: [
          { text: 'ラーメン (Raamen)', isCorrect: true, exp: 'Tepat sekali! "Ramen" adalah makanan serapan sehingga wajib ditulis dengan Katakana.' },
          { text: 'とうきょう (Tokyo)', isCorrect: false, exp: 'Tokyo adalah nama kota asal Jepang.' },
          { text: 'たべます (Tabemasu)', isCorrect: false, exp: 'Tabemasu adalah kata kerja asli Jepang berakhiran Hiragana.' }
        ]
      }
    },
    romaji: {
      tips: [
        { title: 'Mengapa Romaji Hanya Jembatan Awal?', desc: 'Romaji (huruf latin a-b-c) sangat membantu turis asing yang baru tiba, tetapi di Jepang, semua papan jalan, menu makanan, dan buku cerita ditulis menggunakan Hiragana, Katakana, dan Kanji. Jadi kuasai Hiragana secepatnya!' },
        { title: '5 Vokal Murni Jepang: A - I - U - E - O', desc: 'Pelafalan vokal Jepang sangat konsisten dan bersih: A (seperti apel), I (seperti ikan), U (seperti udang), E (seperti ember), O (seperti obor).' },
        { title: 'Etika Kesopanan & Budaya Makan (Aisatsu)', desc: 'Saat semangkuk ramen panas tiba di meja, orang Jepang selalu menangkupkan kedua tangan sambil berucap "いただきます (Itadakimasu)". Dan setelah selesai makan mengucapkan "ごちそうさまでした (Gochisousama deshita)" sebagai tanda terima kasih kepada koki.' }
      ]
    }
  },

  2: {
    id: 2,
    level: 'N5',
    num: 2,
    title: 'Pelajaran 2: Salam, Kesopanan & Kata Ajaib "Sumimasen"',
    subtitle: 'Kuasai salam penting: Konnichiwa, Arigatō gozaimasu, dan cara memanggil orang dengan santun',
    estMinutes: 15,
    rewardPoints: 50,
    nextLessonId: 3,
    intro: {
      tag: 'N5 • Pelajaran 2 • Estimasi 15 Menit',
      h2: 'Salam & Ungkapan Santun Wisata (Aisatsu)',
      desc: 'Orang Jepang sangat menghargai kesantunan. Hanya dengan menguasai 3 kata ajaib: "Konnichiwa", "Arigatō gozaimasu", dan "Sumimasen", perjalanan liburanmu ke Jepang akan terasa sangat ramah dan menyenangkan!',
      mascotTip: 'Kata "Sumimasen" adalah kata paling sakti di Jepang! Bisa berarti "Permisi", "Maaf", sekaligus "Terima kasih atas bantuan Anda"!'
    },
    komik: {
      image: 'img/comic_aisatsu.svg',
      title: 'Adegan Komik: Kenji Menyapa Penduduk Tokyo dengan Ramah',
      desc: 'Dengarkan pelafalan salam asli Jepang dengan menekan tombol audio!',
      dialogues: [
        { speaker: 'Kenji', avatar: 'Kenji', jp: 'すみません！えきは どこですか？', romaji: 'Sumimasen! Eki wa doko desu ka?', id: 'Permisi! Stasiun ada di sebelah mana ya?' },
        { speaker: 'Warga', avatar: 'Kasir', jp: 'あちらですよ。まっすぐ いってください。', romaji: 'Achira desu yo. Massugu itte kudasai.', id: 'Di sebelah sana. Silakan jalan lurus.' },
        { speaker: 'Kenji', avatar: 'Kenji', jp: 'ありがとうございます！', romaji: 'Arigatō gozaimasu!', id: 'Terima kasih banyak!' },
        { speaker: 'Warga', avatar: 'Kasir', jp: 'いいえ、どういたしまして！いってらっしゃい！', romaji: 'Iie, dōitashimashite! Itterasshai!', id: 'Sama-sama! Selamat jalan!' }
      ]
    },
    huruf: {
      h2: '3 Kata Ajaib Paling Berguna Saat Traveling',
      desc: 'Sentuh chip kata berikut untuk mendengarkan lafal penutur asli Jepang:',
      cards: [
        { type: 'hiragana', label: '1. こんにちは (Konnichiwa)', color: '#FF3B69', bg: '#FFF0F4', char: 'こんにちは', sub: 'Halo / Selamat Siang', tip: 'Gunakan dari pukul 10.00 pagi hingga sore untuk menyapa siapa saja.', audio: 'こんにちは' },
        { type: 'hiragana', label: '2. すみません (Sumimasen)', color: '#00B4D8', bg: '#EBFBFF', char: 'すみません', sub: 'Permisi / Maaf / Nyuwun sewu', tip: 'Kata sakti saat minta jalan di kereta, memanggil pelayan, atau minta maaf.', audio: 'すみません' },
        { type: 'hiragana', label: '3. ありがとう (Arigatou)', color: '#10B981', bg: '#EAFBF4', char: 'ありがとう', sub: 'Terima Kasih Banyak (Sopan)', tip: 'Ucapkan "Arigatō gozaimasu" saat kasir menyerahkan kembalian atau saat dibantu orang lokal.', audio: 'ありがとうございます' }
      ]
    },
    kalimat: {
      sentenceJp: 'すみません、ありがとう ございます',
      sentenceRomaji: 'Sumimasen, arigatō gozaimasu',
      sentenceId: 'Permisi, terima kasih banyak!',
      words: [
        { word: 'sumimasen', jp: 'すみません', type: 'hiragana', meaning: 'Permisi / Mohon maaf', audio: 'すみません' },
        { word: 'arigatou', jp: 'ありがとう', type: 'hiragana', meaning: 'Terima kasih', audio: 'ありがとう' },
        { word: 'gozaimasu', jp: 'ございます', type: 'hiragana', meaning: 'Bentuk sangat sopan', audio: 'ございます' }
      ],
      challenge: {
        q: 'Saat kamu tidak sengaja menyenggol orang di stasiun Tokyo, ungkapan apa yang tepat diucapkan?',
        opts: [
          { text: 'すみません (Sumimasen)', isCorrect: true, exp: 'Benar sekali! "Sumimasen" berarti maaf dan permisi dalam etika Jepang.' },
          { text: 'さようなら (Sayounara)', isCorrect: false, exp: 'Sayounara artinya selamat tinggal untuk waktu lama.' },
          { text: 'いただきます (Itadakimasu)', isCorrect: false, exp: 'Itadakimasu diucapkan sebelum makan.' }
        ]
      }
    },
    romaji: {
      tips: [
        { title: 'Vokal Panjang: Arigatō', desc: 'Huruf "ō" pada Arigatō dilafalkan panjang (Arigatou / arigatoo dua ketukan). Jangan dibaca pendek!' },
        { title: 'Membungkuk (Ojigi)', desc: 'Saat mengucapkan "Arigatō gozaimasu", bungkukkan badan sedikit sekitar 15 derajat untuk menunjukkan rasa hormat.' }
      ]
    }
  },

  3: {
    id: 3,
    level: 'N5',
    num: 3,
    title: 'Pelajaran 3: Angka, Uang Yen & Belanja Praktis di Konbini',
    subtitle: 'Membaca harga barang (150円), membeli onigiri, minuman, dan meminta kantong kresek',
    estMinutes: 15,
    rewardPoints: 50,
    nextLessonId: 4,
    intro: {
      tag: 'N5 • Pelajaran 3 • Estimasi 15 Menit',
      h2: 'Angka & Belanja Seru di Konbini Jepang',
      desc: 'Konbini (Convenience Store seperti 7-Eleven, Lawson, FamilyMart) buka 24 jam di seluruh pelosok Jepang. Kuasai angka 1-100 dan cara menanyakan harga barang!',
      mascotTip: 'Mata uang Jepang adalah 円 (En / Yen). Koin 100 Yen (seratus yen) adalah koin paling sering kamu pakai saat belanja makanan kecil!'
    },
    komik: {
      image: 'img/comic_konbini.svg',
      title: 'Adegan Komik: Kenji Membeli Onigiri dan Teh Hijau di Konbini',
      desc: 'Dengarkan percakapan Kenji dengan kasir minimarket di bawah ini!',
      dialogues: [
        { speaker: 'Kenji', avatar: 'Kenji', jp: 'すみません、この おにぎりは いくらですか？', romaji: 'Sumimasen, kono onigiri wa ikura desu ka?', id: 'Permisi, onigiri ini harganya berapa ya?' },
        { speaker: 'Kasir', avatar: 'Kasir', jp: 'ひゃく ごじゅう えん です！', romaji: 'Hyaku gojū en desu!', id: 'Harganya seratus lima puluh yen (150 Yen)!' },
        { speaker: 'Kenji', avatar: 'Kenji', jp: 'これと おちゃを ください。', romaji: 'Kore to ocha o kudasai.', id: 'Minta tolong yang ini dan teh hijau.' },
        { speaker: 'Kasir', avatar: 'Kasir', jp: 'ふくろは ごりようですか？', romaji: 'Fukuro wa goriyō desu ka?', id: 'Apakah ingin memakai kantong kresek?' },
        { speaker: 'Kenji', avatar: 'Kenji', jp: 'はい、おねがいします！', romaji: 'Hai, onegai shimasu!', id: 'Ya, tolong pakai kantong ya!' }
      ]
    },
    huruf: {
      h2: 'Angka Dasar & Kosakata Belanja Konbini',
      desc: 'Sentuh chip kata untuk mendengar lafal angka Jepang:',
      cards: [
        { type: 'kanji', label: '1. 一・二・三 (Ichi, Ni, San)', color: '#FF9E00', bg: '#FFF8E7', char: '1・2・3', sub: '1 (ichi), 2 (ni), 3 (san), 100 (hyaku)', tip: 'Angka 10 = Jū (じゅう), 100 = Hyaku (ひゃく), 1000 = Sen (せん)', audio: 'いち に さん ひゃく' },
        { type: 'hiragana', label: '2. いくら (Ikura)', color: '#10B981', bg: '#EAFBF4', char: 'いくら', sub: 'Berapa Harganya?', tip: 'Kalimat ajaib: "...wa ikura desu ka?" (Harganya berapa?)', audio: 'いくら' },
        { type: 'hiragana', label: '3. おにぎり (Onigiri)', color: '#00B4D8', bg: '#EBFBFF', char: 'おにぎり', sub: 'Nasi Kepal Segitiga Segar', tip: 'Makanan favorit praktis wisatawan, murah dan mengenyangkan!', audio: 'おにぎり' }
      ]
    },
    kalimat: {
      sentenceJp: 'おにぎりは いくら ですか',
      sentenceRomaji: 'Onigiri wa ikura desu ka',
      sentenceId: 'Onigiri harganya berapa?',
      words: [
        { word: 'onigiri', jp: 'おにぎり', type: 'hiragana', meaning: 'Nasi kepal segitiga', audio: 'おにぎり' },
        { word: 'wa', jp: 'は', type: 'hiragana', meaning: 'Partikel Topik (Dibaca "wa")', audio: 'は' },
        { word: 'ikura', jp: 'いくら', type: 'hiragana', meaning: 'Berapa harganya', audio: 'いくら' },
        { word: 'desu', jp: 'です', type: 'hiragana', meaning: 'Kopula penutup kalimat sopan', audio: 'です' },
        { word: 'ka', jp: 'か', type: 'hiragana', meaning: 'Partikel penanda tanya (?)', audio: 'か' }
      ],
      challenge: {
        q: 'Jika kasir menyebut "Hyaku gojū en", berapa rupiah kira-kira nominalnya (kurs 1 Yen = Rp 105)?',
        opts: [
          { text: '150 Yen (sekitar Rp 16.000)', isCorrect: true, exp: 'Tepat! Hyaku (100) + Gojū (50) = 150 Yen.' },
          { text: '500 Yen (sekitar Rp 53.000)', isCorrect: false, exp: '500 Yen disebut "Gohyaku en".' },
          { text: '50 Yen (sekitar Rp 5.000)', isCorrect: false, exp: '50 Yen hanya "Gojū en".' }
        ]
      }
    },
    romaji: {
      tips: [
        { title: 'Partikel は dibaca "Wa"', desc: 'Aksara "は" jika berdiri sebagai partikel tata bahasa selalu dibaca "Wa", bukan "Ha". Contoh: Onigiri wa ikura desu ka.' },
        { title: 'Menghangatkan Makanan di Konbini', desc: 'Kasir sering bertanya "Atatame-masu ka?" (Mau dihangatkan?). Cukup jawab: "Hai, onegai shimasu" (Ya, tolong dihangatkan).' }
      ]
    }
  },

  4: {
    id: 4,
    level: 'N5',
    num: 4,
    title: 'Pelajaran 4: Kuliner: Memesan Makanan di Restoran & Kafe',
    subtitle: 'Menunjuk menu "Kore o kudasai", minta air minum, bon kasir, dan etika makan',
    estMinutes: 18,
    rewardPoints: 50,
    nextLessonId: 5,
    intro: {
      tag: 'N5 • Pelajaran 4 • Estimasi 18 Menit',
      h2: 'Pesan Makanan Lezat di Restoran Jepang',
      desc: 'Saat lapar setelah seharian berjalan-jalan, masuklah ke kedai makan ramen, sushi, atau kafe! Pelajari cara menunjuk menu dengan sopan dan meminta bon kasir.',
      mascotTip: 'Kamu tidak perlu hafal seluruh nama makanan! Cukup tunjuk gambar di buku menu sambil berkata: "Kore o kudasai" (Tolong yang ini)!'
    },
    komik: {
      image: 'img/comic_ramen.svg',
      title: 'Adegan Komik: Kenji Memesan Semangkuk Miso Ramen Hangat',
      desc: 'Dengarkan interaksi memesan makanan dengan pelayan restoran!',
      dialogues: [
        { speaker: 'Pelayan', avatar: 'Kasir', jp: 'いらっしゃいませ！ごちゅうもんは おきまりですか？', romaji: 'Irasshaimase! Gochūmon wa okimari desu ka?', id: 'Selamat datang! Sudah siap memesan?' },
        { speaker: 'Kenji', avatar: 'Kenji', jp: 'はい、これ を ひとつ ください。', romaji: 'Hai, kore o hitotsu kudasai.', id: 'Ya, tolong yang ini satu porsi ya.' },
        { speaker: 'Kenji', avatar: 'Kenji', jp: 'おみず も おねがいします。', romaji: 'Omizu mo onegai shimasu.', id: 'Minta air putihnya juga tolong.' },
        { speaker: 'Pelayan', avatar: 'Kasir', jp: 'かしこまりました。しょうしょう おまちください。', romaji: 'Kashikomarimashita. Shōshō omachi kudasai.', id: 'Baik, mohon tunggu sebentar ya.' }
      ]
    },
    huruf: {
      h2: 'Kosakata Penting di Restoran Jepang',
      desc: 'Sentuh chip kata untuk mendengar lafal penutur asli:',
      cards: [
        { type: 'hiragana', label: '1. これ (Kore)', color: '#FF3B69', bg: '#FFF0F4', char: 'これ', sub: 'Ini (Yang ditunjuk)', tip: 'Tunjuk buku menu atau etalase sambil ucapkan "Kore".', audio: 'これ' },
        { type: 'hiragana', label: '2. ください (Kudasai)', color: '#10B981', bg: '#EAFBF4', char: 'ください', sub: 'Tolong berikan / Minta tolong', tip: 'Pola sakti: [Nama Makanan] + o kudasai.', audio: 'ください' },
        { type: 'hiragana', label: '3. おかいけい (Okaikei)', color: '#00B4D8', bg: '#EBFBFF', char: 'おかいけい', sub: 'Bon / Pembayaran Kasir', tip: 'Saat selesai makan, ucapkan: "Okaikei o onegai shimasu" (Minta bon kasir).', audio: 'おかいけい' }
      ]
    },
    kalimat: {
      sentenceJp: 'これ を ひとつ ください',
      sentenceRomaji: 'Kore o hitotsu kudasai',
      sentenceId: 'Tolong berikan yang ini satu porsi',
      words: [
        { word: 'kore', jp: 'これ', type: 'hiragana', meaning: 'Ini (yang ditunjuk)', audio: 'これ' },
        { word: 'o', jp: 'を', type: 'hiragana', meaning: 'Partikel objek tujuan', audio: 'を' },
        { word: 'hitotsu', jp: 'ひとつ', type: 'hiragana', meaning: 'Satu buah / satu porsi', audio: 'ひとつ' },
        { word: 'kudasai', jp: 'ください', type: 'hiragana', meaning: 'Tolong berikan', audio: 'ください' }
      ],
      challenge: {
        q: 'Bagaimana cara meminta air putih gratis di restoran Jepang?',
        opts: [
          { text: 'おみずを ください (Omizu o kudasai)', isCorrect: true, exp: 'Benar! Omizu berarti air putih, o kudasai artinya tolong berikan.' },
          { text: 'さようなら (Sayounara)', isCorrect: false, exp: 'Sayounara berarti selamat tinggal.' },
          { text: 'いくらですか (Ikura desu ka)', isCorrect: false, exp: 'Ikura desu ka untuk menanyakan harga.' }
        ]
      }
    },
    romaji: {
      tips: [
        { title: 'Air Minum & Ocha Selalu Gratis', desc: 'Di hampir semua restoran Jepang, segelas air es (Omizu) atau teh hijau (Ocha) disajikan gratis dan bisa diisi ulang!' },
        { title: 'Tidak Ada Budaya Uang Tip (No Tipping)', desc: 'Jangan pernah meninggalkan uang tip di atas meja restoran Jepang. Pelayan akan mengejarmu karena mengira uangmu tertinggal!' }
      ]
    }
  },

  5: {
    id: 5,
    level: 'N5',
    num: 5,
    title: 'Pelajaran 5: Navigasi Stasiun Kereta & Bertanya Arah Wisata',
    subtitle: 'Tanya jalan "Eki wa doko desu ka?", kartu Suica/Pasmo, dan petunjuk arah Shibuya',
    estMinutes: 18,
    rewardPoints: 50,
    nextLessonId: 6,
    intro: {
      tag: 'N5 • Pelajaran 5 • Estimasi 18 Menit',
      h2: 'Anti Tersesat di Stasiun Kereta Tokyo',
      desc: 'Jaringan kereta dan subway Tokyo adalah yang terhebat di dunia, tetapi juga membingungkan dengan ratusan pintu keluar (Exit). Kuasai cara bertanya lokasi stasiun dan toilet!',
      mascotTip: 'Kata kunci pencari jalan: "Doko" artinya "Di mana". Polanya: [Tempat] + wa doko desu ka?'
    },
    komik: {
      image: 'img/comic_directions.svg',
      title: 'Adegan Komik: Kiko dan Kenji Mencari Pintu Masuk Stasiun Shinjuku',
      desc: 'Dengarkan cara menanyakan arah dengan ramah:',
      dialogues: [
        { speaker: 'Kenji', avatar: 'Kenji', jp: 'すみません、しんじゅく えき は どこですか？', romaji: 'Sumimasen, Shinjuku eki wa doko desu ka?', id: 'Permisi, stasiun Shinjuku ada di mana ya?' },
        { speaker: 'Petugas', avatar: '‍️', jp: 'あそこを みぎに まがってください。', romaji: 'Asoko o migi ni magatte kudasai.', id: 'Di sana belok ke kanan ya.' },
        { speaker: 'Kenji', avatar: 'Kenji', jp: 'トイレ は ありますか？', romaji: 'Toire wa arimasu ka?', id: 'Apakah ada toilet di dekat sini?' },
        { speaker: 'Petugas', avatar: '‍️', jp: 'かいさつの なかに ありますよ。', romaji: 'Kaisatsu no naka ni arimasu yo.', id: 'Ada di dalam gerbang tiket (gate).' }
      ]
    },
    huruf: {
      h2: 'Kosakata Penunjuk Arah & Stasiun',
      desc: 'Sentuh chip kata untuk mendengar lafal aslinya:',
      cards: [
        { type: 'kanji', label: '1. 駅 (Eki)', color: '#0284C7', bg: '#EFF6FF', char: '<ruby>駅<rt>えき</rt></ruby>', sub: 'Stasiun Kereta Api (Eki)', tip: 'Tokyo Eki (Stasiun Tokyo), Shinjuku Eki, Shibuya Eki.', audio: 'えき' },
        { type: 'hiragana', label: '2. どこ (Doko)', color: '#FF9E00', bg: '#FFF8E7', char: 'どこ', sub: 'Di mana? (Kata Tanya Tempat)', tip: 'Gunakan: "Toire wa doko desu ka?" (Toilet di mana?)', audio: 'どこ' },
        { type: 'katakana', label: '3. トイレ (Toire)', color: '#10B981', bg: '#EAFBF4', char: 'トイレ', sub: 'Toilet / Kamar Kecil', tip: 'Berasal dari kata serapan bahasa Inggris Toilet.', audio: 'トイレ' }
      ]
    },
    kalimat: {
      sentenceJp: '<ruby>駅<rt>えき</rt></ruby> は どこ ですか',
      sentenceRomaji: 'Eki wa doko desu ka',
      sentenceId: 'Stasiun ada di mana ya?',
      words: [
        { word: 'eki', jp: 'えき', kanji: '<ruby>駅<rt>えき</rt></ruby>', type: 'kanji', meaning: 'Stasiun kereta api', audio: 'えき' },
        { word: 'wa', jp: 'は', type: 'hiragana', meaning: 'Partikel penanda subjek (wa)', audio: 'は' },
        { word: 'doko', jp: 'どこ', type: 'hiragana', meaning: 'Di mana (kata tanya)', audio: 'どこ' },
        { word: 'desu_ka', jp: 'ですか', type: 'hiragana', meaning: 'Apakah (penutup kalimat tanya)', audio: 'ですか' }
      ],
      challenge: {
        q: 'Bagaimana cara menanyakan toilet ke petugas stasiun?',
        opts: [
          { text: 'トイレは どこですか (Toire wa doko desu ka)', isCorrect: true, exp: 'Benar sekali! "Toire wa doko desu ka" adalah kalimat penyelamat paling dicari traveler!' },
          { text: 'これをおねがいします (Kore o onegai shimasu)', isCorrect: false, exp: 'Ini untuk meminta pesanan barang.' },
          { text: 'こんにちは (Konnichiwa)', isCorrect: false, exp: 'Ini sapaan halo.' }
        ]
      }
    },
    romaji: {
      tips: [
        { title: 'Arah: Migi & Hidari', desc: 'Migi (みぎ) artinya Kanan, Hidari (ひだり) artinya Kiri. Massugu (まっすぐ) artinya Jalan lurus.' },
        { title: 'Kartu IC (Suica & Pasmo)', desc: 'Cukup tempelkan kartu Suica di gate kereta, tidak perlu repot membeli tiket kertas setiap kali naik kereta!' }
      ]
    }
  },

  6: {
    id: 6,
    level: 'N5',
    num: 6,
    title: 'Pelajaran 6: Belanja Suvenir (Omiyage) & Toko Bebas Pajak',
    subtitle: 'Minta izin melihat barang "Kore o misete kudasai" & pembayaran kartu kredit',
    estMinutes: 15,
    rewardPoints: 50,
    nextLessonId: 7,
    intro: {
      tag: 'N5 • Pelajaran 6 • Estimasi 15 Menit',
      h2: 'Berburu Oleh-oleh Khas di Pasar Asakusa',
      desc: 'Saat liburan ke Jepang hampir usai, saatnya belanja oleh-oleh (Omiyage) untuk keluarga dan teman! Kuasai kalimat meminta izin melihat barang di etalase toko.',
      mascotTip: 'Toko bertanda "Tax Free" memberikan diskon bebas pajak 10% jika kamu belanja di atas 5.000 Yen dan menunjukkan paspormu!'
    },
    komik: {
      image: 'img/comic_souvenir.svg',
      title: 'Adegan Komik: Kiko dan Kenji Memilih Gantungan Kunci Khas Jepang',
      desc: 'Dengarkan percakapan belanja suvenir berikut:',
      dialogues: [
        { speaker: 'Kenji', avatar: 'Kenji', jp: 'すみません、これ を みせて ください。', romaji: 'Sumimasen, kore o misete kudasai.', id: 'Permisi, tolong perlihatkan yang ini ya.' },
        { speaker: 'Penjual', avatar: '‍', jp: 'はい、どうぞ！かわいい キーホルダー ですよ。', romaji: 'Hai, dōzo! Kawaii kīhorudā desu yo.', id: 'Silakan! Ini gantungan kunci yang sangat lucu lho.' },
        { speaker: 'Kenji', avatar: 'Kenji', jp: 'カード は つかえますか？', romaji: 'Kādo wa tsukaemasu ka?', id: 'Apakah bisa menggunakan kartu kredit/debit?' },
        { speaker: 'Penjual', avatar: '‍', jp: 'はい、つかえますよ！', romaji: 'Hai, tsukaemasu yo!', id: 'Ya, tentu bisa digunakan!' }
      ]
    },
    huruf: {
      h2: 'Kosakata Belanja Oleh-oleh & Toko',
      desc: 'Sentuh chip kata untuk mendengar pelafalannya:',
      cards: [
        { type: 'hiragana', label: '1. おみやげ (Omiyage)', color: '#FF3B69', bg: '#FFF0F4', char: 'お<ruby>土産<rt>みやげ</rt></ruby>', sub: 'Oleh-oleh / Cinderamata Khas (Omiyage)', tip: 'Tradisi Jepang membawakan kue atau suvenir lokal untuk teman setelah bepergian.', audio: 'おみやげ' },
        { type: 'hiragana', label: '2. みせて ください (Misete kudasai)', color: '#00B4D8', bg: '#EBFBFF', char: 'みせて', sub: 'Tolong perlihatkan (<ruby>見<rt>み</rt></ruby>せて)', tip: 'Gunakan saat ingin melihat barang di balik etalase kaca toko.', audio: 'みせてください' },
        { type: 'katakana', label: '3. カード (Kaado)', color: '#FF9E00', bg: '#FFF8E7', char: 'カード', sub: 'Kartu (Debit / Kredit)', tip: 'Tanya: "Kaado wa tsukaemasu ka?" (Bisa bayar pakai kartu?)', audio: 'カード' }
      ]
    },
    kalimat: {
      sentenceJp: 'これ を <ruby>見<rt>み</rt></ruby>せて ください',
      sentenceRomaji: 'Kore o misete kudasai',
      sentenceId: 'Tolong perlihatkan barang yang ini',
      words: [
        { word: 'kore', jp: 'これ', type: 'hiragana', meaning: 'Barang ini (yang ditunjuk)', audio: 'これ' },
        { word: 'o', jp: 'を', type: 'hiragana', meaning: 'Partikel penanda objek', audio: 'を' },
        { word: 'misete', jp: 'みせて', kanji: '<ruby>見<rt>み</rt></ruby>せて', type: 'kanji', meaning: 'Perlihatkan (dari kata miru = melihat)', audio: 'みせて' },
        { word: 'kudasai', jp: 'ください', type: 'hiragana', meaning: 'Tolong berikan', audio: 'ください' }
      ],
      challenge: {
        q: 'Jika kamu ingin membayar menggunakan kartu kredit, apa yang kamu katakan?',
        opts: [
          { text: 'カードは つかえますか (Kaado wa tsukaemasu ka)', isCorrect: true, exp: 'Benar! Tsukaemasu ka artinya bisakah digunakan?' },
          { text: 'おみずをください (Omizu o kudasai)', isCorrect: false, exp: 'Ini untuk meminta air minum.' },
          { text: 'ここはどこですか (Koko wa doko desu ka)', isCorrect: false, exp: 'Ini untuk menanyakan lokasi sekarang.' }
        ]
      }
    },
    romaji: {
      tips: [
        { title: 'Tax Free Shopping (免税)', desc: 'Bawalah selalu paspor fisikmu saat belanja. Staf toko akan memindai cap visa turismu untuk memotong pajak 10% langsung di kasir.' },
        { title: 'Siapkan Selalu Uang Tunai (Cash)', desc: 'Meskipun kartu kredit makin populer, warung kuil tradisional dan mesin gacha hanya menerima uang koin tunai!' }
      ]
    }
  },

  7: {
    id: 7,
    level: 'N4',
    num: 1,
    title: 'Pelajaran 7: Check-in Hotel / Ryokan & Bertanya Fasilitas',
    subtitle: 'Lapor kedatangan, titip koper sebelum check-in, dan menanyakan password Wi-Fi',
    estMinutes: 20,
    rewardPoints: 50,
    nextLessonId: 8,
    intro: {
      tag: 'N4 • Pelajaran 7 • Estimasi 20 Menit',
      h2: 'Percakapan Praktis di Resepsionis Hotel Jepang',
      desc: 'Saat tiba di hotel atau penginapan tradisional Ryokan di Kyoto, kamu perlu melapor ke resepsionis. Pelajari cara menitipkan koper sebelum waktu check-in tiba dan meminta password Wi-Fi.',
      mascotTip: 'Di Jepang, waktu check-in umumnya jam 15.00 sore. Tapi kamu bisa menitipkan kopermu di lobi secara gratis sejak pagi hari!'
    },
    komik: {
      image: 'img/comic_hotel.svg',
      title: 'Adegan Komik: Kenji Tiba di Hotel Kyoto dan Menitipkan Koper',
      desc: 'Dengarkan dialog check-in hotel yang santun di bawah ini:',
      dialogues: [
        { speaker: 'Kenji', avatar: 'Kenji', jp: 'こんにちは！チェックインを おねがいします。', romaji: 'Konnichiwa! Chekku-in o onegai shimasu.', id: 'Halo! Saya ingin check-in.' },
        { speaker: 'Staf', avatar: 'Kasir', jp: 'ごよやくの おなまえを おねがいします。', romaji: 'Goyoyaku no onamae o onegai shimasu.', id: 'Boleh minta nama reservasi pemesanannya?' },
        { speaker: 'Kenji', avatar: 'Kenji', jp: 'ケンジ です。にもつを あずかって もらえますか？', romaji: 'Kenji desu. Nimotsu o azukatte moraemasu ka?', id: 'Nama saya Kenji. Bisakah saya menitipkan koper bawaan?' },
        { speaker: 'Staf', avatar: 'Kasir', jp: 'はい、かしこまりました。おへやは ３じから ごりよういただけます。', romaji: 'Hai, kashikomarimashita. Oheya wa san-ji kara goriyō itadakemasu.', id: 'Baik, tentu bisa. Kamar siap digunakan mulai pukul 15.00.' }
      ]
    },
    huruf: {
      h2: 'Kosakata Hotel & Penginapan',
      desc: 'Sentuh chip kata untuk mendengar lafal aslinya:',
      cards: [
        { type: 'katakana', label: '1. チェックイン (Chekku-in)', color: '#8B5CF6', bg: '#F5F1FF', char: 'チェックイン', sub: 'Lapor Masuk Kamar Hotel', tip: 'Berasal dari kata bahasa Inggris Check-in.', audio: 'チェックイン' },
        { type: 'hiragana', label: '2. にもつ (Nimotsu)', color: '#FF3B69', bg: '#FFF0F4', char: 'にもつ', sub: 'Koper & Barang Bawaan (<ruby>荷<rt>に</rt>物<rt>もつ</rt></ruby>)', tip: 'Ucapkan: "Nimotsu o azukatte kudasai" (Tolong titipkan koper saya).', audio: 'にもつ' },
        { type: 'katakana', label: '3. パスワード (Pasuwaado)', color: '#10B981', bg: '#EAFBF4', char: 'パスワード', sub: 'Kata Sandi (Wi-Fi Hotel)', tip: 'Tanya: "Wi-Fi no pasuwaado wa nan desu ka?" (Apa password Wi-Fi nya?)', audio: 'パスワード' }
      ]
    },
    kalimat: {
      sentenceJp: '<ruby>荷<rt>に</rt>物<rt>もつ</rt></ruby> を あずかって ください',
      sentenceRomaji: 'Nimotsu o azukatte kudasai',
      sentenceId: 'Tolong titipkan barang bawaan koper saya',
      words: [
        { word: 'nimotsu', jp: 'にもつ', kanji: '<ruby>荷<rt>に</rt>物<rt>もつ</rt></ruby>', type: 'kanji', meaning: 'Barang koper bawaan', audio: 'にもつ' },
        { word: 'o', jp: 'を', type: 'hiragana', meaning: 'Partikel penanda objek', audio: 'を' },
        { word: 'azukatte', jp: 'あずかって', kanji: '<ruby>預<rt>あず</rt></ruby>かって', type: 'kanji', meaning: 'Menitipkan / Menyimpan', audio: 'あずかって' },
        { word: 'kudasai', jp: 'ください', type: 'hiragana', meaning: 'Tolong berikan bantuan', audio: 'ください' }
      ],
      challenge: {
        q: 'Bagaimana cara menanyakan kata sandi Wi-Fi ke staf resepsionis hotel?',
        opts: [
          { text: 'Wi-Fiの パスワードは なんですか？', isCorrect: true, exp: 'Benar! "Nan desu ka" artinya apa / apakah?' },
          { text: 'おにぎりはいくらですか？', isCorrect: false, exp: 'Ini untuk menanyakan harga onigiri.' },
          { text: 'さようなら！', isCorrect: false, exp: 'Ini ucapan selamat tinggal.' }
        ]
      }
    },
    romaji: {
      tips: [
        { title: 'Lepas Sepatu di Ryokan (Tradisi Jepang)', desc: 'Jika menginap di penginapan tradisional Ryokan beralas tatami, wajib melepaskan sepatu di pintu masuk (Genkan) dan memakai sandal ruangan.' },
        { title: 'Etika Onsen (Pemandian Air Panas)', desc: 'Sebelum masuk ke kolam air panas onsen, kamu wajib mandi dan mencuci badan hingga bersih di area bilas.' }
      ]
    }
  },

  8: {
    id: 8,
    level: 'N4',
    num: 2,
    title: 'Pelajaran 8: Situasi Darurat & Ungkapan Penyelamat Traveling',
    subtitle: 'Mencari toilet darurat, apotek, minta tolong (Tasukete), dan bahasa Inggris',
    estMinutes: 15,
    rewardPoints: 50,
    nextLessonId: 1,
    intro: {
      tag: 'N4 • Pelajaran 8 • Estimasi 15 Menit',
      h2: 'Ungkapan Penyelamat di Saat Darurat',
      desc: 'Hal tak terduga bisa terjadi saat traveling, seperti kehilangan paspor, ketinggalan tas di kereta, atau sakit perut. Kuasai kalimat darurat agar kamu bisa meminta bantuan dengan cepat dan tenang.',
      mascotTip: 'Jika kamu bingung berbicara bahasa Jepang, bertanyalah dengan sopan: "Eigo ga hanasemasu ka?" (Bisakah Anda berbicara bahasa Inggris?)'
    },
    komik: {
      image: 'img/comic_emergency.svg',
      title: 'Adegan Komik: Sensei Tanaka Mengajarkan Kalimat Darurat di Pos Polisi (Koban)',
      desc: 'Dengarkan kalimat penting penyelamat darurat berikut:',
      dialogues: [
        { speaker: 'Kenji', avatar: 'Kenji', jp: 'たすけてください！パスポートを なくしました！', romaji: 'Tasukete kudasai! Pasupōto o nakushimashita!', id: 'Tolong bantu saya! Paspor saya hilang!' },
        { speaker: 'Polisi', avatar: 'Polisi', jp: 'おちついてください。どこで なくしましたか？', romaji: 'Ochitsuite kudasai. Doko de nakushimashita ka?', id: 'Tenanglah. Di mana kamu merasa kehilangannya?' },
        { speaker: 'Kenji', avatar: 'Kenji', jp: 'えいごが はなせますか？', romaji: 'Eigo ga hanasemasu ka?', id: 'Bisakah bapak berbicara bahasa Inggris?' },
        { speaker: 'Polisi', avatar: 'Polisi', jp: 'すこし はなせますよ。だいじょうぶです！', romaji: 'Sukoshi hanasemasu yo. Daijōbu desu!', id: 'Saya bisa sedikit bahasa Inggris. Tenang, semua akan baik-baik saja!' }
      ]
    },
    huruf: {
      h2: 'Kata Kunci Darurat & Keamanan',
      desc: 'Sentuh chip kata untuk mendengar lafal darurat:',
      cards: [
        { type: 'hiragana', label: '1. たすけて (Tasukete)', color: '#EF4444', bg: '#FEF2F2', char: 'たすけて', sub: 'Tolong! / Bantuan Darurat (Tasukete)', tip: 'Teriakkan atau katakan saat butuh bantuan darurat: "Tasukete kudasai!"', audio: 'たすけて' },
        { type: 'kanji', label: '2. 病院 (Byouin)', color: '#10B981', bg: '#EAFBF4', char: '<ruby>病<rt>びょう</rt>院<rt>いん</rt></ruby>', sub: 'Rumah Sakit / Klinik Medis', tip: 'Gunakan: "Byouin wa doko desu ka?" jika kamu sakit saat liburan.', audio: 'びょういん' },
        { type: 'kanji', label: '3. 英語 (Eigo)', color: '#00B4D8', bg: '#EBFBFF', char: '<ruby>英<rt>えい</rt>語<rt>ご</rt></ruby>', sub: 'Bahasa Inggris (Eigo)', tip: 'Tanya: "Eigo ga hanasemasu ka?" (Bisakah bicara bahasa Inggris?)', audio: 'えいご' }
      ]
    },
    kalimat: {
      sentenceJp: '<ruby>英<rt>えい</rt>語<rt>ご</rt></ruby> が <ruby>話<rt>はな</rt></ruby>せます か',
      sentenceRomaji: 'Eigo ga hanasemasu ka',
      sentenceId: 'Bisakah Anda berbicara bahasa Inggris?',
      words: [
        { word: 'eigo', jp: 'えいご', kanji: '<ruby>英<rt>えい</rt>語<rt>ご</rt></ruby>', type: 'kanji', meaning: 'Bahasa Inggris', audio: 'えいご' },
        { word: 'ga', jp: 'が', type: 'hiragana', meaning: 'Partikel penanda kemampuan subjek', audio: 'が' },
        { word: 'hanasemasu', jp: 'はなせます', kanji: '<ruby>話<rt>はな</rt></ruby>せます', type: 'kanji', meaning: 'Bisa berbicara (potensial)', audio: 'はなせます' },
        { word: 'ka', jp: 'か', type: 'hiragana', meaning: 'Partikel penanda tanya (?)', audio: 'か' }
      ],
      challenge: {
        q: 'Jika seorang warga lokal menjawab: "Sukoshi hanasemasu", apa artinya?',
        opts: [
          { text: 'Saya bisa berbicara sedikit bahasa Inggris', isCorrect: true, exp: 'Tepat! "Sukoshi" artinya sedikit. Bicaralah perlahan dengan kata sederhana.' },
          { text: 'Saya tidak bisa sama sekali', isCorrect: false, exp: 'Tidak bisa sama sekali biasanya "Zenzen hanasemasen".' },
          { text: 'Saya tidak mengerti', isCorrect: false, exp: 'Tidak mengerti biasanya "Wakarimasen".' }
        ]
      }
    },
    romaji: {
      tips: [
        { title: 'Nomor Telepon Darurat Jepang', desc: '110 untuk Polisi (Koban), 119 untuk Ambulans dan Pemadam Kebakaran. Operator darurat memiliki penerjemah bahasa Inggris.' },
        { title: 'Pos Polisi Koban (交番)', desc: 'Jika dompet atau ponselmu tertinggal di kereta atau taksi, segera datangi Koban terdekat. Kejujuran warga Jepang sangat tinggi dan 90% barang hilang kembali!' }
      ]
    }
  }
};

// ====================================================
// FUNGSI RENDER DETAIL PELAJARAN DINAMIS (LANGKAH 1 s/d 7)
// ====================================================


function getMangaPanelsHtml(lessonId) {
  const num = parseInt(lessonId, 10);
  switch (num) {
    case 1:
      return `
        <!-- PANEL 1: KEDATANGAN DI TOKYO -->
        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-station">
            <span class="manga-panel-tag">Panel 1 • Mendarat di Tokyo</span>
            <span>Kedatangan di Tokyo: Langkah Awal Kenji di Jepang</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="p1Sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#38BDF8"/><stop offset="60%" stop-color="#BAE6FD"/><stop offset="100%" stop-color="#F0F9FF"/></linearGradient>
                <linearGradient id="p1Building" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FEF3C7"/><stop offset="100%" stop-color="#FDE68A"/></linearGradient>
                <linearGradient id="p1Jihanki" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#3B82F6"/><stop offset="100%" stop-color="#1D4ED8"/></linearGradient>
                <linearGradient id="p1Blossom" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#F472B6"/><stop offset="100%" stop-color="#FDA4AF"/></linearGradient>
                <linearGradient id="p1Suitcase" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#94A3B8"/><stop offset="100%" stop-color="#475569"/></linearGradient>
              </defs>
              <rect width="700" height="240" fill="url(#p1Sky)"/>
              <path d="M520 220 L532 110 L534 110 L546 220 Z" fill="#FDA4AF" opacity="0.6"/>
              <line x1="533" y1="110" x2="533" y2="85" stroke="#F43F5E" stroke-width="2" opacity="0.7"/>
              <rect x="470" y="150" width="35" height="70" fill="#CBD5E1" opacity="0.5"/>
              <rect x="560" y="160" width="45" height="60" fill="#CBD5E1" opacity="0.5"/>
              <ellipse cx="160" cy="65" rx="55" ry="20" fill="#FFFFFF" opacity="0.9"/>
              <ellipse cx="420" cy="80" rx="65" ry="22" fill="#FFFFFF" opacity="0.85"/>
              <rect x="0" y="110" width="180" height="110" fill="#F1F5F9"/>
              <polygon points="-10,110 90,70 190,110" fill="#334155"/>
              <rect x="180" y="125" width="220" height="95" fill="url(#p1Building)"/>
              <polygon points="170,125 290,92 410,125" fill="#1E293B"/>
              <rect x="400" y="115" width="300" height="105" fill="#E2E8F0"/>
              <rect x="155" y="40" width="8" height="180" fill="#64748B"/>
              <path d="M-20 62 Q155 75 350 64 T720 70" fill="none" stroke="#334155" stroke-width="1.8"/>
              <rect x="0" y="220" width="700" height="140" fill="#94A3B8"/>
              <rect x="580" y="130" width="65" height="105" rx="5" fill="url(#p1Jihanki)" stroke="#1E3A8A" stroke-width="2"/>
              <rect x="588" y="140" width="49" height="35" rx="3" fill="#FFFFFF"/>
              <circle cx="595" cy="150" r="4" fill="#EF4444"/><circle cx="605" cy="150" r="4" fill="#10B981"/><circle cx="615" cy="150" r="4" fill="#F59E0B"/><circle cx="625" cy="150" r="4" fill="#3B82F6"/>
              <path d="M-20 235 Q30 180 50 100 Q60 50 90 20" fill="none" stroke="#78350F" stroke-width="16" stroke-linecap="round"/>
              <circle cx="70" cy="35" r="28" fill="url(#p1Blossom)"/><circle cx="105" cy="45" r="32" fill="url(#p1Blossom)"/><circle cx="50" cy="70" r="26" fill="url(#p1Blossom)"/>
              <!-- Suitcase -->
              <rect x="385" y="270" width="34" height="58" rx="6" fill="url(#p1Suitcase)" stroke="#1E293B" stroke-width="2"/>
              <path d="M397 270 L397 235 L407 235 L407 270" fill="none" stroke="#1E293B" stroke-width="3"/>
              <!-- Kenji -->
              <ellipse cx="330" cy="335" rx="42" ry="10" fill="#475569" opacity="0.4"/>
              <rect x="312" y="215" width="34" height="65" rx="8" fill="#3B82F6" stroke="#1E3A8A" stroke-width="2"/>
              <circle cx="332" cy="185" r="24" fill="#FFEDD5"/>
              <ellipse cx="322" cy="182" rx="3.5" ry="5.5" fill="#1E293B"/><ellipse cx="342" cy="182" rx="3.5" ry="5.5" fill="#1E293B"/>
              <path d="M328 193 Q332 201 336 193 Z" fill="#EF4444"/>
              <path d="M310 180 Q305 160 328 158 Q355 158 355 180 Q350 166 332 168 Q315 168 310 180 Z" fill="#78350F"/>
              <!-- Speech Bubble -->
              <g transform="translate(190, 20)">
                <rect x="0" y="0" width="240" height="52" rx="12" fill="#FFFFFF" stroke="#1E293B" stroke-width="2.5"/>
                <polygon points="120,52 130,64 138,52" fill="#FFFFFF"/>
                <polyline points="120,52 130,64 138,52" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="121" y1="52" x2="137" y2="52" stroke="#FFFFFF" stroke-width="3"/>
                <text x="14" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#2563EB"> KENJI</text>
                <text x="14" y="38" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="13.5" fill="#0F172A">Wah~ akhirnya di Jepang!</text>
              </g>
            </svg>
            <div class="manga-panel-num-tag">1</div>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('とうきょうに つきました')">
              <span>Audio:  Kenji: "とうきょうに つきました! (Tōkyō ni tsukimashita! - Kenji: Wah~ akhirnya di Jepang!)"</span>
            </button>
          </div>
        </div>

        <!-- PANEL 2: KEDAI RAMEN (KATAKANA) -->
        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-ramen">
            <span class="manga-panel-tag">Panel 2 • Rahasia Aksara Kedai Ramen</span>
            <span>Kedai Ramen: Menemukan Huruf Kotak Katakana</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="p2Roof" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#334155"/><stop offset="100%" stop-color="#1E293B"/></linearGradient>
                <linearGradient id="p2SignWood" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FDE68A"/><stop offset="50%" stop-color="#FEF3C7"/><stop offset="100%" stop-color="#FCD34D"/></linearGradient>
                <linearGradient id="p2Lantern" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#EF4444"/><stop offset="60%" stop-color="#DC2626"/><stop offset="100%" stop-color="#991B1B"/></linearGradient>
              </defs>
              <rect width="700" height="240" fill="#FEF9C3" opacity="0.5"/>
              <rect x="140" y="70" width="420" height="170" fill="#78350F"/>
              <polygon points="100,70 350,25 600,70" fill="url(#p2Roof)"/>
              <rect x="230" y="80" width="240" height="65" rx="8" fill="url(#p2SignWood)" stroke="#92400E" stroke-width="4"/>
              <text x="350" y="125" font-family="'Noto Sans JP', sans-serif" font-weight="900" font-size="36" fill="#78350F" text-anchor="middle" letter-spacing="4">ラーメン</text>
              <rect x="220" y="150" width="80" height="65" fill="#1E3A8A"/>
              <rect x="310" y="150" width="80" height="65" fill="#1E3A8A"/>
              <rect x="400" y="150" width="80" height="65" fill="#1E3A8A"/>
              <ellipse cx="177" cy="140" rx="22" ry="32" fill="url(#p2Lantern)"/>
              <text x="177" y="146" font-family="'Noto Sans JP', sans-serif" font-weight="900" font-size="16" fill="#FEF2F2" text-anchor="middle">拉麺</text>
              <ellipse cx="527" cy="140" rx="22" ry="32" fill="url(#p2Lantern)"/>
              <text x="527" y="146" font-family="'Noto Sans JP', sans-serif" font-weight="900" font-size="16" fill="#FEF2F2" text-anchor="middle">拉麺</text>
              <rect x="0" y="240" width="700" height="120" fill="#CBD5E1"/>
              <!-- Steaming Ramen Bowl -->
              <rect x="330" y="240" width="40" height="45" rx="3" fill="#B45309"/>
              <ellipse cx="350" cy="240" rx="25" ry="12" fill="#1E293B"/>
              <ellipse cx="350" cy="238" rx="21" ry="8" fill="#F59E0B"/>
              <circle cx="344" cy="237" r="5" fill="#FFFFFF"/>
              <!-- Kenji -->
              <ellipse cx="220" cy="335" rx="32" ry="8" fill="#475569" opacity="0.35"/>
              <rect x="204" y="215" width="32" height="62" rx="8" fill="#3B82F6"/>
              <circle cx="220" cy="182" r="23" fill="#FFEDD5"/>
              <circle cx="212" cy="180" r="3.5" fill="#1E293B"/><circle cx="228" cy="180" r="3.5" fill="#1E293B"/>
              <path d="M214 195 Q220 192 226 195" fill="none" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M202 176 Q198 156 220 155 Q242 155 242 176 Z" fill="#78350F"/>
              <!-- Sensei Tanaka -->
              <ellipse cx="480" cy="335" rx="34" ry="8" fill="#475569" opacity="0.35"/>
              <rect x="464" y="210" width="34" height="65" rx="8" fill="#15803D" stroke="#14532D" stroke-width="2"/>
              <path d="M466 220 L420 170" fill="none" stroke="#FFEDD5" stroke-width="7" stroke-linecap="round"/>
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
                <text x="12" y="19" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#D9383A">‍ SENSEI TANAKA</text>
                <text x="12" y="36" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="12.5" fill="#0F172A">Itu katakana! ラーメン = ramen~</text>
              </g>
            </svg>
            <div class="manga-panel-num-tag">2</div>
          </div>
          <div class="manga-dialogue-bar" style="display:flex; flex-direction:column; gap:8px;">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('ラーメン')">
              <span>Audio:  Sensei Tanaka: "ラーメン (Raamen - Katakana untuk makanan serapan luar)"</span>
            </button>
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('カタカナ')">
              <span>Audio:  Kenji: "カタカナ (Katakana - Huruf bersudut tegas untuk kata serapan)"</span>
            </button>
          </div>
        </div>

        <!-- PANEL 3: STASIUN KERETA (KANJI TOKYO) -->
        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-kanji">
            <span class="manga-panel-tag">Panel 3 • Stasiun Tokyo</span>
            <span>Stasiun Kereta: Mengenal Simbol Kanji "東京" (Tokyo)</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="p3Train" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#F8FAFC"/><stop offset="100%" stop-color="#E2E8F0"/></linearGradient>
              </defs>
              <rect width="700" height="150" fill="#E0F2FE"/>
              <rect x="0" y="0" width="700" height="28" fill="#334155"/>
              <g transform="translate(200, 35)">
                <line x1="50" y1="-10" x2="50" y2="10" stroke="#0F172A" stroke-width="3"/><line x1="250" y1="-10" x2="250" y2="10" stroke="#0F172A" stroke-width="3"/>
                <rect x="0" y="10" width="300" height="78" rx="8" fill="#FFFFFF" stroke="#1E293B" stroke-width="3"/>
                <rect x="10" y="18" width="280" height="7" fill="#10B981" rx="2"/>
                <text x="150" y="56" font-family="'Noto Sans JP', sans-serif" font-weight="900" font-size="34" fill="#0F172A" text-anchor="middle" letter-spacing="8">東京</text>
                <text x="150" y="74" font-family="'Noto Sans JP', sans-serif" font-weight="700" font-size="12" fill="#475569" text-anchor="middle">とうきょう • TOKYO</text>
              </g>
              <rect x="420" y="125" width="300" height="145" rx="12" fill="url(#p3Train)" stroke="#334155" stroke-width="3"/>
              <rect x="420" y="185" width="300" height="18" fill="#10B981"/>
              <rect x="0" y="240" width="700" height="120" fill="#94A3B8"/>
              <!-- Kenji Senang -->
              <ellipse cx="210" cy="340" rx="28" ry="7" fill="#475569" opacity="0.3"/>
              <rect x="195" y="200" width="30" height="65" rx="8" fill="#3B82F6"/>
              <circle cx="210" cy="165" r="23" fill="#FFEDD5"/>
              <polygon points="202,160 204,164 208,164 205,167 206,171 202,168 198,171 199,167 196,164 200,164" fill="#EAB308"/>
              <polygon points="218,160 220,164 224,164 221,167 222,171 218,168 214,171 215,167 212,164 216,164" fill="#EAB308"/>
              <path d="M205 174 Q210 183 215 174 Z" fill="#DC2626"/>
              <path d="M192 160 Q188 140 210 138 Q232 138 230 160 Z" fill="#78350F"/>
              <!-- Sensei Tanaka -->
              <ellipse cx="360" cy="335" rx="32" ry="8" fill="#475569" opacity="0.35"/>
              <rect x="344" y="210" width="34" height="65" rx="8" fill="#15803D" stroke="#14532D" stroke-width="2"/>
              <circle cx="362" cy="178" r="23" fill="#FFEDD5"/>
              <circle cx="355" cy="177" r="7" fill="none" stroke="#0F172A" stroke-width="2.5"/><circle cx="369" cy="177" r="7" fill="none" stroke="#0F172A" stroke-width="2.5"/>
              <path d="M358 190 Q362 196 366 190" fill="none" stroke="#B91C1C" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M344 172 Q340 152 362 152 Q384 152 382 172 Z" fill="#1E293B"/>
              <!-- BUBBLE KENJI -->
              <g transform="translate(20, 18)">
                <rect x="0" y="0" width="225" height="48" rx="12" fill="#FFFFFF" stroke="#1E293B" stroke-width="2.5"/>
                <polygon points="150,48 160,60 170,48" fill="#FFFFFF"/>
                <polyline points="150,48 160,60 170,48" stroke="#1E293B" stroke-width="2.5"/>
                <line x1="151" y1="48" x2="169" y2="48" stroke="#FFFFFF" stroke-width="3"/>
                <text x="12" y="19" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#2563EB"> KENJI</text>
                <text x="12" y="36" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="12.5" fill="#0F172A">Yang ini aku tahu! Tokyo!</text>
              </g>
              <!-- BUBBLE SENSEI -->
              <g transform="translate(425, 18)">
                <rect x="0" y="0" width="245" height="48" rx="12" fill="#FFFFFF" stroke="#1E293B" stroke-width="2.5"/>
                <polygon points="40,48 30,60 24,48" fill="#FFFFFF"/>
                <polyline points="40,48 30,60 24,48" stroke="#1E293B" stroke-width="2.5"/>
                <line x1="25" y1="48" x2="39" y2="48" stroke="#FFFFFF" stroke-width="3"/>
                <text x="12" y="19" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#D9383A">‍ SENSEI TANAKA</text>
                <text x="12" y="36" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="12.5" fill="#0F172A">Itu kanji! Tiap huruf punya arti~</text>
              </g>
            </svg>
            <div class="manga-panel-num-tag">3</div>
          </div>
          <div class="manga-dialogue-bar" style="display:flex; flex-direction:column; gap:8px;">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('とうきょう')">
              <span>Audio:  Pelafalan: "とうきょう (Tōkyō - Nama Kota Tokyo dalam Kanji 東京)"</span>
            </button>
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('かんじ')">
              <span>Audio:  Konsep: "かんじ (Kanji - Simbol arti kata dari masa lampau)"</span>
            </button>
          </div>
        </div>

        <!-- PANEL 4: KEDAI SUSHI (HIRAGANA & ETIS MAKAN) -->
        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-sushi">
            <span class="manga-panel-tag">Panel 4 • Kedai Sushi</span>
            <span>Mengenal Hiragana "すし" & Etika Makan (Itadakimasu)</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="p4Noren" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#166534"/><stop offset="100%" stop-color="#14532D"/></linearGradient>
                <linearGradient id="p4Wood" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#D97706"/><stop offset="50%" stop-color="#FBBF24"/><stop offset="100%" stop-color="#B45309"/></linearGradient>
              </defs>
              <rect width="700" height="230" fill="#FEF3C7" opacity="0.4"/>
              <rect x="150" y="80" width="400" height="160" fill="#78350F"/>
              <polygon points="110,80 350,38 590,80" fill="#1E293B"/>
              <rect x="250" y="85" width="200" height="60" rx="6" fill="url(#p4Wood)" stroke="#78350F" stroke-width="3"/>
              <text x="350" y="128" font-family="'Noto Sans JP', sans-serif" font-weight="900" font-size="36" fill="#78350F" text-anchor="middle" letter-spacing="8">すし</text>
              <rect x="230" y="150" width="75" height="60" fill="url(#p4Noren)"/>
              <rect x="315" y="150" width="75" height="60" fill="url(#p4Noren)"/>
              <rect x="400" y="150" width="75" height="60" fill="url(#p4Noren)"/>
              <rect x="0" y="240" width="700" height="120" fill="#E2E8F0"/>
              <!-- Kenji -->
              <ellipse cx="230" cy="335" rx="34" ry="8" fill="#475569" opacity="0.35"/>
              <rect x="214" y="215" width="32" height="62" rx="8" fill="#3B82F6"/>
              <circle cx="230" cy="182" r="23" fill="#FFEDD5"/>
              <path d="M220 180 A3 3 0 0 1 223 183 A5 5 0 0 1 217 184 A7 7 0 0 1 224 176" fill="none" stroke="#1E293B" stroke-width="2"/>
              <path d="M236 180 A3 3 0 0 1 239 183 A5 5 0 0 1 233 184 A7 7 0 0 1 240 176" fill="none" stroke="#1E293B" stroke-width="2"/>
              <path d="M224 196 Q228 193 232 196 Q236 199 240 196" fill="none" stroke="#1E293B" stroke-width="2" stroke-linecap="round"/>
              <path d="M212 176 Q208 156 230 155 Q252 155 252 176 Z" fill="#78350F"/>
              <!-- Sensei Tanaka -->
              <ellipse cx="360" cy="335" rx="32" ry="8" fill="#475569" opacity="0.35"/>
              <rect x="344" y="210" width="34" height="65" rx="8" fill="#15803D" stroke="#14532D" stroke-width="2"/>
              <circle cx="362" cy="178" r="23" fill="#FFEDD5"/>
              <circle cx="355" cy="177" r="7" fill="none" stroke="#0F172A" stroke-width="2.5"/><circle cx="369" cy="177" r="7" fill="none" stroke="#0F172A" stroke-width="2.5"/>
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
                <text x="12" y="19" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#D9383A">‍ SENSEI TANAKA</text>
                <text x="12" y="36" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="12.5" fill="#0F172A">Hiragana! Huruf paling dasar~</text>
              </g>
            </svg>
            <div class="manga-panel-num-tag">4</div>
          </div>
          <div class="manga-dialogue-bar" style="display:flex; flex-direction:column; gap:8px;">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('すし')">
              <span>Audio:  Pelafalan: "すし (Sushi - Ditulis menggunakan Hiragana melengkung)"</span>
            </button>
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('いただきます')">
              <span>Audio:  Etika Makan: "いただきます (Itadakimasu - Ucapan syukur sebelum makan)"</span>
            </button>
          </div>
        </div>
      `;


    case 2:
      return `
        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-station">
            <span class="manga-panel-tag">Panel 1</span>
            <span>Pagi Cerah di Tokyo: Menyapa Warga Pagi Hari</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="p2Sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FEF08A"/><stop offset="60%" stop-color="#BAE6FD"/><stop offset="100%" stop-color="#F0F9FF"/></linearGradient>
              </defs>
              <rect width="700" height="240" fill="url(#p2Sky)"/>
              <circle cx="560" cy="80" r="40" fill="#F59E0B" opacity="0.8"/>
              <rect x="0" y="140" width="700" height="100" fill="#E2E8F0"/>
              <polygon points="50,140 120,100 190,140" fill="#334155"/>
              <polygon points="250,140 340,90 430,140" fill="#1E293B"/>
              <rect x="0" y="240" width="700" height="120" fill="#CBD5E1"/>
              
    <!-- Kenji Standing Full Body -->
    <g transform="translate(240, 240) ">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <ellipse cx="14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#2563EB" stroke="#1E3A8A" stroke-width="2"/>
      <polygon points="-6 -25, 6 -25, 3 10, -3 10" fill="#FFFFFF"/>
      <path d="M-16 -15 L-28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-28" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="28" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -58 Q-14 -78 6 -76 Q20 -64 16 -48 Z" fill="#78350F"/>
      <circle cx="-7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="-6" cy="-56" r="1.2" fill="#FFFFFF"/>
      <circle cx="8" cy="-56" r="1.2" fill="#FFFFFF"/>
      <ellipse cx="-9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-5 -44 Q0 -38 5 -44" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  
              
    <!-- NPC Character Full Body -->
    <g transform="translate(460, 240) scale(-1, 1)">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <ellipse cx="12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#0284C7" stroke="#1E293B" stroke-width="2"/>
      <polygon points="-5 -25, 5 -25, 2 12, -2 12" fill="#FFFFFF"/>
      <path d="M-16 -15 L-26 15" stroke="#0284C7" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-26" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L26 15" stroke="#0284C7" stroke-width="8" stroke-linecap="round"/>
      <circle cx="26" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -56 Q-12 -76 12 -72 Q18 -58 16 -48 Z" fill="#1E293B"/>
      
      <circle cx="-7" cy="-53" r="3.2" fill="#1E293B"/>
      <circle cx="7" cy="-53" r="3.2" fill="#1E293B"/>
      <ellipse cx="-9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-4 -43 Q0 -38 4 -43" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
    </g>
  
              
    <g transform="translate(40, 25)">
      <rect x="0" y="0" width="290" height="64" rx="14" fill="#FFFFFF" stroke="#2563EB" stroke-width="2.5"/>
      <polygon points="160,64 170,76 178,64" fill="#FFFFFF"/>
      <polyline points="160,64 170,76 178,64" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="161" y1="64" x2="177" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#2563EB"> KENJI</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">おはようございます！</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Ohayō gozaimasu! (Selamat Pagi Santun)</text>
    </g>
  
              
    <g transform="translate(370, 25)">
      <rect x="0" y="0" width="290" height="64" rx="14" fill="#FFFFFF" stroke="#0284C7" stroke-width="2.5"/>
      <polygon points="120,64 130,76 138,64" fill="#FFFFFF"/>
      <polyline points="120,64 130,76 138,64" stroke="#0284C7" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="121" y1="64" x2="137" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#0284C7">‍ WARGA TOKYO</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">おはようございます！</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Ohayō gozaimasu! (Selamat Pagi!)</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('おはようございます')">
              <span>Audio:  Putar Audio: "おはようございます (Ohayō gozaimasu - Selamat Pagi Santun)"</span>
            </button>
          </div>
        </div>

        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-ramen">
            <span class="manga-panel-tag">Panel 2</span>
            <span>Di Trotoar: Kata Ajaib "Sumimasen!"</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#FFFBEB"/>
              <rect x="0" y="230" width="700" height="130" fill="#CBD5E1"/>
              <!-- City Suitcase -->
              <rect x="420" y="260" width="32" height="52" rx="5" fill="#EF4444" stroke="#991B1B" stroke-width="2"/>
              <line x1="428" y1="260" x2="428" y2="310" stroke="#FEE2E2" stroke-width="2"/>
              <line x1="444" y1="260" x2="444" y2="310" stroke="#FEE2E2" stroke-width="2"/>
              <path d="M432 260 L432 235 L440 235 L440 260" fill="none" stroke="#1E293B" stroke-width="2.5"/>
              
      <!-- Kenji Bowing (Formal Polite Japanese Ojigi) -->
      <g transform="translate(350, 235) ">
        <ellipse cx="0" cy="95" rx="36" ry="9" fill="#475569" opacity="0.35"/>
        <line x1="-10" y1="35" x2="-14" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
        <line x1="8" y1="35" x2="10" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
        <ellipse cx="-16" cy="92" rx="10" ry="5" fill="#EF4444"/>
        <ellipse cx="12" cy="92" rx="10" ry="5" fill="#EF4444"/>
        <path d="M-15 35 L-28 -5 L6 -15 L18 25 Z" fill="#2563EB" stroke="#1E3A8A" stroke-width="2"/>
        <polygon points="-12 -7, -2 -11, -4 10, -10 10" fill="#FFFFFF"/>
        <path d="M-22 5 L-12 40" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
        <circle cx="-12" cy="40" r="5" fill="#FFEDD5"/>
        <path d="M12 -2 L2 35" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
        <circle cx="2" cy="35" r="5" fill="#FFEDD5"/>
        <g transform="translate(-25, -28)">
          <circle cx="0" cy="0" r="22" fill="#FFEDD5"/>
          <path d="M-18 -8 Q-12 -26 8 -24 Q18 -10 14 4 Z" fill="#78350F"/>
          <path d="M-12 -2 Q-7 -7 -2 -2" fill="none" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M2 -2 Q7 -7 12 -2" fill="none" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round"/>
          <ellipse cx="-7" cy="5" rx="4" ry="2" fill="#FDA4AF"/>
          <ellipse cx="7" cy="5" rx="4" ry="2" fill="#FDA4AF"/>
          <path d="M-4 9 Q0 14 4 9" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
        </g>
      </g>
    
              
    <g transform="translate(160, 30)">
      <rect x="0" y="0" width="370" height="64" rx="14" fill="#FFFFFF" stroke="#C53030" stroke-width="2.5"/>
      <polygon points="190,64 200,76 208,64" fill="#FFFFFF"/>
      <polyline points="190,64 200,76 208,64" stroke="#C53030" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="191" y1="64" x2="207" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#C53030"> KENJI (Membungkuk Refleks)</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">あっ！すみません！</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Ah! Sumimasen! (Maaf permisi santun)</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('すみません')">
              <span>Audio:  Putar Audio: "すみません (Sumimasen - Permisi & Mohon Maaf)"</span>
            </button>
          </div>
        </div>

        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-station">
            <span class="manga-panel-tag">Panel 3</span>
            <span>Bertanya Jalan ke Stasiun: "Eki wa doko desu ka?"</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#EFF6FF"/>
              <rect x="0" y="230" width="700" height="130" fill="#CBD5E1"/>
              <!-- Direction Signpost -->
              <rect x="340" y="140" width="12" height="120" fill="#64748B"/>
              <rect x="310" y="145" width="75" height="28" rx="4" fill="#3B82F6"/>
              <text x="347" y="164" font-family="'Noto Sans JP', sans-serif" font-weight="900" font-size="13" fill="#FFFFFF" text-anchor="middle">駅 </text>
              
    <!-- Kenji Standing Full Body -->
    <g transform="translate(210, 240) ">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <ellipse cx="14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#2563EB" stroke="#1E3A8A" stroke-width="2"/>
      <polygon points="-6 -25, 6 -25, 3 10, -3 10" fill="#FFFFFF"/>
      <path d="M-16 -15 L-28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-28" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="28" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -58 Q-14 -78 6 -76 Q20 -64 16 -48 Z" fill="#78350F"/>
      <circle cx="-7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="-6" cy="-56" r="1.2" fill="#FFFFFF"/>
      <circle cx="8" cy="-56" r="1.2" fill="#FFFFFF"/>
      <ellipse cx="-9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-5 -44 Q0 -38 5 -44" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  
              
    <!-- NPC Character Full Body -->
    <g transform="translate(490, 240) scale(-1, 1)">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <ellipse cx="12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#0284C7" stroke="#1E293B" stroke-width="2"/>
      <polygon points="-5 -25, 5 -25, 2 12, -2 12" fill="#FFFFFF"/>
      <path d="M-16 -15 L-26 15" stroke="#0284C7" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-26" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L26 15" stroke="#0284C7" stroke-width="8" stroke-linecap="round"/>
      <circle cx="26" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -56 Q-12 -76 12 -72 Q18 -58 16 -48 Z" fill="#1E293B"/>
      
      <circle cx="-7" cy="-53" r="3.2" fill="#1E293B"/>
      <circle cx="7" cy="-53" r="3.2" fill="#1E293B"/>
      <ellipse cx="-9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-4 -43 Q0 -38 4 -43" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
    </g>
  
              
    <g transform="translate(30, 25)">
      <rect x="0" y="0" width="320" height="64" rx="14" fill="#FFFFFF" stroke="#2563EB" stroke-width="2.5"/>
      <polygon points="160,64 170,76 178,64" fill="#FFFFFF"/>
      <polyline points="160,64 170,76 178,64" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="161" y1="64" x2="177" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#2563EB"> KENJI</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">すみません、えきは どこですか？</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Sumimasen, eki wa doko desu ka? (Stasiun di mana?)</text>
    </g>
  
              
    <g transform="translate(360, 25)">
      <rect x="0" y="0" width="310" height="64" rx="14" fill="#FFFFFF" stroke="#10B981" stroke-width="2.5"/>
      <polygon points="140,64 150,76 158,64" fill="#FFFFFF"/>
      <polyline points="140,64 150,76 158,64" stroke="#10B981" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="141" y1="64" x2="157" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#10B981">‍ WARGA RAMAH</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">まっすぐ いってください</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Massugu itte kudasai (Lurus saja ya)</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('すみません えきは どこですか')">
              <span>Audio:  Kenji: "すみません、えきは どこですか？ (Permisi, stasiun di mana ya?)"</span>
            </button>
          </div>
        </div>

        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-culture">
            <span class="manga-panel-tag">Panel 4</span>
            <span>Membungkuk & Mengucapkan "Arigatō Gozaimasu!"</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#ECFDF5"/>
              <rect x="0" y="230" width="700" height="130" fill="#CBD5E1"/>
              <circle cx="180" cy="120" r="14" fill="#FDA4AF" opacity="0.7"/>
              <circle cx="520" cy="110" r="16" fill="#FDA4AF" opacity="0.7"/>
              <circle cx="480" cy="150" r="10" fill="#FDA4AF" opacity="0.6"/>
              
      <!-- Kenji Bowing (Formal Polite Japanese Ojigi) -->
      <g transform="translate(350, 235) ">
        <ellipse cx="0" cy="95" rx="36" ry="9" fill="#475569" opacity="0.35"/>
        <line x1="-10" y1="35" x2="-14" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
        <line x1="8" y1="35" x2="10" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
        <ellipse cx="-16" cy="92" rx="10" ry="5" fill="#EF4444"/>
        <ellipse cx="12" cy="92" rx="10" ry="5" fill="#EF4444"/>
        <path d="M-15 35 L-28 -5 L6 -15 L18 25 Z" fill="#2563EB" stroke="#1E3A8A" stroke-width="2"/>
        <polygon points="-12 -7, -2 -11, -4 10, -10 10" fill="#FFFFFF"/>
        <path d="M-22 5 L-12 40" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
        <circle cx="-12" cy="40" r="5" fill="#FFEDD5"/>
        <path d="M12 -2 L2 35" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
        <circle cx="2" cy="35" r="5" fill="#FFEDD5"/>
        <g transform="translate(-25, -28)">
          <circle cx="0" cy="0" r="22" fill="#FFEDD5"/>
          <path d="M-18 -8 Q-12 -26 8 -24 Q18 -10 14 4 Z" fill="#78350F"/>
          <path d="M-12 -2 Q-7 -7 -2 -2" fill="none" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M2 -2 Q7 -7 12 -2" fill="none" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round"/>
          <ellipse cx="-7" cy="5" rx="4" ry="2" fill="#FDA4AF"/>
          <ellipse cx="7" cy="5" rx="4" ry="2" fill="#FDA4AF"/>
          <path d="M-4 9 Q0 14 4 9" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
        </g>
      </g>
    
              
    <g transform="translate(150, 30)">
      <rect x="0" y="0" width="400" height="64" rx="14" fill="#FFFFFF" stroke="#10B981" stroke-width="2.5"/>
      <polygon points="200,64 210,76 218,64" fill="#FFFFFF"/>
      <polyline points="200,64 210,76 218,64" stroke="#10B981" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="201" y1="64" x2="217" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#10B981"> KENJI (Tersenyum Lega)</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">ありがとうございます！</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Arigatō gozaimasu! (Terima kasih banyak)</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('ありがとうございます')">
              <span>Audio:  Putar Audio: "ありがとうございます (Arigatō gozaimasu - Terima kasih banyak)"</span>
            </button>
          </div>
        </div>
      `;

    case 3:
      return `
        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-station">
            <span class="manga-panel-tag">Panel 1</span>
            <span>Masuk Konbini 24 Jam: "Irasshaimase!"</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#EFF6FF"/>
              <rect x="100" y="30" width="500" height="70" rx="8" fill="#FFFFFF" stroke="#1E293B" stroke-width="3"/>
              <rect x="100" y="30" width="500" height="15" fill="#10B981"/><rect x="100" y="45" width="500" height="15" fill="#F97316"/>
              <text x="350" y="88" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="22" fill="#1E293B" text-anchor="middle">CONVENIENCE STORE (24h)</text>
              <rect x="0" y="230" width="700" height="130" fill="#CBD5E1"/>
              
    <!-- Kenji Standing Full Body -->
    <g transform="translate(230, 240) ">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <ellipse cx="14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#2563EB" stroke="#1E3A8A" stroke-width="2"/>
      <polygon points="-6 -25, 6 -25, 3 10, -3 10" fill="#FFFFFF"/>
      <path d="M-16 -15 L-28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-28" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="28" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -58 Q-14 -78 6 -76 Q20 -64 16 -48 Z" fill="#78350F"/>
      <circle cx="-7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="-6" cy="-56" r="1.2" fill="#FFFFFF"/>
      <circle cx="8" cy="-56" r="1.2" fill="#FFFFFF"/>
      <ellipse cx="-9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-5 -44 Q0 -38 5 -44" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  
              
    <!-- NPC Character Full Body -->
    <g transform="translate(470, 240) scale(-1, 1)">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <ellipse cx="12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#0D9488" stroke="#1E293B" stroke-width="2"/>
      <polygon points="-5 -25, 5 -25, 2 12, -2 12" fill="#FFFFFF"/>
      <path d="M-16 -15 L-26 15" stroke="#0D9488" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-26" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L26 15" stroke="#0D9488" stroke-width="8" stroke-linecap="round"/>
      <circle cx="26" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -56 Q-12 -76 12 -72 Q18 -58 16 -48 Z" fill="#1E293B"/>
      
      <circle cx="-7" cy="-53" r="3.2" fill="#1E293B"/>
      <circle cx="7" cy="-53" r="3.2" fill="#1E293B"/>
      <ellipse cx="-9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-4 -43 Q0 -38 4 -43" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
    </g>
  
              
    <g transform="translate(350, 35)">
      <rect x="0" y="0" width="310" height="64" rx="14" fill="#FFFFFF" stroke="#0D9488" stroke-width="2.5"/>
      <polygon points="150,64 160,76 168,64" fill="#FFFFFF"/>
      <polyline points="150,64 160,76 168,64" stroke="#0D9488" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="151" y1="64" x2="167" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#0D9488"> KASIR KONBINI</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">いらっしゃいませ！</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Irasshaimase! (Selamat Datang!)</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('いらっしゃいませ')">
              <span>Audio:  Kasir: "いらっしゃいませ (Irasshaimase - Salam selamat datang toko)"</span>
            </button>
          </div>
        </div>

        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-ramen">
            <span class="manga-panel-tag">Panel 2</span>
            <span>Memilih Onigiri (150円) & Ocha Dingin (120円)</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#FFFBEB"/>
              <rect x="120" y="80" width="460" height="150" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="3" rx="8"/>
              <line x1="120" y1="155" x2="580" y2="155" stroke="#CBD5E1" stroke-width="3"/>
              <polygon points="200,145 225,100 250,145" fill="#FFFFFF" stroke="#1E293B" stroke-width="2"/>
              <rect x="212" y="128" width="26" height="17" fill="#1E293B"/>
              <rect x="190" y="158" width="70" height="25" rx="4" fill="#FEF08A" stroke="#CA8A04" stroke-width="1.5"/>
              <text x="225" y="175" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14" fill="#854D0E" text-anchor="middle">150円</text>
              <rect x="360" y="105" width="28" height="45" rx="4" fill="#86EFAC" stroke="#15803D" stroke-width="2"/>
              <rect x="367" y="97" width="14" height="8" rx="2" fill="#15803D"/>
              <rect x="340" y="158" width="70" height="25" rx="4" fill="#FEF08A" stroke="#CA8A04" stroke-width="1.5"/>
              <text x="375" y="175" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14" fill="#854D0E" text-anchor="middle">120円</text>
              
    <g transform="translate(170, 20)">
      <rect x="0" y="0" width="360" height="64" rx="14" fill="#FFFFFF" stroke="#D97706" stroke-width="2.5"/>
      <polygon points="180,64 190,76 198,64" fill="#FFFFFF"/>
      <polyline points="180,64 190,76 198,64" stroke="#D97706" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="181" y1="64" x2="197" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#D97706"> KENJI (Menghitung Belanjaan)</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">おにぎり 150円 ＋ お茶 120円！</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Onigiri 150 Yen + Teh 120 Yen = 270 Yen</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('ひゃく ごじゅう えん')">
              <span>Audio:  Angka: "150円 (Hyaku gojū en - Seratus lima puluh yen)"</span>
            </button>
          </div>
        </div>

        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-station">
            <span class="manga-panel-tag">Panel 3</span>
            <span>Di Depan Kasir: "Fukuro o onegaishimasu"</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#F0FDF4"/>
              <rect x="250" y="150" width="200" height="120" fill="#CBD5E1" stroke="#94A3B8" stroke-width="2" rx="6"/>
              <rect x="300" y="110" width="90" height="55" rx="4" fill="#1E293B"/>
              <rect x="310" y="120" width="70" height="25" fill="#10B981"/>
              <text x="345" y="137" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="13" fill="#FFFFFF" text-anchor="middle">¥270</text>
              
    <!-- Kenji Standing Full Body -->
    <g transform="translate(180, 240) ">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <ellipse cx="14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#2563EB" stroke="#1E3A8A" stroke-width="2"/>
      <polygon points="-6 -25, 6 -25, 3 10, -3 10" fill="#FFFFFF"/>
      <path d="M-16 -15 L-28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-28" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="28" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -58 Q-14 -78 6 -76 Q20 -64 16 -48 Z" fill="#78350F"/>
      <circle cx="-7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="-6" cy="-56" r="1.2" fill="#FFFFFF"/>
      <circle cx="8" cy="-56" r="1.2" fill="#FFFFFF"/>
      <ellipse cx="-9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-5 -44 Q0 -38 5 -44" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  
              
    <!-- NPC Character Full Body -->
    <g transform="translate(520, 240) scale(-1, 1)">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <ellipse cx="12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#0D9488" stroke="#1E293B" stroke-width="2"/>
      <polygon points="-5 -25, 5 -25, 2 12, -2 12" fill="#FFFFFF"/>
      <path d="M-16 -15 L-26 15" stroke="#0D9488" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-26" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L26 15" stroke="#0D9488" stroke-width="8" stroke-linecap="round"/>
      <circle cx="26" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -56 Q-12 -76 12 -72 Q18 -58 16 -48 Z" fill="#1E293B"/>
      
      <circle cx="-7" cy="-53" r="3.2" fill="#1E293B"/>
      <circle cx="7" cy="-53" r="3.2" fill="#1E293B"/>
      <ellipse cx="-9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-4 -43 Q0 -38 4 -43" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
    </g>
  
              
    <g transform="translate(50, 30)">
      <rect x="0" y="0" width="370" height="64" rx="14" fill="#FFFFFF" stroke="#16A34A" stroke-width="2.5"/>
      <polygon points="160,64 170,76 178,64" fill="#FFFFFF"/>
      <polyline points="160,64 170,76 178,64" stroke="#16A34A" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="161" y1="64" x2="177" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#16A34A"> KENJI (Minta Kantong Kresek)</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">ふくろを おねがいします</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Fukuro o onegaishimasu (Tolong kantong kreseknya)</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('ふくろを おねがいします')">
              <span>Audio:  Kenji: "ふくろを おねがいします (Tolong kantong kreseknya ya)"</span>
            </button>
          </div>
        </div>

        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-culture">
            <span class="manga-panel-tag">Panel 4</span>
            <span>Membayar Koin Yen: Mendapat Kembalian & Struk</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#EFF6FF"/>
              <rect x="0" y="230" width="700" height="130" fill="#CBD5E1"/>
              <circle cx="310" cy="280" r="28" fill="#FCD34D" stroke="#D97706" stroke-width="3"/>
              <text x="310" y="288" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="16" fill="#92400E" text-anchor="middle">500</text>
              <circle cx="390" cy="280" r="24" fill="#E2E8F0" stroke="#64748B" stroke-width="3"/>
              <text x="390" y="287" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="15" fill="#334155" text-anchor="middle">100</text>
              
    <!-- Kenji Standing Full Body -->
    <g transform="translate(190, 240) ">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <ellipse cx="14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#2563EB" stroke="#1E3A8A" stroke-width="2"/>
      <polygon points="-6 -25, 6 -25, 3 10, -3 10" fill="#FFFFFF"/>
      <path d="M-16 -15 L-28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-28" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="28" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -58 Q-14 -78 6 -76 Q20 -64 16 -48 Z" fill="#78350F"/>
      <circle cx="-7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="-6" cy="-56" r="1.2" fill="#FFFFFF"/>
      <circle cx="8" cy="-56" r="1.2" fill="#FFFFFF"/>
      <ellipse cx="-9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-5 -44 Q0 -38 5 -44" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  
              
    <!-- NPC Character Full Body -->
    <g transform="translate(510, 240) scale(-1, 1)">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <ellipse cx="12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#0D9488" stroke="#1E293B" stroke-width="2"/>
      <polygon points="-5 -25, 5 -25, 2 12, -2 12" fill="#FFFFFF"/>
      <path d="M-16 -15 L-26 15" stroke="#0D9488" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-26" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L26 15" stroke="#0D9488" stroke-width="8" stroke-linecap="round"/>
      <circle cx="26" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -56 Q-12 -76 12 -72 Q18 -58 16 -48 Z" fill="#1E293B"/>
      
      <circle cx="-7" cy="-53" r="3.2" fill="#1E293B"/>
      <circle cx="7" cy="-53" r="3.2" fill="#1E293B"/>
      <ellipse cx="-9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-4 -43 Q0 -38 4 -43" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
    </g>
  
              
    <g transform="translate(170, 30)">
      <rect x="0" y="0" width="360" height="64" rx="14" fill="#FFFFFF" stroke="#0284C7" stroke-width="2.5"/>
      <polygon points="180,64 190,76 198,64" fill="#FFFFFF"/>
      <polyline points="180,64 190,76 198,64" stroke="#0284C7" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="181" y1="64" x2="197" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#0284C7"> KASIR KONBINI</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">ありがとう ございました！</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Arigatō gozaimashita! (Terima kasih telah berbelanja)</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('ありがとう ございました')">
              <span>Audio:  Kasir: "ありがとう ございました (Arigatō gozaimashita - Terima kasih telah berbelanja)"</span>
            </button>
          </div>
        </div>
      `;

    case 4:
      return `
        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-station">
            <span class="manga-panel-tag">Panel 1</span>
            <span>Duduk di Meja Restoran: Disambut Air Es "Ohiya"</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#FEF3C7" opacity="0.5"/>
              <rect x="160" y="180" width="380" height="120" fill="#B45309" rx="8"/>
              <rect x="330" y="140" width="34" height="50" rx="4" fill="#BAE6FD" stroke="#0284C7" stroke-width="2"/>
              <text x="347" y="170" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="12" fill="#0369A1" text-anchor="middle">冷水</text>
              
    <!-- Kenji Standing Full Body -->
    <g transform="translate(220, 240) ">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <ellipse cx="14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#2563EB" stroke="#1E3A8A" stroke-width="2"/>
      <polygon points="-6 -25, 6 -25, 3 10, -3 10" fill="#FFFFFF"/>
      <path d="M-16 -15 L-28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-28" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="28" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -58 Q-14 -78 6 -76 Q20 -64 16 -48 Z" fill="#78350F"/>
      <circle cx="-7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="-6" cy="-56" r="1.2" fill="#FFFFFF"/>
      <circle cx="8" cy="-56" r="1.2" fill="#FFFFFF"/>
      <ellipse cx="-9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-5 -44 Q0 -38 5 -44" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  
              
    <!-- NPC Character Full Body -->
    <g transform="translate(480, 240) scale(-1, 1)">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <ellipse cx="12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#0284C7" stroke="#1E293B" stroke-width="2"/>
      <polygon points="-5 -25, 5 -25, 2 12, -2 12" fill="#FFFFFF"/>
      <path d="M-16 -15 L-26 15" stroke="#0284C7" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-26" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L26 15" stroke="#0284C7" stroke-width="8" stroke-linecap="round"/>
      <circle cx="26" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -56 Q-12 -76 12 -72 Q18 -58 16 -48 Z" fill="#1E293B"/>
      
      <circle cx="-7" cy="-53" r="3.2" fill="#1E293B"/>
      <circle cx="7" cy="-53" r="3.2" fill="#1E293B"/>
      <ellipse cx="-9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-4 -43 Q0 -38 4 -43" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
    </g>
  
              
    <g transform="translate(170, 25)">
      <rect x="0" y="0" width="360" height="64" rx="14" fill="#FFFFFF" stroke="#B45309" stroke-width="2.5"/>
      <polygon points="180,64 190,76 198,64" fill="#FFFFFF"/>
      <polyline points="180,64 190,76 198,64" stroke="#B45309" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="181" y1="64" x2="197" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#B45309">‍ PELAYAN RESTORAN</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">おひや でございます</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Ohiya de gozaimasu (Ini air es dingin gratisnya)</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('おひや')">
              <span>Audio:  Kosakata: "おひや (Ohiya - Air es gratis di restoran Jepang)"</span>
            </button>
          </div>
        </div>

        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-ramen">
            <span class="manga-panel-tag">Panel 2</span>
            <span>Menunjuk Menu Bergambar: "Kore o kudasai!"</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#FFFBEB"/>
              <rect x="180" y="80" width="340" height="160" rx="8" fill="#FFFFFF" stroke="#78350F" stroke-width="4"/>
              <line x1="350" y1="80" x2="350" y2="240" stroke="#CBD5E1" stroke-width="2"/>
              <ellipse cx="265" cy="140" rx="40" ry="22" fill="#F59E0B"/>
              <circle cx="260" cy="138" r="8" fill="#FFFFFF"/>
              <text x="265" y="174" font-family="'Noto Sans JP', sans-serif" font-weight="700" font-size="11" fill="#CA8A04" text-anchor="middle">とくせい (850えん)</text>
              <text x="265" y="192" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="15" fill="#78350F" text-anchor="middle">特製ラーメン 850円</text>
              
    <!-- Kenji Standing Full Body -->
    <g transform="translate(220, 240) ">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <ellipse cx="14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#2563EB" stroke="#1E3A8A" stroke-width="2"/>
      <polygon points="-6 -25, 6 -25, 3 10, -3 10" fill="#FFFFFF"/>
      <path d="M-16 -15 L-28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-28" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="28" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -58 Q-14 -78 6 -76 Q20 -64 16 -48 Z" fill="#78350F"/>
      <circle cx="-7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="-6" cy="-56" r="1.2" fill="#FFFFFF"/>
      <circle cx="8" cy="-56" r="1.2" fill="#FFFFFF"/>
      <ellipse cx="-9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-5 -44 Q0 -38 5 -44" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  
              
    <g transform="translate(180, 20)">
      <rect x="0" y="0" width="360" height="64" rx="14" fill="#FFFFFF" stroke="#2563EB" stroke-width="2.5"/>
      <polygon points="160,64 170,76 178,64" fill="#FFFFFF"/>
      <polyline points="160,64 170,76 178,64" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="161" y1="64" x2="177" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#2563EB"> KENJI (Menunjuk Menu)</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">これ を ひとつ ください！</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Kore o hitotsu kudasai! (Pesan yang ini satu ya)</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('これ を ひとつ ください')">
              <span>Audio:  Kenji: "これ を ひとつ ください (Kore o hitotsu kudasai - Tolong yang ini satu)"</span>
            </button>
          </div>
        </div>

        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-station">
            <span class="manga-panel-tag">Panel 3</span>
            <span>Makan Tiba: Ucapan Sakti "Itadakimasu!"</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#ECFDF5"/>
              <rect x="0" y="240" width="700" height="120" fill="#CBD5E1"/>
              <!-- Ramen bowl -->
              <rect x="330" y="240" width="40" height="45" rx="3" fill="#B45309"/>
              <ellipse cx="350" cy="240" rx="28" ry="12" fill="#1E293B"/>
              <ellipse cx="350" cy="238" rx="22" ry="8" fill="#F59E0B"/>
              <circle cx="344" cy="237" r="5" fill="#FFFFFF"/>
              
    <!-- Kenji Standing Full Body -->
    <g transform="translate(230, 240) ">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <ellipse cx="14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#2563EB" stroke="#1E3A8A" stroke-width="2"/>
      <polygon points="-6 -25, 6 -25, 3 10, -3 10" fill="#FFFFFF"/>
      <path d="M-16 -15 L-28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-28" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="28" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -58 Q-14 -78 6 -76 Q20 -64 16 -48 Z" fill="#78350F"/>
      <circle cx="-7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="-6" cy="-56" r="1.2" fill="#FFFFFF"/>
      <circle cx="8" cy="-56" r="1.2" fill="#FFFFFF"/>
      <ellipse cx="-9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-5 -44 Q0 -38 5 -44" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  
              
    <g transform="translate(170, 30)">
      <rect x="0" y="0" width="360" height="64" rx="14" fill="#FFFFFF" stroke="#10B981" stroke-width="2.5"/>
      <polygon points="180,64 190,76 198,64" fill="#FFFFFF"/>
      <polyline points="180,64 190,76 198,64" stroke="#10B981" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="181" y1="64" x2="197" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#10B981"> KENJI (Kedua Tangan Merapat)</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">いただきます！</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Itadakimasu! (Selamat makan & terima kasih)</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('いただきます')">
              <span>Audio:  Etika Makan: "いただきます (Itadakimasu - Ucapan rasa syukur sebelum makan)"</span>
            </button>
          </div>
        </div>

        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-culture">
            <span class="manga-panel-tag">Panel 4</span>
            <span>Selesai Makan: "Gochisousama! Okaikei kudasai"</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#FEF2F2"/>
              <rect x="0" y="240" width="700" height="120" fill="#CBD5E1"/>
              <rect x="330" y="240" width="40" height="45" rx="3" fill="#B45309"/>
              <ellipse cx="350" cy="240" rx="28" ry="12" fill="#1E293B"/>
              <ellipse cx="350" cy="238" rx="22" ry="8" fill="#FFFFFF"/>
              <text x="350" y="243" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="12" fill="#10B981" text-anchor="middle">完食 </text>
              
    <!-- Kenji Standing Full Body -->
    <g transform="translate(230, 240) ">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <ellipse cx="14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#2563EB" stroke="#1E3A8A" stroke-width="2"/>
      <polygon points="-6 -25, 6 -25, 3 10, -3 10" fill="#FFFFFF"/>
      <path d="M-16 -15 L-28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-28" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="28" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -58 Q-14 -78 6 -76 Q20 -64 16 -48 Z" fill="#78350F"/>
      <circle cx="-7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="-6" cy="-56" r="1.2" fill="#FFFFFF"/>
      <circle cx="8" cy="-56" r="1.2" fill="#FFFFFF"/>
      <ellipse cx="-9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-5 -44 Q0 -38 5 -44" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  
              
    <g transform="translate(160, 30)">
      <rect x="0" y="0" width="380" height="64" rx="14" fill="#FFFFFF" stroke="#C53030" stroke-width="2.5"/>
      <polygon points="180,64 190,76 198,64" fill="#FFFFFF"/>
      <polyline points="180,64 190,76 198,64" stroke="#C53030" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="181" y1="64" x2="197" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#C53030"> KENJI (Kenyang & Puas)</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">ごちそうさまでした！</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Gochisousama deshita! Okaikei kudasai (Minta bon ya)</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('ごちそうさまでした おかいけい おねがいします')">
              <span>Audio:  Kenji: "ごちそうさまでした！おかいけい おねがいします (Terima kasih atas hidangannya! Minta bon ya)"</span>
            </button>
          </div>
        </div>
      `;

    case 5:
      return `
        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-station">
            <span class="manga-panel-tag">Panel 1</span>
            <span>Gerbang Tiket Kereta: Kartu IC Suica "Piik!"</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#EFF6FF"/>
              <rect x="240" y="100" width="220" height="160" rx="10" fill="#1E293B" stroke="#475569" stroke-width="3"/>
              <rect x="310" y="120" width="80" height="40" rx="6" fill="#10B981"/>
              <text x="350" y="145" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="16" fill="#FFFFFF" text-anchor="middle">IC 読取 </text>
              <rect x="325" y="90" width="50" height="32" rx="4" fill="#86EFAC" stroke="#15803D" stroke-width="2"/>
              <text x="350" y="110" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#14532D" text-anchor="middle">Suica</text>
              
    <g transform="translate(180, 20)">
      <rect x="0" y="0" width="340" height="64" rx="14" fill="#FFFFFF" stroke="#10B981" stroke-width="2.5"/>
      <polygon points="170,64 180,76 188,64" fill="#FFFFFF"/>
      <polyline points="170,64 180,76 188,64" stroke="#10B981" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="171" y1="64" x2="187" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#10B981">Audio:  GERBANG TIKET OTOMATIS</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">ピッ！ (Piik!)</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Kartu Suica lolos gerbang stasiun</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('すいか')">
              <span>Audio:  Kosakata: "Suica (すいか - Kartu sakti kereta & belanja Jepang)"</span>
            </button>
          </div>
        </div>

        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-ramen">
            <span class="manga-panel-tag">Panel 2</span>
            <span>Peta Subway Tokyo Rumit: Mencari Jalur Shinjuku</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#F8FAFC"/>
              <rect x="120" y="60" width="460" height="170" rx="8" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="3"/>
              <path d="M150 100 L300 100 L400 180 L550 180" stroke="#EF4444" stroke-width="6" fill="none"/>
              <path d="M150 180 L280 180 L380 90 L550 90" stroke="#3B82F6" stroke-width="6" fill="none"/>
              <path d="M250 70 L250 220" stroke="#10B981" stroke-width="6" fill="none"/>
              <circle cx="300" cy="100" r="8" fill="#FFFFFF" stroke="#1E293B" stroke-width="3"/>
              <text x="300" y="74" font-family="'Noto Sans JP', sans-serif" font-weight="700" font-size="10" fill="#0284C7" text-anchor="middle">しんじゅく</text>
              <text x="300" y="88" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="13" fill="#1E293B" text-anchor="middle">新宿 (Shinjuku)</text>
              
    <g transform="translate(170, 15)">
      <rect x="0" y="0" width="360" height="64" rx="14" fill="#FFFFFF" stroke="#D97706" stroke-width="2.5"/>
      <polygon points="180,64 190,76 198,64" fill="#FFFFFF"/>
      <polyline points="180,64 190,76 198,64" stroke="#D97706" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="181" y1="64" x2="197" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#D97706"> KENJI (Melihat Peta)</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">しんじゅくは どこだろう？</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Shinjuku wa doko darou? (Peron mana ya?)</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('しんじゅく')">
              <span>Audio:  Stasiun: "しんじゅく (Shinjuku - Stasiun tersibuk di dunia)"</span>
            </button>
          </div>
        </div>

        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-station">
            <span class="manga-panel-tag">Panel 3</span>
            <span>Bertanya ke Petugas Loket: "Shinjuku no hōmu wa doko desu ka?"</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#EFF6FF"/>
              <rect x="0" y="240" width="700" height="120" fill="#CBD5E1"/>
              
    <!-- Kenji Standing Full Body -->
    <g transform="translate(220, 240) ">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <ellipse cx="14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#2563EB" stroke="#1E3A8A" stroke-width="2"/>
      <polygon points="-6 -25, 6 -25, 3 10, -3 10" fill="#FFFFFF"/>
      <path d="M-16 -15 L-28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-28" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="28" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -58 Q-14 -78 6 -76 Q20 -64 16 -48 Z" fill="#78350F"/>
      <circle cx="-7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="-6" cy="-56" r="1.2" fill="#FFFFFF"/>
      <circle cx="8" cy="-56" r="1.2" fill="#FFFFFF"/>
      <ellipse cx="-9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-5 -44 Q0 -38 5 -44" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  
              
    <!-- NPC Character Full Body -->
    <g transform="translate(480, 240) scale(-1, 1)">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <ellipse cx="12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#1E3A8A" stroke="#1E293B" stroke-width="2"/>
      <polygon points="-5 -25, 5 -25, 2 12, -2 12" fill="#FFFFFF"/>
      <path d="M-16 -15 L-26 15" stroke="#1E3A8A" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-26" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L26 15" stroke="#1E3A8A" stroke-width="8" stroke-linecap="round"/>
      <circle cx="26" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -56 Q-12 -76 12 -72 Q18 -58 16 -48 Z" fill="#1E293B"/>
      <rect x="-16" y="-76" width="32" height="8" rx="2" fill="#1E3A8A"/><line x1="-18" y1="-68" x2="18" y2="-68" stroke="#F59E0B" stroke-width="2"/>
      <circle cx="-7" cy="-53" r="3.2" fill="#1E293B"/>
      <circle cx="7" cy="-53" r="3.2" fill="#1E293B"/>
      <ellipse cx="-9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-4 -43 Q0 -38 4 -43" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
    </g>
  
              
    <g transform="translate(30, 25)">
      <rect x="0" y="0" width="330" height="64" rx="14" fill="#FFFFFF" stroke="#2563EB" stroke-width="2.5"/>
      <polygon points="160,64 170,76 178,64" fill="#FFFFFF"/>
      <polyline points="160,64 170,76 178,64" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="161" y1="64" x2="177" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#2563EB"> KENJI</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">しんじゅくの ホームは どこですか？</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Shinjuku no hōmu wa doko desu ka?</text>
    </g>
  
              
    <g transform="translate(370, 25)">
      <rect x="0" y="0" width="305" height="64" rx="14" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="2.5"/>
      <polygon points="140,64 150,76 158,64" fill="#FFFFFF"/>
      <polyline points="140,64 150,76 158,64" stroke="#1E3A8A" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="141" y1="64" x2="157" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#1E3A8A">‍️ PETUGAS STASIUN</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">2ばんせんです。いってらっしゃい！</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Ni-ban sen desu (Di peron nomor 2)</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('しんじゅくの ホームは どこですか')">
              <span>Audio:  Kenji: "しんじゅくの ホームは どこですか？ (Peron Shinjuku di mana ya?)"</span>
            </button>
          </div>
        </div>

        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-culture">
            <span class="manga-panel-tag">Panel 4</span>
            <span>Peron 2 Kereta Hijau Yamanote Tiba Tepat Waktu</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#F0FDF4"/>
              <rect x="0" y="220" width="700" height="140" fill="#94A3B8"/>
              <rect x="150" y="110" width="400" height="130" rx="10" fill="#FFFFFF" stroke="#10B981" stroke-width="6"/>
              <rect x="150" y="160" width="400" height="25" fill="#10B981"/>
              <text x="350" y="132" font-family="'Noto Sans JP', sans-serif" font-weight="700" font-size="11" fill="#0284C7" text-anchor="middle">2ばんせん • しんじゅく・しぶや ほうめん</text>
              <text x="350" y="150" font-family="'Noto Sans JP', sans-serif" font-weight="900" font-size="18" fill="#1E293B" text-anchor="middle">2番線 • 新宿・渋谷方面</text>
              
    <!-- Kenji Standing Full Body -->
    <g transform="translate(240, 240) ">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <ellipse cx="14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#2563EB" stroke="#1E3A8A" stroke-width="2"/>
      <polygon points="-6 -25, 6 -25, 3 10, -3 10" fill="#FFFFFF"/>
      <path d="M-16 -15 L-28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-28" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="28" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -58 Q-14 -78 6 -76 Q20 -64 16 -48 Z" fill="#78350F"/>
      <circle cx="-7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="-6" cy="-56" r="1.2" fill="#FFFFFF"/>
      <circle cx="8" cy="-56" r="1.2" fill="#FFFFFF"/>
      <ellipse cx="-9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-5 -44 Q0 -38 5 -44" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  
              
    <g transform="translate(170, 25)">
      <rect x="0" y="0" width="370" height="64" rx="14" fill="#FFFFFF" stroke="#059669" stroke-width="2.5"/>
      <polygon points="180,64 190,76 198,64" fill="#FFFFFF"/>
      <polyline points="180,64 190,76 198,64" stroke="#059669" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="181" y1="64" x2="197" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#059669"> KENJI (Naik Kereta dengan Tenang)</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">2番線 • 新宿方面</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Tepat waktu per detik! Hebat sekali kereta Jepang!</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('にばんせん')">
              <span>Audio:  Audio Peron: "2ばんせん (Ni-ban sen - Peron nomor 2)"</span>
            </button>
          </div>
        </div>
      `;

    case 6:
      return `
        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-station">
            <span class="manga-panel-tag">Panel 1</span>
            <span>Toko Suvenir Asakusa: Daruma & Gantungan Fuji</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#FFFBEB"/>
              <rect x="100" y="40" width="500" height="60" rx="8" fill="#78350F"/>
              <text x="350" y="80" font-family="'Noto Sans JP', sans-serif" font-weight="900" font-size="24" fill="#FEF3C7" text-anchor="middle">おみやげ • ASAKUSA SOUVENIR</text>
              <circle cx="240" cy="180" r="35" fill="#DC2626"/>
              <circle cx="240" cy="170" r="20" fill="#FEF2F2"/><circle cx="232" cy="168" r="4" fill="#1E293B"/><circle cx="248" cy="168" r="4" fill="#1E293B"/>
              <polygon points="450,210 500,140 550,210" fill="#0284C7"/><polygon points="485,160 500,140 515,160" fill="#FFFFFF"/>
              
    <g transform="translate(170, 25)">
      <rect x="0" y="0" width="360" height="64" rx="14" fill="#FFFFFF" stroke="#B45309" stroke-width="2.5"/>
      <polygon points="180,64 190,76 198,64" fill="#FFFFFF"/>
      <polyline points="180,64 190,76 198,64" stroke="#B45309" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="181" y1="64" x2="197" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#B45309"> KENJI</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">おみやげがたくさん！</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Banyak suvenir unik khas Jepang!</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('おみやげ')">
              <span>Audio:  Kosakata: "おみやげ (Omiyage - Tradisi oleh-oleh suvenir Jepang)"</span>
            </button>
          </div>
        </div>

        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-ramen">
            <span class="manga-panel-tag">Panel 2</span>
            <span>Minta Izin Melihat Barang: "Kore o misete kudasai"</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#EFF6FF"/>
              <rect x="0" y="240" width="700" height="120" fill="#CBD5E1"/>
              
    <!-- Kenji Standing Full Body -->
    <g transform="translate(220, 240) ">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <ellipse cx="14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#2563EB" stroke="#1E3A8A" stroke-width="2"/>
      <polygon points="-6 -25, 6 -25, 3 10, -3 10" fill="#FFFFFF"/>
      <path d="M-16 -15 L-28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-28" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="28" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -58 Q-14 -78 6 -76 Q20 -64 16 -48 Z" fill="#78350F"/>
      <circle cx="-7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="-6" cy="-56" r="1.2" fill="#FFFFFF"/>
      <circle cx="8" cy="-56" r="1.2" fill="#FFFFFF"/>
      <ellipse cx="-9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-5 -44 Q0 -38 5 -44" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  
              
    <!-- NPC Character Full Body -->
    <g transform="translate(480, 240) scale(-1, 1)">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <ellipse cx="12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#0284C7" stroke="#1E293B" stroke-width="2"/>
      <polygon points="-5 -25, 5 -25, 2 12, -2 12" fill="#FFFFFF"/>
      <path d="M-16 -15 L-26 15" stroke="#0284C7" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-26" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L26 15" stroke="#0284C7" stroke-width="8" stroke-linecap="round"/>
      <circle cx="26" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -56 Q-12 -76 12 -72 Q18 -58 16 -48 Z" fill="#1E293B"/>
      
      <circle cx="-7" cy="-53" r="3.2" fill="#1E293B"/>
      <circle cx="7" cy="-53" r="3.2" fill="#1E293B"/>
      <ellipse cx="-9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-4 -43 Q0 -38 4 -43" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
    </g>
  
              
    <g transform="translate(170, 25)">
      <rect x="0" y="0" width="360" height="64" rx="14" fill="#FFFFFF" stroke="#2563EB" stroke-width="2.5"/>
      <polygon points="180,64 190,76 198,64" fill="#FFFFFF"/>
      <polyline points="180,64 190,76 198,64" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="181" y1="64" x2="197" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#2563EB"> KENJI (Sopan)</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">これ、みせて ください</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Kore, misete kudasai (Boleh lihat yang ini?)</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('これ みせて ください')">
              <span>Audio:  Kenji: "これ、みせて ください (Kore, misete kudasai - Tolong perlihatkan barang ini)"</span>
            </button>
          </div>
        </div>

        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-station">
            <span class="manga-panel-tag">Panel 3</span>
            <span>Kasir Bebas Pajak: "Tax Free (めんぜい) に なりますか？"</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#F0FDF4"/>
              <rect x="180" y="60" width="340" height="80" rx="8" fill="#C53030"/>
              <text x="350" y="98" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="22" fill="#FFFFFF" text-anchor="middle">JAPAN TAX-FREE SHOP</text>
              <text x="350" y="124" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="13" fill="#FEF2F2" text-anchor="middle">免税店 • Tunjukkan Paspor</text>
              
    <!-- Kenji Standing Full Body -->
    <g transform="translate(220, 240) ">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <ellipse cx="14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#2563EB" stroke="#1E3A8A" stroke-width="2"/>
      <polygon points="-6 -25, 6 -25, 3 10, -3 10" fill="#FFFFFF"/>
      <path d="M-16 -15 L-28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-28" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="28" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -58 Q-14 -78 6 -76 Q20 -64 16 -48 Z" fill="#78350F"/>
      <circle cx="-7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="-6" cy="-56" r="1.2" fill="#FFFFFF"/>
      <circle cx="8" cy="-56" r="1.2" fill="#FFFFFF"/>
      <ellipse cx="-9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-5 -44 Q0 -38 5 -44" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  
              
    <g transform="translate(170, 160)">
      <rect x="0" y="0" width="360" height="64" rx="14" fill="#FFFFFF" stroke="#16A34A" stroke-width="2.5"/>
      <polygon points="180,64 190,76 198,64" fill="#FFFFFF"/>
      <polyline points="180,64 190,76 198,64" stroke="#16A34A" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="181" y1="64" x2="197" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#16A34A"> KENJI (Menunjukkan Paspor)</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">めんぜいに なりますか？</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Menzei ni narimasu ka? (Bisa bebas pajak?)</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('めんぜいに なりますか')">
              <span>Audio:  Kenji: "めんぜいに なりますか？ (Menzei ni narimasu ka? - Apakah bisa Tax-Free?)"</span>
            </button>
          </div>
        </div>

        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-culture">
            <span class="manga-panel-tag">Panel 4</span>
            <span>Bingkisan Rapi Cantik Khas Jepang: "Dōzo!"</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#FFF1F2"/>
              <rect x="280" y="130" width="140" height="100" rx="8" fill="#FDA4AF" stroke="#E11D48" stroke-width="3"/>
              <line x1="350" y1="130" x2="350" y2="230" stroke="#E11D48" stroke-width="6"/>
              <line x1="280" y1="180" x2="420" y2="180" stroke="#E11D48" stroke-width="6"/>
              <circle cx="350" cy="130" r="16" fill="#BE123C"/>
              
    <!-- NPC Character Full Body -->
    <g transform="translate(480, 240) scale(-1, 1)">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <ellipse cx="12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#0284C7" stroke="#1E293B" stroke-width="2"/>
      <polygon points="-5 -25, 5 -25, 2 12, -2 12" fill="#FFFFFF"/>
      <path d="M-16 -15 L-26 15" stroke="#0284C7" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-26" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L26 15" stroke="#0284C7" stroke-width="8" stroke-linecap="round"/>
      <circle cx="26" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -56 Q-12 -76 12 -72 Q18 -58 16 -48 Z" fill="#1E293B"/>
      
      <circle cx="-7" cy="-53" r="3.2" fill="#1E293B"/>
      <circle cx="7" cy="-53" r="3.2" fill="#1E293B"/>
      <ellipse cx="-9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-4 -43 Q0 -38 4 -43" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
    </g>
  
              
    <g transform="translate(170, 30)">
      <rect x="0" y="0" width="360" height="64" rx="14" fill="#FFFFFF" stroke="#BE123C" stroke-width="2.5"/>
      <polygon points="190,64 200,76 208,64" fill="#FFFFFF"/>
      <polyline points="190,64 200,76 208,64" stroke="#BE123C" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="191" y1="64" x2="207" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#BE123C">‍ STAF TOKO</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">どうぞ！ありがとう ございました</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Dōzo! (Silakan diterima bingkisannya)</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('どうぞ')">
              <span>Audio:  Staf Toko: "どうぞ (Dōzo - Silakan diterima)"</span>
            </button>
          </div>
        </div>
      `;

    case 7:
      return `
        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-station">
            <span class="manga-panel-tag">Panel 1</span>
            <span>Tiba di Lobi Ryokan: Sambutan Kimono Cantik</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#FEF3C7" opacity="0.5"/>
              <rect x="0" y="240" width="700" height="120" fill="#CBD5E1"/>
              
    <!-- Kenji Standing Full Body -->
    <g transform="translate(220, 240) ">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <ellipse cx="14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#2563EB" stroke="#1E3A8A" stroke-width="2"/>
      <polygon points="-6 -25, 6 -25, 3 10, -3 10" fill="#FFFFFF"/>
      <path d="M-16 -15 L-28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-28" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="28" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -58 Q-14 -78 6 -76 Q20 -64 16 -48 Z" fill="#78350F"/>
      <circle cx="-7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="-6" cy="-56" r="1.2" fill="#FFFFFF"/>
      <circle cx="8" cy="-56" r="1.2" fill="#FFFFFF"/>
      <ellipse cx="-9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-5 -44 Q0 -38 5 -44" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  
              
    <!-- NPC Character Full Body -->
    <g transform="translate(480, 240) scale(-1, 1)">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <ellipse cx="12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#EC4899" stroke="#1E293B" stroke-width="2"/>
      <polygon points="-5 -25, 5 -25, 2 12, -2 12" fill="#FFFFFF"/>
      <path d="M-16 -15 L-26 15" stroke="#EC4899" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-26" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L26 15" stroke="#EC4899" stroke-width="8" stroke-linecap="round"/>
      <circle cx="26" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -56 Q-12 -76 12 -72 Q18 -58 16 -48 Z" fill="#1E293B"/>
      
      <circle cx="-7" cy="-53" r="3.2" fill="#1E293B"/>
      <circle cx="7" cy="-53" r="3.2" fill="#1E293B"/>
      <ellipse cx="-9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-4 -43 Q0 -38 4 -43" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
    </g>
  
              
    <g transform="translate(170, 25)">
      <rect x="0" y="0" width="360" height="64" rx="14" fill="#FFFFFF" stroke="#EC4899" stroke-width="2.5"/>
      <polygon points="180,64 190,76 198,64" fill="#FFFFFF"/>
      <polyline points="180,64 190,76 198,64" stroke="#EC4899" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="181" y1="64" x2="197" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#EC4899"> RESEPSIONIS RYOKAN</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">いらっしゃいませ！</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Irasshaimase! (Selamat datang di penginapan kami)</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('いらっしゃいませ')">
              <span>Audio:  Ryokan: "いらっしゃいませ (Irasshaimase - Selamat datang)"</span>
            </button>
          </div>
        </div>

        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-ramen">
            <span class="manga-panel-tag">Panel 2</span>
            <span>Menunjukkan Paspor: "Pasupōto o dōzo"</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#EFF6FF"/>
              <rect x="0" y="240" width="700" height="120" fill="#CBD5E1"/>
              
    <!-- Kenji Standing Full Body -->
    <g transform="translate(220, 240) ">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <ellipse cx="14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#2563EB" stroke="#1E3A8A" stroke-width="2"/>
      <polygon points="-6 -25, 6 -25, 3 10, -3 10" fill="#FFFFFF"/>
      <path d="M-16 -15 L-28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-28" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="28" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -58 Q-14 -78 6 -76 Q20 -64 16 -48 Z" fill="#78350F"/>
      <circle cx="-7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="-6" cy="-56" r="1.2" fill="#FFFFFF"/>
      <circle cx="8" cy="-56" r="1.2" fill="#FFFFFF"/>
      <ellipse cx="-9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-5 -44 Q0 -38 5 -44" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  
              
    <!-- NPC Character Full Body -->
    <g transform="translate(480, 240) scale(-1, 1)">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <ellipse cx="12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#EC4899" stroke="#1E293B" stroke-width="2"/>
      <polygon points="-5 -25, 5 -25, 2 12, -2 12" fill="#FFFFFF"/>
      <path d="M-16 -15 L-26 15" stroke="#EC4899" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-26" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L26 15" stroke="#EC4899" stroke-width="8" stroke-linecap="round"/>
      <circle cx="26" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -56 Q-12 -76 12 -72 Q18 -58 16 -48 Z" fill="#1E293B"/>
      
      <circle cx="-7" cy="-53" r="3.2" fill="#1E293B"/>
      <circle cx="7" cy="-53" r="3.2" fill="#1E293B"/>
      <ellipse cx="-9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-4 -43 Q0 -38 4 -43" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
    </g>
  
              
    <g transform="translate(160, 25)">
      <rect x="0" y="0" width="380" height="64" rx="14" fill="#FFFFFF" stroke="#2563EB" stroke-width="2.5"/>
      <polygon points="180,64 190,76 198,64" fill="#FFFFFF"/>
      <polyline points="180,64 190,76 198,64" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="181" y1="64" x2="197" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#2563EB"> KENJI</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">はい、よやくした ケンジです</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Pasupōto o dōzo (Ini paspor saya untuk check-in)</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('パスポートを どうぞ')">
              <span>Audio:  Kenji: "パスポートを どうぞ (Pasupōto o dōzo - Ini paspor saya)"</span>
            </button>
          </div>
        </div>

        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-station">
            <span class="manga-panel-tag">Panel 3</span>
            <span>Menanyakan Password Wi-Fi & Kunci Kamar</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#F5F3FF"/>
              <rect x="220" y="80" width="260" height="150" rx="10" fill="#FFFFFF" stroke="#7C3AED" stroke-width="3"/>
              <path d="M310 130 Q350 95 390 130" fill="none" stroke="#7C3AED" stroke-width="6" stroke-linecap="round"/>
              <circle cx="350" cy="175" r="8" fill="#7C3AED"/>
              <text x="350" y="210" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="14" fill="#6D28D9" text-anchor="middle">FREE RYOKAN WI-FI</text>
              
    <g transform="translate(160, 20)">
      <rect x="0" y="0" width="380" height="64" rx="14" fill="#FFFFFF" stroke="#7C3AED" stroke-width="2.5"/>
      <polygon points="190,64 200,76 208,64" fill="#FFFFFF"/>
      <polyline points="190,64 200,76 208,64" stroke="#7C3AED" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="191" y1="64" x2="207" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#7C3AED"> KENJI</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">Wi-Fiの パスワードは なんですか？</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Wi-Fi no pasuwādo wa nan desu ka?</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('ワイファイの パスワードは なんですか')">
              <span>Audio:  Kenji: "Wi-Fiの パスワードは なんですか？ (Password Wi-Fi-nya apa ya?)"</span>
            </button>
          </div>
        </div>

        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-culture">
            <span class="manga-panel-tag">Panel 4</span>
            <span>Kamar Tradisional Tatami & Pintu Shoji Cantik</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="200" fill="#FEF3C7" opacity="0.4"/>
              <rect x="0" y="200" width="700" height="160" fill="#D9F99D" stroke="#65A30D" stroke-width="3"/>
              <rect x="100" y="40" width="180" height="160" fill="#FFFFFF" stroke="#78350F" stroke-width="4"/>
              <line x1="160" y1="40" x2="160" y2="200" stroke="#78350F" stroke-width="2"/>
              
    <!-- Kenji Standing Full Body -->
    <g transform="translate(350, 230) ">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <ellipse cx="14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#2563EB" stroke="#1E3A8A" stroke-width="2"/>
      <polygon points="-6 -25, 6 -25, 3 10, -3 10" fill="#FFFFFF"/>
      <path d="M-16 -15 L-28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-28" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="28" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -58 Q-14 -78 6 -76 Q20 -64 16 -48 Z" fill="#78350F"/>
      <circle cx="-7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="-6" cy="-56" r="1.2" fill="#FFFFFF"/>
      <circle cx="8" cy="-56" r="1.2" fill="#FFFFFF"/>
      <ellipse cx="-9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-5 -44 Q0 -38 5 -44" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  
              
    <g transform="translate(170, 30)">
      <rect x="0" y="0" width="360" height="64" rx="14" fill="#FFFFFF" stroke="#4D7C0F" stroke-width="2.5"/>
      <polygon points="180,64 190,76 198,64" fill="#FFFFFF"/>
      <polyline points="180,64 190,76 198,64" stroke="#4D7C0F" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="181" y1="64" x2="197" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#4D7C0F"> KENJI (Kagum Nyaman)</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">おやすみなさい</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Oyasuminasai (Suasana Jepang asli! Selamat tidur)</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('おやすみなさい')">
              <span>Audio:  Salam Malam: "おやすみなさい (Oyasuminasai - Selamat tidur / malam)"</span>
            </button>
          </div>
        </div>
      `;

    case 8:
      return `
        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-station">
            <span class="manga-panel-tag">Panel 1</span>
            <span>Mencari Toilet Darurat: "Toire wa doko desu ka?"</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#FFF1F2"/>
              <rect x="220" y="70" width="260" height="90" rx="10" fill="#FFFFFF" stroke="#E11D48" stroke-width="3"/>
              <rect x="280" y="90" width="40" height="50" rx="6" fill="#2563EB"/>
              <text x="300" y="122" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="18" fill="#FFFFFF" text-anchor="middle"></text>
              <rect x="380" y="90" width="40" height="50" rx="6" fill="#E11D48"/>
              <text x="400" y="122" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="18" fill="#FFFFFF" text-anchor="middle"></text>
              
    <!-- Kenji Standing Full Body -->
    <g transform="translate(350, 240) ">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <ellipse cx="14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#2563EB" stroke="#1E3A8A" stroke-width="2"/>
      <polygon points="-6 -25, 6 -25, 3 10, -3 10" fill="#FFFFFF"/>
      <path d="M-16 -15 L-28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-28" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="28" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -58 Q-14 -78 6 -76 Q20 -64 16 -48 Z" fill="#78350F"/>
      <circle cx="-7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="-6" cy="-56" r="1.2" fill="#FFFFFF"/>
      <circle cx="8" cy="-56" r="1.2" fill="#FFFFFF"/>
      <ellipse cx="-9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-5 -44 Q0 -38 5 -44" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  
              
    <g transform="translate(160, 170)">
      <rect x="0" y="0" width="380" height="64" rx="14" fill="#FFFFFF" stroke="#E11D48" stroke-width="2.5"/>
      <polygon points="190,64 200,76 208,64" fill="#FFFFFF"/>
      <polyline points="190,64 200,76 208,64" stroke="#E11D48" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="191" y1="64" x2="207" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#E11D48"> KENJI (Kebelet Darurat)</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">すみません！トイレは どこですか？</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Toire wa doko desu ka? (Toilet di mana?)</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('トイレは どこですか')">
              <span>Audio:  Darurat: "トイレは どこですか？ (Toire wa doko desu ka? - Toilet di sebelah mana?)"</span>
            </button>
          </div>
        </div>

        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-ramen">
            <span class="manga-panel-tag">Panel 2</span>
            <span>Pos Polisi Koban (交番): Tempat Lapor Aman</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#EFF6FF"/>
              <rect x="180" y="60" width="340" height="150" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="4" rx="8"/>
              <rect x="230" y="40" width="240" height="30" rx="4" fill="#1E3A8A"/>
              <text x="350" y="62" font-family="'Noto Sans JP', sans-serif" font-weight="900" font-size="16" fill="#F8FAFC" text-anchor="middle">交番 • KOBAN POLICE</text>
              <circle cx="350" cy="100" r="14" fill="#EF4444"/>
              
    <!-- Kenji Standing Full Body -->
    <g transform="translate(230, 240) ">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <ellipse cx="14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#2563EB" stroke="#1E3A8A" stroke-width="2"/>
      <polygon points="-6 -25, 6 -25, 3 10, -3 10" fill="#FFFFFF"/>
      <path d="M-16 -15 L-28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-28" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="28" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -58 Q-14 -78 6 -76 Q20 -64 16 -48 Z" fill="#78350F"/>
      <circle cx="-7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="-6" cy="-56" r="1.2" fill="#FFFFFF"/>
      <circle cx="8" cy="-56" r="1.2" fill="#FFFFFF"/>
      <ellipse cx="-9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-5 -44 Q0 -38 5 -44" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  
              
    <!-- NPC Character Full Body -->
    <g transform="translate(470, 240) scale(-1, 1)">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <ellipse cx="12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#1E293B" stroke="#1E293B" stroke-width="2"/>
      <polygon points="-5 -25, 5 -25, 2 12, -2 12" fill="#FFFFFF"/>
      <path d="M-16 -15 L-26 15" stroke="#1E293B" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-26" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L26 15" stroke="#1E293B" stroke-width="8" stroke-linecap="round"/>
      <circle cx="26" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -56 Q-12 -76 12 -72 Q18 -58 16 -48 Z" fill="#1E293B"/>
      <rect x="-16" y="-76" width="32" height="8" rx="2" fill="#1E293B"/><circle cx="0" cy="-72" r="2.5" fill="#F59E0B"/>
      <circle cx="-7" cy="-53" r="3.2" fill="#1E293B"/>
      <circle cx="7" cy="-53" r="3.2" fill="#1E293B"/>
      <ellipse cx="-9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-4 -43 Q0 -38 4 -43" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
    </g>
  
              
    <g transform="translate(170, 25)">
      <rect x="0" y="0" width="360" height="64" rx="14" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="2.5"/>
      <polygon points="180,64 190,76 198,64" fill="#FFFFFF"/>
      <polyline points="180,64 190,76 198,64" stroke="#1E3A8A" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="181" y1="64" x2="197" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#1E3A8A">‍️ POLISI KOBAN</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">どうしましたか？</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Dō shimashita ka? (Ada yang bisa kami bantu?)</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('どうしましたか')">
              <span>Audio:  Polisi: "どうしましたか？ (Dō shimashita ka? - Ada masalah apa?)"</span>
            </button>
          </div>
        </div>

        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-station">
            <span class="manga-panel-tag">Panel 3</span>
            <span>Barang Ketinggalan: "Saifu o wasuremashita"</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#FFFBEB"/>
              <rect x="0" y="240" width="700" height="120" fill="#CBD5E1"/>
              
    <!-- Kenji Standing Full Body -->
    <g transform="translate(230, 240) ">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="12" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <ellipse cx="14" cy="92" rx="10" ry="5" fill="#EF4444"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#2563EB" stroke="#1E3A8A" stroke-width="2"/>
      <polygon points="-6 -25, 6 -25, 3 10, -3 10" fill="#FFFFFF"/>
      <path d="M-16 -15 L-28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-28" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L28 15" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
      <circle cx="28" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -58 Q-14 -78 6 -76 Q20 -64 16 -48 Z" fill="#78350F"/>
      <circle cx="-7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="7" cy="-54" r="3.5" fill="#1E293B"/>
      <circle cx="-6" cy="-56" r="1.2" fill="#FFFFFF"/>
      <circle cx="8" cy="-56" r="1.2" fill="#FFFFFF"/>
      <ellipse cx="-9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-47" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-5 -44 Q0 -38 5 -44" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  
              
    <!-- NPC Character Full Body -->
    <g transform="translate(470, 240) scale(-1, 1)">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <ellipse cx="12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#1E293B" stroke="#1E293B" stroke-width="2"/>
      <polygon points="-5 -25, 5 -25, 2 12, -2 12" fill="#FFFFFF"/>
      <path d="M-16 -15 L-26 15" stroke="#1E293B" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-26" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L26 15" stroke="#1E293B" stroke-width="8" stroke-linecap="round"/>
      <circle cx="26" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -56 Q-12 -76 12 -72 Q18 -58 16 -48 Z" fill="#1E293B"/>
      <rect x="-16" y="-76" width="32" height="8" rx="2" fill="#1E293B"/><circle cx="0" cy="-72" r="2.5" fill="#F59E0B"/>
      <circle cx="-7" cy="-53" r="3.2" fill="#1E293B"/>
      <circle cx="7" cy="-53" r="3.2" fill="#1E293B"/>
      <ellipse cx="-9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-4 -43 Q0 -38 4 -43" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
    </g>
  
              
    <g transform="translate(160, 30)">
      <rect x="0" y="0" width="380" height="64" rx="14" fill="#FFFFFF" stroke="#2563EB" stroke-width="2.5"/>
      <polygon points="180,64 190,76 198,64" fill="#FFFFFF"/>
      <polyline points="180,64 190,76 198,64" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="181" y1="64" x2="197" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#2563EB"> KENJI (Cemas Lapor)</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">さいふを でんしゃに わすれました</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Saifu o wasuremashita (Dompet tertinggal di kereta)</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('さいふを わすれました')">
              <span>Audio:  Dompet: "さいふを わすれました (Saifu o wasuremashita - Dompet saya tertinggal)"</span>
            </button>
          </div>
        </div>

        <div class="manga-panel-item">
          <div class="manga-panel-topbar bar-culture">
            <span class="manga-panel-tag">Panel 4</span>
            <span>Kejujuran Warga Jepang: Dompet Kembali Utuh!</span>
          </div>
          <div class="manga-panel-art-wrap">
            <svg viewBox="0 0 700 360" class="manga-panel-svg" xmlns="http://www.w3.org/2000/svg">
              <rect width="700" height="240" fill="#ECFDF5"/>
              <rect x="0" y="240" width="700" height="120" fill="#CBD5E1"/>
              
      <!-- Kenji Bowing (Formal Polite Japanese Ojigi) -->
      <g transform="translate(230, 235) ">
        <ellipse cx="0" cy="95" rx="36" ry="9" fill="#475569" opacity="0.35"/>
        <line x1="-10" y1="35" x2="-14" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
        <line x1="8" y1="35" x2="10" y2="90" stroke="#1E3A8A" stroke-width="11" stroke-linecap="round"/>
        <ellipse cx="-16" cy="92" rx="10" ry="5" fill="#EF4444"/>
        <ellipse cx="12" cy="92" rx="10" ry="5" fill="#EF4444"/>
        <path d="M-15 35 L-28 -5 L6 -15 L18 25 Z" fill="#2563EB" stroke="#1E3A8A" stroke-width="2"/>
        <polygon points="-12 -7, -2 -11, -4 10, -10 10" fill="#FFFFFF"/>
        <path d="M-22 5 L-12 40" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
        <circle cx="-12" cy="40" r="5" fill="#FFEDD5"/>
        <path d="M12 -2 L2 35" stroke="#2563EB" stroke-width="8" stroke-linecap="round"/>
        <circle cx="2" cy="35" r="5" fill="#FFEDD5"/>
        <g transform="translate(-25, -28)">
          <circle cx="0" cy="0" r="22" fill="#FFEDD5"/>
          <path d="M-18 -8 Q-12 -26 8 -24 Q18 -10 14 4 Z" fill="#78350F"/>
          <path d="M-12 -2 Q-7 -7 -2 -2" fill="none" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M2 -2 Q7 -7 12 -2" fill="none" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round"/>
          <ellipse cx="-7" cy="5" rx="4" ry="2" fill="#FDA4AF"/>
          <ellipse cx="7" cy="5" rx="4" ry="2" fill="#FDA4AF"/>
          <path d="M-4 9 Q0 14 4 9" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
        </g>
      </g>
    
              
    <!-- NPC Character Full Body -->
    <g transform="translate(470, 240) scale(-1, 1)">
      <ellipse cx="0" cy="95" rx="35" ry="9" fill="#475569" opacity="0.35"/>
      <line x1="-10" y1="35" x2="-10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <line x1="10" y1="35" x2="10" y2="90" stroke="#334155" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="-12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <ellipse cx="12" cy="92" rx="10" ry="5" fill="#1E293B"/>
      <rect x="-18" y="-25" width="36" height="62" rx="8" fill="#1E293B" stroke="#1E293B" stroke-width="2"/>
      <polygon points="-5 -25, 5 -25, 2 12, -2 12" fill="#FFFFFF"/>
      <path d="M-16 -15 L-26 15" stroke="#1E293B" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-26" cy="15" r="5" fill="#FFEDD5"/>
      <path d="M16 -15 L26 15" stroke="#1E293B" stroke-width="8" stroke-linecap="round"/>
      <circle cx="26" cy="15" r="5" fill="#FFEDD5"/>
      <circle cx="0" cy="-52" r="23" fill="#FFEDD5"/>
      <path d="M-18 -56 Q-12 -76 12 -72 Q18 -58 16 -48 Z" fill="#1E293B"/>
      <rect x="-16" y="-76" width="32" height="8" rx="2" fill="#1E293B"/><circle cx="0" cy="-72" r="2.5" fill="#F59E0B"/>
      <circle cx="-7" cy="-53" r="3.2" fill="#1E293B"/>
      <circle cx="7" cy="-53" r="3.2" fill="#1E293B"/>
      <ellipse cx="-9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <ellipse cx="9" cy="-46" rx="3.5" ry="2" fill="#FDA4AF"/>
      <path d="M-4 -43 Q0 -38 4 -43" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
    </g>
  
              
    <g transform="translate(150, 30)">
      <rect x="0" y="0" width="400" height="64" rx="14" fill="#FFFFFF" stroke="#059669" stroke-width="2.5"/>
      <polygon points="180,64 190,76 198,64" fill="#FFFFFF"/>
      <polyline points="180,64 190,76 198,64" stroke="#059669" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="181" y1="64" x2="197" y2="64" stroke="#FFFFFF" stroke-width="3.5"/>
      <text x="16" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#059669"> KENJI (Sangat Bersyukur)</text>
      <text x="16" y="39" font-family="'Noto Sans JP', sans-serif" font-weight="800" font-size="14.5" fill="#0F172A">よかった！ありがとうございます！</text>
      <text x="16" y="54" font-family="'Nunito', sans-serif" font-weight="600" font-size="11" fill="#475569">Yokatta! (Dompet kembali utuh! Terima kasih banyak!)</text>
    </g>
  
            </svg>
          </div>
          <div class="manga-dialogue-bar">
            <button type="button" class="btn-quest-audio" onclick="speakJapanese('よかった ありがとうございます')">
              <span>Audio:  Penyelamat: "よかった！ありがとうございます！ (Yokatta! Arigatō gozaimasu! - Syukurlah!)"</span>
            </button>
          </div>
        </div>
      `;
  
    default:
      return `<div style="padding:2rem; text-align:center;"><p>Komik untuk modul ini sedang dimuat...</p></div>`;
  }
}



// Navigasi Cepat Antar Pelajaran
function prevLesson() {
  const prevId = currentLessonId > 1 ? currentLessonId - 1 : 1;
  openLesson(prevId);
}

function nextLesson() {
  const nextId = currentLessonId < 8 ? currentLessonId + 1 : 8;
  openLesson(nextId);
}

window.prevLesson = prevLesson;
window.nextLesson = nextLesson;


// ====================================================
// FUNGSI RENDER DETAIL PELAJARAN DINAMIS (LANGKAH 1 s/d 7)
// Menampilkan Komik 4 Panel Lengkap dengan Gambar SVG & Audio untuk Pelajaran 1 s/d 8
// ====================================================

function renderFuriganaHtml(text) {
  if (text === null || text === undefined) return '';
  const str = String(text);
  // Allow safe formatting and furigana tags: <ruby>, <rt>, <rp>, <span>, <strong>, <b>, <br>
  return str.replace(/<(?!\/?(ruby|rt|rp|span|strong|b|br)\b)[^>]*>/gi, '');
}

function renderLessonDetail(lessonId) {
  const idNum = parseInt(lessonId, 10) || 1;
  const lesson = LESSON_DETAIL_DATA[idNum] || LESSON_DETAIL_DATA[1];
  currentLessonId = lesson.id;

  try {
    sessionStorage.setItem('sijapanese_active_lesson_id', String(lesson.id));
  } catch (e) {}

  // 1. Update Judul Bar Navigasi Atas & Dropdown Cepat
  const topTitleEl = document.querySelector('.lesson-top-title span') || document.getElementById('lesson-top-title-text');
  if (topTitleEl) {
    topTitleEl.textContent = lesson.title;
  }
  const quickSelect = document.getElementById('lesson-quick-select');
  if (quickSelect) {
    quickSelect.value = String(lesson.id);
  }

  // 2. Render Langkah 1: Pengantar (Intro)
  const step1 = document.getElementById('step-content-mulai');
  if (step1) {
    step1.innerHTML = `
      <div class="badge-pill-brand" style="margin-bottom:0.8rem;">${escapeHtml(lesson.intro.tag)}</div>
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:1.5rem; margin-bottom:1.5rem; flex-wrap:wrap;">
        <div>
          <h2 style="font-size:1.85rem; font-weight:800; color:var(--text); line-height:1.25; margin-bottom:0.4rem;">
            ${escapeHtml(lesson.intro.h2)}
          </h2>
          <p style="color:var(--text-soft); font-size:1.02rem; line-height:1.5; max-width:680px;">
            ${escapeHtml(lesson.intro.desc)}
          </p>
        </div>
        <div class="reward-tag-pill" style="background:#FFFBEB; border:1.5px solid #FDE68A; padding:0.6rem 1rem; border-radius:12px; display:inline-flex; align-items:center; gap:0.5rem; color:#B45309; font-weight:700;">
          <span> Reward Selesai: +50 Poin</span>
        </div>
      </div>

      <div class="intro-dialog-card" style="background:#FFFFFF; border:2.5px solid #1E293B; border-radius:18px; padding:1.4rem; box-shadow:0 4px 12px rgba(0,0,0,0.06); margin-bottom:2rem;">
        <div style="display:flex; gap:1.2rem; align-items:center;">
          <img src="img/avatar_tanaka.svg" style="width:52px; height:52px; border-radius:50%; border:2px solid #2563EB; flex-shrink:0;" alt="Sensei Tanaka" />
          <div>
            <h4 style="font-size:1.05rem; font-weight:800; color:#0F172A; margin-bottom:0.3rem;">Petunjuk dari Sensei Tanaka & Kiko:</h4>
            <p id="lesson-intro-mascot-tip" style="font-size:0.95rem; color:#475569; line-height:1.55;">${escapeHtml(lesson.intro.mascotTip)}</p>
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
    `;
  }

  // 3. Render Langkah 2: Komik Manga Berwarna 4 Panel Penuh Art SVG
  const step2 = document.getElementById('step-content-komik');
  if (step2) {
    const panelsHtml = getMangaPanelsHtml(lesson.id);

    step2.innerHTML = `
      <div class="manga-book-container">
        <div class="manga-book-header" style="margin-bottom:1.2rem; padding-bottom:0.8rem;">
          <div class="manga-title-wrap">
            <span class="manga-badge-brand">Langkah 2 • Komik Cerita Bergambar</span>
            <h2>${escapeHtml(lesson.komik.title)}</h2>
            <p style="color:var(--text-soft); font-size:0.92rem; margin-top:0.3rem;">
              ${escapeHtml(lesson.komik.desc)}
            </p>
          </div>
        </div>

        <div id="lesson-dynamic-comic-section"></div>

        <div class="manga-panel-list">
          ${panelsHtml}
        </div>

        <!-- Teacher Note Box below Manga Strip (Matching Screenshot 2) -->
        <div class="manga-teacher-note">
          <div class="manga-teacher-avatar">
            <img src="img/avatar_tanaka.svg" alt="Sensei Tanaka" />
          </div>
          <div class="manga-teacher-body">
            <div class="manga-teacher-title">Catatan Sensei Tanaka &amp; Kiko:</div>
            <div class="manga-teacher-text" id="lesson-manga-teacher-text">
              ${getLessonTeacherNote(lesson.id)}
            </div>
          </div>
        </div>
      </div>

      <div class="step-bottom-nav">
        <button type="button" class="btn-step-prev" onclick="setLessonStep('mulai')">
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="15 18 9 12 15 6"/></svg>
          <span>Pengantar</span>
        </button>
        <button type="button" class="btn-step-next" onclick="setLessonStep('huruf')">
          <span>Lanjut ke Langkah 3: 3 Aksara / Kosakata </span>
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    `;
  }

  // Sinkronisasi Dinamis dengan Database (Komik, Audio & Catatan Sensei Tanaka yang Diedit Guru)
  try {
    fetch('/api/materi/lesson/' + idNum)
      .then(r => r.json())
      .then(data => {
        if (data && data.success && data.lesson) {
          const db = data.lesson;
          
          if (db.title) {
            const topEl = document.querySelector('.lesson-top-title span') || document.getElementById('lesson-top-title-text');
            if (topEl) topEl.textContent = db.title;
          }

          if (db.mascot_tip) {
            const introTipEl = document.getElementById('lesson-intro-mascot-tip');
            if (introTipEl) introTipEl.textContent = db.mascot_tip;
            const mangaTipEl = document.getElementById('lesson-manga-teacher-text');
            if (mangaTipEl) mangaTipEl.innerHTML = db.mascot_tip;
          }

          const comicSec = document.getElementById('lesson-dynamic-comic-section');
          if (comicSec) {
            let extraHtml = '';
            const comicImg = db.comic_image;
            const comicAudio = db.audio_text;
            const comicLabel = db.audio_label || 'Percakapan Komik Cerita';

            if (comicImg) {
              const safeImg = (comicImg.startsWith('http') || comicImg.startsWith('/') || comicImg.startsWith('data:')) ? comicImg : ('/' + comicImg);
              extraHtml += `
                <div class="manga-featured-comic-card" style="background:#FFFFFF; border:2px solid #BA3D27; border-radius:18px; padding:1.2rem; margin-bottom:1.5rem; text-align:center; box-shadow:0 4px 14px rgba(186,61,39,0.06);">
                  <div style="font-size:0.75rem; font-weight:800; color:#BA3D27; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:0.6rem;">
                    Ilustrasi Komik Pembahasan Utama
                  </div>
                  <div style="max-height:340px; overflow:hidden; border-radius:12px; margin-bottom:0.8rem; background:#FAF6F0; display:flex; align-items:center; justify-content:center;">
                    <img src="${safeImg}" alt="Ilustrasi Komik" style="max-height:340px; width:auto; max-width:100%; object-fit:contain;" />
                  </div>
                  <div style="font-size:1.1rem; font-weight:800; color:#0F172A;">${escapeHtml(db.title || lesson.komik.title)}</div>
                  <div style="font-size:0.88rem; color:#64748B; margin-top:0.2rem;">${escapeHtml(db.subtitle || lesson.komik.desc)}</div>
                </div>
              `;
            }

            if (comicAudio) {
              extraHtml += `
                <div class="chokai-audio-player" style="margin-bottom:1.5rem; background:#F8FAFC; border:1.5px solid #CBD5E1; border-radius:14px; padding:0.9rem 1.2rem;">
                  <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.6rem; margin-bottom:0.4rem;">
                    <span style="font-size:0.86rem; font-weight:800; color:#1E293B;">Audio:  ${escapeHtml(comicLabel)}</span>
                    <button type="button" class="btn-chokai-play" onclick="playChokaiAudio(this, '${escapeHtml(comicAudio)}')">
                      <span class="chokai-play-label">Putar Dialog Suara Jepang</span>
                    </button>
                  </div>
                  <div style="font-size:0.82rem; color:#64748B;">
                    Dengarkan pelafalan dialog Jepang asli dari Sensei Tanaka untuk memahami cerita komik ini.
                  </div>
                </div>
              `;
            }

            comicSec.innerHTML = extraHtml;
          }
        }
      })
      .catch(e => {});
  } catch (err) {}

  // 4. Render Langkah 3: 3 Aksara & Kosakata Inti
  const step3 = document.getElementById('step-content-huruf');
  if (step3) {
    const cardsHtml = lesson.huruf.cards.map((c, i) => `
      <div class="huruf-card-pillar" style="background:${c.bg}; border:2px solid ${c.color}; border-radius:18px; padding:1.2rem; cursor:pointer;" onclick="speakJapanese('${escapeHtml(c.audio)}')">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
          <span style="background:${c.color}; color:#FFF; font-size:0.75rem; font-weight:800; padding:3px 8px; border-radius:9999px;">Kunci #${i+1}</span>
          <button type="button" class="ex-speaker-btn" style="border:none; background:none; font-size:1.2rem; cursor:pointer;">Audio: </button>
        </div>
        <div style="font-size:2.2rem; font-weight:900; color:${c.color}; line-height:1; margin-bottom:0.4rem;">${renderFuriganaHtml(c.char)}</div>
        <h4 style="font-size:1.05rem; font-weight:800; color:var(--text); margin-bottom:0.3rem;">${renderFuriganaHtml(c.label)}</h4>
        <p style="font-size:0.85rem; font-weight:700; color:${c.color}; margin-bottom:0.4rem;">${escapeHtml(c.sub)}</p>
        <p style="font-size:0.82rem; color:var(--text-soft); line-height:1.4;">${escapeHtml(c.tip)}</p>
      </div>
    `).join('');

    step3.innerHTML = `
      <div style="margin-bottom:1.5rem;">
        <span class="badge-pill-brand">Langkah 3 • Fondasi Kosakata & Aksara</span>
        <h2 style="font-size:1.6rem; font-weight:800; color:var(--text); margin:0.4rem 0 0.2rem;">${escapeHtml(lesson.huruf.h2)}</h2>
        <p style="color:var(--text-soft); font-size:0.92rem;">${escapeHtml(lesson.huruf.desc)}</p>
      </div>

      <div class="huruf-3cards-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:1rem; margin-bottom:1.8rem;">
        ${cardsHtml}
      </div>

      <div class="step-bottom-nav">
        <button type="button" class="btn-step-prev" onclick="setLessonStep('komik')">
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="15 18 9 12 15 6"/></svg>
          <span>Komik Cerita</span>
        </button>
        <button type="button" class="btn-step-next" onclick="setLessonStep('kalimat')">
          <span>Lanjut ke Langkah 4: Bedah Kalimat </span>
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    `;
  }

  // 5. Render Langkah 4: Bedah Kalimat
  const step4 = document.getElementById('step-content-kalimat');
  if (step4) {
    const wordsHtml = lesson.kalimat.words.map(w => `
      <div class="kalimat-breakdown-card" data-word="${w.word}" onclick="speakJapanese('${escapeHtml(w.audio)}')" style="cursor:pointer;">
        <div style="display:flex; align-items:center; gap:0.6rem;">
          <span style="font-size:1.2rem; font-weight:800; color:var(--text);">${renderFuriganaHtml(w.kanji || w.jp)}</span>
          <span style="font-size:0.82rem; color:#0284C7; font-weight:700;">(${escapeHtml(w.jp)})</span>
        </div>
        <p style="font-size:0.82rem; color:var(--text-soft); margin:0.2rem 0 0;">${escapeHtml(w.meaning)}</p>
        <button type="button" class="btn-breakdown-speaker">Audio: </button>
      </div>
    `).join('');

    step4.innerHTML = `
      <div style="margin-bottom:1.5rem;">
        <span class="badge-pill-brand">Langkah 4 • Kupas Tuntas Pola Kalimat</span>
        <h2 style="font-size:1.6rem; font-weight:800; color:var(--text); margin:0.4rem 0 0.2rem;">Bedah Kalimat Praktis Traveling</h2>
        <p style="color:var(--text-soft); font-size:0.92rem;">Sentuh tiap potongan kata untuk mendengarkan lafal dan fungsinya dalam tata bahasa Jepang.</p>
      </div>

      <div class="kalimat-hero-card" style="background:#FFFFFF; border:2px solid #E2E8F0; border-radius:20px; padding:1.8rem 1.4rem; margin-bottom:1.8rem; box-shadow:var(--shadow-sm); text-align:center;">
        <button type="button" class="btn-tool-pill" style="margin-bottom:1rem; padding:0.45rem 1rem; border-radius:9999px; background:#EFF6FF; border:1.5px solid #BFDBFE; color:#1D4ED8; font-weight:700; cursor:pointer;" onclick="speakJapanese('${renderFuriganaHtml(lesson.kalimat.sentenceJp)}')">
          <span>Audio:  Putar Kalimat Utuh: ${renderFuriganaHtml(lesson.kalimat.sentenceJp)}</span>
        </button>
        <div style="font-size:1.8rem; font-weight:900; color:var(--text); margin-bottom:0.4rem; letter-spacing:0.05em;">
          ${renderFuriganaHtml(lesson.kalimat.sentenceJp)}
        </div>
        <div style="font-size:1rem; font-weight:700; color:#0284C7; margin-bottom:0.2rem;">
          ${escapeHtml(lesson.kalimat.sentenceRomaji)}
        </div>
        <div style="font-size:0.92rem; color:var(--text-soft);">
          Arti: "${escapeHtml(lesson.kalimat.sentenceId)}"
        </div>
      </div>

      <h3 style="font-size:1.1rem; font-weight:800; color:var(--text); margin-bottom:0.8rem;">Pecahan Kosakata & Tata Bahasa:</h3>
      <div class="kalimat-breakdown-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:0.8rem; margin-bottom:1.8rem;">
        ${wordsHtml}
      </div>

      <div class="step-bottom-nav">
        <button type="button" class="btn-step-prev" onclick="setLessonStep('huruf')">
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="15 18 9 12 15 6"/></svg>
          <span>3 Aksara</span>
        </button>
        <button type="button" class="btn-step-next" onclick="setLessonStep('romaji')">
          <span>Lanjut ke Langkah 5: Romaji & Wisata </span>
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    `;
  }

  // 6. Render Langkah 5: Romaji & Budaya
  const step5 = document.getElementById('step-content-romaji');
  if (step5) {
    const tipsHtml = lesson.romaji.tips.map(t => `
      <div style="background:#FFFFFF; border:2px solid #E2E8F0; border-radius:16px; padding:1.2rem; margin-bottom:1rem; box-shadow:var(--shadow-sm);">
        <h4 style="font-size:1rem; font-weight:800; color:#1E293B; margin-bottom:0.3rem;"> ${escapeHtml(t.title)}</h4>
        <p style="font-size:0.88rem; color:var(--text-soft); line-height:1.5;">${escapeHtml(t.desc)}</p>
      </div>
    `).join('');

    step5.innerHTML = `
      <div style="margin-bottom:1.5rem;">
        <span class="badge-pill-brand">Langkah 5 • Romaji & Budaya Wisata</span>
        <h2 style="font-size:1.6rem; font-weight:800; color:var(--text); margin:0.4rem 0 0.2rem;">Panduan Praktis Traveling</h2>
        <p style="color:var(--text-soft); font-size:0.92rem;">Wawasan budaya dan tips berbicara langsung kepada orang Jepang.</p>
      </div>

      <div class="romaji-tips-wrap" style="margin-bottom:1.8rem;">
        ${tipsHtml}
      </div>

      <div class="step-bottom-nav">
        <button type="button" class="btn-step-prev" onclick="setLessonStep('kalimat')">
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="15 18 9 12 15 6"/></svg>
          <span>Bedah Kalimat</span>
        </button>
        <button type="button" class="btn-step-next" style="background:#FF9E00;" onclick="setLessonStep('kuis')">
          <span>Lanjut ke Langkah 6: Tantangan Kuis Quest </span>
          <svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    `;
  }

  // 7. Render Langkah 7: Selesai (Celebrate)
  const step7 = document.getElementById('step-content-selesai');
  if (step7) {
    const nextNum = lesson.nextLessonId;
    const nextLessonData = LESSON_DETAIL_DATA[nextNum];

    step7.innerHTML = `
      <div class="celebrate-card">
        <div class="celebrate-badge-tag">Pencapaian Modul</div>
        <h2 class="celebrate-title">Modul Selesai Dikuasai</h2>
        <div class="celebrate-module-name">${escapeHtml(lesson.title)}</div>
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
          ${nextNum && nextLessonData ? `
            <button type="button" class="btn-celebrate-primary" onclick="openLesson(${nextNum})">
              <span>Lanjut ke Pelajaran ${nextNum}: ${escapeHtml(nextLessonData.title.split(':')[1] || '')}</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          ` : `
            <button type="button" class="btn-celebrate-primary" onclick="showPage('hiragana')">
              <span>Lanjut Kuasai 104 Huruf Hiragana</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          `}

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
    `;
  }
}
window.renderLessonDetail = renderLessonDetail;
window.LESSON_DETAIL_DATA = LESSON_DETAIL_DATA;


// ====================================================
// SIJapanese - Materi Interaktif & Petualangan Kenji
// Terhubung Dinamis dengan Laravel SQLite & Dashboard Guru
// ====================================================

const MATERI_LESSONS_FALLBACK = [
  {
    id: 1,
    level: 'N5',
    title: 'Misteri 3 Aksara: Papan Kota & Menu Ramen Tokyo',
    subtitle: 'Mengenal Kanji, Hiragana, & Katakana di stasiun, plang toko, dan buku menu',
    time: '12 menit',
    badge: 'Wajib Dasar',
    badgeClass: 'badge-red',
    accentColor: '#D9383A',
    numBg: '#FEE2E2',
    completed: false
  },
  {
    id: 2,
    level: 'N5',
    title: 'Salam, Kesopanan & Kata Ajaib "Sumimasen"',
    subtitle: 'Kuasai salam penting: Konnichiwa, Arigatō gozaimasu, dan cara memanggil orang',
    time: '15 menit',
    badge: 'Ungkapan',
    badgeClass: 'badge-blue',
    accentColor: '#2563EB',
    numBg: '#DBEAFE',
    completed: false
  },
  {
    id: 3,
    level: 'N5',
    title: 'Angka, Uang Yen & Belanja Praktis di Konbini',
    subtitle: 'Membaca harga barang (150円), onigiri, minuman, dan meminta kantong kresek',
    time: '15 menit',
    badge: 'Belanja',
    badgeClass: 'badge-yellow',
    accentColor: '#F59E0B',
    numBg: '#FEF3C7',
    completed: false
  },
  {
    id: 4,
    level: 'N5',
    title: 'Kuliner: Memesan Makanan di Restoran & Kafe',
    subtitle: 'Menunjuk menu "Kore o kudasai", minta air minum, bon kasir, dan etika makan',
    time: '18 menit',
    badge: 'Restoran',
    badgeClass: 'badge-green',
    accentColor: '#10B981',
    numBg: '#DCFCE7',
    completed: false
  },
  {
    id: 5,
    level: 'N5',
    title: 'Navigasi Stasiun Kereta & Bertanya Arah Wisata',
    subtitle: 'Tanya jalan "Eki wa doko desu ka?", kartu Suica/Pasmo, dan petunjuk arah',
    time: '18 menit',
    badge: 'Transportasi',
    badgeClass: 'badge-blue',
    accentColor: '#0284C7',
    numBg: '#E0F2FE',
    completed: false
  },
  {
    id: 6,
    level: 'N5',
    title: 'Belanja Suvenir (Omiyage) & Toko Bebas Pajak',
    subtitle: 'Minta izin melihat barang "Kore o misete kudasai" & pembayaran kartu kredit',
    time: '15 menit',
    badge: 'Suvenir',
    badgeClass: 'badge-yellow',
    accentColor: '#D97706',
    numBg: '#FEF3C7',
    completed: false
  },
  {
    id: 7,
    level: 'N4',
    title: 'Check-in Hotel / Ryokan & Bertanya Fasilitas',
    subtitle: 'Lapor kedatangan, titip koper sebelum check-in, dan menanyakan password Wi-Fi',
    time: '20 menit',
    badge: 'Hotel',
    badgeClass: 'badge-purple',
    accentColor: '#7C3AED',
    numBg: '#EDE9FE',
    completed: false
  },
  {
    id: 8,
    level: 'N4',
    title: 'Situasi Darurat & Ungkapan Penyelamat Traveling',
    subtitle: 'Mencari toilet darurat, apotek, minta tolong (Tasukete), dan bahasa Inggris',
    time: '15 menit',
    badge: 'Darurat',
    badgeClass: 'badge-red',
    accentColor: '#E11D48',
    numBg: '#FFE4E6',
    completed: false
  }
];

let activeLevelsData = [];
let currentActiveLevelCode = 'n5';
let currentActiveStep = 'mulai';
let currentLessonId = 1;
let questScoreAwarded = false;

// Inisialisasi Halaman Materi
function initMateriPage() {
  loadDynamicLevels();
}

// 1. Ambil Kotak Level Dinamis dari Database SQLite
async function loadDynamicLevels() {
  const levelNav = document.getElementById('materi-level-nav');
  try {
    const res = await fetch('/api/materi/levels');
    const data = await res.json();
    if (data.success && data.levels && data.levels.length > 0) {
      activeLevelsData = data.levels;
      renderLevelTabs(data.levels);
      // Muat materi level pertama yang aktif
      const firstActive = data.levels.find(l => l.code === currentActiveLevelCode) || data.levels[0];
      selectLevelTab(firstActive.code);
      return;
    }
  } catch (err) {
    console.warn('Gagal memuat level dinamis, menggunakan fallback:', err);
  }

  // Fallback jika API belum terhubung
  renderLessonCatalog(MATERI_LESSONS_FALLBACK);
}

// Render Tombol Kotak Level di Halaman Materi Murid
function renderLevelTabs(levels) {
  const container = document.getElementById('materi-level-nav');
  if (!container) return;

  container.innerHTML = levels.map((lvl) => {
    const isActive = lvl.code.toLowerCase() === currentActiveLevelCode.toLowerCase();
    return `
      <button class="materi-level-btn lvl-${lvl.code.toLowerCase()} ${isActive ? 'active' : ''}" 
              style="--lvl-accent:${lvl.accent_color};"
              onclick="selectLevelTab('${lvl.code.toLowerCase()}')">
        <span class="lvl-name">${escapeHtml(lvl.name)}</span>
        <span class="lvl-sub">${escapeHtml(lvl.sub)}</span>
      </button>
    `;
  }).join('');
}

// Pilih Tab Level (contoh: N5, N4, N3, N2, N1)
async function selectLevelTab(code) {
  currentActiveLevelCode = code;

  // Update styling tombol level
  document.querySelectorAll('.materi-level-btn').forEach(btn => {
    btn.classList.toggle('active', btn.classList.contains(`lvl-${code}`));
  });

  const listContainer = document.getElementById('materi-lesson-items');
  if (listContainer) {
    listContainer.innerHTML = `
      <div style="text-align:center; padding:2rem; color:#64748B;">
        <span style="font-size:1.5rem;"></span>
        <p style="margin-top:0.5rem; font-weight:600;">Memuat materi level ${code.toUpperCase()}...</p>
      </div>
    `;
  }

  try {
    const res = await fetch(`/api/materi/lessons/${code}`);
    const data = await res.json();
    if (data.success && data.lessons && data.lessons.length > 0) {
      renderLessonListFromDb(data.lessons, data.level);
      return;
    } else if (data.success && data.lessons && data.lessons.length === 0) {
      if (listContainer) {
        listContainer.innerHTML = `
          <div style="text-align:center; padding:3rem 1.5rem; background:#FFFFFF; border:1.5px dashed #CBD5E1; border-radius:16px;">
            <span style="font-size:2.5rem;"></span>
            <h3 style="margin:0.8rem 0 0.3rem; color:#1E293B;">Belum Ada Modul di ${escapeHtml(data.level.name)}</h3>
            <p style="color:#64748B; font-size:0.92rem; margin:0;">
              Guru sedang mempersiapkan kurikulum untuk tingkat ini. Silakan pilih level lain di atas!
            </p>
          </div>
        `;
      }
      return;
    }
  } catch (err) {
    console.warn('Gagal memuat materi level dari DB:', err);
  }

  // Fallback
  renderLessonCatalog(MATERI_LESSONS_FALLBACK);
}

// Render Daftar Pelajaran yang Berasal dari Database
function renderLessonListFromDb(lessons, level) {
  const container = document.getElementById('materi-lesson-items');
  if (!container) return;

  let completedLessons = [];
  if (typeof currentUser !== 'undefined' && currentUser && currentUser.completed_lessons) {
    completedLessons = currentUser.completed_lessons;
  } else {
    try {
      completedLessons = JSON.parse(localStorage.getItem('sijapanese_completed_lessons') || '[]');
    } catch (e) {}
  }

  container.innerHTML = lessons.map((les) => {
    const isDone = completedLessons.includes(les.id);
    let accent = (les.accent_color || level.accent_color || '#3E6B89').toUpperCase();
    let numBg = les.num_bg || '#FAF1EE';

    // Map harsh saturated colors to soft warm Japanese tones
    if (accent.includes('D9383A') || accent.includes('BA3D27') || accent.includes('EF4444') || accent.includes('RED')) {
      accent = '#BA5444';
      numBg = '#FAF1EE';
    } else if (accent.includes('2563EB') || accent.includes('1E3A8A') || accent.includes('3B82F6') || accent.includes('BLUE')) {
      accent = '#3E6B89';
      numBg = '#EFF4F8';
    } else if (accent.includes('D97706') || accent.includes('C27608') || accent.includes('F59E0B') || accent.includes('AMBER') || accent.includes('YELLOW')) {
      accent = '#BA7635';
      numBg = '#FDF5ED';
    } else if (accent.includes('059669') || accent.includes('2B7A4F') || accent.includes('10B981') || accent.includes('GREEN')) {
      accent = '#437856';
      numBg = '#F0F6F2';
    } else if (accent.includes('7C467C') || accent.includes('4338CA') || accent.includes('PURPLE')) {
      accent = '#74567A';
      numBg = '#F7F1F8';
    }

    return `
      <div class="materi-lesson-card ${isDone ? 'completed' : ''}" 
           style="--card-accent:${accent}; --card-num-bg:${numBg};"
           onclick="openLesson(${les.id})">
        <div class="materi-card-num">
          ${isDone ? '<svg viewBox="0 0 24 24" style="width:20px;height:20px;stroke:#437856;fill:none;stroke-width:2.8;stroke-linecap:round;stroke-linejoin:round;"><polyline points="20 6 9 17 4 12"/></svg>' : les.lesson_number}
        </div>
        <div class="materi-card-body">
          <div class="materi-card-top">
            <h3 class="materi-card-title">${les.lesson_number}. ${escapeHtml(les.title)}</h3>
            <span class="materi-card-badge ${les.badge_class || 'badge-blue'}">${escapeHtml(les.badge || 'Modul')}</span>
            ${isDone ? '<span class="materi-card-badge badge-green">Tuntas</span>' : ''}
          </div>
          <p class="materi-card-desc">${escapeHtml(les.subtitle || '')}</p>
        </div>
        <div class="materi-card-meta">
          <span class="materi-card-time">
            <svg viewBox="0 0 24 24" class="svg-icon-mini"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${les.est_minutes} Menit
          </span>
          <div class="materi-card-arrow">
            <svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Fallback Render
function renderLessonCatalog(lessons = MATERI_LESSONS_FALLBACK) {
  const container = document.getElementById('materi-lesson-items');
  if (!container) return;

  container.innerHTML = lessons.map((lesson) => {
    return `
      <div class="materi-lesson-card" 
           style="--card-accent:${lesson.accentColor}; --card-num-bg:${lesson.numBg};"
           onclick="openLesson(${lesson.id})">
        <div class="materi-card-num">${lesson.id}</div>
        <div class="materi-card-body">
          <div class="materi-card-top">
            <h3 class="materi-card-title">${lesson.id}. ${lesson.title}</h3>
            <span class="materi-card-badge ${lesson.badgeClass}">${lesson.badge}</span>
          </div>
          <p class="materi-card-desc">${lesson.subtitle}</p>
        </div>
        <div class="materi-card-meta">
          <span class="materi-card-time">${lesson.time}</span>
          <div class="materi-card-arrow">
            <svg viewBox="0 0 24 24" class="svg-icon-mini"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Buka Pelajaran
async function openLesson(lessonId, initialStep = 'mulai') {
  currentLessonId = lessonId;
  questScoreAwarded = false;

  const catalogView = document.getElementById('materi-catalog-view');
  const lessonView = document.getElementById('materi-lesson-view');

  if (catalogView) catalogView.classList.add('hidden');
  if (lessonView) lessonView.classList.add('active');

  // Render detail materi dinamis untuk pelajaran ini (Komik, 3 Aksara, Kalimat, dsb.)
  renderLessonDetail(lessonId);

  setLessonStep(initialStep);
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Muat Soal Quest Dinamis dari SQLite
  loadDynamicQuests(lessonId);
}

// Variasi Soal Bergambar Komik & Skenario Percakapan Nyata
// Variasi Soal Bergambar Komik & Skenario Percakapan Nyata Liburan ke Jepang
const FALLBACK_QUESTS_BY_LESSON = {
  "1": [
    {
      "id": 1,
      "lesson_id": 1,
      "question_number": 1,
      "badge_text": "Tahap 1 • Chokai: Mengenal Aksara",
      "question": "Dengarkan percakapan antara Rin dan Guru Kucing di depan stasiun. Berdasarkan penjelasan Guru Kucing, aksara apakah yang digunakan untuk menulis kata 「東京」(Tōkyō)?",
      "image_url": "img/comic_station.svg",
      "audio_text": "先生、駅前の看板に「東京ラーメン」と書いてありますが、ぜんぶ同じ種類の文字ですか？……いいえ、違いますよ。「東京」は漢字で、「ラーメン」はカタカナで書かれていますよ。……なるほど、外国から来た言葉だからカタカナなんですね！",
      "audio_label": "Percakapan Rin & Guru Kucing",
      "options": [
        {
          "label": "A",
          "text": "Kanji (漢字) — Aksara lambang makna asal Tiongkok",
          "isCorrect": true
        },
        {
          "label": "B",
          "text": "Katakana (カタカナ) — Aksara kata serapan luar negeri",
          "isCorrect": false
        },
        {
          "label": "C",
          "text": "Hiragana (ひらがな) — Aksara tata bahasa asli Jepang",
          "isCorrect": false
        },
        {
          "label": "D",
          "text": "Romaji — Aksara alfabet latin",
          "isCorrect": false
        }
      ],
      "explanation": "Dalam percakapan, Guru Kucing menjelaskan bahwa kata 「東京」 ditulis dengan huruf Kanji lambang makna, sedangkan 「ラーメン」 ditulis dengan Katakana.",
      "points": 25
    },
    {
      "id": 2,
      "lesson_id": 1,
      "question_number": 2,
      "badge_text": "Tahap 1 • Chokai: Bentuk Huruf Asli",
      "question": "Dengarkan percakapan belajar menulis berikut. Ciri aksara apa yang sedang dibahas saat Rin menulis kata 「すし」 (Sushi)?",
      "image_url": "img/comic_aisatsu.svg",
      "audio_text": "りんは今、ひらがなを練習しているの？……はい！「すし」の「す」と「し」を書いています。曲がり角が多くて柔らかい形ですね！……そうですね、それが日本のひらがなの特徴ですよ。",
      "audio_label": "Percakapan Belajar Aksara",
      "options": [
        {
          "label": "A",
          "text": "Hiragana — Berbentuk garis melengkung lentur asli Jepang",
          "isCorrect": true
        },
        {
          "label": "B",
          "text": "Kanji — Berasal dari guratan ribuan simbol makna",
          "isCorrect": false
        },
        {
          "label": "C",
          "text": "Katakana — Bergaris kaku dan lurus tegas",
          "isCorrect": false
        },
        {
          "label": "D",
          "text": "Romaji — Ditulis dengan alfabet latin barat",
          "isCorrect": false
        }
      ],
      "explanation": "Rin dan gurunya membahas penulisan 「すし」 dengan aksara Hiragana yang berkarakter melengkung lentur dan halus khas asli Jepang.",
      "points": 25
    },
    {
      "id": 3,
      "lesson_id": 1,
      "question_number": 3,
      "badge_text": "Tahap 1 • Chokai: Kata Serapan Kuliner",
      "question": "Dengarkan percakapan pemesanan di kedai berikut. Mengapa menu 「ラーメン」 (Rāmen) ditulis menggunakan Katakana dalam daftar menu?",
      "image_url": "img/comic_ramen.svg",
      "audio_text": "いらっしゃいませ！ご注文はお決まりですか？……はい、温かい醤油ラーメンを一つお願いします！……かしこまりました。ラーメン一丁！",
      "audio_label": "Percakapan di Kedai Ramen",
      "options": [
        {
          "label": "A",
          "text": "Karena ramen merupakan makanan kuliner serapan luar negeri",
          "isCorrect": true
        },
        {
          "label": "B",
          "text": "Karena kata tersebut merupakan salam formal kerajaan",
          "isCorrect": false
        },
        {
          "label": "C",
          "text": "Karena menu tersebut hanya disajikan saat musim dingin",
          "isCorrect": false
        },
        {
          "label": "D",
          "text": "Karena kata tersebut adalah kata kerja lampau",
          "isCorrect": false
        }
      ],
      "explanation": "Kata 「ラーメン」 ditulis dengan Katakana karena kuliner mi kuah ini awalnya merupakan kata serapan dari luar negeri yang diadaptasi ke bahasa Jepang.",
      "points": 25
    },
    {
      "id": 4,
      "lesson_id": 1,
      "question_number": 4,
      "badge_text": "Tahap 2 • Chokai: Etika Sebelum Makan",
      "question": "Dengarkan percakapan saat pelayan mengantarkan mangkuk ramen. Ungkapan etika apakah yang diucapkan pelanggan tepat sebelum mulai menyantap makanannya?",
      "image_url": "img/comic_ramen.svg",
      "audio_text": "お待たせいたしました、熱々の味噌ラーメンです。ごゆっくりどうぞ！……わあ、いい匂い！いただきます！……ごゆっくりお召し上がりください。",
      "audio_label": "Percakapan Etika Makan",
      "options": [
        {
          "label": "A",
          "text": "いただきます (Itadakimasu) — Bentuk rasa syukur sebelum makan",
          "isCorrect": true
        },
        {
          "label": "B",
          "text": "ごちそうさまでした (Gochisousama deshita) — Ucapan selesai makan",
          "isCorrect": false
        },
        {
          "label": "C",
          "text": "いってきます (Ittekimasu) — Pamitan keluar rumah",
          "isCorrect": false
        },
        {
          "label": "D",
          "text": "ただいま (Tadaima) — Salam tiba di rumah",
          "isCorrect": false
        }
      ],
      "explanation": "Di Jepang, sebelum makan siapapun wajib merapatkan kedua tangan dan mengucapkan 「いただきます」(Itadakimasu) sebagai bentuk terima kasih atas sajian makanan.",
      "points": 25
    },
    {
      "id": 5,
      "lesson_id": 1,
      "question_number": 5,
      "badge_text": "Tahap 2 • Chokai: Etika Setelah Selesai Makan",
      "question": "Dengarkan percakapan penutup seusai makan berikut. Ungkapan santun apakah yang diucapkan pelanggan untuk menyampaikan terima kasih karena makanan sangat lezat?",
      "image_url": "img/comic_ramen.svg",
      "audio_text": "スープまで全部飲み干しましたね！……はい、とても美味しかったです！ごちそうさまでした！……ありがとうございます！またお越しください！",
      "audio_label": "Percakapan Seusai Makan",
      "options": [
        {
          "label": "A",
          "text": "ごちそうさまでした (Gochisousama deshita)",
          "isCorrect": true
        },
        {
          "label": "B",
          "text": "いただきます (Itadakimasu)",
          "isCorrect": false
        },
        {
          "label": "C",
          "text": "おやすみなさい (Oyasuminasai)",
          "isCorrect": false
        },
        {
          "label": "D",
          "text": "ごめんなさい (Gomennasai)",
          "isCorrect": false
        }
      ],
      "explanation": "Setelah selesai makan dan hendak beranjak dari kedai, pelanggan mengucapkan 「ごちそうさまでした」 untuk menghargai koki dan penyedia makanan.",
      "points": 25
    },
    {
      "id": 6,
      "lesson_id": 1,
      "question_number": 6,
      "badge_text": "Soal Pengantar • Identifikasi Bentuk",
      "question": "Aksara apa yang digunakan pada kata \"ラーメン\" (ramen) yang dilihat Kenji di kedai?",
      "image_url": "img/comic_ramen.svg",
      "audio_text": "いらっしゃいませ！ご注文はお決まりですか？……はい、温かい醤油ラーメンを一つお願いします！……かしこまりました。ラーメン一丁！",
      "audio_label": "Percakapan di Kedai Ramen",
      "options": [
        {
          "label": "A",
          "text": "Hiragana (ひらがな)",
          "isCorrect": false
        },
        {
          "label": "B",
          "text": "Katakana (カタカナ)",
          "isCorrect": true
        },
        {
          "label": "C",
          "text": "Kanji (漢字)",
          "isCorrect": false
        },
        {
          "label": "D",
          "text": "Romaji (Huruf Latin)",
          "isCorrect": false
        }
      ],
      "explanation": "Katakana memiliki ciri khas bentuk garis lurus dan kaku, dipakai khusus untuk menulis kata serapan asing seperti ramen!",
      "points": 25
    },
    {
      "id": 7,
      "lesson_id": 1,
      "question_number": 7,
      "badge_text": "Soal Pengantar • Aksara Lambang Makna",
      "question": "Tulisan stasiun kereta \"東京\" (Tokyo) yang dibaca Kenji termasuk ke dalam golongan aksara apa?",
      "image_url": "img/comic_station.svg",
      "audio_text": "先生、駅前の看板に「東京ラーメン」と書いてありますが、ぜんぶ同じ種類の文字ですか？……いいえ、違いますよ。「東京」は漢字で、「ラーメン」はカタカナで書かれていますよ。",
      "audio_label": "Percakapan di Depan Stasiun",
      "options": [
        {
          "label": "A",
          "text": "Kanji (漢字)",
          "isCorrect": true
        },
        {
          "label": "B",
          "text": "Katakana (カタカナ)",
          "isCorrect": false
        },
        {
          "label": "C",
          "text": "Hiragana (ひらがな)",
          "isCorrect": false
        },
        {
          "label": "D",
          "text": "Hangeul Korea",
          "isCorrect": false
        }
      ],
      "explanation": "Aksara 東 (Timur) dan 京 (Ibu Kota) adalah aksara Kanji yang masing-masing memiliki arti dan konsep utuh.",
      "points": 25
    },
    {
      "id": 8,
      "lesson_id": 1,
      "question_number": 8,
      "badge_text": "Soal Pengantar • Aksara Asli & Tata Bahasa",
      "question": "Mengapa aksara Hiragana seperti \"ありがとう\" (arigatō) paling penting dan wajib dihafal pertama kali?",
      "image_url": "img/comic_aisatsu.svg",
      "audio_text": "りんは今、ひらがなを練習しているの？……はい！「すし」や「ありがとう」を書いています。曲がり角が多くて柔らかい形ですね！……そうですね、それが日本のひらがなの特徴ですよ。",
      "audio_label": "Percakapan Belajar Aksara",
      "options": [
        {
          "label": "A",
          "text": "Hanya digunakan untuk nama kota luar negeri",
          "isCorrect": false
        },
        {
          "label": "B",
          "text": "Merupakan aksara lentur yang merangkai tata bahasa dan partikel kalimat Jepang",
          "isCorrect": true
        },
        {
          "label": "C",
          "text": "Hanya dipakai oleh orang tua zaman kuno",
          "isCorrect": false
        },
        {
          "label": "D",
          "text": "Jumlah hurufnya hanya ada 5 huruf saja",
          "isCorrect": false
        }
      ],
      "explanation": "Hiragana adalah fondasi utama bahasa Jepang untuk partikel, akhiran kata kerja, dan kata asli Jepang!",
      "points": 25
    }
  ],
  "2": [
    {
      "id": 9,
      "lesson_id": 2,
      "question_number": 1,
      "badge_text": "Tahap 1 • Chokai: Sapaan Pagi Hari",
      "question": "Dengarkan percakapan bertukar salam di pagi hari berikut. Kapan sapaan 「おはようございます」 (Ohayō gozaimasu) tepat digunakan?",
      "image_url": "img/comic_aisatsu.svg",
      "audio_text": "おはようございます、小林さん！今日も朝からいいお天気ですね。……おはようございます、田中さん！本当に気持ちのいい朝ですね。",
      "audio_label": "Percakapan Sapaan Pagi",
      "options": [
        {
          "label": "A",
          "text": "Pagi hari sebelum pukul 10:00 saat pertama bertemu",
          "isCorrect": true
        },
        {
          "label": "B",
          "text": "Siang hari saat berpapasan di jam makan siang",
          "isCorrect": false
        },
        {
          "label": "C",
          "text": "Malam hari sebelum beranjak tidur di kamar",
          "isCorrect": false
        },
        {
          "label": "D",
          "text": "Kapan saja saat hendak meminta bon kasir",
          "isCorrect": false
        }
      ],
      "explanation": "「おはようございます」 adalah sapaan sopan pagi hari khas Jepang yang diucapkan sebelum sekitar pukul 10:00 pagi kepada rekan atau tetangga.",
      "points": 25
    },
    {
      "id": 10,
      "lesson_id": 2,
      "question_number": 2,
      "badge_text": "Tahap 1 • Chokai: Etika Terima Kasih Formal",
      "question": "Dengarkan percakapan di stasiun saat petugas membantu mengembalikan tiket yang jatuh. Kalimat apakah yang diucapkan penumpang untuk berterima kasih secara tulus?",
      "image_url": "img/comic_station.svg",
      "audio_text": "お客様、落とされた切符はこちらでしょうか？……あ、私の切符です！拾っていただき、本当にありがとうございます！……いいえ、どういたしまして。お気をつけて！",
      "audio_label": "Percakapan Stasiun Kereta",
      "options": [
        {
          "label": "A",
          "text": "ありがとうございます (Arigatō gozaimasu)",
          "isCorrect": true
        },
        {
          "label": "B",
          "text": "すみません (Sumimasen)",
          "isCorrect": false
        },
        {
          "label": "C",
          "text": "さようなら (Sayōnara)",
          "isCorrect": false
        },
        {
          "label": "D",
          "text": "ごめんなさい (Gomennasai)",
          "isCorrect": false
        }
      ],
      "explanation": "Untuk bantuan yang sangat berharga dari orang lain, ungkapan terima kasih formal yang paling tepat dan sopan adalah 「ありがとうございます」.",
      "points": 25
    },
    {
      "id": 11,
      "lesson_id": 2,
      "question_number": 3,
      "badge_text": "Tahap 2 • Chokai: Kata Ajaib Sumimasen",
      "question": "Dengarkan interaksi pelanggan di restoran berikut. Mengapa penutur menggunakan kata 「すみません」 (Sumimasen) dalam percakapannya?",
      "image_url": "img/comic_ramen.svg",
      "audio_text": "すみません！あそこにあるメニューを見せていただけますか？……はい、どうぞ！本日のおすすめメニューです。……すみません、お冷も一ついただけますか？……かしこまりました！",
      "audio_label": "Percakapan Restoran",
      "options": [
        {
          "label": "A",
          "text": "Untuk memanggil perhatian pelayan secara santun (permisi)",
          "isCorrect": true
        },
        {
          "label": "B",
          "text": "Karena telah memecahkan perabotan piring restoran",
          "isCorrect": false
        },
        {
          "label": "C",
          "text": "Untuk membatalkan seluruh pesanan makanan",
          "isCorrect": false
        },
        {
          "label": "D",
          "text": "Sebagai salam perpisahan saat keluar dari restoran",
          "isCorrect": false
        }
      ],
      "explanation": "Kata 「すみません」 adalah kata ajaib serbaguna wisatawan Jepang. Selain meminta maaf, kata ini paling sering digunakan untuk memanggil pelayan restoran secara ramah dan santun.",
      "points": 25
    }
  ],
  "3": [
    {
      "id": 12,
      "lesson_id": 3,
      "question_number": 1,
      "badge_text": "Tahap 1 • Chokai: Total Belanja Kasir",
      "question": "Dengarkan percakapan saat membayar di minimarket konbini berikut. Berapakah nominal harga belanjaan yang disebutkan oleh kasir?",
      "image_url": "img/comic_konbini.svg",
      "audio_text": "いらっしゃいませ。お茶とおにぎりで、合計で百五十円になります。……百五十円ですね。小銭でちょうど支払います。……百五十円ちょうどお預かりいたします。レシートです！",
      "audio_label": "Percakapan Kasir Konbini",
      "options": [
        {
          "label": "A",
          "text": "150 Yen (百五十円 / Hyaku gojū en)",
          "isCorrect": true
        },
        {
          "label": "B",
          "text": "500 Yen (五百円 / Go-hyaku en)",
          "isCorrect": false
        },
        {
          "label": "C",
          "text": "1.050 Yen (千五十円 / Sen gojū en)",
          "isCorrect": false
        },
        {
          "label": "D",
          "text": "50 Yen (五十円 / Gojū en)",
          "isCorrect": false
        }
      ],
      "explanation": "Kasir menyebutkan 「合計で百五十円になります」 yang berarti total belanjaan adalah 150 Yen (百 = 100, 五十 = 50).",
      "points": 25
    },
    {
      "id": 13,
      "lesson_id": 3,
      "question_number": 2,
      "badge_text": "Tahap 2 • Chokai: Menanyakan Harga",
      "question": "Dengarkan percakapan pembeli yang menanyakan harga berikut. Pola kalimat apakah yang digunakan pembeli saat menanyakan harga es krim matcha?",
      "image_url": "img/comic_konbini.svg",
      "audio_text": "すみません、この抹茶アイスはいくらですか？……そちらは一つ二百円になります。二つ買うと三百五十円ですよ。……じゃあ、二つください！",
      "audio_label": "Percakapan Menanyakan Harga",
      "options": [
        {
          "label": "A",
          "text": "これはいくらですか (Kore wa ikura desu ka?)",
          "isCorrect": true
        },
        {
          "label": "B",
          "text": "これはどこですか (Kore wa doko desu ka?)",
          "isCorrect": false
        },
        {
          "label": "C",
          "text": "これは何ですか (Kore wa nan desu ka?)",
          "isCorrect": false
        },
        {
          "label": "D",
          "text": "これをください (Kore o kudasai)",
          "isCorrect": false
        }
      ],
      "explanation": "Untuk menanyakan harga barang apapun di toko Jepang, polanya adalah: [Benda] + は いくら ですか (wa ikura desu ka?).",
      "points": 25
    }
  ],
  "4": [
    {
      "id": 14,
      "lesson_id": 4,
      "question_number": 1,
      "badge_text": "Tahap 1 • Chokai: Sapaan Menyambut Tamu",
      "question": "Dengarkan suasana percakapan saat pintu kedai ramen dibuka. Sapaan energik apakah yang diteriakkan oleh pelayan kedai untuk menyambut tamu?",
      "image_url": "img/comic_ramen.svg",
      "audio_text": "ガラガラ… いらっしゃいませ！何名様ですか？……一人です。カウンター席は空いていますか？……はい、空いております！奥の二番席へどうぞ！",
      "audio_label": "Percakapan Masuk Kedai Ramen",
      "options": [
        {
          "label": "A",
          "text": "いらっしゃいませ (Irasshaimase) — Selamat datang!",
          "isCorrect": true
        },
        {
          "label": "B",
          "text": "お邪魔します (Ojamashimasu) — Permisi bertamu",
          "isCorrect": false
        },
        {
          "label": "C",
          "text": "ごちそうさまでした (Gochisousama deshita) — Selesai makan",
          "isCorrect": false
        },
        {
          "label": "D",
          "text": "行ってらっしゃい (Itterasshai) — Selamat jalan",
          "isCorrect": false
        }
      ],
      "explanation": "Di seluruh restoran dan kedai Jepang, pelayan serempak menyambut pelanggan yang melangkah masuk dengan sapaan hangat 「いらっしゃいませ！」.",
      "points": 25
    },
    {
      "id": 15,
      "lesson_id": 4,
      "question_number": 2,
      "badge_text": "Tahap 2 • Chokai: Pola Menunjuk Menu",
      "question": "Dengarkan percakapan pemesanan makanan berikut. Kalimat praktis apakah yang diucapkan pembeli sambil menunjuk foto menu pilihan?",
      "image_url": "img/comic_ramen.svg",
      "audio_text": "すみません、注文をお願いします。写真のこれ を ください。……特製チャーシュー麺ですね！麺の硬さはどうなさいますか？……普通でお願いします。……かしこまりました！",
      "audio_label": "Percakapan Memesan Menu",
      "options": [
        {
          "label": "A",
          "text": "これ を ください (Kore o kudasai) — Tolong berikan yang ini",
          "isCorrect": true
        },
        {
          "label": "B",
          "text": "これ は 何 ですか (Kore wa nan desu ka?) — Ini apa ya?",
          "isCorrect": false
        },
        {
          "label": "C",
          "text": "トイレ は どこ ですか (Toire wa doko desu ka?) — Di mana toilet?",
          "isCorrect": false
        },
        {
          "label": "D",
          "text": "お会計 を お願いします (O-kaikei o onegaishimasu) — Minta nota tagihan",
          "isCorrect": false
        }
      ],
      "explanation": "Pola paling ampuh dan praktis bagi wisatawan adalah menunjuk foto hidangan pada buku menu sambil berkata: 「これをください」(Kore o kudasai).",
      "points": 25
    }
  ],
  "5": [
    {
      "id": 16,
      "lesson_id": 5,
      "question_number": 1,
      "badge_text": "Tahap 1 • Chokai: Menanyakan Lokasi Stasiun",
      "question": "Dengarkan percakapan turis yang kebingungan mencari jalan berikut. Pola kalimat apakah yang digunakan untuk menanyakan keberadaan stasiun Shibuya?",
      "image_url": "img/comic_station.svg",
      "audio_text": "あのう、道に迷ってしまって… すみません、渋谷駅はどこですか？……渋谷駅ですね！あそこの歩道橋を渡って、まっすぐ歩くと大きな改札口が見えますよ。……ありがとうございます！",
      "audio_label": "Percakapan Menanyakan Jalan",
      "options": [
        {
          "label": "A",
          "text": "渋谷駅 は どこ ですか (Shibuya-eki wa doko desu ka?)",
          "isCorrect": true
        },
        {
          "label": "B",
          "text": "渋谷駅 は いくら ですか (Shibuya-eki wa ikura desu ka?)",
          "isCorrect": false
        },
        {
          "label": "C",
          "text": "渋谷駅 を ください (Shibuya-eki o kudasai)",
          "isCorrect": false
        },
        {
          "label": "D",
          "text": "渋谷駅 が 好き ですか (Shibuya-eki ga suki desu ka?)",
          "isCorrect": false
        }
      ],
      "explanation": "Pola standar menanyakan tempat fasilitas umum di Jepang adalah: [Nama Tempat] + は どこ ですか (wa doko desu ka?).",
      "points": 25
    },
    {
      "id": 17,
      "lesson_id": 5,
      "question_number": 2,
      "badge_text": "Tahap 2 • Chokai: Memahami Arahan Jalan",
      "question": "Dengarkan petunjuk navigasi arah dari warga setempat berikut. Apakah arti dari instruksi 「まっすぐ行ってください」 (massugu itte kudasai)?",
      "image_url": "img/comic_directions.svg",
      "audio_text": "すみません、郵便局はどちらでしょうか？……この道をまっすぐ行ってください。信号を一つ越えた右手にありますよ。……まっすぐ行って右手ですね！分かりました！",
      "audio_label": "Percakapan Penunjuk Arah",
      "options": [
        {
          "label": "A",
          "text": "Silakan jalan lurus terus ke depan",
          "isCorrect": true
        },
        {
          "label": "B",
          "text": "Silakan belok ke kanan di persimpangan",
          "isCorrect": false
        },
        {
          "label": "C",
          "text": "Silakan putar balik ke belakang",
          "isCorrect": false
        },
        {
          "label": "D",
          "text": "Silakan naik jembatan penyeberangan",
          "isCorrect": false
        }
      ],
      "explanation": "Kata 「まっすぐ」(massugu) berarti lurus tanpa berbelok, sehingga 「まっすぐ行ってください」 artinya silakan berjalan lurus ke depan.",
      "points": 25
    }
  ],
  "6": [
    {
      "id": 18,
      "lesson_id": 6,
      "question_number": 1,
      "badge_text": "Tahap 1 • Chokai: Meminta Izin Melihat Barang",
      "question": "Dengarkan percakapan di toko suvenir Asakusa berikut. Kalimat santun apakah yang diucapkan pembeli saat meminta staf mengambilkan barang dari etalase?",
      "image_url": "img/comic_souvenir.svg",
      "audio_text": "あのう、ガラスケースの中の扇子を近くで見たいのですが… これを見せてください。……はい、かしこまりました！とても綺麗な京都の手作り扇子ですよ、どうぞ！……わあ、素敵ですね！",
      "audio_label": "Percakapan Toko Suvenir",
      "options": [
        {
          "label": "A",
          "text": "これを見せてください (Kore o misete kudasai) — Tolong perlihatkan ini",
          "isCorrect": true
        },
        {
          "label": "B",
          "text": "これを捨ててください (Kore o sutete kudasai) — Tolong buang ini",
          "isCorrect": false
        },
        {
          "label": "C",
          "text": "これを食べてください (Kore o tabete kudasai) — Tolong makan ini",
          "isCorrect": false
        },
        {
          "label": "D",
          "text": "これを隠してください (Kore o kakushite kudasai) — Tolong sembunyikan ini",
          "isCorrect": false
        }
      ],
      "explanation": "Untuk meminta pelayan mengambilkan atau memperlihatkan barang di rak pajangan secara santun, gunakan kalimat 「これを見せてください」(Kore o misete kudasai).",
      "points": 25
    },
    {
      "id": 19,
      "lesson_id": 6,
      "question_number": 2,
      "badge_text": "Tahap 2 • Chokai: Metode Pembayaran Kartu",
      "question": "Dengarkan percakapan saat hendak membayar di kasir berikut. Pertanyaan apakah yang diajukan pembeli mengenai metode pembayaran non-tunai?",
      "image_url": "img/comic_souvenir.svg",
      "audio_text": "合計で三千五百円になります。……すみません、現金の持ち合わせが少なくて… クレジットカードは使えますか？……はい、タッチ決済もご利用いただけますよ！……良かったです！カードでお願いします。",
      "audio_label": "Percakapan Transaksi Kasir",
      "options": [
        {
          "label": "A",
          "text": "クレジットカードは使えますか (Kurejitto kādo wa tsukaemasu ka?)",
          "isCorrect": true
        },
        {
          "label": "B",
          "text": "クレジットカードをなくしましたか (Kurejitto kādo o nakushimashita ka?)",
          "isCorrect": false
        },
        {
          "label": "C",
          "text": "現金はお持ちですか (Genkin wa omochi desu ka?)",
          "isCorrect": false
        },
        {
          "label": "D",
          "text": "レシートは要りませんか (Reshīto wa irimasen ka?)",
          "isCorrect": false
        }
      ],
      "explanation": "Kalimat penyelamat wisatawan saat kekurangan uang tunai adalah: 「クレジットカードは使えますか？」(Apakah bisa menggunakan kartu kredit?).",
      "points": 25
    }
  ],
  "7": [
    {
      "id": 20,
      "lesson_id": 7,
      "question_number": 1,
      "badge_text": "Tahap 1 • Chokai: Prosedur Check-in",
      "question": "Dengarkan percakapan saat tamu tiba di meja resepsionis hotel berikut. Kalimat resmi apakah yang diucapkan tamu untuk memulai proses registrasi menginap?",
      "image_url": "img/comic_hotel.svg",
      "audio_text": "いらっしゃいませ、グランドホテルへようこそ。……こんにちは、今日から二泊で予約しているスミスです。チェックインをお願いします。……スミス様ですね、ご予約確認いたしました。パスポートのご提示をお願いいたします。",
      "audio_label": "Percakapan Resepsionis Hotel",
      "options": [
        {
          "label": "A",
          "text": "チェックインをお願いします (Chekkuin o onegaishimasu)",
          "isCorrect": true
        },
        {
          "label": "B",
          "text": "チェックアウトをお願いします (Chekkuauto o onegaishimasu)",
          "isCorrect": false
        },
        {
          "label": "C",
          "text": "荷物を捨ててください (Nimotsu o sutete kudasai)",
          "isCorrect": false
        },
        {
          "label": "D",
          "text": "タクシーを呼んでください (Takushī o yonde kudasai)",
          "isCorrect": false
        }
      ],
      "explanation": "Saat tiba di meja resepsionis hotel untuk registrasi menginap dan mengambil kunci kamar, ucapkan: 「チェックインをお願いします」(Chekkuin o onegaishimasu).",
      "points": 25
    },
    {
      "id": 21,
      "lesson_id": 7,
      "question_number": 2,
      "badge_text": "Tahap 2 • Chokai: Menitipkan Koper",
      "question": "Dengarkan percakapan penitipan barang di lobi hotel berikut. Mengapa tamu menitipkan kopernya kepada staf hotel?",
      "image_url": "img/comic_hotel.svg",
      "audio_text": "チェックインは午後三時からとなっております。……まだお昼の十二時なので、観光に行ってきます。荷物を預かってもらえますか？……はい、かしこまりました！クロークでお預かりいたします。こちらがお控え札です。",
      "audio_label": "Percakapan Menitipkan Koper",
      "options": [
        {
          "label": "A",
          "text": "Karena jam check-in baru buka pukul 15:00 dan tamu ingin pergi wisata dulu",
          "isCorrect": true
        },
        {
          "label": "B",
          "text": "Karena koper tamu rusak dan ingin dibuang",
          "isCorrect": false
        },
        {
          "label": "C",
          "text": "Karena pihak hotel melarang koper masuk kamar",
          "isCorrect": false
        },
        {
          "label": "D",
          "text": "Karena kamar hotel tidak memiliki pintu lemari",
          "isCorrect": false
        }
      ],
      "explanation": "Jika sampai di hotel sebelum waktu check-in (umumnya jam 15:00), tamu hotel di Jepang bisa menitipkan bagasi koper secara gratis dengan kalimat: 「荷物を預かってもらえますか」(Nimotsu o azukatte moraemasu ka?).",
      "points": 25
    }
  ],
  "8": [
    {
      "id": 22,
      "lesson_id": 8,
      "question_number": 1,
      "badge_text": "Tahap 1 • Chokai: Mencari Toilet Darurat",
      "question": "Dengarkan percakapan darurat di stasiun kereta berikut. Fasilitas apakah yang sangat mendesak ditanyakan oleh penutur pertama?",
      "image_url": "img/comic_station.svg",
      "audio_text": "すみません！急にお腹が痛くなって困っています… 駅のトイレはどこですか？……大丈夫ですか？トイレなら、あの階段を降りてすぐ右手にありますよ！急いでください！……ありがとうございます！助かりました！",
      "audio_label": "Percakapan Darurat Toilet",
      "options": [
        {
          "label": "A",
          "text": "Toilet stasiun (トイレ / Toire)",
          "isCorrect": true
        },
        {
          "label": "B",
          "text": "Kedai ramen (ラーメン屋 / Rāmen-ya)",
          "isCorrect": false
        },
        {
          "label": "C",
          "text": "Loket tiket penerbangan (航空券売場)",
          "isCorrect": false
        },
        {
          "label": "D",
          "text": "Tempat parkir sepeda (駐輪場)",
          "isCorrect": false
        }
      ],
      "explanation": "Dalam keadaan mendesak di Jepang, pertanyaan paling penting yang wajib diingat adalah: 「トイレはどこですか？」(Toire wa doko desu ka? - Di mana toilet?).",
      "points": 25
    },
    {
      "id": 23,
      "lesson_id": 8,
      "question_number": 2,
      "badge_text": "Tahap 2 • Chokai: Menanyakan Kemampuan Bahasa Inggris",
      "question": "Dengarkan percakapan saat turis meminta bantuan petugas pos polisi berikut. Kalimat sopan apakah yang diucapkan turis untuk memastikan apakah petugas bisa berbahasa Inggris?",
      "image_url": "img/comic_emergency.svg",
      "audio_text": "あのう、財布を落としてしまって… 日本語があまり話せません。英語が話せますか？……はい、少しなら英語で話せますよ。Please calm down. Where did you lose your wallet?……良かった、駅のベンチです！",
      "audio_label": "Percakapan Bantuan Bahasa",
      "options": [
        {
          "label": "A",
          "text": "英語が話せますか (Eigo ga hanasemasu ka?)",
          "isCorrect": true
        },
        {
          "label": "B",
          "text": "日本語が好きですか (Nihongo ga suki desu ka?)",
          "isCorrect": false
        },
        {
          "label": "C",
          "text": "お名前は何ですか (O-namae wa nan desu ka?)",
          "isCorrect": false
        },
        {
          "label": "D",
          "text": "どこから来ましたか (Doko kara kimashita ka?)",
          "isCorrect": false
        }
      ],
      "explanation": "Saat menghadapi kendala bahasa di Jepang, bertanyalah dengan sopan: 「英語が話せますか？」(Apakah Anda bisa bahasa Inggris?).",
      "points": 25
    }
  ]
};
// Muat Bank Soal Quest dari SQLite untuk Pelajaran Ini
async function loadDynamicQuests(lessonId) {
  const questContainer = document.getElementById('dynamic-quests-container');
  if (!questContainer) return;

  try {
    const res = await fetch(`/api/materi/quests/${lessonId}`);
    const data = await res.json();
    if (data.success && data.quests && data.quests.length > 0) {
      renderQuestsList(data.quests, questContainer);
      return;
    }
  } catch (err) {
    // Mode statis atau server offline
  }

  // Gunakan data variasi komik jika API offline
  const fallbackList = FALLBACK_QUESTS_BY_LESSON[lessonId] || FALLBACK_QUESTS_BY_LESSON[1] || [];
  renderQuestsList(fallbackList, questContainer);
}

// Fungsi Putar Audio Soal Kuis (Pelafalan Asli Jepang)

// ====================================================
// CHOKAI (LISTENING COMPREHENSION) MULTI-TURN DIALOGUE ENGINE
// ====================================================
let chokaiPlaySession = 0;

function stopJapaneseAudio() {
  chokaiPlaySession++;
  if (typeof activeJapaneseAudio !== 'undefined' && activeJapaneseAudio) {
    try {
      activeJapaneseAudio.pause();
      activeJapaneseAudio.currentTime = 0;
    } catch (e) {}
    activeJapaneseAudio = null;
  }
  if (window.speechSynthesis) {
    try { window.speechSynthesis.cancel(); } catch (e) {}
  }
}
window.stopJapaneseAudio = stopJapaneseAudio;

function playChokaiAudio(btn, fullDialogue) {
  if (!fullDialogue) return;
  const thisSession = ++chokaiPlaySession;
  
  const labelSpan = btn.querySelector('.chokai-play-label');
  const iconSpan = btn.querySelector('.chokai-play-icon');
  
  if (btn.classList.contains('is-playing')) {
    stopJapaneseAudio();
    btn.classList.remove('is-playing');
    if (iconSpan) iconSpan.remove();
    if (labelSpan) labelSpan.textContent = 'Putar Audio Percakapan';
    return;
  }
  
  // Stop any other active buttons
  document.querySelectorAll('.btn-chokai-play.is-playing').forEach(b => {
    b.classList.remove('is-playing');
    const l = b.querySelector('.chokai-play-label');
    const i = b.querySelector('.chokai-play-icon');
    if (i) i.textContent = '';
    if (l) l.textContent = 'Putar Audio Percakapan';
  });
  
  btn.classList.add('is-playing');
  if (iconSpan) iconSpan.remove();
  if (labelSpan) labelSpan.textContent = 'Memutar Audio Percakapan...';

  // Split into turns by Japanese ellipsis …… or newlines
  const turns = fullDialogue.split(/(?:……+|\n+)/).map(t => t.trim()).filter(Boolean);
  
  let turnIdx = 0;
  function playNextTurn() {
    if (thisSession !== chokaiPlaySession) return;
    if (turnIdx >= turns.length) {
      btn.classList.remove('is-playing');
      if (iconSpan) iconSpan.remove();
      if (labelSpan) labelSpan.textContent = 'Putar Ulang Audio Percakapan';
      return;
    }
    
    const turnText = turns[turnIdx++];
    if (typeof window.speakJapanese === 'function') {
      window.speakJapanese(turnText);
    } else if (typeof speakJapanese === 'function') {
      speakJapanese(turnText);
    }
    
    // Natural speaking duration calculation: roughly 150ms per character + 450ms pause between speakers
    const estDuration = Math.max(1800, turnText.length * 160) + 450;
    setTimeout(playNextTurn, estDuration);
  }
  
  playNextTurn();
}
window.playChokaiAudio = playChokaiAudio;


function playQuestAudio(text) {
  if (!text) return;
  if (typeof window.speakJapanese === 'function') {
    window.speakJapanese(text);
  } else if (typeof speakJapanese === 'function') {
    speakJapanese(text);
  }
}

// ====================================================
// PERMAINAN MEMILAH / COCOK-COCOKAN KERANJANG (Matching Screenshot 4)
// ====================================================
const SORTING_GAME_DATA = {
  1: {
    title: 'Bedakan 4 Jenis Aksara',
    subtitle: 'Tiap kata menyimpan satu jenis aksara — masukkan ke keranjang yang benar!',
    baskets: ['Kanji', 'Hiragana', 'Katakana', 'Romaji'],
    items: [
      { word: '東京', romaji: 'Tōkyō', basket: 'Kanji', hint: '東京 memiliki arti Timur (東) dan Ibu Kota (京).' },
      { word: 'すし', romaji: 'sushi', basket: 'Hiragana', hint: 'すし berbentuk garis melengkung lentur asli khas Jepang.' },
      { word: 'ラーメン', romaji: 'rāmen', basket: 'Katakana', hint: 'ラーメン bergaris lurus tegas untuk kata serapan kuliner luar negeri.' },
      { word: 'Tokyo', romaji: 'Tokyo', basket: 'Romaji', hint: 'Tokyo ditulis dengan huruf alfabet latin biasa.' },
      { word: 'ありがとう', romaji: 'arigatō', basket: 'Hiragana', hint: 'ありがとう adalah sapaan asli Jepang beraksara Hiragana.' },
      { word: 'ホテル', romaji: 'hoteru', basket: 'Katakana', hint: 'ホテル adalah kata serapan asing dari bahasa Inggris (Hotel).' },
      { word: '日本', romaji: 'Nihon', basket: 'Kanji', hint: '日本 adalah lambang matahari (日) dan akar/asal (本).' },
      { word: 'Sushi', romaji: 'Sushi', basket: 'Romaji', hint: 'Sushi dieja dengan alfabet latin (Romaji).' }
    ]
  },
  2: {
    title: 'Pilah Kategori Ungkapan & Sapaan',
    subtitle: 'Cocokkan ungkapan Jepang ke dalam keranjang konteks yang tepat!',
    baskets: ['Salam Pagi', 'Salam Siang/Malam', 'Permisi / Maaf', 'Salam Pamit'],
    items: [
      { word: 'おはようございます', romaji: 'Ohayō gozaimasu', basket: 'Salam Pagi', hint: 'Diucapkan ramah saat pagi hari sebelum pukul 10:00.' },
      { word: 'こんにちは', romaji: 'Konnichiwa', basket: 'Salam Siang/Malam', hint: 'Sapaan universal siang hari saat berpapasan.' },
      { word: 'こんばんは', romaji: 'Konbanwa', basket: 'Salam Siang/Malam', hint: 'Sapaan akrab saat malam tiba setelah matahari terbenam.' },
      { word: 'すみません', romaji: 'Sumimasen', basket: 'Permisi / Maaf', hint: 'Kata ajaib untuk permisi, minta tolong, atau minta maaf santun.' },
      { word: 'さようなら', romaji: 'Sayōnara', basket: 'Salam Pamit', hint: 'Ungkapan pamitan atau selamat tinggal yang sopan.' },
      { word: 'ごめんなさい', romaji: 'Gomennasai', basket: 'Permisi / Maaf', hint: 'Permintaan maaf yang tulus dan bersahabat.' }
    ]
  },
  4: {
    title: 'Bedakan 5 Perubahan Kecil',
    subtitle: 'Tiap kata menyimpan satu perubahan — masukkan ke keranjang yang benar!',
    baskets: ['Dakuon', 'Handakuon', 'Yōon', 'Chōon', 'Sokuon'],
    items: [
      { word: 'かぎ', romaji: 'kagi', basket: 'Dakuon', hint: 'ぎ adalah dakuon, turunan dari huruf き yang diberi tanda tenten (゛).' },
      { word: 'パン', romaji: 'pan', basket: 'Handakuon', hint: 'パ adalah handakuon, turunan dari huruf は yang diberi lingkaran maru (゜).' },
      { word: 'びょういん', romaji: 'byōin', basket: 'Yōon', hint: 'びょ adalah yōon, perpaduan huruf び dan ょ kecil.' },
      { word: 'ラーメン', romaji: 'rāmen', basket: 'Chōon', hint: 'ー adalah tanda chōon perpanjangan vokal pada katakana.' },
      { word: 'きっぷ', romaji: 'kippu', basket: 'Sokuon', hint: 'っ kecil adalah sokuon jeda konsonan ganda/stop sound.' },
      { word: 'でんき', romaji: 'denki', basket: 'Dakuon', hint: 'で adalah dakuon, turunan dari huruf て yang diberi tanda tenten.' },
      { word: 'てんぷら', romaji: 'tenpura', basket: 'Handakuon', hint: 'ぷ adalah handakuon, turunan dari huruf ふ yang diberi tanda maru.' },
      { word: 'とうきょう', romaji: 'tōkyō', basket: 'Yōon', hint: 'きょ adalah yōon, gabungan bunyi き + ょ kecil.' },
      { word: 'コーヒー', romaji: 'kōhī', basket: 'Chōon', hint: 'ー memperpanjang bunyi vokal o dan i.' },
      { word: 'がっこう', romaji: 'gakkō', basket: 'Sokuon', hint: 'っ kecil menciptakan hentakan ganda k pada gakkō.' }
    ]
  },
  default: {
    title: 'Bedakan 5 Perubahan Kecil',
    subtitle: 'Tiap kata menyimpan satu perubahan — masukkan ke keranjang yang benar!',
    baskets: ['Dakuon', 'Handakuon', 'Yōon', 'Chōon', 'Sokuon'],
    items: [
      { word: 'かぎ', romaji: 'kagi', basket: 'Dakuon', hint: 'ぎ adalah dakuon dengan dua titik tenten.' },
      { word: 'パン', romaji: 'pan', basket: 'Handakuon', hint: 'パ adalah handakuon dengan tanda maru.' },
      { word: 'びょういん', romaji: 'byōin', basket: 'Yōon', hint: 'びょ adalah yōon gabungan konsonan.' },
      { word: 'ラーメン', romaji: 'rāmen', basket: 'Chōon', hint: 'ー adalah vokal diperpanjang chōon.' },
      { word: 'きっぷ', romaji: 'kippu', basket: 'Sokuon', hint: 'っ kecil adalah jeda konsonan ganda sokuon.' }
    ]
  }
};


function playSortSfx(isCorrect) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    if (isCorrect) {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.22, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } else {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(146.83, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    }
  } catch (e) {}
}


let sortCurrentIndex = 0;
let sortScore = 0;
let sortCombo = 0;
    playSortSfx(false);
let sortIsProcessing = false;

function renderSortingGame(container, lessonId) {
  const gameConfig = SORTING_GAME_DATA[lessonId] || SORTING_GAME_DATA[1] || SORTING_GAME_DATA.default;
  const items = gameConfig.items;
  const currentItem = items[sortCurrentIndex];

  if (!currentItem) {
    container.innerHTML = `
      <div class="sort-game-container">
        <div class="sort-victory-box">
          <div class="sort-victory-stars"></div>
          <h3 class="sort-victory-title">Kerja Bagus! Omedetou!</h3>
          <p class="sort-victory-desc">
            Kamu berhasil memilah seluruh <strong>${items.length} kata</strong> ke keranjang yang tepat dengan total skor <strong>+${sortScore} Poin</strong>!
          </p>
          <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
            <button type="button" class="btn-sort-restart" onclick="restartSortingGame(${lessonId})">
              <span>Main Lagi</span>
            </button>
            <button type="button" class="btn-sort-restart" style="background:var(--green);" onclick="finishCurrentLesson()">
              <span>Selesaikan Pelajaran </span>
            </button>
          </div>
        </div>
      </div>
    `;
    if (typeof window.addPointsToUser === 'function') {
      window.addPointsToUser(50, currentLessonId);
    }
    return;
  }

  const progressPercent = Math.round(((sortCurrentIndex + 1) / items.length) * 100);

  container.innerHTML = `
    <div class="sort-game-container">
      <div class="sort-game-header">
        <span class="sort-progress-badge">Soal ${sortCurrentIndex + 1} / ${items.length}</span>
        <div class="sort-stats-wrap">
          <span class="sort-combo-badge ${sortCombo > 1 ? "bounce" : ""}" id="sort-combo-badge">Combo x${sortCombo}</span>
          <span class="sort-score-badge">Skor: ${sortScore} Poin</span>
        </div>
      </div>
      <div class="sort-progress-bar-wrap">
        <div class="sort-progress-bar-fill" style="width: ${progressPercent}%;"></div>
      </div>

      <div class="sort-word-box">
        <div class="sort-word-text">${currentItem.word}</div>
        <div class="sort-word-romaji">${currentItem.romaji}</div>
        <div class="sort-prompt-text">Ini jenis yang mana? Masukkan ke keranjang yang benar!</div>
        <button type="button" class="sort-word-speaker" onclick="speakJapanese('${escapeHtml(currentItem.word)}')">Audio: </button>
      </div>

      <div class="sort-baskets-grid">
        ${gameConfig.baskets.map(b => `
          <button type="button" class="sort-basket-btn" onclick="chooseSortBasket('${b}', ${lessonId})">
            <span>${b}</span>
          </button>
        `).join('')}
      </div>

      <div class="sort-feedback-banner" id="sort-feedback-banner"></div>
    </div>
  `;
}

function chooseSortBasket(chosenBasket, lessonId) {
  if (sortIsProcessing) return;
  const gameConfig = SORTING_GAME_DATA[lessonId] || SORTING_GAME_DATA[1] || SORTING_GAME_DATA.default;
  const items = gameConfig.items;
  const currentItem = items[sortCurrentIndex];
  if (!currentItem) return;

  sortIsProcessing = true;
  const banner = document.getElementById('sort-feedback-banner');
  const allBtns = document.querySelectorAll('.sort-basket-btn');
  let clickedBtn = null;
  allBtns.forEach(btn => {
    if (btn.textContent.includes(chosenBasket)) clickedBtn = btn;
  });

  const isCorrect = chosenBasket === currentItem.basket;

  if (isCorrect) {
    sortScore += 25;
    playSortSfx(true);
    sortCombo++;
    if (clickedBtn) clickedBtn.classList.add('basket-correct');
    if (banner) {
      banner.className = 'sort-feedback-banner show-correct';
      banner.innerHTML = `<strong>Jawaban Tepat (+25 Poin)</strong> ${currentItem.hint}`;
    }
    setTimeout(() => {
      sortCurrentIndex++;
      sortIsProcessing = false;
      const container = document.getElementById('sort-game-mount-point') || document.getElementById('dynamic-quests-container');
      if (container) renderSortingGame(container, lessonId);
    }, 750);
  } else {
    sortCombo = 0;
    if (clickedBtn) clickedBtn.classList.add('basket-wrong');
    if (banner) {
      banner.className = 'sort-feedback-banner show-wrong';
      banner.innerHTML = `<strong>Kurang Tepat.</strong> ${currentItem.hint}`;
    }
    setTimeout(() => {
      if (clickedBtn) clickedBtn.classList.remove('basket-wrong');
      sortIsProcessing = false;
    }, 1200);
  }
}
window.chooseSortBasket = chooseSortBasket;

function restartSortingGame(lessonId) {
  sortCurrentIndex = 0;
  sortScore = 0;
  sortCombo = 0;
  sortIsProcessing = false;
  const container = document.getElementById('sort-game-mount-point') || document.getElementById('dynamic-quests-container');
  if (container) renderSortingGame(container, lessonId);
}
window.restartSortingGame = restartSortingGame;

let currentQuestsCache = [];
let activeQuestStage = 1;

function getLessonTeacherNote(lessonId) {
  const notes = {"1":"<strong>びよういん</strong> itu salon kecantikan, <strong>びょういん</strong> itu rumah sakit: satu aksara kecil mengubah segalanya! Di Jepang, 1 kalimat memadukan <strong>Kanji</strong> (makna), <strong>Hiragana</strong> (tata bahasa), dan <strong>Katakana</strong> (serapan). Furigana kecil di atas Kanji adalah kunci penyelamat cara baca!","2":"Kata <strong>すみません (Sumimasen)</strong> dijuluki kata ajaib wisatawan Jepang! Bukan cuma berarti \"Maaf\", tapi juga \"Permisi\" saat memanggil pelayan dan \"Terima kasih atas bantuan Anda yang merepotkan\". Selalu membungkuk sedikit (Ojigi) saat mengucapkannya!","3":"Di kasir minimarket konbini, angka 100 disebut <strong>Hyaku (百)</strong> dan 10 disebut <strong>Jū (十)</strong>. Jika kasir bertanya <em>\"O-fukuro wa?\"</em>, artinya mereka menawarkan kantong kresek! Jawablah <em>\"Onegaishimasu\"</em> (mau) atau <em>\"Daijoubu desu\"</em> (tidak perlu).","4":"Ucapkan selalu <strong>いただきます (Itadakimasu)</strong> sebelum makan dan <strong>ごちそうさまでした (Gochisousama deshita)</strong> sesudah makan. Cara paling ampuh memesan menu: tunjuk foto dan ucapkan <strong>これ を ください (Kore o kudasai)</strong>!","5":"Saat tersesat, ingat pola <strong>[Tempat] + は どこ ですか (wa doko desu ka)</strong>? Contoh: <em>Eki wa doko desu ka?</em> (Stasiun kereta di mana?). Petunjuk <strong>まっすぐ (massugu)</strong> berarti jalan lurus terus, dan <strong>みぎ (migi)</strong> adalah kanan!","6":"Sebelum memegang barang di etalase, minta izin dengan santun: <strong>これ を 見せて ください (Kore o misete kudasai)</strong>. Dan untuk pembayaran non-tunai, tanyakan <strong>Kurejitto kādo wa tsukaemasu ka?</strong>","7":"Jika tiba di hotel sebelum jam check-in (biasanya jam 15:00), Anda bisa menitipkan koper secara gratis dengan kalimat: <strong>荷物 を 預かってもらえますか (Nimotsu o azukatte moraemasu ka?)</strong>!","8":"Pertanyaan penyelamat paling penting saat darurat: <strong>トイレ は どこ ですか (Toire wa doko desu ka?)</strong>. Jika butuh bantuan bahasa asing, tanyakan dengan sopan: <strong>英語 が 話せますか (Eigo ga hanasemasu ka?)</strong>."};
  return notes[lessonId] || 'Bahasa Jepang memadukan Kanji, Hiragana, dan Katakana dalam harmoni yang terstruktur.';
}
window.getLessonTeacherNote = getLessonTeacherNote;

// Render Daftar Soal Quest Dinamis dengan Dukungan Gambar Selektif, Stage Tabs, & Permainan Memilah
function renderQuestsList(quests, container) {
  currentQuestsCache = quests || [];
  if (!quests || quests.length === 0) {
    container.innerHTML = '<div style="text-align:center; padding:2rem; color:var(--text-soft);"><p>Belum ada soal kuis untuk materi ini.</p></div>';
    return;
  }

  // Filter hanya soal kuis pilihan ganda yang riil (semua disatukan dalam satu scroll)
  const playableQuests = quests.filter(q => {
    const b = (q.badge_text || '').toLowerCase();
    return !b.includes('permainan memilah') && !b.includes('keranjang');
  });

  const displayQuests = playableQuests.length > 0 ? playableQuests : quests;

  let html = '';

  html += displayQuests.map((q, idx) => {
    const opts = q.options || [];
    const safeExp = encodeURIComponent(q.explanation || '');
    
    let audioTarget = q.audio_text;
    if (!audioTarget) {
      const matchKutip = q.question.match(/「([^」]+)」/) || q.question.match(/"([^"]+)"/);
      if (matchKutip && matchKutip[1]) {
        audioTarget = matchKutip[1].split('(')[0].trim();
      }
    }
    const finalAudio = audioTarget || '';
    const isShortWord = q.question.length < 45 && !q.question.includes('?') && !q.question.includes('adalah');

    const ans = lessonQuizAnswers[q.id];

    return `
      <div class="quest-card quest-box" data-quest-id="${q.id}" data-explanation="${safeExp}" data-points="${q.points || 25}">
        ${(q.image_url || q.img) ? `
          <div class="quest-illustration-card">
            <img src="${((q.image_url || q.img).startsWith('http') || (q.image_url || q.img).startsWith('/') || (q.image_url || q.img).startsWith('data:')) ? (q.image_url || q.img) : ('/' + (q.image_url || q.img))}" class="quest-illustration-img" alt="Ilustrasi Soal" draggable="false" />
          </div>
        ` : ''}

        <div class="quest-card-header">
          <span class="quest-q-num">Soal ${idx + 1}</span>
          <span class="quest-q-content" ${isShortWord ? "" : "style=\"font-size:1.22rem; font-weight:700; line-height:1.5;\""}>
            ${q.question}
          </span>
        </div>

        ${finalAudio ? `
          <div class="chokai-audio-player">
            <button type="button" class="btn-chokai-play" onclick="playChokaiAudio(this, '${escapeHtml(finalAudio)}')">
              <span class="chokai-play-label">Putar Audio Percakapan</span>
            </button>
            <div class="chokai-audio-hint">Dengarkan percakapan audio untuk menjawab pertanyaan di bawah.</div>
          </div>
        ` : ''}

        <div class="quest-pill-options">
          ${opts.map(opt => {
            const isSelected = ans && ans.selectedText === opt.text.trim();
            const isDisabled = !!ans;
            const stateClass = isSelected ? (ans.isCorrect ? 'correct' : 'wrong') : '';
            return `
              <button type="button" class="quest-pill-btn quest-opt-btn ${stateClass}" data-correct="${opt.isCorrect ? "1" : "0"}" ${isDisabled ? "disabled" : ""} onclick="handleQuestOptionClick(this, event)">
                <span>${escapeHtml(opt.text)}</span>
              </button>
            `;
          }).join('')}
        </div>
        
        ${ans ? `
          <div class="quest-feedback-box show ${ans.isCorrect ? 'correct' : 'wrong'}">
            <strong>${ans.isCorrect ? 'Jawaban Tepat (+25 Poin).' : 'Jawaban Salah.'}</strong> ${escapeHtml(ans.feedbackText)}
          </div>
        ` : '<div class="quest-feedback-box"></div>'}
      </div>
    `;
  }).join('');

  container.innerHTML = html;
}

function switchQuestStage(stageNum) {
  activeQuestStage = stageNum;
  const container = document.getElementById('dynamic-quests-container');
  if (container && currentQuestsCache.length > 0) {
    renderQuestsList(currentQuestsCache, container);
  }
}
window.switchQuestStage = switchQuestStage;

// ====================================================
// DRAG PROTECTION UNTUK KUIS (Mencegah Input Terpicu Saat Drag Mouse)
// ====================================================
let questDragStartPos = { x: 0, y: 0, time: 0 };
let isQuestDragging = false;

document.addEventListener('mousedown', function(e) {
  questDragStartPos = { x: e.clientX, y: e.clientY, time: Date.now() };
  isQuestDragging = false;
  document.body.classList.remove('is-dragging-gesture');
}, true);

document.addEventListener('mousemove', function(e) {
  if (e.buttons > 0) {
    const dist = Math.hypot(e.clientX - questDragStartPos.x, e.clientY - questDragStartPos.y);
    if (dist > 3) {
      isQuestDragging = true;
      document.body.classList.add('is-dragging-gesture');
    }
  }
}, true);

document.addEventListener('mouseup', function(e) {
  document.body.classList.remove('is-dragging-gesture');
  if (document.activeElement && document.activeElement.blur) {
    document.activeElement.blur();
  }
  if (isQuestDragging) {
    setTimeout(function() {
      isQuestDragging = false;
      document.body.classList.remove('is-dragging-gesture');
    }, 120);
  }
}, true);

// Blokir drag HTML5 bawaan browser
document.addEventListener('dragstart', function(e) {
  if (e.target.closest('.quest-opt-btn') || e.target.closest('.quest-box')) {
    e.preventDefault();
    return false;
  }
}, true);

// Cegah eksekusi click jika terjadi gesture drag
document.addEventListener('click', function(e) {
  const btn = e.target.closest('.quest-opt-btn');
  if (btn) {
    const dist = Math.hypot(e.clientX - questDragStartPos.x, e.clientY - questDragStartPos.y);
    if (isQuestDragging || dist > 3) {
      e.preventDefault();
      e.stopImmediatePropagation();
      isQuestDragging = false;
      document.body.classList.remove('is-dragging-gesture');
      if (btn.blur) btn.blur();
      return false;
    }
  }
}, true);

function handleQuestOptionClick(btn, event) {
  if (isQuestDragging) return;
  if (event) {
    const dist = Math.hypot(event.clientX - questDragStartPos.x, event.clientY - questDragStartPos.y);
    if (dist > 5) return;
  }
  const box = btn.closest('.quest-box');
  if (!box) return;
  const isCorrect = btn.dataset.correct === '1';
  let explanation = '';
  try {
    explanation = decodeURIComponent(box.dataset.explanation || '');
  } catch (e) {
    explanation = box.dataset.explanation || '';
  }
  const points = parseInt(box.dataset.points || '25', 10);
  checkQuestOption(btn, isCorrect, explanation, points);
}
window.handleQuestOptionClick = handleQuestOptionClick;

// Kembali ke Katalog
function closeLessonToCatalog() {
  const catalogView = document.getElementById('materi-catalog-view');
  const lessonView = document.getElementById('materi-lesson-view');

  if (catalogView) catalogView.classList.remove('hidden');
  if (lessonView) lessonView.classList.remove('active');

  selectLevelTab(currentActiveLevelCode);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Ganti Tab Stepper
function setLessonStep(stepKey) {
  try {
    sessionStorage.setItem('sijapanese_active_step', stepKey);
    sessionStorage.setItem('sijapanese_active_lesson_id', String(currentLessonId || 1));
  } catch (e) {}
  currentActiveStep = stepKey;

  document.querySelectorAll('.step-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.step === stepKey);
  });

  document.querySelectorAll('.lesson-step-content').forEach(content => {
    content.classList.remove('active');
  });

  const targetContent = document.getElementById(`step-content-${stepKey}`);
  if (targetContent) {
    targetContent.classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle Tampilan Contoh Aksara (Langkah 3: Huruf)
function toggleHurufExamples(type) {
  const panel = document.getElementById(`panel-examples-${type}`);
  const btn = document.getElementById(`btn-toggle-${type}`);
  if (!panel) return;

  const isOpen = panel.classList.toggle('open');
  if (btn) {
    const textSpan = btn.querySelector('span');
    if (textSpan) {
      textSpan.textContent = isOpen ? 'Tutup contoh' : 'Lihat contoh';
    }
    const svg = btn.querySelector('svg');
    if (svg) {
      svg.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
      svg.style.transition = 'transform 0.2s ease';
    }
  }
}

// Toggle Furigana (Cara Baca Kanji di Langkah 4: Kalimat)
let isFuriganaActive = true;
function toggleFurigana() {
  isFuriganaActive = !isFuriganaActive;
  const rubies = document.querySelectorAll('.furigana-ruby');
  rubies.forEach(r => {
    r.classList.toggle('hidden', !isFuriganaActive);
  });

  const label = document.getElementById('furigana-toggle-label');
  if (label) {
    label.textContent = isFuriganaActive ? 'Furigana: ON' : 'Furigana: OFF';
  }
  const btn = document.getElementById('furigana-toggle-btn');
  if (btn) {
    btn.classList.toggle('active', isFuriganaActive);
  }
}

// Highlight Kata Interaktif pada Kalimat (Langkah 4: Kalimat)
function highlightWordInSentence(wordKey) {
  // Reset semua bubble & card
  document.querySelectorAll('.kalimat-char-bubble').forEach(b => b.classList.remove('pulse-glow'));
  document.querySelectorAll('.kalimat-breakdown-card').forEach(c => {
    c.style.background = '';
    c.style.transform = '';
  });

  // Highlight bubble kata yang cocok
  const wordGroup = document.querySelector(`.kalimat-word-group[data-word="${wordKey}"]`);
  if (wordGroup) {
    wordGroup.querySelectorAll('.kalimat-char-bubble').forEach(b => {
      b.classList.add('pulse-glow');
    });
  }

  // Highlight kartu penjelasan yang cocok
  const card = document.querySelector(`.kalimat-breakdown-card[data-word="${wordKey}"]`);
  if (card) {
    card.style.background = '#FEF3C7';
    card.style.transform = 'translateX(8px)';
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  setTimeout(() => {
    document.querySelectorAll('.kalimat-char-bubble').forEach(b => b.classList.remove('pulse-glow'));
    if (card) {
      card.style.background = '';
      card.style.transform = '';
    }
  }, 1600);
}

// Filter Interaktif Huruf pada Kalimat (Langkah 4: Kalimat)
function filterSentenceScript(type) {
  // Update tombol filter
  document.querySelectorAll('.btn-filter-tag, .btn-filter-script').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === type);
  });

  // Filter bubble karakter
  const bubbles = document.querySelectorAll('.kalimat-char-bubble, .sentence-chars-row .char-bubble');
  bubbles.forEach(b => {
    b.classList.remove('dimmed', 'pulse-glow', 'highlighted');
    if (type === 'all') return;

    const bType = b.dataset.type || (b.classList.contains('kanji') ? 'kanji' : (b.classList.contains('hiragana') ? 'hiragana' : (b.classList.contains('katakana') ? 'katakana' : '')));
    if (bType === type) {
      b.classList.add('pulse-glow');
    } else if (!b.classList.contains('k-punct') && !b.classList.contains('punct')) {
      b.classList.add('dimmed');
    }
  });

  // Filter kartu penjelasan
  const breakdownCards = document.querySelectorAll('.kalimat-breakdown-card, .breakdown-item');
  breakdownCards.forEach(item => {
    if (type === 'all' || item.dataset.type === type) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

// State Jawaban Kuis per Materi (Tersimpan Antar Tahap)
let lessonQuizAnswers = {};

// Periksa Jawaban Pilihan Ganda Kuis Quest
function checkQuestOption(btn, isCorrect, feedbackText, points = 25) {
  const box = btn.closest('.quest-box');
  if (!box) return;

  const questId = box.dataset.questId || ('q_' + Array.from(box.parentElement.children).indexOf(box));

  box.querySelectorAll('.quest-opt-btn').forEach(b => {
    b.disabled = true;
  });

  const feedbackBox = box.querySelector('.quest-feedback-box');
  if (isCorrect) {
    btn.classList.add('correct');
    if (feedbackBox) {
      feedbackBox.className = 'quest-feedback-box show correct';
      feedbackBox.innerHTML = `<strong>Jawaban Tepat (+${points} Poin).</strong> ${feedbackText}`;
    }

    // Simpan poin langsung ke akun siswa di SQLite
    if (typeof window.addPointsToUser === 'function') {
      window.addPointsToUser(points, currentLessonId);
    }
  } else {
    btn.classList.add('wrong');
    if (feedbackBox) {
      feedbackBox.className = 'quest-feedback-box show wrong';
      feedbackBox.innerHTML = `<strong>Jawaban Salah.</strong> ${feedbackText}`;
    }
  }

  // Rekam status jawaban
  lessonQuizAnswers[questId] = {
    isCorrect: isCorrect,
    selectedText: btn.textContent.trim(),
    feedbackText: feedbackText
  };

  // Hitung jumlah soal riil di SELURUH modul (tidak termasuk permainan memilah)
  const playableQuests = (currentQuestsCache && currentQuestsCache.length > 0)
    ? currentQuestsCache.filter(q => {
        const b = (q.badge_text || '').toLowerCase();
        return !b.includes('memilah') && !b.includes('keranjang');
      })
    : Array.from(document.querySelectorAll('#step-content-kuis .quest-box'));

  const totalLessonQuests = playableQuests.length || 1;
  const answeredLessonQuests = Object.keys(lessonQuizAnswers).length;

  // Jika SEMUA soal di seluruh materi sudah terjawab -> TAMPILKAN POPUP MODAL
  if (answeredLessonQuests >= totalLessonQuests) {
    setTimeout(() => {
      showQuizCompletionModal();
    }, 600);
    return;
  }

  // Jika baru selesai tahap ini dan masih ada tahap selanjutnya -> Berikan tombol lanjut tahap
  const currentStageBoxes = document.querySelectorAll('#dynamic-quests-container .quest-box');
  let currentStageAnswered = 0;
  currentStageBoxes.forEach(b => {
    if (b.querySelector('.quest-opt-btn:disabled')) currentStageAnswered++;
  });

  if (currentStageBoxes.length > 0 && currentStageAnswered >= currentStageBoxes.length) {
    const nextStageNum = activeQuestStage + 1;
    const container = document.getElementById('dynamic-quests-container');
    if (container && !container.querySelector('.stage-advance-banner')) {
      const banner = document.createElement('div');
      banner.className = 'stage-advance-banner';
      banner.innerHTML = `
        <button type="button" class="btn-stage-advance" onclick="switchQuestStage(${nextStageNum})">
          <span>Lanjut ke Tahap ${nextStageNum} </span>
        </button>
      `;
      container.appendChild(banner);
      banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
}
window.checkQuestOption = checkQuestOption;

// Uji Pemahaman Cepat Mini Challenge
function checkMiniChallenge(btn, isCorrect, feedbackText) {
  const parent = btn.closest('.kalimat-challenge-card');
  if (!parent) return;

  parent.querySelectorAll('.btn-challenge-opt').forEach(b => {
    b.disabled = true;
  });

  const feedbackBox = document.getElementById('mini-challenge-feedback');
  if (isCorrect) {
    btn.classList.add('correct');
    if (feedbackBox) {
      feedbackBox.className = 'quest-feedback-box show correct';
      feedbackBox.innerHTML = `<strong>Jawaban Tepat (+25 Poin)</strong> ${feedbackText}`;
    }

    if (typeof window.addPointsToUser === 'function') {
      window.addPointsToUser(25, currentLessonId);
    }
  } else {
    btn.classList.add('wrong');
    if (feedbackBox) {
      feedbackBox.className = 'quest-feedback-box show wrong';
      feedbackBox.innerHTML = `<strong>Jawaban Salah.</strong> ${feedbackText}`;
    }
  }
}

// Selesaikan Pelajaran & Buka Modal Popup Selesai Kuis
function finishCurrentLesson() {
  showQuizCompletionModal();
}
window.finishCurrentLesson = finishCurrentLesson;

// MODAL POPUP SELESAI KUIS (Sesuai Permintaan User: Lembar Halaman Tetap Bersih Khusus Kuis)
function showQuizCompletionModal() {
  const oldBanner = document.getElementById('quiz-stay-card');
  if (oldBanner) oldBanner.remove();

  try {
    let completedLessons = JSON.parse(localStorage.getItem('sijapanese_completed_lessons') || '[]');
    if (!completedLessons.includes(currentLessonId)) {
      completedLessons.push(currentLessonId);
      localStorage.setItem('sijapanese_completed_lessons', JSON.stringify(completedLessons));
    }
  } catch (e) {}

  if (!questScoreAwarded && typeof window.addPointsToUser === 'function') {
    window.addPointsToUser(50, currentLessonId);
    questScoreAwarded = true;
  }

  const answersList = Object.values(lessonQuizAnswers);
  const correctCount = answersList.filter(a => a.isCorrect).length;
  const totalCount = answersList.length || 1;
  const scorePercent = Math.round((correctCount / totalCount) * 100);

  let modal = document.getElementById('quiz-completion-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'quiz-completion-modal';
    modal.className = 'quiz-modal-backdrop';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="quiz-modal-dialog">
      <button type="button" class="quiz-modal-close" onclick="closeQuizModal()" title="Tutup">Tutup</button>
      <div class="quiz-modal-badge">HASIL KUIS</div>
      <h3 class="quiz-modal-title">Kuis Selesai</h3>
      <p class="quiz-modal-desc">
        Anda telah menyelesaikan seluruh soal pada modul materi ini.
      </p>
      
      <div class="quiz-modal-stats-box">
        <div class="quiz-modal-stat-item">
          <span class="quiz-modal-stat-val">${correctCount} / ${totalCount}</span>
          <span class="quiz-modal-stat-label">Jawaban Benar</span>
        </div>
        <div class="quiz-modal-stat-item">
          <span class="quiz-modal-stat-val">${scorePercent}%</span>
          <span class="quiz-modal-stat-label">Akurasi</span>
        </div>
        <div class="quiz-modal-stat-item">
          <span class="quiz-modal-stat-val">+50</span>
          <span class="quiz-modal-stat-label">Poin Bonus</span>
        </div>
      </div>

      <div class="quiz-modal-actions">
        <button type="button" class="btn-modal-action btn-modal-review" onclick="closeQuizModal()">
          <span>Review Pembahasan Soal</span>
        </button>
        <button type="button" class="btn-modal-action btn-modal-retry" onclick="restartCurrentLessonQuests()">
          <span>Ulangi Kuis</span>
        </button>
        <button type="button" class="btn-modal-action btn-modal-next" onclick="finishAndGoToSummary()">
          <span>Lanjut ke Modul Berikutnya</span>
        </button>
      </div>
    </div>
  `;

  requestAnimationFrame(() => {
    modal.classList.add('show');
  });
}
window.showQuizCompletionModal = showQuizCompletionModal;

function closeQuizModal() {
  const modal = document.getElementById('quiz-completion-modal');
  if (modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.remove();
    }, 280);
  }
}
window.closeQuizModal = closeQuizModal;

function finishAndGoToSummary() {
  closeQuizModal();
  setLessonStep('selesai');
}
window.finishAndGoToSummary = finishAndGoToSummary;

function restartCurrentLessonQuests() {
  lessonQuizAnswers = {};
  questScoreAwarded = false;
  closeQuizModal();

  const container = document.getElementById('dynamic-quests-container');
  if (container && currentQuestsCache && currentQuestsCache.length > 0) {
    renderQuestsList(currentQuestsCache, container);
  } else {
    document.querySelectorAll('#step-content-kuis .quest-opt-btn').forEach(btn => {
      btn.disabled = false;
      btn.classList.remove('correct', 'wrong');
    });
    document.querySelectorAll('#step-content-kuis .quest-feedback-box').forEach(fb => {
      fb.innerHTML = '';
      fb.className = 'quest-feedback-box';
    });
  }

  scrollToQuestTop();
}
window.restartCurrentLessonQuests = restartCurrentLessonQuests;

function scrollToQuestTop() {
  closeQuizModal();
  const kuisTab = document.getElementById('step-content-kuis');
  if (kuisTab) {
    kuisTab.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
window.scrollToQuestTop = scrollToQuestTop;


function escapeHtml(text) {
  if (text === null || text === undefined) return '';
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return String(text).replace(/[&<>"']/g, function(m) {
    return map[m] || m;
  });
}

// ====================================================
// EXPORTS KE WINDOW GLOBAL
// ====================================================
window.openLesson = openLesson;
window.setLessonStep = setLessonStep;
window.closeLessonToCatalog = closeLessonToCatalog;
window.selectLevelTab = selectLevelTab;
window.prevLesson = prevLesson;
window.nextLesson = nextLesson;
window.finishCurrentLesson = finishCurrentLesson;
window.restartCurrentLessonQuests = restartCurrentLessonQuests;
window.checkQuestOption = checkQuestOption;
window.renderLessonDetail = renderLessonDetail;
window.LESSON_DETAIL_DATA = LESSON_DETAIL_DATA;
if (typeof speakJapanese !== 'undefined') {
  window.speakJapanese = speakJapanese;
}
