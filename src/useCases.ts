type Inputs = {
	nums: number[];
	target: Number;
};

type Case = {
	inputs: Inputs;
	output: number[];
};

export const successCases: Case[] = [
	{ inputs: { nums: [0, 1], target: 1 }, output: [0, 1] },
	{ inputs: { nums: [3, 2, 4], target: 6 }, output: [1, 2] },
	{ inputs: { nums: [3, 3], target: 6 }, output: [0, 1] },
];
