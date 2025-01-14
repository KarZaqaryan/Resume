import React from 'react';
import About from "../component/about";

function Main(props) {
    return (
        <div className={"container m-auto main_div"}>
            <div className="row">
              <About/>

                <div className="col-md-8 col-lg-9 ">
                    <div className="content">

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Main;