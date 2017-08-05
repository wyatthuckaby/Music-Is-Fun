/* exported MediaController */

function MediaController() {
    this.musicPlayed = function(e) {

    	/*
    	This function is called onplay from any of the
    	music players. Afterwards, all that needs to happen
    	is find our way through the sometimes huge list
    	of elements. then pause them.
    	*/
        var players = document.getElementsByName("player");
        for (var i = players.length - 1; i >= 0; i--) {
			if (players[i]!=e) 
				players[i].pause();
        }
    }
}