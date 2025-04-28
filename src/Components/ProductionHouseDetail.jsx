import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlobalApi from '../Services/GlobalApi';
import MovieCard from './MovieCard';
import MovieInfoCard from './MovieInfoCard';

function ProductionHouseDetail() {
    const { id } = useParams();
    const [productionHouse, setProductionHouse] = React.useState([]);
    const [selectedAnime, setSelectedAnime] = React.useState(null);
    const [studioName, setStudioName] = useState(""); 

    // useEffect(() => {
    //     fetchProductionHouseAnime();
    // }, []);

    // const fetchProductionHouseAnime = () => {
    //     GlobalApi.getAnimeByProducerId(id).then((resp) => {
    //         setProductionHouse(resp.data.data);
    //     });
    // };

    useEffect(() => {
        GlobalApi.getAnimeByProducerId(id)
            .then(res => {
                const aniListTitles = res.data.data.Studio.media.nodes;
                setStudioName(res.data.data.Studio.name);
                const kitsuResults = [];
    
                const searchPromises = aniListTitles.map((anime) => {
                    const title = anime.title.romaji || anime.title.english;
                    return GlobalApi.getSearchAnime(title).then((resp) => {
                        if (resp.data.data.length > 0) {
                            kitsuResults.push({
                                aniList: anime,
                                kitsu: resp.data.data[0]
                            });
                        }
                    });
                });
    
                Promise.all(searchPromises).then(() => {
                    const uniqueKitsuResults = kitsuResults.filter((item, index, self) =>
                      index === self.findIndex((t) => t.kitsu.id === item.kitsu.id)
                    );
                    console.log("Filtered unique results:", uniqueKitsuResults);
                    setProductionHouse(uniqueKitsuResults);
                });
            })
            .catch(err => console.error(err));
    }, [id]);


    const handleAnimeClick = (anime) => {
        setSelectedAnime(anime); // Set the selected movie
    };

    const closePopup = () => {
        setSelectedAnime(null); // Clear the selected movie
    };

    return (
        <div className="p-8 text-white">
            <h1 className="text-3xl font-bold">{studioName}</h1>
            <div
                className="flex gap-8 overflow-x-scroll scrollbar-hide pt-4 px-4 pb-4"
            >
                <div className="p-8 px-8 md:px-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {productionHouse.map((anime) => (
                            <MovieCard key={`${anime.aniList.id}-${anime.kitsu.id}`} movie={anime.kitsu} onClick={() => handleAnimeClick(anime.kitsu)} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Popup for Movie Info */}
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
    );
}

export default ProductionHouseDetail;
