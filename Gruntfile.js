module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true,
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      },
       wiredep: {
        target: {
          src: 'index.html' // point to your HTML file.
        }
      },
       browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/app.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: 'http://localhost:8081/profile/'
                }
            }
        }

    },

    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-font-awesome-vars');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch','browserSync']);
   grunt.loadNpmTasks('grunt-wiredep');

}
