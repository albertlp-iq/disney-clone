import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import MovieInfoCard from './MovieInfoCard';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
const ANIME_IMAGE_BASE_URL = "https://media.kitsu.app/anime/cover_images/"

function Slider() {
    const [movieList, setMovieList] = useState([]);
    const [animeList, setAnimeList] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null); // State for the selected movie
    const elementRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        getTopRated();
    }, []);

    useEffect(() => {
        getTrendingAnime();
    }, []);

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie); // Set the selected movie
    };

    const closePopup = () => {
        setSelectedMovie(null); // Clear the selected movie
    };

    const getTopRated = () => {
        GlobalApi.getTopRated.then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        });
    };

    const getTrendingAnime = () => {
        GlobalApi.getTrendingAnime.then(resp => {
            console.log(resp.data.data);
            setAnimeList(resp.data.data);
        });
    };

    const sliderRight = () => {
        if (elementRef.current && currentIndex < movieList.length - 1) {
            const scrollContainer = elementRef.current;
            const child = scrollContainer.querySelectorAll('img')[currentIndex + 1];
            const scrollAmount = child?.offsetLeft - scrollContainer.offsetLeft - (scrollContainer.offsetWidth / 2 - child.offsetWidth / 2) || 0;
            scrollContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
            setCurrentIndex(currentIndex + 1);
        }
    };

    const sliderLeft = () => {
        if (elementRef.current && currentIndex > 0) {
            const scrollContainer = elementRef.current;
            const child = scrollContainer.querySelectorAll('img')[currentIndex - 1];
            const scrollAmount = child?.offsetLeft - scrollContainer.offsetLeft - (scrollContainer.offsetWidth / 2 - child.offsetWidth / 2)|| 0;
            scrollContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="relative">
            <HiChevronLeft
                className="hidden md:block text-white text-[30px] absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer"
                onClick={sliderLeft}
            />
            <HiChevronRight
                className="hidden md:block text-white text-[30px] absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                onClick={sliderRight}
            />

            <div
                className="flex overflow-x-auto gap-2 md:gap-4 p-4 md:p-10 scrollbar-hide scroll-smooth"
                ref={elementRef}
            >
                {/* {movieList.map((item, index) => (
                    <img
                        key={item.id}
                        src={IMAGE_BASE_URL + item.backdrop_path}
                        className={`min-w-full md:h-[400px] object-cover rounded-lg flex-shrink-0 hover:border-4 border-white transition-all duration-100 ease-in${
                            currentIndex === index ? '' : ''
                        }`}
                    />
                ))} */}
                {animeList.map((item, index) => (
                    <img
                        key={item.id}
                        src={item.attributes.coverImage.original}
                        onClick={() => handleMovieClick(item)}
                        className={`min-w-full md:h-[400px] object-cover rounded-lg flex-shrink-0 hover:border-4 border-white transition-all duration-100 ease-in${
                            currentIndex === index ? '' : ''
                        }`}
                    />
                ))}
            </div>
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

export default Slider;