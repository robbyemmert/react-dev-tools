var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var clean = require('gulp-clean');

var ACTIONS = {
    gulpTask: function(taskName){
        return function(){
            return gulp.start(taskName);
        }
    },
    cleanFiles: function(glob){
        return function(){
            return gulp.src(glob)
            .pipe(clean());
        };
    }
};

gulp.task('js', function(){
    return gulp.src('./src/index.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./dist'))
});

gulp.task('styles', function() {
    return gulp.src('./src/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'))
});

gulp.task('index', function(){
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('assets', function(){
    return gulp.src('./src/assets/**/*')
    .pipe(gulp.dest('./dist/assets'));
});

gulp.task('clean:js', ACTIONS.cleanFiles('./dist/*.js'));
gulp.task('clean:styles', ACTIONS.cleanFiles('./dist/*.css'));
gulp.task('clean:index', ACTIONS.cleanFiles('./dist/index.html'));
gulp.task('clean:assets', ACTIONS.cleanFiles('./dist/assets/**/*'));

gulp.task('rebuild:js', ['clean:js'], ACTIONS.gulpTask('js'));
gulp.task('rebuild:styles', ['clean:styles'], ACTIONS.gulpTask('styles'));
gulp.task('rebuild:assets', ['clean:assets'], ACTIONS.gulpTask('assets'));

gulp.task('build', ['js', 'styles', 'index', 'assets'], function(){
    console.log('build completed');
});

gulp.task('watch', ['build'], function(){
    var sassGlob = ['./src/**/*.scss', './src/**/*.css'];
    var jsGlob = ['./src/**/*.js', './src/**/*.jsx'];
    var indexGlob = './src/index.html';
    var assetsGlob = './src/assets/**/*';

    gulp.src(sassGlob)
    .pipe(watch(sassGlob))
    .on('unlink', ACTIONS.gulpTask('rebuild:styles'))
    .on('change', ACTIONS.gulpTask('styles'))
    .on('add', ACTIONS.gulpTask('styles'))

    gulp.src(jsGlob)
    .pipe(watch(jsGlob))
    .on('unlink', ACTIONS.gulpTask('rebuild:js'))
    .on('change', ACTIONS.gulpTask('js'))
    .on('add', ACTIONS.gulpTask('js'))

    gulp.src(indexGlob)
    .pipe(watch(indexGlob))
    .on('unlink', ACTIONS.gulpTask('clean:index'))
    .on('change', ACTIONS.gulpTask('index'))
    .on('add', ACTIONS.gulpTask('index'))

    gulp.src(assetsGlob)
    .pipe(watch(assetsGlob))
    .on('unlink', ACTIONS.gulpTask('rebuild:assets'))
    .on('change', ACTIONS.gulpTask('assets'))
    .on('add', ACTIONS.gulpTask('assets'))
});
