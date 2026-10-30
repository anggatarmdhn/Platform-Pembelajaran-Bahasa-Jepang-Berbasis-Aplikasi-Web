// ====================================================
// SIJapanese - Kurikulum Materi Sederhana (Gaya Nihongo to Japan)
// Simpel, Terstruktur dari Nol, Ramah Pemula, Zero Icon, Zero Emoji
// Terintegrasi dengan Penilaian Master Guru & Web Speech Audio
// ====================================================

// Data Default Kota-Kota Terkenal Jepang (Dapat diedit oleh Guru Master)
const DEFAULT_JAPAN_CITIES = [
  {
    id: 'tokyo',
    name: 'Tokyo',
    kanji: '東京',
    kana: 'とうきょう',
    romaji: 'Toukyou',
    region: 'Kanto (Pulau Honshu)',
    desc: 'Ibu kota metropolitan modern Jepang, pusat pemerintahan, teknologi masa depan, dan kiblat kebudayaan pop dunia.',
    highlights: 'Menara Tokyo, Shibuya Crossing, Kuil Asakusa Sensoji, Akihabara.',
    food: 'Ramen Shoyu, Nigiri Sushi, Monjayaki.',
    pinX: 475,
    pinY: 260
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    kanji: '京都',
    kana: 'きょうと',
    romaji: 'Kyouto',
    region: 'Kansai (Pulau Honshu)',
    desc: 'Ibu kota kuno Jepang selama lebih dari seribu tahun. Pusat kebudayaan tradisional, ribuan kuil indah, dan tradisi Geisha.',
    highlights: 'Kuil Emas Kinkakuji, Gerbang Torii Fushimi Inari, Distrik Gion, Arashiyama.',
    food: 'Matcha Uji, Kaiseki Ryori, Yudofu (Tahu Rebus Khas).',
    pinX: 385,
    pinY: 265
  },
  {
    id: 'osaka',
    name: 'Osaka',
    kanji: '大阪',
    kana: 'おおさか',
    romaji: 'Oosaka',
    region: 'Kansai (Pulau Honshu)',
    desc: 'Kota metropolis terbesar kedua di Jepang yang dijuluki "Dapur Negeri Jepang" dengan penduduk yang hangat, ceria, dan ramah.',
    highlights: 'Dotonbori Glico Man, Kastil Osaka (Osaka-jou), Universal Studios Japan.',
    food: 'Takoyaki, Okonomiyaki, Kushikatsu.',
    pinX: 375,
    pinY: 285
  },
  {
    id: 'sapporo',
    name: 'Sapporo',
    kanji: '札幌',
    kana: 'さっぽろ',
    romaji: 'Sapporo',
    region: 'Pulau Hokkaido (Utara)',
    desc: 'Kota utama di pulau paling utara Jepang, terkenal dengan keindahan alam musim dingin, salju lebat, dan festival patung es megah.',
    highlights: 'Festival Salju Sapporo (Yuki Matsuri), Taman Odori, Menara Jam Sapporo.',
    food: 'Sapporo Miso Ramen, Sup Kari (Soup Curry), Kepiting Salju Hokkaido.',
    pinX: 520,
    pinY: 85
  },
  {
    id: 'hiroshima',
    name: 'Hiroshima',
    kanji: '広島',
    kana: 'ひろしま',
    romaji: 'Hiroshima',
    region: 'Chugoku (Honshu Barat)',
    desc: 'Kota bersejarah yang kini berdiri megah sebagai simbol perdamaian dunia, toleransi, dan pesona Laut Pedalaman Seto.',
    highlights: 'Monumen Perdamaian Genbaku Dome, Taman Memorial Perdamaian, Kuil Terapung Miyajima.',
    food: 'Hiroshima-style Okonomiyaki (berlapis mie), Tiram Segar (Kaki), Momiji Manju.',
    pinX: 285,
    pinY: 285
  },
  {
    id: 'fukuoka',
    name: 'Fukuoka',
    kanji: '福岡',
    kana: 'ふくおか',
    romaji: 'Fukuoka',
    region: 'Pulau Kyushu (Selatan)',
    desc: 'Pintu gerbang internasional Jepang bagian selatan, kota pelabuhan modern yang hidup dan terkenal dengan kedai jalanan tepi sungai.',
    highlights: 'Kedai Tenda Tepi Sungai (Yatai Nakasu), Kanal Kota Hakata, Kuil Dazaifu Tenmangu.',
    food: 'Hakata Tonkotsu Ramen (Kuah Kaldu Gurih), Motsunabe, Mentai.',
    pinX: 210,
    pinY: 310
  }
];

