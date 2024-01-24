import React from "react";
// import { cardData } from "../utility/constants";
// import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
export const MainPageBody = ({ title, description, imgurl, id }) => {
  console.log(title, description, imgurl);
  return (<div>
    <div className="ImageCards">
      <div className="card-container">
        <div class="card">
          <img src = {imgurl}/>
          {/* <img>{imgurl}</img> */}
          <div class="like-button">&#10084;</div>
          <Link to={`/product/${id}`} className="cardLink">
            <h2 class="heading">{title}</h2>
          </Link>
          <p class="description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
