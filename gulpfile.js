// Enable ES6 - this will make it automatically transpile required files. See: http://babeljs.io/docs/usage/require/
require('babel/register');

// TEMP fix for this issue: https://github.com/babel/babel/issues/489
Object.getPrototypeOf.toString = function() {return Object.toString();};

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    fs = require('fs'),
    server = require('./server');

gulp.task('babelify', function() {

    browserify({ debug: true })
        .transform(babelify)
        .require("./src/main.js", { entry: true })
        .bundle()
        .on("error", function (err) { console.log("Babelify error : " + err.message); })
        .pipe(fs.createWriteStream("./dist/bundle.js"));

});

gulp.task('sass', function() {

    return gulp.src('./styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./dist'));

});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.js', ['babelify']);
    gulp.watch('./styles/*.scss', ['sass']);
});

gulp.task('server', ['babelify','sass','watch'], function() {
    server.start();
});

gulp.task('default', ['server'], function() {
});
