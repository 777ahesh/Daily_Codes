import React from "react";

const Cards = (props)=>{
    return(<>
       <div className="card">
                <img src={props.imgsrc} alt="mypic" className="card_img"/>
                <div className = "card_info">
                    <span className="card_category">{props.title}</span>
                    <h3 className="card_title">{props.sname}</h3>
                    <a href={props.link}>
                    <button> Watch Now </button>
                    </a>
                </div>
            </div>
    </>)
};
export default Cards;