import type * as TestFunction from '../src/index';
import type * as TestCases from '../src/useCases';

const { getIndicesOfTheSumTwoNumbers } = jest.requireActual<typeof TestFunction>('../src/index.ts');
const { simpleCases,  moreThanTwoNumbersOccurenceCases} = jest.requireActual<typeof TestCases>('../src/useCases.ts');

describe('getIndicesOfTheSumTwoNumbers', () => {
	test.each(simpleCases)('should return the correct indices of the $name', ({ inputs, output }) => {
		const { nums, target } = inputs;
		const result = getIndicesOfTheSumTwoNumbers(nums, target);

		expect(result).toEqual(output);
	});

    test.each(moreThanTwoNumbersOccurenceCases)('should return the correct indices when we have $name', ({ inputs, output }) => {
		const { nums, target } = inputs;
		const result = getIndicesOfTheSumTwoNumbers(nums, target);

		expect(result).toEqual(output);
	});

});
