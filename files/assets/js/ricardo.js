var isleft = true
setInterval(() => {
	let ricardo = document.getElementsByClassName("ricardo")[0]
    var height = Math.floor(Math.random()*60)+10 
    ricardo.firstElementChild.src = ""

	if (isleft == true) {
		ricardo.className = "ricardo ricardoright"
		isleft = false
	} else {
		ricardo.className = "ricardo ricardoleft"
		isleft = true
	}

	ricardo.firstElementChild.src = "/assets/images/ricardo1.gif"
	ricardo.style.top=height+"%"
}, 5800)