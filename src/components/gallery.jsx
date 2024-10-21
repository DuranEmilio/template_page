import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Tipos de citado</h2>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                <div href={`types/${d.title}`}
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-4"
                >
                  <Image
                    description={d.description}
                    title={d.title}
                    largeImage={d.largeImage}
                    smallImage={d.smallImage}
                    text1={d.text1}
                    text2={d.text2}
                  />
                </div>
              ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
