type Inputs = {
	nums: number[];
	target: number;
};

type Case = {
	name: string;
	inputs: Inputs;
	output: number[];
};

export const useCases: Case[] = [
	{ name: 'example 1', inputs: { nums: [2, 7, 11, 15], target: 9 }, output: [0, 1] },
	{ name: 'example 2', inputs: { nums: [3, 2, 4], target: 6 }, output: [1, 2] },
	{ name: 'example 3', inputs: { nums: [3, 3], target: 6 }, output: [0, 1] },
	{ name: 'handle zero and negative number', inputs: { nums: [-1, 0, 1, 3, 5, -4, 6], target: 4 }, output: [2, 3] },
];
