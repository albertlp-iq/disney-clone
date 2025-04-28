import React, { useEffect, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import MovieCard from './MovieCard';
import MovieInfoCard from './MovieInfoCard';
const ANIME_IMAGE_BASE_URL = "https://media.kitsu.app/anime/poster_images/"

function TopRated() {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null); // State for the selected movie

    // useEffect(() => {
    //     fetchTopRatedMovies();
    // }, []);

    useEffect(() => {
        fetchTopRatedAnimes();
    }, []);

    // const fetchTopRatedMovies = () => {
    //     GlobalApi.getTopRated.then((resp) => {
    //         setTopRatedMovies(resp.data.results);
    //     });
    // };

    const fetchTopRatedAnimes = () => {
        GlobalApi.getTopRatedAnime.then((resp) => {
            setTopRatedMovies(resp.data.data);
        });
    };

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie); // Set the selected movie
    };

    const closePopup = () => {
        setSelectedMovie(null); // Clear the selected movie
    };

    return (
        <div className="min-h-screen">
            <div className="p-8 md:px-25">
                <h1 className="text-white text-2xl font-bold mb-6">Top Rated Movies</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {topRatedMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} onClick={() => handleMovieClick(movie)} />
                    ))}
                </div>
            </div>

            {/* Popup for Movie Info */}
            {selectedMovie && (
                <div className="fixed inset-0 bg-black/75 flex justify-center items-center z-50 transition-all duration-300">
                    <div className="bg-white/90 p-6 rounded-lg w-[90%] md:w-[60%] max-h-[90vh] overflow-y-auto relative">
                        <button
                            className="absolute top-2 right-2 text-white text-xl font-bold text-size-5 cursor-pointer"
                            onClick={closePopup}
                        >
                            &times;
                        </button>
                        <MovieInfoCard movie={selectedMovie} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default TopRated;