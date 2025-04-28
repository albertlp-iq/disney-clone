import React from 'react';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const ANIME_IMAGE_BASE_URL = "https://media.kitsu.app/anime/poster_images/"
const ANIME_IMAGE_BASE_URL_COVER = "https://media.kitsu.app/anime/cover_images/"

function MovieInfoCard({ movie }) {
    return (
        <div className="flex flex-col items-center text-center text-black">
            <div className="flex gap-2 mb-4">
                <img
                    src={movie.attributes.posterImage.large}
                    alt={movie.title}
                    className="rounded-lg w-[100px] md:w-[150px]"
                />
                {movie.attributes.coverImage?.original && (
                    <img
                        src={movie.attributes.coverImage.original}
                        alt={movie.title}
                        className="rounded-lg w-[100px] md:w-[400px] object-cover"
                    />
                )}
            </div>
            <div className="max-w-xl">
                <h2 className="text-xl font-bold mb-2">{movie.attributes.titles.en_jp}</h2>
                <p className="text-sm text-gray-700 mb-2 text-justify">{movie.attributes.synopsis}</p>
                <p className="text-sm text-gray-500">
                    Release Date: {new Date(movie.attributes.createdAt).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                    })}
                </p>
                <p className="text-sm text-gray-500">Popularity Rank: {movie.attributes.popularityRank}</p>
                <p className="text-sm text-gray-500">Rating: {movie.attributes.averageRating}</p>
                <p className="text-sm text-gray-500">Users: {movie.attributes.userCount}</p>
            </div>
        </div>
    );
}

export default MovieInfoCard;
