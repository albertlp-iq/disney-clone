import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from './../assets/Images/logo-zzz.webp'
import logoprofile from './../assets/Images/anby-profile.jpg'
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem.jsx'

function Header() {
    const [toggle, setToggle] = useState(false);
    const menu = [
        { name: "Home", path: "/", icon: HiHome },
        { name: "Search", path: "/search", icon: HiMagnifyingGlass },
        { name: "Watchlist", path: "/watchlist", icon: HiPlus },
        { name: "Top Rated", path: "/top-rated", icon: HiStar },
        { name: "Movies", path: "/movies", icon: HiPlayCircle },
        { name: "TV Shows", path: "/tv-shows", icon: HiTv },
    ];

    return (
        <div className='flex justify-between items-center bg-[#ee7709] w-full px-4 md:px-10 py-3 relative z-20'>
            <div className='flex items-center gap-4'> {/* Logo and Menu */}
                <a href="https://zenless.hoyoverse.com/en-us/" target="_blank" rel="noopener noreferrer">
                    <div className="w-[100px] flex justify-center">
                        <img src={logo} alt="Logo" className="w-[80px] md:w-[70px] object-cover" />
                    </div>
                </a>
                <div className='hidden md:flex gap-10'>
                    {menu.map((item) => (
                        <Link to={item.path} key={item.name}>
                            <HeaderItem name={item.name} Icon={item.icon} />
                        </Link>
                    ))}
                </div>
                <div className='flex md:hidden gap-10'>
                    {menu.map((item, index) => index < 3 && (
                        <Link to={item.path} key={item.name}>
                            <HeaderItem name={item.name} Icon={item.icon} />
                        </Link>
                    ))}
                    <div className='md:hidden' onClick={() => setToggle(!toggle)}> {/* More (3 Dots)*/}
                        <HeaderItem name="" Icon={HiDotsVertical} />
                        {toggle ? <div className='absolute mt-2 bg-[#1a1a1a] border-[1px] border-[#333] p-3 px-4 py-4'>
                            {menu.map((item, index) => index > 2 && (
                                <Link to={item.path} key={item.name}>
                                    <HeaderItem name={item.name} Icon={item.icon} textColor="text-white"/>
                                </Link>
                            ))}
                        </div> : null}
                    </div>
                </div>
            </div> {/* Profile */}
            <div className="w-[100px] flex justify-center">
                <img src={logoprofile} alt="Logo" className="w-[50px] h-[50px] rounded-full object-cover" />
            </div>
        </div>
    );
}

export default Header