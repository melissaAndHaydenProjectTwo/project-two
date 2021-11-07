// That Genre App
const genreApp = {};

genreApp.apiKey = '321a6d0985356d8f9304cc76a294aab3';
genreApp.apiUrl = 'https://api.themoviedb.org/3/discover/movie';

genreApp.getGenres = () => {

    const url = new URL(genreApp.apiUrl);
    url.search = new URLSearchParams({
        api_key: genreApp.apiKey,
    })

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((jsonResult) => {
            console.log('it worked!', jsonResult);

            genreApp.displayGenres(jsonResult);
        })
}

// When the user inputs a genre, connect the genre IDs to the filtered array to match

genreApp.displayGenres = (arrayDataFromApi) => {
    
    const userInput = arrayDataFromApi.results.genre_ids[0];
    
    const selectedGenre = userInput.filter((genre) => {
        return genre === genre_ids[0];
    });

    const cardContainer = document.querySelector('.cardContainer');
    // const movieCard = arrayDataFromApi.results;
        const ulEl = document.createElement('ul');
        const liEl = document.createElement('li');
        const paragraph = document.createElement('p');
        paragraph.innerHTML = `TITLE: ${arrayDataFromApi.results[0].original_title}`

        liEl.appendChild(paragraph);
        ulEl.appendChild(liEl);
        cardContainer.appendChild(ulEl);
}

genreApp.init = () => {
    genreApp.getGenres();
}

genreApp.init();
// A page where the user is able to input a genre of movie and is met with movie reccomendations.

// There will be a button for the user to submit their response

// The button will listen for a click event that will create new elements that display the movie titles (with animation)

// When a user searches for a specific genre, the page will populate with multiple movies that fit that genre

// the page will reveal movie cards in stacked columns and rows. 

// IF the user decides to search for another genre, the search bar will remain in its position at the top of the page.

// Create an app object (genreApp)

