var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	this.document.querySelector("video").loop = false;
	this.document.querySelector("video").autoplay = false;
	var video = document.getElementById("player1");

	this.document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		document.getElementById("player1").play();
		document.getElementById("player1").volume = document.getElementById("slider").value / 100;
		document.getElementById("volume").innerHTML = document.getElementById("slider").value;
	});

	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause video");
		document.getElementById("player1").pause();
	});

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
