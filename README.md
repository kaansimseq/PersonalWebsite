# Kaan Şimşek — Kişisel Web Sitesi

[kaansimsek.me](https://www.kaansimsek.me) adresinde yayınlanan kişisel portfolyo sitesi. Saf HTML/CSS/JS ile yazılmış, build aracı gerektirmeyen tek sayfalık bir site.

Sayfa, scroll ile ilerleyen tek bir sahne olarak kurulu: isim/fotoğraf (hero) → yatayda kayan sosyal medya kartları → kapanış cümlesi. Tüm geçişler `script.js` içinde scroll pozisyonuna bağlı olarak hesaplanıyor.

## Yapı

```
index.html   → sayfa iskeleti
style.css    → görünüm
script.js    → scroll animasyon mantığı
images/      → fotoğraf, CV ve ikonlar
CNAME        → GitHub Pages custom domain ayarı
```

## Yerelde çalıştırma

Build adımı yok, herhangi bir statik dosya sunucusu yeterli:

```bash
npx serve .
```

## Yayınlama

`main` branch'i GitHub Pages üzerinden `CNAME` dosyasındaki domain'e otomatik yayınlanır.
