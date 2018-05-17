'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const runSequence = require('run-sequence');
const watch = require('gulp-watch');
const imagemin = require('gulp-imagemin');

gulp.task('sass', function(){
    return gulp.src(`./src/scss/*.scss`)
    .pipe(sass())
    .pipe(gulp.dest(`./build/css`));
});



gulp.task('clean', function(){
    del(`./build/`);
});

gulp.task('watch', function(){
  watch(`./src/scss/*.scss`, function() {
     gulp.start('sass'); 
  });
});

gulp.task('imagemin', function() {
    gulp.src(`./src/img/**/*`)
        .pipe(imagemin())
        .pipe(gulp.dest(`./build/img`))
});

gulp.task('default', function(){
runSequence (
    
    'clean',
    'sass'
)
});