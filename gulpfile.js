var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    packageConfiguration = require('./package.json'),
    libraryName = packageConfiguration.name,
    version = packageConfiguration.version,
    mainFile = packageConfiguration.main;

gulp.task('remove-old-build', function () {
    return gulp.src('./' + libraryName + '*.min.js')
        .pipe(clean());
});

gulp.task('build', function () {
    return gulp.src('./' + mainFile)
        .pipe(uglify())
        .pipe(rename(libraryName + '-' + version + '.min.js'))
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['remove-old-build', 'build']);