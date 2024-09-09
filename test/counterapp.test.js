import { increment, decrement } from '../src/counter';

test('increment function', () => {
  expect(increment(0)).toBe(1);
  expect(increment(1)).toBe(2);
});


test('decrement function', () => {
  expect(decrement(0)).toBe(0); 
  expect(decrement(1)).toBe(0);
});
