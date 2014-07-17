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
                    src: ['src/*.js'],
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
        
        simplemocha: {
            options: {
                globals: ['expect'],
                timeout: 3000,
                ignoreLeaks: false,
                ui: 'bdd',
                reporter: 'spec',
                colors: true
            },
            all: { src: ['specs/**/*.js'] }
        }
    });
    
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('should');
  
    grunt.registerTask('default',
                       ['jshint', 'simplemocha', 'concat', 'uglify']);
};