var gulp = require('gulp');

var jshint = require('gulp-jshint');
var beautify = require('gulp-beautify');
var jslint = require('gulp-jslint');
var stylish = require('jshint-stylish');
var jasmine = require('gulp-jasmine');

gulp.task('beautify', function() {
  gulp.src('./lib/*.js')
    .pipe(beautify({indentSize: 2}))
    .pipe(gulp.dest('./lib/'))
});

gulp.task('jslint', function () {
    return gulp.src(['./lib/*.js'])
            .pipe(jslint({ }))
            .pipe(jshint.reporter(stylish))
});

gulp.task('jshint', function() {
  gulp.src('./lib/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('jasmine', () =>
    gulp.src('spec/*.js')
        .pipe(jasmine())
);


gulp.task('default', ['beautify', 'jslint', 'jshint', 'jasmine'], function() {
});
