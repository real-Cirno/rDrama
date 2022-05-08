window.addEventListener('load', (e) => {
	var confettiSettings = { target: 'confetti-canvas', props: ['square'] };
	var confetti = new ConfettiGenerator(confettiSettings);
	confetti.render();
});