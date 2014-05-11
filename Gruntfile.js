module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      js: {
        files: [
          { src: ['app/**/*.js'], dest: 'server/public/', filter: 'isFile' }
        ]
      }
    },
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
    },
    watch: {
      jade: {
        files: ['app/**/*.jade'],
        tasks: ['jade:develop']
      },
      js: {
        files: ['app/**/*.js'],
        tasks: ['copy:js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', [
    'copy:js',
    'jade:develop',
  ]);

  grunt.registerTask('server', ['build', 'watch']);

  grunt.registerTask('default', ['build']);
}
