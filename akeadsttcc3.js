var dataUrl = [

'https://auctionr.org/4/62ac92c7c5426fdf3bf3ae0076548fa8',
'https://auctionr.org/4/62ac92c7c5426fdf3bf3ae0076548fa8',
'https://auctionr.org/4/62ac92c7c5426fdf3bf3ae0076548fa8',
'https://asiafilm.org/4/154a03f2f113bedb65107c7249b941f6',
'https://asiafilm.org/4/154a03f2f113bedb65107c7249b941f6'

];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem;
