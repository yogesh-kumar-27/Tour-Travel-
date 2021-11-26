import React from 'react'

export default function Reviewcard({image}) {
    return (
        <div className="box">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quibusdam.</p>
        <div className="user">
            <img src={image} alt="" />
            <div className="info">
                <h3>john deo</h3>
                <span>designer</span>
            </div>
        </div>
    </div>
    )
}
