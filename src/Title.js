import picture from "./Picture1.png";

function Title() {

    return(
        <div className="container">
            <div className="column">
                <div className="firstSubTitle">
                    <p>DECODING</p>
                </div>
                <div className="mainTitle">
                    <h1>PROTEIN</h1>
                </div>
                <div className="secondSubTitle">
                    <h1>SEQUENCES</h1>
                </div>
                <div className="thirdSubTitle">
                    <p>at your fingertips.</p>
                </div>
            </div>
            <div className="column">
                <div className="bar"></div>
                  
                <img src= { picture } alt="" className="picture1"/>
            </div>
        </div>


    );
}

export default Title;