function ItunesController() {

    function render(ret) {


        var songTemplate = '<div class="row song-body">';

        for (var i = 0; i < ret.length; i++) {

            //if our object is a video file skip it and go to the
            //next one.
            // if (ret[i].preview[ret[i].preview.length-1] === 'v') continue;
            //console.log(ret[i].preview.length);


            //we only want the objects whos "kinds" are "songs".
            //the screen lacks the real estate for video.


            if (ret[i].price > 10) {
                ret[i].price = "Expensive";
            } else ret[i].price = "$" + ret[i].price;

            if (ret[i].type === "song") {
                songTemplate += `

            <div class="col-xs-12 col-sm-4 ">
                <div class="card">
                <h4> ${ret[i].title} </h4>
                <p> ${ret[i].artist} - ${ret[i].price} </p>
                <img src="${ret[i].albumArt}" class="img-responsive albumart">
                <audio controls name="player" onplay="app.controllers.mediaCtrl.musicPlayed(this)">
                    <source src="${ret[i].preview}" type="audio/mp4">
                </audio>

                </div>

            </div>

            `;

            }




        }
        //iterate through the array and start to locate the items into cards.


        document.getElementById("songs").innerHTML = songTemplate + `</div>`;
    }

    var itunesService = new ItunesService();
    //Do Not Modify the getMusic function


    this.getMusic = function getMusic(e) {
        e.preventDefault();
        var artist = e.target.artist.value;
        if (artist.toLowerCase() === "nelly") {
            document.getElementById("songs").innerHTML = `
                <h2 class="nope"> Nope. </h2>
                <h2 class="nope-sub"> This is not the testing search you were looking for </h2>
            `;
        } else {
            itunesService.getMusicByArtist(artist).then(render);
        }
    }

}