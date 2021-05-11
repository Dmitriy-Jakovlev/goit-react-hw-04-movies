const baseUrl = 'https://api.themoviedb.org/3';

const key = 'e5dccbf2b51b62001e6cb7ae863007b2';

const fetchShowDetails = showId => {
    return fetch(`${baseUrl}/movie/${showId}?api_key=${key}`).then(res => res.json());
}

const fetchMostPopularMovies = () => {
    return fetch(`${baseUrl}/trending/movie/week?api_key=${key}`)
        .then(res => res.json())
        .then(movies => movies.results.map(movie => movie))
};

const fetchMoviesWithQuery = searchQuery => {
    return fetch(`${baseUrl}/search/movie?api_key=${key}&query=${searchQuery}`)
        .then(res => res.json())
        .then(movies => movies.results.map(movie => movie))
};

const fetchCast = (id) => {
    return fetch(`${baseUrl}/movie/${id}/credits?api_key=${key}`)
        .then(res => res.json())
        .then(movie => movie.cast)
};

const fetchReviews = (id) => {
    return fetch(`${baseUrl}/movie/${id}/reviews?api_key=${key}&page=1`)
        .then(res => res.json())
        .then(movie => movie.results)
};

export default {fetchShowDetails, fetchMostPopularMovies, fetchMoviesWithQuery, fetchCast, fetchReviews}