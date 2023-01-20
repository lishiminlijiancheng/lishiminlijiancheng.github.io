const gulp = require('gulp');
const gulpSass=require('gulp-sass')(require('sass'));//sass->css
const minifyCSS= require('gulp-minify-css');//css代码压缩
gulp.task('sass', function(done){
    console.log('hahaha')
     gulp.src('components/css/*.scss')
        .pipe(gulpSass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'))
        done()
})