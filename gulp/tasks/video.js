export const video = () => {
  return app.gulp
    .src(app.path.src.video)
    .pipe(app.plugins.newer(app.path.build.video))
    .pipe(app.gulp.dest(app.path.build.video));
};
