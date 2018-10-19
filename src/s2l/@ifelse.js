module.exports = {
  pattern: /@if\s([()\w\s$=><!-]+)([^]+?)@else/gi,
  replacement: (match, condition, ifBody) => {
    const newCondition = condition.replace('==', '=').trim();

    return `& when (${newCondition}) ${ifBody.trim()}\n& when not (${newCondition})`;
  },
  order: 0
};
