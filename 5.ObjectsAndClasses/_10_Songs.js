function songs(input) {
    let songs = [];

    class Song {
        constructor(status, title, duration) {
            this.status = status;
            this.title = title;
            this.duration = duration;
        }
    }

    for (let index = 0; index < input.length - 1; index++) {
        let song = input[index].split("_");

        let [status, title, duration] = [song[0], song[1], song[2]];
        songs[status] = new Cat(title, duration);
    }

    let statusNeeded = input[input.length - 1];

    for (let index = 0; index < songs.length; index++) {
        songs.forEach(s => s.status === statusNeeded).console.log(s.title);
    }
}

songs([4,

    'favourite_DownTown_3:14',
    
    'listenLater_Andalouse_3:24',
    
    'favourite_In To The Night_3:58',
    
    'favourite_Live It Up_3:48',
    
    'listenLater'])