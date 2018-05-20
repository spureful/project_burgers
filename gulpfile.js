'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const runSequence = require('run-sequence');
const watch = require('gulp-watch');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const cssunit = require('gulp-css-unit');


gulp.task('sass', function(){
    return gulp.src(`./src/scss/*.scss`)
    .pipe(sass())
	 .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
  
		.pipe(gulp.dest(`./build/css`));
	
});




gulp.task('imagemin', function() {
    gulp.src(`./src/img/**/*`)
        .pipe(imagemin())
        .pipe(gulp.dest(`./build/img`))
});



gulp.task('clean', function(){
    delete(`./build/`);
});

gulp.task('watch', function(){
  watch([`src/scss/*/*.scss`, `src/scss/*.scss`], function() {
     gulp.start('sass'); 
	 
  });
});


gulp.task('default', function(){
runSequence (
    
    'clean',
	  'sass',
	
		
)
});