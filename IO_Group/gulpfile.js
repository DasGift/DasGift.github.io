var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    browserSync     = require('browser-sync'),
    concat          = require('gulp-concat'),
    concatCss       = require('gulp-concat-css'),
    imagemin        = require('gulp-imagemin'),
    uglify          = require('gulp-uglify'),
    pump            = require('pump');


// Sass
gulp.task('sass', function() {
    return gulp.src([
            'app/scss/*.scss',
        ])
        //.pipe(plumber())
        .pipe(sass({
            'include css': true
        }))

    .pipe(sass().on('error', sass.logError))
        //.pipe(autoprefixer(['last 2 version']))
        .pipe(browserSync.reload({
            stream: true
        }))
        //.pipe(cssnano())
        .pipe(concatCss('main.css'))
        .pipe(gulp.dest('dist/css/'))
});

// Browsersync
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: './'
        },
    });
});

//imagemin
gulp.task('imagemin', function() {
    return gulp.src('app/image/*')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo(),
      imagemin.optipng({optimizationLevel: 3})
    ]))
    .pipe(gulp.dest('dist/images/'));
});

//JS
gulp.task('compress', function (cb) {
  pump([
        gulp.src('app/js/*.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});


// Слежение
gulp.task('watch', function() {
    gulp.watch('app/scss/*.scss', ['sass']);
    gulp.watch('app/js/*.js', ['compress']);
    gulp.watch('app/image/*.*', ['imagemin']);
    gulp.watch('index.html', browserSync.reload);
});

// Дефолтный таск
gulp.task('default', ['watch', 'browserSync']);