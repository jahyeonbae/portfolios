module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //serve
    serve: {
        options: {
            port: 9000
        }
    },

    less: {
        product: {
            options: {
                paths: ['assets/css'],
                compress:true
            },
            files: {
                './assets/css/style.min.css': './assets/less/import.less'
            }
        },
        dev: {
            options: {
                paths: ['assets/css'],
                dumpLineNumbers:"comments"
            },
            files: {
                './assets/css/style.dev.css': './assets/less/import.less'
            }
        }
    },
    watch: {
          less: {
            files: ['./assets/less/*.less'],
            tasks: ['less'],
            options: {
              spawn: false,
            }
        }
    },
    includes: {
        dist:{
            cwd: 'html', //includes를 시킬 파일이 있는 곳
            src: ['**/*.html'], // Source files
            dest: 'farm_dist', // Destination directory
            options: {
              flatten: true,
              includePath:'html/'
            }
        }
      }
});
    //less
    // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-includes');
  // Default task(s).
  grunt.registerTask('default', ['serve']);

};
