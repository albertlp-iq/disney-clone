import React from 'react';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const ANIME_IMAGE_BASE_URL = "https://media.kitsu.app/anime/poster_images/"

function MovieCard({ movie, onClick }) {
    return (
        <div onClick={onClick} className="cursor-pointer">
            <img
                src={movie.attributes.posterImage.large}
                alt={movie.title}
                className="w-[150px] md:w-[200px] rounded-lg hover:scale-110 hover:border-[2px] transition-all duration-150 ease-in"
            />
        </div>
    );
}

export default MovieCard;