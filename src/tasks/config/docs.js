/*******************************
             Docs
*******************************/

/* Paths used for "serve-docs" and "build-docs" tasks */
module.exports = {
  base: '',
  globs: {
    eco: '**/*.html.eco'
  },
  paths: {
    clean: '../docs/out/dist/',
    source: {
      config      : 'semantic/theme.config',
      definitions : 'semantic/definitions/',
      site        : 'semantic/site/',
      themes      : 'semantic/themes/'
    },
    output: {
      examples     : '../docs/out/examples/',
      less         : '../docs/out/semantic/',
      metadata     : '../docs/out/',
      packaged     : '../docs/out/dist/',
      uncompressed : '../docs/out/dist/components/',
      compressed   : '../docs/out/dist/components/',
      themes       : '../docs/out/dist/themes/'
    },
    template: {
      eco: '../docs/server/documents/'
    },
  }
};
