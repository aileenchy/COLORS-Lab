const { formatColor } = require('../Public/js/utils');

test('formats color correctly', () => {
  expect(formatColor('  RED ')).toBe('red');
});
