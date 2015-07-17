var html2hscript = require('./lib/html2hscript');

module.exports = function (grunt) {
  grunt.registerMultiTask('html2hscript', '', function() {
    var dest = this.data.dest;

    var files = grunt.file.expand(this.data.files);
    files.forEach(function(file) {
      html2hscript.execute(grunt, file, dest);
    });
  });
};