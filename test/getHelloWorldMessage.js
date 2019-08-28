const getHelloWorldMessage = require('../src/getHelloWorldMessage')

const assert = require('chai').assert

describe('getHelloWorldMessage.js', () => {
  it(`getHelloWorldMessage should return a JSON message of 'Hello World!'`, () => {
    const result = getHelloWorldMessage()
    assert.deepEqual(result, { message: 'Hello World!' })
  })
})
