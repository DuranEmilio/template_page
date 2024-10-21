import React, { useState } from "react";

export const Image = ({ title, largeImage, smallImage, description, text1, text2 }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <div href={largeImage} title={title} data-lightbox-gallery="gallery1">
          <div
            className="hover-text"
            onMouseEnter={() => setShowMore(true)}
            onMouseLeave={() => setShowMore(false)}
          >
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
          <img src={smallImage} className="img-responsive" alt={title} />{" "}
        </div>{" "}
      </div>
      <div className={`modal-gallery ${showMore ? 'active-modal' : ''}`}>
        <h4>Ejemplo de Cómo Referenciar bajo Normas APA</h4>
        <p>{text1}</p>
        <h4>Ejemplo de Cómo Citar en el Texto/Párrafo</h4>
        <p>{text2}</p>
      </div>
    </div>
  );
};
