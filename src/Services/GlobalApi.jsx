import axios from "axios";

const MovieBaseUrl = "https://api.themoviedb.org/3/movie/";
const api_key='030563a3197b4a73698c3fc3993e9faf'

const AnimeBaseUrl = `https://kitsu.io/api/edge/anime/`;
const getTrendingAnime = axios.get("https://kitsu.io/api/edge/trending/anime");
console.log(getTrendingAnime);

const TopRatedUrl = `${MovieBaseUrl}top_rated?api_key=${api_key}&language=en-US`;
const getTopRated = axios.get(TopRatedUrl);

const genreBaseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=";
const getMovieByGenreId=(id)=>
    axios.get(genreBaseUrl+api_key+"&with_genres="+id)

const getAnimeByGenreName=(genre_name)=>
    axios.get(AnimeBaseUrl+"?filter[categories]="+genre_name)

const getTopRatedAnime = 
    axios.get('https://kitsu.io/api/edge/anime?sort=-averageRating&page[limit]=20');

const getSearchAnime = (query) => 
    axios.get('https://kitsu.io/api/edge/anime?filter[text]=<'+query+'>')

const apiUrl = 'https://cors-anywhere.herokuapp.com/https://graphql.anilist.co'

const getAnimeByProducerId = (id) => {
    const query = `
      query {
        Studio(id: ${id}) {
          name
          media(perPage: 20, sort: POPULARITY_DESC) {
            nodes {
              id
              title {
                romaji
                english
              }
              coverImage {
                large
              }
            }
          }
        }
      }`;
  
    return axios.post('https://graphql.anilist.co', {
      query: query
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

export default{
    getTopRated,
    getMovieByGenreId,
    getTrendingAnime,
    getAnimeByGenreName,
    getTopRatedAnime,
    getSearchAnime,
    getAnimeByProducerId
}