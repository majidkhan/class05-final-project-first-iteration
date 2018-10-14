import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(<div>
            <input value={this.props.inputValue}/>
        </div>);
    }
}
export default Search;

