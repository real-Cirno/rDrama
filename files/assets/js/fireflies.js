if (navigator.deviceMemory >= 16) {
	new BugController({
		imageSprite: "/assets/images/fireflies.webp",
		canDie: false,
		minBugs: 10,
		maxBugs: 30,
		mouseOver: "multiply"
	});
}
