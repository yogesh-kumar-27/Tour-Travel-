import React from 'react'

export default function Gallerycard({image,country}) {
    return (
        <div className="box">
        <img src={image} alt="" />
        <span>travel spot</span>
        <h3>{country}</h3>
    </div>
    )
}
