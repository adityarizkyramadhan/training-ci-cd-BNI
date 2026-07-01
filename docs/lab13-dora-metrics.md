# Lab 13 · DORA Metrics — Worksheet

> **Tujuan:** Mengukur performa tim menggunakan 4 metrik DORA.

## Worksheet (isi berdasarkan data tim Anda, 1 bulan terakhir)

| Metrik                   | Nilai Tim Anda   | Level DORA (E/H/M/L) |
|--------------------------|------------------|----------------------|
| Deployment Frequency     | ___ kali/bulan   | ☐ E  ☐ H  ☐ M  ☐ L   |
| Lead Time for Changes    | ___ hari         | ☐ E  ☐ H  ☐ M  ☐ L   |
| Change Failure Rate      | ___ %            | ☐ E  ☐ H  ☐ M  ☐ L   |
| Time to Restore Service  | ___ jam/hari     | ☐ E  ☐ H  ☐ M  ☐ L   |

## Benchmark DORA

| Metrik              | Elite                    | High                  | Medium                 | Low            |
|---------------------|--------------------------|-----------------------|------------------------|----------------|
| Deploy Frequency    | On-demand (multi/hari)   | 1×/minggu – 1×/bulan  | 1×/bulan – 1×/6 bulan  | < 1×/6 bulan   |
| Lead Time           | < 1 hari                 | 1–7 hari              | 1–6 bulan              | > 6 bulan      |
| Change Failure Rate | 0–5%                     | 5–10%                 | 10–15%                 | > 15%          |
| Time to Restore     | < 1 jam                  | < 1 hari              | 1–7 hari               | > 1 minggu     |

## Contoh referensi — repo lab ini (dari aktivitas hari ini)

Sebagai ilustrasi cara menghitung, berikut angka yang bisa diturunkan dari lab hari ini:

- **Deployment Frequency:** ~9 push ke `main` dalam satu sesi → level **Elite** (on-demand).
- **Lead Time for Changes:** dari commit `feat: add greeting` sampai merge PR #1 hanya beberapa menit → **Elite** (< 1 hari).
- **Change Failure Rate:** 1 deploy bermasalah (v1.1.0-broken) dari ~9 → ~11% → **Medium**.
- **Time to Restore:** rollback via `git revert` dalam hitungan menit → **Elite** (< 1 jam).

> Catatan: angka contoh di atas hanya untuk latihan menghitung. Untuk asesmen nyata, gunakan data 1 bulan tim Anda.

## Pertanyaan Diskusi

1. Di level mana tim Anda untuk setiap metrik?
2. Metrik mana yang **paling lemah**?
3. Apa **satu langkah pertama** untuk memperbaiki metrik terlemah itu?
4. Adakah korelasi antar metrik lemah? (mis. deploy jarang → lead time panjang)
