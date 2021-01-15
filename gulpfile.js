const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const { watch } = require('fs');

function css() {
    return gulp
        .src('scss/app.scss')
        .pipe(autoprefixer({
            overridebrowserslist : ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            outputStyle: 'expanded',
        }))
        .pipe( gulp.dest('css') );
}

function watchFiles() {
    gulp.watch('scss/*.scss', css)
    gulp.watch('index.html');

}


// Register functions like tasks
// Registrar funciones como tareas
gulp.task('css', css);
gulp.task('watch', gulp.parallel(watchFiles));
