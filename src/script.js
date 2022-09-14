document.body.onload = main;
function main() {
	let email = document.getElementsByClassName('email')[0];
	email.addEventListener('click', () => {
		navigator.clipboard.writeText('cor2323@comcast.net').then(() => {
			alert('Coped to clipboard!');
		}).catch(() => {
			alert('Failed to copy to clipboard!');
		});
	});

	let linkedIn = document.getElementsByClassName('linkedin')[0];
	linkedIn.addEventListener('click', () => {
		window.open('https://www.linkedin.com/in/nikko-robledo-58a084158/', '_blank');
	});
}