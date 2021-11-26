import React from 'react'

export default function DestinationCard({title,description,icon,image}) {
    return (
        <div className="box">
        <div className="image">
            <img src={image} alt="" />
        </div>
        <div className="content">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="#destination">read more <i className={icon}></i></a>
        </div>
    </div>
    )
}
