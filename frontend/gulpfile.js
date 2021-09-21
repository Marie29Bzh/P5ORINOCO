'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var ejs = require('gulp-ejs');
var sourcemaps = require("gulp-sourcemaps");



sass.compiler = require('node-sass');




function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./src/**/*.scss").on("change", makeCss);
  gulp.watch("./src/**/*.html").on("change", makePage);
  gulp.watch("./").on("change", browserSync.reload);
};


function makeCss() {
  return gulp.src(['./src/base.scss', './src/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(concat('style.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
}


function makePage(){
  return gulp.src('./src/pages/**/*.html')
    .pipe(ejs())
    .pipe(gulp.dest('./'))
}

module.exports.makeCss = makeCss;
module.exports.makePage = makePage;
module.exports.watch = watch;