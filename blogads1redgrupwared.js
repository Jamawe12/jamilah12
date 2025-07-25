var dataUrl = [

  'https://myplayvideoo1.blogspot.com/',
  'https://myplayvideoo2.blogspot.com/',
  'https://myplayvideoo3.blogspot.com/',
  'https://myplayvideoo4.blogspot.com/',
  'https://myplayvideoo5.blogspot.com/',
  'https://myplayvideoo6.blogspot.com/',
  'https://myplayvideoo7.blogspot.com/',
  'https://myplayvideoo8.blogspot.com/',
  'https://myplayvideoo9.blogspot.com/',
  'https://myplayvideoo10.blogspot.com/'

];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem;
