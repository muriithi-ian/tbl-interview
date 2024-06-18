function isPerfectSquare(n: number): boolean {
	return n > 0 && Math.sqrt(n) % 1 === 0;
}

function isFibonacci(n: number): boolean {
	if (n < 0) return false;

	//A number is Fibonacci if and only if one or both of (5*n^2 + 4) or (5*n^2 - 4) is a perfect square
	const x1 = 5 * n * n + 4;
	const x2 = 5 * n * n - 4;
	return isPerfectSquare(x1) || isPerfectSquare(x2);
}

//tests
describe("isPerfectSquare", () => {
  it("should return true if the number is a perfect square", () => {
    expect(isPerfectSquare(0)).toBe(true);
    expect(isPerfectSquare(1)).toBe(true);
    expect(isPerfectSquare(4)).toBe(true);
    expect(isPerfectSquare(9)).toBe(true);
    expect(isPerfectSquare(16)).toBe(true);
  });

  it("should return false if the number is not a perfect square", () => {
    expect(isPerfectSquare(2)).toBe(false);
    expect(isPerfectSquare(3)).toBe(false);
    expect(isPerfectSquare(5)).toBe(false);
    expect(isPerfectSquare(6)).toBe(false);
    expect(isPerfectSquare(7)).toBe(false);
  });


});

describe("isFibonacci", () => {
	it("should return true if the number is a Fibonacci number", () => {
		expect(isFibonacci(0)).toBe(true);
		expect(isFibonacci(1)).toBe(true);
		expect(isFibonacci(2)).toBe(true);
		expect(isFibonacci(3)).toBe(true);
	});

	it("should return false if the number is not a Fibonacci number", () => {
		expect(isFibonacci(4)).toBe(false);
		expect(isFibonacci(5)).toBe(true);
		expect(isFibonacci(6)).toBe(false);
		expect(isFibonacci(7)).toBe(false);
		expect(isFibonacci(8)).toBe(true);
	});
});
