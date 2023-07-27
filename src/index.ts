export const getIndicesOfTheSumTwoNumbers = (nums: number[], target: number): number[] | undefined => {
	const indexMap: Map<number, number> = new Map();
	let indicesResult: number[] = [];

	for (let i = 0; i < nums.length; i++) {
		const currentNumber = nums[i];
		const complement = target - currentNumber;

		if (indexMap.has(complement)) {
			const complementIndex = indexMap.get(complement)!;
			return (indicesResult = [complementIndex, i]);
		}

		if (indexMap.has(currentNumber)) continue;

		indexMap.set(currentNumber, i);
	}
};
