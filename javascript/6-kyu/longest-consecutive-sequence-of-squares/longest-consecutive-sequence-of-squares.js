const longestSequence = n => {
  let longest = [];
​
  for (let start = 1; start * start <= n; start++) {
    let sum = 0;
    let sequence = [];
​
    for (let i = start; sum < n; i++) {
      sum += i * i;
      sequence.push(i);
​
      if (sum === n && sequence.length > longest.length) {
        longest = [...sequence];
      }
    }
  }
​
  return longest;
};