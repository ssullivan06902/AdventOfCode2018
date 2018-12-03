import { Test, Helper } from './main'
import { Day1, Day2 } from './main'

describe('Basic tests', () => {
	it('Module is able to export basic class function', () => {
		expect(Test.helloWorld()).toEqual('Hello, World!')
	});
});

describe('Helper tests', () => {
	const help = new Helper();
	const path = 'test.txt';
	it('loadFileSync loads file', () => {
		expect(help.loadFileSync(path)).toContain('Hello world');
	});

	it('loadFileLinesSync returns correct array', () => {
		const data = help.loadFileLinesSync(path)
		expect(data).toHaveLength(10);
		expect(data[0]).toEqual('Hello world');
	});

	it('loadFileSyncGenerator', () => {
		const lineGenerator = help.loadFileSyncGenerator(path)
		expect(lineGenerator.next().value).toEqual('Hello world');
		expect(lineGenerator.next().value).toEqual('1');
	});

	it('parseIntWithSign works with number with no sign', () => {
		expect(help.parseIntWithSign('1')).toEqual(1);
	});
	it('parseIntWithSign works with positive sign', () => {
		expect(help.parseIntWithSign('+1')).toEqual(1);
	});
	it('parseIntWithSign works with negative sign', () => {
		expect(help.parseIntWithSign('-1')).toEqual(-1);
	});
	it('parseIntWithSign returns NaN for non-numbers', () => {
		expect(help.parseIntWithSign('blarg')).toBeNaN();
	});
});

describe('Day 1', () => {
	const day1 = new Day1();
	it('Part 1 answer equals 578', () => {
		expect(day1.part1()).toEqual(578)
	});

	it('Part 2 answer equals 82516', () => {
		expect(day1.part2()).toEqual(82516)
	});
});

describe('Day 2', () => {
	const day2 = new Day2();
	it('Part 1 answer equals 7776', () => {
		expect(day2.part1()).toEqual(7776)
	});

	it('Part 2 answer equals wlkigsqyfecjqqmnxaktdrhbz', () => {
		expect(day2.part2()).toEqual('wlkigsqyfecjqqmnxaktdrhbz');
	});
});