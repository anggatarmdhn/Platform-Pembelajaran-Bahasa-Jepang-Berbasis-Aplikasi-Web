<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="csrf-token" content="{{ csrf_token() }}" />
  <title>Dashboard Master Guru - SIJapanese</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="{{ asset('css/style.css') }}" />
  <link rel="stylesheet" href="{{ asset('css/materi.css') }}" />
  <style>
    /* Styling Khusus Guru Master Dashboard */
    :root {
      --guru-bg: #F8FAFC;
      --card-white: #FFFFFF;
    }
    body {
      background: var(--guru-bg);
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: #0F172A;
      margin: 0;
      padding: 0;
    }
    .guru-navbar {
      background: #FFFFFF;
      border-bottom: 2px solid #E2E8F0;
      padding: 0.85rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);
      flex-wrap: wrap;
      gap: 1rem;
    }
    .guru-nav-left {
      display: flex;
      align-items: center;
      gap: 1.2rem;
    }
    .guru-brand-wrap {
      display: inline-flex;
      align-items: center;
      gap: 0.55rem;
      flex-shrink: 0;
    }
    .svg-crest-mini {
      width: 26px;
      height: 26px;
      display: block;
    }
    .guru-brand-text {
      font-weight: 900;
      font-size: 1.25rem;
      color: #0F172A;
      letter-spacing: -0.5px;
    }
    .badge-master-guru {
      background: #FEF2F2;
      color: #D9383A;
      border: 1.5px solid #FCA5A5;
      font-size: 0.74rem;
      font-weight: 800;
      padding: 0.35rem 0.85rem;
      border-radius: var(--radius-pill);
      letter-spacing: 0.5px;
      white-space: nowrap;
    }
    .btn-return-app {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      background: #F1F5F9;
      color: #1E293B;
      border: 1.5px solid #CBD5E1;
      padding: 0.45rem 1rem;
      border-radius: var(--radius-pill);
      font-size: 0.85rem;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.2s ease;
      white-space: nowrap;
    }
    .btn-return-app .svg-icon-mini {
      width: 15px;
      height: 15px;
      stroke: #334155;
      fill: none;
      stroke-width: 2.2;
    }
    .btn-return-app:hover {
      background: #EFF6FF;
      color: #1D4ED8;
      border-color: #93C5FD;
    }
    .btn-return-app:hover .svg-icon-mini {
      stroke: #1D4ED8;
    }
    .guru-profile-bar {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      order: 3;
      margin-left: auto;
    }
    .guru-avatar-circle {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: #FEE2E2;
      border: 2px solid #D9383A;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
    }
    .guru-info-text {
      display: flex;
      flex-direction: column;
      line-height: 1.25;
    }
    .guru-name {
      font-weight: 800;
      font-size: 0.95rem;
    }
    .guru-role-sub {
      font-size: 0.72rem;
      color: #D9383A;
      font-weight: 700;
    }

    /* Layout Konten */
    .guru-container {
      max-width: 1200px;
      margin: 1.8rem auto 4rem;
      padding: 0 1.5rem;
    }

    /* KPI Stat Cards (Warna-Warni) */
    .guru-kpi-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
      gap: 1.2rem;
      margin-bottom: 2rem;
    }
    .kpi-card {
      background: #FFFFFF;
      border-radius: 16px;
      padding: 1.4rem;
      border: 1.5px solid #E2E8F0;
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
      position: relative;
      overflow: hidden;
      transition: transform 0.2s ease;
    }
    .kpi-card:hover {
      transform: translateY(-3px);
    }
    .kpi-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
    }
    .kpi-red::before { background: var(--red); }
    .kpi-blue::before { background: var(--blue); }
    .kpi-yellow::before { background: var(--yellow); }
    .kpi-green::before { background: var(--green); }
    .kpi-purple::before { background: var(--purple); }

    .kpi-label {
      font-size: 0.82rem;
      font-weight: 700;
      color: #64748B;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .kpi-value {
      font-size: 2.1rem;
      font-weight: 900;
      color: #0F172A;
      margin: 0.35rem 0 0.2rem;
    }
    .kpi-sub {
      font-size: 0.78rem;
      color: #94A3B8;
      font-weight: 600;
    }

    /* Tab Navigasi Master */
    .guru-tabs-nav {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      background: #FFFFFF;
      padding: 0.6rem;
      border-radius: 16px;
      border: 1.5px solid #E2E8F0;
      margin-bottom: 1.8rem;
      overflow-x: auto;
    }
    .guru-tab-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.65rem 1.2rem;
      border-radius: 12px;
      border: none;
      background: transparent;
      color: #475569;
      font-weight: 700;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.2s ease;
      white-space: nowrap;
    }
    .guru-tab-btn.active {
      background: var(--red);
      color: #FFFFFF;
      box-shadow: 0 4px 12px rgba(217, 56, 58, 0.25);
    }
    .guru-tab-content {
      display: none;
    }
    .guru-tab-content.active {
      display: block;
    }

    /* Box Card Standard */
    .master-card {
      background: #FFFFFF;
      border: 1.5px solid #E2E8F0;
      border-radius: 18px;
      padding: 1.8rem;
      box-shadow: 0 6px 18px rgba(15, 23, 42, 0.04);
      margin-bottom: 1.8rem;
    }
    .master-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 1.5px solid #F1F5F9;
    }
    .master-card-title h3 {
      font-size: 1.35rem;
      font-weight: 800;
      margin: 0 0 0.2rem;
      color: #0F172A;
    }
    .master-card-title p {
      margin: 0;
      color: #64748B;
      font-size: 0.88rem;
    }

    /* Action Buttons */
    .btn-guru-primary {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      background: var(--red);
      color: #FFFFFF;
      border: none;
      padding: 0.6rem 1.25rem;
      border-radius: var(--radius-pill);
      font-weight: 800;
      font-size: 0.88rem;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(217, 56, 58, 0.25);
      transition: all 0.2s ease;
    }
    .btn-guru-primary:hover {
      background: var(--red-dark);
      transform: translateY(-2px);
    }

    .btn-preset {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      background: #F8FAFC;
      border: 1.5px solid #CBD5E1;
      padding: 0.45rem 0.95rem;
      border-radius: var(--radius-pill);
      font-size: 0.82rem;
      font-weight: 700;
      color: #1E293B;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .btn-preset:hover {
      border-color: var(--blue);
      background: var(--blue-pale);
      color: var(--blue);
    }

    /* Grid Level Cards */
    .levels-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.3rem;
    }
    .level-admin-card {
      border: 2px solid var(--lvl-accent, #CBD5E1);
      border-radius: 16px;
      background: #FFFFFF;
      padding: 1.3rem;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);
      transition: transform 0.2s ease;
    }
    .level-admin-card:hover {
      transform: translateY(-3px);
    }
    .level-top-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.8rem;
    }
    .level-code-badge {
      background: var(--lvl-accent, #CBD5E1);
      color: #FFFFFF;
      font-size: 0.8rem;
      font-weight: 900;
      padding: 0.3rem 0.75rem;
      border-radius: var(--radius-pill);
      text-transform: uppercase;
    }
    .level-status-pill {
      font-size: 0.72rem;
      font-weight: 800;
      padding: 0.25rem 0.65rem;
      border-radius: var(--radius-pill);
    }
    .status-active { background: #ECFDF5; color: #065F46; }
    .status-inactive { background: #F1F5F9; color: #64748B; }

    .level-name-h4 {
      font-size: 1.25rem;
      font-weight: 800;
      margin: 0 0 0.2rem;
      color: #0F172A;
    }
    .level-sub-desc {
      font-size: 0.84rem;
      color: #64748B;
      margin-bottom: 1.1rem;
    }
    .level-meta-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.82rem;
      font-weight: 700;
      color: #475569;
      border-top: 1.5px dashed #E2E8F0;
      padding-top: 0.8rem;
      margin-top: 0.8rem;
    }

    /* Tabel Manajemen */
    .guru-table-wrap {
      overflow-x: auto;
    }
    .guru-table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
    }
    .guru-table th {
      background: #F8FAFC;
      color: #475569;
      font-weight: 800;
      font-size: 0.78rem;
      text-transform: uppercase;
      padding: 0.85rem 1rem;
      border-bottom: 2px solid #E2E8F0;
    }
    .guru-table td {
      padding: 1rem;
      border-bottom: 1px solid #F1F5F9;
      font-size: 0.9rem;
      color: #1E293B;
      vertical-align: middle;
    }
    .guru-table tr:hover td {
      background: #F8FAFC;
    }

    /* Modal Form */
    .guru-modal-backdrop,
    #modal-edit-guru-profile,
    #modal-profile-success {
      position: fixed !important;
      inset: 0 !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      height: 100dvh !important;
      background: rgba(15, 23, 42, 0.65) !important;
      backdrop-filter: blur(5px) !important;
      -webkit-backdrop-filter: blur(5px) !important;
      display: none !important;
      align-items: center !important;
      justify-content: center !important;
      z-index: 99999 !important;
      padding: 1rem !important;
      box-sizing: border-box !important;
    }
    .guru-modal-backdrop.show,
    #modal-edit-guru-profile.show,
    #modal-profile-success.show {
      display: flex !important;
    }
    .guru-modal-box,
    #modal-edit-guru-profile .guru-modal-box,
    #modal-profile-success .guru-modal-box {
      background: #FFFFFF !important;
      border-radius: 20px !important;
      width: 100% !important;
      max-width: 560px !important;
      max-height: 90vh !important;
      max-height: 90dvh !important;
      overflow-y: auto !important;
      padding: 2rem !important;
      box-shadow: 0 20px 40px -10px rgba(15, 23, 42, 0.35) !important;
      position: relative !important;
      margin: auto !important;
      top: auto !important;
      bottom: auto !important;
      left: auto !important;
      right: auto !important;
      transform: none !important;
    }
    .guru-modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      padding-bottom: 0.8rem;
      border-bottom: 1.5px solid #E2E8F0;
    }
    .guru-modal-header h3 {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 800;
      color: #0F172A;
    }
    .btn-close-modal {
      background: transparent;
      border: none;
      font-size: 1.4rem;
      cursor: pointer;
      color: #94A3B8;
      transition: color 0.2s;
    }
    .btn-close-modal:hover { color: #0F172A; }

    .form-group {
      margin-bottom: 1.2rem;
    }
    .form-group label {
      display: block;
      font-size: 0.85rem;
      font-weight: 700;
      color: #334155;
      margin-bottom: 0.4rem;
    }
    .form-control {
      width: 100%;
      box-sizing: border-box;
      padding: 0.65rem 0.95rem;
      border: 1.5px solid #CBD5E1;
      border-radius: 10px;
      font-size: 0.9rem;
      font-family: inherit;
      transition: border-color 0.2s;
    }
    .form-control:focus {
      outline: none;
      border-color: var(--blue);
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }
    .modal-btn-row {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.8rem;
      margin-top: 1.8rem;
      padding-top: 1rem;
      border-top: 1.5px solid #E2E8F0;
    }
    .btn-cancel {
      background: #F1F5F9;
      border: 1.5px solid #CBD5E1;
      color: #475569;
      padding: 0.6rem 1.2rem;
      border-radius: var(--radius-pill);
      font-weight: 700;
      cursor: pointer;
    }

    /* Styling Pilihan Ganda & Bank Soal */
    .opt-row-box {
      transition: all 0.2s ease;
    }
    .opt-row-box:focus-within {
      border-color: #3B82F6 !important;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15);
    }
    .opt-row-box.is-correct {
      border-color: #10B981 !important;
      background: #ECFDF5 !important;
    }
    .quest-admin-item {
      background: #FFFFFF;
      border: 1.5px solid #E2E8F0;
      border-radius: 16px;
      padding: 1.3rem;
      transition: all 0.2s ease;
      box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);
    }
    .quest-admin-item:hover {
      border-color: #CBD5E1;
      box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
    }
    .quest-thumb-preview {
      width: 140px;
      height: 90px;
      border-radius: 10px;
      overflow: hidden;
      border: 1.5px solid #CBD5E1;
      background: #F8FAFC;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .quest-thumb-preview img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.2s ease;
    }
    .quest-thumb-preview:hover img {
      transform: scale(1.05);
    }
    .badge-has-img {
      background: #EFF6FF;
      color: #1D4ED8;
      font-size: 0.74rem;
      font-weight: 800;
      padding: 0.25rem 0.65rem;
      border-radius: var(--radius-pill);
      border: 1px solid #BFDBFE;
    }
    .badge-no-img {
      background: #F1F5F9;
      color: #64748B;
      font-size: 0.74rem;
      font-weight: 700;
      padding: 0.25rem 0.65rem;
      border-radius: var(--radius-pill);
      border: 1px solid #E2E8F0;
    }
    /* Responsive Toolbar Components for Tables & Cards */
    .master-toolbar-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
      background: #F8FAFC;
      border: 1.5px solid #E2E8F0;
      border-radius: 14px;
      padding: 10px 14px;
      margin-bottom: 1.2rem;
    }
    .toolbar-search-box {
      position: relative;
      flex: 1;
      min-width: 220px;
    }
    .toolbar-search-box svg {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      color: #64748B;
    }
    .toolbar-search-box input {
      padding-left: 34px !important;
    }
    .toolbar-filter-group {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    .toolbar-filter-group label {
      font-size: 0.82rem;
      font-weight: 700;
      color: #475569;
      white-space: nowrap;
      margin: 0;
    }
    .toolbar-filter-group select {
      font-weight: 700;
      font-size: 0.84rem;
      padding: 0.45rem 0.85rem;
      border-radius: 10px;
      border: 1.5px solid #CBD5E1;
      background: #FFFFFF;
      color: #0F172A;
    }
    .toolbar-count-badge {
      font-size: 0.78rem;
      font-weight: 800;
      color: #2563EB;
      background: #EFF6FF;
      border: 1px solid #BFDBFE;
      padding: 0.3rem 0.75rem;
      border-radius: var(--radius-pill);
      white-space: nowrap;
    }

    /* ===== RESPONSIVE MEDIA QUERIES (FULL MOBILE & TABLET ADAPTATION) ===== */
    @media (max-width: 900px) {
      .guru-navbar {
        padding: 0.85rem 1.2rem;
      }
      .guru-container {
        padding: 0 1rem;
        margin: 1.2rem auto 3rem;
      }
      .guru-kpi-grid {
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 0.9rem;
      }
    }

    @media (max-width: 768px) {
      .guru-navbar {
        display: grid !important;
        grid-template-columns: auto 1fr !important;
        grid-template-rows: auto auto !important;
        row-gap: 0.65rem !important;
        column-gap: 0.6rem !important;
        padding: 0.65rem 0.85rem !important;
        box-sizing: border-box !important;
        width: 100% !important;
      }
      .guru-nav-left {
        display: contents !important;
      }
      .guru-brand-wrap {
        grid-column: 1 !important;
        grid-row: 1 !important;
        align-self: center !important;
        display: inline-flex !important;
        align-items: center !important;
        gap: 0.4rem !important;
      }
      .guru-brand-text {
        font-size: 1.15rem !important;
      }
      .svg-crest-mini {
        width: 22px !important;
        height: 22px !important;
      }
      .guru-profile-bar {
        grid-column: 2 !important;
        grid-row: 1 !important;
        justify-self: end !important;
        align-self: center !important;
        gap: 0.45rem !important;
        margin-left: auto !important;
        width: auto !important;
      }
      .guru-avatar-circle {
        width: 34px !important;
        height: 34px !important;
        flex-shrink: 0 !important;
      }
      .guru-info-text {
        max-width: none !important;
        overflow: visible !important;
      }
      .guru-name {
        font-size: 0.88rem !important;
        font-weight: 800 !important;
        white-space: nowrap !important;
        overflow: visible !important;
        text-overflow: clip !important;
        display: inline-flex !important;
        align-items: center !important;
        gap: 3px !important;
      }
      .guru-role-sub {
        display: none !important;
      }
      .guru-profile-bar form {
        margin: 0 !important;
        flex-shrink: 0 !important;
      }
      .guru-profile-bar form button {
        padding: 0.3rem 0.65rem !important;
        font-size: 0.74rem !important;
        border-radius: var(--radius-pill) !important;
      }
      .badge-master-guru {
        grid-column: 1 !important;
        grid-row: 2 !important;
        justify-self: start !important;
        align-self: center !important;
        font-size: 0.68rem !important;
        padding: 0.28rem 0.6rem !important;
        white-space: nowrap !important;
        letter-spacing: 0.2px !important;
      }
      .btn-return-app {
        grid-column: 2 !important;
        grid-row: 2 !important;
        justify-self: end !important;
        align-self: center !important;
        font-size: 0.76rem !important;
        padding: 0.32rem 0.75rem !important;
        white-space: nowrap !important;
        gap: 0.35rem !important;
      }
      .btn-return-app .svg-icon-mini {
        width: 13px !important;
        height: 13px !important;
      }
      .guru-container {
        padding: 0 0.75rem;
        margin: 1rem auto 2.5rem;
      }
      .guru-kpi-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 0.65rem;
        margin-bottom: 1.2rem;
      }
      .kpi-card {
        padding: 0.9rem 0.8rem;
        border-radius: 14px;
      }
      .kpi-card:last-child {
        grid-column: span 2;
      }
      .kpi-label {
        font-size: 0.72rem;
      }
      .kpi-value {
        font-size: 1.55rem;
      }
      .kpi-sub {
        font-size: 0.7rem;
      }
      .guru-tabs-nav {
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        gap: 0.45rem !important;
        padding: 0.5rem !important;
        background: #FFFFFF !important;
        border-radius: 16px !important;
        border: 1.5px solid #E2E8F0 !important;
        margin-bottom: 1.2rem !important;
        overflow-x: visible !important;
      }
      .guru-tab-btn {
        width: 100% !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        text-align: center !important;
        padding: 0.65rem 0.5rem !important;
        font-size: 0.82rem !important;
        font-weight: 700 !important;
        border-radius: 12px !important;
        white-space: normal !important;
        line-height: 1.25 !important;
        flex-shrink: 0 !important;
        background: #F8FAFC !important;
        border: 1px solid #E2E8F0 !important;
        color: #475569 !important;
        box-shadow: none !important;
      }
      .guru-tab-btn.active {
        background: var(--red) !important;
        color: #FFFFFF !important;
        border-color: var(--red) !important;
        box-shadow: 0 4px 12px rgba(217, 56, 58, 0.25) !important;
      }
      .guru-tab-btn:last-child {
        grid-column: span 2 !important;
      }
      .master-card {
        padding: 1.15rem 0.9rem;
        border-radius: 16px;
        margin-bottom: 1.2rem;
      }
      .master-card-header {
        flex-direction: column;
        align-items: stretch;
        gap: 0.85rem;
      }
      .master-card-title h3 {
        font-size: 1.15rem;
      }
      .master-card-title p {
        font-size: 0.8rem;
      }
      .master-card-header > div:last-child {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      .btn-guru-primary,
      .btn-preset {
        width: 100%;
        justify-content: center;
        text-align: center;
        box-sizing: border-box;
      }
      .master-toolbar-row {
        flex-direction: column;
        align-items: stretch;
        gap: 0.65rem;
        padding: 10px;
      }
      .toolbar-search-box {
        width: 100%;
        min-width: 100%;
      }
      .toolbar-filter-group {
        width: 100%;
        justify-content: space-between;
      }
      .toolbar-filter-group select {
        flex: 1;
      }
      /* ===== RESPONSIVE MOBILE DATA CARDS (NO CUTOFFS) ===== */
      .guru-table-wrap,
      .admin-table-wrap {
        overflow-x: visible !important;
        border: none !important;
        background: transparent !important;
        width: 100% !important;
      }
      .guru-table {
        min-width: 100% !important;
        width: 100% !important;
        display: block !important;
        border: none !important;
      }
      .guru-table thead {
        display: none !important;
      }
      .guru-table tbody {
        display: flex !important;
        flex-direction: column !important;
        gap: 0.85rem !important;
        width: 100% !important;
      }

      /* Lesson Row -> Card Transformation */
      #lessons-table-body tr {
        display: grid !important;
        grid-template-columns: auto 1fr auto !important;
        gap: 0.45rem 0.6rem !important;
        background: #FFFFFF !important;
        border: 1.5px solid #E2E8F0 !important;
        border-radius: 16px !important;
        padding: 1rem 0.95rem !important;
        box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04) !important;
        box-sizing: border-box !important;
        width: 100% !important;
      }
      #lessons-table-body tr td:nth-child(1) {
        grid-column: 1 !important;
        grid-row: 1 !important;
        align-self: center !important;
        padding: 0 !important;
        border: none !important;
        font-size: 0.82rem !important;
        color: #64748B !important;
      }
      #lessons-table-body tr td:nth-child(2) {
        grid-column: 2 !important;
        grid-row: 1 !important;
        align-self: center !important;
        padding: 0 !important;
        border: none !important;
      }
      #lessons-table-body tr td:nth-child(6) {
        grid-column: 3 !important;
        grid-row: 1 !important;
        justify-self: end !important;
        align-self: center !important;
        padding: 0 !important;
        border: none !important;
      }
      #lessons-table-body tr td:nth-child(3) {
        grid-column: 1 / span 3 !important;
        grid-row: 2 !important;
        padding: 0.25rem 0 !important;
        border: none !important;
      }
      #lessons-table-body tr td:nth-child(4) {
        grid-column: 1 / span 3 !important;
        grid-row: 3 !important;
        padding: 0.45rem 0 !important;
        border: none !important;
        border-top: 1px dashed #F1F5F9 !important;
      }
      #lessons-table-body tr td:nth-child(5) {
        grid-column: 1 / span 2 !important;
        grid-row: 4 !important;
        align-self: center !important;
        padding: 0.2rem 0 !important;
        border: none !important;
        font-size: 0.78rem !important;
        color: #64748B !important;
      }
      #lessons-table-body tr td:nth-child(7) {
        grid-column: 3 !important;
        grid-row: 4 !important;
        justify-self: end !important;
        align-self: center !important;
        padding: 0.2rem 0 !important;
        border: none !important;
        font-size: 0.78rem !important;
      }
      #lessons-table-body tr td:nth-child(8) {
        grid-column: 1 / span 3 !important;
        grid-row: 5 !important;
        padding-top: 0.65rem !important;
        border: none !important;
        border-top: 1px solid #F1F5F9 !important;
        display: flex !important;
        align-items: center !important;
        gap: 0.5rem !important;
        width: 100% !important;
      }
      #lessons-table-body tr td:nth-child(8) button,
      #lessons-table-body tr td:nth-child(8) a {
        flex: 1 !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        text-align: center !important;
        padding: 0.55rem 0.8rem !important;
        font-size: 0.84rem !important;
        border-radius: 10px !important;
      }

      /* Students Row -> Card Transformation */
      #students-table-body tr {
        display: grid !important;
        grid-template-columns: auto 1fr auto !important;
        gap: 0.45rem 0.6rem !important;
        background: #FFFFFF !important;
        border: 1.5px solid #E2E8F0 !important;
        border-radius: 16px !important;
        padding: 0.95rem !important;
        box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04) !important;
        box-sizing: border-box !important;
        width: 100% !important;
      }
      #students-table-body tr td {
        padding: 0 !important;
        border: none !important;
      }
      #students-table-body tr td:nth-child(1) {
        grid-column: 1 !important;
        grid-row: 1 !important;
        align-self: center !important;
        font-size: 0.95rem !important;
        color: var(--red) !important;
        font-weight: 900 !important;
      }
      #students-table-body tr td:nth-child(2) {
        grid-column: 2 !important;
        grid-row: 1 !important;
        align-self: center !important;
      }
      #students-table-body tr td:nth-child(6) {
        grid-column: 3 !important;
        grid-row: 1 !important;
        justify-self: end !important;
        align-self: center !important;
      }
      #students-table-body tr td:nth-child(3) {
        grid-column: 2 / span 2 !important;
        grid-row: 2 !important;
        font-size: 0.78rem !important;
        color: #64748B !important;
      }
      #students-table-body tr td:nth-child(4) {
        grid-column: 1 / span 2 !important;
        grid-row: 3 !important;
        align-self: center !important;
        padding-top: 0.45rem !important;
        border-top: 1px dashed #F1F5F9 !important;
      }
      #students-table-body tr td:nth-child(5) {
        grid-column: 3 !important;
        grid-row: 3 !important;
        justify-self: end !important;
        align-self: center !important;
        padding-top: 0.45rem !important;
        border-top: 1px dashed #F1F5F9 !important;
        font-size: 0.82rem !important;
      }

      /* Mini Games Question Bank Table -> Card Transformation */
      .admin-soal-table thead {
        display: none !important;
      }
      .admin-soal-table,
      .admin-soal-table tbody {
        display: block !important;
        width: 100% !important;
        border: none !important;
      }
      .admin-soal-table tbody tr {
        display: grid !important;
        grid-template-columns: auto 1fr auto !important;
        gap: 0.45rem 0.6rem !important;
        background: #FFFFFF !important;
        border: 1.5px solid #E2E8F0 !important;
        border-radius: 14px !important;
        padding: 0.85rem !important;
        margin-bottom: 0.75rem !important;
        box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03) !important;
        box-sizing: border-box !important;
        width: 100% !important;
      }
      .admin-soal-table td {
        padding: 0 !important;
        border: none !important;
      }
      .admin-soal-table tbody tr td:nth-child(1) {
        grid-column: 1 !important;
        grid-row: 1 !important;
        align-self: center !important;
        font-size: 0.82rem !important;
        color: #94A3B8 !important;
      }
      .admin-soal-table tbody tr td:nth-child(2) {
        grid-column: 2 !important;
        grid-row: 1 !important;
        align-self: center !important;
        font-size: 1.35rem !important;
        font-weight: 800 !important;
        color: #0F172A !important;
      }
      .admin-soal-table tbody tr td:nth-child(5) {
        grid-column: 3 !important;
        grid-row: 1 !important;
        justify-self: end !important;
        align-self: center !important;
      }
      .admin-soal-table tbody tr td:nth-child(3) {
        grid-column: 1 / span 2 !important;
        grid-row: 2 !important;
        font-size: 0.82rem !important;
        color: #2563EB !important;
        font-weight: 700 !important;
      }
      .admin-soal-table tbody tr td:nth-child(4) {
        grid-column: 3 !important;
        grid-row: 2 !important;
        justify-self: end !important;
        font-size: 0.82rem !important;
        color: #475569 !important;
      }
      .admin-soal-table tbody tr td:nth-child(6) {
        grid-column: 1 / span 3 !important;
        grid-row: 3 !important;
        padding-top: 0.55rem !important;
        border-top: 1px dashed #F1F5F9 !important;
        display: flex !important;
        align-items: center !important;
        gap: 0.5rem !important;
        width: 100% !important;
      }
      .admin-soal-table tbody tr td:nth-child(6) button {
        flex: 1 !important;
        justify-content: center !important;
        text-align: center !important;
        padding: 0.45rem 0.75rem !important;
        font-size: 0.8rem !important;
        border-radius: 8px !important;
      }

      .levels-grid {
        grid-template-columns: 1fr !important;
        gap: 0.85rem !important;
      }
      .admin-games-selector {
        display: flex !important;
        flex-wrap: wrap !important;
        gap: 6px !important;
      }
      .admin-game-chip {
        padding: 0.5rem 0.85rem !important;
        font-size: 0.8rem !important;
        border-radius: 10px !important;
        flex: 1 !important;
        min-width: 120px !important;
        text-align: center !important;
        justify-content: center !important;
      }
      .admin-settings-card {
        padding: 1rem 0.85rem !important;
        border-radius: 14px !important;
      }
      .admin-card-head {
        flex-direction: column !important;
        align-items: stretch !important;
        gap: 0.8rem !important;
      }
      .admin-soal-toolbar {
        flex-direction: column !important;
        align-items: stretch !important;
        gap: 10px !important;
      }
      .admin-soal-filter-pills {
        overflow-x: auto !important;
        flex-wrap: nowrap !important;
        -webkit-overflow-scrolling: touch !important;
        padding-bottom: 4px !important;
        scrollbar-width: none !important;
      }
      .admin-soal-filter-pills::-webkit-scrollbar {
        display: none !important;
      }
      .quest-admin-item {
        padding: 1rem 0.85rem !important;
      }
      .quest-admin-item > div:first-child {
        flex-direction: column !important;
        align-items: stretch !important;
        gap: 0.6rem !important;
      }
      .quest-admin-item > div:first-child > div:last-child {
        width: 100% !important;
        display: flex !important;
        justify-content: stretch !important;
        gap: 0.45rem !important;
      }
      .quest-admin-item > div:first-child > div:last-child button {
        flex: 1 !important;
        justify-content: center !important;
        text-align: center !important;
        padding: 0.45rem 0.65rem !important;
      }
      /* Modals on Mobile - Pop-up Tengah */
      .guru-modal-backdrop {
        padding: 1rem !important;
        align-items: center !important;
        justify-content: center !important;
      }
      .guru-modal-box {
        border-radius: 24px !important;
        max-height: 85vh !important;
        max-width: 95vw !important;
        width: 100% !important;
        margin: auto !important;
        padding: 1.4rem 1.15rem !important;
        box-sizing: border-box !important;
        overflow-y: auto !important;
        -webkit-overflow-scrolling: touch !important;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4) !important;
      }
      .modal-btn-row {
        flex-direction: column-reverse;
        gap: 0.5rem;
      }
      .modal-btn-row button,
      .modal-btn-row a {
        width: 100%;
        justify-content: center;
        text-align: center;
      }
    }
    /* OVERRIDE MUTLAK: POPUP EDIT PROFIL GURU & SUKSES WAJIB DI TENGAH LAYAR */
    #modal-edit-guru-profile,
    #modal-profile-success {
      position: fixed !important;
      inset: 0 !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      height: 100dvh !important;
      display: none !important;
      align-items: center !important;
      justify-content: center !important;
      z-index: 999999 !important;
      padding: 1rem !important;
      margin: 0 !important;
    }
    #modal-edit-guru-profile.show,
    #modal-profile-success.show {
      display: flex !important;
    }
    #modal-edit-guru-profile .guru-modal-box,
    #modal-profile-success .guru-modal-box {
      margin: auto !important;
      position: relative !important;
      top: auto !important;
      bottom: auto !important;
      left: auto !important;
      right: auto !important;
      transform: none !important;
      align-self: center !important;
      border-radius: 20px !important;
    }
  </style>
