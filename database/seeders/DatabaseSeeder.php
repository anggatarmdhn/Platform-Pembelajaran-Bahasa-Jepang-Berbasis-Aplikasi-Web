<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\MateriLevel;
use App\Models\MateriLesson;
use App\Models\LessonQuest;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Akun Guru & Siswa Demo
        User::firstOrCreate(
            ['email' => 'guru@sijapanese.sch.id'],
            [
                'name' => 'Sensei Tanaka',
                'password' => Hash::make('password'),
                'role' => 'guru',
                'avatar' => 'avatar_tanaka.svg',
                'score' => 999,
            ]
        );

        User::firstOrCreate(
            ['email' => 'kenji@sijapanese.sch.id'],
            [
                'name' => 'Kenji Pratama',
                'password' => Hash::make('password'),
                'role' => 'siswa',
                'avatar' => 'avatar_anggata.svg',
                'score' => 150,
                'completed_lessons' => [1],
            ]
        );

        User::firstOrCreate(
            ['email' => 'aoi@sijapanese.sch.id'],
            [
                'name' => 'Aoi Sakura',
                'password' => Hash::make('password'),
                'role' => 'siswa',
                'avatar' => 'avatar_aoi.svg',
                'score' => 75,
                'completed_lessons' => [],
            ]
        );

        // 2. Kotak Level
        $lvlN5 = MateriLevel::firstOrCreate(
            ['code' => 'n5'],
            [
                'name' => 'N5 Dasar',
                'sub' => 'Fondasi, Aksara & Wisata',
                'accent_color' => '#D9383A',
                'order' => 1,
                'is_active' => true,
            ]
        );

        $lvlN4 = MateriLevel::firstOrCreate(
            ['code' => 'n4'],
            [
                'name' => 'N4 Percakapan',
                'sub' => 'Situasi Praktis Traveling Sehari-hari',
                'accent_color' => '#2563EB',
                'order' => 2,
                'is_active' => true,
            ]
        );

        // 3. Modul Pelajaran (8 Modul)
        $lessonsData = [
        {
                "id": 1,
                "level_id": 1,
                "lesson_number": 1,
                "title": "Misteri 3 Aksara: Papan Kota & Menu Ramen Tokyo",
                "subtitle": "Kenalan dengan Kanji, Hiragana, & Katakana di jalanan Tokyo",
                "badge": "Wajib Dasar",
                "badge_class": "badge-red",
                "est_minutes": 12,
                "accent_color": "#D9383A",
                "num_bg": "#FEE2E2",
                "intro_content": null,
                "order": 1,
                "is_published": true,
                "created_at": "2026-10-27T06:42:52.000000Z",
                "updated_at": "2026-10-28T07:58:51.000000Z",
                "comic_image": "img/comic_ramen.svg",
                "audio_text": "先生、駅前の看板に「東京ラーメン」と書いてありますが、ぜんぶ同じ種類の文字ですか？……いいえ、違いますよ。「東京」は漢字で、「ラーメン」はカタカナで書かれていますよ。",
                "audio_label": "Percakapan Kenji & Sensei Tanaka",
                "mascot_tip": "びよういん itu salon kecantikan, びょういん itu rumah sakit: satu aksara kecil mengubah segalanya! Di Jepang, 1 kalimat memadukan Kanji (makna), Hiragana (tata bahasa), dan Katakana (serapan). Furigana kecil di atas Kanji adalah kunci penyelamat cara baca!",
                "level": {
                        "id": 1,
                        "code": "n5",
                        "name": "N5 Dasar Liburan",
                        "sub": "Aksara & Percakapan Penting",
                        "accent_color": "#D9383A",
                        "order": 1,
                        "is_active": true,
                        "created_at": "2026-10-27T06:42:52.000000Z",
                        "updated_at": "2026-10-27T06:42:52.000000Z"
                },
                "quests": [
                        {
                                "id": 15,
                                "lesson_id": 1,
                                "question_number": 1,
                                "question": "Dengarkan percakapan antara Rin dan Guru Kucing di depan stasiun. Berdasarkan penjelasan Guru Kucing, aksara apakah yang digunakan untuk menulis kata 「東京」(Tōkyō)?",
                                "badge_text": "Tahap 1 • Chokai: Mengenal Aksara",
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
                                "points": 25,
                                "created_at": "2026-10-28T08:17:14.000000Z",
                                "updated_at": "2026-10-28T08:17:14.000000Z",
                                "image_url": "img/comic_station.svg",
                                "audio_text": "先生、駅前の看板に「東京ラーメン」と書いてありますが、ぜんぶ同じ種類の文字ですか？……いいえ、違いますよ。「東京」は漢字で、「ラーメン」はカタカナで書かれていますよ。……なるほど、外国から来た言葉だからカタカナなんですね！",
                                "audio_label": "Percakapan Rin & Guru Kucing"
                        },
                        {
                                "id": 16,
                                "lesson_id": 1,
                                "question_number": 2,
                                "question": "Dengarkan percakapan belajar menulis berikut. Ciri aksara apa yang sedang dibahas saat Rin menulis kata 「すし」 (Sushi)?",
                                "badge_text": "Tahap 1 • Chokai: Bentuk Huruf Asli",
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
                                "points": 25,
                                "created_at": "2026-10-28T08:17:14.000000Z",
                                "updated_at": "2026-10-28T08:17:14.000000Z",
                                "image_url": "img/comic_aisatsu.svg",
                                "audio_text": "りんは今、ひらがなを練習しているの？……はい！「すし」の「す」と「し」を書いています。曲がり角が多くて柔らかい形ですね！……そうですね、それが日本のひらがなの特徴ですよ。",
                                "audio_label": "Percakapan Belajar Aksara"
                        },
                        {
                                "id": 17,
                                "lesson_id": 1,
                                "question_number": 3,
                                "question": "Dengarkan percakapan pemesanan di kedai berikut. Mengapa menu 「ラーメン」 (Rāmen) ditulis menggunakan Katakana dalam daftar menu?",
                                "badge_text": "Tahap 1 • Chokai: Kata Serapan Kuliner",
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
                                "points": 25,
                                "created_at": "2026-10-28T08:17:14.000000Z",
                                "updated_at": "2026-10-28T08:17:14.000000Z",
                                "image_url": "img/comic_ramen.svg",
                                "audio_text": "いらっしゃいませ！ご注文はお決まりですか？……はい、温かい醤油ラーメンを一つお願いします！……かしこまりました。ラーメン一丁！",
                                "audio_label": "Percakapan di Kedai Ramen"
                        },
                        {
                                "id": 18,
                                "lesson_id": 1,
                                "question_number": 4,
                                "question": "Dengarkan percakapan saat pelayan mengantarkan mangkuk ramen. Ungkapan etika apakah yang diucapkan pelanggan tepat sebelum mulai menyantap makanannya?",
                                "badge_text": "Tahap 2 • Chokai: Etika Sebelum Makan",
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
                                "points": 25,
                                "created_at": "2026-10-28T08:17:14.000000Z",
                                "updated_at": "2026-10-28T08:17:14.000000Z",
                                "image_url": "img/comic_ramen.svg",
                                "audio_text": "お待たせいたしました、熱々の味噌ラーメンです。ごゆっくりどうぞ！……わあ、いい匂い！いただきます！……ごゆっくりお召し上がりください。",
                                "audio_label": "Percakapan Etika Makan"
                        },
                        {
                                "id": 19,
                                "lesson_id": 1,
                                "question_number": 5,
                                "question": "Dengarkan percakapan penutup seusai makan berikut. Ungkapan santun apakah yang diucapkan pelanggan untuk menyampaikan terima kasih karena makanan sangat lezat?",
                                "badge_text": "Tahap 2 • Chokai: Etika Setelah Selesai Makan",
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
                                "points": 25,
                                "created_at": "2026-10-28T08:17:14.000000Z",
                                "updated_at": "2026-10-28T08:17:14.000000Z",
                                "image_url": "img/comic_ramen.svg",
                                "audio_text": "スープまで全部飲み干しましたね！……はい、とても美味しかったです！ごちそうさまでした！……ありがとうございます！またお越しください！",
                                "audio_label": "Percakapan Seusai Makan"
                        },
                        {
                                "id": 20,
                                "lesson_id": 1,
                                "question_number": 6,
                                "question": "Aksara apa yang digunakan pada kata \"ラーメン\" (ramen) yang dilihat Kenji di kedai?",
                                "badge_text": "Soal Pengantar • Identifikasi Bentuk",
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
                                "points": 25,
                                "created_at": "2026-10-28T08:17:14.000000Z",
                                "updated_at": "2026-10-28T08:17:14.000000Z",
                                "image_url": "img/comic_ramen.svg",
                                "audio_text": "いらっしゃいませ！ご注文はお決まりですか？……はい、温かい醤油ラーメンを一つお願いします！……かしこまりました。ラーメン一丁！",
                                "audio_label": "Percakapan di Kedai Ramen"
                        },
                        {
                                "id": 21,
                                "lesson_id": 1,
                                "question_number": 7,
                                "question": "Tulisan stasiun kereta \"東京\" (Tokyo) yang dibaca Kenji termasuk ke dalam golongan aksara apa?",
                                "badge_text": "Soal Pengantar • Aksara Lambang Makna",
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
                                "points": 25,
                                "created_at": "2026-10-28T08:17:14.000000Z",
                                "updated_at": "2026-10-28T08:17:14.000000Z",
                                "image_url": "img/comic_station.svg",
                                "audio_text": "先生、駅前の看板に「東京ラーメン」と書いてありますが、ぜんぶ同じ種類の文字ですか？……いいえ、違いますよ。「東京」は漢字で、「ラーメン」はカタカナで書かれていますよ。",
                                "audio_label": "Percakapan di Depan Stasiun"
                        },
                        {
                                "id": 22,
                                "lesson_id": 1,
                                "question_number": 8,
                                "question": "Mengapa aksara Hiragana seperti \"ありがとう\" (arigatō) paling penting dan wajib dihafal pertama kali?",
                                "badge_text": "Soal Pengantar • Aksara Asli & Tata Bahasa",
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
                                "points": 25,
                                "created_at": "2026-10-28T08:17:14.000000Z",
                                "updated_at": "2026-10-28T08:17:14.000000Z",
                                "image_url": "img/comic_aisatsu.svg",
                                "audio_text": "りんは今、ひらがなを練習しているの？……はい！「すし」や「ありがとう」を書いています。曲がり角が多くて柔らかい形ですね！……そうですね、それが日本のひらがなの特徴ですよ。",
                                "audio_label": "Percakapan Belajar Aksara"
                        }
                ]
        },
        {
                "id": 2,
                "level_id": 1,
                "lesson_number": 2,
                "title": "Salam, Kesopanan & Kata Ajaib \"Sumimasen\"",
                "subtitle": "Kuasai sapaan penting: Ohayō, Konnichiwa, Arigatō, dan Sumimasen",
                "badge": "Ungkapan",
                "badge_class": "badge-blue",
                "est_minutes": 15,
                "accent_color": "#2563EB",
                "num_bg": "#DBEAFE",
                "intro_content": null,
                "order": 2,
                "is_published": true,
                "created_at": "2026-10-27T06:42:52.000000Z",
                "updated_at": "2026-10-28T07:45:34.000000Z",
                "comic_image": "img/comic_aisatsu.svg",
                "audio_text": "おはようございます！今日も一日よろしくお願いします！……おはようございます！今日も元気に頑張りましょう！",
                "audio_label": "Percakapan Salam Pagi di Kelas",
                "mascot_tip": "Salam Aisatsu adalah kunci membuka keramahan warga lokal. Ucapkan \"Ohayō gozaimasu\" di pagi hari, dan gunakan \"Sumimasen\" saat memanggil pelayan atau minta maaf.",
                "level": {
                        "id": 1,
                        "code": "n5",
                        "name": "N5 Dasar Liburan",
                        "sub": "Aksara & Percakapan Penting",
                        "accent_color": "#D9383A",
                        "order": 1,
                        "is_active": true,
                        "created_at": "2026-10-27T06:42:52.000000Z",
                        "updated_at": "2026-10-27T06:42:52.000000Z"
                },
                "quests": [
                        {
                                "id": 23,
                                "lesson_id": 2,
                                "question_number": 1,
                                "question": "Dengarkan percakapan bertukar salam di pagi hari berikut. Kapan sapaan 「おはようございます」 (Ohayō gozaimasu) tepat digunakan?",
                                "badge_text": "Tahap 1 • Chokai: Sapaan Pagi Hari",
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
                                "points": 25,
                                "created_at": "2026-10-28T08:17:14.000000Z",
                                "updated_at": "2026-10-28T08:17:14.000000Z",
                                "image_url": "img/comic_aisatsu.svg",
                                "audio_text": "おはようございます、小林さん！今日も朝からいいお天気ですね。……おはようございます、田中さん！本当に気持ちのいい朝ですね。",
                                "audio_label": "Percakapan Sapaan Pagi"
                        },
                        {
                                "id": 24,
                                "lesson_id": 2,
                                "question_number": 2,
                                "question": "Dengarkan percakapan di stasiun saat petugas membantu mengembalikan tiket yang jatuh. Kalimat apakah yang diucapkan penumpang untuk berterima kasih secara tulus?",
                                "badge_text": "Tahap 1 • Chokai: Etika Terima Kasih Formal",
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
                                "points": 25,
                                "created_at": "2026-10-28T08:17:14.000000Z",
                                "updated_at": "2026-10-28T08:17:14.000000Z",
                                "image_url": "img/comic_station.svg",
                                "audio_text": "お客様、落とされた切符はこちらでしょうか？……あ、私の切符です！拾っていただき、本当にありがとうございます！……いいえ、どういたしまして。お気をつけて！",
                                "audio_label": "Percakapan Stasiun Kereta"
                        },
                        {
                                "id": 25,
                                "lesson_id": 2,
                                "question_number": 3,
                                "question": "Dengarkan interaksi pelanggan di restoran berikut. Mengapa penutur menggunakan kata 「すみません」 (Sumimasen) dalam percakapannya?",
                                "badge_text": "Tahap 2 • Chokai: Kata Ajaib Sumimasen",
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
                                "points": 25,
                                "created_at": "2026-10-28T08:17:14.000000Z",
                                "updated_at": "2026-10-28T08:17:14.000000Z",
                                "image_url": "img/comic_ramen.svg",
                                "audio_text": "すみません！あそこにあるメニューを見せていただけますか？……はい、どうぞ！本日のおすすめメニューです。……すみません、お冷も一ついただけますか？……かしこまりました！",
                                "audio_label": "Percakapan Restoran"
                        }
                ]
        },
        {
                "id": 3,
                "level_id": 1,
                "lesson_number": 3,
                "title": "Angka, Uang Yen & Belanja Praktis di Konbini",
                "subtitle": "Hafal angka dasar, jam, serta hitungan belanja uang koin Yen",
                "badge": "Kosakata",
                "badge_class": "badge-yellow",
                "est_minutes": 15,
                "accent_color": "#F59E0B",
                "num_bg": "#FEF3C7",
                "intro_content": null,
                "order": 3,
                "is_published": true,
                "created_at": "2026-10-27T06:42:52.000000Z",
                "updated_at": "2026-10-28T07:45:34.000000Z",
                "comic_image": "img/comic_konbini.svg",
                "audio_text": "いらっしゃいませ！温めますか？……いいえ、そのままで大丈夫です。いくらですか？……合計で百五十円になります！",
                "audio_label": "Percakapan Kasir Konbini",
                "mascot_tip": "Belanja di konbini (minimarket) Jepang buka 24 jam! Hafalkan angka 100 (Hyaku) dan 1000 (Sen) agar mudah membaca nominal uang Yen.",
                "level": {
                        "id": 1,
                        "code": "n5",
                        "name": "N5 Dasar Liburan",
                        "sub": "Aksara & Percakapan Penting",
                        "accent_color": "#D9383A",
                        "order": 1,
                        "is_active": true,
                        "created_at": "2026-10-27T06:42:52.000000Z",
                        "updated_at": "2026-10-27T06:42:52.000000Z"
                },
                "quests": [
                        {
                                "id": 26,
                                "lesson_id": 3,
                                "question_number": 1,
                                "question": "Dengarkan percakapan saat membayar di minimarket konbini berikut. Berapakah nominal harga belanjaan yang disebutkan oleh kasir?",
                                "badge_text": "Tahap 1 • Chokai: Total Belanja Kasir",
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
                                "points": 25,
                                "created_at": "2026-10-28T08:17:14.000000Z",
                                "updated_at": "2026-10-28T08:17:14.000000Z",
                                "image_url": "img/comic_konbini.svg",
                                "audio_text": "いらっしゃいませ。お茶とおにぎりで、合計で百五十円になります。……百五十円ですね。小銭でちょうど支払います。……百五十円ちょうどお預かりいたします。レシートです！",
                                "audio_label": "Percakapan Kasir Konbini"
                        },
                        {
                                "id": 27,
                                "lesson_id": 3,
                                "question_number": 2,
                                "question": "Dengarkan percakapan pembeli yang menanyakan harga berikut. Pola kalimat apakah yang digunakan pembeli saat menanyakan harga es krim matcha?",
                                "badge_text": "Tahap 2 • Chokai: Menanyakan Harga",
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
                                "points": 25,
                                "created_at": "2026-10-28T08:17:14.000000Z",
                                "updated_at": "2026-10-28T08:17:14.000000Z",
                                "image_url": "img/comic_konbini.svg",
                                "audio_text": "すみません、この抹茶アイスはいくらですか？……そちらは一つ二百円になります。二つ買うと三百五十円ですよ。……じゃあ、二つください！",
                                "audio_label": "Percakapan Menanyakan Harga"
                        }
                ]
        },
        {
                "id": 4,
                "level_id": 1,
                "lesson_number": 4,
                "title": "Kuliner: Memesan Makanan di Restoran & Kafe",
                "subtitle": "Ungkapan memesan ramen, menanyakan rekomendasi, dan meminta bon kasir",
                "badge": "Praktik Langsung",
                "badge_class": "badge-green",
                "est_minutes": 20,
                "accent_color": "#10B981",
                "num_bg": "#DCFCE7",
                "intro_content": null,
                "order": 4,
                "is_published": true,
                "created_at": "2026-10-27T06:42:52.000000Z",
                "updated_at": "2026-10-28T07:45:34.000000Z",
                "comic_image": "img/comic_ramen.svg",
                "audio_text": "ご注文はお決まりですか？……おすすめは何ですか？……こちらの特製醤油ラーメンが一番人気ですよ！……じゃあ、これをください！",
                "audio_label": "Percakapan di Kedai Ramen",
                "mascot_tip": "Di kedai Jepang, panggil pelayan dengan \"Sumimasen!\", lalu tunjuk buku menu sambil bilang: \"Kore o kudasai\" (Tolong yang ini). Sebelum makan ucapkan \"Itadakimasu\"!",
                "level": {
                        "id": 1,
                        "code": "n5",
                        "name": "N5 Dasar Liburan",
                        "sub": "Aksara & Percakapan Penting",
                        "accent_color": "#D9383A",
                        "order": 1,
                        "is_active": true,
                        "created_at": "2026-10-27T06:42:52.000000Z",
                        "updated_at": "2026-10-27T06:42:52.000000Z"
                },
                "quests": [
                        {
                                "id": 28,
                                "lesson_id": 4,
                                "question_number": 1,
                                "question": "Dengarkan suasana percakapan saat pintu kedai ramen dibuka. Sapaan energik apakah yang diteriakkan oleh pelayan kedai untuk menyambut tamu?",
                                "badge_text": "Tahap 1 • Chokai: Sapaan Menyambut Tamu",
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
                                "points": 25,
                                "created_at": "2026-10-28T08:17:14.000000Z",
                                "updated_at": "2026-10-28T08:17:14.000000Z",
                                "image_url": "img/comic_ramen.svg",
                                "audio_text": "ガラガラ… いらっしゃいませ！何名様ですか？……一人です。カウンター席は空いていますか？……はい、空いております！奥の二番席へどうぞ！",
                                "audio_label": "Percakapan Masuk Kedai Ramen"
                        },
                        {
                                "id": 29,
                                "lesson_id": 4,
                                "question_number": 2,
                                "question": "Dengarkan percakapan pemesanan makanan berikut. Kalimat praktis apakah yang diucapkan pembeli sambil menunjuk foto menu pilihan?",
                                "badge_text": "Tahap 2 • Chokai: Pola Menunjuk Menu",
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
                                "points": 25,
                                "created_at": "2026-10-28T08:17:14.000000Z",
                                "updated_at": "2026-10-28T08:17:14.000000Z",
                                "image_url": "img/comic_ramen.svg",
                                "audio_text": "すみません、注文をお願いします。写真のこれ を ください。……特製チャーシュー麺ですね！麺の硬さはどうなさいますか？……普通でお願いします。……かしこまりました！",
                                "audio_label": "Percakapan Memesan Menu"
                        }
                ]
        },
        {
                "id": 5,
                "level_id": 2,
                "lesson_number": 1,
                "title": "Navigasi Stasiun Kereta & Bertanya Arah Wisata",
                "subtitle": "Membaca jalur Yamanote Line, nomor peron, dan bertanya jalan",
                "badge": "Transportasi",
                "badge_class": "badge-blue",
                "est_minutes": 18,
                "accent_color": "#2563EB",
                "num_bg": "#DBEAFE",
                "intro_content": null,
                "order": 5,
                "is_published": true,
                "created_at": "2026-10-27T06:42:52.000000Z",
                "updated_at": "2026-10-28T07:45:34.000000Z",
                "comic_image": "img/comic_station.svg",
                "audio_text": "すみません、渋谷駅に行きたいんですが、どの電車に乗ればいいですか？……山手線の2番線ホームですよ！まっすぐ行ってください。……ありがとうございます！",
                "audio_label": "Percakapan Arah Stasiun Kereta",
                "mascot_tip": "Jika tersesat di stasiun Tokyo, jangan panik! Tanyakan kepada petugas atau warga: \"[Nama Tempat] wa doko desu ka?\". Kata \"Massugu\" artinya lurus ke depan!",
                "level": {
                        "id": 2,
                        "code": "n4",
                        "name": "N4 Menjelajah Jepang",
                        "sub": "Situasi Wisata Mandiri",
                        "accent_color": "#2563EB",
                        "order": 2,
                        "is_active": true,
                        "created_at": "2026-10-27T06:42:52.000000Z",
                        "updated_at": "2026-10-27T06:42:52.000000Z"
                },
                "quests": [
                        {
                                "id": 30,
                                "lesson_id": 5,
                                "question_number": 1,
                                "question": "Dengarkan percakapan turis yang kebingungan mencari jalan berikut. Pola kalimat apakah yang digunakan untuk menanyakan keberadaan stasiun Shibuya?",
                                "badge_text": "Tahap 1 • Chokai: Menanyakan Lokasi Stasiun",
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
                                "points": 25,
                                "created_at": "2026-10-28T08:17:14.000000Z",
                                "updated_at": "2026-10-28T08:17:14.000000Z",
                                "image_url": "img/comic_station.svg",
                                "audio_text": "あのう、道に迷ってしまって… すみません、渋谷駅はどこですか？……渋谷駅ですね！あそこの歩道橋を渡って、まっすぐ歩くと大きな改札口が見えますよ。……ありがとうございます！",
                                "audio_label": "Percakapan Menanyakan Jalan"
                        },
                        {
                                "id": 31,
                                "lesson_id": 5,
                                "question_number": 2,
                                "question": "Dengarkan petunjuk navigasi arah dari warga setempat berikut. Apakah arti dari instruksi 「まっすぐ行ってください」 (massugu itte kudasai)?",
                                "badge_text": "Tahap 2 • Chokai: Memahami Arahan Jalan",
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
                                "points": 25,
                                "created_at": "2026-10-28T08:17:14.000000Z",
                                "updated_at": "2026-10-28T08:17:14.000000Z",
                                "image_url": "img/comic_directions.svg",
                                "audio_text": "すみません、郵便局はどちらでしょうか？……この道をまっすぐ行ってください。信号を一つ越えた右手にありますよ。……まっすぐ行って右手ですね！分かりました！",
                                "audio_label": "Percakapan Penunjuk Arah"
                        }
                ]
        },
        {
                "id": 6,
                "level_id": 2,
                "lesson_number": 2,
                "title": "Belanja Suvenir (Omiyage) & Toko Bebas Pajak",
                "subtitle": "Trik berbelanja oleh-oleh di Asakusa, meminta bungkus kado, & tax-free",
                "badge": "Belanja",
                "badge_class": "badge-purple",
                "est_minutes": 18,
                "accent_color": "#8B5CF6",
                "num_bg": "#F3E8FF",
                "intro_content": null,
                "order": 6,
                "is_published": true,
                "created_at": "2026-10-27T06:42:52.000000Z",
                "updated_at": "2026-10-28T07:45:34.000000Z",
                "comic_image": "img/comic_souvenir.svg",
                "audio_text": "これを見せていただけますか？……はい、どうぞ！免税もご利用いただけますよ！……クレジットカードは使えますか？……はい、使えます！",
                "audio_label": "Percakapan Toko Suvenir Asakusa",
                "mascot_tip": "Omiyage (oleh-oleh suvenir) adalah tradisi penting di Jepang. Tunjukkan paspor saat belanja di atas 5.000 Yen untuk mendapatkan pembebasan pajak konsumsi 10%!",
                "level": {
                        "id": 2,
                        "code": "n4",
                        "name": "N4 Menjelajah Jepang",
                        "sub": "Situasi Wisata Mandiri",
                        "accent_color": "#2563EB",
                        "order": 2,
                        "is_active": true,
                        "created_at": "2026-10-27T06:42:52.000000Z",
                        "updated_at": "2026-10-27T06:42:52.000000Z"
                },
                "quests": [
                        {
                                "id": 32,
                                "lesson_id": 6,
                                "question_number": 1,
                                "question": "Dengarkan percakapan di toko suvenir Asakusa berikut. Kalimat santun apakah yang diucapkan pembeli saat meminta staf mengambilkan barang dari etalase?",
                                "badge_text": "Tahap 1 • Chokai: Meminta Izin Melihat Barang",
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
                                "points": 25,
                                "created_at": "2026-10-28T08:17:14.000000Z",
                                "updated_at": "2026-10-28T08:17:14.000000Z",
                                "image_url": "img/comic_souvenir.svg",
                                "audio_text": "あのう、ガラスケースの中の扇子を近くで見たいのですが… これを見せてください。……はい、かしこまりました！とても綺麗な京都の手作り扇子ですよ、どうぞ！……わあ、素敵ですね！",
                                "audio_label": "Percakapan Toko Suvenir"
                        },
                        {
                                "id": 33,
                                "lesson_id": 6,
                                "question_number": 2,
                                "question": "Dengarkan percakapan saat hendak membayar di kasir berikut. Pertanyaan apakah yang diajukan pembeli mengenai metode pembayaran non-tunai?",
                                "badge_text": "Tahap 2 • Chokai: Metode Pembayaran Kartu",
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
                                "points": 25,
                                "created_at": "2026-10-28T08:17:14.000000Z",
                                "updated_at": "2026-10-28T08:17:14.000000Z",
                                "image_url": "img/comic_souvenir.svg",
                                "audio_text": "合計で三千五百円になります。……すみません、現金の持ち合わせが少なくて… クレジットカードは使えますか？……はい、タッチ決済もご利用いただけますよ！……良かったです！カードでお願いします。",
                                "audio_label": "Percakapan Transaksi Kasir"
                        }
                ]
        },
        {
                "id": 7,
                "level_id": 2,
                "lesson_number": 3,
                "title": "Check-in Hotel / Ryokan & Bertanya Fasilitas",
                "subtitle": "Prosedur resepsionis, menitipkan koper bagasi, dan sandi Wi-Fi",
                "badge": "Penginapan",
                "badge_class": "badge-indigo",
                "est_minutes": 15,
                "accent_color": "#4F46E5",
                "num_bg": "#EEF2FF",
                "intro_content": null,
                "order": 7,
                "is_published": true,
                "created_at": "2026-10-27T06:42:52.000000Z",
                "updated_at": "2026-10-28T07:45:34.000000Z",
                "comic_image": "img/comic_hotel.svg",
                "audio_text": "いらっしゃいませ、ご宿泊ですか？……はい、チェックインをお願いします。予約名はケンジです！……かしこまりました。お部屋は302号室です。",
                "audio_label": "Percakapan Resepsionis Hotel",
                "mascot_tip": "Di meja resepsionis, katakan: \"Chekkuin o onegaishimasu\". Sebelum jam check-in (biasanya jam 15:00), kamu bisa menitipkan tas koper dengan \"Nimotsu o azukatte moraemasu ka?\".",
                "level": {
                        "id": 2,
                        "code": "n4",
                        "name": "N4 Menjelajah Jepang",
                        "sub": "Situasi Wisata Mandiri",
                        "accent_color": "#2563EB",
                        "order": 2,
                        "is_active": true,
                        "created_at": "2026-10-27T06:42:52.000000Z",
                        "updated_at": "2026-10-27T06:42:52.000000Z"
                },
                "quests": [
                        {
                                "id": 34,
                                "lesson_id": 7,
                                "question_number": 1,
                                "question": "Dengarkan percakapan saat tamu tiba di meja resepsionis hotel berikut. Kalimat resmi apakah yang diucapkan tamu untuk memulai proses registrasi menginap?",
                                "badge_text": "Tahap 1 • Chokai: Prosedur Check-in",
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
                                "points": 25,
                                "created_at": "2026-10-28T08:17:14.000000Z",
                                "updated_at": "2026-10-28T08:17:14.000000Z",
                                "image_url": "img/comic_hotel.svg",
                                "audio_text": "いらっしゃいませ、グランドホテルへようこそ。……こんにちは、今日から二泊で予約しているスミスです。チェックインをお願いします。……スミス様ですね、ご予約確認いたしました。パスポートのご提示をお願いいたします。",
                                "audio_label": "Percakapan Resepsionis Hotel"
                        },
                        {
                                "id": 35,
                                "lesson_id": 7,
                                "question_number": 2,
                                "question": "Dengarkan percakapan penitipan barang di lobi hotel berikut. Mengapa tamu menitipkan kopernya kepada staf hotel?",
                                "badge_text": "Tahap 2 • Chokai: Menitipkan Koper",
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
                                "points": 25,
                                "created_at": "2026-10-28T08:17:14.000000Z",
                                "updated_at": "2026-10-28T08:17:14.000000Z",
                                "image_url": "img/comic_hotel.svg",
                                "audio_text": "チェックインは午後三時からとなっております。……まだお昼の十二時なので、観光に行ってきます。荷物を預かってもらえますか？……はい、かしこまりました！クロークでお預かりいたします。こちらがお控え札です。",
                                "audio_label": "Percakapan Menitipkan Koper"
                        }
                ]
        },
        {
                "id": 8,
                "level_id": 2,
                "lesson_number": 4,
                "title": "Situasi Darurat & Ungkapan Penyelamat Traveling",
                "subtitle": "Mencari toilet darurat, klinik dokter, apotek, dan pos polisi Koban",
                "badge": "Penting",
                "badge_class": "badge-red",
                "est_minutes": 15,
                "accent_color": "#EF4444",
                "num_bg": "#FEE2E2",
                "intro_content": null,
                "order": 8,
                "is_published": true,
                "created_at": "2026-10-27T06:42:52.000000Z",
                "updated_at": "2026-10-28T07:45:34.000000Z",
                "comic_image": "img/comic_emergency.svg",
                "audio_text": "すみません、気分が悪くなってしまいました……病院は近くにありますか？……駅のすぐ隣にクリニックがありますよ。大丈夫ですか？……ありがとうございます！",
                "audio_label": "Percakapan Bantuan Darurat",
                "mascot_tip": "Kata penyelamat nomor 1 di Jepang adalah \"Toire wa doko desu ka?\" (Di mana toilet?). Jika tersesat atau butuh pertolongan, carilah pos polisi bertuliskan 交番 (Koban)!",
                "level": {
                        "id": 2,
                        "code": "n4",
                        "name": "N4 Menjelajah Jepang",
                        "sub": "Situasi Wisata Mandiri",
                        "accent_color": "#2563EB",
                        "order": 2,
                        "is_active": true,
                        "created_at": "2026-10-27T06:42:52.000000Z",
                        "updated_at": "2026-10-27T06:42:52.000000Z"
                },
                "quests": [
                        {
                                "id": 36,
                                "lesson_id": 8,
                                "question_number": 1,
                                "question": "Dengarkan percakapan darurat di stasiun kereta berikut. Fasilitas apakah yang sangat mendesak ditanyakan oleh penutur pertama?",
                                "badge_text": "Tahap 1 • Chokai: Mencari Toilet Darurat",
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
                                "points": 25,
                                "created_at": "2026-10-28T08:17:14.000000Z",
                                "updated_at": "2026-10-28T08:17:14.000000Z",
                                "image_url": "img/comic_station.svg",
                                "audio_text": "すみません！急にお腹が痛くなって困っています… 駅のトイレはどこですか？……大丈夫ですか？トイレなら、あの階段を降りてすぐ右手にありますよ！急いでください！……ありがとうございます！助かりました！",
                                "audio_label": "Percakapan Darurat Toilet"
                        },
                        {
                                "id": 37,
                                "lesson_id": 8,
                                "question_number": 2,
                                "question": "Dengarkan percakapan saat turis meminta bantuan petugas pos polisi berikut. Kalimat sopan apakah yang diucapkan turis untuk memastikan apakah petugas bisa berbahasa Inggris?",
                                "badge_text": "Tahap 2 • Chokai: Menanyakan Kemampuan Bahasa Inggris",
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
                                "points": 25,
                                "created_at": "2026-10-28T08:17:14.000000Z",
                                "updated_at": "2026-10-28T08:17:14.000000Z",
                                "image_url": "img/comic_emergency.svg",
                                "audio_text": "あのう、財布を落としてしまって… 日本語があまり話せません。英語が話せますか？……はい、少しなら英語で話せますよ。Please calm down. Where did you lose your wallet?……良かった、駅のベンチです！",
                                "audio_label": "Percakapan Bantuan Bahasa"
                        }
                ]
        }
];

        foreach ($lessonsData as $ld) {
            MateriLesson::updateOrCreate(['id' => $ld['id']], [
                'id' => $ld['id'],
                'level_id' => $ld['level_id'],
                'lesson_number' => $ld['lesson_number'],
                'title' => $ld['title'],
                'subtitle' => $ld['subtitle'],
                'badge' => $ld['badge'],
                'badge_class' => $ld['badge_class'],
                'est_minutes' => $ld['est_minutes'],
                'accent_color' => $ld['accent_color'],
                'num_bg' => $ld['num_bg'],
                'comic_image' => $ld['comic_image'],
                'audio_text' => $ld['audio_text'],
                'audio_label' => $ld['audio_label'],
                'mascot_tip' => $ld['mascot_tip'],
                'order' => $ld['order'],
                'is_published' => true,
            ]);
        }

        // 4. Soal Quest Kuis (23 Soal Lengkap Bergambar & Dialog Audio)
        LessonQuest::query()->delete();
        $questsData = [
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
];

        foreach ($questsData as $q) {
            LessonQuest::create([
                'id' => $q['id'],
                'lesson_id' => $q['lesson_id'],
                'question_number' => $q['question_number'],
                'badge_text' => $q['badge_text'],
                'question' => $q['question'],
                'image_url' => $q['image_url'],
                'audio_text' => $q['audio_text'],
                'audio_label' => $q['audio_label'],
                'options' => $q['options'],
                'explanation' => $q['explanation'],
                'points' => $q['points'],
            ]);
        }
    }
}
