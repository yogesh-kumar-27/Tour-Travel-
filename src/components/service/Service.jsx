import React from "react";
import data from './data'
import Servicecard from "./Servicecard";
export default function Service() {
  return (
    <section className="service" id="service">
      <div className="heading">
        <span>our service</span>
        <h1>countless expericences</h1>
      </div>
      <div className="box-container">
         {
             data.serviceData?.map(({title,description, icon})=>(
                 <Servicecard 
                 key={description}
                 title={title}
                 description={description}
                 icon={icon}
                 />
             ))
         }
      </div>
    </section>
  );
}
