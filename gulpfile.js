var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


var SOURCEPATHS = {
    sassSource: 'src/scss/app.scss'
}

var DESTINATIONPATH = {
    root: 'app/',
    css: 'app/css',
    js: 'app/js'
}

gulp.task('sass', function(){
   return gulp.src(SOURCEPATHS.sassSource)
   .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
   .pipe(gulp.dest(DESTINATIONPATH.css));
});


gulp.task('server', ['sass'], function(){
    browserSync.init([DESTINATIONPATH.css + '/*.css', DESTINATIONPATH.root + '/*.html', DESTINATIONPATH.js + '/*.js'], {
        server: {
            baseDir: DESTINATIONPATH.root
        }
    })
});


gulp.task('watch', ['server'], function(){
   gulp.watch([SOURCEPATHS.sassSource], ['sass']) 
});


gulp.task('default', ['watch']);