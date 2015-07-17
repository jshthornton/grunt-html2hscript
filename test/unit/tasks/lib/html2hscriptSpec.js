var proxyquire = require('proxyquire');
var sinon = require('sinon');

describe('tasks/lib/html2hscript', function() {
  it('Should', function() {
    var callback = sinon.spy(),
        grunt = {};

    var gruntFileMock = sinon.mock({
      read: function() {},
      write: function() {}
    });

    grunt.file = gruntFileMock.object;

    var html2hscript = proxyquire('../../../../tasks/lib/html2hscript', {
      parser: callback
    });

    html2hscript.execute(grunt, 'test.html', 'out');
  });
});