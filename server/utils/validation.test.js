var expect = require('expect');
var {isRealString} = require('./validation');


describe('generateMessage', () => {
  it('should reject non-string values', () => {
    var res = isRealString(2);
    expect(res).toBe(false);
    var res2 = isRealString({test: 'moi'});
    expect(res2).toBe(false);
  });

  it('should reject strings with only spaces', () => {
    var res = isRealString('  ');
    expect(res).toBe(false);
  });

  it('should allow strings with non-space character in it', () => {
    var res = isRealString('Valid string');
    expect(res).toBe(true);
  });
});
