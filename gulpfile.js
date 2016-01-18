var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var clean = require('gulp-clean');

gulp.task('js', function(){
    return gulp.src('./src/index.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./dist'))
})

gulp.task('styles', function() {
    return gulp.src('./src/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('clean:js', function(){
    return gulp.src('./dist/*.js')
    .pipe(clean());
})

gulp.task('clean:styles', function(){
    return gulp.src('./dist/*.css')
    .pipe(clean());
})

gulp.task('rebuild:js', ['clean:js'], function(){
    return gulp.start('js');
})

gulp.task('rebuild:styles', ['clean:styles'], function(){
    return gulp.start('styles');
})

gulp.task('build', ['js', 'styles'], function(){
    console.log('build completed');
})

gulp.task('watch', ['build'], function(){
    var sassGlob = './src/**/*.scss';
    var jsGlob = './src/**/*.js';

    gulp.src(sassGlob)
    .pipe(watch(sassGlob))
    .on('unlink', function(){
        gulp.start('rebuild:styles');
    })
    .on('change', function(){
        gulp.start('styles');
    })
    .on('add', function(){
        gulp.start('styles');
    })

    gulp.src(jsGlob)
    .pipe(watch(jsGlob))
    .on('unlink', function(){
        gulp.start('rebuild:js');
    })
    .on('change', function(){
        gulp.start('js');
    })
    .on('add', function(){
        gulp.start('js');
    })
})
