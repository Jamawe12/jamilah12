var dataUrl = [

'https://t.co/mNDOlRbZdx',
'https://t.co/ay7yKS8T3M',
'https://t.co/PEYxFxkmWQ',
'https://t.co/uolf3QWkN2',
'https://t.co/tN5eI7NIuI',
'https://t.co/CX50s4Zrn2',
'https://t.co/TuO6wKemni',
'https://t.co/GuQhaYqJb0',
'https://t.co/td4UExlQAv'

];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem;
