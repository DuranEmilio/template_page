import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row" style={{ display: 'flex', flexDirection: (props.index % 2) === 0 ? 'row-reverse' : '' }}>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src={`/img/about/${props.index}.jpg`} className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{props.data.title}</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>{props.data['list-theme']}</h3>
              <div className="list-style">
                <div className="col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
