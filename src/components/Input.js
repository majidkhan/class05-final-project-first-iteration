import React from 'react';

class Input extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(<div>
            <input value={this.props.inputValue}/>
        </div>);
    }
}
export default Input;

