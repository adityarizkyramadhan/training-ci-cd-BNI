# Lab 14 · Incident Response Simulation

> **Tujuan:** Mempraktikkan alur Detect → Triage → Mitigate → Resolve → Postmortem.

## Skenario

> **14:00 WIB** — Alert Grafana: p95 response time API melonjak dari 200ms → 2000ms (10×).
> Error rate naik dari 0.1% → 5%. Tidak ada deploy dalam 2 jam terakhir.

## Step 1 — Detect (2 menit)

```bash
# Cek status app + response time
curl -w "\nResponse time: %{time_total}s\n" http://localhost:3000/health

# Cek resource usage (butuh Docker)
docker stats --no-stream

# Cek log terbaru (butuh Docker Compose)
docker compose logs --tail=50 app
```

## Step 2 — Triage (3 menit) — checklist

```
☐ Ada deploy baru dalam 1–2 jam terakhir?
☐ CPU/memory melonjak?
☐ Ada query database yang lambat di log?
☐ Ada lonjakan traffic tidak biasa?
☐ Service dependency (DB, Redis, external API) bermasalah?
☐ Ada perubahan infrastruktur (scaling, config)?
```

## Step 3 — Mitigate (3 menit) — pilih tindakan

```bash
# Opsi A: Scale up
docker compose up -d --scale app=5

# Opsi B: Rollback ke versi stabil
docker compose down && git checkout v1.0.0 && docker compose up -d

# Opsi C: Restart service
docker compose restart app
```

## Step 4 — Resolve (2 menit)

```bash
curl -w "\nResponse time: %{time_total}s\n" http://localhost:3000/health
curl http://localhost:3000/metrics | grep error
```

## Step 5 — Blameless Postmortem — template

```markdown
# Postmortem — API Latency Spike

## Timeline
- 14:00 — Alert Grafana: p95 latency > 2s
- 14:02 — Tim mulai investigasi
- 14:05 — Root cause identified: _______________
- 14:08 — Mitigasi diterapkan: _______________
- 14:10 — Service kembali normal

## Root Cause
(Apa penyebab sebenarnya?)

## Impact
- Durasi: ___ menit
- Users affected: ___ %
- Revenue impact: ___

## Action Items
1. [ ] _______________
2. [ ] _______________
3. [ ] _______________

## Lessons Learned
- Apa yang berjalan baik?
- Apa yang bisa diperbaiki?
- Bagaimana mencegah terulang?
```

> **Catatan lingkungan:** langkah `docker` di lab ini membutuhkan Docker yang belum
> terpasang di mesin ini. Alur roleplay Detect→Triage→Mitigate→Resolve→Postmortem
> tetap bisa dijalankan sebagai diskusi. Rollback ke `v1.0.0` juga sudah dibuktikan
> di Lab 10 menggunakan `git revert`.
