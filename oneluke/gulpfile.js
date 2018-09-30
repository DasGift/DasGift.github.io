var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    spritesmith  = require('gulp.spritesmith');

//sass
gulp.task('sass', function () {
    gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({//подключаем браузер синк, дял автоматического обновления всех браузеров после изменения сss файлов
            stream: true
        }))
});

//sprite
gulp.task('sprite', function () {
    var spriteData = gulp.src('images/sprite/*.png')
        .pipe(spritesmith({
            imgName: '../sprite/sprite.png',
            cssName: 'sprite.scss',
            algorithm: 'top-down'
        }));
    spriteData.img.pipe(gulp.dest('sprite'));
    spriteData.css.pipe(gulp.dest('sass'));
});

//browser-sync
gulp.task('browserSync', function(){
    browserSync({
        server: {
            baseDir: './'
        },
        notify: false
    });
});

//watch
gulp.task('watch',['sass'], function(){
  gulp.watch('sass/*.scss', ['sass']);
  gulp.watch('*.html', browserSync.reload);
});

//default
gulp.task('default', ['watch', 'browserSync', 'sprite']);
