module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                jquery: true,
                smarttabs: true,
                curly: true,
                immed: true,
                latedef: true,
                noarg: true,
                quotmark: 'single',
                undef: true,
                unused: true,
                strict: true,
                trailing: true,
                globals: {
                    window: true,
                    document: true,
                    navigator: true,
                    define: true
                }
            },
            all: ['src/**/*.js']
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.title %> <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>) | Florian Finke - <%= pkg.homepage %> | Free to use under terms of MIT license */\n'
            },

            all: {
                files: {
                    'dist/jquery.responsivetext.min.js': 'src/jquery.responsivetext.js'
                }
            }
        }
    });

    //Dependencies.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Tasks.
    grunt.registerTask('default', ['jshint', 'uglify']);
};
