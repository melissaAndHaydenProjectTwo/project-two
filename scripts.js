// That Genre App
const genreApp = {};

genreApp.apiKey = '321a6d0985356d8f9304cc76a294aab3';
genreApp.apiUrl = 'https://api.themoviedb.org/3/discover/movie';
genreApp.apiURL2 = 'https://api.themoviedb.org/3/genre/movie/list';
genreApp.arrayOfMovies = []

genreApp.callApi = async function (url, page = 1) {
    const address = new URL(url);
    address.search = new URLSearchParams({
        api_key: genreApp.apiKey,
        page,
        // with_genres: '35'
    })
    await fetch(address)
        .then((response) => {
            return response.json();
        })
        .then((jsonResult) => {
            // console.log(jsonResult);
            if (jsonResult.results.length > 0) {
                genreApp.arrayOfMovies.push(...jsonResult.results);
                if (jsonResult.page !== 8) {
                    genreApp.callApi(url, page + 1);
                } 
            }
        })
}

genreApp.getGenres = () => {
    genreApp.callApi(genreApp.apiUrl);
    console.log(genreApp.arrayOfMovies);
    // const url2 = new URL(genreApp.apiURL2);
    // url2.search = new URLSearchParams({
    //     api_key: genreApp.apiKey,
    // })

    // fetch(url2)
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((jsonResult) => {
    //         console.log(jsonResult);
    //         genreApp.displayGenreIds(jsonResult);
    //     })
}

genreApp.displayGenres = (arrayDataFromApi) => {
    
    // if (userInput === genreID) {
        //     // const cardContainer = document.querySelector('.cardContainer');
        //     // // const movieCard = arrayDataFromApi.results;
        //     //     const ulEl = document.createElement('ul');
        //     //     const liEl = document.createElement('li');
        //     //     const paragraph = document.createElement('p');
        //     //     paragraph.innerHTML = `TITLE: ${arrayDataFromApi.results[0].original_title}`
        // }
        //     liEl.appendChild(paragraph);
        //     ulEl.appendChild(liEl);
        //     cardContainer.appendChild(ulEl);
        
        
        const selectedGenre = arrayDataFromApi.results.filter((genre) => {
            // console.log(genre.genre_ids);
            
        });
        
        
        // const selectedGenre = userInput.filter((genre) => {
            //     return genre === genre_ids[0];
            // });
            
        }
        
        genreApp.displayGenreIds = (genresArray) => {
            
        }
        
        genreApp.init = () => {
            const movieButton = document.querySelector('form').addEventListener('submit', function (e) {
                e.preventDefault();
                genreApp.getGenres();
                const userInput = document.getElementById('genre').value;
                console.log(userInput)
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

