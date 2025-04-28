import React, { useState } from 'react';
import GenresList from './../Constant/GenresList.jsx';
import MovieList from './MovieList.jsx';
import ButtonWithSound from './ButtonWithSound.jsx';

function GenreMovieList() {
    const [visibleGenres, setVisibleGenres] = useState(5); // start with 5 genres

    const handleShowMore = () => {
        setVisibleGenres((prev) => prev + 5); // show 5 more
    };

    const hasMoreGenres = visibleGenres < GenresList.genres.length;

    return (
        <div>
            {GenresList.genres.slice(0, visibleGenres).map((item, index) => (
                <div key={item.id} className="p-8 px-8 md:px-16">
                    <h2 className="text-white text-xl font-bold">{item.name}</h2>
                    <MovieList genreId={item.id} index_={index} genreName={item.name} />
                </div>
            ))}

            {hasMoreGenres && (
                <div className="flex justify-center my-8">
                    <ButtonWithSound 
                        soundSrc="/assets/Sounds/AnbyC.mp3"
                        onClick={handleShowMore}
                        className="bg-[#ee7709] text-white px-6 py-2 rounded-lg hover:bg-[#d96508] transition-all"
                    >
                        Show More
                    </ButtonWithSound>
                </div>
            )}
        </div>
    );
}

export default GenreMovieList;
