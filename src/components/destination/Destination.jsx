import React from 'react'
import data from './data'
import DestinationCard from './DestinationCard'
export default function Destination() {
    return (
        <section className='destination' id='destination'>
            <div className="heading">
                <span>our destination</span>
                <h1>make your destination</h1>
            </div>
            <div className="box-container">
            {
                data.destinationData?.map(({title,description,icon,image})=>(
                    <DestinationCard
                    key={title}
                    title={title}
                    description={description}
                    icon={icon}
                    image={image}
                    />
                ))
            }
            </div>
        </section>
    )
}
