// === redirect.js ===
// Script ini akan mengalihkan pengunjung ke salah satu link secara acak
// dengan menambahkan parameter tracking referrer.

(function() {
  // Daftar sumber (referrer)
  const refSources = [
    'https://facebook.com',
    'https://instagram.com',
    'https://twitter.com'
  ];

  // Daftar target tujuan
  const dataUrl = [
    'https://chattwhatsappgruppfull.blogspot.com/2024/01/grup-wa_94.html',
    'https://chattwhatsappgruppfull.blogspot.com/2024/01/grup-wa_17.html',
    'https://chattwhatsappgruppfull.blogspot.com/2024/01/grup-wa_99.html'
  ];

  // Pilih acak sumber dan target
  const randomRef = refSources[Math.floor(Math.random() * refSources.length)];
  const randomTarget = dataUrl[Math.floor(Math.random() * dataUrl.length)];

  // Buat query tracking
  const refParam = 'ref=' + encodeURIComponent(randomRef);
  const utmSource = 'utm_source=' + encodeURIComponent(randomRef.replace(/^https?:\/\//, ''));
  const utmMedium = 'utm_medium=referral';

  // Gabungkan parameter ke URL target
  const separator = randomTarget.includes('?') ? '&' : '?';
  const finalUrl = `${randomTarget}${separator}${refParam}&${utmSource}&${utmMedium}`;

  // Redirect otomatis
  window.location.href = finalUrl;
})();
