module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jade: {
      develop: {
        options: {
          data: {
            debug: false
          },
          pretty: true
        },
        files: grunt.file.expandMapping(['app/**/*.jade'], 'server/public/', {
          rename: function(base, path) {
            return base + path.replace(/\.jade$/, '.html');
          }
        })
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.registerTask('build', [
    'jade:develop'
  ]);

  grunt.registerTask('default', ['build']);
}
