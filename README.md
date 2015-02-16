# Naive Bayes classifier

This is a [Naive Bayes classifier](http://en.wikipedia.org/wiki/Naive_Bayes_classifier) implementation written in JavaScript.

I took out the relevant algorithms from the [appratus](https://github.com/NaturalNode/apparatus) and [natural](https://github.com/NaturalNode/natural) node modules, and also the [Porter stemmer](https://github.com/NaturalNode/natural/tree/master/lib/natural/stemmers) algorithm. All credit goes to them.

# Install

```bash
npm install bayes-classifier
```

# Usage

```javascript
var BayesClassifier = require('bayes-classifier');
var classifier = new BayesClassifier();

var positiveDocuments = [
  'I love tacos.',
  'Dude, that burrito was epic!',
  'Holy cow, these nachos are so good and tasty.',
  'I am drooling over the awesome bean and cheese quesadillas.'
];

var negativeDocuments = [
  'Gross, worst taco ever.',
  'The buritos gave me horrible diarrhea.',
  'I\'m going to puke if I eat another bad nacho.',
  'I\'d rather die than poop after that nasty eating food.'
];

classifier.addDocuments(positiveDocuments, 'positive');
classifier.addDocuments(negativeDocuments, 'negative');

classifier.train();

console.log(classifier.classify('I heard the mexican restaurant is great!')); // "positive"
console.log(classifier.classify('I don\'t want to eat there again.')); // "negative"
console.log(classifier.classify('The torta is epicly bad.')); // "negative"
console.log(classifier.classify('The torta is horribly awesome.')); // "positive"
```


# License

MIT
