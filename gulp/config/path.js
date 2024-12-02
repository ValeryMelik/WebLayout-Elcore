import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    root: `${buildFolder}/`,
    style: `${buildFolder}/style`,
    js: `${buildFolder}/js`,
    img: `${buildFolder}/img`,
    video: `${buildFolder}/video`,
    font: `${buildFolder}/fonts`,
    all: `${buildFolder}/**.*`,
  },

  src: {
    root: `${srcFolder}/components/`,
    layout: `${srcFolder}/components/*.pug`,
    style: `${srcFolder}/components/*.scss`,
    script: `${srcFolder}/js/**/*.js`,
    img: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
    video: `${srcFolder}/assets/video/**/*`,
    svg: {
      row: `${srcFolder}/assets/img/svg/row/*.svg`,
      ready: `${srcFolder}/assets/img/svg/ready/*.svg`,
      handled: `${srcFolder}/assets/img/svg/handled/`,
    },
    font: {
      woff2: `${srcFolder}/assets/fonts/*.woff2`,
      ttf: `${srcFolder}/assets/fonts/*.ttf`,
    },
  },

  watch: {
    style: `${srcFolder}/**/*.scss`,
    layout: `${srcFolder}/**/*.pug`,
    script: `${srcFolder}/js/*.js`,
    img: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
    video: `${srcFolder}/assets/video/**/*.{mp4}`,
    svg: `${srcFolder}/assets/img/svg/**/*.svg`,
    font: `${srcFolder}/assets/fonts/**/*.*`,
  },

  clean: [buildFolder, `${srcFolder}/img/svg/handled/`],

  buildFolder,
  srcFolder,
  rootFolder,
};
