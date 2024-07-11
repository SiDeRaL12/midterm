const APIkey = "1d337d1fcb66ed4999b4c193599c894a";

async function popularMovies() {
    try {
        const moviesid = "popularMovies"
        const PopularAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}`;
        const popularResponse = await fetch(PopularAPI);
        const data = await popularResponse.json();
        let popularMoviesData = data.results.map(movie => ({
            name: movie.title,
            date: movie.release_date,
            poster: movie.poster_path,
            description: movie.overview
        }));
        
        displayMovies(popularMoviesData,moviesid);
        
    } catch (error) {
        console.log(error);
    }
}

async function topRatedMovies() {
    try {
        const moviesid = "topRatedMovies"
        const topRatedAPI = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIkey}`;
        const topRatedResponse = await fetch(topRatedAPI);
        const data = await topRatedResponse.json();
        let topRatedMoviesData = data.results.map(movie => ({
            name: movie.title,
            date: movie.release_date,
            poster: movie.poster_path,
            description: movie.overview
        }));
        displayMovies(topRatedMoviesData,moviesid);
        

    } catch (error) {
        console.log(error);
    }
}
async function upcomingMovies() {
    try {
        const moviesid = "upcomingMovies"
        const upcomingAPI = `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIkey}`;
        const upcomingResponse = await fetch(upcomingAPI);
        const data = await upcomingResponse.json();
        let upcomingMoviesData = data.results.map(movie => ({
            name: movie.title,
            date: movie.release_date,
            poster: movie.poster_path,
            description: movie.overview
        }));
        displayMovies(upcomingMoviesData,moviesid);
        

    } catch (error) {
        console.log(error);
    }
}



function displayMovies(movies,moviesid) {
    const moviesContainer = document.getElementById(moviesid);
    moviesContainer.innerHTML = movies.map(movie => `
        <div class="swiper-slide bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster}" alt="${movie.name}" class="w-full h-60 object-cover">
            <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900">${movie.name}</h3>
                <p class="text-gray-600">${movie.date}</p>
                <div class="max-h-48 overflow-y-auto">
                    <p class="text-gray-600">${movie.description}</p>
                </div>
                </div>
        </div>
    `).join('');


    new Swiper('.swiper-container', {
        slidesPerView: 6,
        spaceBetween: 30,
        navigation: {
            nextEl: `.swiper-button-next`,
            prevEl: `.swiper-button-prev`,
        },
        pagination: {
            el: `.swiper-pagination`,
            clickable: true,
        },
        breakpoints: {
            
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },

            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        }
    });
}

window.onload = function(){
    topRatedMovies()
    popularMovies()
    upcomingMovies()
    
};
