    module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-ngdocs');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.initConfig({
        ngdocs: {
            options: {
                html5Mode: false
            },
            e2e: {
                title:'E2E Page Object API',
                startPage: '/docs/e2e',
                src: ['po/*.po.js', '../node_modules/protractor-core/commons/*.js']
            }
        },
        connect: {
            options: {
                keepalive: true,
                port:8001,
                hostname:'*'
            },
            server: {}
        },
        clean: ['docs']
    });
    grunt.registerTask('default', ['clean', 'ngdocs', 'connect']);
};