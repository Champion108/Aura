import React from "react";
import "./leftimg.css";
import Card from "./card";
import img1 from './img/img1.JPG';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';

export default function Left(){
    return(
        <div className="total">

            <div className="one">
            <Card
               url={img1}
               bg="white"
               num="1"
            />
            </div>

            <div className="two">
            <Card
               url={img2}
               bg="white"
               num="1"
            />
            </div>

            <div className="three">
            <Card
               url={img3}
               bg="white"
               num="1"
               className="one"
            />
            </div>

            <div className="four">
            <Card
               url="No URL"
               bg="rgba(255, 0, 0, 0.29)"
               num="2"
            />
            </div>

            <div className="five">
            <Card
               url="No URL"
               bg="antiquewhite"
               num="3"
            />
            </div>

        </div>
    )
}