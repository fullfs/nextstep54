var gulp = require('gulp');
var jade = require('gulp-jade');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var config = require('./config.json');

var jadePath = null;

gulp.task('default', function() {
    gulp.start('buildScss');
    gulp.start('buildJade');
    watch('./src/scss/*.scss', function () {
    	setTimeout(function() {
            gulp.start('buildScss');
        }, 100)
    });

    watch('./src/**/*.jade', function (file) {
        if (file.path.match(/includes\\/)) {
            jadePath = null;
        } else {
            jadePath = file.path;
        }

        setTimeout(function() {
            gulp.start('buildJade');
        }, 100);
    });
});


gulp.task('buildScss', function() {
    return gulp.src('./src/scss/' + config.cssFilename)
    	// s.pipe(sourcemaps.init())
    	.pipe(sass({
            errLogToConsole: true
        }))
		// s.pipe(sourcemaps.write('./'))
    	.pipe(gulp.dest('./dist/css/'));
});


gulp.task('buildJade', function() {
    return gulp.src(jadePath || './src/*.jade')
	    .pipe(jade({
	    	locals: {},
	    	pretty: '    '
	    }))
	    .pipe(gulp.dest('./dist/'));
});


