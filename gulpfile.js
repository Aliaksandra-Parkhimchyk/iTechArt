var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cache_bust = require('gulp-cache-bust');
var csscomb = require('gulp-csscomb');
var csslint = require('gulp-csslint');
var cssmin = require('gulp-cssmin');
var csso = require('gulp-csso');
var fixmyjs = require('gulp-fixmyjs');
var htmlhint = require('gulp-htmlhint');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var jshint = require('gulp-jshint');
var jsonlint = require('gulp-jsonlint');
var rigger = require('gulp-rigger');
var sass = require('gulp-sass');
var spritesmith = require('gulp-spritesmith');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');

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
        .pipe(htmlhint())
        .pipe(htmlmin())
        .pipe(cache_bust())
        .pipe(gulp.dest(path.build.html));
});

gulp.task('css:build', function () {
    gulp.src(path.src.css)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(csslint())
        .pipe(cssmin())
        .pipe(csso())
        .pipe(cache_bust())
        .pipe(gulp.dest(path.build.css));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(jshint())
        .pipe(fixmyjs())
        .pipe(uglify())
        .pipe(cache_bust())
        .pipe(gulp.dest(path.build.js));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(spritesmith({
            imgName: 'sprite.png',
            styleName: 'sprite.css',
            imgPath: path.src.img
        }))
        .pipe(gulp.dest(path.build.img));
});

gulp.task('watch', function () {
    watch([path.watch.html], function () {
        gulp.start('html:build');
    });
    watch([path.watch.css], function () {
        gulp.start('css:build');
    });
    watch([path.watch.js], function () {
        gulp.start('js:build');
    });
    watch([path.watch.img], function () {
        gulp.start('image:build');
    });
});

gulp.task('cacheBuster', ['html:build', 'css:build', 'js:build'], function () {
    gulp.src(path.src.html)
        .pipe(cache_bust())
        .pipe(gulp.dest('.'));
});


