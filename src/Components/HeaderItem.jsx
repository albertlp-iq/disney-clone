import React from 'react'

function HeaderItem({name,Icon ,textColor= "text-black"}) {
  return (
    <div className='{flex flex items-center cursor-pointer text-[15px] hover:text-white gap-3 hover:underline underline-offset-4 group hover:text-white hover:scale-110 ${className}}'>
        <Icon size={20} className={`${textColor} group-hover:text-white group-hover:scale-110`}/>
        <h2 className={`group-hover:text-white group-hover:scale-110 ${textColor}`}>{name}</h2>
    </div>
  )
}

export default HeaderItem