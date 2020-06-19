const words = {
  start: ['never give up', 'life fight and win'],
  mid: [' go and give up ', ' battle fight and win '],
  end: ['go and never give up', 'life and win'],
};

let randSentence = (arr) => arr[Math.floor(Math.random() * arr.length)];

let quote = '';

let sentences = Object.entries(words);
for (const [position, sentArr] of sentences) {
  quote += randSentence(sentArr);
}
console.log(quote);
