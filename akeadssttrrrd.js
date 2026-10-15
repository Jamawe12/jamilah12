var dataUrl = [

'https://auctionr.org/4/62ac92c7c5426fdf3bf3ae0076548fa8',
'https://auctionr.org/4/62ac92c7c5426fdf3bf3ae0076548fa8',
'https://auctionr.org/4/62ac92c7c5426fdf3bf3ae0076548fa8',
'https://auctionr.org/4/62ac92c7c5426fdf3bf3ae0076548fa8',
'https://auctionr.org/4/62ac92c7c5426fdf3bf3ae0076548fa8'

];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem;
