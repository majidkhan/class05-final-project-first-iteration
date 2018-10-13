import React from "react";
import SiteMenu from "./SiteMenu";
import "./SiteHeader.css";

class SiteHeader extends React.Component {
    render() {
        return (
            <div className="header">
              <div className="container-fluid">
                <div className="siteLogo">
                   <a href="#link"><img src={require('./thread-logo.png')} width="50px" height="60px" /></a>
                </div>
                <div className="menu">
                    <SiteMenu />
                </div>

              </div>
            </div>
        );
    }
}

export default SiteHeader;