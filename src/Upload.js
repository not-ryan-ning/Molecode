import picture2 from "./picture2.png"

function Upload() {
    return(
            <div id="Upload" className="uploadContainer">
                <img src={picture2} alt="" className="picture2"/>
                <div className="uploadCTA">
                    <div className="uploadTitle">
                        <h1><span className="special">UPLOAD</span></h1>
                    </div>
                    <div className="uploadTitle1">
                        <h1>FILES</h1>
                    </div>
                </div>
                <div className="uploadButtons">
                    <button>Upload File</button> <br></br>
                    <button>Results</button>
                </div>
            </div>
    )

}

export default Upload;