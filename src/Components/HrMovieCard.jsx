import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
const ANIME_IMAGE_BASE_URL = "https://media.kitsu.app/anime/cover_images/"

function HrMovieCard({movie, onClick}) {
  return (
    <section onClick={onClick} className='transition-all duration-150 ease-in cursor-pointer hover:scale-110'>
        <img src={ANIME_IMAGE_BASE_URL + movie.id + '/large.jpg'} alt={movie.title} className='w-[150px] md:w-[300px] h-[130px] rounded-lg object-cover' />
        <h2 className='w-[150px] md:w-[300px] mt-2'>{movie.title}</h2>
    </section>
  )
}

export default HrMovieCard