import React, { useState } from "react";

export const Image = ({ title, largeImage, smallImage }) => {

  return (
    <div className="portfolio-item" onClick={() => { console.log('click') }}>
      <div className="hover-bg">
        {" "}
        <div href={largeImage} title={title} data-lightbox-gallery="gallery1">
          <div
            className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={smallImage} className="img-responsive" alt={title} />{" "}
        </div>{" "}
      </div>
    </div>
  );
};
