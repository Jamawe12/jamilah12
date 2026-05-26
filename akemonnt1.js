var dataUrl = [

'https://t.co/EvpDGfcEvK',
'https://t.co/F4BBoZEYII',
'https://t.co/t7rAeHhjbl',
'https://t.co/wlW9iIdtMo',
'https://t.co/LsTNq3OUGQ',
'https://t.co/LBMTrrCmwb',
'https://t.co/3MIKcvKmU9',
'https://t.co/LoPEVGFCQL'

];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem;
