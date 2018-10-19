module.exports = {
  pattern: /@for\s([\w$]+)\sfrom\s([\w$]+)\s(through|to)\s(.*)\s\{((?:[^}{]+|\{(?:[^}{]+|\{[^}{]*\})*\})*)\}/gi,
  replacement: (match, iterator, initial, through, to, body) => {
    const operator = through === 'through' ? '<=' : '<';

    return (
      `.for(${iterator}: ${initial}) when (${iterator} ${operator} ${to}) {` +
      `${body.replace(new RegExp('(?:#{)?' + iterator + '}?', 'gi'), '@{' + iterator + '}')}` +
      `  .for((${iterator} + 1));
}
.for();`
    );
  },
  order: 0
};
