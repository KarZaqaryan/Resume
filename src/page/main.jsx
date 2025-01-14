import React from 'react';
import About from "../component/about";
import Experiance from "../component/experiance";
import Education from "../component/education";
import Rating from "../component/rating";
import Languages from "../component/languages";
import Hobbies from "../component/hobbies";
import Certeficate from "../component/certeficate";

function Main(props) {
    return (
        <div className={"container m-auto"}>
            <div className="row">
                <About/>

                <div className="col-md-8 col-lg-9 ">
                    <div className="content">
                        <Experiance/>
                        <Education/>
                        <Rating/>
                        <Languages/>
                        <Hobbies/>
                        <Certeficate/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Main;