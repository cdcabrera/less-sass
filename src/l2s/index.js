/*
const glob = require('glob');
const files = glob.sync(`${__dirname}/replacements/** /*.js`);

console.log(files);
*/
const fs = require('fs');
const dir = __dirname + '/replacements/';

const replacements = () => fs.readdirSync(dir).map(file => require(dir + file));

const l2s = src =>
  [src].concat(replacements()).reduce(function(source, item) {
    return source.replace(item.pattern, item.replacement);
  });

module.exports = l2s;
