module.exports = {
  pattern: /\((.*)!important\)/gi,
  replacement: (match, g1) => `(${g1.trim()}) !important`,
  order: 3
};
