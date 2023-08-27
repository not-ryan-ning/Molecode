import picture3 from "./picture3.png"

function Navbar() {
    
    return (
        <div className="navbar">
            <ul>
                <li className="uploadButton">
                    <a rel="noopener" href="#Upload">UPLOAD</a> 
                </li>
                <li className="processButton">
                    <a rel="noopener" href="#About">ABOUT</a> 
                </li>
                <li className="titleName">
                    <a rel="noopener" href="#Title"><h1>MOLECODE</h1></a> 
                </li>
            </ul>
        </div>
    );
}

export default Navbar;