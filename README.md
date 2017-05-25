# Naive Bayes classifier

This is a [Naive Bayes classifier](http://en.wikipedia.org/wiki/Naive_Bayes_classifier) implementation written in JavaScript.

I took out the relevant algorithms from the [appratus](https://github.com/NaturalNode/apparatus) and [natural](https://github.com/NaturalNode/natural) modules, and also the [Porter stemmer](https://github.com/NaturalNode/natural/tree/master/lib/natural/stemmers) algorithm. All credit goes to them.

# Demo

[https://lab.miguelmota.com/bayes-classifier](https://lab.miguelmota.com/bayes-classifier)

# Install

```bash
npm install bayes-classifier
```

```bash
bower install bayes-classifier
```

# Usage

```javascript
var BayesClassifier = require('bayes-classifier')
var classifier = new BayesClassifier()

var positiveDocuments = [
  `I love tacos.`,
  `Dude, that burrito was epic!`,
  `Holy cow, these nachos are so good and tasty.`,
  `I am drooling over the awesome bean and cheese quesadillas.`
]

var negativeDocuments = [
  `Gross, worst taco ever.`,
  `The buritos gave me horrible diarrhea.`,
  `I'm going to puke if I eat another bad nacho.`,
  `I'd rather die than eat those nasty enchiladas.`
]

classifier.addDocuments(positiveDocuments, `positive`)
classifier.addDocuments(negativeDocuments, `negative`)

classifier.train()

console.log(classifier.classify(`I heard the mexican restaurant is great!`)) // "positive"
console.log(classifier.classify(`I don't want to eat there again.`)) // "negative"
console.log(classifier.classify(`The torta is epicly bad.`)) // "negative"
console.log(classifier.classify(`The torta is tasty.`)) // "positive"

console.log(classifier.getClassifications(`Burritos are the meaning of life.`))
/*
 [ { label: 'positive', value: 0.22222222222222224 },
   { label: 'negative', value: 0.11111111111111112 } ]
*/
```

Restoring a classifier to avoid re-training data

```javascript
// Storing classifier
var storeFile = `${__dirname}/store.json`
fs.writeFileSync(storeFile, JSON.stringify(classifier))

// ...

// Restoring classifier
var classifier = new BayesClassifier()
var storedClassifier = require(storeFile)
classifier.restore(storedClassifier)
```

# API

#### classifier.addDocument(doc, class)

#### classifier.addDocuments([docs], class)

#### classifier.train()

#### classifier.classify(doc)

#### classifier.getClassifications(doc)

#### classifier.restore(classifier)

# Test

```bash
npm test
```

# License

MIT
