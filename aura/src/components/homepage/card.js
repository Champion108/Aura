import React from "react";
import './card.css';

export default function Card(props){
  if(props.url==="No URL"){
          let c = "card"+props.num;
          return(
            <div className={c} background-color={props.bg}>
            </div>
          )
        }
      else{
             let c = "card"+props.num;
         return(
          <div>
             <div className={c} background-color={props.bg}>
                 <img className="card-img" src={props.url} alt="bg"></img>
             </div>
          </div>
         )
      }
}

