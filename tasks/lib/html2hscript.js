var parser = require('html2hscript');
var path = require('path');

module.exports = {
  parse: function() {
    return parser.apply(null, arguments);
  },

  write: function(grunt, file, hscript) {
    return grunt.file.write(file, hscript);
  },

  read: function(grunt, file) {
    return grunt.file.read(file);
  },

  inputFileNameFactory: function(file) {
    return file;
  },

  outputFileNameFactory: function(dest, file) {
    return path.join(dest, file) + '.js';
  },

  execute: function(grunt, file, dest) {
    var html = this.read(grunt, this.inputFileNameFactory(file));
    this.parse(html, function(err, hscript) {
      this.write(grunt, this.outputFileNameFactory(dest, file), hscript);
    }.bind(this));
  }
};