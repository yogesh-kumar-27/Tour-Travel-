import React from "react";
import data from './data'
import Reviewcard from "./Reviewcard";
export default function Review() {
  return (
    <section className="review">
      <div className="content">
        <span>testimonials</span>
        <h3>good news from our clients</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          id consequuntur tempora sunt ad nemo voluptatem accusantium eligendi
          eveniet quo, animi tempore adipisci aliquid, laborum quaerat error
          exercitationem enim rerum?
        </p>
      </div>
      <div className="box-container">
        {
            data.reviewData?.map(({image})=> (
                <Reviewcard
                key={image}
                image={image}
                />
            ))
        }
      </div>
    </section>
  );
}
