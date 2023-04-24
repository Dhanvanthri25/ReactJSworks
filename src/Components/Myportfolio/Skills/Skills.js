import React from "react";
import './Skills.css';
import pic1 from './html1.png'
import pic2 from './css.png'
import pic3 from './bootst.png'
import pic4 from './corejava.png'
import pic5 from './js.png'
import pic6 from './react.png'
import pic7 from './nodejs.png'
import pic8 from './mongo.png'
import pic9 from './msql.png'
import pic10 from './spring2.img.png'
export function Skills() {
    return (
        <>
       
            <div className=" bgh  " id="skills">
                <div className="text-center bges">
                    <h2 className="tech p-5">TECHNICAL SKILLS</h2>
                </div>
                <div className="col-lg-12 row m-0">
                    <div className="mx-auto col-lg-12 row p-5 justify-content-center">
                        <div className="col-lg-2 text-center  bgskill bges col-12 head rounded-5"><img src={pic1} alt="no_img" className="col-6 p-3" /><h4>HTML</h4></div>
                        <div className="col-lg-2 text-center  bgskill bges col-12 head rounded-5"><img src={pic2} alt="no_img" className="col-6 p-3" /><h4>CSS</h4></div>
                        <div className="col-lg-2 text-center  bgskill bges col-12 head rounded-5"><img src={pic3} alt="no_img" className="col-6  p-3" /><h4>BOOT<br />STRAP</h4></div>
                        <div className="col-lg-2 text-center  bgskill bges col-12 head rounded-5"><img src={pic4} alt="no_img" className="col-6 p-3" /><h4>CORE-JAVA</h4></div>
                        <div className="col-lg-2 text-center  bgskill bges col-12 head rounded-5"><img src={pic5} alt="no_img" className="col-6 p-3" /><h4>JAVASCRIPT</h4></div>

                    </div>
                    <div className="  mx-auto col-lg-12 row p-5 justify-content-center">
                        <div className="col-lg-2 text-center bgskill bges col-12 head rounded-5"><img src={pic6} alt="no_img" className="col-6 p-3" /><h4>REACTJS</h4></div>
                        <div className="col-lg-2 text-center bgskill bges col-12 head rounded-5"><img src={pic7} alt="no_img" className="col-6 p-3" /><h4>NODEJS</h4></div>
                        <div className="col-lg-2 text-center bgskill bges col-12 head rounded-5"><img src={pic8} alt="no_img" className="col-6 p-3" /><h4>MONGO DB</h4></div>
                        <div className="col-lg-2 text-center bgskill bges col-12 head rounded-5"><img src={pic9} alt="no_img" className="col-6 p-3" /><h4>MYSQL</h4></div>
                        <div className="col-lg-2 text-center bgskill bges col-12 head rounded-5"><img src={pic10} alt="no_img" className="col-6 p-3" /><h4>SPRINGBOOT</h4></div>
                    </div>
                    <div className="p-5"></div>
                </div>
            </div>
            
            
        </>
    );

}

