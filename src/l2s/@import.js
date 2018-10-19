/* @IMPORT
  @import "*.less";
  TO =====>
  @import "*";
 */
module.exports = {
  pattern: /@import\s*["|'](.*).less["|']/gi,
  replacement: (match, filepath) => `@import '${filepath}'`,
  order: 2
};
