var dataUrl = [

  'https://t.co/TuO6wKemni',

  'https://t.co/mNDOlRbZdx'

];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem;
