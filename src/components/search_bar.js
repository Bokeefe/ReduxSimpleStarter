import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state={ term: 'Starting Calue' };
    }

   render(){
       return ( 
           <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={event=>this.setState({term:event.target.value})} /> 
                    <p>{this.state.term}</p>
          </div>
       );
   }
}

export default SearchBar;