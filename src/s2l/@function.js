module.exports = {
  pattern: /(@function\s)|(@return)/gi,
  replacement: (match, func) => (func ? '.function-' : 'return:'),
  order: 1
};
