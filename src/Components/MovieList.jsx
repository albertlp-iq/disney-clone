import React, { useEffect, useState, useRef } from 'react';
import GlobalApi from '../Services/GlobalApi';
import MovieCard from './MovieCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import HrMovieCard from './HrMovieCard';
import MovieInfoCard from './MovieInfoCard';

function MovieList({ genreId, index_, genreName }) {
    const [movieList, setMovieList] = useState([]);
    const [animeList, setAnimeList] = useState([]); // State for the anime list
    const [selectedMovie, setSelectedMovie] = useState(null); // State for the selected movie
    const listRef = useRef();

    useEffect(() => {
        getMovieByGenreId();
    }, []);

    useEffect(() => {
        getAnimeByGenreName();
    }, []);

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie); // Set the selected movie
    };

    const closePopup = () => {
        setSelectedMovie(null); // Clear the selected movie
    };

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then((resp) => {
            setMovieList(resp.data.results);
        });
    };

    const getAnimeByGenreName = () => {
        GlobalApi.getAnimeByGenreName(genreName).then((resp) => {
            setAnimeList(resp.data.data);
        });
    };

    const scrollLeft = () => {
        if (listRef.current) {
            listRef.current.scrollBy({
                left: -300, // Adjust scroll distance as needed
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (listRef.current) {
            listRef.current.scrollBy({
                left: 300, // Adjust scroll distance as needed
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="relative">
            {/* Left Chevron Button */}
            <HiChevronLeft
                className="hidden md:block text-white text-[30px] absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer z-10"
                onClick={scrollLeft}
            />

            {/* Right Chevron Button */}
            <HiChevronRight
                className="hidden md:block text-white text-[30px] absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer z-10"
                onClick={scrollRight}
            />

            {/* Movie List */}
            <div
                className="flex gap-8 overflow-x-scroll scrollbar-hide pt-4 px-4 pb-4"
                ref={listRef}
            >
                {animeList.map((item, index) => (
                    <div className="flex-shrink-0" key={item.id}>
                        {index_ % 3 === 0 ? (
                            <HrMovieCard movie={item} onClick={() => handleMovieClick(item)}/>
                        ) : (
                            <MovieCard movie={item} onClick={() => handleMovieClick(item)} />
                        )}
                    </div>
                ))}
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

export default MovieList;