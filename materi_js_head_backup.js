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