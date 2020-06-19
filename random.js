
const  beginning=[
   ' never give up',
    'life fight and win'
]
const middle =[
    'go and  give up',
    ' battle fight and win'
]
const end=[
'go and never give up',
'life and win'
]

const quotes= beginning.concat(middle,end)
console.log(quotes)
const sentence= quotes.join('')
console.log(sentence)
function generateQuote(){
   var randNumber = Math.floor(Math.random() * (sentence.length));
   document.getElementById('quoteDisplay').innerHTML = sentence[randNumber] 
}