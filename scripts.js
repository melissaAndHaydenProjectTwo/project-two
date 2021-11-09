// That Genre App
const genreApp = {};

genreApp.apiKey = '321a6d0985356d8f9304cc76a294aab3';
genreApp.apiUrl = 'https://api.themoviedb.org/3/discover/movie';
const arrayOfMovies = []

// CALL API 
genreApp.callApi = async function (url, page = 1) {
    const address = new URL(url);
    address.search = new URLSearchParams({
        api_key: genreApp.apiKey,
        page,
    })
    await fetch(address)
        .then((response) => {
            return response.json();
        })
        .then((jsonResult) => {
            if (jsonResult.results.length > 0) {
                arrayOfMovies.push(...jsonResult.results);
                if (jsonResult.page !== 8) {
                    genreApp.callApi(url, page + 1);
                } 
            }
        })
}

// CONNECT USER INPUT TO GENRE_IDS FROM API
genreApp.getGenres = () => {
    genreApp.callApi(genreApp.apiUrl);
    const movieGenres = arrayOfMovies.filter((genres) => {
        for (let i = 0; i < genres.genre_ids.length; i++){
            if (genres.genre_ids[i] === 28) {
                return genres
            }
        };
    });

// GET FOUR MOVIES FROM THE LARGE ARRAY BASED ON THE USER INPUT
    const fourMoviesArray = movieGenres 
        .map(x => ({ x, r: Math.random() }))
        .sort((a, b) => a.r - b.r)
        .map(a => a.x)
        .slice(0, 4);
        // return fourMoviesArray

    // PRINT THE FOUR MOVIE RESULTS TO THE PAGE 
    fourMoviesArray.forEach((movie) => {
        const cardContainer = document.querySelector('.gridContainer');
        const movieCard = document.createElement('li');
        movieCard.classList.add('cardContainer');
        const ulEl = document.createElement('ul');
        const liEl = document.createElement('li');
        const titleHeading = document.createElement('h2');
        // const paragraph = document.createElement('p');
        titleHeading.innerHTML = `${fourMoviesArray[1].title}`
        liEl.appendChild(titleHeading);
        ulEl.appendChild(liEl);
        movieCard.appendChild(ulEl);
        cardContainer.appendChild(movieCard);
    });
    // console.log(genreApp.getGenres);
}

// const genresArray = [
    //     { genre: "Action", id: 28 },
    //     { genre: "Adventure", id: 12 },
    //     { genre: "Animation", id: 16 },
    //     { genre: "Comedy", id: 35 },
    //     { genre: "Crime", id: 80 },
    //     { genre: "Documentary", id: 99 },
    //     { genre: "Drama", id: 18 },
    //     { genre: "Family", id: 10751 },
    //     { genre: "Fantasy", id: 14 },
    //     { genre: "History", id: 36 },
    //     { genre: "Horror", id: 27 },
    //     { genre: "Music", id: 10402 },
    //     { genre: "Mystery", id: 9648 },
    //     { genre: "Romance", id: 10749 },
    //     { genre: "Sci-Fi", id: 878 },
    //     { genre: "TV Movie", id: 10770 },
    //     { genre: "Thriller", id: 53 },
    //     { genre: "War", id: 10752 },
    //     { genre: "Western", id: 37 }
    // ]
    
    genreApp.init = () => {
        const movieButton = document.querySelector('form').addEventListener('submit', function (e) {
            document.getElementById('cards').innerText = ''
            genreApp.getGenres();
            e.preventDefault();
            const userInput = document.getElementById('genre').value;
        });
    }
        
        genreApp.init();
        // A page where the user is able to input a genre of movie and is met with movie reccomendations.
        
        // There will be a button for the user to submit their response
        
        // The button will listen for a click event that will create new elements that display the movie titles (with animation)
        
        // When a user searches for a specific genre, the page will populate with multiple movies that fit that genre

// the page will reveal movie cards in stacked columns and rows. 

// If the user decides to search for another genre, the search bar will remain in its position at the top of the page.

// Create an app object (genreApp)