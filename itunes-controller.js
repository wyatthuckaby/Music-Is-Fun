function ItunesController() {

	
    var itunesService = new ItunesService()
    //Do Not Modify the getMusic function
    this.getMusic = function getMusic(e) {
        e.preventDefault();
        var artist = e.target.artist.value;
        itunesService.getMusicByArtist(artist).then();
    }


    //Start coding here






}