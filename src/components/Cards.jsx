import React from "react";
import "./Card.css";
// import ReactDom from "react-dom";

export default function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgscr} alt="my pic" className="card_img" />
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
            <a href={props.link} target="blank">
              <button className="button1"> Add to cart</button>

              <button className="button2"> Buy Now </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
