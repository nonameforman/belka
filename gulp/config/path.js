// Получаем имя папки проекта
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build: {
    jsPlugins: `${buildFolder}/js/libraries/`,
    stylePlugins: `${buildFolder}/style/`,
    js: `${buildFolder}/js`,
    jsThanks: `${buildFolder}/js`,
    styleMain: `${buildFolder}/`,
    stylePages: `${buildFolder}/pages/`,
    html: `${buildFolder}/`,
    htmlPages: `${buildFolder}/pages/`,
    files: `${buildFolder}/php/`,
    images: `${buildFolder}/images/`,
    fonts: `${buildFolder}/fonts/`,
    formprocessor: `${buildFolder}/`,
    favicon: `${buildFolder}/`,
    BX: `${buildFolder}/bx/`,
  },
  src: {
    jsPlugins: `${srcFolder}/js/libraries/*.min.js`,
    stylePlugins: `${srcFolder}/style/libraries/*.min.css`,
    js: `${srcFolder}/js/app.js`,
    jsThanks: `${srcFolder}/js/appThanks.js`,
    popupData: `${srcFolder}/js/popupData.js`,
    styleMain: `${srcFolder}/style/index.css`,
    stylePages: `${srcFolder}/pages/style.css`,
    html: `${srcFolder}/*.html`,
    htmlPages: `${srcFolder}/pages/*.html`,
    files: `${srcFolder}/php/**/*.*`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/images/**/*.svg`,
    fonts: `${srcFolder}/fonts/**/*.*`,
    formprocessor: `${srcFolder}/formprocessor.js`,
    favicon: `${srcFolder}/favicon.ico`,
    BX: `${srcFolder}/bx/**/*.*`,
  },
  watch: {
    jsPlugins: `${srcFolder}/js/libraries/*.min.js`,
    js: `${srcFolder}/js/**/*.js`,
    style: `${srcFolder}/**/*.css`,
    html: `${srcFolder}/**/*.html`,
    formprocessor: `${srcFolder}/formprocessor.js`,

    files: `${srcFolder}/files/**/*.*`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
  ftp: ``,
};
