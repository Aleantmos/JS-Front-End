function movieParser(input) {

    let movies = [];

    for (const line of input) {
        let commandTokens = line.split(" ");

        if (line.includes("addMovie")) {
            let movieName = commandTokens.slice(1).join(" ");
            addMovie(movieName);
            console.log(commandTokens)
        } else if (line.includes("directedBy")) {
            let indexOfCommand = commandTokens.indexOf("directedBy");
            let movieName = commandTokens.slice(0, indexOfCommand).join(" ");
            let director = commandTokens.slice(indexOfCommand + 1).join(" ");
            addDirector(movieName, director);
        } else {
            let indexOfCommand = commandTokens.indexOf("onDate");
            let movieName = commandTokens.slice(0, indexOfCommand).join(" ");
            let date = commandTokens.slice(indexOfCommand + 1).join(" ");
            addDate(movieName, date);
        }

        for (const movie of movies) {
            if (movie.hasOwnProperty("name") 
            && movie.hasOwnProperty("date") 
            && movie.hasOwnProperty("director")) {
                console.log(JSON.stringify(movie));
            }
        }
    }

    function addMovie(name) {
        movies.push({ name });
    }

    function addDirector(name, director) {
        let movie = movies.find((m) => m.name === name);

        if (movie) {
            movie.director = director;
        }
    }

    function addDate(name, date) {
        let movie = movies.find((m) => m.name === name);

        if (movie) {
            movie.date = date;
        }
    }
}

movieParser([

    'addMovie The Avengers',
    
    'addMovie Superman',
    
    'The Avengers directedBy Anthony Russo',
    
    'The Avengers onDate 30.07.2010',
    
    'Captain America onDate 30.07.2010',
    
    'Captain America directedBy Joe Russo'
    
    ])