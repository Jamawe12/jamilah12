var dataUrl = [

'https://auctionr.org/4/06a65aff32bf2ca8c5af261583d0fcaa',
'https://auctionr.org/4/06a65aff32bf2ca8c5af261583d0fcaa',
'https://auctionr.org/4/06a65aff32bf2ca8c5af261583d0fcaa'

];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem;
