import React from 'react';

class ToggleButton extends React.Component{
    mapView(){
        console.log("map view");
        }
    render(){
        return <div>
            {/* <button onClick={this.props.calendarButton}>Calendar View</button>
            <button className={this.props.mapButton}>Map View</button> */}
        </div>;
    }
}

export default ToggleButton;    