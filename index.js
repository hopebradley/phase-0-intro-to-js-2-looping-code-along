
function writeCards(names, eventName) {
	const ans = [];
	for (let i = 0; i<names.length; i++) {
		ans.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
	}
	return ans;
}

function countDown(num) {
	for (let i = num; i>=0; i--) {
		console.log(i);
	}
}
