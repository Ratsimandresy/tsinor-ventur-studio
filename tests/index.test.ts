import type * as TestFunction from '../src/index';
import type * as TestCases from '../src/useCases';

const { getIndicesOfTheSumTwoNumbers } = jest.requireActual<typeof TestFunction>('../src/index.ts');
const { useCases } = jest.requireActual<typeof TestCases>('../src/useCases.ts');

describe('getIndicesOfTheSumTwoNumbers', () => {
	test.each(useCases)('should return the correct indices of the $name', ({ inputs, output }) => {
		const { nums, target } = inputs;
		const result = getIndicesOfTheSumTwoNumbers(nums, target);

		expect(result).toEqual(output);
	});

	test('should not use the same number twice', () => {
		const inputs = { nums: [-1, 0, 1, 1, 3, 5, -4, 6], target: 4 };
		const output = [2, 4];
		const result = getIndicesOfTheSumTwoNumbers(inputs.nums, inputs.target);

		expect(result).toEqual(output);
	});
});
