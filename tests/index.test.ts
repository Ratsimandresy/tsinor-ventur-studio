import type * as TestFunction from '../src/index';

const { getIndicesOfTheSumTwoNumbers } = jest.requireActual<typeof TestFunction>('../src/index.ts');

describe('getIndicesOfTheSumTwoNumbers', () => {
	test('getIndicesOfTheSumTwoNumbers should return the sum of two numbers', () => {
		const result = getIndicesOfTheSumTwoNumbers([1,2,3,4,5], 3);
		expect(result).toEqual([0,1]);
	});
});
