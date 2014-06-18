var expect = require('chai').expect;

it('should compare strings (chai)', function() {
  try {
    expect('a\nb\n').to.equal('a\nb\nc\nd');
  } catch (err) {
    // string diffs broken because err.showDiff === true
    // err.showDiff = false;  // diffs just fine
    throw err;
  }
});

it('should compare strings (raw)', function() {
  var err = new Error('bad stuff');
  err.expected = 'a\nb\nc\nd';
  err.actual = 'a\nb\n';
  err.showDiff = true;  // breaks string diffs
  // err.showDiff = false;  // diffs just fine
  throw err;
});
