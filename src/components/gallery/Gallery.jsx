import React from "react";
import data from './data'
import Gallerycard from "./Gallerycard";
export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="heading">
        <span>our gallery</span>
        <h1>we record memories</h1>
      </div>
      <div className="box-container">
            {
                data.galleryData?.map(({country,image})=>(
                    <Gallerycard
                    key={country}
                    country={country}
                    image={image}
                    />
                ))
            }
      </div>
    </section>
  );
}
