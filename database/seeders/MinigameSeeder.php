<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MinigameConfig;
use App\Models\MinigameQuestion;

class MinigameSeeder extends Seeder
{
    public function run(): void
    {
        // 1. KOSAKATA HIRAGANA LENGKAP
        $vocabHiragana = [
            ['char' => 'かさ', 'romaji' => 'kasa', 'meaning' => 'Payung'],
            ['char' => 'ねこ', 'romaji' => 'neko', 'meaning' => 'Kucing'],
            ['char' => 'いぬ', 'romaji' => 'inu', 'meaning' => 'Anjing'],
            ['char' => 'ほん', 'romaji' => 'hon', 'meaning' => 'Buku'],
            ['char' => 'みず', 'romaji' => 'mizu', 'meaning' => 'Air'],
            ['char' => 'さくら', 'romaji' => 'sakura', 'meaning' => 'Bunga Sakura'],
            ['char' => 'はな', 'romaji' => 'hana', 'meaning' => 'Bunga / Hidung'],
            ['char' => 'えき', 'romaji' => 'eki', 'meaning' => 'Stasiun'],
            ['char' => 'あめ', 'romaji' => 'ame', 'meaning' => 'Hujan / Permen'],
            ['char' => 'すし', 'romaji' => 'sushi', 'meaning' => 'Makanan Sushi'],
            ['char' => 'やま', 'romaji' => 'yama', 'meaning' => 'Gunung'],
            ['char' => 'かわ', 'romaji' => 'kawa', 'meaning' => 'Sungai'],
            ['char' => 'つき', 'romaji' => 'tsuki', 'meaning' => 'Bulan'],
            ['char' => 'くるま', 'romaji' => 'kuruma', 'meaning' => 'Mobil'],
            ['char' => 'せんせい', 'romaji' => 'sensei', 'meaning' => 'Guru'],
            ['char' => 'ともだち', 'romaji' => 'tomodachi', 'meaning' => 'Sahabat / Teman'],
            ['char' => 'がくせい', 'romaji' => 'gakusei', 'meaning' => 'Pelajar / Siswa'],
            ['char' => 'りんご', 'romaji' => 'ringo', 'meaning' => 'Buah Apel'],
            ['char' => 'とり', 'romaji' => 'tori', 'meaning' => 'Burung'],
            ['char' => 'さかな', 'romaji' => 'sakana', 'meaning' => 'Ikan'],
            ['char' => 'みかん', 'romaji' => 'mikan', 'meaning' => 'Jeruk'],
            ['char' => 'たまご', 'romaji' => 'tamago', 'meaning' => 'Telur'],
            ['char' => 'てがみ', 'romaji' => 'tegami', 'meaning' => 'Surat'],
            ['char' => 'あさ', 'romaji' => 'asa', 'meaning' => 'Pagi Hari'],
            ['char' => 'よる', 'romaji' => 'yoru', 'meaning' => 'Malam Hari'],
        ];

        // 2. KOSAKATA KATAKANA LENGKAP
        $vocabKatakana = [
            ['char' => 'パン', 'romaji' => 'pan', 'meaning' => 'Roti'],
            ['char' => 'テレビ', 'romaji' => 'terebi', 'meaning' => 'Televisi'],
            ['char' => 'カメラ', 'romaji' => 'kamera', 'meaning' => 'Kamera'],
            ['char' => 'バス', 'romaji' => 'basu', 'meaning' => 'Bus Umum'],
            ['char' => 'トイレ', 'romaji' => 'toire', 'meaning' => 'Toilet'],
            ['char' => 'ドア', 'romaji' => 'doa', 'meaning' => 'Pintu'],
            ['char' => 'ノート', 'romaji' => 'nooto', 'meaning' => 'Buku Catatan'],
            ['char' => 'ペン', 'romaji' => 'pen', 'meaning' => 'Pulpen'],
            ['char' => 'ホテル', 'romaji' => 'hoteru', 'meaning' => 'Hotel'],
            ['char' => 'コーヒー', 'romaji' => 'koohii', 'meaning' => 'Kopi'],
            ['char' => 'タクシー', 'romaji' => 'takushii', 'meaning' => 'Taksi'],
            ['char' => 'ラジオ', 'romaji' => 'rajio', 'meaning' => 'Radio'],
            ['char' => 'アイス', 'romaji' => 'aisu', 'meaning' => 'Es Krim'],
            ['char' => 'ケーキ', 'romaji' => 'keeki', 'meaning' => 'Kue'],
            ['char' => 'ミルク', 'romaji' => 'miruku', 'meaning' => 'Susu'],
            ['char' => 'シャツ', 'romaji' => 'shatsu', 'meaning' => 'Baju Kemeja'],
            ['char' => 'ベッド', 'romaji' => 'beddo', 'meaning' => 'Tempat Tidur'],
            ['char' => 'ビル', 'romaji' => 'biru', 'meaning' => 'Gedung'],
        ];

        // 3. KANJI N5 DASAR
        $kanjiN5 = [
            ['char' => '日', 'romaji' => 'hi / nichi', 'meaning' => 'Matahari / Hari'],
            ['char' => '月', 'romaji' => 'tsuki / getsu', 'meaning' => 'Bulan'],
            ['char' => '木', 'romaji' => 'ki / moku', 'meaning' => 'Pohon / Kayu'],
            ['char' => '山', 'romaji' => 'yama / san', 'meaning' => 'Gunung'],
            ['char' => '川', 'romaji' => 'kawa / gawa', 'meaning' => 'Sungai'],
            ['char' => '田', 'romaji' => 'ta / da', 'meaning' => 'Sawah Padi'],
            ['char' => '人', 'romaji' => 'hito / jin', 'meaning' => 'Orang / Manusia'],
            ['char' => '口', 'romaji' => 'kuchi / guchi', 'meaning' => 'Mulut / Pintu Masuk'],
            ['char' => '車', 'romaji' => 'kuruma / sha', 'meaning' => 'Mobil / Kendaraan'],
            ['char' => '門', 'romaji' => 'mon', 'meaning' => 'Gerbang'],
            ['char' => '火', 'romaji' => 'hi / ka', 'meaning' => 'Api'],
            ['char' => '水', 'romaji' => 'mizu / sui', 'meaning' => 'Air'],
            ['char' => '金', 'romaji' => 'kane / kin', 'meaning' => 'Emas / Uang'],
            ['char' => '土', 'romaji' => 'tsuchi / do', 'meaning' => 'Tanah'],
            ['char' => '本', 'romaji' => 'hon', 'meaning' => 'Buku / Asal Mula'],
        ];

        // 4. SUSUN KATA (WORD BUILDER)
        $wordBuilderList = [
            ['char' => 'とうきょう', 'romaji' => 't-o-u-k-y-o-u', 'meaning' => 'Tokyo (Ibu kota Jepang)', 'extra' => json_encode(['answer' => ['と','う','き','ょ','う'], 'chars' => ['と','う','き','ょ','う','か','さ','ね']])],
            ['char' => 'ふじさん', 'romaji' => 'f-u-j-i-s-a-n', 'meaning' => 'Gunung Fuji', 'extra' => json_encode(['answer' => ['ふ','じ','さ','ん'], 'chars' => ['ふ','じ','さ','ん','や','ま','て','ら']])],
            ['char' => 'ありがとう', 'romaji' => 'a-r-i-g-a-t-o-u', 'meaning' => 'Terima Kasih', 'extra' => json_encode(['answer' => ['あ','り','が','と','う'], 'chars' => ['あ','り','が','と','う','こ','そ','ね']])],
            ['char' => 'おはよう', 'romaji' => 'o-h-a-y-o-u', 'meaning' => 'Selamat Pagi', 'extra' => json_encode(['answer' => ['お','は','よ','う'], 'chars' => ['お','は','よ','う','み','ず','ね','こ']])],
            ['char' => 'ねこ', 'romaji' => 'n-e-k-o', 'meaning' => 'Kucing Lucu', 'extra' => json_encode(['answer' => ['ね','こ'], 'chars' => ['ね','こ','い','ぬ','と','り','さ','る']])],
            ['char' => 'さくら', 'romaji' => 's-a-k-u-r-a', 'meaning' => 'Bunga Sakura Musim Semi', 'extra' => json_encode(['answer' => ['さ','く','ら'], 'chars' => ['さ','く','ら','は','な','き','く','さ']])],
            ['char' => 'せんせい', 'romaji' => 's-e-n-s-e-i', 'meaning' => 'Guru Pengajar', 'extra' => json_encode(['answer' => ['せ','ん','せ','い'], 'chars' => ['せ','ん','せ','い','が','く','こ','う']])],
        ];

        // GAME CONFIG DEFINITIONS
        $games = [
            'kana-blast' => [
                'title' => 'Kana Blast (Turret Blaster)',
                'duration' => 60,
                'sub_modes' => [
                    ['id' => 'vocab-hiragana', 'name' => 'Kosakata Hiragana (かさ, ねこ, dll.)', 'active' => true],
                    ['id' => 'vocab-katakana', 'name' => 'Kosakata Katakana (パン, テレビ, dll.)', 'active' => true],
                    ['id' => 'kanji-n5', 'name' => 'Kanji N5 Dasar (日, 月, 木, 山, dll.)', 'active' => true],
                    ['id' => 'kana-hiragana', 'name' => 'Aksara Hiragana Dasar', 'active' => true],
                    ['id' => 'kana-katakana', 'name' => 'Aksara Katakana Dasar', 'active' => true],
                    ['id' => 'mix', 'name' => 'Campuran Ekstrem (Kana & Kata)', 'active' => true],
                ],
            ],
            'sky-defense' => [
                'title' => 'Sky Atk Defense (Gerbang Desa)',
                'duration' => 60,
                'sub_modes' => [
                    ['id' => 'words', 'name' => 'Kosakata Mini (ねこ, いぬ, かさ, dll.)', 'active' => true],
                    ['id' => 'hiragana', 'name' => 'Hiragana Saja', 'active' => true],
                    ['id' => 'katakana', 'name' => 'Katakana Saja', 'active' => true],
                    ['id' => 'kanji-n5', 'name' => 'Kanji N5 Dasar', 'active' => true],
                    ['id' => 'mix', 'name' => 'Campuran Hiragana & Katakana', 'active' => true],
                ],
            ],
            'flash-card' => [
                'title' => 'Flash Card Kosakata & Kanji',
                'duration' => 60,
                'sub_modes' => [
                    ['id' => 'all', 'name' => 'Semua Kosakata & Kanji', 'active' => true],
                    ['id' => 'vocab-hiragana', 'name' => 'Kosakata Hiragana (かさ, ねこ)', 'active' => true],
                    ['id' => 'vocab-katakana', 'name' => 'Kosakata Katakana (パン, テレビ)', 'active' => true],
                    ['id' => 'kanji-n5', 'name' => 'Kanji N5 Dasar', 'active' => true],
                ],
            ],
            'memory-match' => [
                'title' => 'Memory Match',
                'duration' => 60,
                'sub_modes' => [
                    ['id' => 'all', 'name' => 'Semua Kosakata (Hiragana & Katakana)', 'active' => true],
                    ['id' => 'vocab-hiragana', 'name' => 'Kosakata Hiragana Saja (かさ, ねこ)', 'active' => true],
                    ['id' => 'vocab-katakana', 'name' => 'Kosakata Katakana Saja (パン, テレビ)', 'active' => true],
                    ['id' => 'kanji-n5', 'name' => 'Kanji N5 Dasar', 'active' => true],
                ],
            ],
            'speed-quiz' => [
                'title' => 'Speed Quiz Mode',
                'duration' => 30,
                'sub_modes' => [
                    ['id' => 'all', 'name' => 'Semua Kosakata & Kanji', 'active' => true],
                    ['id' => 'vocab-hiragana', 'name' => 'Kosakata Hiragana (かさ, ねこ)', 'active' => true],
                    ['id' => 'vocab-katakana', 'name' => 'Kosakata Katakana (パン, テレビ)', 'active' => true],
                    ['id' => 'kanji-n5', 'name' => 'Kanji N5 Dasar', 'active' => true],
                ],
            ],
            'word-builder' => [
                'title' => 'Word Builder',
                'duration' => 90,
                'sub_modes' => [
                    ['id' => 'word-builder', 'name' => 'Susun Kosakata', 'active' => true],
                ],
            ],
        ];

        // Seed Configs
        foreach ($games as $gameId => $gData) {
            MinigameConfig::updateOrCreate(
                ['game_id' => $gameId],
                [
                    'title' => $gData['title'],
                    'duration' => $gData['duration'],
                    'sub_modes' => $gData['sub_modes'],
                ]
            );
        }

        // Hapus soal lama dan seed ulang
        MinigameQuestion::truncate();

        // Seed questions untuk game yang menggunakan kosakata
        $playableGames = ['kana-blast', 'sky-defense', 'flash-card', 'memory-match', 'speed-quiz'];

        foreach ($playableGames as $gId) {
            $hMode = ($gId === 'kana-blast') ? 'vocab-hiragana' : (($gId === 'sky-defense') ? 'words' : 'vocab-hiragana');
            $kMode = ($gId === 'kana-blast') ? 'vocab-katakana' : (($gId === 'sky-defense') ? 'words' : 'vocab-katakana');

            // 1. Kosakata Hiragana (かさ, ねこ, いぬ, dll.)
            foreach ($vocabHiragana as $idx => $v) {
                MinigameQuestion::create([
                    'game_id' => $gId,
                    'sub_mode' => $hMode,
                    'char' => $v['char'],
                    'romaji' => $v['romaji'],
                    'meaning' => $v['meaning'],
                    'order' => $idx + 1,
                    'is_active' => true,
                ]);
            }

            // 2. Kosakata Katakana (パン, テレビ, カメラ, dll.)
            foreach ($vocabKatakana as $idx => $v) {
                MinigameQuestion::create([
                    'game_id' => $gId,
                    'sub_mode' => $kMode,
                    'char' => $v['char'],
                    'romaji' => $v['romaji'],
                    'meaning' => $v['meaning'],
                    'order' => $idx + 1,
                    'is_active' => true,
                ]);
            }

            // 3. Kanji N5 (日, 月, 木, 山, dll.)
            foreach ($kanjiN5 as $idx => $v) {
                MinigameQuestion::create([
                    'game_id' => $gId,
                    'sub_mode' => 'kanji-n5',
                    'char' => $v['char'],
                    'romaji' => $v['romaji'],
                    'meaning' => $v['meaning'],
                    'order' => $idx + 1,
                    'is_active' => true,
                ]);
            }
        }

        // 4. Word Builder Questions
        foreach ($wordBuilderList as $idx => $wb) {
            MinigameQuestion::create([
                'game_id' => 'word-builder',
                'sub_mode' => 'word-builder',
                'char' => $wb['char'],
                'romaji' => $wb['romaji'],
                'meaning' => $wb['meaning'],
                'extra_data' => $wb['extra'],
                'order' => $idx + 1,
                'is_active' => true,
            ]);
        }
    }
}
