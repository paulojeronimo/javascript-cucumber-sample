const { Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert')

const isItFriday = today => today === 'Friday' ? 'TGIF' : 'Nope'

Given('today is {string}', givenDay => {
  this.today = givenDay;
})

When('I ask whether it\'s Friday yet', () => {
	this.actualAnswer = isItFriday(this.today)
})

Then('I should be told {string}', expectedAnswer => {
	assert.equal(this.actualAnswer, expectedAnswer)
})
