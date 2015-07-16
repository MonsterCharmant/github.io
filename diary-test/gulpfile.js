var gulp = require("gulp");
var uglify = require("gulp-uglify");
var jshint = require("gulp-jshint");
var concat = require("gulp-concat");

var gulpLoadPlugins = require("gulp-load-plugins");
var plugins = gulpLoadPlugins();

var less = require("gulp-less");
var livereload  = require("gulp-livereload");
var watch = require("gulp-watch");

var browserSync = require('browser-sync');

gulp.task("minify", function(){
	
	gulp.src("js/app.js")
		.pipe(uglify())
		.pipe(gulp.dest('build'));
		
	console.log("minify!");
	
});

gulp.task("js",["minify"],function(){
	/*
	return gulp.src("js/*.js")
		.pipe(jshint())
		.pipe(jshint.reporter("default"))
		.pipe(uglify())
		.pipe(concat("app.js"))	
		.pipe(gulp.dest("build"));
		*/
		return gulp.src("js/**/*.js")
			.pipe(plugins.jshint())
			.pipe(plugins.jshint.reporter("default"))
			.pipe(plugins.uglify())
			.pipe(plugins.concat("app.js"))
			.pipe(gulp.dest("build"));
			
});

gulp.task("css",function(){
	console.log("hello world!");
});

gulp.task("less",function(){
	gulp.src("less/*.less")
		.pipe(watch())
		.pipe(less())
		.pipe(gulp.dest("css"))
		.pipe(livereload());
	
});

gulp.task('browser-sync', function () {
   var files = [
      'app/**/*.html',
      'app/assets/css/**/*.css',
      'app/assets/imgs/**/*.png',
      'app/assets/js/**/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './app'
      }
   });
});

gulp.task("default",["js", "css"],function(){
	
	
});