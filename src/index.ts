console.log('compiled successfully');

export const getIndicesOfTheSumTwoNumbers = (nums: number[], target: number): number[] => {
	const numIndex: { [key: number]: number } = {};

	for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i];
        const complement = target - currentNumber;

        if(numIndex.hasOwnProperty(complement)) {
            return [numIndex[complement], i]
        }

        numIndex[currentNumber] = i;
    }

	return [0, 1];
};
