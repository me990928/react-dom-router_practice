import React from "react";
import './common.css';
import { Link } from "react-router-dom";


function MyTopbar(){
    return(
        <div className="barTopBody">
            <Link to="/a" className="topLinks">ログイン</Link>
            <Link to="/a" className="topLinks">新規登録</Link>
        </div>
    );
}

export default MyTopbar;