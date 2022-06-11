if (!(navigator.deviceMemory < 3)) {
	var isleft = true
	setInterval(() => {
		let ricardo1 = document.getElementById("ricardo1")
		var height = Math.floor(Math.random()*60)+10 
		if (ricardo1) {
			ricardo1.firstElementChild.src = ""

			if (isleft == true) {
				ricardo1.className = "ricardo ricardoright"
				isleft = false
			} else {
				ricardo1.className = "ricardo ricardoleft"
				isleft = true
			}

			ricardo1.firstElementChild.src = "/assets/images/ricardo1.webp"
			ricardo1.style.top=height+"%"
		}
	}, 5800)

	setInterval(() => {
		let ricardo2 = document.getElementById("ricardo2")
		var xpos = Math.floor(Math.random()*9)*10

		if (ricardo2) ricardo2.style.left=xpos+"%"
	}, 1700)

	var istop = false
	setInterval(() => {
		let ricardo3 = document.getElementById("ricardo3")
		if (ricardo3) {
			if (istop == true) {
				ricardo3.style.top = "85%"
				ricardo3.style.transform = "rotate(0deg)"
				istop = false
			} else {
				ricardo3.style.top = "0%"
				ricardo3.style.transform = "rotate(180deg)"
				istop = true
			}
		}
	}, 5000)
}
