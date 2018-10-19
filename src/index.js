const glob = require('glob');
// const fileDirectory = `${__dirname}/../data/`;
const directoryLess2Sass = `${__dirname}/l2s/`;
const directorySass2Less = `${__dirname}/s2l/`;

/**
 * Class LessSass
 */
class LessSass {
  constructor({ directoryLess2Sass, directorySass2Less }) {
    this.directoryLess2Sass = directoryLess2Sass;
    this.directorySass2Less = directorySass2Less;
  }

  static loadExpressions(directory) {
    return glob.sync(`${directory}**/*.js`).map(file => require(file));
  }

  static parse(src, dir) {
    const expressions = LessSass.loadExpressions(dir);

    // console.log(expressions);

    return [src].concat(expressions).reduce(function(source, item) {
      return source.replace(item.pattern, item.replacement);
    });
  }

  // access directly
  parseL2s(src = null, output = null) {
    console.log(output);
    return LessSass.parse(src, this.directoryLess2Sass);
  }

  // access directly
  parseS2l(src = null, output = null) {
    console.log(output);
    return LessSass.parse(src, this.directorySass2Less);
  }

  parse(src, output) {
    console.log('parse', this, src, output);

    // determine file type based on extension, load parser
  }
}

// export { LessSass as default };
// module.exports = LessSass;

const test = new LessSass({
  directoryLess2Sass,
  directorySass2Less
});

// test.parseL2s();
// test.parseS2l();
test.parse();

/*
const fs = require('fs');
const dir = __dirname + '/replacements/';

const replacements = () => fs.readdirSync(dir).map(file => require(dir + file));

const l2s = src =>
  [src].concat(replacements()).reduce(function(source, item) {
    return source.replace(item.pattern, item.replacement);
  });

module.exports = l2s;
*/

/*
const fs = require('fs');
const glob = require('glob');
const _sortBy = require('lodash/sortBy');
const dir_l2s = `${__dirname}/l2s/replacements/`;
const dir_s2l = `${__dirname}/s2l/replacements/`;
*/

/*
const requireReplacements = (directory, options) => {
  const filenames = fs.readdirSync(dir);

  return _sortBy(
    filenames
      .filter(function(filename) {
        return options.excludes.indexOf(filename.split('.js').join('')) === -1;
      })
      .map(function(filename) {
        return require(directory + filename);
      })
      .concat(options.replacements),
    'order'
  );
};
*/

/*
module.exports = {
  l2s: options => requireReplacements(dir_l2s, options),
  s2l: options => requireReplacements(dir_s2l, options)
};
*/
