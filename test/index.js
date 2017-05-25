var fs = require('fs')
var test = require('tape')

var BayesClassifier = require('../index')

test(function(t) {
  t.plan(5)

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

  classifier.addDocuments(positiveDocuments, 'positive')
  classifier.addDocuments(negativeDocuments, 'negative')

  classifier.train()

  t.equal(classifier.classify(`I heard the mexican restaurant is great!`), 'positive')
  t.equal(classifier.classify(`I don't want to eat there again.`), 'negative')
  t.equal(classifier.classify(`The torta is epicly bad.`), 'negative')
  t.equal(classifier.classify(`The torta is tasty`), 'positive')

  //console.log(classifier.getClassifications('Burritos are the meaning of life.'));

  var storeFile = `${__dirname}/store.json`

  fs.writeFileSync(storeFile, JSON.stringify(classifier))

  var savedClassifierObject = require(storeFile)

  var restoredClassifier = new BayesClassifier()
  restoredClassifier.restore(savedClassifierObject)
  t.equal(restoredClassifier.classify(`I don't want to eat there again.`), 'negative')


})
