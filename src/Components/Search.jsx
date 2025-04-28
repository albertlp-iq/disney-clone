import React, { useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import MovieInfoCard from './MovieInfoCard';
import GlobalApi from '../Services/GlobalApi';

function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [selectedAnime, setSelectedAnime] = useState(null); // State for the selected movie

    const handleSearch = async (e) => {
        e.preventDefault();
        if (query.trim() === '') return;

        try {
            const getAnimeSearch = () => {
                    GlobalApi.getSearchAnime(query).then((resp) => {
                        setResults(resp.data.data);
                    });
                };
                getAnimeSearch(); // <<< You forgot to call it
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    const handleMovieClick = (movie) => {
        setSelectedAnime(movie); // Set the selected movie
    };

    const closePopup = () => {
        setSelectedAnime(null); // Clear the selected movie
    };

    return (
        <div className="p-8 px-8 md:px-25 min-h-screen">
            <h1 className="text-white text-2xl font-bold mb-6">Search Movies</h1>
            <form onSubmit={handleSearch} className="mb-6">
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full p-3 rounded-lg text-white"
                />
                <button
                    type="submit"
                    className="mt-4 bg-[#ee7709] text-white px-6 py-2 rounded-lg hover:bg-[#d96508] transition-all"
                >
                    Search
                </button>
            </form>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {results.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} onClick={() => handleMovieClick(movie)}/>
                ))}
                {selectedAnime && (
                    <div className="fixed inset-0 bg-black/75 flex justify-center items-center z-50 transition-all duration-300">
                        <div className="bg-white/90 p-6 rounded-lg w-[90%] md:w-[60%] max-h-[90vh] overflow-y-auto relative">
                            <button
                                className="absolute top-2 right-2 text-white text-xl font-bold text-size-5 cursor-pointer"
                                onClick={closePopup}
                            >
                                &times;
                            </button>
                            <MovieInfoCard movie={selectedAnime} />
                        </div>
                    </div>
                )}
            </div>
        </div>
        
    );
}

export default Search;