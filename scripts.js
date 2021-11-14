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
                if (jsonResult.page !== 20) {
                    genreApp.callApi(url, page + 1);
                } 
            }
        })
}

// CONNECT USER INPUT TO GENRE_IDS FROM API
genreApp.getGenres = () => {
    genreApp.callApi(genreApp.apiUrl);
    const genreChoices = document.querySelectorAll('option')
    // console.log(genreChoices)
    let genreType 
    genreChoices.forEach((param) => {
        if (param.selected === true) {
            genreType = param.id
        }
    })

    const movieGenres = arrayOfMovies.filter((genres) => {
        for (let i = 0; i < genres.genre_ids.length; i++){
            if (genres.genre_ids[i] == genreType) {
                return genres
            }
        };
    });

    const fourMoviesArray = movieGenres
    .map(genres => ({genres, n: Math.random() }))
    .sort((genreOne, genreTwo) => genreOne.n - genreTwo.n)
    .map(genreOne => genreOne.genres)
    .slice(0, 6);   

    // GET FOUR MOVIES FROM THE LARGE ARRAY BASED ON THE USER INPUT
    // PRINT THE FOUR MOVIE RESULTS TO THE PAGE 

    const cardContainer = document.querySelector('.gridContainer');
    cardContainer.innerHTML = ""

    fourMoviesArray.forEach((movie) => {
        const movieCard = document.createElement('li');
        movieCard.classList.add('cardContainer');
        const ulEl = document.createElement('ul');
        const liEl = document.createElement('li');

        const titleHeading = document.createElement('h2');
        titleHeading.innerText = movie.title

        const releaseDate = document.createElement('p');
        releaseDate.innerText = `RELEASE DATE: \n ${movie.release_date}`

        liEl.appendChild(titleHeading);
        liEl.appendChild(releaseDate);
        ulEl.appendChild(liEl);
        movieCard.appendChild(ulEl);
        cardContainer.appendChild(movieCard);
        });
}

const formTransition = document.querySelector('form')
const fadeOut = document.querySelector('main>img')
const fadeIn = document.querySelector('div.secondaryLogo>img')
    
genreApp.setupEventListeners = () => {
    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        formTransition.classList.add('active');
        fadeOut.classList.add('active');
        fadeIn.classList.add('active');
        genreApp.getGenres();
    });
}

genreApp.init = () => {
    genreApp.setupEventListeners();
    genreApp.getGenres();
}
        
genreApp.init();
        // A page where the user is able to input a genre of movie and is met with movie reccomendations.
        
        // There will be a button for the user to submit their response
        
        // The button will listen for a click event that will create new elements that display the movie titles (with animation)
        
        // When a user searches for a specific genre, the page will populate with multiple movies that fit that genre

// the page will reveal movie cards in stacked columns and rows. 

// If the user decides to search for another genre, the search bar will remain in its position at the top of the page.

// Create an app object (genreApp)