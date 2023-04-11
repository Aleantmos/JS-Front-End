function solve(input) {

    movies = {};

    for (let i = 0; i < input.length; i++) {
        if (input[i].includes('addMovie')) {
            let mName = input[i].split('addMovie ')[1];
            movies[mName] = {};
            movies[mName].name = mName;
        } else if (input[i].includes('directedBy')) {
            let [mName, mDirector] = input[i].split(' directedBy ');
            if (mName in movies) {
                movies[mName].director = mDirector;
            }
        } else if (input[i].includes('onDate')) {
            let [mName, mDate] = input[i].split(' onDate ');

            if (mName in movies) {
                movies[mName].date = mDate;
            }
        }
    }


    for (let [key, value] of Object.entries(movies)) {
        
        if (movies[key].hasOwnProperty('name')
        && movies[key].hasOwnProperty('director')
        && movies[key].hasOwnProperty('date')) {
            console.log(JSON.stringify(value));
        }
    }
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)