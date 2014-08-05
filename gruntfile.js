module.exports = function(grunt) {
    
    var banner = '// Base Jump <%= pkg.version %>\n';
    banner += '// ==========================\n';
    banner += '// **A leap forward for your JavaScript objects.**\n\n';
    
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        
        jshint: {
            files: ['gruntfile.js', 'src/**/*.js']
        },
        
        concat: {
            options: {
                separator: '\n\n',
                banner: banner
            },
            build: {
                files: [{
                    src: ['src/**/*.js'],
                    dest: 'dist/<%= pkg.name %>.js'
                }]
            }
        },
        
        uglify: {
            options: {
                banner: banner   
            },
            build: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.js']
                }
            }
        },
        
        jasmine: {
            test: {
                src: 'src/**/*.js',
                options: {
                    specs: 'specs/**/*.js',
                    keepRunner: true,
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'coverage/coverage.json',
                        report: [
                            {
                                type: 'text-summary'                                
                            },
                            {
                                type: 'html',
                                options: {
                                    dir: 'coverage'
                                }
                            }
                        ],
                        thresholds: {
                            lines: 75,
                            statements: 75,
                            branches: 75,
                            functions: 90
                        }
                    }
                }
            }
        },
        
        docco: {
            debug: {
                src: ['dist/base-jump.js'],
                options: {
                    output: 'docs/'  
                }
            }
        }
    });
        
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-docco');
  
    grunt.registerTask('default', ['jshint', 'jasmine', 'concat', 'uglify', 'docco']);
};