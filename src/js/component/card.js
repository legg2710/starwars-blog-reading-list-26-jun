import React from "react";
import Proptypes from "prop-types";

export const Card = props =>{
    return(
        <div className="card col-3" style={{width: "18rem"}}>
  <img src={props.url}className="card-img-top" alt="https://lumiere-a.akamaihd.net/v1/images/cg-67-main_c6fbf68a.jpeg?region=158%2C0%2C964%2C542&width=768"></img>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.content}</p>
    <a href={props.link} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    );
}

Card.Proptypes = {
    url: Proptypes.string,
    title: Proptypes.string,
    content: Proptypes.string,
    link: Proptypes.string,
}