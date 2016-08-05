var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    hint = require('gulp-htmlhint'),
    min = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    rigger = require('gulp-rigger'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    pngquant = require('imagemin-pngquant');

var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/main.js',
        css: 'src/css/main.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        css: 'src/css/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    }
};

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(hint())
        .pipe(min())
        .pipe(gulp.dest(path.build.html));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js));
});

gulp.task('css:build', function () {
    gulp.src(path.src.css)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.css));
});

gulp.task('watch', function () {
    watch([path.watch.html], function (event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.css], function (event, cb) {
        gulp.start('css:build');
    });
    watch([path.watch.js], function (event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function (event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function (event, cb) {
        gulp.start('fonts:build');
    });
});


