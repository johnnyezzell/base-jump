module.exports = function(grunt) {
    
    var banner = '/*\n<%= pkg.name %> <%= pkg.version %>';
    banner += ' - <%= pkg.description %>\n';
    banner += 'Built on <%= grunt.template.today("yyyy-mm-dd") %>\n*/\n';
    
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        
        jshint: {
            files: ['gruntfile.js', 'src/**/*.js']
        },
        
        concat: {
            options: {
                separator: ';\n',
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
                'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.js']
            }
        },
        
        jasmine: {
            test: {
                src: 'src/**/*.js',
                options: {
                    specs: 'specs/**/*.js'
                }
            }
        }
    });
        
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
  
    grunt.registerTask('default', ['jshint', 'jasmine', 'concat', 'uglify']);
};