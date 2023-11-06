var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	this.document.querySelector("video").loop = false;
	this.document.querySelector("video").autoplay = false;
	var video = document.getElementById("player1");

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
