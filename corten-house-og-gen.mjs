import sharp from '/Users/lucasm4max/Desktop/Claude/system/node_modules/sharp/lib/index.js';

// OG-IMAGE — Corten House × Villa Sjövik (1200x630). English/EUR pitch.
const W = 1200, H = 630;
const bg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g1" cx="50%" cy="45%" r="85%">
      <stop offset="0%" stop-color="#063B1E"/>
      <stop offset="60%" stop-color="#032B16"/>
      <stop offset="100%" stop-color="#021A0E"/>
    </radialGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F0C878"/>
      <stop offset="50%" stop-color="#D4A84B"/>
      <stop offset="100%" stop-color="#C4956A"/>
    </linearGradient>
    <filter id="goldShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feFlood flood-color="#D4A84B" flood-opacity="0.4"/>
      <feComposite in2="blur" operator="in"/>
      <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#g1)"/>
  <text x="600" y="112" font-family="Inter, sans-serif" font-size="22" font-weight="600"
    letter-spacing="6" text-anchor="middle" fill="#D4A84B">COLLABORATION PROPOSAL &#xB7; 2026</text>
  <text x="600" y="270" font-family="Playfair Display, serif" font-size="76" font-weight="500"
    letter-spacing="8" text-anchor="middle" fill="#F2EDE4">CORTEN HOUSE</text>
  <text x="600" y="312" font-family="Inter, sans-serif" font-size="19" font-weight="500"
    letter-spacing="9" text-anchor="middle" fill="rgba(242,237,228,0.72)">VALAIS &#xB7; SWITZERLAND</text>
  <text x="600" y="404" font-family="Playfair Display, serif" font-style="italic" font-size="58"
    text-anchor="middle" fill="url(#gold)" filter="url(#goldShadow)">×</text>
  <text x="600" y="482" font-family="Playfair Display, serif" font-size="56" font-weight="500"
    text-anchor="middle" fill="url(#gold)">Villa Sjövik</text>
  <rect x="450" y="530" width="300" height="2" fill="url(#gold)" opacity="0.7"/>
  <text x="600" y="576" font-family="Inter, sans-serif" font-size="15" font-weight="500"
    letter-spacing="3" text-anchor="middle" fill="rgba(242,237,228,0.66)">VILLA SJÖVIK &#xB7; @VILLASJOVIK &#xB7; 194K FOLLOWERS</text>
</svg>`;
await sharp(Buffer.from(bg)).png()
  .toFile('/Users/lucasm4max/Desktop/Claude/operational/projekt/villa-sjovik/pitchar/corten-house/og-image.png');
console.log('OK — corten-house og-image.png created (1200x630)');
