export const stylePlugins = () => {
  return app.gulp
    .src(app.path.src.stylePlugins)
    .pipe(app.gulp.dest(app.path.build.stylePlugins));
};
