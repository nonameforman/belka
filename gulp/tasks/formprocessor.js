export const formprocessor = () => {
  return app.gulp
    .src(app.path.src.formprocessor)
    .pipe(app.gulp.dest(app.path.build.formprocessor));
};
