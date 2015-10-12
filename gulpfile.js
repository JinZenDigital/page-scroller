var gulp = require('gulp');
var babel = require('gulp-babel');
var webpack = require("webpack");

gulp.task('babel', function () {
  return gulp.src(['public/js-src/*.js','public/js-src/**/*.js'])
    .pipe(babel())
    .pipe(gulp.dest('public/js'));
});

gulp.task('webpack', function(){

});

gulp.task('build-watch', function(){
  gulp.watch('public/js-src/*.js', ['babel']);
});
