const { Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert')

const isItFriday = today => {
	// We'll leave the implementation blank for now
}

Given('today is Sunday', () => {
	this.today = 'Sunday'
})

When('I ask whether it\'s Friday yet', () => {
	this.actualAnswer = isItFriday(this.today)
})

Then('I should be told {string}', expectedAnswer => {
	assert.equal(this.actualAnswer, expectedAnswer)
})
