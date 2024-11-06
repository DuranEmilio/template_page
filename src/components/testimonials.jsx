import React from "react";

export const Testimonials = (props) => {
  const Block = ({ data }) => {
    return (
      <div className="block-testimonial">
        <p>{data.name}</p>
        <span>{data.text}</span>
      </div>
    )
  }

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Como funciona un modelo de IA</h2>
          <div className="layout-testimonials">
            {
              props.data
                ? props.data.map((d, i) => (
                  <Block key={`${d.name}-${i}`} data={d} />
                ))
                : "Loading..."
            }
          </div>
        </div>
      </div>
    </div>
  );
};
