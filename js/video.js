var video;
video = document.querySelector('.video')
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = document.getElementById("slider").value + "%";
});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log("New speed is " + video.playbackRate)
});
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.95;
	console.log("New speed is " + video.playbackRate)
});
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime)
	if (video.currentTime + 15 <= video.duration){
		video.currentTime += 15;
		console.log("New location " + video.currentTime)
	}
	else {
		video.currentTime = 0;
		console.log("Going back to beginning")
		console.log("New location " + video.currentTime)
	}
	
});
document.querySelector("#mute").addEventListener("click", function() {
	if (this.innerHTML == "Mute"){
		video.muted = true;
		this.innerHTML = "Unmute";
	}
	else{
		video.muted = false;
		this.innerHTML = "Mute";
	}
});
document.querySelector("#slider").addEventListener("click", function() {
	video.volume = document.getElementById("slider").value * 0.01;
	document.getElementById("volume").innerHTML = document.getElementById("slider").value + "%";

});
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});
document.querySelector("#orig").addEventListener("click", function() {
	if (video.classList.contains("oldSchool")){
		video.classList.remove("oldSchool");
	}
	
});


