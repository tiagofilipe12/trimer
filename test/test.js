'use strict'

const assert = require('assert')
const trimer = require('../')

describe('trim with array', () => {
  it('should trim the string like: result is right', () => {
    const testString = '///000result is right++++____'

    // space character is here in order to test if it doesn't remove from the
    // testString
    const cleanArray = ['/', '0', '+', '_', ' ']
    assert.equal(trimer(testString, cleanArray), 'result is right')
  })
})

describe('trim with string', () => {
  it('should trim the string like: results ir right', () => {
    const testString = '___result is right___'

    // attempts to remove based on a string
    const charRemove = "_"
    assert.equal(trimer(testString, charRemove), 'result is right')
  })
})

describe('trim should fail (array)', () => {
  it('should not trim the string', () => {
    const testString = '///000result is right++++____'

    // space character is here in order to test if it doesn't remove from the
    // testString
    const cleanArray = ['|', '0', '+', '_', ' ']
    assert.notEqual(trimer(testString, cleanArray), 'result is right')
  })
})

describe('trim should fail (string)', () => {
  it('should not trim the string', () => {
    const testString = '___result is right___'

    // attempts to remove based on a string
    const charRemove = "|"
    assert.notEqual(trimer(testString, charRemove), 'result is right')
  })
})
