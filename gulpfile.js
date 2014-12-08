var gulp = require('gulp');
var karma = require('gulp-karma');
//var httpServer = require('http-server');

var tests = ['test/spec/*.js', 'test/spec/**/*.js'];

// Concatenate JS - TESTS
//gulp.task('tests', function () {
//    return gulp.src(tests)
//        .pipe(concat('tests-all.js'))
//        .pipe(gulp.dest('test/dist'))
//});

gulp.task('tests', function() {
  return gulp.src(tests)
    .pipe(karma({
      configFile: 'test/karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err){
      throw err;
    });
});