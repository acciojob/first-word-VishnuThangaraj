function firstWord(s) {
  // your code here
	let result = s.trimStart().split(" ");
	return result[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
