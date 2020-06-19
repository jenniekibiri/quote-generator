let quotesToGen = prompt(
  'Input number of quotes to generate (between 1 - 5)...'
);

let quoteType = prompt(
  'Type 1 for Motivational Quotes or 2 for Romatic Quotes'
);

let randSentence = (arr) => arr[Math.floor(Math.random() * arr.length)];

const words = {
  start: ['never give up', 'life fight and win'],
  mid: [' go and give up ', ' battle fight and win '],
  end: ['go and never give up', 'life and win'],
};

const words2 = {
  start: ['2never give up', '2life fight and win'],
  mid: [' 2go and give up ', ' 2battle fight and win '],
  end: ['2go and never give up', '2life and win'],
};

let quoteList;

if (quoteType == 1) {
  quoteList = words;
} else {
  quoteList = words2;
}

let i = 0;

while (i < quotesToGen) {
  let quote = '';

  let sentences = Object.entries(quoteList);
  for (const [position, sentArr] of sentences) {
    quote += randSentence(sentArr);
  }
  console.log(quote);

  i++;
}
