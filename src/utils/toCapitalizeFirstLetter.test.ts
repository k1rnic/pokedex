import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('should return empty string', () => {
    const result = toCapitalizeFirstLetter('');

    expect(result).toBe('');
  });
  test('should be equal', () => {
    const result = toCapitalizeFirstLetter('qwerty');

    expect(result).toBe('Qwerty');
  });
  test('should convert all letters to lowercase', () => {
    const result = toCapitalizeFirstLetter('qWERTY');

    expect(result).toBe('Qwerty');
  });
  test('should return one symbol', () => {
    const result = toCapitalizeFirstLetter('q');

    expect(result).toBe('Q');
  });
});
