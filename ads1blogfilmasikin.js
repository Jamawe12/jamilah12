var dataUrl = [
  
  'https://filmasikin.blogspot.com/2023/06/video-1.html',

  'https://filmasikin.blogspot.com/2023/06/video-2.html',

  'https://filmasikin.blogspot.com/2023/06/video-3.html',

  'https://filmasikin.blogspot.com/2023/06/video-4.html',

  'https://filmasikin.blogspot.com/2023/06/video-5.html'

];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem;
