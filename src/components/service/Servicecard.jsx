import React from 'react'

export default function Servicecard({title,description, icon}) {
    return (
        <div className="box">
        <i className={icon}></i>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
    )
}
