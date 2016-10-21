function dragStartHandler(ev) {
	ev.dataTransfer.setData("text/plain", ev.target.id);
}

function dragoverHandler(ev) {
	ev.preventDefault();
}

function dropHandler(ev, el) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	if(el.firstElementChild) {
		console.log("Has a child!");
		if(el.firstElementChild.classList.contains("white")) {
			document.getElementById("bcaptures").innerHTML += el.innerHTML;
			el.innerHTML = "";
		}
		if(el.firstElementChild.classList.contains("black")) {
			document.getElementById("wcaptures").innerHTML += el.innerHTML;
			el.innerHTML = "";
		}
	}
	el.appendChild(document.getElementById(data));
	trackKing();
}

function trackKing() {
	var coordinate = document.getElementById("wking").parentNode.id;
	console.log(coordinate);
}
