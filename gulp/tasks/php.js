export const php = () => {
  return (
    app.gulp
      .src(app.path.src.php)
      .pipe(app.gulp.dest(app.path.build.root))
  );
};
