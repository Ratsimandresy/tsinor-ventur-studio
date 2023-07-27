export const getIndicesOfTheSumTwoNumbers = (nums: number[], target: number): number[] | undefined => {
	const indexSet: Set<number> = new Set();
	let indicesResult: number[] = [];

	for (let i = 0; i < nums.length; i++) {
		const currentNumber = nums[i];
		const complement = target - currentNumber;

		if (indexSet.has(complement)) {
			const complementIndex = nums.indexOf(complement);
			return (indicesResult = [complementIndex, i]);
		}

		if (indexSet.has(currentNumber)) continue;

		indexSet.add(currentNumber);
	}
};
