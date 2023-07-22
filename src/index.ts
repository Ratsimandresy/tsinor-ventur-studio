console.log('compiled successfully');

export const getIndicesOfTheSumTwoNumbers = (nums: number[], target: number): number[] | undefined => {
	const numIndex: { [key: number]: number } = {};
	let indicesResult: number[] = [];

	for (let i = 0; i < nums.length; i++) {
		const currentNumber = nums[i];
		const complement = target - currentNumber;

		if (numIndex.hasOwnProperty(complement)) {
			return (indicesResult = [numIndex[complement], i]);
		}

		if (numIndex.hasOwnProperty(currentNumber)) {
			continue;
		}

		numIndex[currentNumber] = i;
	}
	return indicesResult;
};
