var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var autoprefixer = require('gulp-autoprefixer');


var SOURCEPATHS = {
    sassSource: 'src/scss/**/*.scss',
    htmlSource: 'src/*.html',
    jsSource: 'src/js/*.js'
}

var DESTINATIONPATH = {
    root: 'app/',
    css: 'app/css',
    js: 'app/js/'
}

gulp.task('sass', function(){
   return gulp.src(SOURCEPATHS.sassSource)
   .pipe(autoprefixer())
   .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest(DESTINATIONPATH.css));
});

gulp.task('script',function(){
   gulp.src(SOURCEPATHS.jsSource)
   .pipe(gulp.dest(DESTINATIONPATH.js))
});

gulp.task('copyHtml', function(){
    gulp.src(SOURCEPATHS.htmlSource)
    .pipe(gulp.dest(DESTINATIONPATH.root))
});

gulp.task('server', ['sass'], function(){
    browserSync.init([DESTINATIONPATH.css + '/*.css', DESTINATIONPATH.root + '/*.html', DESTINATIONPATH.js + '/*.js'], {
        server: {
            baseDir: DESTINATIONPATH.root
        }
    })
});


gulp.task('watch', ['server', 'copyHtml' ,'script'], function(){
   gulp.watch([SOURCEPATHS.sassSource], ['sass']);
   gulp.watch([SOURCEPATHS.htmlSource], ['copyHtml']);
    gulp.watch([SOURCEPATHS.jsSource],['script']);
});


gulp.task('default', ['watch']);