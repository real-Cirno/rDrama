window.addEventListener('load', (e) => {
	var confettiSettings = { target: 'confetti', props: ['square'] };
	var confetti = new ConfettiGenerator(confettiSettings);
	confetti.render();
});