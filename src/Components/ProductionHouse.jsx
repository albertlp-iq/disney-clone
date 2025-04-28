import React from 'react'
import AoiI from './../assets/Images/AoiI.webp'
import AoiV from './../assets/Videos/AoiV.webm'
import IchikoI from './../assets/Images/IchikoI.webp'
import IchikoV from './../assets/Videos/IchikoV.webm'
import TamaI from './../assets/Images/TamaI.webp'
import TamaV from './../assets/Videos/TamaV.webm'
import YukiI from './../assets/Images/YukiI.webp'
import YukiV from './../assets/Videos/YukiV.webm'
import YuinaI from './../assets/Images/YuinaI.webp'
import YuinaV from './../assets/Videos/YuinaV.webm'
import { Link } from 'react-router-dom';

function ProductionHouse() {
    const productionHouseList=[
        {
            id: 1,
            name: "Aoi Production",
            image: AoiI,
            video: AoiV,
        },
        {
            id: 2,
            name: "Ichiko Production",
            image: IchikoI,
            video: IchikoV,
        },
        {
            id: 10,
            name: "Tama Production",
            image: TamaI,
            video: TamaV,
        },
        {
            id: 4,
            name: "Yuki Production",
            image: YukiI,
            video: YukiV,
        },
        {
            id: 7,
            name: "Yuina Production",
            image: YuinaI,
            video: YuinaV,
        }
    ]
  return (
    <div className='flex gap-3 md-gap-4 p-7 px-7 md:px-7'>
        {productionHouseList.map((item) => (
            // <div className='border-[2px] border-[#333] rounded-lg m-2 p-0.5 flex items-center
            //     hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-black'>
            //     {/* <video   
            //     src={item.video} autoPlay loop muted playsInline 
            //     className='
            //     absolute z-[2] top-0 left-0 w-full h-full rounded-md opacity-0 hover:opacity-90' /> */}
            //     <img 
            //     src={item.image} alt={item.name} 
            //     className='w-full z-[1] opacity-75' />
            // </div>
            <Link to={`/production_house/${item.id}`} key={item.id}>
                <div className='border-[2px] border-[#333] rounded-lg m-2 p-0.5 flex items-center
                    hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-black'>
                    <img 
                        src={item.image} 
                        alt={item.name} 
                        className='w-full z-[1] opacity-75' 
                    />
                </div>
            </Link>
        ))}
    </div>
  )
}

export default ProductionHouse