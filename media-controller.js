/* exported MediaController */

function MediaController() {
	this.musicPlayed = function(e){
		//aparently "target" is the clicked element - go figure
		var players = document.getElementsByName("player");
		for (var i = players.length - 1; i >= 0; i--) {
			if (players[i] != e){
				players[i].pause();
			}
		}
	}
}