var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    browserSync   = require('browser-sync'),
    plumber       = require('gulp-plumber'),
    cssnano       = require('gulp-cssnano'),
    imagemin      = require('gulp-imagemin'),
    spritesmith   = require("gulp.spritesmith");


gulp.task('sass', function() {
    return gulp.src([
            'dev/build/scss/*.scss',
        ])
        .pipe(plumber())
        .pipe(sass({
            'include css': true
        }))


    .pipe(sass().on('error', sass.logError))
        //.pipe(autoprefixer(['last 2 version']))
        .pipe(browserSync.reload({
            stream: true
        }))
        //.pipe(cssnano())
        .pipe(gulp.dest('dev/app/css/'))
});

// Browsersync
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: './'
        },
    });
});

//sprite
gulp.task('spritemade', function() {
    var spriteData =
        gulp.src('dev/build/images/sprite/*.*')
        .pipe(spritesmith({
            imgName: '../images/sprite/sprite.png',
            cssName: '_sprite.scss',
            padding: 15,
            cssFormat: 'scss',
            algorithm: 'binary-tree',
            // cssTemplate: 'stylus.template.mustache',
            cssVarMap: function(sprite) {
                sprite.name = 's-' + sprite.name;
            }
        }));

    spriteData.img.pipe(gulp.dest('dev/app/images/')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('dev/build/scss/')); // путь, куда сохраняем стили
});

// Оптимизация изображений
gulp.task('images', function() {
    return gulp.src(['dev/build/images/**/*', '!dev/build/images/sprite/*.*'])
        // .pipe(cache(imagemin({
        //     progressive: true,
        //     use: [pngquant()]
        //
        // })))
        .pipe(gulp.dest('dev/app/images'));
});

// Слежение
gulp.task('watch', ['sass', 'browserSync'], function() {
    gulp.watch('dev/build/scss/*.scss', ['sass']);
    gulp.watch('*.html', browserSync.reload);
});

// Дефолтный таск
gulp.task('default', ['watch']);
