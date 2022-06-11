if (!(navigator.deviceMemory < 3)) {
	new BugController({
		imageSprite: "/assets/images/fly-sprite.webp",
		canDie: false,
		minBugs: 10,
		maxBugs: 20,
		mouseOver: "multiply"
	});
}
