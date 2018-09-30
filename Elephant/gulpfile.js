var gulp 			= require('gulp'),
	sass 			= require('gulp-sass'),
	cssnano 		= require('gulp-cssnano');

// Sass
gulp.task('sass', function(){ // Создаем таск "sass"
	 gulp.src('scss/style.scss') // Берем источник
	    .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
	    .pipe(cssnano()) //минифицируем css
	    .pipe(gulp.dest('css')) // Выгружаем результата в папку css
});

// Watch
gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['sass']); // Наблюдение за sass файлами
    // Наблюдение за другими типами файлов
});

gulp.task('default', ['watch']);