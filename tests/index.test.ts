import type * as TestFunction from '../src/index';
import type * as TestCases from '../src/useCases';

const { getIndicesOfTheSumTwoNumbers } = jest.requireActual<typeof TestFunction>('../src/index.ts');
const { successCases } = jest.requireActual<typeof TestCases>('../src/useCases.ts');

describe('getIndicesOfTheSumTwoNumbers', () => {
	test.each(successCases)(
		'should return the correct indices of the $name',
		({ inputs, output }) => {
			const { nums, target } = inputs;
			const result = getIndicesOfTheSumTwoNumbers(nums, target);

			expect(result).toEqual(output);
		}
	);
});