</head>
<body>

  <!-- TOP NAVBAR GURU -->
  <header class="guru-navbar">
    <div class="guru-nav-left">
      <div class="guru-brand-wrap">
        <span class="logo-crest">
          <svg viewBox="0 0 32 32" class="svg-crest-mini">
            <circle cx="16" cy="16" r="14" fill="#D9383A"/>
            <path d="M8 11h16M9 8v15M23 8v15M7 14h18" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </span>
        <span class="guru-brand-text">SI<span style="color:#D9383A;">Japanese</span></span>
      </div>
      <span class="badge-master-guru">DASHBOARD GURU MASTER</span>
      <a href="{{ route('home') }}" class="btn-return-app" title="Kembali ke portal murid" onclick="try{sessionStorage.setItem('sijapanese_active_page','home');sessionStorage.removeItem('sijapanese_active_lesson_id');sessionStorage.removeItem('sijapanese_active_step');}catch(e){}">
        <span>Lihat Web Siswa</span>
      </a>
    </div>

    <div class="guru-profile-bar">
      <div onclick="openModal('modal-edit-guru-profile')" title="Klik untuk edit profil guru" style="display:inline-flex; align-items:center; gap:0.55rem; background:#F8FAFC; border:1.5px solid #E2E8F0; padding:0.35rem 0.75rem; border-radius:var(--radius-pill); cursor:pointer; transition:all 0.2s ease;" onmouseover="this.style.borderColor='#BA3D27'; this.style.background='#FFFBF6'" onmouseout="this.style.borderColor='#E2E8F0'; this.style.background='#F8FAFC'">
        <div class="guru-avatar-circle" style="overflow:hidden;">
          @php
            $gAvatar = auth()->user()->avatar ?? 'img/avatar_tanaka.svg';
          @endphp
          @if(str_contains($gAvatar, '/') || str_contains($gAvatar, '.svg') || str_contains($gAvatar, '.png'))
            <img src="{{ asset($gAvatar) }}" alt="Sensei Tanaka" style="width:100%; height:100%; border-radius:50%; object-fit:cover; display:block;" />
          @else
            <span>{{ $gAvatar }}</span>
          @endif
        </div>
        <div class="guru-info-text">
          <span class="guru-name">
            <span>{{ auth()->user()->name }}</span>
          </span>
          <span class="guru-role-sub">Guru Master &bull; Edit</span>
        </div>
      </div>
      <form action="{{ route('logout') }}" method="POST" style="margin:0;">
        @csrf
        <button type="submit" class="btn-preset" onclick="try { localStorage.removeItem('sijapanese_active_user'); localStorage.removeItem('sijapanese_auth_user'); sessionStorage.clear(); } catch(e){}" style="color:#DC2626; border-color:#FECACA;" title="Keluar">
          Keluar
        </button>
      </form>
    </div>
  </header>

  <main class="guru-container">

    @if(session('success'))
    <div style="background:#ECFDF5; border:1.5px solid #10B981; color:#065F46; padding:0.95rem 1.4rem; border-radius:14px; margin-bottom:1.5rem; display:flex; align-items:center; justify-content:space-between; font-weight:700; box-shadow:0 4px 12px rgba(16,185,129,0.12);">
      <div style="display:flex; align-items:center; gap:0.65rem;">
        <span style="font-size:1.25rem;"></span>
        <span>{{ session('success') }}</span>
      </div>
      <button type="button" onclick="this.parentElement.remove()" style="background:transparent; border:none; font-size:1.3rem; cursor:pointer; color:#065F46; line-height:1;">&times;</button>
    </div>
    @endif

    @if(session('error'))
    <div style="background:#FEF2F2; border:1.5px solid #EF4444; color:#991B1B; padding:0.95rem 1.4rem; border-radius:14px; margin-bottom:1.5rem; display:flex; align-items:center; justify-content:space-between; font-weight:700; box-shadow:0 4px 12px rgba(239,68,68,0.12);">
      <div style="display:flex; align-items:center; gap:0.65rem;">
        <span style="font-size:1.25rem;"></span>
        <span>{{ session('error') }}</span>
      </div>
      <button type="button" onclick="this.parentElement.remove()" style="background:transparent; border:none; font-size:1.3rem; cursor:pointer; color:#991B1B; line-height:1;">&times;</button>
    </div>
    @endif

    @if(isset($errors) && $errors->any())
    <div style="background:#FEF2F2; border:1.5px solid #EF4444; color:#991B1B; padding:0.95rem 1.4rem; border-radius:14px; margin-bottom:1.5rem; font-weight:600;">
      <div style="font-weight:800; margin-bottom:0.4rem;">Perhatian: Ada kesalahan input data:</div>
      <ul style="margin:0; padding-left:1.2rem;">
        @foreach($errors->all() as $err)
        <li>{{ $err }}</li>
        @endforeach
      </ul>
    </div>
    @endif

    <!-- KPI STAT CARDS -->
    <section class="guru-kpi-grid">
      <div class="kpi-card kpi-red">
        <div class="kpi-label">Siswa Terdaftar</div>
        <div class="kpi-value">{{ $stats['total_students'] }}</div>
        <div class="kpi-sub">Murid yang sedang belajar</div>
      </div>
      <div class="kpi-card kpi-blue">
        <div class="kpi-label">Kotak Level Aktif</div>
        <div class="kpi-value">{{ $stats['active_levels'] }} <span style="font-size:1.1rem; color:#94A3B8;">/ {{ $stats['total_levels'] }}</span></div>
        <div class="kpi-sub">N5, N4, dan tingkatan kustom</div>
      </div>
      <div class="kpi-card kpi-yellow">
        <div class="kpi-label">Modul Materi</div>
        <div class="kpi-value">{{ $stats['total_lessons'] }}</div>
        <div class="kpi-sub">Total materi kurikulum</div>
      </div>
      <div class="kpi-card kpi-green">
        <div class="kpi-label">Bank Soal Quest</div>
        <div class="kpi-value">{{ $stats['total_quests'] }}</div>
        <div class="kpi-sub">Tantangan kuis terpasang</div>
      </div>
      <div class="kpi-card kpi-purple">
        <div class="kpi-label">Poin Siswa Tertinggi</div>
        <div class="kpi-value">{{ $stats['highest_score'] }}</div>
        <div class="kpi-sub">Skor pencapaian murid</div>
      </div>
    </section>

    <!-- TAB NAVIGASI UTAMA -->
    <div class="guru-tabs-nav">
      <button class="guru-tab-btn active" onclick="switchGuruTab('levels')">
        <span>Kotak Level Materi</span>
      </button>
      <button class="guru-tab-btn" onclick="switchGuruTab('lessons')">
        <span>Modul Pelajaran</span>
      </button>
      <button class="guru-tab-btn" onclick="switchGuruTab('quests')">
        <span>Bank Soal &amp; Kuis</span>
      </button>
      <button class="guru-tab-btn" onclick="switchGuruTab('students')">
        <span>Pantauan Siswa &amp; Nilai</span>
      </button>
      <button class="guru-tab-btn" onclick="switchGuruTab('minigames', this)">
        <span>Kelola Mini Games &amp; Bank Soal</span>
      </button>
    </div>

    <!-- ==============================================
         TAB 1: MANAJEMEN KOTAK LEVEL (N5, N4, N3, N2, N1)
         ============================================== -->
    <div class="guru-tab-content active" id="guru-tab-levels">
      <div class="master-card">
        <div class="master-card-header">
          <div class="master-card-title">
            <h3>Manajemen Kotak Level Materi (Tingkatan Belajar)</h3>
            <p>Kotak level ini muncul langsung sebagai tab navigasi di halaman <strong>Materi</strong> murid. Tambah tingkatan baru sesuai kemajuan kelas!</p>
          </div>
          <div style="display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
            <button class="btn-preset" onclick="addPresetLevel('n3')">+ Tambah N3 Menengah</button>
            <button class="btn-preset" onclick="addPresetLevel('n2')">+ Tambah N2 Lanjutan</button>
            <button class="btn-preset" onclick="addPresetLevel('n1')">+ Tambah N1 Mahir</button>
            <button class="btn-guru-primary" onclick="openAddLevelModal()">
              <span>+ Level Kustom Baru</span>
            </button>
          </div>
        </div>

        <div class="levels-grid">
          @foreach($levels as $lvl)
          <div class="level-admin-card" style="--lvl-accent: {{ $lvl->accent_color }};">
            <div>
              <div class="level-top-row">
                <span class="level-code-badge">{{ strtoupper($lvl->code) }}</span>
                <span class="level-status-pill {{ $lvl->is_active ? 'status-active' : 'status-inactive' }}">
                  {{ $lvl->is_active ? 'Aktif di Siswa' : 'Nonaktif' }}
                </span>
              </div>
              <h4 class="level-name-h4">{{ $lvl->name }}</h4>
              <div class="level-sub-desc">{{ $lvl->sub }}</div>
            </div>

            <div>
              <div class="level-meta-row">
                <span>{{ $lvl->lessons->count() }} Modul Materi</span>
                <div style="display:flex; gap:0.4rem;">
                  <button class="btn-preset" style="padding:0.25rem 0.65rem;" onclick="openEditLevelModal({{ $lvl->id }}, '{{ addslashes($lvl->name) }}', '{{ addslashes($lvl->sub) }}', '{{ $lvl->accent_color }}', {{ $lvl->is_active ? 'true' : 'false' }}, {{ $lvl->order }})">
                    Edit
                  </button>
                  <button class="btn-preset" style="padding:0.25rem 0.65rem; color:#DC2626; border-color:#FECACA;" onclick="deleteLevel({{ $lvl->id }}, '{{ addslashes($lvl->name) }}')">
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
          @endforeach
        </div>
      </div>
    </div>

    <!-- ==============================================
         TAB 2: MANAJEMEN MODUL PELAJARAN
         ============================================== -->
    <div class="guru-tab-content" id="guru-tab-lessons">
      <div class="master-card">
        <div class="master-card-header">
          <div class="master-card-title">
            <h3>Daftar Modul Kurikulum Bahasa Jepang</h3>
            <p>Kelola judul, estimasi waktu belajar, dan isi penjelasan modul untuk masing-masing level.</p>
          </div>
          <button class="btn-guru-primary" onclick="openAddLessonModal()">
            <span>+ Tambah Modul Baru</span>
          </button>
        </div>

        <!-- TOOLBAR PENCARIAN & FILTER MODUL -->
        <div class="master-toolbar-row">
          <div class="toolbar-search-box">
            <input type="text" id="search-lesson-input" class="form-control" placeholder="Cari judul modul, nomor, materi..." oninput="filterLessonsTable()" />
          </div>
          <div class="toolbar-filter-group">
            <label>Filter Level:</label>
            <select id="filter-lesson-level" class="form-control" onchange="filterLessonsTable()">
              <option value="all">Semua Level Materi</option>
              @foreach($levels as $lvl)
              <option value="{{ strtolower($lvl->code) }}">{{ strtoupper($lvl->code) }} - {{ $lvl->name }}</option>
              @endforeach
            </select>
          </div>
          <div class="toolbar-filter-group">
            <label>Sortir:</label>
            <select id="sort-lesson-select" class="form-control" onchange="filterLessonsTable()">
              <option value="order-asc">Nomor Modul (Urut)</option>
              <option value="title-asc">Judul Modul (A - Z)</option>
              <option value="title-desc">Judul Modul (Z - A)</option>
              <option value="est-asc">Estimasi Cepat</option>
              <option value="est-desc">Estimasi Terlama</option>
              <option value="quests-desc">Soal Terbanyak</option>
            </select>
          </div>
          <div class="toolbar-count-badge">
            Menampilkan <span id="lesson-count-display">{{ $lessons->count() }}</span> Modul
          </div>
        </div>

        <div class="guru-table-wrap">
          <table class="guru-table" id="lessons-table">
            <thead>
              <tr>
                <th style="width:50px;">No</th>
                <th>Level</th>
                <th>Judul Modul</th>
                <th>Komik &amp; Audio Pembahasan</th>
                <th>Estimasi</th>
                <th>Badge</th>
                <th>Soal</th>
                <th style="text-align:right;">Aksi</th>
              </tr>
            </thead>
            <tbody id="lessons-table-body">
              @forelse($lessons as $les)
              <tr id="lesson-row-{{ $les->id }}" class="lesson-table-row" data-id="{{ $les->id }}" data-num="{{ $les->lesson_number }}" data-level="{{ strtolower($les->level->code ?? 'n5') }}" data-title="{{ strtolower($les->title) }}" data-sub="{{ strtolower($les->subtitle ?? '') }}" data-est="{{ $les->est_minutes ?? 0 }}" data-quests="{{ $les->quests->count() }}">
                <td><strong>{{ $les->lesson_number }}</strong></td>
                <td>
                  <span class="level-code-badge" style="background:{{ $les->level->accent_color ?? '#2563EB' }}; font-size:0.7rem;">
                    {{ strtoupper($les->level->code ?? 'N5') }}
                  </span>
                </td>
                <td>
                  <strong style="font-size:0.95rem; color:#0F172A;">{{ $les->title }}</strong>
                  <div style="font-size:0.78rem; color:#64748B; margin-top:0.15rem;">{{ $les->subtitle }}</div>
                  @if(!empty($les->mascot_tip))
                  <div style="font-size:0.74rem; color:#334155; margin-top:0.35rem; background:#F8FAFC; border:1px solid #E2E8F0; border-left:3px solid #2563EB; padding:0.25rem 0.5rem; border-radius:6px; max-width:320px;">
                    <strong>Sensei Tanaka:</strong> {{ \Illuminate\Support\Str::limit($les->mascot_tip, 65) }}
                  </div>
                  @endif
                </td>
                <td>
                  <div style="display:flex; align-items:center; gap:0.6rem;">
                    @if(!empty($les->comic_image))
                    <div style="width:70px; height:46px; border-radius:8px; overflow:hidden; border:1.5px solid #CBD5E1; background:#F1F5F9; flex-shrink:0;">
                      <img src="{{ asset($les->comic_image) }}" alt="Komik Modul" style="width:100%; height:100%; object-fit:cover;" />
                    </div>
                    @else
                    <span style="font-size:0.72rem; color:#94A3B8; background:#F1F5F9; padding:0.2rem 0.5rem; border-radius:6px;">Komik Bawaan</span>
                    @endif
                    <div>
                      @if(!empty($les->audio_text))
                      <span style="font-size:0.72rem; font-weight:800; background:#ECFDF5; color:#065F46; border:1px solid #A7F3D0; padding:0.2rem 0.55rem; border-radius:12px; display:inline-block;">
                        Audio  {{ \Illuminate\Support\Str::limit($les->audio_label ?: 'Audio Komik', 18) }}
                      </span>
                      @else
                      <span style="font-size:0.72rem; color:#94A3B8;">Tanpa Audio</span>
                      @endif
                    </div>
                  </div>
                </td>
                <td style="font-size:0.85rem; font-weight:700;">{{ $les->est_minutes }} Menit</td>
                <td>
                  <span class="materi-card-badge {{ $les->badge_class }}">{{ $les->badge }}</span>
                </td>
                <td><strong style="color:#2563EB;">{{ $les->quests->count() }}</strong> Soal</td>
                <td style="text-align:right;">
                  <button type="button" class="btn-guru-primary" style="padding:0.3rem 0.8rem; font-size:0.8rem;" onclick="openEditLessonModal({{ $les->id }})">
                    <span>Edit</span>
                  </button>
                  <button type="button" class="btn-preset" style="padding:0.3rem 0.65rem; color:#DC2626; border-color:#FECACA; font-size:0.8rem;" onclick="deleteLesson({{ $les->id }}, '{{ addslashes($les->title) }}')">
                    Hapus
                  </button>
                </td>
              </tr>
              @empty
              <tr>
                <td colspan="8" style="text-align:center; padding:2rem; color:#94A3B8;">
                  Belum ada modul pelajaran. Silakan klik tombol "+ Tambah Modul Baru".
                </td>
              </tr>
              @endforelse
            </tbody>
          </table>
        </div>
      </div>
    </div>

        <!-- ==============================================
         TAB 3: BANK SOAL QUEST & KUIS INTERAKTIF
         ============================================== -->
    <div class="guru-tab-content" id="guru-tab-quests">
      <div class="master-card">
        <div class="master-card-header">
          <div class="master-card-title">
            <h3>Bank Soal Quest Interaktif Berhadiah Poin</h3>
            <p>Kelola dan edit pertanyaan, gambar ilustrasi komik, opsi jawaban (A, B, C, D), kunci jawaban benar, dan penjelasan pembahasan soal.</p>
          </div>
          <button class="btn-guru-primary" onclick="openAddQuestModal()">
            <span>+ Buat Soal Quest Baru</span>
          </button>
        </div>

        <!-- TOOLBAR PENCARIAN & FILTER QUEST -->
        <div class="master-toolbar-row">
          <div class="toolbar-search-box">
            <input type="text" id="search-quest-input" class="form-control" placeholder="Cari isi pertanyaan quest, opsi, pembahasan..." oninput="filterQuests()" />
          </div>
          <div class="toolbar-filter-group">
            <label>Filter Modul:</label>
            <select id="filter-quest-lesson" onchange="filterQuests()" class="form-control" style="width:auto; min-width:180px;">
              <option value="all">Semua Modul ({{ $quests->count() }} Soal)</option>
              @foreach($lessons as $les)
              <option value="{{ $les->id }}">{{ $les->title }} ({{ strtoupper($les->level->code ?? 'N5') }})</option>
              @endforeach
            </select>
          </div>
          <div class="toolbar-filter-group">
            <label>Tipe:</label>
            <select id="filter-quest-type" onchange="filterQuests()" class="form-control">
              <option value="all">Semua Tipe</option>
              <option value="image">Ada Gambar</option>
              <option value="text">Teks Saja</option>
            </select>
          </div>
          <div class="toolbar-filter-group">
            <label>Sortir:</label>
            <select id="sort-quest-select" onchange="filterQuests()" class="form-control">
              <option value="default">Urutan Bawaan</option>
              <option value="points-desc">Poin Terbesar</option>
              <option value="points-asc">Poin Terkecil</option>
              <option value="question-asc">Pertanyaan (A - Z)</option>
            </select>
          </div>
          <div class="toolbar-count-badge">
            Menampilkan <span id="quest-count-display">{{ $quests->count() }}</span> Soal
          </div>
        </div>

        <div id="quest-list-container" style="display:flex; flex-direction:column; gap:1.2rem;">
          @forelse($quests as $q)
          <div class="quest-admin-item" id="quest-item-{{ $q->id }}" data-id="{{ $q->id }}" data-lesson-id="{{ $q->lesson_id }}" data-points="{{ $q->points }}" data-has-img="{{ !empty($q->image_url) ? 'image' : 'text' }}" data-question="{{ strtolower($q->question) }}" data-order="{{ $q->order_num }}">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;">
              <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
                <span style="background:var(--blue); color:#FFF; font-size:0.75rem; font-weight:800; padding:0.25rem 0.75rem; border-radius:var(--radius-pill);">
                  {{ $q->badge_text }}
                </span>
                <span style="font-size:0.82rem; font-weight:700; color:#475569;">
                  {{ $q->lesson->title ?? 'Pelajaran' }} ({{ strtoupper($q->lesson->level->code ?? 'N5') }})
                </span>
                @if(!empty($q->image_url))
                <span class="badge-has-img">Ada Gambar Ilustrasi</span>
                @else
                <span class="badge-no-img">Teks Saja</span>
                @endif
              </div>
              <div style="display:flex; align-items:center; gap:0.5rem;">
                <span style="background:#FEF3C7; color:#92400E; font-size:0.75rem; font-weight:800; padding:0.25rem 0.7rem; border-radius:var(--radius-pill);">
                  {{ $q->points }} Poin
                </span>
                <button type="button" class="btn-guru-primary" style="padding:0.35rem 0.95rem; font-size:0.82rem;" onclick="openEditQuestModal({{ $q->id }})">
                  <span>Edit Soal</span>
                </button>
                <button type="button" class="btn-preset" style="padding:0.35rem 0.75rem; color:#DC2626; border-color:#FECACA; font-size:0.82rem;" onclick="deleteQuest({{ $q->id }})">
                  Hapus
                </button>
              </div>
            </div>

            <!-- Pertanyaan & Preview Gambar -->
            <div style="display:flex; gap:1.2rem; align-items:flex-start; margin:0.8rem 0; flex-wrap:wrap;">
              @if(!empty($q->image_url))
              <div class="quest-thumb-preview" title="Klik untuk pratinjau">
                <img src="{{ asset($q->image_url) }}" alt="Ilustrasi Soal" />
              </div>
              @endif
              <div style="flex:1; min-width:240px;">
                <div style="font-size:1.05rem; font-weight:800; color:#0F172A; line-height:1.45;">
                  {{ $q->question }}
                </div>
                @if(!empty($q->audio_text))
                <div style="margin-top:0.5rem; font-size:0.82rem; background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:0.4rem 0.75rem; display:inline-flex; align-items:center; gap:0.5rem; color:#334155;">
                  <span><strong>Audio {{ $q->audio_label ?: 'Chokai Audio' }}:</strong> {{ \Illuminate\Support\Str::limit($q->audio_text, 70) }}</span>
                </div>
                @endif
              </div>
            </div>

            <!-- Opsi Pilihan Ganda -->
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:0.6rem; margin:0.9rem 0 0.6rem;">
              @foreach($q->options ?? [] as $idx => $opt)
              @php
                $lbl = !empty($opt['label']) ? $opt['label'] : chr(65 + $idx);
                $isCorr = !empty($opt['isCorrect']);
              @endphp
              <div style="background:{{ $isCorr ? '#ECFDF5' : '#FFFFFF' }}; border:1.5px solid {{ $isCorr ? '#10B981' : '#E2E8F0' }}; border-radius:10px; padding:0.6rem 0.85rem; font-size:0.86rem; font-weight:600; display:flex; align-items:center; gap:0.5rem;">
                <span style="font-weight:800; color:{{ $isCorr ? '#065F46' : '#64748B' }}; width:20px;">{{ $lbl }}.</span>
                <span style="flex:1;">{{ $opt['text'] }}</span>
                @if($isCorr)
                <span style="color:#059669; font-weight:900; font-size:0.75rem; background:#D1FAE5; padding:0.15rem 0.5rem; border-radius:var(--radius-pill); white-space:nowrap;">Kunci Benar</span>
                @endif
              </div>
              @endforeach
            </div>

            <!-- Penjelasan Kunci Jawaban -->
            <div style="font-size:0.85rem; color:#1E3A8A; background:#EFF6FF; border-left:3.5px solid var(--blue); padding:0.6rem 0.95rem; border-radius:6px; margin-top:0.7rem;">
              <strong>Penjelasan:</strong>
              @if(!empty($q->explanation))
                {{ $q->explanation }}
              @else
                <span style="color:#64748B; font-style:italic;">(Belum ada penjelasan — klik Edit Soal untuk menambahkan pembahasan bagi siswa)</span>
              @endif
            </div>
          </div>
          @empty
          <div style="text-align:center; padding:3rem 2rem; color:#94A3B8; background:#FFFFFF; border-radius:16px; border:1.5px dashed #CBD5E1;">
            <p style="font-size:1.1rem; font-weight:700; margin-bottom:0.5rem;">Belum ada soal kuis yang terpasang.</p>
            <p style="font-size:0.88rem; margin-bottom:1.2rem;">Klik tombol di bawah untuk menambah tantangan kuis baru untuk siswa.</p>
            <button class="btn-guru-primary" onclick="openAddQuestModal()">+ Buat Soal Quest Baru</button>
          </div>
          @endforelse
        </div>
      </div>
    </div>

    <!-- ==============================================
         TAB 4: PANTAUAN SISWA & REKAP PENILAIAN LATIHAN
         ============================================== -->
    <div class="guru-tab-content" id="guru-tab-students">
      <div class="master-card">
        <div class="master-card-header">
          <div class="master-card-title">
            <h3>Pantauan Penilaian Latihan &amp; Kemajuan Siswa</h3>
            <p>Periksa hasil latihan setiap murid secara presisi: rincian jawaban <strong>Benar</strong> dan <strong>Salah</strong>, nilai akhir (skala 0 - 100), grade kelulusan, dan akumulasi poin saat siswa ditugaskan latihan.</p>
          </div>
        </div>

        <!-- SUB-NAVIGASI PENILAIAN & SISWA -->
        <div style="display:flex; gap:0.6rem; margin-bottom:1.4rem; border-bottom:1.5px solid #E2E8F0; padding-bottom:0.9rem; flex-wrap:wrap;">
          <button type="button" class="btn-preset active" id="btn-subnav-assessments" onclick="switchStudentSubTab('assessments')" style="font-size:0.88rem; font-weight:800; padding:0.55rem 1.2rem; border-radius:var(--radius-pill); display:inline-flex; align-items:center; gap:0.5rem; background:#2563EB; color:#FFF; border-color:#2563EB; box-shadow:0 3px 10px rgba(37,99,235,0.25);">
            <span>Rekap Hasil Penilaian Latihan (Benar/Salah)</span>
          </button>
          <button type="button" class="btn-preset" id="btn-subnav-students" onclick="switchStudentSubTab('students')" style="font-size:0.88rem; font-weight:700; padding:0.55rem 1.2rem; border-radius:var(--radius-pill); display:inline-flex; align-items:center; gap:0.5rem;">
            <span>Daftar Akun Siswa &amp; Leaderboard</span>
          </button>
        </div>

        <!-- ==============================================
             SUB-PANEL 1: REKAP PENILAIAN LATIHAN SISWA
             ============================================== -->
        <div id="subpanel-assessments">
          <!-- KPI MINI RINGKASAN PENILAIAN KELAS -->
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:1rem; margin-bottom:1.4rem;">
            <div style="background:#EFF6FF; border:1.5px solid #BFDBFE; border-radius:14px; padding:1rem 1.2rem;">
              <div style="font-size:0.78rem; font-weight:800; color:#1E40AF; text-transform:uppercase;">Rata-rata Nilai Kelas</div>
              <div style="font-size:1.8rem; font-weight:900; color:#1D4ED8; margin:0.2rem 0;">{{ $stats['class_avg_score'] ?? 0 }} <span style="font-size:0.95rem; color:#60A5FA;">/ 100</span></div>
              <div style="font-size:0.75rem; color:#3B82F6; font-weight:600;">Skala evaluasi akademik</div>
            </div>
            <div style="background:#ECFDF5; border:1.5px solid #A7F3D0; border-radius:14px; padding:1rem 1.2rem;">
              <div style="font-size:0.78rem; font-weight:800; color:#065F46; text-transform:uppercase;">Tingkat Kelulusan</div>
              <div style="font-size:1.8rem; font-weight:900; color:#059669; margin:0.2rem 0;">{{ $stats['pass_rate'] ?? 100 }}%</div>
              <div style="font-size:0.75rem; color:#10B981; font-weight:600;">Siswa mencapai KKM (≥60)</div>
            </div>
            <div style="background:#FFFBEB; border:1.5px solid #FDE68A; border-radius:14px; padding:1rem 1.2rem;">
              <div style="font-size:0.78rem; font-weight:800; color:#92400E; text-transform:uppercase;">Total Latihan Selesai</div>
              <div style="font-size:1.8rem; font-weight:900; color:#D97706; margin:0.2rem 0;">{{ $stats['total_assessments'] ?? 0 }}</div>
              <div style="font-size:0.75rem; color:#B45309; font-weight:600;">Pengerjaan modul diserahkan</div>
            </div>
            <div style="background:#FEF2F2; border:1.5px solid #FECACA; border-radius:14px; padding:1rem 1.2rem;">
              <div style="font-size:0.78rem; font-weight:800; color:#991B1B; text-transform:uppercase;">Perlu Bimbingan / Remedial</div>
              <div style="font-size:1.8rem; font-weight:900; color:#DC2626; margin:0.2rem 0;">{{ $stats['remedial_count'] ?? 0 }}</div>
              <div style="font-size:0.75rem; color:#EF4444; font-weight:600;">Skor di bawah 60</div>
            </div>
          </div>

          <!-- TOOLBAR FILTER PENILAIAN LATIHAN -->
          <div class="master-toolbar-row">
            <div class="toolbar-search-box">
              <input type="text" id="search-assessment-input" class="form-control" placeholder="Cari nama murid, judul materi latihan..." oninput="filterAssessmentsTable()" />
            </div>
            <div class="toolbar-filter-group">
              <label>Filter Siswa:</label>
              <select id="filter-assessment-student" class="form-control" onchange="filterAssessmentsTable()">
                <option value="all">Semua Siswa</option>
                @foreach($students as $std)
                <option value="{{ $std->id }}">{{ $std->name }}</option>
                @endforeach
              </select>
            </div>
            <div class="toolbar-filter-group">
              <label>Grade / Predikat:</label>
              <select id="filter-assessment-grade" class="form-control" onchange="filterAssessmentsTable()">
                <option value="all">Semua Grade</option>
                <option value="A">Grade A (Sangat Baik: 85 - 100)</option>
                <option value="B">Grade B (Baik: 70 - 84)</option>
                <option value="C">Grade C (Cukup: 60 - 69)</option>
                <option value="D">Grade D / Remedial (&lt; 60)</option>
              </select>
            </div>
            <div class="toolbar-filter-group">
              <label>Sortir:</label>
              <select id="sort-assessment-select" class="form-control" onchange="filterAssessmentsTable()">
                <option value="newest">Terbaru Diserahkan</option>
                <option value="score-desc">Nilai Tertinggi (100 - 0)</option>
                <option value="score-asc">Nilai Terendah</option>
                <option value="correct-desc">Jawaban Benar Terbanyak</option>
              </select>
            </div>
            <div class="toolbar-count-badge">
              Menampilkan <span id="assessment-count-display">{{ isset($assessments) ? $assessments->count() : 0 }}</span> Data Nilai
            </div>
          </div>

          <!-- TABEL HASIL PENILAIAN LATIHAN SISWA -->
          <div class="guru-table-wrap">
            <table class="guru-table" id="assessments-table">
              <thead>
                <tr>
                  <th style="width:130px;">Waktu Pengerjaan</th>
                  <th>Nama Murid</th>
                  <th>Materi / Latihan</th>
                  <th style="text-align:center;">Hasil Jawaban (Benar / Salah)</th>
                  <th style="text-align:center; width:110px;">Nilai Akhir</th>
                  <th style="text-align:center; width:90px;">Grade</th>
                  <th style="text-align:center; width:110px;">Status Evaluasi</th>
                </tr>
              </thead>
              <tbody id="assessments-table-body">
                @forelse($assessments ?? [] as $asm)
                <tr class="assessment-table-row" data-id="{{ $asm->id }}" data-student-id="{{ $asm->user_id }}" data-name="{{ strtolower($asm->user->name ?? '') }}" data-title="{{ strtolower($asm->exercise_title) }}" data-score="{{ $asm->score }}" data-correct="{{ $asm->correct_count }}" data-grade="{{ $asm->grade }}" data-status="{{ $asm->status }}">
                  <td style="color:#64748B; font-size:0.82rem; white-space:nowrap;">
                    <strong style="color:#1E293B; display:block;">{{ $asm->created_at ? $asm->created_at->format('d M Y') : 'Hari ini' }}</strong>
                    <span>{{ $asm->created_at ? $asm->created_at->format('H:i') . ' WIB' : '-' }}</span>
                  </td>
                  <td>
                    <div style="display:flex; align-items:center; gap:0.65rem;">
                      <div style="width:36px; height:36px; border-radius:50%; overflow:hidden; flex-shrink:0; border:1.5px solid #CBD5E1; background:#F8FAFC; display:flex; align-items:center; justify-content:center;">
                        @php
                          $sAv = $asm->user->avatar ?? 'img/avatar_anggata.svg';
                        @endphp
                        @if(str_contains($sAv, '/') || str_contains($sAv, '.svg') || str_contains($sAv, '.png'))
                          <img src="{{ asset($sAv) }}" alt="{{ $asm->user->name ?? 'Siswa' }}" style="width:100%; height:100%; object-fit:cover;" />
                        @else
                          <span>{{ $sAv }}</span>
                        @endif
                      </div>
                      <div>
                        <strong style="color:#0F172A; display:block;">{{ $asm->user->name ?? 'Murid' }}</strong>
                        <span style="font-size:0.75rem; color:#64748B;">{{ $asm->user->email ?? '' }}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style="font-weight:700; color:#1E293B;">{{ $asm->exercise_title }}</div>
                    @if($asm->lesson)
                      <span style="display:inline-block; margin-top:3px; font-size:0.72rem; padding:2px 8px; border-radius:9999px; background:#EFF6FF; color:#1D4ED8; font-weight:700;">
                        {{ strtoupper($asm->lesson->level->code ?? 'N5') }} &bull; Modul {{ $asm->lesson->lesson_number }}
                      </span>
                    @endif
                  </td>
                  <td style="text-align:center;">
                    <div style="display:inline-flex; align-items:center; gap:6px;">
                      <!-- Badge Benar -->
                      <span style="background:#ECFDF5; color:#065F46; border:1px solid #A7F3D0; font-weight:800; font-size:0.8rem; padding:0.25rem 0.65rem; border-radius:9999px;" title="{{ $asm->correct_count }} Jawaban Benar">
                        <span>{{ $asm->correct_count }} Benar</span>
                      </span>
                      <!-- Badge Salah -->
                      <span style="background:{{ $asm->wrong_count > 0 ? '#FEF2F2' : '#F1F5F9' }}; color:{{ $asm->wrong_count > 0 ? '#991B1B' : '#64748B' }}; border:1px solid {{ $asm->wrong_count > 0 ? '#FECACA' : '#E2E8F0' }}; font-weight:800; font-size:0.8rem; padding:0.25rem 0.65rem; border-radius:9999px;" title="{{ $asm->wrong_count }} Jawaban Salah">
                        <span>{{ $asm->wrong_count }} Salah</span>
                      </span>
                    </div>
                    <div style="font-size:0.72rem; color:#94A3B8; margin-top:3px;">
                      Total: {{ $asm->total_questions }} Soal
                    </div>
                  </td>
                  <td style="text-align:center;">
                    <div style="font-size:1.15rem; font-weight:900; color:{{ $asm->score >= 70 ? '#059669' : ($asm->score >= 60 ? '#D97706' : '#DC2626') }};">
                      {{ $asm->score }} <span style="font-size:0.78rem; font-weight:700; color:#94A3B8;">/ 100</span>
                    </div>
                  </td>
                  <td style="text-align:center;">
                    <span style="display:inline-flex; align-items:center; justify-content:center; width:34px; height:34px; border-radius:50%; font-weight:900; font-size:1.05rem; background:{{ $asm->grade === 'A' ? '#ECFDF5' : ($asm->grade === 'B' ? '#EFF6FF' : ($asm->grade === 'C' ? '#FFFBEB' : '#FEF2F2')) }}; color:{{ $asm->grade === 'A' ? '#059669' : ($asm->grade === 'B' ? '#1D4ED8' : ($asm->grade === 'C' ? '#D97706' : '#DC2626')) }}; border:2px solid {{ $asm->grade === 'A' ? '#A7F3D0' : ($asm->grade === 'B' ? '#BFDBFE' : ($asm->grade === 'C' ? '#FDE68A' : '#FECACA')) }};">
                      {{ $asm->grade }}
                    </span>
                  </td>
                  <td style="text-align:center;">
                    @if($asm->status === 'lulus')
                      <span class="level-status-pill status-active" style="padding:0.3rem 0.8rem; font-size:0.78rem;">Lulus KKM</span>
                    @else
                      <span style="display:inline-block; padding:0.3rem 0.8rem; font-size:0.78rem; font-weight:800; border-radius:9999px; background:#FEF2F2; color:#DC2626; border:1px solid #FECACA;">Remedial</span>
                    @endif
                  </td>
                </tr>
                @empty
                <tr>
                  <td colspan="7" style="text-align:center; padding:3rem 2rem; color:#94A3B8;">
                    <p style="font-size:1rem; font-weight:700; margin-bottom:0.4rem;">Belum ada riwayat pengerjaan latihan dari murid.</p>
                    <p style="font-size:0.82rem; margin:0;">Saat siswa mengerjakan kuis quest atau latihan di web siswa, seluruh nilai, rincian benar, dan salah akan otomatis tercatat di sini.</p>
                  </td>
                </tr>
                @endforelse
              </tbody>
            </table>
          </div>
        </div>

        <!-- ==============================================
             SUB-PANEL 2: DAFTAR AKUN SISWA & LEADERBOARD
             ============================================== -->
        <div id="subpanel-students" style="display:none;">
          <!-- TOOLBAR PENCARIAN & SORTIR SISWA -->
          <div class="master-toolbar-row">
            <div class="toolbar-search-box">
              <input type="text" id="search-student-input" class="form-control" placeholder="Cari nama siswa, email murid..." oninput="filterStudentsTable()" />
            </div>
            <div class="toolbar-filter-group">
              <label>Sortir:</label>
              <select id="sort-student-select" class="form-control" onchange="filterStudentsTable()">
                <option value="score-desc">Poin Tertinggi (#1)</option>
                <option value="score-asc">Poin Terendah</option>
                <option value="name-asc">Nama Siswa (A - Z)</option>
                <option value="name-desc">Nama Siswa (Z - A)</option>
                <option value="lessons-desc">Modul Selesai Terbanyak</option>
              </select>
            </div>
            <div class="toolbar-filter-group">
              <label>Status Belajar:</label>
              <select id="filter-student-status" class="form-control" onchange="filterStudentsTable()">
                <option value="all">Semua Siswa</option>
                <option value="has-score">Sudah Punya Poin (&gt; 0)</option>
                <option value="zero-score">Belum Ada Poin (0)</option>
                <option value="has-lesson">Sudah Selesai Modul</option>
              </select>
            </div>
            <div class="toolbar-count-badge">
              Menampilkan <span id="student-count-display">{{ $students->count() }}</span> Siswa
            </div>
          </div>

          <div class="guru-table-wrap">
            <table class="guru-table" id="students-table">
              <thead>
                <tr>
                  <th style="width:60px;">Peringkat</th>
                  <th>Siswa</th>
                  <th>Email</th>
                  <th>Rata-rata Nilai</th>
                  <th>Latihan Dikerjakan</th>
                  <th>Poin Gamifikasi</th>
                  <th>Materi Selesai</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody id="students-table-body">
                @forelse($students as $idx => $std)
                @php
                  $stdAvg = $std->average_assessment_score;
                  $stdAssCount = $std->assessments ? $std->assessments->count() : 0;
                @endphp
                <tr class="student-table-row" data-rank="{{ $idx + 1 }}" data-name="{{ strtolower($std->name) }}" data-email="{{ strtolower($std->email) }}" data-score="{{ $std->score }}" data-lessons="{{ is_array($std->completed_lessons) ? count($std->completed_lessons) : 0 }}">
                  <td>
                    <strong>#{{ $idx + 1 }}</strong>
                  </td>
                  <td>
                    <div style="display:flex; align-items:center; gap:0.65rem;">
                      <div style="width:36px; height:36px; border-radius:50%; overflow:hidden; flex-shrink:0; border:1.5px solid #CBD5E1; background:#F8FAFC; display:flex; align-items:center; justify-content:center;">
                        @php
                          $stdAv = $std->avatar ?? 'img/avatar_anggata.svg';
                        @endphp
                        @if(str_contains($stdAv, '/') || str_contains($stdAv, '.svg') || str_contains($stdAv, '.png'))
                          <img src="{{ asset($stdAv) }}" alt="{{ $std->name }}" style="width:100%; height:100%; object-fit:cover;" />
                        @else
                          <span>{{ $stdAv }}</span>
                        @endif
                      </div>
                      <div>
                        <strong style="color:#0F172A;">{{ $std->name }}</strong>
                      </div>
                    </div>
                  </td>
                  <td style="color:#64748B;">{{ $std->email }}</td>
                  <td>
                    @if($stdAvg !== null)
                      <span style="background:{{ $stdAvg >= 70 ? '#ECFDF5' : '#FFFBEB' }}; color:{{ $stdAvg >= 70 ? '#065F46' : '#92400E' }}; border:1px solid {{ $stdAvg >= 70 ? '#A7F3D0' : '#FDE68A' }}; font-weight:800; font-size:0.85rem; padding:0.25rem 0.65rem; border-radius:9999px;">
                        {{ $stdAvg }} / 100
                      </span>
                    @else
                      <span style="color:#94A3B8; font-size:0.8rem;">Belum ada nilai</span>
                    @endif
                  </td>
                  <td>
                    <strong>{{ $stdAssCount }}</strong> Selesai
                  </td>
                  <td>
                    <span style="background:#FEF3C7; color:#92400E; font-weight:800; font-size:0.85rem; padding:0.3rem 0.8rem; border-radius:var(--radius-pill);">
                      {{ $std->score }} Poin
                    </span>
                  </td>
                  <td>
                    <strong>{{ is_array($std->completed_lessons) ? count($std->completed_lessons) : 0 }}</strong> Modul
                  </td>
                  <td>
                    <span class="level-status-pill status-active">Aktif Belajar</span>
                  </td>
                </tr>
                @empty
                <tr>
                  <td colspan="8" style="text-align:center; padding:2rem; color:#94A3B8;">
                    Belum ada murid yang terdaftar.
                  </td>
                </tr>
                @endforelse
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- ==============================================
         TAB 5: KELOLA MINI GAMES & BANK SOAL GAME
         ============================================== -->
    <div class="guru-tab-content" id="guru-tab-minigames">
      <div class="master-card">
        <div class="master-card-header">
          <div class="master-card-title">
            <h3>Pusat Pengaturan Mini Games &amp; Bank Soal Kosakata</h3>
            <p>Kelola durasi waktu permainan, sub-mode, dan kelola bank soal kosakata lengkap (seperti <strong>かさ (kasa)</strong>, <strong>ねこ (neko)</strong>, <strong>パン (pan)</strong>, dan <strong>Kanji N5</strong>) yang tersimpan langsung di database SQLite untuk siswa.</p>
          </div>
          <div style="display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
            <button type="button" class="btn-preset" onclick="resetAdminGameDefault()" style="color:#DC2626; border-color:#FECACA;" title="Reset seluruh bank soal kosakata ke bawaan database">Reset Database Soal</button>
            <button type="button" class="btn-guru-primary" onclick="openAddGameQuestionModal()">
              <span>+ Tambah Soal Kosakata</span>
            </button>
          </div>
        </div>

        <div class="admin-minigames-wrap">
          <!-- Game Selection Chips -->
          <div class="admin-games-selector" id="admin-games-selector">
            <button type="button" class="admin-game-chip active" id="chip-game-kana-blast" onclick="switchAdminGameTab('kana-blast')">
              <span>Kana Blast (Turret Blaster)</span>
            </button>
            <button type="button" class="admin-game-chip" id="chip-game-sky-defense" onclick="switchAdminGameTab('sky-defense')">
              <span>Sky Atk Defense</span>
            </button>
            <button type="button" class="admin-game-chip" id="chip-game-flash-card" onclick="switchAdminGameTab('flash-card')">
              <span>Flash Card</span>
            </button>
            <button type="button" class="admin-game-chip" id="chip-game-memory-match" onclick="switchAdminGameTab('memory-match')">
              <span>Memory Match</span>
            </button>
            <button type="button" class="admin-game-chip" id="chip-game-speed-quiz" onclick="switchAdminGameTab('speed-quiz')">
              <span>Speed Quiz</span>
            </button>
            <button type="button" class="admin-game-chip" id="chip-game-word-builder" onclick="switchAdminGameTab('word-builder')">
              <span>Word Builder</span>
            </button>
          </div>

          <!-- Game Dynamic Details Panel -->
          <div class="admin-game-details" id="admin-game-details">
            <!-- Dynamically populated by JS renderAdminGameView() -->
          </div>
        </div>
      </div>
    </div>

  </main>

  <!-- ==============================================
       MODAL: EDIT PROFIL GURU MASTER (POPUP MODAL)
       ============================================== -->
  <div class="guru-modal-backdrop" id="modal-edit-guru-profile">
    <div class="guru-modal-box" style="max-width: 580px; max-height: 90vh; overflow-y: auto; border-radius: 24px; padding: 1.8rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);">
      <div class="guru-modal-header" style="border-bottom: 1.5px solid #E2E8F0; padding-bottom: 1rem; margin-bottom: 1.2rem; display: flex; align-items: center; justify-content: space-between;">
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 800; color: #0F172A; margin: 0;">Pengaturan Profil Guru Pengajar</h3>
          <p style="color: #64748B; font-size: 0.82rem; margin: 0.2rem 0 0;">Kelola nama tampilan, avatar karakter, email login, dan kata sandi Master Guru.</p>
        </div>
        <button type="button" class="btn-close-modal" onclick="closeModal('modal-edit-guru-profile')" style="font-size: 1.5rem; line-height: 1; border: none; background: #F1F5F9; width: 34px; height: 34px; border-radius: 50%; cursor: pointer; color: #64748B;">&times;</button>
      </div>

      <form action="{{ route('guru.profile.update') }}" method="POST" id="form-edit-guru-profile" onsubmit="handleGuruProfileSubmit(event)">
        @csrf

        <!-- Pasfoto Formal Guru 3x4 -->
        <div style="display:flex; flex-direction:column; align-items:center; gap:0.6rem; margin-bottom:1.4rem; padding:1.1rem; background:#F8FAFC; border:1.5px solid #E2E8F0; border-radius:18px;">
          <div style="width:84px; height:84px; border-radius:50%; border:3px solid #BA3D27; overflow:hidden; box-shadow:0 4px 14px rgba(186,61,39,0.2); background:#FFFFFF; display:flex; align-items:center; justify-content:center;">
            @php
              $curAvatar = auth()->user()->avatar ?? 'img/avatar_tanaka.svg';
              if (!str_starts_with($curAvatar, 'img/') && !str_starts_with($curAvatar, '/')) {
                $curAvatar = 'img/' . $curAvatar;
              }
            @endphp
            <img id="guru-profile-avatar-preview" src="{{ asset($curAvatar) }}" alt="Avatar Preview" style="width:100%; height:100%; object-fit:cover;" />
          </div>
          <div style="font-size:0.82rem; font-weight:800; color:#334155;">Pasfoto Formal Guru Pengajar (3x4)</div>
          <div style="display:flex; gap:0.5rem; flex-wrap:wrap; justify-content:center;">
            <button type="button" class="btn-preset" onclick="setGuruAvatar('img/avatar_tanaka.svg')" style="font-size:0.8rem; padding:0.4rem 0.85rem; font-weight:700;">Sensei Tanaka</button>
            <button type="button" class="btn-preset" onclick="setGuruAvatar('img/avatar_anggata.svg')" style="font-size:0.8rem; padding:0.4rem 0.85rem; font-weight:700;">Sensei Angga</button>
            <button type="button" class="btn-preset" onclick="setGuruAvatar('img/avatar_aoi.svg')" style="font-size:0.8rem; padding:0.4rem 0.85rem; font-weight:700;">Sensei Aoi</button>
          </div>
          <input type="hidden" name="avatar" id="guru-avatar-input" value="{{ $curAvatar }}" />
        </div>

        <div class="form-group" style="margin-bottom:1.1rem;">
          <label style="font-weight:800; font-size:0.88rem; color:#334155; display:block; margin-bottom:0.4rem;">Nama Lengkap Guru (Huruf Romawi)</label>
          <input type="text" name="name" id="guru-name-input" class="form-control" value="{{ auth()->user()->name }}" required style="width:100%; padding:0.8rem 1rem; border:1.5px solid #CBD5E1; border-radius:12px; font-size:0.95rem; font-weight:600;" />
        </div>

        <div class="form-group" style="margin-bottom:1.1rem;">
          <label style="font-weight:800; font-size:0.88rem; color:#334155; display:block; margin-bottom:0.4rem;">Alamat Email Akun Guru</label>
          <input type="email" name="email" id="guru-email-input" class="form-control" value="{{ auth()->user()->email }}" required style="width:100%; padding:0.8rem 1rem; border:1.5px solid #CBD5E1; border-radius:12px; font-size:0.95rem; font-weight:600; background:#FFFFFF; color:#0F172A;" />
          <small style="color:#64748B; font-size:0.76rem; margin-top:0.3rem; display:block;">Email akun Master Guru dapat Anda ubah kapan saja sebagai kredensial login utama.</small>
        </div>

        <div class="form-group" style="margin-bottom:1.1rem;">
          <label style="font-weight:800; font-size:0.88rem; color:#334155; display:block; margin-bottom:0.4rem;">Status Hak Akses Akun</label>
          <div style="display:inline-flex; align-items:center; gap:0.45rem; padding:0.4rem 0.9rem; background:#FEF2F2; border:1.5px solid #FECACA; color:#BA3D27; font-weight:800; font-size:0.82rem; border-radius:9999px;">
            <span>Master Guru &bull; Kelola Penuh Seluruh Modul, Tingkat &amp; Soal</span>
          </div>
        </div>

        <div class="form-group" style="margin-bottom:1.5rem;">
          <label style="font-weight:800; font-size:0.88rem; color:#334155; display:block; margin-bottom:0.4rem;">Ganti Kata Sandi (Opsional)</label>
          <input type="password" name="password" class="form-control" placeholder="Biarkan kosong jika tidak ingin mengubah sandi..." minlength="6" style="width:100%; padding:0.8rem 1rem; border:1.5px solid #CBD5E1; border-radius:12px; font-size:0.95rem;" />
          <small style="color:#94A3B8; font-size:0.76rem; margin-top:0.3rem; display:block;">Minimal 6 karakter jika ingin mengganti kata sandi baru.</small>
        </div>

        <div style="display:flex; justify-content:flex-end; gap:0.75rem; border-top: 1.5px solid #E2E8F0; padding-top: 1.2rem;">
          <button type="button" class="btn-cancel" onclick="closeModal('modal-edit-guru-profile')" style="padding:0.8rem 1.4rem; border-radius:12px; font-weight:700; font-size:0.92rem; border:1.5px solid #CBD5E1; background:#F8FAFC; color:#475569; cursor:pointer;">
            Batal
          </button>
          <button type="submit" class="btn-primary" style="background:linear-gradient(135deg, #BA3D27 0%, #991B1B 100%); color:#FFFFFF; border:none; padding:0.8rem 1.6rem; border-radius:12px; font-weight:800; font-size:0.92rem; cursor:pointer; box-shadow:0 4px 14px rgba(186,61,39,0.3); display:inline-flex; align-items:center; gap:0.5rem;">
            <span>Simpan Perubahan Profil Guru</span>
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- ==============================================
       MODAL: POPUP SUKSES UPDATE PROFIL GURU
       ============================================== -->
  <div class="guru-modal-backdrop" id="modal-profile-success">
    <div class="guru-modal-box" style="max-width: 440px; text-align: center; padding: 2.2rem 1.8rem; border-radius: 24px; box-shadow: 0 20px 45px rgba(0,0,0,0.2);">
      <div style="width: 72px; height: 72px; border-radius: 50%; background: #DCFCE7; color: #16A34A; display: inline-flex; align-items: center; justify-content: center; margin: 0 auto 1.2rem; font-size: 1.1rem; font-weight: 800; box-shadow: 0 10px 25px rgba(22, 163, 74, 0.25);">
        OK
      </div>
      <h3 style="font-size: 1.35rem; font-weight: 800; color: #0F172A; margin: 0 0 0.5rem;" id="modal-profile-success-title">Profil Berhasil Diperbarui!</h3>
      <p style="color: #64748B; font-size: 0.92rem; line-height: 1.5; margin: 0 0 1.4rem;" id="modal-profile-success-msg">
        {{ session('success') ?? 'Data profil Master Guru Anda telah berhasil disimpan ke database.' }}
      </p>
      <div style="background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 14px; padding: 0.9rem 1.1rem; margin-bottom: 1.5rem; text-align: left;">
        <div style="font-size: 0.78rem; font-weight: 700; color: #94A3B8; text-transform: uppercase; margin-bottom: 0.35rem;">Informasi Akun Master Terkini:</div>
        <div style="font-size: 0.95rem; font-weight: 800; color: #1E293B; display: flex; align-items: center; gap: 0.5rem;">
          <span>Nama:</span>
          <span id="modal-profile-success-name">{{ auth()->user()->name ?? 'Sensei Tanaka' }}</span>
        </div>
        <div style="font-size: 0.88rem; font-weight: 700; color: #475569; margin-top: 0.35rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>Email:</span>
          <span id="modal-profile-success-email">{{ auth()->user()->email ?? 'guru@sijapanese.id' }}</span>
        </div>
      </div>
      <button type="button" class="btn-primary" onclick="closeModal('modal-profile-success')" style="width: 100%; justify-content: center; padding: 0.85rem 1.5rem; font-size: 0.95rem; font-weight: 800; border-radius: 12px; background: linear-gradient(135deg, #10B981 0%, #059669 100%); color: #FFF; border: none; cursor: pointer; box-shadow: 0 4px 14px rgba(16,185,129,0.35);">
        Siap, Lanjutkan
      </button>
    </div>
  </div>

  <!-- ==============================================
       MODAL: TAMBAH LEVEL KUSTOM
       ============================================== -->
  <div class="guru-modal-backdrop" id="modal-add-level">
    <div class="guru-modal-box">
      <div class="guru-modal-header">
        <h3>Tambah Kotak Level Baru</h3>
        <button class="btn-close-modal" onclick="closeModal('modal-add-level')">&times;</button>
      </div>
      <form action="{{ route('guru.levels.store') }}" method="POST">
        @csrf
        <div class="form-group">
          <label>Kode Level (Unik, huruf kecil):</label>
          <input type="text" name="code" class="form-control" placeholder="contoh: n3, n2, khusus" required />
        </div>
        <div class="form-group">
          <label>Nama Level:</label>
          <input type="text" name="name" class="form-control" placeholder="contoh: N3 Menengah" required />
        </div>
        <div class="form-group">
          <label>Sub-judul / Deskripsi Pendek:</label>
          <input type="text" name="sub" class="form-control" placeholder="contoh: Pemahaman Konteks Kalimat" required />
        </div>
        <div class="form-group">
          <label>Warna Aksen Kotak (Hex):</label>
          <select name="accent_color" class="form-control">
            <option value="#D9383A">Merah (#D9383A)</option>
            <option value="#2563EB" selected>Biru (#2563EB)</option>
            <option value="#F59E0B">Kuning / Amber (#F59E0B)</option>
            <option value="#10B981">Hijau (#10B981)</option>
            <option value="#8B5CF6">Ungu (#8B5CF6)</option>
          </select>
        </div>
        <div class="modal-btn-row">
          <button type="button" class="btn-cancel" onclick="closeModal('modal-add-level')">Batal</button>
          <button type="submit" class="btn-guru-primary">Simpan Kotak Level</button>
        </div>
      </form>
    </div>
  </div>

  <!-- MODAL: EDIT LEVEL -->
  <div class="guru-modal-backdrop" id="modal-edit-level">
    <div class="guru-modal-box">
      <div class="guru-modal-header">
        <h3>Edit Kotak Level</h3>
        <button class="btn-close-modal" onclick="closeModal('modal-edit-level')">&times;</button>
      </div>
      <form id="form-edit-level" method="POST">
        @csrf
        @method('PUT')
        <div class="form-group">
          <label>Nama Level:</label>
          <input type="text" name="name" id="edit-level-name" class="form-control" required />
        </div>
        <div class="form-group">
          <label>Sub-judul / Deskripsi Pendek:</label>
          <input type="text" name="sub" id="edit-level-sub" class="form-control" required />
        </div>
        <div class="form-group">
          <label>Warna Aksen:</label>
          <select name="accent_color" id="edit-level-color" class="form-control">
            <option value="#D9383A">Merah (#D9383A)</option>
            <option value="#2563EB">Biru (#2563EB)</option>
            <option value="#F59E0B">Kuning / Amber (#F59E0B)</option>
            <option value="#10B981">Hijau (#10B981)</option>
            <option value="#8B5CF6">Ungu (#8B5CF6)</option>
          </select>
        </div>
        <div class="modal-btn-row">
          <button type="button" class="btn-cancel" onclick="closeModal('modal-edit-level')">Batal</button>
          <button type="submit" class="btn-guru-primary">Perbarui Level</button>
        </div>
      </form>
    </div>
  </div>

  <!-- ==============================================
       MODAL: TAMBAH MODUL PELAJARAN
       ============================================== -->
  <div class="guru-modal-backdrop" id="modal-add-lesson">
    <div class="guru-modal-box">
      <div class="guru-modal-header">
        <h3>Tambah Modul Pelajaran Baru</h3>
        <button class="btn-close-modal" onclick="closeModal('modal-add-lesson')">&times;</button>
      </div>
      <form action="{{ route('guru.lessons.store') }}" method="POST">
        @csrf
        <div class="form-group">
          <label>Pilih Kotak Level:</label>
          <select name="level_id" class="form-control" required>
            @foreach($levels as $lvl)
            <option value="{{ $lvl->id }}">{{ $lvl->name }} ({{ strtoupper($lvl->code) }})</option>
            @endforeach
          </select>
        </div>
        <div class="form-group">
          <label>Nomor Pelajaran:</label>
          <input type="number" name="lesson_number" class="form-control" value="1" min="1" required />
        </div>
        <div class="form-group">
          <label>Judul Modul Pelajaran:</label>
          <input type="text" name="title" class="form-control" placeholder="contoh: Percakapan di Stasiun & Membeli Tiket" required />
        </div>
        <div class="form-group">
          <label>Sub-judul / Rincian Materi:</label>
          <input type="text" name="subtitle" class="form-control" placeholder="contoh: Mempelajari kosakata tiket, petunjuk arah, dan percakapan" />
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.8rem;">
          <div class="form-group">
            <label>Badge Kategori:</label>
            <input type="text" name="badge" class="form-control" value="Modul Baru" />
          </div>
          <div class="form-group">
            <label>Estimasi Menit:</label>
            <input type="number" name="est_minutes" class="form-control" value="15" />
          </div>
        </div>
        <div class="modal-btn-row">
          <button type="button" class="btn-cancel" onclick="closeModal('modal-add-lesson')">Batal</button>
          <button type="submit" class="btn-guru-primary">Simpan Modul</button>
        </div>
      </form>
    </div>
  </div>

  <!-- MODAL: EDIT MODUL PELAJARAN (LENGKAP DENGAN KOMIK, AUDIO & CATATAN SENSEI TANAKA) -->
  <div class="guru-modal-backdrop" id="modal-edit-lesson">
    <div class="guru-modal-box" style="max-width:680px;">
      <div class="guru-modal-header">
        <div>
          <h3 id="edit-lesson-modal-title">Edit Modul &amp; Pembahasan Komik</h3>
          <span style="font-size:0.8rem; color:#64748B;">Atur judul, estimasi, ilustrasi komik visual, pelafalan audio, dan catatan Sensei Tanaka</span>
        </div>
        <button class="btn-close-modal" onclick="closeModal('modal-edit-lesson')">&times;</button>
      </div>
      <form id="form-edit-lesson" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        
        <!-- Informasi Umum Modul -->
        <div class="form-group">
          <label>Judul Modul:</label>
          <input type="text" name="title" id="edit-lesson-title" class="form-control" required />
        </div>
        <div class="form-group">
          <label>Sub-judul / Rincian Materi:</label>
          <input type="text" name="subtitle" id="edit-lesson-subtitle" class="form-control" />
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.8rem;">
          <div class="form-group">
            <label>Badge Kategori:</label>
            <input type="text" name="badge" id="edit-lesson-badge" class="form-control" />
          </div>
          <div class="form-group">
            <label>Estimasi Menit:</label>
            <input type="number" name="est_minutes" id="edit-lesson-minutes" class="form-control" />
          </div>
        </div>

        <!--  Gambar Komik Pembahasan Awal -->
        <div style="background:#F8FAFC; padding:1.2rem; border-radius:14px; border:1.5px solid #E2E8F0; margin-bottom:1.2rem;">
          <label style="font-weight:800; color:#0F172A; display:block; margin-bottom:0.3rem;">
            Gambar Ilustrasi Komik Pembahasan Awal (Langkah 2):
          </label>
          <p style="font-size:0.8rem; color:#64748B; margin:0 0 0.8rem;">Pilih template komik cerita petualangan Jepang atau upload file gambar sendiri dari komputer</p>

          <div class="form-group">
            <label style="font-size:0.8rem; color:#475569;">Pilih Template Komik Cerita:</label>
            <select name="comic_image" id="edit-lesson-comic-image" class="form-control" onchange="handleLessonComicTemplateChange()">
              <option value="">-- Gunakan Ilustrasi Komik Bawaan Default --</option>
              <option value="img/comic_ramen.svg">Kedai Ramen Katakana Tokyo (ラーメン)</option>
              <option value="img/comic_aisatsu.svg">Suasana Kelas Salam Aisatsu (おはようございます)</option>
              <option value="img/comic_station.svg">Papan Stasiun Kereta Tokyo (東京 / とうきょう)</option>
              <option value="img/comic_konbini.svg">Minimarket Konbini & Uang Yen (¥150)</option>
              <option value="img/comic_hotel.svg">Check-in Hotel / Ryokan (ホテル)</option>
              <option value="img/comic_directions.svg">Petunjuk Arah Wisata & Stasiun (まっすぐ)</option>
              <option value="img/comic_souvenir.svg">Toko Suvenir Asakusa (おみやげ)</option>
              <option value="img/comic_emergency.svg">Situasi Darurat & Bantuan (トイレ / 英語)</option>
              <option value="__custom__">-- Masukkan Path / URL Gambar Kustom --</option>
            </select>
          </div>

          <div class="form-group" id="edit-lesson-custom-url-group" style="display:none;">
            <label style="font-size:0.8rem; color:#475569;">Path / URL Gambar Kustom:</label>
            <input type="text" id="edit-lesson-custom-url" class="form-control" placeholder="Contoh: img/comic_ramen.svg atau https://..." oninput="handleLessonCustomUrlInput()" />
          </div>

          <div class="form-group" style="margin-bottom:0.8rem;">
            <label style="font-size:0.8rem; color:#475569;">Atau Upload File Gambar Komik Baru (PNG, JPG, SVG, WebP):</label>
            <input type="file" name="comic_file" id="edit-lesson-comic-file" class="form-control" accept="image/*" onchange="previewLessonUploadedImage(this)" />
          </div>

          <!-- Live Preview & Checkbox Hapus -->
          <div id="edit-lesson-preview-wrap" style="display:flex; align-items:center; gap:1rem; padding:0.6rem; background:#FFFFFF; border:1px solid #CBD5E1; border-radius:10px;">
            <div style="width:100px; height:65px; border-radius:8px; overflow:hidden; background:#F1F5F9; border:1px solid #E2E8F0; flex-shrink:0; display:flex; align-items:center; justify-content:center;">
              <img id="edit-lesson-preview-img" src="" alt="Preview Komik" style="width:100%; height:100%; object-fit:cover; display:none;" />
              <span id="edit-lesson-preview-none" style="font-size:0.75rem; color:#94A3B8; text-align:center;">Komik Default</span>
            </div>
            <div style="flex:1;">
              <div id="edit-lesson-preview-text" style="font-size:0.82rem; font-weight:700; color:#334155;">Ilustrasi Komik Default</div>
              <label style="display:inline-flex; align-items:center; gap:0.4rem; font-size:0.8rem; color:#DC2626; cursor:pointer; margin-top:0.35rem;">
                <input type="checkbox" name="remove_comic_image" value="1" id="edit-lesson-remove-comic" onchange="handleRemoveLessonComicCheckbox()" />
                <span>Reset gambar komik (kembali ke ilustrasi komik bawaan)</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Audio  Audio Pelafalan Percakapan Komik -->
        <div style="background:#F8FAFC; border:1.5px solid #E2E8F0; border-radius:14px; padding:1.2rem; margin-bottom:1.2rem;">
          <label style="font-weight:800; color:#0F172A; display:block; margin-bottom:0.3rem;">
            Audio  Audio Pelafalan Percakapan Komik:
          </label>
          <p style="font-size:0.8rem; color:#64748B; margin:0 0 0.8rem;">Dengarkan suara asli Jepang dialog komik ini langsung di layar belajar siswa</p>
          <div class="form-group">
            <label style="font-size:0.8rem; color:#475569;">Label / Judul Audio:</label>
            <input type="text" name="audio_label" id="edit-lesson-audio-label" class="form-control" placeholder="Contoh: Percakapan Kenji & Sensei Tanaka di Tokyo" />
          </div>
          <div class="form-group" style="margin-bottom:0;">
            <label style="font-size:0.8rem; color:#475569;">Teks Dialog Jepang (Dibacakan Audio Player):</label>
            <textarea name="audio_text" id="edit-lesson-audio-text" class="form-control" rows="3" placeholder="Tuliskan teks kalimat/percakapan bahasa Jepang aslinya..."></textarea>
          </div>
        </div>

        <!-- Catatan Pembahasan Sensei Tanaka & Kiko -->
        <div style="background:#EFF6FF; border:1.5px solid #BFDBFE; border-radius:14px; padding:1.2rem; margin-bottom:1.2rem;">
          <label style="font-weight:800; color:#1E3A8A; display:block; margin-bottom:0.3rem;">
            Catatan Pembahasan Sensei Tanaka &amp; Kiko (Langkah 1 &amp; Langkah 2):
          </label>
          <p style="font-size:0.8rem; color:#3B82F6; margin:0 0 0.6rem;">Pesan dan tips penting dari Sensei Tanaka yang ditampilkan di bawah komik dan pengantar modul</p>
          <textarea name="mascot_tip" id="edit-lesson-mascot-tip" class="form-control" rows="3" placeholder="Tuliskan tips belajar, penjelasan tata bahasa, atau trik mengingat dari Sensei Tanaka..."></textarea>
        </div>

        <div class="modal-btn-row">
          <button type="button" class="btn-cancel" onclick="closeModal('modal-edit-lesson')">Batal</button>
          <button type="submit" class="btn-guru-primary">Perbarui Modul &amp; Komik</button>
        </div>
      </form>
    </div>
  </div>

    <!-- ==============================================
       MODAL: TAMBAH SOAL QUEST BARU
       ============================================== -->
  <div class="guru-modal-backdrop" id="modal-add-quest">
    <div class="guru-modal-box" style="max-width:680px;">
      <div class="guru-modal-header">
        <div>
          <h3>Buat Soal Quest Baru</h3>
          <span style="font-size:0.8rem; color:#64748B;">Lengkapi pertanyaan, pilihan jawaban, kunci benar, gambar, dan penjelasan</span>
        </div>
        <button class="btn-close-modal" onclick="closeModal('modal-add-quest')">&times;</button>
      </div>
      <form action="{{ route('guru.quests.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        
        <!-- 1. Tautan Modul Pelajaran -->
        <div class="form-group">
          <label>Tautkan ke Modul Pelajaran:</label>
          <select name="lesson_id" class="form-control" required>
            @foreach($lessons as $les)
            <option value="{{ $les->id }}">{{ $les->title }} ({{ strtoupper($les->level->code ?? 'N5') }})</option>
            @endforeach
          </select>
        </div>

        <!-- 2. Pertanyaan Soal -->
        <div class="form-group">
          <label>Teks Pertanyaan Soal:</label>
          <textarea name="question" class="form-control" rows="3" placeholder="Tuliskan pertanyaan soal latihan..." required></textarea>
        </div>

        <!-- 3. Badge & Poin -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.8rem;">
          <div class="form-group">
            <label>Badge Header:</label>
            <input type="text" name="badge_text" class="form-control" value="Tantangan Quest" />
          </div>
          <div class="form-group">
            <label>Poin Hadiah Kuis:</label>
            <input type="number" name="points" class="form-control" value="25" />
          </div>
        </div>

        <!-- 4. Gambar Ilustrasi Soal -->
        <div style="background:#F8FAFC; padding:1.2rem; border-radius:14px; border:1.5px solid #E2E8F0; margin-bottom:1.2rem;">
          <label style="font-weight:800; color:#0F172A; display:block; margin-bottom:0.3rem;">
            Gambar Ilustrasi Soal (Opsional):
          </label>
          <p style="font-size:0.8rem; color:#64748B; margin:0 0 0.8rem;">Pilih template komik visual beresolusi tajam atau upload file gambar sendiri</p>

          <div class="form-group">
            <label style="font-size:0.8rem; color:#475569;">Pilih Template Ilustrasi Komik:</label>
            <select name="image_url" id="add-quest-image-url" class="form-control" onchange="handleImageTemplateChange('add')">
              <option value="">-- Tanpa Ilustrasi Gambar (Hanya Teks) --</option>
              <option value="img/comic_ramen.svg">Kedai Ramen Katakana (ラーメン)</option>
              <option value="img/comic_aisatsu.svg">Suasana Kelas Aisatsu (おはようございます)</option>
              <option value="img/comic_station.svg">Papan Stasiun Kereta Tokyo (東京 / とうきょう)</option>
              <option value="img/comic_konbini.svg">Minimarket Konbini & Uang Yen (¥150)</option>
              <option value="img/comic_hotel.svg">Check-in Hotel / Ryokan (ホテル)</option>
              <option value="img/comic_directions.svg">Petunjuk Arah Wisata & Stasiun (まっすぐ)</option>
              <option value="img/comic_souvenir.svg">Toko Suvenir Asakusa (おみやげ)</option>
              <option value="img/comic_emergency.svg">Situasi Darurat & Bantuan (トイレ / 英語)</option>
              <option value="__custom__">-- Masukkan Path / URL Gambar Kustom --</option>
            </select>
          </div>

          <div class="form-group" id="add-quest-custom-url-group" style="display:none;">
            <label style="font-size:0.8rem; color:#475569;">Path / URL Gambar Kustom:</label>
            <input type="text" id="add-quest-custom-url" class="form-control" placeholder="Contoh: img/comic_ramen.svg atau https://..." oninput="handleCustomUrlInput('add')" />
          </div>

          <div class="form-group" style="margin-bottom:0.8rem;">
            <label style="font-size:0.8rem; color:#475569;">Atau Upload File Gambar Baru (PNG, JPG, SVG, WebP):</label>
            <input type="file" name="image_file" class="form-control" accept="image/*" onchange="previewUploadedImage('add', this)" />
          </div>

          <!-- Live Preview -->
          <div id="add-quest-preview-wrap" style="display:flex; align-items:center; gap:1rem; padding:0.6rem; background:#FFFFFF; border:1px solid #CBD5E1; border-radius:10px;">
            <div style="width:90px; height:60px; border-radius:8px; overflow:hidden; background:#F1F5F9; border:1px solid #E2E8F0; flex-shrink:0; display:flex; align-items:center; justify-content:center;">
              <img id="add-quest-preview-img" src="" alt="Preview Gambar" style="width:100%; height:100%; object-fit:cover; display:none;" />
              <span id="add-quest-preview-none" style="font-size:0.75rem; color:#94A3B8; text-align:center;">Tanpa Gambar</span>
            </div>
            <div style="flex:1;">
              <div id="add-quest-preview-text" style="font-size:0.82rem; font-weight:700; color:#334155;">Tidak ada gambar dipilih</div>
            </div>
          </div>
        </div>

        <!-- 5. Semua Pilihan Jawaban (A, B, C, D) & Kunci Benar -->
        <div style="background:#F8FAFC; padding:1.2rem; border-radius:14px; border:1.5px solid #E2E8F0; margin-bottom:1.2rem;">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.8rem; flex-wrap:wrap; gap:0.5rem;">
            <label style="font-weight:800; color:#0F172A; margin:0;">
              Pilihan Jawaban (Pilih Radio Jawaban Benar):
            </label>
            <span style="font-size:0.78rem; background:#DCFCE7; color:#166534; font-weight:700; padding:0.2rem 0.6rem; border-radius:var(--radius-pill);">
              Tandai 1 radio button sebagai kunci benar
            </span>
          </div>

          <div style="display:flex; flex-direction:column; gap:0.75rem;">
            <!-- OPSI A -->
            <div class="opt-row-box is-correct" id="add-opt-box-a" style="display:flex; align-items:center; gap:0.6rem; background:#ECFDF5; border:1.5px solid #10B981; border-radius:10px; padding:0.4rem 0.8rem;">
              <input type="radio" name="correct_opt" value="A" id="add-radio-opt-a" checked style="width:18px; height:18px; cursor:pointer;" onchange="highlightCorrectOption('add')" required />
              <span style="font-weight:800; color:#1E293B; width:20px;">A.</span>
              <input type="text" name="opt_a" class="form-control" placeholder="Pilihan A..." required style="border:none; box-shadow:none; padding:0.4rem 0.2rem;" />
              <span class="correct-badge-pill" id="add-badge-correct-a" style="font-size:0.72rem; font-weight:800; color:#10B981; margin-left:auto;">Kunci Benar</span>
            </div>

            <!-- OPSI B -->
            <div class="opt-row-box" id="add-opt-box-b" style="display:flex; align-items:center; gap:0.6rem; background:#FFFFFF; border:1.5px solid #CBD5E1; border-radius:10px; padding:0.4rem 0.8rem;">
              <input type="radio" name="correct_opt" value="B" id="add-radio-opt-b" style="width:18px; height:18px; cursor:pointer;" onchange="highlightCorrectOption('add')" />
              <span style="font-weight:800; color:#1E293B; width:20px;">B.</span>
              <input type="text" name="opt_b" class="form-control" placeholder="Pilihan B..." required style="border:none; box-shadow:none; padding:0.4rem 0.2rem;" />
              <span class="correct-badge-pill" id="add-badge-correct-b" style="font-size:0.72rem; font-weight:800; color:#10B981; margin-left:auto; display:none;">Kunci Benar</span>
            </div>

            <!-- OPSI C -->
            <div class="opt-row-box" id="add-opt-box-c" style="display:flex; align-items:center; gap:0.6rem; background:#FFFFFF; border:1.5px solid #CBD5E1; border-radius:10px; padding:0.4rem 0.8rem;">
              <input type="radio" name="correct_opt" value="C" id="add-radio-opt-c" style="width:18px; height:18px; cursor:pointer;" onchange="highlightCorrectOption('add')" />
              <span style="font-weight:800; color:#1E293B; width:20px;">C.</span>
              <input type="text" name="opt_c" class="form-control" placeholder="Pilihan C..." required style="border:none; box-shadow:none; padding:0.4rem 0.2rem;" />
              <span class="correct-badge-pill" id="add-badge-correct-c" style="font-size:0.72rem; font-weight:800; color:#10B981; margin-left:auto; display:none;">Kunci Benar</span>
            </div>

            <!-- OPSI D -->
            <div class="opt-row-box" id="add-opt-box-d" style="display:flex; align-items:center; gap:0.6rem; background:#FFFFFF; border:1.5px solid #CBD5E1; border-radius:10px; padding:0.4rem 0.8rem;">
              <input type="radio" name="correct_opt" value="D" id="add-radio-opt-d" style="width:18px; height:18px; cursor:pointer;" onchange="highlightCorrectOption('add')" />
              <span style="font-weight:800; color:#1E293B; width:20px;">D.</span>
              <input type="text" name="opt_d" class="form-control" placeholder="Pilihan D..." required style="border:none; box-shadow:none; padding:0.4rem 0.2rem;" />
              <span class="correct-badge-pill" id="add-badge-correct-d" style="font-size:0.72rem; font-weight:800; color:#10B981; margin-left:auto; display:none;">Kunci Benar</span>
            </div>
          </div>
        </div>

        <!-- 6. Penjelasan Kunci Jawaban -->
        <div class="form-group" style="background:#EFF6FF; padding:1.2rem; border-radius:14px; border:1.5px solid #BFDBFE;">
          <label style="font-weight:800; color:#1E3A8A; display:block; margin-bottom:0.4rem;">
             Penjelasan Kunci Jawaban:
          </label>
          <p style="font-size:0.8rem; color:#3B82F6; margin:0 0 0.6rem;">Penjelasan ini akan muncul di layar siswa saat mereka menjawab soal untuk membantu pemahaman materi secara mendalam.</p>
          <textarea name="explanation" class="form-control" rows="3" placeholder="Jelaskan alasan jawaban benar agar siswa memahami konsepnya..."></textarea>
        </div>

        <!-- 7. Audio Percakapan Chokai (Opsional) -->
        <details style="background:#F8FAFC; border:1.5px solid #E2E8F0; border-radius:12px; padding:0.8rem 1rem; margin-bottom:1.2rem;">
          <summary style="font-weight:800; color:#475569; cursor:pointer; font-size:0.88rem;">
            Audio  Pengaturan Audio Chokai (Listening Dialogue - Opsional)
          </summary>
          <div style="margin-top:0.8rem; display:flex; flex-direction:column; gap:0.6rem;">
            <div class="form-group" style="margin:0;">
              <label style="font-size:0.8rem;">Label Audio:</label>
              <input type="text" name="audio_label" class="form-control" placeholder="Contoh: Percakapan di Kedai Ramen" />
            </div>
            <div class="form-group" style="margin:0;">
              <label style="font-size:0.8rem;">Teks Percakapan Audio (Jepang):</label>
              <textarea name="audio_text" class="form-control" rows="2" placeholder="Teks dialog Jepang yang akan dibacakan mesin suara TTS..."></textarea>
            </div>
          </div>
        </details>

        <div class="modal-btn-row">
          <button type="button" class="btn-cancel" onclick="closeModal('modal-add-quest')">Batal</button>
          <button type="submit" class="btn-guru-primary">Simpan Soal Baru</button>
        </div>
      </form>
    </div>
  </div>

  <!-- ==============================================
       MODAL: EDIT SOAL QUEST (LENGKAP SEMUA FITUR)
       ============================================== -->
  <div class="guru-modal-backdrop" id="modal-edit-quest">
    <div class="guru-modal-box" style="max-width:680px;">
      <div class="guru-modal-header">
        <div>
          <h3 id="edit-quest-modal-title">Edit Soal Quest</h3>
          <span style="font-size:0.8rem; color:#64748B;">Perbarui pertanyaan, gambar, semua pilihan opsi, kunci jawaban, dan penjelasannya</span>
        </div>
        <button class="btn-close-modal" onclick="closeModal('modal-edit-quest')">&times;</button>
      </div>
      <form id="form-edit-quest" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        
        <!-- 1. Tautan Modul Pelajaran -->
        <div class="form-group">
          <label>Tautkan ke Modul Pelajaran:</label>
          <select name="lesson_id" id="edit-quest-lesson-id" class="form-control" required>
            @foreach($lessons as $les)
            <option value="{{ $les->id }}">{{ $les->title }} ({{ strtoupper($les->level->code ?? 'N5') }})</option>
            @endforeach
          </select>
        </div>

        <!-- 2. Pertanyaan Soal -->
        <div class="form-group">
          <label>Teks Pertanyaan Soal:</label>
          <textarea name="question" id="edit-quest-question" class="form-control" rows="3" placeholder="Tuliskan pertanyaan soal latihan..." required></textarea>
        </div>

        <!-- 3. Badge & Poin -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.8rem;">
          <div class="form-group">
            <label>Badge Header:</label>
            <input type="text" name="badge_text" id="edit-quest-badge" class="form-control" placeholder="Contoh: Soal 1 • Identifikasi Bentuk" />
          </div>
          <div class="form-group">
            <label>Poin Hadiah Kuis:</label>
            <input type="number" name="points" id="edit-quest-points" class="form-control" value="25" />
          </div>
        </div>

        <!-- 4. Gambar Ilustrasi Soal -->
        <div style="background:#F8FAFC; padding:1.2rem; border-radius:14px; border:1.5px solid #E2E8F0; margin-bottom:1.2rem;">
          <label style="font-weight:800; color:#0F172A; display:block; margin-bottom:0.3rem;">
            Gambar Ilustrasi Soal:
          </label>
          <p style="font-size:0.8rem; color:#64748B; margin:0 0 0.8rem;">Ganti dengan template komik visual, upload gambar baru, atau hapus gambar</p>

          <div class="form-group">
            <label style="font-size:0.8rem; color:#475569;">Pilih Template Ilustrasi Komik:</label>
            <select name="image_url" id="edit-quest-image-url" class="form-control" onchange="handleImageTemplateChange('edit')">
              <option value="">-- Tanpa Ilustrasi Gambar (Hanya Teks) --</option>
              <option value="img/comic_ramen.svg">Kedai Ramen Katakana (ラーメン)</option>
              <option value="img/comic_aisatsu.svg">Suasana Kelas Aisatsu (おはようございます)</option>
              <option value="img/comic_station.svg">Papan Stasiun Kereta Tokyo (東京 / とうきょう)</option>
              <option value="img/comic_konbini.svg">Minimarket Konbini & Uang Yen (¥150)</option>
              <option value="img/comic_hotel.svg">Check-in Hotel / Ryokan (ホテル)</option>
              <option value="img/comic_directions.svg">Petunjuk Arah Wisata & Stasiun (まっすぐ)</option>
              <option value="img/comic_souvenir.svg">Toko Suvenir Asakusa (おみやげ)</option>
              <option value="img/comic_emergency.svg">Situasi Darurat & Bantuan (トイレ / 英語)</option>
              <option value="__custom__">-- Masukkan Path / URL Gambar Kustom --</option>
            </select>
          </div>

          <div class="form-group" id="edit-quest-custom-url-group" style="display:none;">
            <label style="font-size:0.8rem; color:#475569;">Path / URL Gambar Kustom:</label>
            <input type="text" id="edit-quest-custom-url" class="form-control" placeholder="Contoh: img/comic_ramen.svg atau https://..." oninput="handleCustomUrlInput('edit')" />
          </div>

          <div class="form-group" style="margin-bottom:0.8rem;">
            <label style="font-size:0.8rem; color:#475569;">Atau Upload File Gambar Baru (PNG, JPG, SVG, WebP):</label>
            <input type="file" name="image_file" id="edit-quest-image-file" class="form-control" accept="image/*" onchange="previewUploadedImage('edit', this)" />
          </div>

          <!-- Live Preview & Checkbox Hapus -->
          <div id="edit-quest-preview-wrap" style="display:flex; align-items:center; gap:1rem; padding:0.6rem; background:#FFFFFF; border:1px solid #CBD5E1; border-radius:10px;">
            <div style="width:90px; height:60px; border-radius:8px; overflow:hidden; background:#F1F5F9; border:1px solid #E2E8F0; flex-shrink:0; display:flex; align-items:center; justify-content:center;">
              <img id="edit-quest-preview-img" src="" alt="Preview Gambar" style="width:100%; height:100%; object-fit:cover; display:none;" />
              <span id="edit-quest-preview-none" style="font-size:0.75rem; color:#94A3B8; text-align:center;">Tanpa Gambar</span>
            </div>
            <div style="flex:1;">
              <div id="edit-quest-preview-text" style="font-size:0.82rem; font-weight:700; color:#334155;">Tidak ada gambar terpasang</div>
              <label style="display:inline-flex; align-items:center; gap:0.4rem; font-size:0.8rem; color:#DC2626; cursor:pointer; margin-top:0.35rem;">
                <input type="checkbox" name="remove_image" value="1" id="edit-quest-remove-image" onchange="handleRemoveImageCheckbox('edit')" />
                <span>Hapus gambar dari soal ini (jadikan teks saja)</span>
              </label>
            </div>
          </div>
        </div>

        <!-- 5. Semua Pilihan Jawaban (A, B, C, D) & Kunci Benar -->
        <div style="background:#F8FAFC; padding:1.2rem; border-radius:14px; border:1.5px solid #E2E8F0; margin-bottom:1.2rem;">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.8rem; flex-wrap:wrap; gap:0.5rem;">
            <label style="font-weight:800; color:#0F172A; margin:0;">
              Semua Pilihan Jawaban &amp; Kunci Benar:
            </label>
            <span style="font-size:0.78rem; background:#DCFCE7; color:#166534; font-weight:700; padding:0.2rem 0.6rem; border-radius:var(--radius-pill);">
              Pilih radio button pada opsi yang benar
            </span>
          </div>

          <div style="display:flex; flex-direction:column; gap:0.75rem;">
            <!-- OPSI A -->
            <div class="opt-row-box" id="edit-opt-box-a" style="display:flex; align-items:center; gap:0.6rem; background:#FFFFFF; border:1.5px solid #CBD5E1; border-radius:10px; padding:0.4rem 0.8rem;">
              <input type="radio" name="correct_opt" value="A" id="edit-radio-opt-a" style="width:18px; height:18px; cursor:pointer;" onchange="highlightCorrectOption('edit')" required />
              <span style="font-weight:800; color:#1E293B; width:20px;">A.</span>
              <input type="text" name="opt_a" id="edit-quest-opt-a" class="form-control" placeholder="Teks pilihan A..." required style="border:none; box-shadow:none; padding:0.4rem 0.2rem;" />
              <span class="correct-badge-pill" id="edit-badge-correct-a" style="font-size:0.72rem; font-weight:800; color:#10B981; margin-left:auto; display:none;">Kunci Benar</span>
            </div>

            <!-- OPSI B -->
            <div class="opt-row-box" id="edit-opt-box-b" style="display:flex; align-items:center; gap:0.6rem; background:#FFFFFF; border:1.5px solid #CBD5E1; border-radius:10px; padding:0.4rem 0.8rem;">
              <input type="radio" name="correct_opt" value="B" id="edit-radio-opt-b" style="width:18px; height:18px; cursor:pointer;" onchange="highlightCorrectOption('edit')" />
              <span style="font-weight:800; color:#1E293B; width:20px;">B.</span>
              <input type="text" name="opt_b" id="edit-quest-opt-b" class="form-control" placeholder="Teks pilihan B..." required style="border:none; box-shadow:none; padding:0.4rem 0.2rem;" />
              <span class="correct-badge-pill" id="edit-badge-correct-b" style="font-size:0.72rem; font-weight:800; color:#10B981; margin-left:auto; display:none;">Kunci Benar</span>
            </div>

            <!-- OPSI C -->
            <div class="opt-row-box" id="edit-opt-box-c" style="display:flex; align-items:center; gap:0.6rem; background:#FFFFFF; border:1.5px solid #CBD5E1; border-radius:10px; padding:0.4rem 0.8rem;">
              <input type="radio" name="correct_opt" value="C" id="edit-radio-opt-c" style="width:18px; height:18px; cursor:pointer;" onchange="highlightCorrectOption('edit')" />
              <span style="font-weight:800; color:#1E293B; width:20px;">C.</span>
              <input type="text" name="opt_c" id="edit-quest-opt-c" class="form-control" placeholder="Teks pilihan C..." required style="border:none; box-shadow:none; padding:0.4rem 0.2rem;" />
              <span class="correct-badge-pill" id="edit-badge-correct-c" style="font-size:0.72rem; font-weight:800; color:#10B981; margin-left:auto; display:none;">Kunci Benar</span>
            </div>

            <!-- OPSI D -->
            <div class="opt-row-box" id="edit-opt-box-d" style="display:flex; align-items:center; gap:0.6rem; background:#FFFFFF; border:1.5px solid #CBD5E1; border-radius:10px; padding:0.4rem 0.8rem;">
              <input type="radio" name="correct_opt" value="D" id="edit-radio-opt-d" style="width:18px; height:18px; cursor:pointer;" onchange="highlightCorrectOption('edit')" />
              <span style="font-weight:800; color:#1E293B; width:20px;">D.</span>
              <input type="text" name="opt_d" id="edit-quest-opt-d" class="form-control" placeholder="Teks pilihan D..." required style="border:none; box-shadow:none; padding:0.4rem 0.2rem;" />
              <span class="correct-badge-pill" id="edit-badge-correct-d" style="font-size:0.72rem; font-weight:800; color:#10B981; margin-left:auto; display:none;">Kunci Benar</span>
            </div>
          </div>
        </div>

        <!-- 6. Penjelasan Kunci Jawaban -->
        <div class="form-group" style="background:#EFF6FF; padding:1.2rem; border-radius:14px; border:1.5px solid #BFDBFE;">
          <label style="font-weight:800; color:#1E3A8A; display:block; margin-bottom:0.4rem;">
             Penjelasan / Pembahasan Kunci Jawaban:
          </label>
          <p style="font-size:0.8rem; color:#3B82F6; margin:0 0 0.6rem;">Penjelasan ini akan muncul di layar siswa saat mereka menjawab kuis untuk membantu pemahaman materi secara mendalam.</p>
          <textarea name="explanation" id="edit-quest-explanation" class="form-control" rows="3" placeholder="Tuliskan alasan mengapa jawaban tersebut benar..."></textarea>
        </div>

        <!-- 7. Audio Percakapan Chokai (Opsional) -->
        <details style="background:#F8FAFC; border:1.5px solid #E2E8F0; border-radius:12px; padding:0.8rem 1rem; margin-bottom:1.2rem;">
          <summary style="font-weight:800; color:#475569; cursor:pointer; font-size:0.88rem;">
            Audio  Pengaturan Audio Chokai (Listening Dialogue - Opsional)
          </summary>
          <div style="margin-top:0.8rem; display:flex; flex-direction:column; gap:0.6rem;">
            <div class="form-group" style="margin:0;">
              <label style="font-size:0.8rem;">Label Audio:</label>
              <input type="text" name="audio_label" id="edit-quest-audio-label" class="form-control" placeholder="Contoh: Percakapan Rin & Guru Kucing" />
            </div>
            <div class="form-group" style="margin:0;">
              <label style="font-size:0.8rem;">Teks Percakapan Audio (Jepang):</label>
              <textarea name="audio_text" id="edit-quest-audio-text" class="form-control" rows="2" placeholder="Teks dialog Jepang yang akan dibacakan mesin suara TTS..."></textarea>
            </div>
          </div>
        </details>

        <div class="modal-btn-row">
          <button type="button" class="btn-cancel" onclick="closeModal('modal-edit-quest')">Batal</button>
          <button type="submit" class="btn-guru-primary">Simpan Perubahan Soal</button>
        </div>
      </form>
    </div>
  <!-- ==============================================
       MODAL: TAMBAH SUB-MODE MINIGAME BARU
       ============================================== -->
  <div class="guru-modal-backdrop" id="modal-add-submode">
    <div class="guru-modal-box">
      <div class="guru-modal-header">
        <h3>Tambah Sub-Mode Game Baru</h3>
        <button type="button" class="btn-close-modal" onclick="closeModal('modal-add-submode')">&times;</button>
      </div>
      <form onsubmit="submitAddSubMode(event)">
        <div class="form-group">
          <label>Game Tujuan:</label>
          <input type="text" id="submode-target-game" class="form-control" readonly style="background:#F1F5F9; font-weight:700;" />
        </div>
        <div class="form-group">
          <label>ID Sub-Mode (Unik, huruf kecil tanpa spasi):</label>
          <input type="text" id="submode-id" class="form-control" placeholder="contoh: kanji-n5, kanji-n4, tema-hewan" required />
          <small style="color:#64748B;">Digunakan sebagai pengenal teknis sub-mode.</small>
        </div>
        <div class="form-group">
          <label>Nama Tampilan Sub-Mode (Muncul di layar siswa):</label>
          <input type="text" id="submode-name" class="form-control" placeholder="contoh: Kanji N5 Dasar (日, 月, dll.)" required />
        </div>
        <div class="modal-btn-row">
          <button type="button" class="btn-cancel" onclick="closeModal('modal-add-submode')">Batal</button>
          <button type="submit" class="btn-guru-primary">Tambahkan Sub-Mode</button>
        </div>
      </form>
    </div>
  </div>

  <!-- ==============================================
       MODAL: TAMBAH / EDIT SOAL MINIGAME
       ============================================== -->
  <div class="guru-modal-backdrop" id="modal-add-game-question">
    <div class="guru-modal-box">
      <div class="guru-modal-header">
        <h3 id="modal-game-q-title">Tambah Soal Kosakata Game (Database)</h3>
        <button type="button" class="btn-close-modal" onclick="closeModal('modal-add-game-question')">&times;</button>
      </div>
      <form onsubmit="submitAddGameQuestion(event)">
        <input type="hidden" id="game-q-edit-id" value="" />
        <div class="form-group">
          <label>Game Tujuan:</label>
          <select id="game-q-target" class="form-control" onchange="updateSubmodeDropdownForModal()">
            <option value="kana-blast">Kana Blast (Turret Blaster)</option>
            <option value="sky-defense">Sky Atk Defense (Gerbang Desa)</option>
            <option value="flash-card">Flash Card</option>
            <option value="memory-match">Memory Match</option>
            <option value="speed-quiz">Speed Quiz</option>
            <option value="word-builder">Word Builder</option>
          </select>
        </div>
        <div class="form-group">
          <label>Sub-Mode / Kategori Soal:</label>
          <select id="game-q-submode" class="form-control" required>
            <!-- Populated dynamically -->
          </select>
        </div>
        <div class="form-group">
          <label>Kata / Aksara Bahasa Jepang:</label>
          <input type="text" id="game-q-char" class="form-control" placeholder="contoh: かさ atau ねこ atau パン atau 日" required style="font-size:1.15rem; font-family:'Noto Sans JP', sans-serif;" />
        </div>
        <div class="form-group">
          <label>Romaji / Cara Baca Latin:</label>
          <input type="text" id="game-q-romaji" class="form-control" placeholder="contoh: kasa atau neko atau pan atau hi" required />
        </div>
        <div class="form-group">
          <label>Arti Bahasa Indonesia:</label>
          <input type="text" id="game-q-mean" class="form-control" placeholder="contoh: Payung atau Kucing atau Roti atau Matahari" required />
        </div>
        <div class="modal-btn-row">
          <button type="button" class="btn-cancel" onclick="closeModal('modal-add-game-question')">Batal</button>
          <button type="submit" class="btn-guru-primary">Simpan ke Database SQLite</button>
        </div>
      </form>
    </div>
  </div>

  <script src="{{ asset('js/app.js') }}"></script>
  <script>
    // Tab Switching
    function switchGuruTab(tabKey, targetBtn = null) {
      document.querySelectorAll('.guru-tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.guru-tab-content').forEach(c => c.classList.remove('active'));

      if (targetBtn && targetBtn.classList) {
        targetBtn.classList.add('active');
      } else {
        const found = document.querySelector(`.guru-tab-btn[data-tab="${tabKey}"]`) || 
                      Array.from(document.querySelectorAll('.guru-tab-btn')).find(b => b.getAttribute('onclick') && b.getAttribute('onclick').includes(tabKey));
        if (found) found.classList.add('active');
      }

      const target = document.getElementById('guru-tab-' + tabKey);
      if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      if (tabKey === 'minigames') {
        renderAdminGameView();
      }
    }

    function setGuruAvatar(avatarPath) {
      document.getElementById('guru-avatar-input').value = avatarPath;
      document.getElementById('guru-profile-avatar-preview').src = avatarPath;
    }

    // Modal Helpers
    function openModal(id) {
      document.getElementById(id).classList.add('show');
    }
    function closeModal(id) {
      document.getElementById(id).classList.remove('show');
    }

    function openAddLevelModal() {
      openModal('modal-add-level');
    }

    function openEditLevelModal(id, name, sub, color, isActive, order) {
      document.getElementById('form-edit-level').action = '/guru/levels/' + id;
      document.getElementById('edit-level-name').value = name;
      document.getElementById('edit-level-sub').value = sub;
      document.getElementById('edit-level-color').value = color;
      openModal('modal-edit-level');
    }

    // One-Click Preset Add (N3 / N2 / N1)
    async function addPresetLevel(code) {
      const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      try {
        const res = await fetch('/guru/levels/preset', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': token,
            'Accept': 'application/json'
          },
          body: JSON.stringify({ preset: code })
        });
        const data = await res.json();
        if (data.success) {
          alert('' + data.message);
          window.location.reload();
        } else {
          alert(data.message || 'Gagal menambahkan level preset.');
        }
      } catch (err) {
        alert('Terjadi kesalahan koneksi.');
      }
    }

    async function deleteLevel(id, name) {
      if (!confirm('Hapus kotak level "' + name + '" beserta modul di dalamnya?')) return;
      const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      try {
        const res = await fetch('/guru/levels/' + id, {
          method: 'DELETE',
          headers: {
            'X-CSRF-TOKEN': token,
            'Accept': 'application/json'
          }
        });
        const data = await res.json();
        if (data.success) {
          window.location.reload();
        }
      } catch (err) {
        alert('Gagal menghapus level.');
      }
    }

    const allLessonsData = @json($lessons);

    function openAddLessonModal() {
      openModal('modal-add-lesson');
    }

    function openEditLessonModal(id) {
      const les = allLessonsData.find(item => item.id == id);
      if (!les) {
        alert('Data modul materi #' + id + ' tidak ditemukan.');
        return;
      }

      document.getElementById('form-edit-lesson').action = '/guru/lessons/' + les.id;
      document.getElementById('edit-lesson-modal-title').textContent = 'Edit Modul: ' + les.title;
      document.getElementById('edit-lesson-title').value = les.title || '';
      document.getElementById('edit-lesson-subtitle').value = les.subtitle || '';
      document.getElementById('edit-lesson-badge').value = les.badge || '';
      document.getElementById('edit-lesson-minutes').value = les.est_minutes || 15;

      // Comic image setup
      const sel = document.getElementById('edit-lesson-comic-image');
      const customGrp = document.getElementById('edit-lesson-custom-url-group');
      const customInp = document.getElementById('edit-lesson-custom-url');
      const fileInp = document.getElementById('edit-lesson-comic-file');
      const removeChk = document.getElementById('edit-lesson-remove-comic');
      const prevImg = document.getElementById('edit-lesson-preview-img');
      const prevNone = document.getElementById('edit-lesson-preview-none');
      const prevTxt = document.getElementById('edit-lesson-preview-text');

      if (fileInp) fileInp.value = '';
      if (removeChk) removeChk.checked = false;

      const img = les.comic_image || '';
      let matchedOption = false;
      if (sel) {
        for (let i = 0; i < sel.options.length; i++) {
          if (sel.options[i].value === img) {
            sel.selectedIndex = i;
            matchedOption = true;
            break;
          }
        }
        if (!matchedOption && img) {
          sel.value = '__custom__';
          if (customGrp) customGrp.style.display = 'block';
          if (customInp) customInp.value = img;
        } else {
          if (customGrp) customGrp.style.display = 'none';
          if (customInp) customInp.value = '';
        }
      }

      if (img) {
        const src = (img.startsWith('http') || img.startsWith('/')) ? img : ('/' + img);
        if (prevImg) { prevImg.src = src; prevImg.style.display = 'block'; }
        if (prevNone) prevNone.style.display = 'none';
        if (prevTxt) prevTxt.textContent = img;
      } else {
        if (prevImg) { prevImg.src = ''; prevImg.style.display = 'none'; }
        if (prevNone) prevNone.style.display = 'block';
        if (prevTxt) prevTxt.textContent = 'Ilustrasi Komik Bawaan Default';
      }

      // Audio & Mascot Tip
      const audLabel = document.getElementById('edit-lesson-audio-label');
      const audText = document.getElementById('edit-lesson-audio-text');
      const tipText = document.getElementById('edit-lesson-mascot-tip');

      if (audLabel) audLabel.value = les.audio_label || '';
      if (audText) audText.value = les.audio_text || '';
      if (tipText) tipText.value = les.mascot_tip || '';

      openModal('modal-edit-lesson');
    }

    function handleLessonComicTemplateChange() {
      const sel = document.getElementById('edit-lesson-comic-image');
      const customGrp = document.getElementById('edit-lesson-custom-url-group');
      const customInp = document.getElementById('edit-lesson-custom-url');
      const prevImg = document.getElementById('edit-lesson-preview-img');
      const prevNone = document.getElementById('edit-lesson-preview-none');
      const prevTxt = document.getElementById('edit-lesson-preview-text');
      const removeChk = document.getElementById('edit-lesson-remove-comic');
      if (removeChk) removeChk.checked = false;

      const val = sel.value;
      if (val === '__custom__') {
        if (customGrp) customGrp.style.display = 'block';
        if (customInp) customInp.focus();
      } else {
        if (customGrp) customGrp.style.display = 'none';
        if (val) {
          const src = (val.startsWith('http') || val.startsWith('/')) ? val : ('/' + val);
          if (prevImg) { prevImg.src = src; prevImg.style.display = 'block'; }
          if (prevNone) prevNone.style.display = 'none';
          if (prevTxt) prevTxt.textContent = val;
        } else {
          if (prevImg) { prevImg.src = ''; prevImg.style.display = 'none'; }
          if (prevNone) prevNone.style.display = 'block';
          if (prevTxt) prevTxt.textContent = 'Ilustrasi Komik Bawaan Default';
        }
      }
    }

    function handleLessonCustomUrlInput() {
      const customInp = document.getElementById('edit-lesson-custom-url');
      const prevImg = document.getElementById('edit-lesson-preview-img');
      const prevNone = document.getElementById('edit-lesson-preview-none');
      const prevTxt = document.getElementById('edit-lesson-preview-text');
      const url = customInp.value.trim();
      if (url) {
        const src = (url.startsWith('http') || url.startsWith('/')) ? url : ('/' + url);
        if (prevImg) { prevImg.src = src; prevImg.style.display = 'block'; }
        if (prevNone) prevNone.style.display = 'none';
        if (prevTxt) prevTxt.textContent = url;
      } else {
        if (prevImg) { prevImg.src = ''; prevImg.style.display = 'none'; }
        if (prevNone) prevNone.style.display = 'block';
        if (prevTxt) prevTxt.textContent = 'Ilustrasi Komik Bawaan Default';
      }
    }

    function previewLessonUploadedImage(input) {
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
          const prevImg = document.getElementById('edit-lesson-preview-img');
          const prevNone = document.getElementById('edit-lesson-preview-none');
          const prevTxt = document.getElementById('edit-lesson-preview-text');
          const removeChk = document.getElementById('edit-lesson-remove-comic');
          if (removeChk) removeChk.checked = false;
          if (prevImg) { prevImg.src = e.target.result; prevImg.style.display = 'block'; }
          if (prevNone) prevNone.style.display = 'none';
          if (prevTxt) prevTxt.textContent = 'Upload file: ' + input.files[0].name + ' (' + Math.round(input.files[0].size/1024) + ' KB)';
        };
        reader.readAsDataURL(input.files[0]);
      }
    }

    function handleRemoveLessonComicCheckbox() {
      const removeChk = document.getElementById('edit-lesson-remove-comic');
      const prevImg = document.getElementById('edit-lesson-preview-img');
      const prevNone = document.getElementById('edit-lesson-preview-none');
      const prevTxt = document.getElementById('edit-lesson-preview-text');
      const sel = document.getElementById('edit-lesson-comic-image');
      const fileInp = document.getElementById('edit-lesson-comic-file');
      if (removeChk && removeChk.checked) {
        if (sel) sel.value = '';
        if (fileInp) fileInp.value = '';
        if (prevImg) { prevImg.src = ''; prevImg.style.display = 'none'; }
        if (prevNone) prevNone.style.display = 'block';
        if (prevTxt) prevTxt.textContent = 'Gambar komik akan direset ke bawaan default';
      }
    }

    async function deleteLesson(id, title) {
      if (!confirm('Hapus modul materi "' + title + '"?')) return;
      const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      try {
        const res = await fetch('/guru/lessons/' + id, {
          method: 'DELETE',
          headers: {
            'X-CSRF-TOKEN': token,
            'Accept': 'application/json'
          }
        });
        const data = await res.json();
        if (data.success) {
          window.location.reload();
        }
      } catch (err) {
        alert('Gagal menghapus modul.');
      }
    }

    // ==========================================
    // BANK SOAL QUEST LOGIC (EDIT, TAMBAH, PREVIEW)
    // ==========================================
    const allQuestsData = @json($quests);

    function openAddQuestModal() {
      document.getElementById('add-quest-image-url').value = '';
      handleImageTemplateChange('add');
      highlightCorrectOption('add');
      openModal('modal-add-quest');
    }

    function openEditQuestModal(id) {
      const q = allQuestsData.find(item => item.id === id);
      if (!q) {
        alert('Data soal #' + id + ' tidak ditemukan.');
        return;
      }

      document.getElementById('edit-quest-modal-title').textContent = 'Edit Soal Quest #' + q.id + ' (Pelajaran ' + q.lesson_id + ')';
      document.getElementById('form-edit-quest').action = '/guru/quests/' + q.id;

      // Fill basic fields
      document.getElementById('edit-quest-lesson-id').value = q.lesson_id;
      document.getElementById('edit-quest-question').value = q.question || '';
      document.getElementById('edit-quest-badge').value = q.badge_text || '';
      document.getElementById('edit-quest-points').value = q.points || 25;
      document.getElementById('edit-quest-explanation').value = q.explanation || '';
      document.getElementById('edit-quest-audio-text').value = q.audio_text || '';
      document.getElementById('edit-quest-audio-label').value = q.audio_label || '';

      // Uncheck remove image
      const removeImgCheckbox = document.getElementById('edit-quest-remove-image');
      if (removeImgCheckbox) removeImgCheckbox.checked = false;

      // Handle Image
      const imgSelect = document.getElementById('edit-quest-image-url');
      const customUrlGroup = document.getElementById('edit-quest-custom-url-group');
      const customUrlInput = document.getElementById('edit-quest-custom-url');
      
      const standardComics = [
        'img/comic_ramen.svg',
        'img/comic_aisatsu.svg',
        'img/comic_station.svg',
        'img/comic_konbini.svg',
        'img/comic_hotel.svg',
        'img/comic_directions.svg',
        'img/comic_souvenir.svg',
        'img/comic_emergency.svg'
      ];

      if (!q.image_url) {
        imgSelect.value = '';
        customUrlGroup.style.display = 'none';
        customUrlInput.value = '';
      } else if (standardComics.includes(q.image_url)) {
        imgSelect.value = q.image_url;
        customUrlGroup.style.display = 'none';
        customUrlInput.value = '';
      } else {
        imgSelect.value = '__custom__';
        customUrlGroup.style.display = 'block';
        customUrlInput.value = q.image_url;
      }
      updatePreviewDisplay('edit', q.image_url);

      // Handle Options & Correct Answer
      const opts = q.options || [];
      const optA = opts[0] ? opts[0].text : '';
      const optB = opts[1] ? opts[1].text : '';
      const optC = opts[2] ? opts[2].text : '';
      const optD = opts[3] ? opts[3].text : '';

      document.getElementById('edit-quest-opt-a').value = optA;
      document.getElementById('edit-quest-opt-b').value = optB;
      document.getElementById('edit-quest-opt-c').value = optC;
      document.getElementById('edit-quest-opt-d').value = optD;

      // Detect correct option
      let correctKey = 'A';
      if (opts[0] && opts[0].isCorrect) correctKey = 'A';
      else if (opts[1] && opts[1].isCorrect) correctKey = 'B';
      else if (opts[2] && opts[2].isCorrect) correctKey = 'C';
      else if (opts[3] && opts[3].isCorrect) correctKey = 'D';

      const radio = document.getElementById('edit-radio-opt-' + correctKey.toLowerCase());
      if (radio) radio.checked = true;
      highlightCorrectOption('edit');

      openModal('modal-edit-quest');
    }

    // Highlight radio button selection
    function highlightCorrectOption(type) {
      const keys = ['a', 'b', 'c', 'd'];
      keys.forEach(k => {
        const radio = document.getElementById(type + '-radio-opt-' + k);
        const box = document.getElementById(type + '-opt-box-' + k);
        const badge = document.getElementById(type + '-badge-correct-' + k);
        if (radio && radio.checked) {
          if (box) {
            box.classList.add('is-correct');
            box.style.background = '#ECFDF5';
            box.style.borderColor = '#10B981';
          }
          if (badge) badge.style.display = 'inline';
        } else {
          if (box) {
            box.classList.remove('is-correct');
            box.style.background = '#FFFFFF';
            box.style.borderColor = '#CBD5E1';
          }
          if (badge) badge.style.display = 'none';
        }
      });
    }

    // Image Template Change Handler
    function handleImageTemplateChange(type) {
      const select = document.getElementById(type + '-quest-image-url');
      const customGroup = document.getElementById(type + '-quest-custom-url-group');
      const customInput = document.getElementById(type + '-quest-custom-url');
      const val = select.value;

      if (val === '__custom__') {
        customGroup.style.display = 'block';
        updatePreviewDisplay(type, customInput.value);
      } else {
        customGroup.style.display = 'none';
        updatePreviewDisplay(type, val);
      }
    }

    function handleCustomUrlInput(type) {
      const customInput = document.getElementById(type + '-quest-custom-url');
      const select = document.getElementById(type + '-quest-image-url');
      if (select.value === '__custom__') {
        updatePreviewDisplay(type, customInput.value);
      }
    }

    function previewUploadedImage(type, input) {
      if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
          updatePreviewDisplay(type, e.target.result, file.name);
        };
        reader.readAsDataURL(file);
      }
    }

    function handleRemoveImageCheckbox(type) {
      const cb = document.getElementById(type + '-quest-remove-image');
      if (cb && cb.checked) {
        updatePreviewDisplay(type, null);
      } else {
        handleImageTemplateChange(type);
      }
    }

    function updatePreviewDisplay(type, src, customLabel) {
      const img = document.getElementById(type + '-quest-preview-img');
      const noneSpan = document.getElementById(type + '-quest-preview-none');
      const text = document.getElementById(type + '-quest-preview-text');

      if (src && src.trim() !== '') {
        img.src = src.startsWith('data:') || src.startsWith('http') || src.startsWith('/') ? src : ('/' + src);
        img.style.display = 'block';
        noneSpan.style.display = 'none';
        text.textContent = customLabel ? ('File baru: ' + customLabel) : ('Gambar aktif: ' + src.split('/').pop());
        text.style.color = '#1D4ED8';
      } else {
        img.src = '';
        img.style.display = 'none';
        noneSpan.style.display = 'block';
        text.textContent = 'Tidak ada gambar terpasang (Hanya teks)';
        text.style.color = '#64748B';
      }
    }

    // Switch Sub-Tab di Pantauan Siswa (Assessments vs Students)
    function switchStudentSubTab(tab) {
      const btnAss = document.getElementById('btn-subnav-assessments');
      const btnStd = document.getElementById('btn-subnav-students');
      const panelAss = document.getElementById('subpanel-assessments');
      const panelStd = document.getElementById('subpanel-students');

      if (tab === 'assessments') {
        if (btnAss) {
          btnAss.classList.add('active');
          btnAss.style.background = '#2563EB';
          btnAss.style.color = '#FFF';
          btnAss.style.borderColor = '#2563EB';
          btnAss.style.boxShadow = '0 3px 10px rgba(37,99,235,0.25)';
        }
        if (btnStd) {
          btnStd.classList.remove('active');
          btnStd.style.background = '#F8FAFC';
          btnStd.style.color = '#475569';
          btnStd.style.borderColor = '#CBD5E1';
          btnStd.style.boxShadow = 'none';
        }
        if (panelAss) panelAss.style.display = 'block';
        if (panelStd) panelStd.style.display = 'none';
      } else {
        if (btnStd) {
          btnStd.classList.add('active');
          btnStd.style.background = '#2563EB';
          btnStd.style.color = '#FFF';
          btnStd.style.borderColor = '#2563EB';
          btnStd.style.boxShadow = '0 3px 10px rgba(37,99,235,0.25)';
        }
        if (btnAss) {
          btnAss.classList.remove('active');
          btnAss.style.background = '#F8FAFC';
          btnAss.style.color = '#475569';
          btnAss.style.borderColor = '#CBD5E1';
          btnAss.style.boxShadow = 'none';
        }
        if (panelAss) panelAss.style.display = 'none';
        if (panelStd) panelStd.style.display = 'block';
      }
    }

    // Filter & Sort Tabel Penilaian Latihan Siswa (Benar, Salah & Nilai)
    function filterAssessmentsTable() {
      const kw = (document.getElementById('search-assessment-input')?.value || '').trim().toLowerCase();
      const studentFilter = document.getElementById('filter-assessment-student')?.value || 'all';
      const gradeFilter = document.getElementById('filter-assessment-grade')?.value || 'all';
      const sortMode = document.getElementById('sort-assessment-select')?.value || 'newest';
      const rows = Array.from(document.querySelectorAll('.assessment-table-row'));
      const tbody = document.getElementById('assessments-table-body');
      const countEl = document.getElementById('assessment-count-display');

      let visibleCount = 0;
      rows.forEach(row => {
        const studentId = row.getAttribute('data-student-id') || '';
        const name = row.getAttribute('data-name') || '';
        const title = row.getAttribute('data-title') || '';
        const grade = row.getAttribute('data-grade') || '';

        let matchKw = !kw || name.includes(kw) || title.includes(kw);
        let matchStudent = (studentFilter === 'all') || (studentId === String(studentFilter));
        let matchGrade = (gradeFilter === 'all') || (grade === gradeFilter);

        if (matchKw && matchStudent && matchGrade) {
          row.style.display = '';
          visibleCount++;
        } else {
          row.style.display = 'none';
        }
      });

      // Sort rows
      rows.sort((a, b) => {
        const idA = parseInt(a.getAttribute('data-id') || '0', 10);
        const idB = parseInt(b.getAttribute('data-id') || '0', 10);
        const scoreA = parseInt(a.getAttribute('data-score') || '0', 10);
        const scoreB = parseInt(b.getAttribute('data-score') || '0', 10);
        const correctA = parseInt(a.getAttribute('data-correct') || '0', 10);
        const correctB = parseInt(b.getAttribute('data-correct') || '0', 10);

        if (sortMode === 'score-desc') return scoreB - scoreA;
        if (sortMode === 'score-asc') return scoreA - scoreB;
        if (sortMode === 'correct-desc') return correctB - correctA;
        return idB - idA; // newest
      });

      if (tbody) {
        rows.forEach(row => tbody.appendChild(row));
      }
      if (countEl) countEl.textContent = visibleCount;
    }

    // Filter & Sort Students Table
    function filterStudentsTable() {
      const kw = (document.getElementById('search-student-input')?.value || '').trim().toLowerCase();
      const sortMode = document.getElementById('sort-student-select')?.value || 'score-desc';
      const statusFilter = document.getElementById('filter-student-status')?.value || 'all';
      const rows = Array.from(document.querySelectorAll('.student-table-row'));
      const tbody = document.getElementById('students-table-body');
      const countEl = document.getElementById('student-count-display');

      let visibleCount = 0;
      rows.forEach(row => {
        const name = row.getAttribute('data-name') || '';
        const email = row.getAttribute('data-email') || '';
        const score = parseInt(row.getAttribute('data-score') || '0', 10);
        const lessons = parseInt(row.getAttribute('data-lessons') || '0', 10);

        let matchKw = !kw || name.includes(kw) || email.includes(kw);
        let matchStatus = true;
        if (statusFilter === 'has-score') matchStatus = score > 0;
        if (statusFilter === 'zero-score') matchStatus = score === 0;
        if (statusFilter === 'has-lesson') matchStatus = lessons > 0;

        if (matchKw && matchStatus) {
          row.style.display = '';
          visibleCount++;
        } else {
          row.style.display = 'none';
        }
      });

      // Sort rows
      rows.sort((a, b) => {
        const scoreA = parseInt(a.getAttribute('data-score') || '0', 10);
        const scoreB = parseInt(b.getAttribute('data-score') || '0', 10);
        const nameA = a.getAttribute('data-name') || '';
        const nameB = b.getAttribute('data-name') || '';
        const lessonsA = parseInt(a.getAttribute('data-lessons') || '0', 10);
        const lessonsB = parseInt(b.getAttribute('data-lessons') || '0', 10);

        if (sortMode === 'score-desc') return scoreB - scoreA;
        if (sortMode === 'score-asc') return scoreA - scoreB;
        if (sortMode === 'name-asc') return nameA.localeCompare(nameB);
        if (sortMode === 'name-desc') return nameB.localeCompare(nameA);
        if (sortMode === 'lessons-desc') return lessonsB - lessonsA;
        return 0;
      });

      if (tbody) {
        rows.forEach(row => tbody.appendChild(row));
      }
      if (countEl) countEl.textContent = visibleCount;
    }

    // Filter & Sort Lessons Table
    function filterLessonsTable() {
      const kw = (document.getElementById('search-lesson-input')?.value || '').trim().toLowerCase();
      const levelFilter = document.getElementById('filter-lesson-level')?.value || 'all';
      const sortMode = document.getElementById('sort-lesson-select')?.value || 'order-asc';
      const rows = Array.from(document.querySelectorAll('.lesson-table-row'));
      const tbody = document.getElementById('lessons-table-body');
      const countEl = document.getElementById('lesson-count-display');

      let visibleCount = 0;
      rows.forEach(row => {
        const title = row.getAttribute('data-title') || '';
        const sub = row.getAttribute('data-sub') || '';
        const num = row.getAttribute('data-num') || '';
        const level = row.getAttribute('data-level') || '';

        let matchKw = !kw || title.includes(kw) || sub.includes(kw) || ('modul ' + num).includes(kw);
        let matchLevel = (levelFilter === 'all') || (level === levelFilter);

        if (matchKw && matchLevel) {
          row.style.display = '';
          visibleCount++;
        } else {
          row.style.display = 'none';
        }
      });

      // Sort rows
      rows.sort((a, b) => {
        const numA = parseInt(a.getAttribute('data-num') || '0', 10);
        const numB = parseInt(b.getAttribute('data-num') || '0', 10);
        const titleA = a.getAttribute('data-title') || '';
        const titleB = b.getAttribute('data-title') || '';
        const estA = parseInt(a.getAttribute('data-est') || '0', 10);
        const estB = parseInt(b.getAttribute('data-est') || '0', 10);
        const questsA = parseInt(a.getAttribute('data-quests') || '0', 10);
        const questsB = parseInt(b.getAttribute('data-quests') || '0', 10);

        if (sortMode === 'order-asc') return numA - numB;
        if (sortMode === 'title-asc') return titleA.localeCompare(titleB);
        if (sortMode === 'title-desc') return titleB.localeCompare(titleA);
        if (sortMode === 'est-asc') return estA - estB;
        if (sortMode === 'est-desc') return estB - estA;
        if (sortMode === 'quests-desc') return questsB - questsA;
        return 0;
      });

      if (tbody) {
        rows.forEach(row => tbody.appendChild(row));
      }
      if (countEl) countEl.textContent = visibleCount;
    }

    // Filter & Sort Quests
    function filterQuests() {
      const kw = (document.getElementById('search-quest-input')?.value || '').trim().toLowerCase();
      const lessonId = document.getElementById('filter-quest-lesson')?.value || 'all';
      const typeFilter = document.getElementById('filter-quest-type')?.value || 'all';
      const sortMode = document.getElementById('sort-quest-select')?.value || 'default';
      const items = Array.from(document.querySelectorAll('.quest-admin-item'));
      const container = document.getElementById('quest-list-container');
      const countEl = document.getElementById('quest-count-display');

      let visibleCount = 0;
      items.forEach(item => {
        const lId = item.getAttribute('data-lesson-id') || '';
        const hasImg = item.getAttribute('data-has-img') || 'text';
        const qText = item.getAttribute('data-question') || '';

        let matchLesson = (lessonId === 'all') || (lId === String(lessonId));
        let matchType = (typeFilter === 'all') || (hasImg === typeFilter);
        let matchKw = !kw || qText.includes(kw);

        if (matchLesson && matchType && matchKw) {
          item.style.display = 'block';
          visibleCount++;
        } else {
          item.style.display = 'none';
        }
      });

      // Sort items
      items.sort((a, b) => {
        const ptsA = parseInt(a.getAttribute('data-points') || '0', 10);
        const ptsB = parseInt(b.getAttribute('data-points') || '0', 10);
        const qA = a.getAttribute('data-question') || '';
        const qB = b.getAttribute('data-question') || '';
        const ordA = parseInt(a.getAttribute('data-order') || a.getAttribute('data-id') || '0', 10);
        const ordB = parseInt(b.getAttribute('data-order') || b.getAttribute('data-id') || '0', 10);

        if (sortMode === 'points-desc') return ptsB - ptsA;
        if (sortMode === 'points-asc') return ptsA - ptsB;
        if (sortMode === 'question-asc') return qA.localeCompare(qB);
        return ordA - ordB; // default
      });

      if (container) {
        items.forEach(item => container.appendChild(item));
      }
      if (countEl) countEl.textContent = visibleCount;
    }

    function filterQuestsByLesson(lessonId) {
      const sel = document.getElementById('filter-quest-lesson');
      if (sel) sel.value = lessonId;
      filterQuests();
    }

    async function deleteQuest(id) {
      if (!confirm('Hapus soal quest #' + id + ' secara permanen?')) return;
      const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      try {
        const res = await fetch('/guru/quests/' + id, {
          method: 'DELETE',
          headers: {
            'X-CSRF-TOKEN': token,
            'Accept': 'application/json'
          }
        });
        const data = await res.json();
        if (data.success) {
          const item = document.getElementById('quest-item-' + id);
          if (item) item.remove();
          filterQuests();
          alert('Soal berhasil dihapus.');
        } else {
          alert('Gagal menghapus soal: ' + (data.message || ''));
        }
      } catch (err) {
        alert('Gagal menghapus soal.');
      }
    }

    // ==========================================
    // MINIGAMES MASTER ADMINISTRATION LOGIC
    // ==========================================
    let currentAdminGame = 'kana-blast';
    let adminSoalFilterMode = 'all';
    let adminSoalSearch = '';
    let adminSoalSort = 'default';
    let adminSoalPage = 1;
    const adminSoalPageSize = 15;

    function setAdminSoalSort(sort) {
      adminSoalSort = sort;
      adminSoalPage = 1;
      renderAdminGameView();
    }

    function switchAdminGameTab(gameKey) {
      currentAdminGame = gameKey;
      adminSoalFilterMode = 'all';
      adminSoalSearch = '';
      adminSoalPage = 1;
      document.querySelectorAll('.admin-game-chip').forEach(btn => btn.classList.remove('active'));
      const activeBtn = document.getElementById('chip-game-' + gameKey);
      if (activeBtn) activeBtn.classList.add('active');
      renderAdminGameView();
    }

    function setAdminSoalFilter(mode) {
      adminSoalFilterMode = mode;
      adminSoalPage = 1;
      renderAdminGameView();
    }

    function onAdminSoalSearch(kw) {
      adminSoalSearch = kw;
      adminSoalPage = 1;
      renderAdminGameView();
    }

    function setAdminSoalPage(page) {
      adminSoalPage = page;
      renderAdminGameView();
    }

    async function loadAdminPreset(presetType) {
      const added = await GameConfigManager.loadPreset(currentAdminGame, presetType);
      const label = presetType === 'hiragana' || presetType === 'vocab-hiragana' ? 'Kosakata Hiragana (kasa, neko, dll)' : (presetType === 'katakana' || presetType === 'vocab-katakana' ? 'Kosakata Katakana (pan, terebi, dll)' : 'Kanji N5');
      alert(`Paket ${label} berhasil disinkronkan ke database (${added} butir baru ditambahkan)!`);
      renderAdminGameView();
    }

    function renderAdminGameView() {
      const container = document.getElementById('admin-game-details');
      if (!container || typeof GameConfigManager === 'undefined') return;

      const g = GameConfigManager.getGame(currentAdminGame);
      if (!g) return;

      const subModes = GameConfigManager.getAllSubModes(currentAdminGame);
      const allQuestions = GameConfigManager.getQuestions(currentAdminGame);
      const duration = GameConfigManager.getDuration(currentAdminGame, 60);

      // Filtering sub-mode
      let filtered = allQuestions;
      if (adminSoalFilterMode !== 'all') {
        filtered = filtered.filter(q => {
          if (q.mode === adminSoalFilterMode) return true;
          if (adminSoalFilterMode === 'vocab-hiragana' || adminSoalFilterMode === 'hiragana') {
            return q.mode === 'vocab-hiragana' || q.mode === 'kana-hiragana' || q.mode === 'hiragana' || q.mode === 'words';
          }
          if (adminSoalFilterMode === 'vocab-katakana' || adminSoalFilterMode === 'katakana') {
            return q.mode === 'vocab-katakana' || q.mode === 'kana-katakana' || q.mode === 'katakana';
          }
          if (adminSoalFilterMode === 'kanji-n5' || adminSoalFilterMode.includes('kanji')) {
            return q.mode && q.mode.includes('kanji');
          }
          if (adminSoalFilterMode === 'word-builder') {
            return q.mode === 'word-builder';
          }
          return false;
        });
      }

      // Filtering search keyword
      if (adminSoalSearch && adminSoalSearch.trim()) {
        const kw = adminSoalSearch.trim().toLowerCase();
        filtered = filtered.filter(q => {
          const c = (q.char || (q.answer ? q.answer.join('') : '')).toLowerCase();
          const r = (q.romaji || '').toLowerCase();
          const m = (q.mean || q.meaning || '').toLowerCase();
          return c.includes(kw) || r.includes(kw) || m.includes(kw);
        });
      }

      // Hitung jumlah butir per kategori
      const countAll = allQuestions.length;
      const countHira = allQuestions.filter(q => q.mode === 'vocab-hiragana' || q.mode === 'hiragana' || q.mode === 'kana-hiragana' || q.mode === 'words').length;
      const countKata = allQuestions.filter(q => q.mode === 'vocab-katakana' || q.mode === 'katakana' || q.mode === 'kana-katakana').length;
      const countKanji = allQuestions.filter(q => q.mode && q.mode.includes('kanji')).length;
      const countWb = allQuestions.filter(q => q.mode === 'word-builder').length;

      // Sorting
      if (adminSoalSort === 'romaji-asc') {
        filtered.sort((a, b) => (a.romaji || '').localeCompare(b.romaji || ''));
      } else if (adminSoalSort === 'romaji-desc') {
        filtered.sort((a, b) => (b.romaji || '').localeCompare(a.romaji || ''));
      } else if (adminSoalSort === 'char-asc') {
        filtered.sort((a, b) => (a.char || (a.answer ? a.answer.join('') : '')).localeCompare(b.char || (b.answer ? b.answer.join('') : '')));
      } else if (adminSoalSort === 'mean-asc') {
        filtered.sort((a, b) => (a.mean || a.meaning || '').localeCompare(b.mean || b.meaning || ''));
      } else if (adminSoalSort === 'newest') {
        filtered.sort((a, b) => (b.id || 0) - (a.id || 0));
      }

      // Pagination setup
      const totalPages = Math.ceil(filtered.length / adminSoalPageSize) || 1;
      if (adminSoalPage > totalPages) adminSoalPage = totalPages;
      if (adminSoalPage < 1) adminSoalPage = 1;
      const startIdx = (adminSoalPage - 1) * adminSoalPageSize;
      const paged = filtered.slice(startIdx, startIdx + adminSoalPageSize);

      container.innerHTML = `
        <!-- CARD 1: PENGATURAN DURASI / WAKTU PERMAINAN -->
        <div class="admin-settings-card">
          <div class="admin-card-head">
            <div>
              <h4>
                <span>Pengaturan Waktu &amp; Kecepatan (${g.title})</span>
              </h4>
              <p>Atur limit waktu bermain siswa agar latihan membaca kosakata lebih menantang atau santai.</p>
            </div>
            <button type="button" class="btn-guru-primary" onclick="saveAdminGameDuration()">
              <span>Simpan Pengaturan Waktu</span>
            </button>
          </div>
          
          <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap;">
            <div style="display:flex; align-items:center; gap:8px;">
              <label style="font-weight:700; font-size:0.9rem;">Waktu Standar Permainan:</label>
              <input type="number" id="admin-game-duration-input" class="form-control" style="width:110px; font-weight:800; font-size:1.1rem; text-align:center;" value="${duration < 900 ? duration : 60}" min="10" max="300" step="5" />
              <span style="font-weight:700; color:#64748B;">Detik</span>
            </div>
            <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
              <span style="font-size:0.8rem; color:#64748B; font-weight:700;">Preset Cepat:</span>
              <button type="button" class="btn-preset" onclick="document.getElementById('admin-game-duration-input').value = 30">30s (Blitz)</button>
              <button type="button" class="btn-preset" onclick="document.getElementById('admin-game-duration-input').value = 45">45s</button>
              <button type="button" class="btn-preset" onclick="document.getElementById('admin-game-duration-input').value = 60">60s (Standar)</button>
              <button type="button" class="btn-preset" onclick="document.getElementById('admin-game-duration-input').value = 90">90s (Maraton)</button>
            </div>
          </div>
        </div>

        <!-- CARD 2: KELOLA SUB-MODE PERMAINAN (KOSAKATA HIRAGANA, KATAKANA, KANJI, DLL) -->
        <div class="admin-settings-card">
          <div class="admin-card-head">
            <div>
              <h4>
                <span>Sub-Mode Permainan (${subModes.length} Mode Tersedia di Database)</span>
              </h4>
              <p>Aktifkan, nonaktifkan, atau tambah sub-mode baru (contoh: <strong>Kosakata Hiragana, Kosakata Katakana, Kanji N5 Dasar</strong>) untuk game ini.</p>
            </div>
            <button type="button" class="btn-preset" style="color:#2563EB; border-color:#BFDBFE;" onclick="openAddSubModeModal()">
              <span>+ Tambah Sub-Mode Baru</span>
            </button>
          </div>

          <div class="admin-submodes-list">
            ${subModes.map(sm => `
              <div class="admin-submode-badge ${sm.active !== false ? 'is-active' : 'is-inactive'}">
                <span>${sm.name}</span>
                <button type="button" onclick="toggleAdminSubMode('${sm.id}')" style="background:transparent; border:none; cursor:pointer; font-weight:800; font-size:0.8rem; color:${sm.active !== false ? '#10B981' : '#64748B'};" title="Ubah Status">
                  ${sm.active !== false ? 'Aktif' : 'Nonaktif'}
                </button>
                ${(sm.id.startsWith('custom') || sm.id === 'kanji-n5' || sm.id === 'kanji-n4') ? `
                  <button type="button" onclick="deleteAdminSubMode('${sm.id}')" style="background:transparent; border:none; cursor:pointer; color:#DC2626; font-size:1rem; line-height:1;" title="Hapus Sub-Mode">&times;</button>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- CARD 3: BANK SOAL KOSAKATA (KASA, NEKO, PAN, DLL) & KANJI DATABASE -->
        <div class="admin-settings-card">
          <div class="admin-card-head">
            <div>
              <h4>
                <span>Bank Soal Kosakata &amp; Aksara Database (${allQuestions.length} Butir Soal Terdaftar)</span>
              </h4>
              <p>Kelola seluruh butir kosakata utuh (seperti <strong>かさ / kasa</strong>, <strong>ねこ / neko</strong>, <strong>パン / pan</strong>, dll.) dan <strong>Kanji</strong> yang tersimpan langsung di database SQLite untuk game ini.</p>
            </div>
            <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
              <button type="button" class="btn-preset" onclick="loadAdminPreset('vocab-hiragana')" title="Muat 25 Kosakata Hiragana Standar (kasa, neko, dll)">+ Kosakata Hiragana</button>
              <button type="button" class="btn-preset" onclick="loadAdminPreset('vocab-katakana')" title="Muat 18 Kosakata Katakana Standar (pan, terebi, dll)">+ Kosakata Katakana</button>
              <button type="button" class="btn-preset" onclick="loadAdminPreset('kanji-n5')" title="Muat 15 Kanji N5 Standar">+ Paket Kanji N5</button>
              <button type="button" class="btn-guru-primary" onclick="openAddGameQuestionModal()">
                <span>+ Tambah Soal Kosakata</span>
              </button>
              <button type="button" class="btn-preset" style="color:#DC2626; border-color:#FECACA;" onclick="resetAdminGameDefault()">
                <span>Reset Database</span>
              </button>
            </div>
          </div>

          <!-- TOOLBAR FILTER SUB-MODE & SEARCH -->
          <div class="admin-soal-toolbar">
            <div class="admin-soal-filter-pills">
              <button type="button" class="admin-soal-filter-pill ${adminSoalFilterMode === 'all' ? 'active' : ''}" onclick="setAdminSoalFilter('all')">
                Semua Soal (${countAll})
              </button>
              ${countHira > 0 ? `
                <button type="button" class="admin-soal-filter-pill ${adminSoalFilterMode === 'vocab-hiragana' ? 'active' : ''}" onclick="setAdminSoalFilter('vocab-hiragana')">
                  Kosakata Hiragana (${countHira})
                </button>
              ` : ''}
              ${countKata > 0 ? `
                <button type="button" class="admin-soal-filter-pill ${adminSoalFilterMode === 'vocab-katakana' ? 'active' : ''}" onclick="setAdminSoalFilter('vocab-katakana')">
                  Kosakata Katakana (${countKata})
                </button>
              ` : ''}
              ${countKanji > 0 ? `
                <button type="button" class="admin-soal-filter-pill ${adminSoalFilterMode === 'kanji-n5' ? 'active' : ''}" onclick="setAdminSoalFilter('kanji-n5')">
                  Kanji N5 (${countKanji})
                </button>
              ` : ''}
              ${countWb > 0 ? `
                <button type="button" class="admin-soal-filter-pill ${adminSoalFilterMode === 'word-builder' ? 'active' : ''}" onclick="setAdminSoalFilter('word-builder')">
                  Susun Kosakata (${countWb})
                </button>
              ` : ''}
            </div>
            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; flex:1; justify-content:flex-end;">
              <div style="min-width:220px; flex:1;">
                <input type="text" id="admin-soal-search" class="form-control" placeholder="Cari kosakata, romaji, arti..." oninput="onAdminSoalSearch(this.value)" value="${adminSoalSearch}" />
              </div>
              <select id="admin-soal-sort" class="form-control" onchange="setAdminSoalSort(this.value)" style="width:auto; min-width:180px; font-weight:700;">
                <option value="default" ${adminSoalSort === 'default' ? 'selected' : ''}>Urutan: Bawaan</option>
                <option value="romaji-asc" ${adminSoalSort === 'romaji-asc' ? 'selected' : ''}>Romaji (A - Z)</option>
                <option value="romaji-desc" ${adminSoalSort === 'romaji-desc' ? 'selected' : ''}>Romaji (Z - A)</option>
                <option value="char-asc" ${adminSoalSort === 'char-asc' ? 'selected' : ''}>Karakter / Aksara</option>
                <option value="mean-asc" ${adminSoalSort === 'mean-asc' ? 'selected' : ''}>Arti Kata (A - Z)</option>
                <option value="newest" ${adminSoalSort === 'newest' ? 'selected' : ''}>Terbaru Ditambahkan</option>
              </select>
            </div>
          </div>

          <!-- TABLE -->
          <div class="admin-table-wrap">
            <table class="admin-soal-table">
              <thead>
                <tr>
                  <th style="width:40px;">#</th>
                  <th style="width:150px;">Kata / Karakter</th>
                  <th>Romaji (Cara Baca)</th>
                  <th>Arti Bahasa Indonesia</th>
                  <th>Kategori Sub-Mode</th>
                  <th style="width:140px; text-align:center;">Aksi</th>
                </tr>
              </thead>
              <tbody>
                ${paged.length === 0 ? `
                  <tr>
                    <td colspan="6" style="text-align:center; padding:2rem; color:#94A3B8;">Tidak ada butir soal kosakata yang sesuai pencarian atau filter kategori.</td>
                  </tr>
                ` : paged.map((q, idx) => {
                  const displayChar = q.char || (q.answer ? q.answer.join('') : '-');
                  const displayMean = q.mean || q.meaning || '-';
                  return `
                    <tr>
                      <td><strong>${startIdx + idx + 1}</strong></td>
                      <td><span class="char-preview-pill" style="font-size:1.15rem; font-weight:800; letter-spacing:1px;">${displayChar}</span></td>
                      <td><strong style="color:#0F172A;">${q.romaji || '-'}</strong></td>
                      <td>${displayMean}</td>
                      <td><span style="font-size:0.75rem; padding:3px 10px; border-radius:12px; background:#EFF6FF; color:#1D4ED8; font-weight:700;">${q.mode || 'Semua'}</span></td>
                      <td style="text-align:center;">
                        <button type="button" class="btn-preset" style="padding:4px 8px; font-size:0.78rem;" onclick="editAdminGameQuestion('${q.id}')">Edit</button>
                        <button type="button" class="btn-preset" style="padding:4px 8px; font-size:0.78rem; color:#DC2626; border-color:#FECACA;" onclick="deleteAdminGameQuestion('${q.id}')">Hapus</button>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>

          <!-- PAGINATION -->
          ${filtered.length > adminSoalPageSize ? `
            <div class="admin-soal-pagination">
              <div>
                Menampilkan <strong>${startIdx + 1} - ${Math.min(startIdx + adminSoalPageSize, filtered.length)}</strong> dari <strong>${filtered.length}</strong> butir soal kosakata (Total Database: ${countAll})
              </div>
              <div class="admin-soal-pagination-btns">
                <button type="button" class="admin-page-btn" ${adminSoalPage <= 1 ? 'disabled' : ''} onclick="setAdminSoalPage(1)">&laquo;</button>
                <button type="button" class="admin-page-btn" ${adminSoalPage <= 1 ? 'disabled' : ''} onclick="setAdminSoalPage(${adminSoalPage - 1})">&lsaquo;</button>
                <span style="font-weight:700; padding:0 8px;">Hal ${adminSoalPage} dari ${totalPages}</span>
                <button type="button" class="admin-page-btn" ${adminSoalPage >= totalPages ? 'disabled' : ''} onclick="setAdminSoalPage(${adminSoalPage + 1})">&rsaquo;</button>
                <button type="button" class="admin-page-btn" ${adminSoalPage >= totalPages ? 'disabled' : ''} onclick="setAdminSoalPage(${totalPages})">&raquo;</button>
              </div>
            </div>
          ` : `
            <div style="font-size:0.8rem; color:#64748B; margin-top:12px; text-align:right;">
              Total: <strong>${filtered.length}</strong> butir soal kosakata ditampilkan
            </div>
          `}
        </div>
      `;
    }

    async function saveAdminGameDuration() {
      const input = document.getElementById('admin-game-duration-input');
      if (!input) return;
      const sec = parseInt(input.value, 10);
      if (isNaN(sec) || sec < 5) {
        alert('Masukkan durasi detik yang valid (minimal 5 detik).');
        return;
      }
      await GameConfigManager.setDuration(currentAdminGame, sec);
      alert(`Durasi waktu bermain untuk ${currentAdminGame} berhasil disimpan di database: ${sec} detik!`);
      renderAdminGameView();
    }

    function openAddSubModeModal() {
      const targetInput = document.getElementById('submode-target-game');
      const idInput = document.getElementById('submode-id');
      const nameInput = document.getElementById('submode-name');
      if (targetInput) targetInput.value = currentAdminGame;
      if (idInput) idInput.value = '';
      if (nameInput) nameInput.value = '';
      openModal('modal-add-submode');
    }

    async function submitAddSubMode(e) {
      e.preventDefault();
      const id = document.getElementById('submode-id').value.trim().toLowerCase().replace(/[^a-z0-9-_]/g, '-');
      const name = document.getElementById('submode-name').value.trim();
      if (!id || !name) return;

      await GameConfigManager.addSubMode(currentAdminGame, { id, name, active: true });
      closeModal('modal-add-submode');
      alert(`Sub-mode "${name}" berhasil ditambahkan ke database!`);
      renderAdminGameView();
    }

    async function toggleAdminSubMode(modeId) {
      await GameConfigManager.toggleSubMode(currentAdminGame, modeId);
      renderAdminGameView();
    }

    async function deleteAdminSubMode(modeId) {
      if (!confirm('Hapus sub-mode ini dari database?')) return;
      await GameConfigManager.deleteSubMode(currentAdminGame, modeId);
      renderAdminGameView();
    }

    function updateSubmodeDropdownForModal() {
      const targetGame = document.getElementById('game-q-target').value;
      const subSelect = document.getElementById('game-q-submode');
      if (!subSelect) return;
      const subModes = GameConfigManager.getAllSubModes(targetGame);
      subSelect.innerHTML = subModes.map(sm => `<option value="${sm.id}">${sm.name}</option>`).join('');
    }

    function openAddGameQuestionModal() {
      document.getElementById('modal-game-q-title').textContent = 'Tambah Soal Kosakata Game (Database)';
      document.getElementById('game-q-edit-id').value = '';
      document.getElementById('game-q-target').value = currentAdminGame;
      document.getElementById('game-q-char').value = '';
      document.getElementById('game-q-romaji').value = '';
      document.getElementById('game-q-mean').value = '';
      updateSubmodeDropdownForModal();
      openModal('modal-add-game-question');
    }

    async function submitAddGameQuestion(e) {
      e.preventDefault();
      const targetGame = document.getElementById('game-q-target').value;
      const editId = document.getElementById('game-q-edit-id').value;
      const submode = document.getElementById('game-q-submode').value;
      const char = document.getElementById('game-q-char').value.trim();
      const romaji = document.getElementById('game-q-romaji').value.trim();
      const mean = document.getElementById('game-q-mean').value.trim();

      if (!char || !romaji) return;

      if (editId) {
        await GameConfigManager.updateQuestion(targetGame, editId, { char, romaji, mean, mode: submode });
        alert(`Soal kosakata "${char}" berhasil diperbarui di database!`);
      } else {
        await GameConfigManager.addQuestion(targetGame, { char, romaji, mean, mode: submode });
        alert(`Soal kosakata baru "${char}" berhasil disimpan ke database SQLite!`);
      }

      closeModal('modal-add-game-question');
      renderAdminGameView();
    }

    function editAdminGameQuestion(qId) {
      const questions = GameConfigManager.getQuestions(currentAdminGame);
      const q = questions.find(item => String(item.id) === String(qId));
      if (!q) return;

      document.getElementById('modal-game-q-title').textContent = 'Edit Soal Kosakata Game (Database)';
      document.getElementById('game-q-edit-id').value = q.id;
      document.getElementById('game-q-target').value = currentAdminGame;
      updateSubmodeDropdownForModal();
      document.getElementById('game-q-submode').value = q.mode || '';
      document.getElementById('game-q-char').value = q.char || (q.answer ? q.answer.join('') : '');
      document.getElementById('game-q-romaji').value = q.romaji || '';
      document.getElementById('game-q-mean').value = q.mean || q.meaning || '';

      openModal('modal-add-game-question');
    }

    async function deleteAdminGameQuestion(qId) {
      if (!confirm('Hapus butir soal kosakata ini dari database SQLite?')) return;
      await GameConfigManager.deleteQuestion(currentAdminGame, qId);
      renderAdminGameView();
    }

    async function resetAdminGameDefault() {
      if (!confirm('Kembalikan seluruh bank soal ke database bawaan (kosakata kasa, neko, pan, dan kanji N5)?')) return;
      await GameConfigManager.resetToDefault(currentAdminGame);
      alert('Bank soal kosakata database berhasil direset!');
      renderAdminGameView();
    }

    // Inisialisasi GameConfigManager dengan data server jika tersedia
    @if(isset($minigameConfigs) && isset($minigameQuestions))
      try {
        const sConfigs = @json($minigameConfigs);
        const sQuestions = @json($minigameQuestions);
        GameConfigManager.initFromServer(sConfigs, sQuestions);
      } catch (e) {}
    @endif

    GameConfigManager.subscribe(() => {
      renderAdminGameView();
    });

    function handleGuruProfileSubmit(e) {
      try {
        const name = document.getElementById('guru-name-input')?.value.trim();
        const email = document.getElementById('guru-email-input')?.value.trim();
        const avatar = document.getElementById('guru-avatar-input')?.value;
        const stored = localStorage.getItem('sijapanese_active_user');
        let user = stored ? JSON.parse(stored) : {};
        if (name) user.name = name;
        if (email) user.email = email;
        if (avatar) user.avatar = avatar;
        localStorage.setItem('sijapanese_active_user', JSON.stringify(user));

        const modalName = document.getElementById('modal-profile-success-name');
        if (modalName && name) modalName.textContent = name;
        const modalEmail = document.getElementById('modal-profile-success-email');
        if (modalEmail && email) modalEmail.textContent = email;
      } catch (err) {}
    }

    @if(session('profile_updated') || session('success'))
      document.addEventListener('DOMContentLoaded', function() {
        openModal('modal-profile-success');
      });
    @endif
  </script>
</body>
</html>
