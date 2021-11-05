// That Genre App
const genreApp = {};

genreApp.apiKey = '321a6d0985356d8f9304cc76a294aab3';
genreApp.apiUrl = 'https://api.themoviedb.org/discover/movie';

genreApp.getGenres = () => {

    const url = new URL(genreApp.apiUrl);
    url.search = new URLSearchParams({
        api_key: genreApp.apiKey,
    })
    console.log(url);

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((jsonResponse) => {
            console.log(jsonResponse);
            genreApp.displayGenres(jsonResponse);
        })
}

genreApp.getGenres();
// A page where the user is able to input a genre of movie and is met with movie reccomendations.

// There will be a button for the user to submit their response

// The button will listen for a click event that will create new elements that display the movie titles (with animation)

// When a user searches for a specific genre, the page will populate with multiple movies that fit that genre

// the page will reveal movie cards in stacked columns and rows. 

// IF the user decides to search for another genre, the search bar will remain in its position at the top of the page.

// Create an app object (genreApp)

