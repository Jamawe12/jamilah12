var dataUrl = [
  
  'https://google.com',

  'https://google.com',

  'https://google.com',

  'https://google.com',

  'https://google.com'

];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem;
