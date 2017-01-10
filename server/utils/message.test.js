var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');


describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var msg = generateMessage('ilari', 'test');
    expect(msg.from).toBe('ilari');
    expect(msg.text).toBe('test');
    expect(msg.createdAt).toExist();
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var msg = generateLocationMessage('ilari', 25, 20);
    expect(msg.from).toBe('ilari');
    expect(msg.url).toBe('https://www.google.com/maps?q=25,20');
    expect(msg.createdAt).toExist();
  });
});
