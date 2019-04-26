let gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    concat= require('gulp-concat'),
    compass= require('gulp-compass');

let sassSources = ['components/sass/style.scss'];
let coffee_Sources = ['components/coffee/*.coffee'];
let jsSources= ['components/scripts/pixgrid.js',
                'components/scripts/rclick.js', 
                'components/scripts/tagline.js', 
                'components/scripts/template.js'];

    

gulp.task('coffee', done =>{

    gulp.src(coffee_Sources)
    .pipe(coffee({bare: true})
        .on('error', gutil.log)
    )
    .pipe(gulp.dest('components/scripts'))
    done();
});

gulp.task('js', done =>{

    gulp.src(jsSources)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('builds/development/js'))
    done();
});

gulp.task('compass', done =>{

    gulp.src(sassSources)
    .pipe(compass({
        sass: 'components/sass',
        image: 'builds/development/images',
        style: 'expanded'
    }))
        .on('error',gutil.log )
    .pipe(gulp.dest('builds/development/css'))
    done();
});