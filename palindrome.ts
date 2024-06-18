function findLongestPalindrome(s: string): string {
  let longest = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const substr = s.slice(i, j+1);
      if (isPalindrome(substr) && substr.length > longest.length) {
        longest = substr;
      }
    }
  }
  return longest;
}

function isPalindrome(s: string): boolean {
  return s === s.split('').reverse().join('');
}

//sample inputs
console.log(findLongestPalindrome('babad')); //should return 'bab' or 'aba'
console.log(findLongestPalindrome('cbbd')); //should return 'bb'
console.log(findLongestPalindrome('a')); //should return 'a'
console.log(findLongestPalindrome('ac')); //should return 'a'
console.log(findLongestPalindrome('racecar')); //should return 'racecar'