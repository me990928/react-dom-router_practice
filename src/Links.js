import React from "react";
import { Link } from "react-router-dom";
import "./compornents/common.css";

function Links(){
    return(
        <div>
            <div  className="links">
            <Link to="/">Home</Link><br />
            </div>

            <div  className="links">
                <Link to="/about"  className="links">About</Link>
            </div>
        </div>
    );
}

export default Links;