// Helper Mengambil Kota Jepang Aktif (Mendukung Override Guru Master)
function getActiveJapanCities() {
  try {
    const saved = localStorage.getItem('sijapanese_japan_cities');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {}
  return DEFAULT_JAPAN_CITIES;
}

const LESSON_DETAIL_DATA = {
  1: {
    id: 1,
    num: 1,
    level: 'N5',
    title: 'Pelajaran 1: Fondasi Bahasa Jepang, 3 Aksara & Peta Kota Terkenal',
    subtitle: 'Mengenal 3 Sistem Tulisan (Hiragana, Katakana, Konsep Kanji), Eksplorasi Peta Kota Jepang, dan Salam Sehari-hari (Aisatsu)',
    estMinutes: 12,
    rewardPoints: 50,
    nextLessonId: 2,
    overview: [
      'Memahami fungsi 3 sistem aksara: Hiragana (asli), Katakana (serapan), dan konsep simbolik makna Kanji (ideogram).',
      'Menjelajahi peta kepulauan Jepang dan mengenal 6 kota terkenal: Tokyo, Kyoto, Osaka, Sapporo, Hiroshima, dan Fukuoka.',
      'Melafalkan 5 vokal murni bahasa Jepang (a - i - u - e - o) dengan jelas dan konsisten.',
      'Menguasai salam sapaan sesuai waktu (Aisatsu) serta kata ajaib "Sumimasen" dan "Arigatou".'
    ],
    sections: [
      {
        num: 1,
        title: 'Mengenal 3 Sistem Aksara Bahasa Jepang',
        desc: 'Bahasa Jepang menggunakan 3 macam aksara sekaligus dalam satu kalimat yang harmonis. Jangan khawatir, kamu tidak perlu menghafal rumus rumit sekaligus! Pahami peran masing-masing aksara berikut:',
        writingIntro: true,
        dialogues: [
          { jp: 'ひらがな (Hiragana)', romaji: 'Hiragana', meaning: 'Huruf asli Jepang melengkung halus untuk kosakata asli dan partikel tatabahasa. Contoh: ありがとう (terima kasih), ねこ (kucing).', audio: 'ひらがな' },
          { jp: 'カタカナ (Katakana)', romaji: 'Katakana', meaning: 'Huruf bersudut kaku untuk kata serapan asing dan nama luar negeri. Contoh: パン (roti), コーヒー (kopi), インドネシア (Indonesia).', audio: 'カタカナ' },
          { jp: '漢字 (Kanji Dasar)', romaji: 'Kanji', meaning: 'Simbol lambang makna / ideogram dari alam kuno. Tiap satu karakter melambangkan makna utuh, bukan sekadar bunyi abjad.', audio: 'かんじ' }
        ]
      },
      {
        num: 2,
        title: 'Konsep Kanji Dasar: Lukisan Makna dari Alam',
        desc: 'Di tingkat dasar ini, kamu tidak dituntut menghafal ratusan kanji rumit. Kenali bahwa kanji berasal dari gambar alam di sekitar kita:',
        formula: 'Kanji = Simbol Makna Bergambar (Ideogram)',
        formulaDesc: 'Cukup pahami bentuk asalnya: bulatan matahari menjadi 日, bulan sabit menjadi 月, pohon menjadi 木, tiga puncak gunung menjadi 山, dan aliran air menjadi 川.',
        kanjiSymbols: [
          { kanji: '日', romaji: 'hi / nichi', meaning: 'Matahari / Hari (simbol bulatan matahari dengan garis tengah).', audio: 'ひ' },
          { kanji: '月', romaji: 'tsuki / getsu', meaning: 'Bulan (simbol lengkungan bulan sabit di langit malam).', audio: 'つき' },
          { kanji: '木', romaji: 'ki / moku', meaning: 'Pohon (simbol dahan, batang pokok, dan akar yang menancap).', audio: 'き' },
          { kanji: '山', romaji: 'yama / san', meaning: 'Gunung (simbol tiga puncak gunung yang menjulang tinggi).', audio: 'やま' },
          { kanji: '川', romaji: 'kawa / sen', meaning: 'Sungai (simbol tiga garis aliran air yang mengalir tenang).', audio: 'かわ' },
          { kanji: '日本', romaji: 'Nihon', meaning: 'Jepang (gabungan 日 Matahari + 本 Asal Mula = Negeri Matahari Terbit).', audio: 'にほん' }
        ],
        dialogues: [
          { jp: '山 (やま / yama)', romaji: 'yama', meaning: 'Gunung. Contoh terkenal: 富士山 (Fuji-san / Gunung Fuji).', audio: 'やま' },
          { jp: '川 (かわ / kawa)', romaji: 'kawa', meaning: 'Sungai. Melambangkan air jernih yang mengalir.', audio: 'かわ' },
          { jp: '日本 (にほん / Nihon)', romaji: 'Nihon', meaning: 'Negara Jepang (Negeri Matahari Terbit).', audio: 'にほん' }
        ]
      },
      {
        num: 3,
        title: 'Peta Interaktif: Mengenal Kota-Kota Terkenal di Jepang',
        desc: 'Jepang adalah negara kepulauan yang membentang dari utara ke selatan dengan 4 pulau utama: Hokkaido, Honshu, Shikoku, dan Kyushu. Klik titik kota pada peta di bawah ini untuk mendengar pelafalannya dan membaca ciri khasnya:',
        japanMapModule: true
      },
      {
        num: 4,
        title: '5 Vokal Murni Bahasa Jepang',
        desc: 'Bahasa Jepang memiliki 5 bunyi vokal yang selalu dibaca jelas dan konsisten tanpa perubahan nada rumit:',
        dialogues: [
          { jp: 'あ (a)', romaji: 'a', meaning: 'Seperti huruf "a" pada kata "ayam". Mulut terbuka santai.', audio: 'あ' },
          { jp: 'い (i)', romaji: 'i', meaning: 'Seperti huruf "i" pada kata "ikan". Sudut bibir melebar.', audio: 'い' },
          { jp: 'う (u)', romaji: 'u', meaning: 'Seperti huruf "u" pada kata "udang". Bibir tidak moncong maju.', audio: 'う' },
          { jp: 'え (e)', romaji: 'e', meaning: 'Seperti huruf "e" pada kata "ember".', audio: 'え' },
          { jp: 'お (o)', romaji: 'o', meaning: 'Seperti huruf "o" pada kata "obat". Bentuk mulut bulat.', audio: 'お' }
        ]
      },
      {
        num: 5,
        title: 'Salam Sapaan Berdasarkan Waktu (Aisatsu)',
        desc: 'Menyapa orang lain adalah pilar kesopanan utama di Jepang. Gunakan sapaan tepat sesuai waktu:',
        dialogues: [
          { jp: 'おはよう ございます', romaji: 'Ohayou gozaimasu', meaning: 'Selamat pagi (bentuk sopan). Diucapkan sebelum pukul 10.00 pagi.', audio: 'おはようございます' },
          { jp: 'こんにちは', romaji: 'Konnichiwa', meaning: 'Halo / Selamat siang. Diucapkan dari jam 10.00 pagi hingga menjelang senja.', audio: 'こんにちは' },
          { jp: 'こんばんは', romaji: 'Konbanwa', meaning: 'Selamat malam. Diucapkan setelah matahari terbenam.', audio: 'こんばんは' },
          { jp: 'おやすみなさい', romaji: 'Oyasuminasai', meaning: 'Selamat beristirahat / Selamat tidur.', audio: 'おやすみなさい' }
        ]
      },
      {
        num: 6,
        title: 'Dua Kata Ajaib: Sumimasen & Arigatou',
        desc: 'Dua ungkapan paling sakti yang wajib dikuasai untuk berkomunikasi di Jepang:',
        formula: 'すみません (Sumimasen) = Permisi / Maaf / Tolong',
        formulaDesc: 'Bisa digunakan saat memanggil pelayan di restoran, tidak sengaja menyenggol orang di stasiun, atau meminta jalan di tempat ramai.',
        dialogues: [
          { jp: 'すみません！', romaji: 'Sumimasen!', meaning: 'Permisi! (Memanggil perhatian pelayan atau orang lain).', audio: 'すみません' },
          { jp: 'ありがとう ございます', romaji: 'Arigatou gozaimasu', meaning: 'Terima kasih banyak (bentuk sopan santun).', audio: 'ありがとうございます' },
          { jp: 'いいえ、どういたしまして', romaji: 'Iie, douitashimashite', meaning: 'Sama-sama / Tidak apa-apa.', audio: 'いいえどういたしまして' }
        ]
      }
    ],
    vocabList: [
      { jp: 'おはよう', romaji: 'ohayou', meaning: 'Selamat pagi (santai)', audio: 'おはよう' },
      { jp: 'こんにちは', romaji: 'konnichiwa', meaning: 'Halo / Selamat siang', audio: 'こんにちは' },
      { jp: 'こんばんは', romaji: 'konbanwa', meaning: 'Selamat malam', audio: 'こんばんは' },
      { jp: 'ありがとう', romaji: 'arigatou', meaning: 'Terima kasih', audio: 'ありがとう' },
      { jp: 'すみません', romaji: 'sumimasen', meaning: 'Permisi / Maaf', audio: 'すみません' },
      { jp: 'さようなら', romaji: 'sayounara', meaning: 'Selamat tinggal', audio: 'さようなら' },
      { jp: 'とうきょう', romaji: 'Tokyo', meaning: 'Ibu kota Tokyo (東京)', audio: 'とうきょう' },
      { jp: 'きょうと', romaji: 'Kyoto', meaning: 'Kota budaya Kyoto (京都)', audio: 'きょうと' },
      { jp: 'おおさか', romaji: 'Osaka', meaning: 'Kota kuliner Osaka (大阪)', audio: 'おおさか' },
      { jp: 'さっぽろ', romaji: 'Sapporo', meaning: 'Kota salju Sapporo (札幌)', audio: 'さっぽろ' },
      { jp: 'ひろしま', romaji: 'Hiroshima', meaning: 'Kota perdamaian Hiroshima (広島)', audio: 'ひろしま' },
      { jp: 'ふくおか', romaji: 'Fukuoka', meaning: 'Kota gerbang selatan Fukuoka (福岡)', audio: 'ふくおか' },
      { jp: 'やま', romaji: 'yama', meaning: 'Gunung (kanji: 山)', audio: 'やま' },
      { jp: 'かわ', romaji: 'kawa', meaning: 'Sungai (kanji: 川)', audio: 'かわ' },
      { jp: 'にほん', romaji: 'Nihon', meaning: 'Negara Jepang (kanji: 日本)', audio: 'にほん' }
    ],
    cultureTip: 'Saat mengucapkan salam, membungkukkan badan sedikit (sekitar 15 derajat yang disebut Ojigi) adalah etika kesopanan yang sangat dijunjung tinggi oleh masyarakat Jepang.',
    quiz: [
      {
        q: 'Bahasa Jepang memiliki 3 jenis aksara. Aksara yang digunakan khusus untuk menulis kata serapan dari bahasa asing (seperti roti, kopi, hotel) adalah...',
        options: [
          'Hiragana (ひらがな)',
          'Katakana (カタカナ)',
          'Kanji (漢字)',
          'Romaji (Alfabet Latin)'
        ],
        correctIndex: 1,
        explanation: 'Katakana diciptakan khusus untuk menulis kata serapan luar negeri, nama negara asing, dan nama orang non-Jepang.'
      },
      {
        q: 'Huruf kanji dasar "山" diambil dari lukisan alam apa dan bagaimana membacanya?',
        options: [
          'Melambangkan sungai, dibaca Kawa',
          'Melambangkan matahari, dibaca Hi',
          'Melambangkan tiga puncak gunung, dibaca Yama',
          'Melambangkan pohon, dibaca Ki'
        ],
        correctIndex: 2,
        explanation: 'Kanji 山 (yama) merupakan piktogram dari bentuk tiga puncak gunung yang menjulang tinggi.'
      },
      {
        q: 'Kota di Jepang yang terkenal dengan julukan "Dapur Negeri Jepang", keramahan warganya, dan kuliner Takoyaki adalah...',
        options: [
          'Tokyo (とうきょう)',
          'Osaka (おおさか)',
          'Sapporo (さっぽろ)',
          'Hiroshima (ひろしま)'
        ],
        correctIndex: 1,
        explanation: 'Osaka terkenal sebagai kota kuliner terbesar (Tenka no Daidokoro) dan asal muasal Takoyaki.'
      },
      {
        q: 'Sapaan apa yang tepat diucapkan saat kamu bertemu guru atau rekan pada pukul 08.00 pagi?',
        options: [
          'Ohayou gozaimasu (おはよう ございます)',
          'Konnichiwa (こんにちは)',
          'Konbanwa (こんばんは)',
          'Oyasuminasai (おやすみなさい)'
        ],
        correctIndex: 0,
        explanation: 'Ohayou gozaimasu digunakan untuk menyapa di pagi hari sebelum pukul 10.00.'
      },
      {
        q: 'Ketika kamu ingin memanggil pelayan di restoran atau minta izin lewat di jalan ramai, kata apa yang paling tepat digunakan?',
        options: [
          'Sayounara (さようなら)',
          'Sumimasen (すみません)',
          'Itadakimasu (いただきます)',
          'Iie (いいえ)'
        ],
        correctIndex: 1,
        explanation: 'Sumimasen adalah kata sopan santun serbaguna untuk memanggil perhatian sekaligus meminta maaf.'
      },
      {
        q: 'Ibu kota metropolitan modern Jepang yang menjadi pusat pemerintahan, teknologi, dan Menara Tokyo adalah...',
        options: [
          'Kyoto (きょうと)',
          'Tokyo (とうきょう)',
          'Fukuoka (ふくおか)',
          'Sapporo (さっぽろ)'
        ],
        correctIndex: 1,
        explanation: 'Tokyo (東京) adalah ibu kota resmi negara Jepang.'
      }
    ]
  },

  2: {
    id: 2,
    num: 2,
    level: 'N5',
    title: 'Pelajaran 2: Mengenal Huruf Hiragana (ひらがな)',
    subtitle: 'Huruf Dasar, Huruf Tenten, Huruf Maru, dan Huruf Gabungan',
    estMinutes: 12,
    rewardPoints: 50,
    nextLessonId: 3,
    overview: [
      'Memahami fungsi aksara Hiragana untuk kata asli dan tata bahasa Jepang.',
      'Mengenal 46 huruf dasar baris A-Ka-Sa-Ta-Na-Ha-Ma-Ya-Ra-Wa.',
      'Mengetahui perubahan bunyi menggunakan tanda titik dua (tenten) dan lingkaran kecil (maru).'
    ],
    sections: [
      {
        num: 1,
        title: 'Apa Itu Hiragana?',
        desc: 'Hiragana adalah huruf asli Jepang yang berbentuk melengkung halus dan lentur. Hiragana digunakan untuk menulis kosakata asli bahasa Jepang serta partikel penyambung kalimat. Total ada 46 huruf dasar.',
        dialogues: [
          { jp: 'あ・い・う・え・お', romaji: 'a - i - u - e - o', meaning: 'Baris vokal dasar.', audio: 'あいうえお' },
          { jp: 'か・き・く・け・こ', romaji: 'ka - ki - ku - ke - ko', meaning: 'Baris konsonan K.', audio: 'かきくけこ' },
          { jp: 'さ・し・す・せ・そ', romaji: 'sa - shi - su - se - so', meaning: 'Baris konsonan S (ingat: shi bukan si).', audio: 'さしすせそ' },
          { jp: 'た・ち・つ・て・と', romaji: 'ta - chi - tsu - te - to', meaning: 'Baris konsonan T (ingat: chi dan tsu).', audio: 'たちつてと' }
        ]
      },
      {
        num: 2,
        title: 'Perubahan Bunyi: Huruf Tenten & Maru',
        desc: 'Beberapa huruf Hiragana bisa diubah bunyinya dengan menambahkan tanda kecil di kanan atas huruf:',
        formula: 'Tenten (゛) = Bunyi Tebal | Maru (゜) = Bunyi P',
        formulaDesc: 'Tenten mengubah K menjadi G, S menjadi Z, T menjadi D, dan H menjadi B. Maru hanya dipasang pada baris H untuk mengubahnya menjadi P.',
        dialogues: [
          { jp: 'か (ka) -> が (ga)', romaji: 'ka -> ga', meaning: 'Contoh tenten: かぎ (kagi - kunci).', audio: 'かぎ' },
          { jp: 'さ (sa) -> ざ (za)', romaji: 'sa -> za', meaning: 'Contoh tenten: ざっし (zasshi - majalah).', audio: 'ざっし' },
          { jp: 'は (ha) -> ば (ba)', romaji: 'ha -> ba', meaning: 'Contoh tenten: かばん (kaban - tas).', audio: 'かばん' },
          { jp: 'は (ha) -> ぱ (pa)', romaji: 'ha -> pa', meaning: 'Contoh maru: きっぷ (kippu - tiket).', audio: 'きっぷ' }
        ]
      },
      {
        num: 3,
        title: 'Huruf Gabungan (Ya, Yu, Yo Kecil)',
        desc: 'Huruf vokal "i" (seperti ki, shi, chi, ni, hi, mi, ri) bisa digabungkan dengan huruf ya, yu, yo berukuran kecil untuk menghasilkan satu ketukan bunyi baru:',
        dialogues: [
          { jp: 'き (ki) + ゃ (ya kecil) = きゃ (kya)', romaji: 'kya', meaning: 'Contoh: きゃく (kyaku - tamu/pelanggan).', audio: 'きゃく' },
          { jp: 'し (shi) + ゅ (yu kecil) = しゅ (shu)', romaji: 'shu', meaning: 'Contoh: しゅくだい (shukudai - pekerjaan rumah).', audio: 'しゅくだい' },
          { jp: 'ち (chi) + ょ (yo kecil) = ちょ (cho)', romaji: 'cho', meaning: 'Contoh: ちょっと (chotto - sebentar).', audio: 'ちょっと' }
        ]
      }
    ],
    vocabList: [
      { jp: 'あさ', romaji: 'asa', meaning: 'Pagi hari', audio: 'あさ' },
      { jp: 'ねこ', romaji: 'neko', meaning: 'Kucing', audio: 'ねこ' },
      { jp: 'いぬ', romaji: 'inu', meaning: 'Anjing', audio: 'いぬ' },
      { jp: 'さくら', romaji: 'sakura', meaning: 'Bunga sakura', audio: 'さくら' },
      { jp: 'みず', romaji: 'mizu', meaning: 'Air minum', audio: 'みず' },
      { jp: 'かぎ', romaji: 'kagi', meaning: 'Kunci', audio: 'かぎ' },
      { jp: 'やま', romaji: 'yama', meaning: 'Gunung', audio: 'やま' },
      { jp: 'すし', romaji: 'sushi', meaning: 'Makanan sushi', audio: 'すし' }
    ],
    cultureTip: 'Orang Jepang menulis Hiragana dengan urutan coretan (stroke order) tertentu dari atas ke bawah dan dari kiri ke kanan agar bentuk hurufnya rapi dan seimbang.',
    quiz: [
      {
        q: 'Manakah di bawah ini kata yang berarti "Kucing" dalam Hiragana?',
        options: [
          'ねこ (neko)',
          'いぬ (inu)',
          'さくら (sakura)',
          'あさ (asa)'
        ],
        correctIndex: 0,
        explanation: 'ねこ (neko) berarti kucing. Sedangkan いぬ (inu) adalah anjing.'
      },
      {
        q: 'Tanda dua garis kecil (゛) pada huruf Hiragana dinamakan tanda apa dan apa fungsinya?',
        options: [
          'Tanda Maru, mengubah huruf jadi bunyi P',
          'Tanda Tenten, mengubah bunyi konsonan jadi lebih tebal (seperti K jadi G)',
          'Tanda Panjang, memperpanjang vokal',
          'Tanda Tanya, membuat kalimat tanya'
        ],
        correctIndex: 1,
        explanation: 'Tanda tenten (゛) mengubah bunyi konsonan menjadi tebal, contohnya か (ka) menjadi が (ga).'
      },
      {
        q: 'Bagaimana cara membaca kata "みず" yang berarti air?',
        options: [
          'Misu',
          'Mizu',
          'Niku',
          'Kawa'
        ],
        correctIndex: 1,
        explanation: 'Huruf す diberi tenten menjadi ず (zu), sehingga dibaca "Mizu".'
      },
      {
        q: 'Berapa jumlah total huruf dasar dalam aksara Hiragana?',
        options: [
          '26 huruf',
          '46 huruf',
          '100 huruf',
          '104 huruf'
        ],
        correctIndex: 1,
        explanation: 'Huruf dasar Hiragana berjumlah 46 huruf dari vokal A sampai N.'
      }
    ]
  },

  3: {
    id: 3,
    num: 3,
    level: 'N5',
    title: 'Pelajaran 3: Mengenal Huruf Katakana (カタカナ)',
    subtitle: 'Aksara Kata Serapan Asing, Nama Orang/Negara, dan Tanda Panjang (ー)',
    estMinutes: 12,
    rewardPoints: 50,
    nextLessonId: 4,
    overview: [
      'Memahami fungsi Katakana khusus untuk kata serapan asing dari luar Jepang.',
      'Mengenal bentuk huruf bersudut tegas dan lurus.',
      'Memahami tanda garis panjang (ー) untuk memperpanjang vokal dua ketukan.'
    ],
    sections: [
      {
        num: 1,
        title: 'Fungsi Utama Katakana',
        desc: 'Katakana memiliki jumlah bunyi yang sama persis dengan Hiragana (46 huruf dasar), namun bentuknya bersudut kaku dan lurus. Katakana dipakai khusus untuk: kata serapan bahasa asing, nama orang non-Jepang, nama negara asing, dan menu kuliner modern.',
        dialogues: [
          { jp: 'パン', romaji: 'pan', meaning: 'Roti (serapan bahasa Portugis pão).', audio: 'パン' },
          { jp: 'バス', romaji: 'basu', meaning: 'Bus (serapan bahasa Inggris bus).', audio: 'バス' },
          { jp: 'ホテル', romaji: 'hoteru', meaning: 'Hotel (serapan bahasa Inggris hotel).', audio: 'ホテル' },
          { jp: 'インドネシア', romaji: 'Indoneshia', meaning: 'Indonesia (nama negara).', audio: 'インドネシア' }
        ]
      },
      {
        num: 2,
        title: 'Tanda Vokal Panjang (ー)',
        desc: 'Dalam Katakana, jika ada vokal yang dibaca panjang dua ketukan, digunakan tanda garis strip datar (ー):',
        formula: 'Tanda (ー) = Bunyi vokal dibaca 2 ketukan',
        formulaDesc: 'Jangan dibaca pendek! Contoh: コーヒー dibaca Kōhī (panjang), bukan Kohi.',
        dialogues: [
          { jp: 'コーヒー', romaji: 'kōhī', meaning: 'Kopi (coffee). Dilafalkan panjang.', audio: 'コーヒー' },
          { jp: 'ラーメン', romaji: 'rāmen', meaning: 'Mie ramen. Huruf "ra" dibaca panjang.', audio: 'ラーメン' },
          { jp: 'タクシー', romaji: 'takushī', meaning: 'Taksi (taxi). Huruf "shi" dibaca panjang.', audio: 'タクシー' }
        ]
      }
    ],
    vocabList: [
      { jp: 'ラーメン', romaji: 'rāmen', meaning: 'Mie ramen', audio: 'ラーメン' },
      { jp: 'コーヒー', romaji: 'kōhī', meaning: 'Kopi', audio: 'コーヒー' },
      { jp: 'ホテル', romaji: 'hoteru', meaning: 'Hotel', audio: 'ホテル' },
      { jp: 'トイレ', romaji: 'toire', meaning: 'Toilet / Kamar kecil', audio: 'トイレ' },
      { jp: 'パン', romaji: 'pan', meaning: 'Roti', audio: 'パン' },
      { jp: 'バス', romaji: 'basu', meaning: 'Bus', audio: 'バス' },
      { jp: 'テレビ', romaji: 'terebi', meaning: 'Televisi', audio: 'テレビ' },
      { jp: 'インドネシア', romaji: 'Indoneshia', meaning: 'Negara Indonesia', audio: 'インドネシア' }
    ],
    cultureTip: 'Nama orang Indonesia seperti "Budi" atau "Siti" wajib ditulis menggunakan Katakana: ブディ (Budi) dan シティ (Shiti).',
    quiz: [
      {
        q: 'Kapan huruf Katakana digunakan dalam bahasa Jepang?',
        options: [
          'Hanya untuk menulis partikel tata bahasa',
          'Khusus untuk kata serapan asing, nama negara, dan nama orang luar negeri',
          'Hanya digunakan pada zaman kuno',
          'Hanya digunakan untuk buku cerita anak-anak'
        ],
        correctIndex: 1,
        explanation: 'Katakana digunakan khusus untuk menyerap kosakata luar negeri dan menulis nama orang/tempat asing.'
      },
      {
        q: 'Tanda strip datar (ー) pada kata "コーヒー" berfungsi untuk...',
        options: [
          'Membuat kalimat tanya',
          'Memperpanjang bunyi vokal dua ketukan',
          'Tanda jeda berhenti',
          'Menghapus huruf sebelumnya'
        ],
        correctIndex: 1,
        explanation: 'Tanda ー (chōon) berfungsi memperpanjang bunyi vokal dalam huruf Katakana.'
      },
      {
        q: 'Bagaimana kata "Toilet" ditulis dalam Katakana?',
        options: [
          'トイレ (toire)',
          'ホテル (hoteru)',
          'テレビ (terebi)',
          'タクシー (takushī)'
        ],
        correctIndex: 0,
        explanation: 'Toilet diserap menjadi トイレ (toire).'
      },
      {
        q: 'Manakah penulisan kata "Ramen" yang tepat?',
        options: [
          'らーめん (Hiragana)',
          'ラーメン (Katakana)',
          'ラメン (tanpa tanda panjang)',
          'ローメン'
        ],
        correctIndex: 1,
        explanation: 'Ramen adalah kata serapan dan ditulis dengan Katakana: ラーメン.'
      }
    ]
  },

  4: {
    id: 4,
    num: 4,
    level: 'N5',
    title: 'Pelajaran 4: Dakuon, Handakuon, Yōon, Chōon, Sokuon',
    subtitle: 'Setelah gojūon, inilah 5 perubahan kecil yang paling sering bikin bingung',
    estMinutes: 15,
    rewardPoints: 50,
    nextLessonId: 5,
    overview: [
      'Memahami Dakuon (tanda tenten ゛) untuk menebalkan konsonan K, S, T, dan H menjadi G, Z, D, dan B.',
      'Memahami Handakuon (tanda maru ゜) khusus pada deret H untuk menghasilkan bunyi konsonan P.',
      'Mengenal Yōon (gabungan ya, yu, yo kecil), Chōon (vokal panjang), dan Sokuon (tsu kecil っ penahan konsonan ganda).'
    ],
    sections: [
      {
        num: 1,
        title: 'Perubahan Bunyi: Tanda Tenten (゛) & Maru (゜)',
        desc: 'Dengan menambahkan tanda kecil di kanan atas huruf Hiragana atau Katakana, bunyinya berubah menjadi lebih tebal atau bervariasi:',
        formula: 'Tenten (゛) = G, Z, D, B | Maru (゜) = P',
        formulaDesc: 'K -> G (か->が), S -> Z (さ->ざ), T -> D (た->だ), H -> B (は->ば), dan H + Maru -> P (は->ぱ).',
        dialogues: [
          { jp: 'かぎ (kagi)', romaji: 'kagi', meaning: 'Kunci. Perubahan tenten dari か (ka) menjadi が (ga).', audio: 'かぎ' },
          { jp: 'ざっし (zasshi)', romaji: 'zasshi', meaning: 'Majalah. Perubahan tenten dari さ (sa) menjadi ざ (za).', audio: 'ざっし' },
          { jp: 'でんしゃ (densha)', romaji: 'densha', meaning: 'Kereta listrik. Perubahan tenten dari て (te) menjadi で (de).', audio: 'でんしゃ' },
          { jp: 'きっぷ (kippu)', romaji: 'kippu', meaning: 'Tiket perjalanan. Perubahan maru dari ふ (fu) menjadi ぷ (pu).', audio: 'きっぷ' }
        ]
      },
      {
        num: 2,
        title: 'Yōon (Huruf Gabungan) & Sokuon (Tsu Kecil っ)',
        desc: 'Huruf bervokal "i" dapat ditempeli huruf ya, yu, yo kecil untuk menghasilkan satu ketukan bunyi. Sementara itu, huruf tsu kecil (っ) berfungsi menahan satu ketukan jeda untuk konsonan ganda:',
        formula: 'Yōon = Ki/Shi/Chi + ゃ/ゅ/ょ | Sokuon (っ) = Konsonan Dobel (k/s/t/p)',
        formulaDesc: 'Contoh: き + ゃ = きゃ (kya). Kata きって (kitte) dibaca dengan jeda mantap pada tsu kecil.',
        dialogues: [
          { jp: 'おちゃ (ocha)', romaji: 'ocha', meaning: 'Teh hijau Jepang. Gabungan ち (chi) + ゃ (ya kecil) = ちゃ (cha).', audio: 'おちゃ' },
          { jp: 'しゅくだい (shukudai)', romaji: 'shukudai', meaning: 'Pekerjaan rumah (PR). Gabungan し (shi) + ゅ (yu kecil) = しゅ (shu).', audio: 'しゅくだい' },
          { jp: 'きって (kitte)', romaji: 'kitte', meaning: 'Perangko. Huruf っ menahan bunyi huruf "t" satu ketukan.', audio: 'きって' },
          { jp: 'ちょっと (chotto)', romaji: 'chotto', meaning: 'Sebentar / sedikit. Memiliki yōon ちょ (cho) dan sokuon っと (tto).', audio: 'ちょっと' }
        ]
      },
      {
        num: 3,
        title: 'Chōon: Vokal Panjang yang Mengubah Makna',
        desc: 'Di bahasa Jepang, membaca huruf pendek atau panjang dapat mengubah arti kata sepenuhnya. Hati-hati jangan sampai tertukar:',
        dialogues: [
          { jp: 'おばさん (obasan) vs おばあさん (obaasan)', romaji: 'obasan vs obaasan', meaning: 'Obasan = Tante/Bibi. Obaasan (panjang) = Nenek.', audio: 'おばあさん' },
          { jp: 'おじさん (ojisan) vs おじいさん (ojiisan)', romaji: 'ojisan vs ojiisan', meaning: 'Ojisan = Paman. Ojiisan (panjang) = Kakek.', audio: 'おじいさん' },
          { jp: 'びよういん (biyouin) vs びょういん (byouin)', romaji: 'biyouin vs byouin', meaning: 'Biyouin = Salon kecantikan. Byouin (gabungan) = Rumah sakit.', audio: 'びょういん' }
        ]
      }
    ],
    vocabList: [
      { jp: 'かぎ', romaji: 'kagi', meaning: 'Kunci', audio: 'かぎ' },
      { jp: 'ざっし', romaji: 'zasshi', meaning: 'Majalah', audio: 'ざっし' },
      { jp: 'きっぷ', romaji: 'kippu', meaning: 'Tiket', audio: 'きっぷ' },
      { jp: 'きって', romaji: 'kitte', meaning: 'Perangko', audio: 'きって' },
      { jp: 'おちゃ', romaji: 'ocha', meaning: 'Teh hijau', audio: 'おちゃ' },
      { jp: 'ちょっと', romaji: 'chotto', meaning: 'Sebentar / Sedikit', audio: 'ちょっと' },
      { jp: 'でんしゃ', romaji: 'densha', meaning: 'Kereta listrik', audio: 'densha' },
      { jp: 'ひこうき', romaji: 'hikouki', meaning: 'Pesawat terbang', audio: 'ひこうき' }
    ],
    cultureTip: 'Saat melafalkan kata dengan tsu kecil (っ) seperti "chotto" atau "kippu", tahan nafas sejenak seolah ada jeda satu ketukan drum sebelum konsonan berikutnya.',
    quiz: [
      {
        q: 'Tanda lingkaran kecil (゜) pada huruf Hiragana dinamakan tanda apa dan apa perubahannya?',
        options: [
          'Tanda Tenten, mengubah huruf menjadi bunyi G',
          'Tanda Maru (Handakuon), mengubah baris H menjadi bunyi P',
          'Tanda Sokuon, membuat huruf dibaca panjang',
          'Tanda Tanya'
        ],
        correctIndex: 1,
        explanation: 'Tanda lingkaran kecil disebut Maru (Handakuon), khusus dipasang pada deret H (ha, hi, fu, he, ho) untuk mengubahnya menjadi pa, pi, pu, pe, po.'
      },
      {
        q: 'Manakah penulisan kata "Karcis / Tiket" yang benar menggunakan tanda maru?',
        options: [
          'きっぷ (kippu)',
          'きぶ (kibu)',
          'ぎっぷ (gippu)',
          'きつぷ (kitsu pu besar)'
        ],
        correctIndex: 0,
        explanation: 'Tiket ditulis きっぷ (kippu) dengan tsu kecil dan pu ber-maru.'
      },
      {
        q: 'Apa fungsi dari huruf "っ" (tsu berukuran kecil) di tengah kata?',
        options: [
          'Membuat kalimat menjadi negatif',
          'Sebagai penahan satu ketukan jeda untuk konsonan ganda (sokuon)',
          'Mengubah huruf menjadi vokal panjang',
          'Sebagai penutup kalimat'
        ],
        correctIndex: 1,
        explanation: 'Tsu kecil (sokuon) berfungsi menahan jeda satu ketukan untuk konsonan dobel berikutnya (seperti k, s, t, p).'
      },
      {
        q: 'Manakah pasangan kata yang membedakan arti antara "Bibi/Tante" dengan "Nenek"?',
        options: [
          'Obasan (pendek) vs Obaasan (panjang)',
          'Ojisan vs Ojiisan',
          'Kitte vs Kippu',
          'Neko vs Inu'
        ],
        correctIndex: 0,
        explanation: 'Obasan berarti bibi atau tante, sedangkan Obaasan (vokal panjang) berarti nenek.'
      }
    ]
  },

  5: {
    id: 5,
    num: 5,
    level: 'N5',
    title: 'Pelajaran 5: Salam dan Kalimat Wajib untuk Jalan-Jalan',
    subtitle: 'Hafalkan satu kalimat utuh, langsung terpakai di Jepang',
    estMinutes: 18,
    rewardPoints: 50,
    nextLessonId: 6,
    overview: [
      'Menguasai salam sapaan harian (Aisatsu) sesuai konteks waktu di Jepang.',
      'Menghafal 3 ungkapan sakti penyelamat traveler: Sumimasen, Onegaishimasu, dan Arigatou gozaimasu.',
      'Memahami etika memanggil petugas stasiun, kasir konbini, dan pelayan restoran.'
    ],
    sections: [
      {
        num: 1,
        title: 'Salam Sapaan Waktu & Kesopanan (Aisatsu)',
        desc: 'Masyarakat Jepang sangat mengapresiasi orang yang mengucapkan salam dengan ramah dan jelas sesuai waktu:',
        dialogues: [
          { jp: 'おはよう ございます', romaji: 'Ohayou gozaimasu', meaning: 'Selamat pagi (sopan). Diucapkan sebelum jam 10 pagi.', audio: 'おはようございます' },
          { jp: 'こんにちは', romaji: 'Konnichiwa', meaning: 'Selamat siang / Halo. Diucapkan siang hingga sore.', audio: 'こんにちは' },
          { jp: 'こんばんは', romaji: 'Konbanwa', meaning: 'Selamat malam. Diucapkan setelah hari mulai gelap.', audio: 'こんばんは' },
          { jp: 'さようなら', romaji: 'Sayounara', meaning: 'Selamat tinggal (berpisah untuk waktu lama).', audio: 'さようなら' }
        ]
      },
      {
        num: 2,
        title: '3 Kalimat Sakti Penyelamat Jalan-Jalan',
        desc: 'Cukup kuasai 3 kalimat utuh berikut, kamu sudah bisa bepergian dengan aman dan nyaman di seluruh Jepang:',
        formula: 'すみません • おねがいします • ありがとうございます',
        formulaDesc: 'Sumimasen (Permisi/Maaf), Onegaishimasu (Tolong/Minta tolong), Arigatou gozaimasu (Terima kasih banyak).',
        dialogues: [
          { jp: 'すみません！', romaji: 'Sumimasen!', meaning: 'Permisi! (Memanggil pelayan di kedai atau meminta jalan di stasiun).', audio: 'すみません' },
          { jp: 'これ を おねがいします。', romaji: 'Kore o onegai shimasu.', meaning: 'Tolong yang ini ya (saat memesan barang atau tiket).', audio: 'これをおねがいします' },
          { jp: 'ありがとう ございます！', romaji: 'Arigatou gozaimasu!', meaning: 'Terima kasih banyak atas bantuannya!', audio: 'ありがとうございます' },
          { jp: 'いいえ、どういたしまして。', romaji: 'Iie, douitashimashite.', meaning: 'Sama-sama / Tidak apa-apa.', audio: 'いいえどういたしまして' }
        ]
      }
    ],
    vocabList: [
      { jp: 'おはようございます', romaji: 'ohayou gozaimasu', meaning: 'Selamat pagi', audio: 'おはようございます' },
      { jp: 'こんにちは', romaji: 'konnichiwa', meaning: 'Halo / Selamat siang', audio: 'こんにちは' },
      { jp: 'こんばんは', romaji: 'konbanwa', meaning: 'Selamat malam', audio: 'こんばんは' },
      { jp: 'すみません', romaji: 'sumimasen', meaning: 'Permisi / Maaf', audio: 'すみません' },
      { jp: 'おねがいします', romaji: 'onegaishimasu', meaning: 'Tolong bantuannya', audio: 'おねがいします' },
      { jp: 'ありがとうございます', romaji: 'arigatou gozaimasu', meaning: 'Terima kasih banyak', audio: 'ありがとうございます' },
      { jp: 'はい', romaji: 'hai', meaning: 'Ya / Benar', audio: 'はい' },
      { jp: 'いいえ', romaji: 'iie', meaning: 'Tidak / Bukan', audio: 'いいえ' }
    ],
    cultureTip: 'Ketika pelayan di restoran Jepang menyajikan pesananmu, cukup balas dengan anggukan kepala ringan dan ucapkan "Arigatou gozaimasu".',
    quiz: [
      {
        q: 'Ungkapan apa yang paling tepat saat kamu ingin meminta pelayan restoran mencatatkan pesananmu?',
        options: [
          'Sayounara',
          'Kore o onegai shimasu (これをおねがいします)',
          'Oyasuminasai',
          'Doko desu ka'
        ],
        correctIndex: 1,
        explanation: '"Onegai shimasu" berarti tolong/mohon bantuan, sangat tepat dipakai saat memesan barang atau jasa.'
      },
      {
        q: 'Jika tidak sengaja menyenggol tas orang lain di dalam kereta yang padat, kamu segera mengucapkan...',
        options: [
          'Sumimasen! (すみません)',
          'Konnichiwa!',
          'Itadakimasu!',
          'Ja arimasen!'
        ],
        correctIndex: 0,
        explanation: 'Sumimasen adalah kata maaf sekaligus permisi yang paling universal digunakan di ruang publik Jepang.'
      },
      {
        q: 'Kapan waktu yang tepat untuk mengucapkan "Konnichiwa"?',
        options: [
          'Tengah malam buta',
          'Subuh sebelum matahari terbit',
          'Siang hari mulai pukul 10.00 hingga menjelang petang',
          'Saat hendak tidur'
        ],
        correctIndex: 2,
        explanation: 'Konnichiwa adalah sapaan umum pada siang hari hingga sebelum hari gelap.'
      },
      {
        q: 'Bagaimana cara membalas ucapan terima kasih "Arigatou gozaimasu" secara sopan?',
        options: [
          'Hai, sou desu',
          'Iie, douitashimashite (いいえ、どういたしまして)',
          'Sayounara',
          'Mata ashita'
        ],
        correctIndex: 1,
        explanation: '"Iie, douitashimashite" artinya sama-sama / tidak perlu dipikirkan.'
      }
    ]
  },

  6: {
    id: 6,
    num: 6,
    level: 'N5',
    title: 'Pelajaran 6: わたしは リンです',
    subtitle: 'Kalimat Jepang Pertamamu: AはBです',
    estMinutes: 25,
    rewardPoints: 50,
    nextLessonId: 7,
    overview: [
      'Menguasai struktur kalimat paling fundamental dalam tata bahasa Jepang: [Topik] は [Penjelas] です.',
      'Memahami aturan mutlak bahwa huruf は dibaca "WA" saat menjadi partikel.',
      'Membuat bentuk penyangkalan negatif (ja arimasen) dan kalimat tanya (desu ka).'
    ],
    sections: [
      {
        num: 1,
        title: 'Pola Kalimat Dasar: A は B です',
        desc: 'Kalimat bahasa Jepang meletakkan topik di awal diikuti partikel は (wa), dan ditutup dengan kata penutup sopan です (desu):',
        formula: '[Subjek / Topik] は [Predikat] です',
        formulaDesc: 'Artinya: "A adalah B". Huruf は di sini bertindak sebagai partikel penanda topik dan WAJIB dibaca "WA".',
        dialogues: [
          { jp: 'わたし は リン です。', romaji: 'Watashi wa Rin desu.', meaning: 'Saya adalah Rin.', audio: 'わたしはリンです' },
          { jp: 'わたし は がくせい です。', romaji: 'Watashi wa gakusei desu.', meaning: 'Saya adalah seorang murid / pelajar.', audio: 'わたしはがくせいです' },
          { jp: 'たなかさん は せんせい です。', romaji: 'Tanaka-san wa sensei desu.', meaning: 'Tuan Tanaka adalah seorang guru.', audio: 'たなかさんはせんせいです' },
          { jp: 'わたし は インドネシアじん です。', romaji: 'Watashi wa Indoneshia-jin desu.', meaning: 'Saya adalah orang Indonesia (-jin menandakan kewarganegaraan).', audio: 'わたしはインドネシアじんです' }
        ]
      },
      {
        num: 2,
        title: 'Bentuk Negatif & Kalimat Tanya',
        desc: 'Untuk mengatakan "bukan", ganti desu dengan ja arimasen. Untuk bertanya, tambahkan partikel "ka" di akhir kalimat:',
        formula: '[Negatif] じゃ ありません | [Tanya] ですか？',
        formulaDesc: 'Contoh: Gakusei ja arimasen (bukan murid). Gakusei desu ka? (Apakah seorang murid?).',
        dialogues: [
          { jp: 'わたし は せんせい じゃ ありません。', romaji: 'Watashi wa sensei ja arimasen.', meaning: 'Saya bukan seorang guru.', audio: 'わたしはせんせいじゃありません' },
          { jp: 'あなた は がくせい ですか？', romaji: 'Anata wa gakusei desu ka?', meaning: 'Apakah Anda seorang pelajar?', audio: 'あなたはがくせいですか' },
          { jp: 'はい、がくせい です。', romaji: 'Hai, gakusei desu.', meaning: 'Ya, benar seorang pelajar.', audio: 'はいがくせいです' }
        ]
      }
    ],
    vocabList: [
      { jp: 'わたし', romaji: 'watashi', meaning: 'Saya / Aku', audio: 'わたし' },
      { jp: 'あなた', romaji: 'anata', meaning: 'Anda / Kamu', audio: 'あなた' },
      { jp: 'せんせい', romaji: 'sensei', meaning: 'Guru / Dosen', audio: 'せんせい' },
      { jp: 'がくせい', romaji: 'gakusei', meaning: 'Murid / Pelajar', audio: 'gakusei' },
      { jp: 'にほんじん', romaji: 'nihonjin', meaning: 'Orang Jepang', audio: 'にほんじん' },
      { jp: 'なまえ', romaji: 'namae', meaning: 'Nama', audio: 'なまえ' },
      { jp: 'です', romaji: 'desu', meaning: 'Adalah (sopan)', audio: 'です' },
      { jp: 'じゃありません', romaji: 'ja arimasen', meaning: 'Bukan (negatif sopan)', audio: 'じゃありません' }
    ],
    cultureTip: 'Orang Jepang jarang sekali menyebut kata "Anata" saat berbicara langsung. Lebih sopan memanggil langsung nama lawan bicara ditambah akhiran "-san", contohnya "Tanaka-san".',
    quiz: [
      {
        q: 'Bagaimana cara membaca huruf "は" dalam kalimat "わたし は リン です"?',
        options: [
          'Dibaca "ha"',
          'Dibaca "wa"',
          'Dibaca "ba"',
          'Tidak dibaca'
        ],
        correctIndex: 1,
        explanation: 'Ketika huruf は berfungsi sebagai partikel penanda topik, bunyinya wajib dibaca "WA".'
      },
      {
        q: 'Manakah susunan kalimat yang benar untuk menyatakan "Saya adalah murid"?',
        options: [
          'わたし は がくせい です (Watashi wa gakusei desu)',
          'がくせい は わたし です',
          'わたし がくせい です は',
          'わたし は せんせい です'
        ],
        correctIndex: 0,
        explanation: 'Pola yang benar adalah [Subjek] は [Predikat] です: Watashi wa gakusei desu.'
      },
      {
        q: 'Bagaimana cara mengubah kalimat pernyataan menjadi kalimat tanya dalam bahasa Jepang?',
        options: [
          'Menambahkan kata "ka" di akhir kalimat pernyataan',
          'Menukar posisi subjek dan predikat',
          'Menambahkan tanda seru di depan',
          'Mengganti kata desu menjadi arimasen'
        ],
        correctIndex: 0,
        explanation: 'Cukup tambahkan partikel "ka" di akhir kalimat, contohnya: "Anata wa gakusei desu ka?".'
      },
      {
        q: 'Apa bentuk negatif santun dari kalimat "Watashi wa nihonjin desu"?',
        options: [
          'Watashi wa nihonjin desu ka',
          'Watashi wa nihonjin ja arimasen (わたしは にほんじん じゃありません)',
          'Watashi wa nihonjin kudasai',
          'Watashi wa gakusei desu'
        ],
        correctIndex: 1,
        explanation: 'Bentuk negatif santun mengubah kata "desu" menjadi "ja arimasen" (bukan).'
      }
    ]
  },

  7: {
    id: 7,
    num: 7,
    level: 'N5',
    title: 'Pelajaran 7: これ・この・の',
    subtitle: 'Payungku yang Mana?',
    estMinutes: 18,
    rewardPoints: 50,
    nextLessonId: 8,
    overview: [
      'Membedakan kata tunjuk benda mandiri: これ (Kore - Ini), それ (Sore - Itu), あれ (Are - Itu Jauh), dan どれ (Dore - Yang mana).',
      'Menggunakan kata penunjuk penjelas: この (Kono), その (Sono), あの (Ano) + Kata Benda.',
      'Menyatakan kepemilikan menggunakan partikel の (no): "watashi no kasa" (payung milik saya).'
    ],
    sections: [
      {
        num: 1,
        title: 'Kata Tunjuk Benda: Kore, Sore, Are, Dore',
        desc: 'Pemilihan kata tunjuk benda didasarkan pada jarak posisi benda terhadap si pembicara dan si lawan bicara:',
        formula: 'これ (dekat pembicara) • それ (dekat pendengar) • あれ (jauh dari keduanya) • どれ (mana)',
        formulaDesc: 'Kore, Sore, Are berdiri sendiri sebagai kata ganti benda dan langsung diikuti partikel は.',
        dialogues: [
          { jp: 'これ は ほん です。', romaji: 'Kore wa hon desu.', meaning: 'Ini adalah buku (ada di dekat saya).', audio: 'これはほんです' },
          { jp: 'それ は かばん です。', romaji: 'Sore wa kaban desu.', meaning: 'Itu adalah tas (ada di dekat Anda).', audio: 'それはかばんです' },
          { jp: 'あれ は なんですか？', romaji: 'Are wa nan desu ka?', meaning: 'Itu apa ya? (posisinya jauh di sana).', audio: 'あれはなんですか' }
        ]
      },
      {
        num: 2,
        title: 'Penjelas Kono + Benda & Partikel Kepemilikan の (No)',
        desc: 'Jika ingin menyebutkan benda secara langsung, gunakan Kono/Sono/Ano yang wajib ditempeli kata benda. Partikel の menyatakan kepemilikan:',
        formula: 'この [Benda] • [Pemilik] の [Benda]',
        formulaDesc: 'Contoh: Kono kasa (payung ini). Watashi no kasa (payung milik saya).',
        dialogues: [
          { jp: 'この かさ は わたし の です。', romaji: 'Kono kasa wa watashi no desu.', meaning: 'Payung ini adalah milik saya.', audio: 'このかさはわたしのです' },
          { jp: 'それ は だれ の かさ ですか？', romaji: 'Sore wa dare no kasa desu ka?', meaning: 'Itu payung milik siapa ya?', audio: 'それはだれのかさですか' },
          { jp: 'リンさん の ほん です。', romaji: 'Rin-san no hon desu.', meaning: 'Buku milik Rin.', audio: 'リンさんのほんです' }
        ]
      }
    ],
    vocabList: [
      { jp: 'これ', romaji: 'kore', meaning: 'Ini (dekat pembicara)', audio: 'これ' },
      { jp: 'それ', romaji: 'sore', meaning: 'Itu (dekat pendengar)', audio: 'それ' },
      { jp: 'あれ', romaji: 'are', meaning: 'Itu (jauh dari keduanya)', audio: 'あれ' },
      { jp: 'どれ', romaji: 'dore', meaning: 'Yang mana?', audio: 'どれ' },
      { jp: 'この', romaji: 'kono', meaning: '... ini (penjelas benda)', audio: 'この' },
      { jp: 'その', romaji: 'sono', meaning: '... itu (penjelas benda)', audio: 'その' },
      { jp: 'あの', romaji: 'ano', meaning: '... itu jauh (penjelas benda)', audio: 'あの' },
      { jp: 'かさ', romaji: 'kasa', meaning: 'Payung', audio: 'かさ' },
      { jp: 'ほん', romaji: 'hon', meaning: 'Buku', audio: 'ほん' },
      { jp: 'だれ', romaji: 'dare', meaning: 'Siapa', audio: 'だれ' }
    ],
    cultureTip: 'Di Jepang, payung plastik bening (Biniiru-gasa) sangat populer dan sering tertukar di rak payung toko. Memberi gantungan penanda pada gagang payungmu adalah ide cemerlang!',
    quiz: [
      {
        q: 'Jika sebuah benda dipegang oleh teman bicaramu, kata tunjuk apa yang harus kamu pakai?',
        options: [
          'Kore (これ)',
          'Sore (それ)',
          'Are (あれ)',
          'Dore (どれ)'
        ],
        correctIndex: 1,
        explanation: 'Sore (それ) dipakai untuk benda yang posisinya berada di dekat lawan bicara.'
      },
      {
        q: 'Apa perbedaan mendasar antara kata "Kore" dengan "Kono"?',
        options: [
          'Kore bisa berdiri sendiri, sedangkan Kono wajib langsung diikuti kata benda (contoh: Kono hon)',
          'Kore untuk orang, Kono untuk hewan',
          'Kore bermakna jauh, Kono bermakna dekat',
          'Tidak ada perbedaan'
        ],
        correctIndex: 0,
        explanation: 'Kore berdiri sendiri (Kore wa...), sedangkan Kono wajib menempel pada kata benda (Kono hon wa...).'
      },
      {
        q: 'Bagaimana cara mengatakan "Buku milik saya" dalam bahasa Jepang?',
        options: [
          'Watashi wa hon desu',
          'Watashi no hon (わたしの ほん)',
          'Kono watashi hon',
          'Hon no watashi'
        ],
        correctIndex: 1,
        explanation: 'Partikel の berfungsi menghubungkan pemilik dan kepemilikannya: Watashi no hon (Buku milik saya).'
      },
      {
        q: 'Apa arti dari pertanyaan "Sore wa dare no kasa desu ka?"',
        options: [
          'Di mana letak payung itu?',
          'Berapa harga payung itu?',
          'Itu payung milik siapa ya?',
          'Apakah ini payung baru?'
        ],
        correctIndex: 2,
        explanation: 'Dare no (milik siapa) + kasa (payung) = payung milik siapa?'
      }
    ]
  },

  8: {
    id: 8,
    num: 8,
    level: 'N5',
    title: 'Pelajaran 8: なに・だれ・どこ・いつ+も',
    subtitle: 'Apa • Siapa • Di Mana • Kapan + Juga',
    estMinutes: 18,
    rewardPoints: 50,
    nextLessonId: 9,
    overview: [
      'Menguasai 4 pilar kata tanya bahasa Jepang: なに (Apa), だれ (Siapa), どこ (Di mana), dan いつ (Kapan).',
      'Memahami fungsi partikel も (mo) saat digabungkan dengan kata tanya untuk membentuk arti menyeluruh.',
      'Membedakan arti afirmatif menyeluruh dan negatif mutlak (tidak ke mana pun, tidak ada siapa pun).'
    ],
    sections: [
      {
        num: 1,
        title: '4 Pilar Kata Tanya: Nani, Dare, Doko, Itsu',
        desc: 'Untuk mencari informasi penting saat berada di Jepang, gunakan 4 kata tanya pokok berikut:',
        dialogues: [
          { jp: 'これ は なん ですか？', romaji: 'Kore wa nan desu ka?', meaning: 'Ini apa ya? (なに / なん = Apa).', audio: 'これはなんですか' },
          { jp: 'あの ひと は だれ ですか？', romaji: 'Ano hito wa dare desu ka?', meaning: 'Orang di sebelah sana itu siapa ya? (だれ = Siapa).', audio: 'あのひとはだれですか' },
          { jp: 'えき は どこ ですか？', romaji: 'Eki wa doko desu ka?', meaning: 'Stasiun kereta api ada di mana? (どこ = Di mana).', audio: 'えきはどこですか' },
          { jp: 'テスト は いつ ですか？', romaji: 'Tesuto wa itsu desu ka?', meaning: 'Ujiannya kapan ya? (いつ = Kapan).', audio: 'テストはいつですか' }
        ]
      },
      {
        num: 2,
        title: 'Kekuatan Partikel も (Mo): Makna Menyeluruh',
        desc: 'Ketika kata tanya dipadukan dengan partikel も (mo), artinya berubah menjadi cakupan menyeluruh (siapa pun, di mana pun, selalu):',
        formula: 'どこも (Di mana pun) • だれも (Siapa pun) • いつも (Selalu)',
        formulaDesc: 'Jika diikuti kalimat negatif, artinya menjadi penolakan total (tidak ada siapa pun, tidak ke mana pun).',
        dialogues: [
          { jp: 'きょう は どこも いきません。', romaji: 'Kyou wa dokomo ikimasen.', meaning: 'Hari ini saya tidak pergi ke mana pun.', audio: 'きょうはどこもいきません' },
          { jp: 'きょうしつ に だれも いません。', romaji: 'Kyoushitsu ni daremo imasen.', meaning: 'Di dalam kelas tidak ada siapa pun.', audio: 'きょうしつにだれもいません' },
          { jp: 'リンさん は いつも げんき です。', romaji: 'Rin-san wa itsumo genki desu.', meaning: 'Rin selalu bersemangat ceria!', audio: 'リンさんはいつもげんきです' }
        ]
      }
    ],
    vocabList: [
      { jp: 'なに / なん', romaji: 'nani / nan', meaning: 'Apa', audio: 'なに' },
      { jp: 'だれ', romaji: 'dare', meaning: 'Siapa', audio: 'だれ' },
      { jp: 'どこ', romaji: 'doko', meaning: 'Di mana', audio: 'どこ' },
      { jp: 'いつ', romaji: 'itsu', meaning: 'Kapan', audio: 'いつ' },
      { jp: 'いつも', romaji: 'itsumo', meaning: 'Selalu', audio: 'いつも' },
      { jp: 'どこも', romaji: 'dokomo', meaning: 'Di mana pun (dengan negatif: tidak ke mana pun)', audio: 'どこも' },
      { jp: 'だれも', romaji: 'daremo', meaning: 'Siapa pun (dengan negatif: tak ada siapa pun)', audio: 'だれも' },
      { jp: 'ひと', romaji: 'hito', meaning: 'Orang', audio: 'ひと' }
    ],
    cultureTip: 'Di Jepang, bertanya nama orang asing secara santun diawali dengan kata "Shitsurei desu ga, o-namae wa?" (Permisi, dengan siapa nama Anda?).',
    quiz: [
      {
        q: 'Manakah kata tanya yang tepat untuk menanyakan waktu "Kapan"?',
        options: [
          'Nani (なに)',
          'Dare (だれ)',
          'Doko (どこ)',
          'Itsu (いつ)'
        ],
        correctIndex: 3,
        explanation: 'Itsu (いつ) adalah kata tanya yang berarti "kapan".'
      },
      {
        q: 'Apa arti dari kalimat "Kyou wa dokomo ikimasen"?',
        options: [
          'Hari ini saya pergi ke mana-mana',
          'Hari ini saya tidak pergi ke mana pun',
          'Hari ini saya tidak punya teman',
          'Hari ini jam berapa'
        ],
        correctIndex: 1,
        explanation: 'Dokomo + predikat negatif (ikimasen) berarti "tidak pergi ke mana pun".'
      },
      {
        q: 'Kata apa yang digunakan untuk bertanya "Orang itu siapa ya?"',
        options: [
          'Ano hito wa dare desu ka',
          'Ano hito wa nan desu ka',
          'Ano hito wa doko desu ka',
          'Ano hito wa itsu desu ka'
        ],
        correctIndex: 0,
        explanation: 'Kata "dare" digunakan khusus untuk menanyakan identitas orang (siapa).'
      },
      {
        q: 'Apa arti kata "Itsumo"?',
        options: [
          'Kemarin',
          'Selalu',
          'Tidak pernah',
          'Kadang-kadang'
        ],
        correctIndex: 1,
        explanation: 'Itsumo (いつも) berarti "selalu".'
      }
    ]
  },

  9: {
    id: 9,
    num: 9,
    level: 'N5',
    title: 'Pelajaran 9: トイレは あそこですよ',
    subtitle: 'Di Stasiun: Sini • Situ • Sana',
    estMinutes: 18,
    rewardPoints: 50,
    nextLessonId: 10,
    overview: [
      'Menunjuk lokasi tempat: ここ (Koko - Sini), そこ (Soko - Situ), あそこ (Asoko - Sana), dan どこ (Doko - Mana).',
      'Menanyakan letak fasilitas penting: "... wa doko desu ka?".',
      'Memahami fungsi partikel penegas よ (Yo) yang ramah untuk menginfokan hal baru.'
    ],
    sections: [
      {
        num: 1,
        title: 'Kata Tunjuk Tempat: Koko, Soko, Asoko, Doko',
        desc: 'Sama seperti pola Kore-Sore-Are, penunjuk lokasi juga memakai kaidah jarak fisik Ko-So-A-Do:',
        formula: 'ここ (Di sini) • そこ (Di situ) • あそこ (Di sana) • どこ (Di mana)',
        formulaDesc: 'Koko (dekat saya), Soko (dekat Anda), Asoko (jauh di seberang sana), Doko (kata tanya lokasi).',
        dialogues: [
          { jp: 'ここ は えき です。', romaji: 'Koko wa eki desu.', meaning: 'Di sini adalah stasiun kereta.', audio: 'ここはえきです' },
          { jp: 'そこ は ロビー です。', romaji: 'Soko wa robī desu.', meaning: 'Di situ adalah ruang lobi.', audio: 'そこはロビーです' },
          { jp: 'あそこ は コンビニ です。', romaji: 'Asoko wa konbini desu.', meaning: 'Di seberang sana adalah minimarket.', audio: 'あそこはコンビニです' }
        ]
      },
      {
        num: 2,
        title: 'Kalimat Penyelamat: "... wa doko desu ka?" & Partikel よ (Yo)',
        desc: 'Saat kamu butuh mencari toilet atau loket tiket, tanyakan ke petugas dengan pola santun ini. Partikel よ (yo) di akhir jawaban memberi tahu informasi baru dengan ramah:',
        formula: '[Nama Tempat] は どこですか？ ... ですよ',
        dialogues: [
          { jp: 'すみません、トイレ は どこ ですか？', romaji: 'Sumimasen, toire wa doko desu ka?', meaning: 'Permisi, toilet ada di sebelah mana ya?', audio: 'すみませんトイレはどこですか' },
          { jp: 'トイレ は あそこ ですよ！', romaji: 'Toire wa asoko desu yo!', meaning: 'Toilet ada di sebelah sana lho!', audio: 'トイレはあそこですよ' },
          { jp: 'まっすぐ いって ください。', romaji: 'Massugu itte kudasai.', meaning: 'Silakan jalan lurus ke depan.', audio: 'まっすぐいってください' }
        ]
      }
    ],
    vocabList: [
      { jp: 'ここ', romaji: 'koko', meaning: 'Di sini', audio: 'ここ' },
      { jp: 'そこ', romaji: 'soko', meaning: 'Di situ', audio: 'そこ' },
      { jp: 'あそこ', romaji: 'asoko', meaning: 'Di sana (jauh)', audio: 'あそこ' },
      { jp: 'どこ', romaji: 'doko', meaning: 'Di mana', audio: 'どこ' },
      { jp: 'トイレ', romaji: 'toire', meaning: 'Toilet', audio: 'トイレ' },
      { jp: 'えき', romaji: 'eki', meaning: 'Stasiun kereta', audio: 'えき' },
      { jp: 'コンビニ', romaji: 'konbini', meaning: 'Minimarket 24 jam', audio: 'コンビニ' },
      { jp: 'まっすぐ', romaji: 'massugu', meaning: 'Lurus', audio: 'まっすぐ' }
    ],
    cultureTip: 'Toilet umum di stasiun Jepang selalu terawat bersih tanpa biaya dan dilengkapi tombol semprotan air otomatis (Washlet).',
    quiz: [
      {
        q: 'Bagaimana cara menanyakan letak toilet kepada petugas secara santun?',
        options: [
          'Toire wa ikura desu ka?',
          'Toire wa doko desu ka? (トイレは どこですか？)',
          'Toire wa nan desu ka?',
          'Toire o kudasai'
        ],
        correctIndex: 1,
        explanation: 'Pola bertanya letak tempat adalah [Tempat] + wa doko desu ka?.'
      },
      {
        q: 'Jika petugas menjawab "Toire wa asoko desu yo", di manakah posisi toilet tersebut?',
        options: [
          'Di sini tepat di depan kita',
          'Di saku pakaian',
          'Di seberang sana yang posisinya agak jauh',
          'Toilet sedang ditutup'
        ],
        correctIndex: 2,
        explanation: 'Asoko (あそこ) menandakan lokasi yang posisinya jauh dari kedua belah pihak.'
      },
      {
        q: 'Apa fungsi partikel "よ" (yo) pada akhir kalimat "Asoko desu yo"?',
        options: [
          'Memberikan penegasan informasi baru kepada pendengar dengan ramah',
          'Membuat kalimat menjadi pertanyaan',
          'Menyatakan kemarahan',
          'Menghapus kata sebelumnya'
        ],
        correctIndex: 0,
        explanation: 'Partikel penegas よ (yo) dipakai untuk menginformasikan hal yang belum diketahui lawan bicara.'
      },
      {
        q: 'Apa arti dari petunjuk jalan "Massugu itte kudasai"?',
        options: [
          'Silakan belok ke kanan',
          'Silakan belok ke kiri',
          'Silakan jalan lurus',
          'Silakan naik tangga'
        ],
        correctIndex: 2,
        explanation: 'Massugu (まっすぐ) berarti "lurus".'
      }
    ]
  },

  10: {
    id: 10,
    num: 10,
    level: 'N5',
    title: 'Pelajaran 10: いくらですか',
    subtitle: 'Angka dan Harga',
    estMinutes: 20,
    rewardPoints: 50,
    nextLessonId: 11,
    overview: [
      'Menghafal penyebutan angka ratusan (hyaku), ribuan (sen), hingga sepuluh ribu (man).',
      'Menanyakan harga barang saat belanja suvenir: "... wa ikura desu ka?".',
      'Mengenal mata uang Jepang: Yen (えん / en).'
    ],
    sections: [
      {
        num: 1,
        title: 'Angka Besar: Ratusan, Ribuan, & Puluhan Ribu',
        desc: 'Nominal uang di Jepang memakai kelipatan ratusan dan ribuan. Perhatikan perubahan bunyi pada beberapa angka khusus:',
        formula: '百 (ひゃく / hyaku = 100) • 千 (せん / sen = 1.000) • 万 (まん / man = 10.000)',
        dialogues: [
          { jp: 'さんびゃく えん (300円)', romaji: 'sanbyaku en', meaning: '300 Yen. Perhatikan bunyi bervariasi: sanbyaku.', audio: 'さんびゃくえん' },
          { jp: 'せん えん (1.000円)', romaji: 'sen en', meaning: '1.000 Yen (lembaran uang seribu yen).', audio: 'せんえん' },
          { jp: 'ごせん えん (5.000円)', romaji: 'gosen en', meaning: '5.000 Yen.', audio: 'ごせんえん' },
          { jp: 'いちまん えん (10.000円)', romaji: 'ichiman en', meaning: '10.000 Yen (pecahan uang kertas terbesar).', audio: 'いちまんえん' }
        ]
      },
      {
        num: 2,
        title: 'Menanyakan Harga di Toko: Ikura desu ka?',
        desc: 'Tunjuk barang suvenir yang kamu inginkan dan tanyakan harganya dengan percaya diri:',
        formula: '[Benda] は いくら ですか？ ... えん です',
        dialogues: [
          { jp: 'すみません、これ は いくら ですか？', romaji: 'Sumimasen, kore wa ikura desu ka?', meaning: 'Permisi, barang ini harganya berapa ya?', audio: 'すみませんこれはいくらですか' },
          { jp: 'はっぴゃく えん です。', romaji: 'Happyaku en desu.', meaning: 'Harganya 800 Yen.', audio: 'はっぴゃくえんです' },
          { jp: 'じゃ、これ を ください。', romaji: 'Ja, kore o kudasai.', meaning: 'Kalau begitu, saya beli yang ini tolong.', audio: 'じゃこれをください' }
        ]
      }
    ],
    vocabList: [
      { jp: 'いくら', romaji: 'ikura', meaning: 'Berapa harganya', audio: 'いくら' },
      { jp: 'えん', romaji: 'en', meaning: 'Mata uang Yen (円)', audio: 'えん' },
      { jp: 'ひゃく', romaji: 'hyaku', meaning: 'Seratus (100)', audio: 'ひゃく' },
      { jp: 'せん', romaji: 'sen', meaning: 'Seribu (1.000)', audio: 'せん' },
      { jp: 'まん', romaji: 'man', meaning: 'Sepuluh ribu (10.000)', audio: 'まん' },
      { jp: 'おみやげ', romaji: 'omiyage', meaning: 'Oleh-oleh / Suvenir', audio: 'おみやげ' },
      { jp: 'おつり', romaji: 'otsuri', meaning: 'Uang kembalian', audio: 'おつり' },
      { jp: 'レシート', romaji: 'reshīto', meaning: 'Struk bukti belanja', audio: 'レシート' }
    ],
    cultureTip: 'Saat membayar uang di kasir Jepang, letakkan uang tunai atau kartu di atas nampan kecil biru/perak (tsurisen-torei), jangan langsung diberikan ke tangan kasir.',
    quiz: [
      {
        q: 'Jika kasir minimarket menyebutkan "Sen happyaku en", berapakah nominal harga tersebut?',
        options: [
          '800 Yen',
          '1.800 Yen',
          '18.000 Yen',
          '10.800 Yen'
        ],
        correctIndex: 1,
        explanation: 'Sen (1.000) + happyaku (800) = 1.800 Yen.'
      },
      {
        q: 'Kata apa yang digunakan khusus untuk menanyakan harga barang?',
        options: [
          'Nan-ji',
          'Ikura (いくら)',
          'Doko',
          'Itsu'
        ],
        correctIndex: 1,
        explanation: 'Ikura (いくら) digunakan khusus untuk menanyakan harga barang.'
      },
      {
        q: 'Pecahan uang kertas terbesar di Jepang bernilai 10.000 Yen. Bagaimana cara membacanya?',
        options: [
          'Juu-sen en',
          'Ichiman en (いちまん えん)',
          'Hyakuman en',
          'Sen-man en'
        ],
        correctIndex: 1,
        explanation: 'Sepuluh ribu dalam bahasa Jepang memiliki satuan sendiri yaitu "Man", sehingga 10.000 dibaca "Ichiman en".'
      },
      {
        q: 'Apa ungkapan yang tepat saat kamu memutuskan untuk membeli barang tersebut setelah mendengar harganya?',
        options: [
          'Sayounara',
          'Kore o kudasai (これ を ください)',
          'Doko desu ka',
          'Sumimasen'
        ],
        correctIndex: 1,
        explanation: '"Kore o kudasai" berarti "Tolong berikan saya yang ini / saya beli yang ini".'
      }
    ]
  },

  11: {
    id: 11,
    num: 11,
    level: 'N5',
    title: 'Pelajaran 11: だんごは なんぽんですか',
    subtitle: 'Menghitung Benda: Kata Bantu Bilangan「と・だけ」',
    estMinutes: 25,
    rewardPoints: 50,
    nextLessonId: 12,
    overview: [
      'Menghitung benda panjang silinder (hon/pon/bon) seperti dango tusuk, pena, dan botol.',
      'Menghubungkan dua benda dengan partikel と (to = dan).',
      'Membatasi jumlah pesanan dengan kata だけ (dake = hanya / saja).'
    ],
    sections: [
      {
        num: 1,
        title: 'Menghitung Benda Batang Panjang: Hon, Pon, Bon',
        desc: 'Di bahasa Jepang, benda dihitung dengan kata bantu bilangan sesuai bentuknya. Benda panjang dan ramping memakai 本 (ほん / hon):',
        formula: '1本 (ippon) • 2本 (nihon) • 3本 (sanbon) • 何本 (nanbon)',
        dialogues: [
          { jp: 'だんご を にほん ください。', romaji: 'Dango o nihon kudasai.', meaning: 'Tolong dango dua tusuk.', audio: 'だんごをにほんください' },
          { jp: 'ペン は なんぼん ありますか？', romaji: 'Pen wa nanbon arimasu ka?', meaning: 'Pena ada berapa batang?', audio: 'ペンはなんぼんありますか' },
          { jp: 'さんぼん あります。', romaji: 'Sanbon arimasu.', meaning: 'Ada tiga batang.', audio: 'さんぼんあります' }
        ]
      },
      {
        num: 2,
        title: 'Partikel と (Dan) dan Pembatas だけ (Hanya)',
        desc: 'Gunakan partikel と untuk menggabungkan benda, dan kata だけ jika kamu hanya menginginkan jumlah tertentu saja:',
        formula: 'A と B (A dan B) • [Jumlah] だけ (Hanya ...)',
        dialogues: [
          { jp: 'だんご と おちゃ を ください。', romaji: 'Dango to ocha o kudasai.', meaning: 'Tolong dango dan teh hijau.', audio: 'だんごとおちゃをください' },
          { jp: 'ひとつ だけ ください。', romaji: 'Hitotsu dake kudasai.', meaning: 'Tolong satu buah saja.', audio: 'ひとつだけください' }
        ]
      }
    ],
    vocabList: [
      { jp: 'だんご', romaji: 'dango', meaning: 'Kue dango tusuk', audio: 'だんご' },
      { jp: 'いっぽん', romaji: 'ippon', meaning: '1 batang / tusuk', audio: 'いっぽん' },
      { jp: 'にほん', romaji: 'nihon', meaning: '2 batang / tusuk', audio: 'にほん' },
      { jp: 'さんぼん', romaji: 'sanbon', meaning: '3 batang / tusuk', audio: 'さんぼん' },
      { jp: 'なんぼん', romaji: 'nanbon', meaning: 'Berapa batang / tusuk?', audio: 'なんぼん' },
      { jp: 'と', romaji: 'to', meaning: 'Dan (penyambung kata benda)', audio: 'と' },
      { jp: 'だけ', romaji: 'dake', meaning: 'Hanya / Saja', audio: 'だけ' },
      { jp: 'おちゃ', romaji: 'ocha', meaning: 'Teh hijau', audio: 'おちゃ' }
    ],
    cultureTip: 'Mitarashi Dango adalah jajanan pasar legendaris Jepang berupa bola ketan kenyal yang dibakar lalu dilumuri saus karamel kecap asin manis yang harum.',
    quiz: [
      {
        q: 'Kata bantu bilangan apa yang digunakan untuk menghitung benda batang silinder panjang (seperti tusuk sate dango atau pulpen)?',
        options: [
          'Mai (まい)',
          'Hon / Pon / Bon (ほん / ぽん / ぼん)',
          'Dai (だい)',
          'Satsu (さつ)'
        ],
        correctIndex: 1,
        explanation: 'Hon/Pon/Bon (本) adalah kata bantu bilangan khusus untuk benda panjang dan ramping.'
      },
      {
        q: 'Bagaimana cara menyebut "3 tusuk dango" dalam bahasa Jepang?',
        options: [
          'Dango san-hon',
          'Dango sanbon (だんご さんぼん)',
          'Dango san-mai',
          'Dango san-nin'
        ],
        correctIndex: 1,
        explanation: 'Angka 3 dipadukan dengan hon mengalami perubahan bunyi menjadi "sanbon".'
      },
      {
        q: 'Partikel apa yang digunakan untuk menghubungkan dua benda seperti "Dango dan Teh hijau"?',
        options: [
          'Partikel は (wa)',
          'Partikel と (to)',
          'Partikel の (no)',
          'Partikel を (o)'
        ],
        correctIndex: 1,
        explanation: 'Partikel と (to) berarti "dan" untuk menghubungkan kata benda.'
      },
      {
        q: 'Apa arti kalimat "Hitotsu dake kudasai"?',
        options: [
          'Tolong minta semuanya',
          'Tolong minta satu buah saja',
          'Tolong jangan berikan apa pun',
          'Berapa harganya satu'
        ],
        correctIndex: 1,
        explanation: 'Hitotsu (satu buah) + dake (hanya/saja) + kudasai (tolong berikan).'
      }
    ]
  },

  12: {
    id: 12,
    num: 12,
    level: 'N5',
    title: 'Pelajaran 12: みずを かいます',
    subtitle: 'Kata Kerja Pertama: Beli Tiket, Beli Air',
    estMinutes: 20,
    rewardPoints: 50,
    nextLessonId: 13,
    overview: [
      'Mengenal bentuk kata kerja sopan berakhiran -ます (-masu).',
      'Memahami partikel を (o) sebagai penanda sasaran objek perbuatan.',
      'Mempraktikkan kegiatan berbelanja harian: kaimasu (membeli), nomimasu (minum), tabemasu (makan).'
    ],
    sections: [
      {
        num: 1,
        title: 'Kata Kerja Berakhiran -masu & Partikel を (o)',
        desc: 'Dalam tata bahasa Jepang, kata kerja selalu diletakkan di paling ujung akhir kalimat. Benda yang menjadi objek tindakan dihubungkan dengan partikel を (o):',
        formula: '[Objek Sasaran] を [Kata Kerja] ます',
        formulaDesc: 'Partikel を ditulis dengan huruf "wo" tetapi mutlak dilafalkan sebagai "O".',
        dialogues: [
          { jp: 'みず を かいます。', romaji: 'Mizu o kaimasu.', meaning: 'Membeli air minum.', audio: 'みずをかいます' },
          { jp: 'きっぷ を かいます。', romaji: 'Kippu o kaimasu.', meaning: 'Membeli tiket perjalanan di loket.', audio: 'きっぷをかいます' },
          { jp: 'パン を たべます。', romaji: 'Pan o tabemasu.', meaning: 'Memakan roti.', audio: 'パンをたべます' },
          { jp: 'おちゃ を のみます。', romaji: 'Ocha o nomimasu.', meaning: 'Meminum teh hijau.', audio: 'おちゃをのみます' }
        ]
      },
      {
        num: 2,
        title: 'Bertanya Kegiatan: "Nani o shimasu ka?"',
        desc: 'Untuk menanyakan apa yang sedang atau akan dilakukan oleh seseorang, gunakan pola pertanyaan berikut:',
        formula: 'なに を しますか？ (Nani o shimasu ka?)',
        dialogues: [
          { jp: 'なに を かいますか？', romaji: 'Nani o kaimasu ka?', meaning: 'Mau beli apa ya?', audio: 'なにをかいますか' },
          { jp: 'ジュース を かいます。', romaji: 'Jūsu o kaimasu.', meaning: 'Mau membeli jus buah.', audio: 'ジュースをかいます' }
        ]
      }
    ],
    vocabList: [
      { jp: 'かいます', romaji: 'kaimasu', meaning: 'Membeli', audio: 'かいます' },
      { jp: 'のみます', romaji: 'nomimasu', meaning: 'Meminum', audio: 'のみます' },
      { jp: 'たべます', romaji: 'tabemasu', meaning: 'Memakan', audio: 'たべます' },
      { jp: 'します', romaji: 'shimasu', meaning: 'Melakukan / Mengerjakan', audio: 'します' },
      { jp: 'みず', romaji: 'mizu', meaning: 'Air minum', audio: 'みず' },
      { jp: 'きっぷ', romaji: 'kippu', meaning: 'Tiket', audio: 'きっぷ' },
      { jp: 'パン', romaji: 'pan', meaning: 'Roti', audio: 'パン' },
      { jp: 'なにを', romaji: 'nani o', meaning: 'Apa yang...', audio: 'なにを' }
    ],
    cultureTip: 'Mesin penjual minuman otomatis (Jidouhanbaiki) bertebaran di setiap sudut jalan Jepang, menyediakan minuman dingin (Tsumetai / tombol biru) dan minuman panas (Atatakai / tombol merah).',
    quiz: [
      {
        q: 'Partikel apa yang bertugas menandai objek sasaran dalam kalimat "Mizu ... kaimasu"?',
        options: [
          'Partikel は (wa)',
          'Partikel を (o)',
          'Partikel の (no)',
          'Partikel に (ni)'
        ],
        correctIndex: 1,
        explanation: 'Partikel を (o) digunakan untuk menandai objek sasaran yang dikenai kata kerja.'
      },
      {
        q: 'Bagaimana penulisan kalimat "Membeli tiket" yang tepat?',
        options: [
          'Kippu o kaimasu (きっぷ を かいます)',
          'Kippu wa kaimasu',
          'Kaimasu o kippu',
          'Kippu no kaimasu'
        ],
        correctIndex: 0,
        explanation: 'Susunan kalimat Jepang adalah [Objek] + を + [Kata Kerja]: Kippu o kaimasu.'
      },
      {
        q: 'Apa arti dari pertanyaan "Nani o kaimasu ka?"',
        options: [
          'Di mana kamu beli barang ini?',
          'Mau membeli apa?',
          'Berapa harga barang ini?',
          'Kapan kamu membelinya?'
        ],
        correctIndex: 1,
        explanation: 'Nani (apa) + o kaimasu ka (yang akan dibeli?) = Mau beli apa?'
      },
      {
        q: 'Kata kerja manakah yang berarti "Meminum"?',
        options: [
          'Tabemasu (たべます)',
          'Nomimasu (のみます)',
          'Kaimasu (かいます)',
          'Shimasu (します)'
        ],
        correctIndex: 1,
        explanation: 'Nomimasu (のみます) berarti minum, sedangkan Tabemasu adalah makan.'
      }
    ]
  },

  13: {
    id: 13,
    num: 13,
    level: 'N5',
    title: 'Pelajaran 13: ラーメンを ください',
    subtitle: 'Minta Ramen, ya!',
    estMinutes: 18,
    rewardPoints: 50,
    nextLessonId: 14,
    overview: [
      'Memesan makanan dan minuman di kedai restoran: "... o kudasai".',
      'Menyebutkan jumlah porsi: ひとつ (hitotsu - 1) dan ふたつ (futatsu - 2).',
      'Etika sebelum dan sesudah menyantap hidangan di Jepang.'
    ],
    sections: [
      {
        num: 1,
        title: 'Memesan Makanan & Jumlah Porsi di Restoran',
        desc: 'Di kedai ramen atau restoran Jepang, kamu cukup menyebutkan menu makanan lalu menambahkan kata sakti "kudasai":',
        formula: '[Makanan] を [Jumlah Porsi] ください',
        formulaDesc: 'Hitotsu (1 mangkok/porsi), Futatsu (2 mangkok/porsi), Mittsu (3 mangkok/porsi).',
        dialogues: [
          { jp: 'ラーメン を ひとつ ください。', romaji: 'Rāmen o hitotsu kudasai.', meaning: 'Tolong ramennya satu porsi.', audio: 'ラーメンをひとつください' },
          { jp: 'おみず を ふたつ ください。', romaji: 'Omizu o futatsu kudasai.', meaning: 'Minta air putih dingin dua gelas tolong.', audio: 'おみずをふたつください' },
          { jp: 'これ を ください。', romaji: 'Kore o kudasai.', meaning: 'Tolong yang ini (sambil menunjuk buku menu).', audio: 'これをください' }
        ]
      },
      {
        num: 2,
        title: 'Etika Bersyukur: Itadakimasu & Gochisousama',
        desc: 'Masyarakat Jepang menjunjung tinggi rasa syukur terhadap bahan makanan dan jerih payah koki yang memasak:',
        dialogues: [
          { jp: 'いただきます！', romaji: 'Itadakimasu!', meaning: 'Selamat makan! (Diucapkan sebelum menyendok makanan pertama).', audio: 'いただきます' },
          { jp: 'おいしい です！', romaji: 'Oishii desu!', meaning: 'Enak dan lezat sekali!', audio: 'おいしいです' },
          { jp: 'ごちそうさま でした！', romaji: 'Gochisousama deshita!', meaning: 'Terima kasih banyak atas hidangannya (setelah selesai makan).', audio: 'ごちそうさまでした' },
          { jp: 'おかいけい を おねがいします。', romaji: 'Okaikei o onegai shimasu.', meaning: 'Minta bon pembayarannya tolong.', audio: 'おかいけいをおねがいします' }
        ]
      }
    ],
    vocabList: [
      { jp: 'ラーメン', romaji: 'rāmen', meaning: 'Mie ramen', audio: 'ラーメン' },
      { jp: 'ください', romaji: 'kudasai', meaning: 'Tolong berikan...', audio: 'ください' },
      { jp: 'ひとつ', romaji: 'hitotsu', meaning: 'Satu porsi / buah', audio: 'ひとつ' },
      { jp: 'ふたつ', romaji: 'futatsu', meaning: 'Dua porsi / buah', audio: 'ふたつ' },
      { jp: 'おいしい', romaji: 'oishii', meaning: 'Enak / Lezat', audio: 'おいしい' },
      { jp: 'おかいけい', romaji: 'okaikei', meaning: 'Bon kasir / Tagihan', audio: 'おかいけい' },
      { jp: 'いただきます', romaji: 'itadakimasu', meaning: 'Selamat makan', audio: 'いただきます' },
      { jp: 'ごちそうさまでした', romaji: 'gochisousama deshita', meaning: 'Terima kasih atas hidangannya', audio: 'ごちそうさまでした' }
    ],
    cultureTip: 'Menyeruput mie ramen dengan suara nyaring (slurping) di Jepang bukan tindakan tidak sopan, melainkan pujian kepada koki bahwa kuah ramennya sangat nikmat!',
    quiz: [
      {
        q: 'Bagaimana cara memesan ramen 1 porsi secara sopan kepada pelayan kedai?',
        options: [
          'Ramen wa ikura desu ka',
          'Rāmen o hitotsu kudasai (ラーメンを ひとつ ください)',
          'Ramen wa doko desu ka',
          'Ramen ja arimasen'
        ],
        correctIndex: 1,
        explanation: 'Pola memesan hidangan adalah [Nama Makanan] + o + [Jumlah] + kudasai.'
      },
      {
        q: 'Ungkapan apa yang wajib diucapkan tepat sebelum mulai menyantap makanan di Jepang?',
        options: [
          'Gochisousama deshita',
          'Itadakimasu (いただきます)',
          'Sayounara',
          'Oyasuminasai'
        ],
        correctIndex: 1,
        explanation: '"Itadakimasu" diucapkan sebelum makan sebagai tanda syukur dan menghormati hidangan.'
      },
      {
        q: 'Jika ingin meminta bon pembayaran di kasir restoran, ungkapan apa yang dikatakan?',
        options: [
          'Okaikei o onegai shimasu (おかいけいを おねがいします)',
          'Konnichiwa',
          'Sumimasen doko desu ka',
          'Oishii desu'
        ],
        correctIndex: 0,
        explanation: '"Okaikei o onegai shimasu" artinya "Tolong minta bon pembayarannya".'
      },
      {
        q: 'Apa arti kata "Futatsu" dalam pemesanan makanan?',
        options: [
          '1 porsi',
          '2 porsi / buah',
          '3 porsi',
          'Gratis'
        ],
        correctIndex: 1,
        explanation: 'Hitotsu = 1 buah, Futatsu = 2 buah, Mittsu = 3 buah.'
      }
    ]
  },

  14: {
    id: 14,
    num: 14,
    level: 'N5',
    title: 'Pelajaran 14: ラーメンを ください【Ulasan 1】',
    subtitle: '【Ulasan 1】Perkenalan Diri • Belanja • Pesan Makanan',
    estMinutes: 25,
    rewardPoints: 60,
    nextLessonId: 15,
    overview: [
      'Meninjau ulang dan mengintegrasikan materi Pelajaran 1 sampai 13 dalam skenario nyata di Jepang.',
      'Simulasi menyeluruh: Berkenalan di stasiun, berbelanja di konbini, dan memesan makan siang di kedai ramen.',
      'Memantapkan kepercayaan diri berbicara bahasa Jepang tanpa ragu.'
    ],
    sections: [
      {
        num: 1,
        title: 'Skenario 1: Berkenalan & Bertanya Arah di Stasiun',
        desc: 'Saat pertama kali tiba di Tokyo, Rin mempraktikkan perkenalan diri dan menanyakan arah fasilitas umum:',
        dialogues: [
          { jp: 'はじめまして、わたし は リン です。よろしく おねがいします！', romaji: 'Hajimemashite, watashi wa Rin desu. Yoroshiku onegaishimasu!', meaning: 'Senang berkenalan, saya adalah Rin. Mohon bimbingannya!', audio: 'はじめましてわたしはリンですよろしくおねがいします' },
          { jp: 'すみません、えき は どこ ですか？', romaji: 'Sumimasen, eki wa doko desu ka?', meaning: 'Permisi, stasiun kereta api ada di mana ya?', audio: 'すみませんえきはどこですか' },
          { jp: 'あそこ ですよ。まっすぐ いって ください。', romaji: 'Asoko desu yo. Massugu itte kudasai.', meaning: 'Di sebelah sana lho. Silakan jalan lurus.', audio: 'あそこですよまっすぐいってください' }
        ]
      },
      {
        num: 2,
        title: 'Skenario 2: Belanja di Minimarket & Memesan Ramen',
        desc: 'Di toko dan restoran, Rin berhasil membeli barang dan memesan semangkuk ramen lezat:',
        dialogues: [
          { jp: 'すみません、この おみやげ は いくら ですか？', romaji: 'Sumimasen, kono omiyage wa ikura desu ka?', meaning: 'Permisi, oleh-oleh ini harganya berapa?', audio: 'すみませんこのおみやげはいくらですか' },
          { jp: 'ごひゃく えん です。', romaji: 'Gohyaku en desu.', meaning: 'Harganya 500 Yen.', audio: 'ごひゃくえんです' },
          { jp: 'ラーメン を ひとつ と おみず を ください！', romaji: 'Rāmen o hitotsu to omizu o kudasai!', meaning: 'Tolong ramen satu porsi dan air minum ya!', audio: 'ラーメンをひとつとおみずをください' },
          { jp: 'いただきます！... ごちそうさま でした！', romaji: 'Itadakimasu! ... Gochisousama deshita!', meaning: 'Selamat makan! ... Terima kasih banyak atas hidangannya!', audio: 'いただきますごちそうさまでした' }
        ]
      }
    ],
    vocabList: [
      { jp: 'はじめまして', romaji: 'hajimemashite', meaning: 'Senang berkenalan dengan Anda', audio: 'はじめまして' },
      { jp: 'よろしく', romaji: 'yoroshiku', meaning: 'Mohon bimbingan dan bantuannya', audio: 'よろしく' },
      { jp: 'すみません', romaji: 'sumimasen', meaning: 'Permisi / Maaf', audio: 'すみません' },
      { jp: 'いくら', romaji: 'ikura', meaning: 'Berapa harga', audio: 'いくら' },
      { jp: 'ください', romaji: 'kudasai', meaning: 'Tolong berikan', audio: 'ください' },
      { jp: 'おいしい', romaji: 'oishii', meaning: 'Enak / Lezat', audio: 'おいしい' },
      { jp: 'またね', romaji: 'mata ne', meaning: 'Sampai jumpa lagi!', audio: 'またね' }
    ],
    cultureTip: 'Mengulang materi secara berkala adalah kunci utama kelancaran bahasa asing. Jangan takut salah dalam berbicara!',
    quiz: [
      {
        q: 'Kalimat manakah yang paling lengkap dan santun saat memperkenalkan diri untuk pertama kali?',
        options: [
          'Sayounara, watashi wa Rin desu',
          'Hajimemashite, watashi wa Rin desu. Douzo yoroshiku onegaishimasu',
          'Kore o kudasai, watashi wa Rin desu',
          'Okaikei o onegaishimasu'
        ],
        correctIndex: 1,
        explanation: 'Hajimemashite diawali di awal, diikuti nama, dan ditutup dengan Douzo yoroshiku onegaishimasu.'
      },
      {
        q: 'Bagaimana cara memesan "Ramen 1 porsi DAN air minum"?',
        options: [
          'Rāmen o hitotsu to omizu o kudasai',
          'Rāmen wa omizu desu',
          'Rāmen no omizu kudasai',
          'Rāmen dake kudasai'
        ],
        correctIndex: 0,
        explanation: 'Partikel と menghubungkan dua benda: Ramen o hitotsu TO omizu o kudasai.'
      },
      {
        q: 'Jika ingin bertanya harga payung yang sedang kamu pegang, kalimat apa yang digunakan?',
        options: [
          'Kono kasa wa ikura desu ka?',
          'Kono kasa wa doko desu ka?',
          'Ano kasa wa nan desu ka?',
          'Kasa o kudasai'
        ],
        correctIndex: 0,
        explanation: 'Kono kasa (payung ini) + wa ikura desu ka (berapa harganya?).'
      },
      {
        q: 'Apa ungkapan penutup setelah selesai menyantap makan siang dan hendak meninggalkan meja?',
        options: [
          'Itadakimasu',
          'Gochisousama deshita (ごちそうさまでした)',
          'Oyasuminasai',
          'Hajimemashite'
        ],
        correctIndex: 1,
        explanation: '"Gochisousama deshita" diucapkan setelah selesai makan.'
      }
    ]
  },

  15: {
    id: 15,
    num: 15,
    level: 'N5',
    title: 'Pelajaran 15: なんじですか',
    subtitle: 'Jam Berapa? Hari Apa?',
    estMinutes: 25,
    rewardPoints: 50,
    nextLessonId: 16,
    overview: [
      'Menyatakan waktu jam (ji) dan menit (fun/pun).',
      'Menanyakan waktu saat ini: "Ima nan-ji desu ka?".',
      'Menghafal 7 nama hari dalam seminggu (Getsuyoubi sampai Nichiyoubi).'
    ],
    sections: [
      {
        num: 1,
        title: 'Menyatakan Jam & Menit: Nan-ji desu ka?',
        desc: 'Menyebutkan jam cukup dengan menambahkan akhiran 時 (じ / ji) di belakang angka. Untuk setengah jam (30 menit), gunakan 半 (はん / han):',
        formula: '[Angka] じ (Jam) • [Angka] ふん/ぷん (Menit) • はん (Setengah)',
        dialogues: [
          { jp: 'いま なんじ ですか？', romaji: 'Ima nan-ji desu ka?', meaning: 'Sekarang jam berapa ya?', audio: 'いまなんじですか' },
          { jp: 'いま ごじ です。', romaji: 'Ima go-ji desu.', meaning: 'Sekarang jam 5 tepat.', audio: 'いまごじです' },
          { jp: 'でんしゃ は ろくじ はん です。', romaji: 'Densha wa roku-ji han desu.', meaning: 'Kereta berangkat jam 6.30 (setengah 7).', audio: 'でんしゃはろくじはんです' }
        ]
      },
      {
        num: 2,
        title: 'Nama-Nama Hari dalam Seminggu (Youbi)',
        desc: 'Hari-hari dalam bahasa Jepang dinamai berdasarkan unsur alam kosmik (Bulan, Api, Air, Kayu, Emas, Bumi, Matahari):',
        dialogues: [
          { jp: 'げつようび (Senin)', romaji: 'getsuyoubi', meaning: 'Hari Senin (Unsur Bulan 月).', audio: 'げつようび' },
          { jp: 'かようび (Selasa)', romaji: 'kayoubi', meaning: 'Hari Selasa (Unsur Api 火).', audio: 'かようび' },
          { jp: 'すいようび (Rabu)', romaji: 'suiyoubi', meaning: 'Hari Rabu (Unsur Air 水).', audio: 'すいようび' },
          { jp: 'もくようび (Kamis)', romaji: 'mokuyoubi', meaning: 'Hari Kamis (Unsur Kayu 木).', audio: 'もくようび' },
          { jp: 'きんようび (Jumat)', romaji: 'kinyoubi', meaning: 'Hari Jumat (Unsur Emas 金).', audio: 'きんようび' },
          { jp: 'どようび (Sabtu)', romaji: 'doyoubi', meaning: 'Hari Sabtu (Unsur Tanah 土).', audio: 'どようび' },
          { jp: 'にちようび (Minggu)', romaji: 'nichiyoubi', meaning: 'Hari Minggu (Unsur Matahari 日).', audio: 'にちようび' }
        ]
      }
    ],
    vocabList: [
      { jp: 'いま', romaji: 'ima', meaning: 'Sekarang', audio: 'いま' },
      { jp: 'なんじ', romaji: 'nan-ji', meaning: 'Jam berapa', audio: 'なんじ' },
      { jp: 'じ', romaji: 'ji', meaning: 'Pukul / Jam', audio: 'じ' },
      { jp: 'ふん / ぷん', romaji: 'fun / pun', meaning: 'Menit', audio: 'ふん' },
      { jp: 'はん', romaji: 'han', meaning: 'Setengah (30 menit)', audio: 'はん' },
      { jp: 'きょう', romaji: 'kyou', meaning: 'Hari ini', audio: 'きょう' },
      { jp: 'げつようび', romaji: 'getsuyoubi', meaning: 'Senin', audio: 'げつようび' },
      { jp: 'にちようび', romaji: 'nichiyoubi', meaning: 'Minggu', audio: 'にちようび' }
    ],
    cultureTip: 'Jadwal kereta shinkansen dan commuter train di Jepang sangat presisi hingga hitungan detik. Selalu tiba di peron minimal 5 menit sebelum jam keberangkatan!',
    quiz: [
      {
        q: 'Bagaimana cara menanyakan "Sekarang jam berapa?" dalam bahasa Jepang?',
        options: [
          'Ima nan-ji desu ka? (いま なんじですか？)',
          'Ima ikura desu ka?',
          'Ima doko desu ka?',
          'Ima dare desu ka?'
        ],
        correctIndex: 0,
        explanation: 'Ima (sekarang) + nan-ji (jam berapa) + desu ka = Sekarang jam berapa?'
      },
      {
        q: 'Jika jam menunjukkan pukul 06.30, bagaimana cara mengucapkannya?',
        options: [
          'Roku-ji han (ろくじ はん)',
          'Go-ji han',
          'Shichi-ji han',
          'Hachi-ji'
        ],
        correctIndex: 0,
        explanation: 'Pukul 6 adalah Roku-ji, dan 30 menit (setengah) adalah Han: Roku-ji han.'
      },
      {
        q: 'Nama hari apakah "Kinyoubi" (金曜日) dalam bahasa Indonesia?',
        options: [
          'Hari Senin',
          'Hari Rabu',
          'Hari Jumat',
          'Hari Minggu'
        ],
        correctIndex: 2,
        explanation: 'Kinyoubi (emas) melambangkan hari Jumat.'
      },
      {
        q: 'Manakah nama hari yang melambangkan Hari Minggu (Matahari)?',
        options: [
          'Getsuyoubi',
          'Nichiyoubi (にちようび)',
          'Doyoubi',
          'Kayoubi'
        ],
        correctIndex: 1,
        explanation: 'Nichiyoubi (日 Matahari) adalah hari Minggu.'
      }
    ]
  },

  16: {
    id: 16,
    num: 16,
    level: 'N5',
    title: 'Pelajaran 16: 昨日、なにを しましたか',
    subtitle: 'Kemarin ngapain aja?',
    estMinutes: 24,
    rewardPoints: 50,
    nextLessonId: 1,
    overview: [
      'Mengubah kata kerja bentuk sekarang (-masu) menjadi bentuk lampau: -ました (-mashita).',
      'Membentuk kalimat lampau negatif: -ませんでした (-masen deshita).',
      'Menggunakan kata keterangan waktu: きのう (kemarin), きょう (hari ini), あした (besok).'
    ],
    sections: [
      {
        num: 1,
        title: 'Bentuk Lampau Kata Kerja: -mashita & -masen deshita',
        desc: 'Untuk menceritakan kegiatan yang sudah terjadi di masa lampau (kemarin, minggu lalu), ubah akhiran -masu menjadi -mashita:',
        formula: '[Bentuk Sekarang] ます -> [Lampau Positif] ました | [Lampau Negatif] ませんでした',
        dialogues: [
          { jp: 'きのう ラーメン を たべました。', romaji: 'Kinou rāmen o tabemashita.', meaning: 'Kemarin saya sudah makan ramen.', audio: 'きのうラーメンをたべました' },
          { jp: 'とうきょう へ いきました。', romaji: 'Toukyou e ikimashita.', meaning: 'Saya sudah pergi ke Tokyo.', audio: 'とうきょうへいきました' },
          { jp: 'きのう テレビ を みませんでした。', romaji: 'Kinou terebi o mimasen deshita.', meaning: 'Kemarin saya tidak menonton televisi.', audio: 'きのうテレビをみませんでした' }
        ]
      },
      {
        num: 2,
        title: 'Tanya Jawab Kegiatan Kemarin: "Kinou nani o shimashita ka?"',
        desc: 'Gunakan pertanyaan ini untuk membuka obrolan santai mengenai kegiatan liburan atau jalan-jalan kemarin:',
        formula: 'きのう なに を しましたか？ (Kinou nani o shimashita ka?)',
        dialogues: [
          { jp: 'きのう なに を しましたか？', romaji: 'Kinou nani o shimashita ka?', meaning: 'Kemarin kamu ngapain aja?', audio: 'きのうなにをしましたか' },
          { jp: 'きょうと で しゃしん を とりました。', romaji: 'Kyouto de shashin o torimashita.', meaning: 'Saya mengambil banyak foto di Kyoto.', audio: 'きょうとでしゃしんをとりました' },
          { jp: 'とても たのしかった です！', romaji: 'Totemo tanoshikatta desu!', meaning: 'Sangat menyenangkan sekali!', audio: 'とてもたのしかったです' }
        ]
      }
    ],
    vocabList: [
      { jp: 'きのう', romaji: 'kinou', meaning: 'Kemarin', audio: 'きのう' },
      { jp: 'きょう', romaji: 'kyou', meaning: 'Hari ini', audio: 'きょう' },
      { jp: 'あした', romaji: 'ashita', meaning: 'Besok', audio: 'あした' },
      { jp: 'たべました', romaji: 'tabemashita', meaning: 'Sudah makan (lampau)', audio: 'たべました' },
      { jp: 'いきました', romaji: 'ikimashita', meaning: 'Sudah pergi (lampau)', audio: 'いきました' },
      { jp: 'かいました', romaji: 'kaimashita', meaning: 'Sudah beli (lampau)', audio: 'かいました' },
      { jp: 'しゃしん', romaji: 'shashin', meaning: 'Foto / Gambar', audio: 'しゃしん' },
      { jp: 'とても', romaji: 'totemo', meaning: 'Sangat', audio: 'とても' }
    ],
    cultureTip: 'Saat mengakhiri hari atau berpisah dengan teman sekelas, ucapkan "Otsukaresama deshita" yang berarti "Terima kasih atas kerja kerasmu hari ini!".',
    quiz: [
      {
        q: 'Bagaimana bentuk lampau dari kata kerja "Tabemasu" (makan)?',
        options: [
          'Tabemasen',
          'Tabemashita (たべました)',
          'Tabemasu deshita',
          'Tabetai'
        ],
        correctIndex: 1,
        explanation: 'Bentuk lampau positif dari kata kerja berakhiran -masu adalah -mashita (Tabemashita = sudah makan).'
      },
      {
        q: 'Apa arti dari pertanyaan "Kinou nani o shimashita ka?"',
        options: [
          'Besok mau ngapain?',
          'Kemarin kamu melakukan apa / ngapain aja?',
          'Kapan kamu pergi ke Tokyo?',
          'Di mana kamu makan ramen?'
        ],
        correctIndex: 1,
        explanation: 'Kinou (kemarin) + nani o shimashita ka (sudah melakukan apa?) = Kemarin kamu ngapain aja?'
      },
      {
        q: 'Manakah kata keterangan waktu yang berarti "Besok"?',
        options: [
          'Kinou (きのう)',
          'Kyou (きょう)',
          'Ashita (あした)',
          'Ima (いま)'
        ],
        correctIndex: 2,
        explanation: 'Ashita (あした) berarti besok. Kinou adalah kemarin, dan Kyou adalah hari ini.'
      },
      {
        q: 'Bagaimana cara mengatakan bentuk lampau negatif "Kemarin saya tidak pergi"?',
        options: [
          'Kinou ikimasen',
          'Kinou ikimashita',
          'Kinou ikimasen deshita (きのう いきませんでした)',
          'Kinou iku ja arimasen'
        ],
        correctIndex: 2,
        explanation: 'Bentuk lampau negatif kata kerja adalah -masen deshita: Ikimasen deshita (tidak pergi).'
      }
    ]
  }
};

// ====================================================
// STATE MANAJEMEN MATERI & KUIS
// ====================================================
let currentLessonId = 1;
let currentLessonQuizAnswers = {}; // { qIndex: { isCorrect, selectedOptIndex } }
let currentLessonQuizScore = 0;

// Daftar Modul Katalog Utama (Sesuai Kurikulum Resmi Nihongo to Japan N5)
const LESSON_CATALOG_DATA = [
  { id: 1, title: 'Bahasa Jepang Itu Seperti Apa?', subtitle: 'Kenalan dengan tiga jenis huruf Jepang', time: '12 menit', level: 'N5' },
  { id: 2, title: 'Hiragana', subtitle: '46 huruf, "abjad" dasar bahasa Jepang', time: '25 menit', level: 'N5' },
  { id: 3, title: 'Katakana', subtitle: 'Huruf untuk kata serapan asing: 46 huruf + tanda pemanjang「ー」', time: '20 menit', level: 'N5' },
  { id: 4, title: 'Dakuon, Handakuon, Yōon, Chōon, Sokuon', subtitle: 'Setelah gojūon, inilah 5 perubahan kecil yang paling sering bikin bingung', time: '15 menit', level: 'N5' },
  { id: 5, title: 'Salam dan Kalimat Wajib untuk Jalan-Jalan', subtitle: 'Hafalkan satu kalimat utuh, langsung terpakai di Jepang', time: '18 menit', level: 'N5' },
  { id: 6, title: 'わたしは リンです', subtitle: 'Kalimat Jepang Pertamamu: AはBです', time: '25 menit', level: 'N5' },
  { id: 7, title: 'これ・この・の', subtitle: 'Payungku yang Mana?', time: '18 menit', level: 'N5' },
  { id: 8, title: 'なに・だれ・どこ・いつ+も', subtitle: 'Apa • Siapa • Di Mana • Kapan + Juga', time: '18 menit', level: 'N5' },
  { id: 9, title: 'トイレは あそこですよ', subtitle: 'Di Stasiun: Sini • Situ • Sana', time: '18 menit', level: 'N5' },
  { id: 10, title: 'いくらですか', subtitle: 'Angka dan Harga', time: '20 menit', level: 'N5' },
  { id: 11, title: 'だんごは なんぽんですか', subtitle: 'Menghitung Benda: Kata Bantu Bilangan「と・だけ」', time: '25 menit', level: 'N5' },
  { id: 12, title: 'みずを かいます', subtitle: 'Kata Kerja Pertama: Beli Tiket, Beli Air', time: '20 menit', level: 'N5' },
  { id: 13, title: 'ラーメンを ください', subtitle: 'Minta Ramen, ya!', time: '18 menit', level: 'N5' },
  { id: 14, title: 'ラーメンを ください', subtitle: '【Ulasan 1】Perkenalan Diri • Belanja • Pesan Makanan', time: '25 menit', level: 'N5' },
  { id: 15, title: 'なんじですか', subtitle: 'Jam Berapa? Hari Apa?', time: '25 menit', level: 'N5' },
  { id: 16, title: '昨日、なにを しましたか', subtitle: 'Kemarin ngapain aja?', time: '24 menit', level: 'N5' }
];

// Inisialisasi Halaman Materi
function initMateriPage() {
  renderLessonCatalogList();
}

function renderLessonCatalogList() {
  const container = document.getElementById('materi-lesson-items');
  if (!container) return;

  let completedLessons = [];
  try {
    completedLessons = JSON.parse(localStorage.getItem('sijapanese_completed_lessons') || '[]');
  } catch (e) {}

  container.innerHTML = LESSON_CATALOG_DATA.map(les => {
    const isDone = completedLessons.includes(les.id);
    return `
      <div class="materi-nihongo-catalog-row ${isDone ? 'completed' : ''}" onclick="openLesson(${les.id})">
        <div class="nihongo-row-num ${isDone ? 'done' : ''}">${isDone ? 'OK' : les.id}</div>
        <div class="nihongo-row-content">
          <h3 class="nihongo-row-title">${escapeHtml(les.title)}</h3>
          <p class="nihongo-row-subtitle">${escapeHtml(les.subtitle)}</p>
        </div>
        <div class="nihongo-row-right">
          <span class="nihongo-row-time">${les.time}</span>
          <span class="nihongo-row-arrow">&rsaquo;</span>
        </div>
      </div>
    `;
  }).join('');
}

// ====================================================
// 9 TAHAPAN BELAJAR TERSTRUKTUR (MULTI-STEP STEPPER)
// Gaya Nihongo to Japan: Mulai -> Komik -> Materi 1 -> Materi 2 -> Kaidah -> Latihan -> Kuis -> Budaya -> Selesai
// ====================================================
function getLessonSteps(lesson) {
  if (lesson.id === 1) {
    return [
      { id: 'mulai', name: 'Mulai', label: 'Langkah 1 • Mulai' },
      { id: 'komik', name: 'Komik', label: 'Langkah 2 • Komik' },
      { id: 'huruf', name: 'Huruf', label: 'Langkah 3 • Tiga Jenis Huruf' },
      { id: 'kalimat', name: 'Kalimat', label: 'Langkah 4 • Bedah Kalimat' },
      { id: 'romaji', name: 'Romaji', label: 'Langkah 5 • Romaji & Vokal' },
      { id: 'latihan', name: 'Latihan', label: 'Langkah 6 • Latihan Kosakata' },
      { id: 'kuis', name: 'Kuis', label: 'Langkah 7 • Kuis Evaluasi' },
      { id: 'tambahan', name: 'Latihan tambahan', label: 'Langkah 8 • Peta & Budaya' },
      { id: 'selesai', name: 'Selesai', label: 'Langkah 9 • Selesai' }
    ];
  }

  // Tahapan dinamis untuk Pelajaran 2 dan seterusnya
  const sec1Title = (lesson.sections && lesson.sections[0]) ? lesson.sections[0].title : 'Materi 1';
  const sec2Title = (lesson.sections && lesson.sections[1]) ? lesson.sections[1].title : 'Materi 2';
  const sec3Title = (lesson.sections && lesson.sections[2]) ? lesson.sections[2].title : 'Kaidah';

  const cleanShortName = (txt) => {
    if (!txt) return 'Materi';
    const firstPart = txt.split(':')[0].trim();
    return firstPart.length > 14 ? firstPart.substring(0, 12) + '...' : firstPart;
  };

  return [
    { id: 'mulai', name: 'Mulai', label: 'Langkah 1 • Mulai' },
    { id: 'komik', name: 'Kasus Dialog', label: 'Langkah 2 • Kasus Percakapan' },
    { id: 'huruf', name: cleanShortName(sec1Title), label: `Langkah 3 • ${sec1Title}` },
    { id: 'kalimat', name: cleanShortName(sec2Title), label: `Langkah 4 • ${sec2Title}` },
    { id: 'romaji', name: cleanShortName(sec3Title), label: `Langkah 5 • ${sec3Title}` },
    { id: 'latihan', name: 'Latihan', label: 'Langkah 6 • Latihan Kosakata' },
    { id: 'kuis', name: 'Kuis', label: 'Langkah 7 • Kuis Evaluasi' },
    { id: 'tambahan', name: 'Latihan tambahan', label: 'Langkah 8 • Wawasan Budaya' },
    { id: 'selesai', name: 'Selesai', label: 'Langkah 9 • Selesai' }
  ];
}

let currentLessonStepIndex = 0;

// Buka Pelajaran Tertentu
function openLesson(lessonId) {
  const idNum = parseInt(lessonId, 10) || 1;
  const lesson = LESSON_DETAIL_DATA[idNum] || LESSON_DETAIL_DATA[1];
  currentLessonId = lesson.id;
  currentLessonQuizAnswers = {};
  currentLessonQuizScore = 0;
  currentLessonStepIndex = 0;

  try {
    sessionStorage.setItem('sijapanese_active_lesson_id', String(lesson.id));
  } catch (e) {}

  // Alihkan tampilan ke view detail pelajaran
  const catalogView = document.getElementById('materi-catalog-view');
  const lessonView = document.getElementById('materi-lesson-view');
  if (catalogView) catalogView.classList.add('hidden');
  if (lessonView) lessonView.classList.add('active');

  // Update top title text
  const titleEl = document.getElementById('lesson-top-title-text');
  if (titleEl) {
    titleEl.textContent = lesson.title;
  }

  // Render tab stepper navigation & buka langkah 1 (Mulai)
  renderLessonStepperTabs(lesson);
  goToLessonStep(0);
}

// Tutup Pelajaran dan Kembali ke Katalog
function closeLessonToCatalog() {
  const catalogView = document.getElementById('materi-catalog-view');
  const lessonView = document.getElementById('materi-lesson-view');
  if (catalogView) catalogView.classList.remove('hidden');
  if (lessonView) lessonView.classList.remove('active');

  renderLessonCatalogList();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render Bilah Tab Stepper Horizontal (Gaya Nihongo to Japan)
function renderLessonStepperTabs(lesson) {
  const tabsContainer = document.getElementById('nihongo-stepper-tabs');
  if (!tabsContainer) return;

  const steps = getLessonSteps(lesson);

  tabsContainer.innerHTML = steps.map((step, idx) => {
    return `
      <button type="button" class="nihongo-step-tab-btn ${idx === currentLessonStepIndex ? 'active' : ''}" id="nihongo-step-btn-${idx}" onclick="goToLessonStep(${idx})">
        <span>${escapeHtml(step.name)}</span>
      </button>
    `;
  }).join('');
}

// Berpindah Antar Langkah Pembelajaran
function goToLessonStep(stepIndex) {
  const lesson = LESSON_DETAIL_DATA[currentLessonId] || LESSON_DETAIL_DATA[1];
  const steps = getLessonSteps(lesson);

  if (stepIndex < 0) stepIndex = 0;
  if (stepIndex >= steps.length) stepIndex = steps.length - 1;

  currentLessonStepIndex = stepIndex;
  const stepDef = steps[stepIndex];

  // Update tab aktif
  steps.forEach((_, idx) => {
    const btn = document.getElementById(`nihongo-step-btn-${idx}`);
    if (btn) {
      if (idx === currentLessonStepIndex) {
        btn.classList.add('active');
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        btn.classList.remove('active');
      }
    }
  });

  // Render konten langkah terpilih
  const bodyContainer = document.getElementById('lesson-active-step-container');
  if (!bodyContainer) return;

  let stepContentHtml = '';

  switch (stepDef.id) {
    case 'mulai':
      stepContentHtml = renderStepMulai(lesson);
      break;
    case 'komik':
      stepContentHtml = renderStepKomik(lesson);
      break;
    case 'huruf':
      stepContentHtml = renderStepHuruf(lesson);
      break;
    case 'kalimat':
      stepContentHtml = renderStepKalimat(lesson);
      break;
    case 'romaji':
      stepContentHtml = renderStepRomaji(lesson);
      break;
    case 'latihan':
      stepContentHtml = renderStepLatihan(lesson);
      break;
    case 'kuis':
      stepContentHtml = renderStepKuis(lesson);
      break;
    case 'tambahan':
      stepContentHtml = renderStepTambahan(lesson);
      break;
    case 'selesai':
      stepContentHtml = renderStepSelesai(lesson);
      break;
    default:
      stepContentHtml = renderStepMulai(lesson);
  }

  // Bottom Stepper Footer Navigasi
  const isFirst = currentLessonStepIndex === 0;
  const isLast = currentLessonStepIndex === steps.length - 1;
  const nextStepName = !isLast ? steps[currentLessonStepIndex + 1].name : 'Selesai';
  const nextLessonId = lesson.nextLessonId || (lesson.id + 1);

  const bottomNavHtml = `
    <div class="nihongo-step-bottom-nav">
      <button type="button" class="btn-step-nav-prev" onclick="goToLessonStep(${currentLessonStepIndex - 1})" ${isFirst ? 'disabled' : ''}>
        <span>&larr; Langkah Sebelumnya</span>
      </button>
      <div class="step-nav-indicator">
        <span>Langkah ${currentLessonStepIndex + 1} dari ${steps.length} (${escapeHtml(stepDef.name)})</span>
      </div>
      <button type="button" class="btn-step-nav-next" onclick="${isLast ? `openLesson(${nextLessonId})` : `goToLessonStep(${currentLessonStepIndex + 1})`}">
        <span>${isLast ? `Lanjut ke Pelajaran ${nextLessonId}` : `Lanjut: ${escapeHtml(nextStepName)}`} &rarr;</span>
      </button>
    </div>
  `;

  bodyContainer.innerHTML = `
    <div class="nihongo-step-body" id="nihongo-step-body">
      ${stepContentHtml}
      ${bottomNavHtml}
    </div>
  `;

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Post-render init jika langkah peta di Pelajaran 1
  if (stepDef.id === 'tambahan' && lesson.id === 1) {
    setTimeout(() => {
      selectJapanCity(activeJapanCityId);
    }, 50);
  }
}

// ----------------------------------------------------
// STEP 1: MULAI (OVERVIEW & TARGET)
// ----------------------------------------------------
function renderStepMulai(lesson) {
  const overviewHtml = (lesson.overview || []).map(item => `<li>${escapeHtml(item)}</li>`).join('');

  return `
    <div class="step-header-banner">
      <span class="step-label-pill">Langkah 1 • Mulai</span>
      <h2 class="step-main-title">${escapeHtml(lesson.title)}</h2>
      <p class="step-desc-text">${escapeHtml(lesson.subtitle)}</p>
    </div>

    <div class="nihongo-study-card">
      <div class="nihongo-meta-row" style="margin-bottom:1.2rem;">
        <span class="nihongo-tag-chip">${escapeHtml(lesson.level || 'N5')} Dasar</span>
        <span class="nihongo-time-chip">${lesson.estMinutes || 15} Menit Pelajaran</span>
        <span class="nihongo-points-chip">Reward Kuis: +${lesson.rewardPoints || 50} Poin</span>
      </div>

      <div class="study-culture-box" style="margin-bottom:1.8rem; background:#FAF6F0; border-color:#E2D7CC;">
        <div class="study-culture-title" style="color:#64554B;">Tujuan Pembelajaran Modul Ini:</div>
        <ul style="margin:0 0 0 1.2rem; color:#4A3B32; font-size:0.92rem; line-height:1.7;">
          ${overviewHtml}
        </ul>
      </div>

      <!-- Tokoh Cerita Pembelajaran -->
      <div style="background:#FFFFFF; border:1.5px solid #E2E8F0; border-radius:16px; padding:1.4rem; margin-bottom:1.8rem;">
        <h4 style="margin:0 0 0.8rem 0; font-size:1.05rem; font-weight:800; color:#0F172A;">Tokoh Petualangan di Jepang:</h4>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:1rem;">
          <div style="display:flex; align-items:center; gap:0.8rem; padding:0.6rem; background:#F8FAFC; border-radius:12px;">
            <div style="width:40px; height:40px; border-radius:50%; background:#FFF7ED; border:1.5px solid #EA580C; display:flex; align-items:center; justify-content:center; font-weight:800; color:#EA580C;">R</div>
            <div>
              <div style="font-weight:800; font-size:0.92rem; color:#0F172A;">Rin (Siswa)</div>
              <div style="font-size:0.78rem; color:#64748B;">Anjing shiba ceria yang belajar bahasa Jepang</div>
            </div>
          </div>
          <div style="display:flex; align-items:center; gap:0.8rem; padding:0.6rem; background:#F8FAFC; border-radius:12px;">
            <div style="width:40px; height:40px; border-radius:50%; background:#FEE2E2; border:1.5px solid #EF4444; display:flex; align-items:center; justify-content:center; font-weight:800; color:#DC2626;">G</div>
            <div>
              <div style="font-weight:800; font-size:0.92rem; color:#0F172A;">Guru Kucing (Sensei Tanaka)</div>
              <div style="font-size:0.78rem; color:#64748B;">Guru pemandu bijak berbahasa Jepang</div>
            </div>
          </div>
        </div>
      </div>

      <div class="study-cta-box" style="margin-top:1.5rem;">
        <div class="study-cta-title">Siap Memulai Pelajaran Ini?</div>
        <div class="study-cta-desc">Pelajari langkah demi langkah dari pengantar kasus hingga latihan interaktif dan klaim bonus poinnya.</div>
        <button type="button" class="btn-step-nav-next" style="padding:1rem 2rem; font-size:1rem;" onclick="goToLessonStep(1)">
          <span>Mulai Belajar (Lanjut ke Kasus) &rarr;</span>
        </button>
      </div>
    </div>
  `;
}

// ----------------------------------------------------
// STEP 2: KOMIK / KASUS DIALOG
// ----------------------------------------------------
function renderStepKomik(lesson) {
  // Hanya gunakan komik bawaan jika Pelajaran 1
  if (lesson.id === 1) {
    const sourceEl = document.getElementById('step-content-komik');
    let comicHtml = '';
    if (sourceEl) comicHtml = sourceEl.innerHTML;

    return `
      <div class="step-header-banner">
        <span class="step-label-pill">Langkah 2 • Komik</span>
        <h2 class="step-main-title">Pengalaman Pertama Rin di Jepang</h2>
        <p class="step-desc-text">Rin si shiba akhirnya tiba di Jepang, dengan surat tua kakeknya dan sebuah foto lama di dalam ranselnya!</p>
      </div>

      <div class="nihongo-study-card">
        ${comicHtml}
      </div>
    `;
  }

  // Pelajaran 2 dan seterusnya: Render kasus percakapan Rin & Guru Kucing yang sesuai modul
  return renderLessonDynamicComic(lesson);
}

// Komik Kasus Percakapan Dinamis untuk Pelajaran selain 1
function renderLessonDynamicComic(lesson) {
  let comicTitle = `Situasi Percakapan: ${lesson.title}`;
  let panel1Tag = "Situasi Rin di Jepang";
  let panel1Rin = "Guru Kucing, bagaimana cara menggunakannya dalam situasi nyata?";
  let panel1Sensei = "Perhatikan pola kalimat dan situasinya berikut ini, Rin!";
  let panel2Rin = "Wah, ternyata polanya sangat jelas dan mudah dipahami!";
  let panel2Sensei = "Tepat sekali! Sekarang mari kita bedah satu per satu di langkah selanjutnya.";

  if (lesson.id === 2) {
    comicTitle = "Rin Mengenal Aksara Asli Hiragana";
    panel1Tag = "Di Kedai Tradisional Tokyo";
    panel1Rin = "Huruf yang melengkung halus ini cara bacanya bagaimana, Guru Kucing?";
    panel1Sensei = "Itu Hiragana! Huruf asli Jepang untuk kata seperti すし (sushi) dan ありがとう (arigatou)!";
    panel2Rin = "Bentuknya melengkung lentur ya, aku ingin bisa membaca semuanya!";
    panel2Sensei = "Ada 46 huruf dasar dari あ sampai ん. Ayo kita kuasai bersama!";
  } else if (lesson.id === 3) {
    comicTitle = "Rin Menemukan Kata Serapan Katakana";
    panel1Tag = "Di Depan Kafe Modern";
    panel1Rin = "Huruf yang bersudut kotak kaku ini berbeda dengan Hiragana kemarin...";
    panel1Sensei = "Tepat! Itu Katakana! Dipakai untuk kata serapan asing seperti コーヒー (kopi) dan パン (roti)!";
    panel2Rin = "Garis lurus strip panjang ー itu fungsinya apa?";
    panel2Sensei = "Itu tanda vokal panjang dua ketukan! Ko-o-hi-i!";
  } else if (lesson.id === 4) {
    comicTitle = "Perkenalan Pertama Rin di Kelas";
    panel1Tag = "Bertemu Teman Baru";
    panel1Rin = "Halo! Namaku Rin dari Indonesia. Bagaimana cara memperkenalkan diri secara sopan di Jepang?";
    panel1Sensei = "Gunakan pola sakti: わたし は リン です (Watashi wa Rin desu)!";
    panel2Rin = "Kalau mau bertanya nama teman bagaimana?";
    panel2Sensei = "Tinggal tambahkan 'ka' di ujung kalimat: おなまえ は なん ですか？";
  } else if (lesson.id === 5) {
    comicTitle = "Rin Belajar Salam Sopan Santun (Aisatsu)";
    panel1Tag = "Pagi Hari di Tokyo";
    panel1Rin = "Guru Kucing, selamat pagi! Di Jepang salamnya apa ya?";
    panel1Sensei = "Ucapkan おはようございます (Ohayou gozaimasu) sambil membungkuk sopan 15 derajat!";
    panel2Rin = "Kalau tidak sengaja menyenggol orang di stasiun?";
    panel2Sensei = "Gunakan kata ajaib すみません (Sumimasen)! Itu kata penyelamat di Jepang!";
  } else if (lesson.id === 6) {
    comicTitle = "Rin Memperkenalkan Diri dengan Pola A wa B desu";
    panel1Tag = "Pola A wa B desu";
    panel1Rin = "わたし は がくせい です！ Saya adalah seorang murid!";
    panel1Sensei = "Bagus sekali Rin! Ingat, partikel は di sini wajib dilafalkan 'WA' bukan 'ha'!";
    panel2Rin = "Kalau bukan murid, bilangnya bagaimana?";
    panel2Sensei = "Ganti 'desu' menjadi 'ja arimasen': がくせい じゃ ありません!";
  } else if (lesson.id === 7) {
    comicTitle = "Payung Tertinggal: Ini, Itu, atau Sana?";
    panel1Tag = "Di Kedai Teh";
    panel1Rin = "Guru Kucing! Ada payung tertinggal di dekat mejaku. Kore wa dare no kasa desu ka?";
    panel1Sensei = "Pintar! Karena payungnya ada di dekatmu, gunakan これ (Kore - Ini)!";
    panel2Rin = "Kalau payung yang di dekat Guru Kucing?";
    panel2Sensei = "Gunakan それ (Sore - Itu)! Dan kalau jauh di seberang sana, gunakan あれ (Are)!";
  } else if (lesson.id === 8) {
    comicTitle = "Rin Bertanya Lokasi dan Benda";
    panel1Tag = "Di Pusat Kota";
    panel1Rin = "Guru Kucing, aku ingin bertanya letak dan nama benda, kata tanyanya apa saja?";
    panel1Sensei = "なに (Nani) untuk apa, だれ (Dare) untuk siapa, どこ (Doko) untuk di mana, dan いつ (Itsu) untuk kapan!";
    panel2Rin = "Kalau ditambah partikel 'mo'?";
    panel2Sensei = "Artinya menjadi menyeluruh: どこも (di mana pun), だれも (siapa pun)!";
  } else if (lesson.id === 9) {
    comicTitle = "Rin Mencari Toilet di Stasiun Shinjuku";
    panel1Tag = "Stasiun Kereta Ramai";
    panel1Rin = "Gawat Guru Kucing, stasiun ini besar sekali! Toilet ada di sebelah mana ya?";
    panel1Sensei = "Tanyakan ke petugas: すみません、トイレ は どこ ですか？";
    panel2Rin = "Petugas menjawab: あそこ ですよ (Di sebelah sana)!";
    panel2Sensei = "Tepat! Koko (sini), Soko (situ), Asoko (sana)! Mudah kan?";
  } else if (lesson.id === 10) {
    comicTitle = "Rin Membeli Suvenir dan Menanyakan Harga";
    panel1Tag = "Toko Suvenir Asakusa";
    panel1Rin = "Gantungan kunci Shiba ini lucu sekali! Berapa harganya ya?";
    panel1Sensei = "Tunjuk barangnya dan tanyakan: これ は いくら ですか？ (Kore wa ikura desu ka?)";
    panel2Rin = "Kasir bilang: さんびゃく えん (300 Yen)!";
    panel2Sensei = "Uang Yen dibaca 'En'! Keluarkan 3 koin seratus yen!";
  } else {
    comicTitle = `Situasi Cerita: ${lesson.title}`;
    panel1Tag = "Situasi Rin di Jepang";
    panel1Rin = `Guru Kucing, bagaimana cara mempraktikkan materi ${lesson.title} ini?`;
    panel1Sensei = "Ayo perhatikan pola dasar dan contoh dialog yang sering digunakan oleh penutur asli Jepang!";
    panel2Rin = "Siap Guru Kucing, aku akan mendengarkan pelafalan audionya!";
    panel2Sensei = "Bagus sekali! Latih secara rutin agar lancar saat traveling ke Jepang.";
  }

  return `
    <div class="step-header-banner">
      <span class="step-label-pill">Langkah 2 • Kasus Nyata</span>
      <h2 class="step-main-title">${escapeHtml(comicTitle)}</h2>
      <p class="step-desc-text">Ikuti situasi dialog nyata Rin si shiba dan Guru Kucing saat mempraktikkan materi ini di Jepang:</p>
    </div>

    <div class="nihongo-study-card">
      <div style="display:flex; flex-direction:column; gap:1.2rem;">
        <!-- Panel 1 -->
        <div style="background:#FFFFFF; border:2px solid #E2E8F0; border-radius:18px; padding:1.3rem; box-shadow:0 2px 8px rgba(15,23,42,0.04);">
          <div style="display:inline-block; font-size:0.75rem; font-weight:800; background:#FFF7ED; color:#C2410C; border:1px solid #FFEDD5; padding:0.2rem 0.65rem; border-radius:9999px; margin-bottom:0.8rem; text-transform:uppercase;">${escapeHtml(panel1Tag)}</div>
          <div style="display:flex; flex-direction:column; gap:0.8rem;">
            <div style="display:flex; gap:0.8rem; align-items:flex-start;">
              <div style="width:36px; height:36px; border-radius:50%; background:#FFF7ED; border:1.5px solid #EA580C; display:flex; align-items:center; justify-content:center; font-weight:800; color:#EA580C; font-size:0.85rem; flex-shrink:0;">Rin</div>
              <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:12px; padding:0.8rem 1rem; flex:1;">
                <div style="font-size:0.78rem; font-weight:800; color:#EA580C; margin-bottom:0.2rem;">Rin (Siswa)</div>
                <div style="font-size:0.95rem; font-weight:600; color:#0F172A; line-height:1.5;">${escapeHtml(panel1Rin)}</div>
              </div>
            </div>
            <div style="display:flex; gap:0.8rem; align-items:flex-start;">
              <div style="width:36px; height:36px; border-radius:50%; background:#FEF2F2; border:1.5px solid #EF4444; display:flex; align-items:center; justify-content:center; font-weight:800; color:#DC2626; font-size:0.85rem; flex-shrink:0;">Guru</div>
              <div style="background:#FFFBFB; border:1px solid #FEE2E2; border-radius:12px; padding:0.8rem 1rem; flex:1;">
                <div style="font-size:0.78rem; font-weight:800; color:#DC2626; margin-bottom:0.2rem;">Guru Kucing (Sensei Tanaka)</div>
                <div style="font-size:0.95rem; font-weight:600; color:#0F172A; line-height:1.5;">${escapeHtml(panel1Sensei)}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Panel 2 -->
        <div style="background:#FFFFFF; border:2px solid #E2E8F0; border-radius:18px; padding:1.3rem; box-shadow:0 2px 8px rgba(15,23,42,0.04);">
          <div style="display:inline-block; font-size:0.75rem; font-weight:800; background:#ECFDF5; color:#065F46; border:1px solid #A7F3D0; padding:0.2rem 0.65rem; border-radius:9999px; margin-bottom:0.8rem; text-transform:uppercase;">Penyelesaian Kasus</div>
          <div style="display:flex; flex-direction:column; gap:0.8rem;">
            <div style="display:flex; gap:0.8rem; align-items:flex-start;">
              <div style="width:36px; height:36px; border-radius:50%; background:#FFF7ED; border:1.5px solid #EA580C; display:flex; align-items:center; justify-content:center; font-weight:800; color:#EA580C; font-size:0.85rem; flex-shrink:0;">Rin</div>
              <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:12px; padding:0.8rem 1rem; flex:1;">
                <div style="font-size:0.78rem; font-weight:800; color:#EA580C; margin-bottom:0.2rem;">Rin (Siswa)</div>
                <div style="font-size:0.95rem; font-weight:600; color:#0F172A; line-height:1.5;">${escapeHtml(panel2Rin)}</div>
              </div>
            </div>
            <div style="display:flex; gap:0.8rem; align-items:flex-start;">
              <div style="width:36px; height:36px; border-radius:50%; background:#FEF2F2; border:1.5px solid #EF4444; display:flex; align-items:center; justify-content:center; font-weight:800; color:#DC2626; font-size:0.85rem; flex-shrink:0;">Guru</div>
              <div style="background:#FFFBFB; border:1px solid #FEE2E2; border-radius:12px; padding:0.8rem 1rem; flex:1;">
                <div style="font-size:0.78rem; font-weight:800; color:#DC2626; margin-bottom:0.2rem;">Guru Kucing (Sensei Tanaka)</div>
                <div style="font-size:0.95rem; font-weight:600; color:#0F172A; line-height:1.5;">${escapeHtml(panel2Sensei)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ----------------------------------------------------
// STEP 3: MATERI UTAMA 1 (HURUF UNTUK MODUL 1, TOPIK 1 UNTUK MODUL LAIN)
// ----------------------------------------------------
function renderStepHuruf(lesson) {
  // Hanya gunakan template statis jika Pelajaran 1
  if (lesson.id === 1) {
    const sourceEl = document.getElementById('step-content-huruf');
    if (sourceEl) {
      return `
        <div class="step-header-banner">
          <span class="step-label-pill">Langkah 3 • Huruf</span>
          <h2 class="step-main-title">Tiga Jenis Huruf dalam Bahasa Jepang</h2>
          <p class="step-desc-text">Mengenal peran Hiragana, Katakana, dan simbol piktogram alam Kanji dasar.</p>
        </div>
        <div class="nihongo-study-card">
          ${sourceEl.innerHTML}
        </div>
      `;
    }
  }

  // Pelajaran 2 dan seterusnya: Render Section 1 dari pelajaran tersebut!
  const sec = (lesson.sections && lesson.sections[0]) ? lesson.sections[0] : null;
  return renderLessonSectionStep(lesson, sec, 3, 'Materi Pokok 1');
}

// ----------------------------------------------------
// STEP 4: MATERI UTAMA 2 / POLA KALIMAT
// ----------------------------------------------------
function renderStepKalimat(lesson) {
  // Hanya gunakan template statis jika Pelajaran 1
  if (lesson.id === 1) {
    const sourceEl = document.getElementById('step-content-kalimat');
    if (sourceEl) {
      return `
        <div class="step-header-banner">
          <span class="step-label-pill">Langkah 4 • Kalimat</span>
          <h2 class="step-main-title">Tiga jenis huruf dalam satu kalimat</h2>
          <p class="step-desc-text">Tekan tombol di bawah untuk menyorot satu jenis huruf saja, lalu pelajari peran masing-masing unsur.</p>
        </div>
        <div class="nihongo-study-card">
          ${sourceEl.innerHTML}
        </div>
      `;
    }
  }

  // Pelajaran 2 dan seterusnya: Render Section 2 dari pelajaran tersebut!
  const sec = (lesson.sections && lesson.sections[1]) ? lesson.sections[1] : null;
  return renderLessonSectionStep(lesson, sec, 4, 'Pola & Struktur Kalimat');
}

// ----------------------------------------------------
// STEP 5: MATERI TAMBAHAN / TATA BAHASA & TIPS
// ----------------------------------------------------
function renderStepRomaji(lesson) {
  if (lesson.id === 1) {
    return `
      <div class="step-header-banner">
        <span class="step-label-pill">Langkah 5 • Romaji &amp; Vokal</span>
        <h2 class="step-main-title">Kedudukan Romaji dalam Bahasa Jepang</h2>
        <p class="step-desc-text">Romaji (ローマ字) adalah transkripsi bunyi aksara Jepang ke huruf latin (a, b, c). Romaji bukan huruf Jepang sejati!</p>
      </div>

      <div class="nihongo-study-card">
        <div style="background:#FFFBEB; border:1.5px solid #FCD34D; border-radius:16px; padding:1.6rem; margin-bottom:1.8rem;">
          <h4 style="font-size:1.1rem; color:#92400E; margin:0 0 0.6rem 0;">Catatan Penting untuk Siswa di Kelas:</h4>
          <p style="color:#78350F; line-height:1.6; margin:0 0 0.8rem 0;">
            Masyarakat Jepang <strong>tidak pernah menggunakan Romaji</strong> untuk komunikasi resmi, papan nama, atau buku bacaan. Romaji hanya berfungsi sebagai alat bantu fonetik di awal belajar atau saat mengetik di keyboard smartphone.
          </p>
          <div style="background:#FEF3C7; border:1px solid #FDE68A; border-radius:10px; padding:0.8rem 1rem; color:#92400E; font-size:0.88rem; font-weight:700;">
            Kunci Sukses: Jangan terlalu lama bergantung pada Romaji. Di Pelajaran 2, kita akan langsung menaklukkan Hiragana bersama-sama!
          </div>
        </div>

        <h3 style="font-size:1.2rem; font-weight:800; color:#0F172A; margin:0 0 0.4rem 0;">5 Vokal Murni Bahasa Jepang</h3>
        <p style="color:#64748B; font-size:0.9rem; margin:0 0 1rem 0;">Tekan tombol audio di bawah untuk mendengar pelafalan jelas masing-masing vokal:</p>

        <div class="romaji-vowels-grid">
          <div class="romaji-vowel-card" onclick="speakJapanese('あ')">
            <div class="romaji-vowel-kana">あ</div>
            <div class="romaji-vowel-latin">a</div>
            <div class="romaji-vowel-tip">Mulut terbuka santai seperti 'ayah'.</div>
            <button type="button" class="btn-vowel-audio">Dengar: a</button>
          </div>
          <div class="romaji-vowel-card" onclick="speakJapanese('い')">
            <div class="romaji-vowel-kana">い</div>
            <div class="romaji-vowel-latin">i</div>
            <div class="romaji-vowel-tip">Sudut bibir melebar jernih seperti 'ikan'.</div>
            <button type="button" class="btn-vowel-audio">Dengar: i</button>
          </div>
          <div class="romaji-vowel-card" onclick="speakJapanese('う')">
            <div class="romaji-vowel-kana">う</div>
            <div class="romaji-vowel-latin">u</div>
            <div class="romaji-vowel-tip">Bibir rileks tidak moncong seperti 'udang'.</div>
            <button type="button" class="btn-vowel-audio">Dengar: u</button>
          </div>
          <div class="romaji-vowel-card" onclick="speakJapanese('え')">
            <div class="romaji-vowel-kana">え</div>
            <div class="romaji-vowel-latin">e</div>
            <div class="romaji-vowel-tip">Bunyi bersih seperti 'ember'.</div>
            <button type="button" class="btn-vowel-audio">Dengar: e</button>
          </div>
          <div class="romaji-vowel-card" onclick="speakJapanese('お')">
            <div class="romaji-vowel-kana">お</div>
            <div class="romaji-vowel-latin">o</div>
            <div class="romaji-vowel-tip">Mulut bulat bersih seperti 'orang'.</div>
            <button type="button" class="btn-vowel-audio">Dengar: o</button>
          </div>
        </div>
      </div>
    `;
  }

  // Pelajaran 2 dan seterusnya: Render Section 3 jika ada, atau tips tata bahasa
  const sec = (lesson.sections && lesson.sections[2]) ? lesson.sections[2] : null;
  if (sec) {
    return renderLessonSectionStep(lesson, sec, 5, 'Kaidah Tambahan');
  }

  return `
    <div class="step-header-banner">
      <span class="step-label-pill">Langkah 5 • Tata Bahasa &amp; Tips</span>
      <h2 class="step-main-title">Kunci Pemahaman: ${escapeHtml(lesson.title)}</h2>
      <p class="step-desc-text">Rangkuman penting yang perlu dipahami sebelum mengerjakan latihan soal kuis:</p>
    </div>

    <div class="nihongo-study-card">
      <div style="background:#FFFBEB; border:1.5px solid #FCD34D; border-radius:16px; padding:1.6rem; margin-bottom:1.5rem;">
        <h4 style="font-size:1.1rem; color:#92400E; margin:0 0 0.6rem 0;">Tips Guru Master:</h4>
        <p style="color:#78350F; line-height:1.6; margin:0 0 0.8rem 0;">
          ${escapeHtml(lesson.cultureTip || 'Pahami pola kalimat dengan baik dan lafalkan dialog dengan suara lantang agar kebiasaan berbicara terasah secara alami.')}
        </p>
        <div style="background:#FEF3C7; border:1px solid #FDE68A; border-radius:10px; padding:0.8rem 1rem; color:#92400E; font-size:0.88rem; font-weight:700;">
          Latih pendengaranmu dengan menekan tombol audio pada setiap kalimat sebelum melanjutkan ke kuis kuis evaluasi.
        </div>
      </div>
    </div>
  `;
}

// Helper Render Section Standar Pelajaran
function renderLessonSectionStep(lesson, sec, stepNum, fallbackTitle) {
  if (!sec) {
    return `
      <div class="step-header-banner">
        <span class="step-label-pill">Langkah ${stepNum}</span>
        <h2 class="step-main-title">${escapeHtml(fallbackTitle)}</h2>
      </div>
      <div class="nihongo-study-card">
        <p style="color:#64748B;">Materi pelajaran sedang disiapkan oleh guru.</p>
      </div>
    `;
  }

  let formulaHtml = '';
  if (sec.formula) {
    formulaHtml = `
      <div class="grammar-formula-box" style="background:#FFFBEB; border:1.5px solid #FCD34D; border-radius:14px; padding:1.2rem 1.4rem; margin:1.2rem 0;">
        <div style="font-size:0.8rem; font-weight:800; text-transform:uppercase; color:#92400E; margin-bottom:0.3rem;">Rumus Pola Kalimat:</div>
        <div style="font-size:1.25rem; font-weight:800; color:#78350F; font-family:'Noto Sans JP', sans-serif; margin-bottom:0.4rem;">${escapeHtml(sec.formula)}</div>
        ${sec.formulaDesc ? `<div style="font-size:0.88rem; color:#92400E; line-height:1.5;">${escapeHtml(sec.formulaDesc)}</div>` : ''}
      </div>
    `;
  }

  let dialoguesHtml = '';
  if (sec.dialogues && sec.dialogues.length > 0) {
    dialoguesHtml = `
      <div class="section-dialogue-list" style="margin-top:1.5rem; display:flex; flex-direction:column; gap:0.9rem;">
        ${sec.dialogues.map(d => `
          <div class="study-dialogue-card" onclick="speakJapanese('${escapeHtml(d.audio || d.jp)}')" style="cursor:pointer; background:#FFFFFF; border:1.5px solid #E2E8F0; border-radius:14px; padding:1.1rem 1.3rem; display:flex; align-items:center; justify-content:space-between; gap:1rem; transition:all 0.2s;">
            <div style="flex:1;">
              <div style="font-family:'Noto Sans JP', sans-serif; font-size:1.35rem; font-weight:800; color:#0F172A; margin-bottom:0.25rem;">${escapeHtml(d.jp)}</div>
              <div style="font-size:0.86rem; font-weight:700; color:#EA580C; margin-bottom:0.3rem;">${escapeHtml(d.romaji)}</div>
              <div style="font-size:0.92rem; color:#475569;">${escapeHtml(d.meaning)}</div>
            </div>
            <button type="button" class="btn-latihan-speaker" onclick="event.stopPropagation(); speakJapanese('${escapeHtml(d.audio || d.jp)}')">Audio</button>
          </div>
        `).join('')}
      </div>
    `;
  }

  return `
    <div class="step-header-banner">
      <span class="step-label-pill">Langkah ${stepNum} • ${escapeHtml(sec.title || fallbackTitle)}</span>
      <h2 class="step-main-title">${escapeHtml(sec.title || fallbackTitle)}</h2>
      <p class="step-desc-text">${escapeHtml(sec.desc || '')}</p>
    </div>

    <div class="nihongo-study-card">
      ${formulaHtml}
      ${dialoguesHtml}
    </div>
  `;
}

// ----------------------------------------------------
// STEP 6: LATIHAN (LATIHAN KOSAKATA INTERAKTIF)
// ----------------------------------------------------
function renderStepLatihan(lesson) {
  const vocabList = lesson.vocabList || [];
  const cardsHtml = vocabList.map(v => {
    return `
      <div class="latihan-vocab-card" onclick="speakJapanese('${escapeHtml(v.audio || v.jp)}')">
        <div>
          <div class="latihan-vocab-jp">${escapeHtml(v.jp)}</div>
          <div class="latihan-vocab-romaji">${escapeHtml(v.romaji)}</div>
          <div class="latihan-vocab-meaning">${escapeHtml(v.meaning)}</div>
        </div>
        <button type="button" class="btn-latihan-speaker">Audio</button>
      </div>
    `;
  }).join('');

  return `
    <div class="step-header-banner">
      <span class="step-label-pill">Langkah 6 • Latihan</span>
      <h2 class="step-main-title">Latihan Interaktif Kosakata Modul Ini</h2>
      <p class="step-desc-text">Klik kartu kosakata di bawah untuk mendengar pelafalan asli dan mengingat maknanya sebelum mengerjakan kuis evaluasi pemahaman:</p>
    </div>

    <div class="nihongo-study-card">
      <div class="latihan-vocab-grid">
        ${cardsHtml}
      </div>
    </div>
  `;
}

// ----------------------------------------------------
// STEP 7: KUIS (KUIS PEMAHAMAN BERHADIAH POIN)
// ----------------------------------------------------
function renderStepKuis(lesson) {
  const quizList = lesson.quiz || [];
  const questionsHtml = quizList.map((item, qIdx) => {
    return `
      <div class="lesson-quiz-item-card" id="lesson-quiz-card-${qIdx}">
        <div class="quiz-item-header">
          <span class="quiz-q-badge">Soal ${qIdx + 1} dari ${quizList.length}</span>
        </div>
        <div class="quiz-q-prompt">${escapeHtml(item.q)}</div>

        ${item.audio ? `
          <button type="button" class="btn-quiz-chokai-audio" onclick="speakJapanese('${escapeHtml(item.audio)}')">
            <span>Dengar Audio Pelafalan</span>
          </button>
        ` : ''}

        <div class="quiz-options-list">
          ${item.options.map((optText, optIdx) => `
            <button type="button" class="btn-quiz-option" id="btn-quiz-opt-${qIdx}-${optIdx}" onclick="handleLessonQuizAnswer(${qIdx}, ${optIdx})">
              <span>${escapeHtml(optText)}</span>
            </button>
          `).join('')}
        </div>

        <div class="quiz-item-feedback" id="quiz-feedback-${qIdx}"></div>
      </div>
    `;
  }).join('');

  return `
    <div class="step-header-banner">
      <span class="step-label-pill">Langkah 7 • Kuis</span>
      <h2 class="step-main-title">Kuis Pemahaman Modul 1</h2>
      <p class="step-desc-text">Pilihlah salah satu jawaban yang paling tepat. Hasil penilaian akan otomatis tercatat ke laporan evaluasi Master Guru.</p>
    </div>

    <div class="nihongo-quiz-wrapper">
      <div class="nihongo-quiz-header" style="background:#FFFFFF; border:1.5px solid #E2E8F0; border-radius:16px; padding:1.2rem; margin-bottom:1.5rem; display:flex; align-items:center; justify-content:space-between;">
        <div>
          <h4 style="margin:0 0 0.2rem 0; font-size:1.1rem; font-weight:800; color:#0F172A;">Evaluasi Pemahaman</h4>
          <p style="margin:0; font-size:0.85rem; color:#64748B;">Selesaikan ${quizList.length} soal kuis untuk mengklaim reward poin.</p>
        </div>
        <div class="quiz-score-live-badge">
          <span>Nilai: </span>
          <strong id="lesson-quiz-live-score">0</strong> / 100
        </div>
      </div>

      <div class="lesson-quiz-questions-wrap">
        ${questionsHtml}
      </div>

      <div class="quiz-final-actions-card" id="quiz-final-actions-card">
        <div class="study-cta-title">Kuis Selesai!</div>
        <div class="study-cta-desc" id="quiz-final-summary-desc">Kerja bagus! Seluruh soal kuis telah selesai dikerjakan.</div>
        
        <div class="quiz-final-stats-row">
          <div class="quiz-final-stat-col">
            <span class="quiz-final-stat-val text-green" id="final-stat-correct">0</span>
            <span class="quiz-final-stat-label">Jawaban Benar</span>
          </div>
          <div class="quiz-final-stat-col">
            <span class="quiz-final-stat-val text-red" id="final-stat-wrong">0</span>
            <span class="quiz-final-stat-label">Jawaban Salah</span>
          </div>
          <div class="quiz-final-stat-col">
            <span class="quiz-final-stat-val text-amber" id="final-stat-points">+0 Poin</span>
            <span class="quiz-final-stat-label">Poin Didapat</span>
          </div>
        </div>

        <div class="quiz-final-btns">
          <button type="button" class="btn-quiz-action-retry" onclick="restartLessonQuiz()">
            <span>Ulangi Kuis</span>
          </button>
          <button type="button" class="btn-step-nav-next" onclick="goToLessonStep(7)">
            <span>Lanjut: Peta Kota &amp; Budaya &rarr;</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

// ----------------------------------------------------
// STEP 8: LATIHAN TAMBAHAN & BUDAYA (PETA KOTA & OJIGI)
// ----------------------------------------------------
function renderStepTambahan(lesson) {
  const cities = getActiveJapanCities();
  const cityPills = cities.map(c => `
    <button type="button" id="japan-city-btn-${c.id}" class="japan-city-tab-btn ${c.id === activeJapanCityId ? 'active' : ''}" onclick="selectJapanCity('${c.id}')">
      <span>${escapeHtml(c.name)} (${escapeHtml(c.kanji)})</span>
    </button>
  `).join('');

  const mapPins = cities.map(c => `
    <g id="japan-pin-${c.id}" class="japan-map-pin ${c.id === activeJapanCityId ? 'active' : ''}" onclick="selectJapanCity('${c.id}')" style="cursor:pointer">
      <circle cx="${c.pinX}" cy="${c.pinY}" r="11" class="pin-circle-halo"></circle>
      <circle cx="${c.pinX}" cy="${c.pinY}" r="6.5" class="pin-circle-outer"></circle>
      <circle cx="${c.pinX}" cy="${c.pinY}" r="3" class="pin-circle-inner"></circle>
      <text x="${c.pinX}" y="${c.pinY - 10}" class="pin-text-label" text-anchor="middle">${escapeHtml(c.name)}</text>
    </g>
  `).join('');

  return `
    <div class="step-header-banner">
      <span class="step-label-pill">Langkah 8 • Latihan Tambahan &amp; Budaya</span>
      <h2 class="step-main-title">Eksplorasi Peta Kota Jepang &amp; Wawasan Budaya</h2>
      <p class="step-desc-text">Klik titik nama kota pada peta untuk melihat profil kuliner dan mendengar pelafalan aslinya:</p>
    </div>

    <div class="nihongo-study-card">
      <div class="japan-map-interactive-module">
        <div class="japan-map-top-bar">
          <span class="japan-map-hint">Pilih kota pada tombol tab atau klik pin di peta:</span>
          <div class="japan-cities-tabs-bar">
            ${cityPills}
          </div>
        </div>

        <div class="japan-map-display-layout">
          <div class="japan-map-svg-wrap">
            <svg viewBox="140 10 460 410" class="japan-map-svg" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="islandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#E2E8F0"/>
                  <stop offset="100%" stop-color="#CBD5E1"/>
                </linearGradient>
              </defs>

              <!-- Pulau Hokkaido (Utara) -->
              <path class="japan-island-path island-hokkaido" d="M 460 70 Q 485 30 540 45 Q 590 60 575 105 Q 545 135 500 115 Q 460 110 455 90 Z" />
              <text x="515" y="60" class="island-watermark-text" text-anchor="middle">HOKKAIDO</text>

              <!-- Pulau Honshu (Utama) -->
              <path class="japan-island-path island-honshu" d="M 480 140 Q 495 190 475 240 Q 455 270 410 270 Q 360 270 310 290 Q 255 305 245 285 Q 285 260 340 250 Q 390 240 420 210 Q 450 170 470 140 Z" />
              <text x="405" y="235" class="island-watermark-text" text-anchor="middle">HONSHU</text>

              <!-- Pulau Shikoku -->
              <path class="japan-island-path island-shikoku" d="M 315 305 Q 355 295 370 325 Q 345 345 310 330 Z" />
              <text x="340" y="322" class="island-watermark-text-small" text-anchor="middle">SHIKOKU</text>

              <!-- Pulau Kyushu -->
              <path class="japan-island-path island-kyushu" d="M 235 300 Q 255 315 245 365 Q 215 390 195 360 Q 185 315 220 295 Z" />
              <text x="220" y="348" class="island-watermark-text-small" text-anchor="middle">KYUSHU</text>

              <!-- Pin Kota -->
              ${mapPins}
            </svg>
          </div>

          <!-- Panel Detail Kota Terpilih -->
          <div class="japan-city-detail-panel" id="japan-city-detail-card"></div>
        </div>
      </div>

      <!-- Wawasan Budaya: Etika Ojigi -->
      <div class="study-culture-box" style="margin-top:2rem;">
        <div class="study-culture-title">Etika Budaya Membungkuk (Ojigi) di Jepang:</div>
        <p class="study-culture-desc" style="margin-bottom:0.8rem;">
          Membungkuk (Ojigi) adalah gestur kesopanan fundamental di Jepang. Sudut bungkukan memiliki makna berbeda:
        </p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:0.8rem; margin-top:0.8rem;">
          <div style="background:#FFFFFF; border:1px solid #E2D7CC; border-radius:10px; padding:0.8rem;">
            <div style="font-weight:800; color:#BA3D27; font-size:0.9rem;">Eshaku (15°)</div>
            <div style="font-size:0.8rem; color:#4A3B32;">Bungkukan ringan saat berpapasan dengan rekan atau tetangga.</div>
          </div>
          <div style="background:#FFFFFF; border:1px solid #E2D7CC; border-radius:10px; padding:0.8rem;">
            <div style="font-weight:800; color:#BA3D27; font-size:0.9rem;">Keirei (30°)</div>
            <div style="font-size:0.8rem; color:#4A3B32;">Bungkukan hormat kepada guru, atasan, atau pelanggan.</div>
          </div>
          <div style="background:#FFFFFF; border:1px solid #E2D7CC; border-radius:10px; padding:0.8rem;">
            <div style="font-weight:800; color:#BA3D27; font-size:0.9rem;">Saikeirei (45°)</div>
            <div style="font-size:0.8rem; color:#4A3B32;">Bungkukan sangat mendalam untuk permintaan maaf atau rasa terima kasih tulus.</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ----------------------------------------------------
// STEP 9: SELESAI (PENCAPAIAN TUNTAS & KLAIM POIN)
// ----------------------------------------------------
function renderStepSelesai(lesson) {
  return `
    <div class="step-header-banner">
      <span class="step-label-pill">Langkah 9 • Selesai</span>
      <h2 class="step-main-title">Pelajaran Telah Selesai Dikuasai!</h2>
      <p class="step-desc-text">Selamat! Kamu telah menyelesaikan seluruh 9 tahapan belajar pada modul ini dengan tuntas.</p>
    </div>

    <div class="celebrate-card">
      <div class="celebrate-badge-tag">Pencapaian Modul</div>
      <h2 class="celebrate-title">Modul Selesai Dikuasai</h2>
      <div class="celebrate-module-name">${escapeHtml(lesson.title)}</div>
      <p class="celebrate-desc">
        Kamu telah menuntaskan seluruh 9 langkah: memahami komik Rin di Jepang, mengenal 3 sistem huruf, membedah struktur kalimat, vokal romaji, latihan kosakata, kuis pemahaman, dan peta kepulauan Jepang.
      </p>

      <div class="celebrate-reward-pill">
        <div class="celebrate-reward-item">
          <span class="celebrate-reward-label">Status</span>
          <span class="celebrate-reward-val">Tuntas 100%</span>
        </div>
        <div class="celebrate-reward-item">
          <span class="celebrate-reward-label">Bonus Poin</span>
          <span class="celebrate-reward-val highlight">+${lesson.rewardPoints} Poin</span>
        </div>
        <div class="celebrate-reward-item">
          <span class="celebrate-reward-label">Tingkat</span>
          <span class="celebrate-reward-val">${escapeHtml(lesson.level)} Dasar</span>
        </div>
      </div>

      <div class="celebrate-actions">
        <button type="button" class="btn-celebrate-primary" onclick="openLesson(${lesson.nextLessonId || 2})">
          <span>Lanjut ke Pelajaran ${lesson.nextLessonId || 2} &rarr;</span>
        </button>

        <div class="celebrate-sub-actions">
          <button type="button" class="btn-celebrate-secondary" onclick="goToLessonStep(6)">
            <span>Review Kuis</span>
          </button>
          <button type="button" class="btn-celebrate-secondary" onclick="closeLessonToCatalog()">
            <span>Daftar Modul Kurikulum</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

// ====================================================
// STATE & HELPER PETA KOTA JEPANG INTERAKTIF
// ====================================================
let activeJapanCityId = 'tokyo';

function selectJapanCity(cityId) {
  const cities = getActiveJapanCities();
  const found = cities.find(c => c.id === cityId) || cities[0];
  if (!found) return;

  activeJapanCityId = found.id;

  // Update pin active state
  cities.forEach(c => {
    const pinEl = document.getElementById(`japan-pin-${c.id}`);
    const tabEl = document.getElementById(`japan-city-btn-${c.id}`);
    if (pinEl) {
      if (c.id === found.id) pinEl.classList.add('active');
      else pinEl.classList.remove('active');
    }
    if (tabEl) {
      if (c.id === found.id) tabEl.classList.add('active');
      else tabEl.classList.remove('active');
    }
  });

  // Update active city detail card
  const detailEl = document.getElementById('japan-city-detail-card');
  if (detailEl) {
    detailEl.innerHTML = `
      <div class="city-detail-header">
        <div class="city-detail-title-col">
          <div class="city-detail-kanji-wrap">
            <span class="city-kanji-large">${escapeHtml(found.kanji)}</span>
            <span class="city-kana-sub">${escapeHtml(found.kana)} (${escapeHtml(found.romaji)})</span>
          </div>
          <h4 class="city-name-latin">${escapeHtml(found.name)}</h4>
          <span class="city-region-badge">${escapeHtml(found.region)}</span>
        </div>
        <button type="button" class="btn-city-audio" onclick="speakJapanese('${escapeHtml(found.kana || found.name)}')">
          <span>Dengar Pelafalan</span>
        </button>
      </div>

      <p class="city-detail-desc">${escapeHtml(found.desc)}</p>

      <div class="city-highlights-grid">
        <div class="city-highlight-box">
          <span class="highlight-label">Objek & Ciri Khas:</span>
          <span class="highlight-val">${escapeHtml(found.highlights)}</span>
        </div>
        <div class="city-highlight-box">
          <span class="highlight-label">Kuliner Khas:</span>
          <span class="highlight-val">${escapeHtml(found.food)}</span>
        </div>
      </div>
    `;
  }

  // Play audio
  speakJapanese(found.kana || found.name);
}

// ====================================================
// RENDER KONTEN MATERI (STUDY) GAYA NIHONGOTOJAPAN
// ====================================================
function renderLessonStudyContent(lesson) {
  const container = document.getElementById('lesson-study-content');
  if (!container) return;

  // 1. Overview List
  const overviewHtml = (lesson.overview || []).map(item => `<li>${escapeHtml(item)}</li>`).join('');

  // 2. Sections
  const sectionsHtml = (lesson.sections || []).map(sec => {
    let dialoguesHtml = '';
    if (sec.dialogues && sec.dialogues.length > 0) {
      dialoguesHtml = `
        <div class="example-cards-grid">
          ${sec.dialogues.map(d => `
            <div class="example-dialogue-card">
              <div class="example-text-col">
                <div class="example-jp-phrase">${escapeHtml(d.jp)}</div>
                <div class="example-romaji-phrase">${escapeHtml(d.romaji)}</div>
                <div class="example-id-meaning">${escapeHtml(d.meaning)}</div>
              </div>
              <button type="button" class="btn-phrase-audio" onclick="speakJapanese('${escapeHtml(d.audio || d.jp)}')">
                <span>Dengar Audio</span>
              </button>
            </div>
          `).join('')}
        </div>
      `;
    }

    let formulaHtml = '';
    if (sec.formula) {
      formulaHtml = `
        <div class="grammar-formula-box">
          <div class="grammar-formula-title">Pola Rumus Kalimat:</div>
          <div class="grammar-formula-code">${escapeHtml(sec.formula)}</div>
          ${sec.formulaDesc ? `<div class="grammar-formula-desc">${escapeHtml(sec.formulaDesc)}</div>` : ''}
        </div>
      `;
    }

    // 2a. Modul Visual 3 Aksara (Hiragana, Katakana, Kanji)
    let writingIntroHtml = '';
    if (sec.writingIntro) {
      writingIntroHtml = `
        <div class="writing-intro-grid">
          <div class="writing-intro-card card-hiragana">
            <div class="writing-card-badge">Aksara 1</div>
            <div class="writing-card-main-jp">ひらがな</div>
            <div class="writing-card-title">Hiragana (Asli)</div>
            <p class="writing-card-desc">Bentuk melengkung lentur dan halus. Digunakan untuk menulis kosakata asli Jepang dan partikel tata bahasa.</p>
            <div class="writing-card-example">
              <span class="ex-label">Contoh:</span>
              <span class="ex-val">ありがとう (Arigatou), ねこ (Neko)</span>
            </div>
            <button type="button" class="btn-writing-audio" onclick="speakJapanese('ひらがな')">
              <span>Pelafalan Audio</span>
            </button>
          </div>

          <div class="writing-intro-card card-katakana">
            <div class="writing-card-badge">Aksara 2</div>
            <div class="writing-card-main-jp">カタカナ</div>
            <div class="writing-card-title">Katakana (Serapan)</div>
            <p class="writing-card-desc">Bentuk bersudut tegas, lurus, dan kaku. Digunakan untuk menyerap kata bahasa asing dan nama orang/negara luar.</p>
            <div class="writing-card-example">
              <span class="ex-label">Contoh:</span>
              <span class="ex-val">パン (Pan), コーヒー (Kōhī), インドネシア</span>
            </div>
            <button type="button" class="btn-writing-audio" onclick="speakJapanese('カタカナ')">
              <span>Pelafalan Audio</span>
            </button>
          </div>

          <div class="writing-intro-card card-kanji">
            <div class="writing-card-badge">Aksara 3</div>
            <div class="writing-card-main-jp">漢字</div>
            <div class="writing-card-title">Kanji (Simbol Makna)</div>
            <p class="writing-card-desc">Berasal dari lukisan piktogram alam kuno. Satu huruf melambangkan makna utuh, bukan hanya bunyi huruf.</p>
            <div class="writing-card-example">
              <span class="ex-label">Contoh:</span>
              <span class="ex-val">山 (Gunung), 川 (Sungai), 日本 (Jepang)</span>
            </div>
            <button type="button" class="btn-writing-audio" onclick="speakJapanese('かんじ')">
              <span>Pelafalan Audio</span>
            </button>
          </div>
        </div>
      `;
    }

    // 2b. Modul Simbol Kanji Alam Dasar
    let kanjiSymbolsHtml = '';
    if (sec.kanjiSymbols && sec.kanjiSymbols.length > 0) {
      kanjiSymbolsHtml = `
        <div class="kanji-nature-grid">
          ${sec.kanjiSymbols.map(k => `
            <div class="kanji-nature-card">
              <div class="kanji-symbol-large">${escapeHtml(k.kanji)}</div>
              <div class="kanji-reading-romaji">${escapeHtml(k.romaji)}</div>
              <div class="kanji-nature-meaning">${escapeHtml(k.meaning)}</div>
              <button type="button" class="btn-kanji-audio" onclick="speakJapanese('${escapeHtml(k.audio || k.kanji)}')">
                <span>Audio</span>
              </button>
            </div>
          `).join('')}
        </div>
      `;
    }

    // 2c. Modul Peta Interaktif Kepulauan Jepang & Kota Terkenal
    let japanMapHtml = '';
    if (sec.japanMapModule) {
      const cities = getActiveJapanCities();
      const cityPills = cities.map(c => `
        <button type="button" id="japan-city-btn-${c.id}" class="japan-city-tab-btn ${c.id === activeJapanCityId ? 'active' : ''}" onclick="selectJapanCity('${c.id}')">
          <span>${escapeHtml(c.name)} (${escapeHtml(c.kanji)})</span>
        </button>
      `).join('');

      const mapPins = cities.map(c => `
        <g id="japan-pin-${c.id}" class="japan-map-pin ${c.id === activeJapanCityId ? 'active' : ''}" onclick="selectJapanCity('${c.id}')" style="cursor:pointer">
          <circle cx="${c.pinX}" cy="${c.pinY}" r="11" class="pin-circle-halo"></circle>
          <circle cx="${c.pinX}" cy="${c.pinY}" r="6.5" class="pin-circle-outer"></circle>
          <circle cx="${c.pinX}" cy="${c.pinY}" r="3" class="pin-circle-inner"></circle>
          <text x="${c.pinX}" y="${c.pinY - 10}" class="pin-text-label" text-anchor="middle">${escapeHtml(c.name)}</text>
        </g>
      `).join('');

      japanMapHtml = `
        <div class="japan-map-interactive-module">
          <div class="japan-map-top-bar">
            <span class="japan-map-hint">Pilih atau klik salah satu kota pada peta untuk melihat profil dan mendengar pelafalannya:</span>
            <div class="japan-cities-tabs-bar">
              ${cityPills}
            </div>
          </div>

          <div class="japan-map-display-layout">
            <div class="japan-map-svg-wrap">
              <svg viewBox="140 10 460 410" class="japan-map-svg" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="islandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#E2E8F0"/>
                    <stop offset="100%" stop-color="#CBD5E1"/>
                  </linearGradient>
                </defs>

                <!-- Pulau Hokkaido (Utara) -->
                <path class="japan-island-path island-hokkaido" d="M 460 70 Q 485 30 540 45 Q 590 60 575 105 Q 545 135 500 115 Q 460 110 455 90 Z" />
                <text x="515" y="60" class="island-watermark-text" text-anchor="middle">HOKKAIDO</text>

                <!-- Pulau Honshu (Utama - Melengkung Tengah) -->
                <path class="japan-island-path island-honshu" d="M 480 140 Q 495 190 475 240 Q 455 270 410 270 Q 360 270 310 290 Q 255 305 245 285 Q 285 260 340 250 Q 390 240 420 210 Q 450 170 470 140 Z" />
                <text x="405" y="235" class="island-watermark-text" text-anchor="middle">HONSHU</text>

                <!-- Pulau Shikoku (Selatan Tengah) -->
                <path class="japan-island-path island-shikoku" d="M 315 305 Q 355 295 370 325 Q 345 345 310 330 Z" />
                <text x="340" y="322" class="island-watermark-text-small" text-anchor="middle">SHIKOKU</text>

                <!-- Pulau Kyushu (Barat Daya) -->
                <path class="japan-island-path island-kyushu" d="M 235 300 Q 255 315 245 365 Q 215 390 195 360 Q 185 315 220 295 Z" />
                <text x="220" y="348" class="island-watermark-text-small" text-anchor="middle">KYUSHU</text>

                <!-- Pin Kota Interaktif -->
                ${mapPins}
              </svg>
            </div>

            <!-- Panel Detail Kota Terpilih -->
            <div class="japan-city-detail-panel" id="japan-city-detail-card">
              <!-- Terisi otomatis oleh selectJapanCity -->
            </div>
          </div>
        </div>
      `;
    }

    return `
      <div class="nihongo-section-block">
        <h3 class="nihongo-section-title">
          <span class="nihongo-section-num">${sec.num}</span>
          <span>${escapeHtml(sec.title)}</span>
        </h3>
        <div class="nihongo-prose-text">
          <p>${escapeHtml(sec.desc)}</p>
        </div>
        ${writingIntroHtml}
        ${kanjiSymbolsHtml}
        ${japanMapHtml}
        ${formulaHtml}
        ${dialoguesHtml}
      </div>
    `;
  }).join('');

  // 3. Vocab Grid
  const vocabHtml = (lesson.vocabList || []).map(v => `
    <div class="study-vocab-item">
      <div>
        <div class="vocab-item-jp">${escapeHtml(v.jp)}</div>
        <div class="vocab-item-romaji">${escapeHtml(v.romaji)}</div>
        <div class="vocab-item-meaning">${escapeHtml(v.meaning)}</div>
      </div>
      <button type="button" class="btn-vocab-item-audio" onclick="speakJapanese('${escapeHtml(v.audio || v.jp)}')">
        <span>Audio</span>
      </button>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="nihongo-study-card">
      <div class="nihongo-hero-header">
        <div class="nihongo-meta-row">
          <span class="nihongo-tag-chip">${escapeHtml(lesson.level)} Dasar</span>
          <span class="nihongo-time-chip">${lesson.estMinutes} Menit Pelajaran</span>
          <span class="nihongo-points-chip">Reward Kuis: +${lesson.rewardPoints} Poin</span>
        </div>
        <h1 class="nihongo-lesson-h1">${escapeHtml(lesson.title)}</h1>
        <p class="nihongo-lesson-sub">${escapeHtml(lesson.subtitle)}</p>
      </div>

      <div class="study-culture-box" style="margin-bottom:1.8rem; background:#FAF6F0; border-color:#E2D7CC;">
        <div class="study-culture-title" style="color:#64554B;">Tujuan Pembelajaran Modul Ini:</div>
        <ul style="margin:0 0 0 1.2rem; color:#4A3B32; font-size:0.92rem; line-height:1.6;">
          ${overviewHtml}
        </ul>
      </div>

      ${sectionsHtml}

      <div class="nihongo-section-block">
        <h3 class="nihongo-section-title">
          <span>Daftar Kosakata Penting Pelajaran Ini</span>
        </h3>
        <div class="study-vocab-grid">
          ${vocabHtml}
        </div>
      </div>

      ${lesson.cultureTip ? `
        <div class="study-culture-box">
          <div class="study-culture-title">Tips Praktis & Wawasan Budaya:</div>
          <div class="study-culture-desc">${escapeHtml(lesson.cultureTip)}</div>
        </div>
      ` : ''}

      <div class="study-cta-box">
        <div class="study-cta-title">Sudah Siap Menguji Pemahaman?</div>
        <div class="study-cta-desc">Kerjakan latihan pilihan ganda singkat untuk memastikan kamu telah menguasai materi ini dan klaim bonus poinnya.</div>
        <button type="button" class="btn-start-lesson-quiz" onclick="switchLessonViewTab('quiz')">
          <span>Mulai Latihan &amp; Kuis Pemahaman</span>
        </button>
      </div>
    </div>
  `;

  // Auto-init kota pertama jika modul peta ada di dalam halaman
  setTimeout(() => {
    if (document.getElementById('japan-city-detail-card')) {
      selectJapanCity(activeJapanCityId);
    }
  }, 60);
}

// ====================================================
// RENDER KONTEN KUIS PEMAHAMAN (QUIZ)
// ====================================================
function renderLessonQuizContent(lesson) {
  const container = document.getElementById('lesson-quiz-content');
  if (!container) return;

  const quizList = lesson.quiz || [];

  const questionsHtml = quizList.map((item, qIdx) => {
    return `
      <div class="lesson-quiz-item-card" id="lesson-quiz-card-${qIdx}">
        <div class="quiz-item-header">
          <span class="quiz-q-badge">Soal ${qIdx + 1} dari ${quizList.length}</span>
        </div>
        <div class="quiz-q-prompt">${escapeHtml(item.q)}</div>

        ${item.audio ? `
          <button type="button" class="btn-quiz-chokai-audio" onclick="speakJapanese('${escapeHtml(item.audio)}')">
            <span>Dengar Audio Pelafalan</span>
          </button>
        ` : ''}

        <div class="quiz-options-list">
          ${item.options.map((optText, optIdx) => `
            <button type="button" class="btn-quiz-option" id="btn-quiz-opt-${qIdx}-${optIdx}" onclick="handleLessonQuizAnswer(${qIdx}, ${optIdx})">
              <span>${escapeHtml(optText)}</span>
            </button>
          `).join('')}
        </div>

        <div class="quiz-item-feedback" id="quiz-feedback-${qIdx}"></div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="nihongo-quiz-wrapper">
      <div class="nihongo-quiz-header">
        <div class="nihongo-quiz-title-wrap">
          <h2>Latihan &amp; Kuis Cek Pemahaman</h2>
          <p>Pilihlah salah satu jawaban yang paling tepat. Hasil penilaian akan otomatis tercatat ke laporan evaluasi guru.</p>
        </div>
        <div class="quiz-score-live-badge">
          <span>Nilai: </span>
          <strong id="lesson-quiz-live-score">0</strong> / 100
        </div>
      </div>

      <div class="lesson-quiz-questions-wrap">
        ${questionsHtml}
      </div>

      <div class="quiz-final-actions-card" id="quiz-final-actions-card">
        <div class="study-cta-title">Latihan Selesai!</div>
        <div class="study-cta-desc" id="quiz-final-summary-desc">Kerja bagus! Seluruh soal pemahaman telah selesai kamu kerjakan.</div>
        
        <div class="quiz-final-stats-row">
          <div class="quiz-final-stat-col">
            <span class="quiz-final-stat-val text-green" id="final-stat-correct">0</span>
            <span class="quiz-final-stat-label">Jawaban Benar</span>
          </div>
          <div class="quiz-final-stat-col">
            <span class="quiz-final-stat-val text-red" id="final-stat-wrong">0</span>
            <span class="quiz-final-stat-label">Jawaban Salah</span>
          </div>
          <div class="quiz-final-stat-col">
            <span class="quiz-final-stat-val text-amber" id="final-stat-points">+0 Poin</span>
            <span class="quiz-final-stat-label">Poin Didapat</span>
          </div>
        </div>

        <div class="quiz-final-btns">
          <button type="button" class="btn-quiz-action-retry" onclick="restartLessonQuiz()">
            <span>Ulangi Latihan</span>
          </button>
          <button type="button" class="btn-quiz-action-back" onclick="switchLessonViewTab('study')">
            <span>Baca Ulang Materi</span>
          </button>
          <button type="button" class="btn-quiz-action-next" onclick="openNextLesson()">
            <span>Lanjut ke Pelajaran Berikutnya</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

// Menjawab Soal Kuis Interaktif
function handleLessonQuizAnswer(qIdx, selectedOptIdx) {
  const lesson = LESSON_DETAIL_DATA[currentLessonId] || LESSON_DETAIL_DATA[1];
  const qItem = (lesson.quiz || [])[qIdx];
  if (!qItem) return;

  // Cek jika sudah pernah dijawab
  if (currentLessonQuizAnswers[qIdx] !== undefined) return;

  const isCorrect = selectedOptIdx === qItem.correctIndex;
  currentLessonQuizAnswers[qIdx] = { isCorrect, selectedOptIdx };

  const card = document.getElementById(`lesson-quiz-card-${qIdx}`);
  const feedbackEl = document.getElementById(`quiz-feedback-${qIdx}`);
  const clickedBtn = document.getElementById(`btn-quiz-opt-${qIdx}-${selectedOptIdx}`);
  const correctBtn = document.getElementById(`btn-quiz-opt-${qIdx}-${qItem.correctIndex}`);

  // Disable all options in this question
  qItem.options.forEach((_, optIdx) => {
    const btn = document.getElementById(`btn-quiz-opt-${qIdx}-${optIdx}`);
    if (btn) btn.disabled = true;
  });

  if (isCorrect) {
    if (card) card.classList.add('answered-correct');
    if (clickedBtn) clickedBtn.classList.add('correct');
    if (feedbackEl) {
      feedbackEl.className = 'quiz-item-feedback show correct';
      feedbackEl.innerHTML = `<strong>Jawaban Benar (+25 Poin).</strong> ${escapeHtml(qItem.explanation)}`;
    }
  } else {
    if (card) card.classList.add('answered-wrong');
    if (clickedBtn) clickedBtn.classList.add('wrong');
    if (correctBtn) correctBtn.classList.add('correct');
    if (feedbackEl) {
      feedbackEl.className = 'quiz-item-feedback show wrong';
      feedbackEl.innerHTML = `<strong>Jawaban Salah.</strong> Jawaban yang benar adalah: "${escapeHtml(qItem.options[qItem.correctIndex])}". ${escapeHtml(qItem.explanation)}`;
    }
  }

  // Update live score
  const totalQuestions = (lesson.quiz || []).length || 1;
  const answeredCount = Object.keys(currentLessonQuizAnswers).length;
  const correctCount = Object.values(currentLessonQuizAnswers).filter(a => a.isCorrect).length;
  const currentScore = Math.round((correctCount / totalQuestions) * 100);

  const scoreEl = document.getElementById('lesson-quiz-live-score');
  if (scoreEl) scoreEl.textContent = String(currentScore);

  // Jika semua soal sudah dijawab -> Selesaikan kuis dan simpan penilaian
  if (answeredCount >= totalQuestions) {
    finishLessonQuiz(lesson, correctCount, totalQuestions, currentScore);
  }
}

// Selesaikan Kuis & Simpan Hasil Evaluasi
function finishLessonQuiz(lesson, correctCount, totalQuestions, score) {
  const wrongCount = Math.max(0, totalQuestions - correctCount);
  const pointsEarned = correctCount * 25;

  // Catat lesson selesai di localStorage
  try {
    let completedLessons = JSON.parse(localStorage.getItem('sijapanese_completed_lessons') || '[]');
    if (!completedLessons.includes(lesson.id)) {
      completedLessons.push(lesson.id);
      localStorage.setItem('sijapanese_completed_lessons', JSON.stringify(completedLessons));
    }
  } catch (e) {}

  // Tambahkan poin ke user
  if (typeof window.addPointsToUser === 'function') {
    window.addPointsToUser(pointsEarned, lesson.id);
  }

  // Rekapitulasi evaluasi untuk Master Guru
  try {
    const localAssessments = JSON.parse(localStorage.getItem('sijapanese_student_assessments') || '[]');
    const activeUser = JSON.parse(localStorage.getItem('sijapanese_active_user') || '{}');
    localAssessments.unshift({
      id: Date.now(),
      user_name: activeUser.name || 'Siswa',
      user_avatar: activeUser.avatar || 'img/avatar_anggata.svg',
      lesson_id: lesson.id,
      exercise_title: lesson.title,
      exercise_type: 'kuis_materi',
      total_questions: totalQuestions,
      correct_count: correctCount,
      wrong_count: wrongCount,
      score: score,
      grade: score >= 85 ? 'A' : (score >= 70 ? 'B' : (score >= 60 ? 'C' : 'D')),
      status: score >= 60 ? 'lulus' : 'remedial',
      created_at: new Date().toISOString()
    });
    localStorage.setItem('sijapanese_student_assessments', JSON.stringify(localAssessments.slice(0, 50)));
  } catch (e) {}

  // Kirim ke backend jika server Laravel tersedia
  try {
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    fetch('/api/auth/assessment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...(csrfToken ? { 'X-CSRF-TOKEN': csrfToken } : {})
      },
      body: JSON.stringify({
        lesson_id: lesson.id,
        exercise_title: lesson.title,
        exercise_type: 'kuis_materi',
        total_questions: totalQuestions,
        correct_count: correctCount,
        wrong_count: wrongCount,
        score: score,
        points: pointsEarned
      })
    }).catch(() => {});
  } catch (err) {}

  // Tampilkan card ringkasan hasil
  const finalCard = document.getElementById('quiz-final-actions-card');
  if (finalCard) {
    const correctEl = document.getElementById('final-stat-correct');
    const wrongEl = document.getElementById('final-stat-wrong');
    const pointsEl = document.getElementById('final-stat-points');
    const descEl = document.getElementById('quiz-final-summary-desc');

    if (correctEl) correctEl.textContent = `${correctCount} Soal`;
    if (wrongEl) wrongEl.textContent = `${wrongCount} Soal`;
    if (pointsEl) pointsEl.textContent = `+${pointsEarned} Poin`;
    if (descEl) {
      descEl.textContent = score >= 70
        ? `Luar biasa! Kamu berhasil lulus dengan nilai ${score} / 100. Poin dan rekapan nilai otomatis terkirim ke Master Guru.`
        : `Latihan selesai dengan nilai ${score} / 100. Kamu bisa mengulangi latihan untuk meningkatkan nilai.`;
    }

    finalCard.classList.add('show');
    finalCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// Ulangi Kuis Pelajaran Saat Ini
function restartLessonQuiz() {
  const lesson = LESSON_DETAIL_DATA[currentLessonId] || LESSON_DETAIL_DATA[1];
  currentLessonQuizAnswers = {};
  currentLessonQuizScore = 0;
  renderLessonQuizContent(lesson);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Buka Pelajaran Berikutnya
function openNextLesson() {
  const lesson = LESSON_DETAIL_DATA[currentLessonId] || LESSON_DETAIL_DATA[1];
  const nextId = lesson.nextLessonId || 1;
  openLesson(nextId);
}

function selectLevelTab(code) {
  // Untuk saat ini fokus kurikulum N5 Dasar
  initMateriPage();
}

function switchLessonViewTab(tab) {
  if (tab === 'quiz') {
    goToLessonStep(6);
  } else {
    goToLessonStep(2);
  }
}

// ====================================================
// INTERAKSI FITUR BEDAH KALIMAT & HURUF (GAYA NIHONGOTOJAPAN)
// ====================================================
let isFuriganaVisible = true;
function toggleFurigana() {
  isFuriganaVisible = !isFuriganaVisible;
  const rubies = document.querySelectorAll('.furigana-ruby, ruby rt');
  rubies.forEach(el => {
    el.style.visibility = isFuriganaVisible ? 'visible' : 'hidden';
  });
  const label = document.getElementById('furigana-toggle-label');
  if (label) {
    label.textContent = `Furigana: ${isFuriganaVisible ? 'ON' : 'OFF'}`;
  }
}

function filterSentenceScript(scriptType) {
  const filterBtns = document.querySelectorAll('.btn-filter-tag');
  filterBtns.forEach(btn => {
    if (btn.getAttribute('data-filter') === scriptType) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const bubbles = document.querySelectorAll('.kalimat-char-bubble[data-type]');
  const cards = document.querySelectorAll('.kalimat-breakdown-card[data-type]');

  bubbles.forEach(b => {
    const type = b.getAttribute('data-type');
    if (scriptType === 'all' || type === scriptType) {
      b.style.opacity = '1';
      b.style.transform = 'scale(1)';
    } else {
      b.style.opacity = '0.25';
      b.style.transform = 'scale(0.92)';
    }
  });

  cards.forEach(c => {
    const type = c.getAttribute('data-type');
    if (scriptType === 'all' || type === scriptType) {
      c.style.display = 'flex';
      c.style.opacity = '1';
    } else {
      c.style.display = 'none';
    }
  });
}

function highlightWordInSentence(wordId) {
  document.querySelectorAll('.kalimat-word-group').forEach(el => el.classList.remove('active-focus'));
  document.querySelectorAll('.kalimat-breakdown-card').forEach(el => el.classList.remove('active-focus'));

  if (!wordId) return;

  const matchingGroups = document.querySelectorAll(`.kalimat-word-group[data-word="${wordId}"]`);
  matchingGroups.forEach(el => el.classList.add('active-focus'));

  const matchingCard = document.querySelector(`.kalimat-breakdown-card[data-word="${wordId}"]`);
  if (matchingCard) {
    matchingCard.classList.add('active-focus');
    matchingCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function toggleHurufExamples(type) {
  const panel = document.getElementById(`panel-examples-${type}`);
  if (!panel) return;
  panel.classList.toggle('open');
  const btn = document.getElementById(`btn-toggle-${type}`);
  if (btn) {
    const isOpen = panel.classList.contains('open');
    const span = btn.querySelector('span');
    if (span) span.textContent = isOpen ? 'Tutup contoh' : 'Lihat contoh';
  }
}

function checkMiniChallenge(buttonEl, isCorrect, feedbackMsg) {
  if (!buttonEl) return;
  const card = buttonEl.closest('.kalimat-challenge-card');
  if (!card) return;

  const allBtns = card.querySelectorAll('.btn-challenge-opt');
  allBtns.forEach(btn => btn.disabled = true);

  buttonEl.classList.add(isCorrect ? 'correct' : 'wrong');

  let feedbackEl = card.querySelector('.challenge-feedback-box');
  if (!feedbackEl) {
    feedbackEl = document.createElement('div');
    feedbackEl.className = 'challenge-feedback-box';
    card.appendChild(feedbackEl);
  }

  feedbackEl.className = `challenge-feedback-box show ${isCorrect ? 'correct' : 'wrong'}`;
  feedbackEl.innerHTML = `<strong>${isCorrect ? 'Jawaban Benar!' : 'Kurang Tepat.'}</strong> ${escapeHtml(feedbackMsg)}`;
}

// ====================================================
// TTS PELAFALAN AUDIO BAHASA JEPANG
// ====================================================
function speakJapanese(text) {
  if (!text || typeof window.speechSynthesis === 'undefined') return;

  try {
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/<[^>]*>/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.88; // Sedikit santai agar pelafalan pemula jelas
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const jaVoice = voices.find(v => v.lang === 'ja-JP' || v.lang.startsWith('ja'));
    if (jaVoice) {
      utterance.voice = jaVoice;
    }

    window.speechSynthesis.speak(utterance);
  } catch (e) {}
}

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
window.initMateriPage = initMateriPage;
window.openLesson = openLesson;
window.closeLessonToCatalog = closeLessonToCatalog;
window.switchLessonViewTab = switchLessonViewTab;
window.goToLessonStep = goToLessonStep;
window.renderLessonStepperTabs = renderLessonStepperTabs;
window.selectJapanCity = selectJapanCity;
window.handleLessonQuizAnswer = handleLessonQuizAnswer;
window.restartLessonQuiz = restartLessonQuiz;
window.openNextLesson = openNextLesson;
window.selectLevelTab = selectLevelTab;
window.toggleFurigana = toggleFurigana;
window.filterSentenceScript = filterSentenceScript;
window.highlightWordInSentence = highlightWordInSentence;
window.toggleHurufExamples = toggleHurufExamples;
window.checkMiniChallenge = checkMiniChallenge;
window.speakJapanese = speakJapanese;
window.LESSON_DETAIL_DATA = LESSON_DETAIL_DATA;
window.LESSON_CATALOG_DATA = LESSON_CATALOG_DATA;
