import React from 'react';
import { Link } from "@reach/router";


const Header = (props) => {

    return(
    <>
        <div className="headerStyle">
            <div style={{textAlign: 'left'}}>
                <div className="titleStyle">{props.title}</div>
                <div className="subtitleStyle"> {props.subtitle} </div>
            </div>
            <Link className="linkStyle" to={props.linkPath}> {props.link} </Link>
        </div>
    </>
    )
}

export default Header;