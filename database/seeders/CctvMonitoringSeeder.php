<?php

namespace Database\Seeders;

use App\Models\Camera;
use App\Models\Room;
use App\Models\Schedule;
use App\Models\Subject;
use App\Models\Teacher;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CctvMonitoringSeeder extends Seeder
{
    public function run(): void
    {
        // === TRUNCATE ALL TABLES ===
        if (DB::getDriverName() === 'mysql') {
            DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        } elseif (DB::getDriverName() === 'sqlite') {
            DB::statement('PRAGMA foreign_keys = OFF;');
        }

        Schedule::truncate();
        Camera::truncate();
        Room::truncate();
        Subject::truncate();
        Teacher::truncate();

        if (DB::getDriverName() === 'mysql') {
            DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        } elseif (DB::getDriverName() === 'sqlite') {
            DB::statement('PRAGMA foreign_keys = ON;');
        }

        // =====================================================================
        // 1. ROOMS — 3 Lab Produktif utama + Channel Kosong lainnya
        // =====================================================================
        $roomLorongBawah = Room::create([
            'code'     => 'LORONG_BAWAH',
            'name'     => 'Lorong Bawah',
            'building' => 'Gedung Utama',
            'floor'    => 1,
            'capacity' => 0,
        ]);

        $labUjungAtas = Room::create([
            'code'     => 'LAB_UJUNG_ATAS',
            'name'     => 'Lab Ujung Atas (Lantai 2)',
            'building' => 'Gedung Praktek SIJA',
            'floor'    => 2,
            'capacity' => 36,
        ]);

        $roomLabTengahAtas = Room::create([
            'code'     => 'LAB_TENGAH_ATAS',
            'name'     => 'Lab Tengah Atas (Lantai 2)',
            'building' => 'Gedung Praktek SIJA',
            'floor'    => 2,
            'capacity' => 0,
        ]);

        $roomAlat = Room::create([
            'code'     => 'RUANG_ALAT',
            'name'     => 'Ruang Alat',
            'building' => 'Gedung Praktek SIJA',
            'floor'    => 1,
            'capacity' => 0,
        ]);

        $labUjungBawah = Room::create([
            'code'     => 'LAB_UJUNG_BAWAH',
            'name'     => 'Lab Bawah Ujung',
            'building' => 'Gedung Praktek SIJA',
            'floor'    => 1,
            'capacity' => 36,
        ]);

        $roomLorongAtas = Room::create([
            'code'     => 'LORONG_ATAS',
            'name'     => 'Lorong Atas',
            'building' => 'Gedung Utama',
            'floor'    => 2,
            'capacity' => 0,
        ]);

        $labTengahBawah = Room::create([
            'code'     => 'LAB_TENGAH_BAWAH',
            'name'     => 'Lab Bawah Tengah',
            'building' => 'Gedung Praktek SIJA',
            'floor'    => 1,
            'capacity' => 36,
        ]);

        // =====================================================================
        // 2. CAMERAS — D1, D2, D3, D4, D5, D6, D8 (Match Image NVR)
        // =====================================================================
        Camera::create([
            'channel_code'         => 'D1',
            'name'                 => 'Lorong Bawah',
            'nvr_brand'            => 'EZVIZ / Hikvision',
            'ip_address'           => '172.20.8.7',
            'username'             => 'admin',
            'password'             => 'SIJA2026_',
            'room_id'              => $roomLorongBawah->id,
            'show_schedule_overlay'=> false,
        ]);

        Camera::create([
            'channel_code'         => 'D2',
            'name'                 => 'Lab Ujung Atas',
            'nvr_brand'            => 'EZVIZ / Hikvision',
            'ip_address'           => '172.20.8.254',
            'username'             => 'admin',
            'password'             => 'QZDIUJ',
            'room_id'              => $labUjungAtas->id,
            'show_schedule_overlay'=> true,
        ]);

        Camera::create([
            'channel_code'         => 'D3',
            'name'                 => 'Lab Tengah Atas',
            'nvr_brand'            => 'EZVIZ / Hikvision',
            'ip_address'           => '172.20.8.253',
            'username'             => 'admin',
            'password'             => 'sijagoan1234_',
            'room_id'              => $roomLabTengahAtas->id,
            'show_schedule_overlay'=> false,
        ]);

        Camera::create([
            'channel_code'         => 'D4',
            'name'                 => 'Ruang Alat',
            'nvr_brand'            => 'EZVIZ / Hikvision',
            'ip_address'           => '172.20.8.5',
            'username'             => 'admin',
            'password'             => 'sijagoan1234_',
            'room_id'              => $roomAlat->id,
            'show_schedule_overlay'=> false,
        ]);

        Camera::create([
            'channel_code'         => 'D5',
            'name'                 => 'Lab Bawah Ujung',
            'nvr_brand'            => 'EZVIZ / Hikvision',
            'ip_address'           => '172.20.8.9',
            'username'             => 'admin',
            'password'             => 'sijagoan1234_',
            'room_id'              => $labUjungBawah->id,
            'show_schedule_overlay'=> true,
        ]);

        Camera::create([
            'channel_code'         => 'D6',
            'name'                 => 'Lorong Atas',
            'nvr_brand'            => 'EZVIZ / Hikvision',
            'ip_address'           => '172.20.8.2',
            'username'             => 'admin',
            'password'             => 'SIJA2026_',
            'room_id'              => $roomLorongAtas->id,
            'show_schedule_overlay'=> false,
        ]);

        Camera::create([
            'channel_code'         => 'D8',
            'name'                 => 'Lab Bawah Tengah',
            'nvr_brand'            => 'EZVIZ / Hikvision',
            'ip_address'           => '172.20.8.249',
            'username'             => 'admin',
            'password'             => 'OBCCRL',
            'room_id'              => $labTengahBawah->id,
            'show_schedule_overlay'=> true,
        ]);

        // =====================================================================
        // 3. TEACHERS — Nama guru ASLI SMKN 1 Cibinong
        // =====================================================================
        $tDanu    = Teacher::create(['name' => 'Danu Winardi, ST',              'code' => 'DW',  'specialization' => 'SIJA: System Administration']);
        $tArya    = Teacher::create(['name' => 'Arya Prawirandika, S.Kom',      'code' => 'AP',  'specialization' => 'Network Engineering & MPP-FITx']);
        $tDon     = Teacher::create(['name' => 'Donianto Bonis Nugroho, S.Kom', 'code' => 'DBN', 'specialization' => 'Mobile Development & Web Development']);
        $tRinaldi = Teacher::create(['name' => 'Rinaldi Maulana, S.Pd',         'code' => 'RM',  'specialization' => 'Pendidikan Jasmani Olahraga dan Kesehatan']);
        $tSuberi  = Teacher::create(['name' => 'Subari Chairulloh, S.Kom',        'code' => 'SC',  'specialization' => 'SIJA: CCNA']);
        $tKuat    = Teacher::create(['name' => 'Kuat Budi Santoso, S.Kom',      'code' => 'KBS', 'specialization' => 'Network Fundamental & Informatika']);
        $tWindy   = Teacher::create(['name' => 'Windy Ariani, S.Pd',            'code' => 'WA',  'specialization' => 'Projek IPAS']);
        $tAndang  = Teacher::create(['name' => 'Andang Teruna, S.Kom',          'code' => 'AT',  'specialization' => 'Programming Fundamental']);
        $tDayu    = Teacher::create(['name' => 'Dayu Destamy Ariefin, S.Pd',    'code' => 'DDA', 'specialization' => 'Linux Fundamental & Development & Operation']);

        // =====================================================================
        // 4. SUBJECTS — Mata pelajaran ASLI SMKN 1 Cibinong
        // =====================================================================
        $sSysAdmin  = Subject::create(['code' => 'SIJA-SA',     'name' => 'SIJA: System Administration',          'short_name' => 'System Admin']);
        $sFITx      = Subject::create(['code' => 'MPP-FITx',    'name' => 'MPP-SIJA: FITx',                       'short_name' => 'MPP FITx']);
        $sNetEng    = Subject::create(['code' => 'SIJA-NE',     'name' => 'SIJA: Network Engineering',            'short_name' => 'Network Engineering']);
        $sMobileDev = Subject::create(['code' => 'SIJA-MD',     'name' => 'SIJA: Mobile Development',            'short_name' => 'Mobile Dev']);
        $sWebDev    = Subject::create(['code' => 'SIJA-WD',     'name' => 'SIJA: Web Development',               'short_name' => 'Web Dev']);
        $sCCNA      = Subject::create(['code' => 'SIJA-CCNA',   'name' => 'SIJA: CCNA',                          'short_name' => 'CCNA']);
        $sIoT       = Subject::create(['code' => 'SIJA-IOT',    'name' => 'SIJA: IoT',                           'short_name' => 'IoT']);
        $sDevOp     = Subject::create(['code' => 'SIJA-DO',     'name' => 'SIJA: Development & Operation',       'short_name' => 'Dev & Op']);
        $sHTCNA     = Subject::create(['code' => 'HPP-HTCNA',   'name' => 'HPP-SIJA: HTCNA',                     'short_name' => 'HTCNA']);
        $sBasisData = Subject::create(['code' => 'HPP-BD',      'name' => 'HPP: Basis Data',                     'short_name' => 'Basis Data']);
        $sKoding    = Subject::create(['code' => 'KODING-AF',   'name' => 'Koding dan Kecakapan Art/Fisika',     'short_name' => 'Koding & Art']);
        $sNetFund   = Subject::create(['code' => 'NET-FUND',    'name' => 'DDPPLG: Network Fundamental',         'short_name' => 'Network Fundamental']);
        $sLinux     = Subject::create(['code' => 'LINUX-FUND',  'name' => 'DDPPLG: Linux Fundamental',           'short_name' => 'Linux Fundamental']);
        $sProgFund  = Subject::create(['code' => 'PROG-FUND',   'name' => 'DDPFLG: Programming Fundamental',    'short_name' => 'Programming Fundamental']);
        $sInfo      = Subject::create(['code' => 'INFORMATIKA', 'name' => 'Informatika',                         'short_name' => 'Informatika']);
        $sIPAS      = Subject::create(['code' => 'IPAS',        'name' => 'Projek IPAS',                         'short_name' => 'IPAS']);
        $sPJOK      = Subject::create(['code' => 'PJOK',        'name' => 'Pend. Jasmani Olahraga dan Kesehatan','short_name' => 'PJOK']);

        // =====================================================================
        // 5. SCHEDULES — Blok 2
        // =====================================================================

        // ─────────────────────────────────────────────────────────────────────
        // 1) LAB UJUNG ATAS (Camera D1) → KELAS 10 (X SIJA 1)
        // ─────────────────────────────────────────────────────────────────────
        // SENIN
        $this->sched('Senin', 'Jam 2-5', '07:10', '09:50', 'X SIJA 1', $labUjungAtas->id, $tKuat->id,    $sKoding->id);
        $this->sched('Senin', 'Jam 6-8', '10:10', '12:10', 'X SIJA 1', $labUjungAtas->id, $tKuat->id,    $sNetFund->id);
        $this->sched('Senin', 'Jam 9',   '13:00', '13:40', 'X SIJA 1', $labUjungAtas->id, $tWindy->id,   $sIPAS->id);
        $this->sched('Senin', 'Jam 10-11','13:40','15:00', 'X SIJA 1', $labUjungAtas->id, $tRinaldi->id, $sPJOK->id);
        // SELASA
        $this->sched('Selasa', 'Jam 1-8', '06:30', '12:10', 'X SIJA 1', $labUjungAtas->id, $tDayu->id, $sLinux->id);
        $this->sched('Selasa', 'Jam 9-11','13:00', '15:00', 'X SIJA 1', $labUjungAtas->id, $tKuat->id, $sNetFund->id);
        // RABU
        $this->sched('Rabu', 'Jam 2-3', '07:10', '08:30', 'X SIJA 1', $labUjungAtas->id, $tWindy->id,  $sIPAS->id);
        $this->sched('Rabu', 'Jam 4-5', '08:30', '09:50', 'X SIJA 1', $labUjungAtas->id, $tAndang->id, $sProgFund->id);
        $this->sched('Rabu', 'Jam 6-8', '10:10', '12:10', 'X SIJA 1', $labUjungAtas->id, $tAndang->id, $sProgFund->id);
        $this->sched('Rabu', 'Jam 9-11','13:00', '15:00', 'X SIJA 1', $labUjungAtas->id, $tAndang->id, $sProgFund->id);
        // KAMIS
        $this->sched('Kamis', 'Jam 1-2', '06:30', '07:50', 'X SIJA 1', $labUjungAtas->id, $tKuat->id,  $sInfo->id);
        $this->sched('Kamis', 'Jam 3-4', '07:50', '09:10', 'X SIJA 1', $labUjungAtas->id, $tKuat->id,  $sNetFund->id);
        $this->sched('Kamis', 'Jam 5',   '09:10', '09:50', 'X SIJA 1', $labUjungAtas->id, $tWindy->id, $sIPAS->id);
        $this->sched('Kamis', 'Jam 6-8', '10:10', '12:10', 'X SIJA 1', $labUjungAtas->id, $tWindy->id, $sIPAS->id);
        $this->sched('Kamis', 'Jam 9-11','13:00', '15:00', 'X SIJA 1', $labUjungAtas->id, $tWindy->id, $sIPAS->id);
        // JUMAT
        $this->sched('Jumat', 'Jam 2-5', '07:10', '09:50', 'X SIJA 1', $labUjungAtas->id, $tKuat->id, $sInfo->id);
        $this->sched('Jumat', 'Jam 6-7', '10:10', '11:30', 'X SIJA 1', $labUjungAtas->id, $tKuat->id, $sInfo->id);
        $this->sched('Jumat', 'Jam 8',   '13:00', '13:40', 'X SIJA 1', $labUjungAtas->id, $tKuat->id, $sInfo->id);

        // ─────────────────────────────────────────────────────────────────────
        // 2) LAB TENGAH BAWAH (Camera D8) → KELAS 12 (XII SIJA 1)
        // ─────────────────────────────────────────────────────────────────────
        // SENIN
        $this->sched('Senin', 'Jam 2-3', '07:10', '08:30', 'XII SIJA 1', $labTengahBawah->id, $tSuberi->id, $sCCNA->id);
        $this->sched('Senin', 'Jam 4-5', '08:30', '09:50', 'XII SIJA 1', $labTengahBawah->id, $tDon->id,    $sWebDev->id);
        $this->sched('Senin', 'Jam 6-8', '10:10', '12:10', 'XII SIJA 1', $labTengahBawah->id, $tDon->id,    $sWebDev->id);
        $this->sched('Senin', 'Jam 9-11','13:00', '15:00', 'XII SIJA 1', $labTengahBawah->id, $tDon->id,    $sWebDev->id);
        // SELASA
        $this->sched('Selasa', 'Jam 1-2', '06:30', '07:50', 'XII SIJA 1', $labTengahBawah->id, $tArya->id, $sIoT->id);
        $this->sched('Selasa', 'Jam 3-5', '07:50', '09:50', 'XII SIJA 1', $labTengahBawah->id, $tArya->id, $sHTCNA->id);
        $this->sched('Selasa', 'Jam 6',   '10:10', '10:50', 'XII SIJA 1', $labTengahBawah->id, $tArya->id, $sHTCNA->id);
        $this->sched('Selasa', 'Jam 7-8', '10:50', '12:10', 'XII SIJA 1', $labTengahBawah->id, $tDon->id,  $sBasisData->id);
        $this->sched('Selasa', 'Jam 9-11','13:00', '15:00', 'XII SIJA 1', $labTengahBawah->id, $tDon->id,  $sBasisData->id);
        // RABU
        $this->sched('Rabu', 'Jam 1-5', '06:30', '09:50', 'XII SIJA 1', $labTengahBawah->id, $tRinaldi->id, $sPJOK->id);
        $this->sched('Rabu', 'Jam 6-8', '10:10', '12:10', 'XII SIJA 1', $labTengahBawah->id, $tDayu->id,   $sSysAdmin->id);
        $this->sched('Rabu', 'Jam 9-11','13:00', '15:00', 'XII SIJA 1', $labTengahBawah->id, $tDayu->id,   $sDevOp->id);
        // KAMIS
        $this->sched('Kamis', 'Jam 1',   '06:30', '07:10', 'XII SIJA 1', $labTengahBawah->id, $tDon->id,  $sWebDev->id);
        $this->sched('Kamis', 'Jam 2-5', '07:10', '09:50', 'XII SIJA 1', $labTengahBawah->id, $tDon->id,  $sBasisData->id);
        $this->sched('Kamis', 'Jam 6-8', '10:10', '12:10', 'XII SIJA 1', $labTengahBawah->id, $tDayu->id, $sDevOp->id);
        $this->sched('Kamis', 'Jam 9-11','13:00', '15:00', 'XII SIJA 1', $labTengahBawah->id, $tDayu->id, $sDevOp->id);
        // JUMAT
        $this->sched('Jumat', 'Jam 2-5', '07:10', '09:50', 'XII SIJA 1', $labTengahBawah->id, $tSuberi->id, $sCCNA->id);
        $this->sched('Jumat', 'Jam 6-7', '10:10', '11:30', 'XII SIJA 1', $labTengahBawah->id, $tSuberi->id, $sCCNA->id);
        $this->sched('Jumat', 'Jam 8',   '13:00', '13:40', 'XII SIJA 1', $labTengahBawah->id, $tSuberi->id, $sCCNA->id);

        // ─────────────────────────────────────────────────────────────────────
        // 3) LAB UJUNG BAWAH (Camera D5) → KELAS 11 (XI SIJA)
        // ─────────────────────────────────────────────────────────────────────
        // SENIN
        $this->sched('Senin', 'Jam 2-3',   '07:10', '08:30', 'XI SIJA', $labUjungBawah->id, $tDanu->id,    $sSysAdmin->id);
        $this->sched('Senin', 'Jam 4-5',   '08:30', '09:50', 'XI SIJA', $labUjungBawah->id, $tArya->id,    $sFITx->id);
        $this->sched('Senin', 'Jam 6-8',   '10:10', '12:10', 'XI SIJA', $labUjungBawah->id, $tArya->id,    $sFITx->id);
        $this->sched('Senin', 'Jam 9',     '13:00', '13:40', 'XI SIJA', $labUjungBawah->id, $tArya->id,    $sFITx->id);
        $this->sched('Senin', 'Jam 10-11', '13:40', '15:00', 'XI SIJA', $labUjungBawah->id, $tRinaldi->id, $sPJOK->id);
        // SELASA
        $this->sched('Selasa', 'Jam 1-5', '06:30', '09:50', 'XI SIJA', $labUjungBawah->id, $tSuberi->id, $sCCNA->id);
        $this->sched('Selasa', 'Jam 6-7', '10:10', '11:30', 'XI SIJA', $labUjungBawah->id, $tSuberi->id, $sCCNA->id);
        $this->sched('Selasa', 'Jam 8',   '11:30', '12:10', 'XI SIJA', $labUjungBawah->id, $tArya->id,   $sNetEng->id);
        $this->sched('Selasa', 'Jam 9-11','13:00', '15:00', 'XI SIJA', $labUjungBawah->id, $tArya->id,   $sNetEng->id);
        // RABU
        $this->sched('Rabu', 'Jam 2-3', '07:10', '08:30', 'XI SIJA', $labUjungBawah->id, $tDayu->id, $sDevOp->id);
        $this->sched('Rabu', 'Jam 4-5', '08:30', '09:50', 'XI SIJA', $labUjungBawah->id, $tArya->id, $sNetEng->id);
        $this->sched('Rabu', 'Jam 6',   '10:10', '10:50', 'XI SIJA', $labUjungBawah->id, $tArya->id, $sNetEng->id);
        $this->sched('Rabu', 'Jam 7-8', '10:50', '12:10', 'XI SIJA', $labUjungBawah->id, $tDon->id,  $sMobileDev->id);
        $this->sched('Rabu', 'Jam 9-11','13:00', '15:00', 'XI SIJA', $labUjungBawah->id, $tDon->id,  $sMobileDev->id);
        // KAMIS
        $this->sched('Kamis', 'Jam 1-4', '06:30', '09:10', 'XI SIJA', $labUjungBawah->id, $tRinaldi->id, $sPJOK->id);
        $this->sched('Kamis', 'Jam 6-8', '10:10', '12:10', 'XI SIJA', $labUjungBawah->id, $tDayu->id,   $sDevOp->id);
        $this->sched('Kamis', 'Jam 9-11','13:00', '15:00', 'XI SIJA', $labUjungBawah->id, $tDon->id,    $sMobileDev->id);
        // JUMAT
        $this->sched('Jumat', 'Jam 2-5', '07:10', '09:50', 'XI SIJA', $labUjungBawah->id, $tDanu->id, $sSysAdmin->id);
        $this->sched('Jumat', 'Jam 6-7', '10:10', '11:30', 'XI SIJA', $labUjungBawah->id, $tDanu->id, $sSysAdmin->id);
        $this->sched('Jumat', 'Jam 8',   '13:00', '13:40', 'XI SIJA', $labUjungBawah->id, $tDanu->id, $sSysAdmin->id);
    }

    // ─── Helper ──────────────────────────────────────────────────────────────
    private function sched(
        string $day,
        string $periodLabel,
        string $startTime,
        string $endTime,
        string $classGroup,
        int    $roomId,
        int    $teacherId,
        int    $subjectId
    ): void {
        Schedule::create([
            'day_of_week'  => $day,
            'period_label' => $periodLabel,
            'start_time'   => $startTime . ':00',
            'end_time'     => $endTime . ':00',
            'class_group'  => $classGroup,
            'room_id'      => $roomId,
            'teacher_id'   => $teacherId,
            'subject_id'   => $subjectId,
            'status'       => 'active',
        ]);
    }
}
