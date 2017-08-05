function ItunesController() {
    var itunesService = new ItunesService();

    function render(ret) {


        var songTemplate = '<div class="row song-body">';

        for (var i = 0; i < ret.length; i++) {


            //We dont want our users to benifit Apple's 
            //coffers more than we already are.
            if (ret[i].price > 10) {
                ret[i].price = "Expensive";
            } else ret[i].price = "$" + ret[i].price;


            //we only want the objects whos "kinds" are "songs".
            //the cards lack the real estate for video.
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
 
        document.getElementById("songs").innerHTML = songTemplate + `</div>`;
    }




    //"Do Not Modify the getMusic function"  Sorry....
    this.getMusic = function getMusic(e) {
        e.preventDefault();
        var artist = e.target.artist.value;
        //We need to ensure that nelly is never searched for.
        //it would break everything this app stands for.
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