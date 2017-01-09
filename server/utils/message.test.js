var expect = require('expect');
var {generateMessage} = require('./message');


describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var msg = generateMessage('ilari', 'test');
    expect(msg.from).toBe('ilari');
    expect(msg.text).toBe('test');
    expect(msg.createdAt).toExist();
  });
});
