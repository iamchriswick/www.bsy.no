'use strict'

export const dirs = {
  src: 'src',
  html: 'html',
  dist: 'dist'
};

export const paths = {
  local: `./${dirs.dist}`,
  styles: {
    src: `${dirs.src}/scss/**/*.scss`,
    html: `${dirs.html}/**/*.html`,
    partials: `${dirs.html}/partials/**/*.html`,
    dist: `${dirs.dist}/css`
  },
  scripts: {
    src: `${dirs.src}/js/**/*.js`,
    file: `scripts`,
    dist: `${dirs.dist}/js`
  },
  images: {
    src: `${dirs.src}/img/**/*`,
    dist: `${dirs.dist}/img`
  },
  animations: {
    src: `${dirs.src}/animations/**/*`,
    dist: `${dirs.dist}/animations`
  },
  vendor: {
    src: `${dirs.src}/js/vendor/**/*`,
    dist: `${dirs.dist}/js/vendor`
  },
  fonts: {
    src: `${dirs.src}/fonts/**/*`,
    dist: `${dirs.dist}/fonts`
  },
  json: {
    src: `${dirs.src}/json/**/*`,
    dist: `${dirs.dist}/json`
  },
  toolkits: {
    src: `${dirs.src}/toolkits/**/*`,
    dist: `${dirs.dist}/toolkits`
  },
	icons: {
    src: `${dirs.src}/icons/**/*`,
    dist: `${dirs.dist}/icons`
  },
  html: {
    src: `${dirs.html}/**/*.html`,
    partials: `partials/**/*.html`,
    dist: `${dirs.dist}`
  },
  favicons: {
    src: `${dirs.src}/img/fav/*.png`,
    html: `../../../partials/_favicons.html`,
    path: `img/fav/`,
    dist: `${dirs.dist}/img/fav`
  }
};

export const favicons = {
  name: "Bsy.no",
  desc: "Bransjeforeningen for Systeminnredning i Yrkesbygg",
  dev_name: "KFM",
  dev_url: "https://kungfumedia.no/",
  domain: `https://www.bsy.no/`,
  bg: "#dddddd",
  display: "standalone",
  orientation: "portrait",
  start_url: "/?homescreen=1",
  vers: 1.0
};
