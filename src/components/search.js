import React, { Component } from 'react';

class Search extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    
    onInputChange(term){
        this.setState({term});
        this.props.onSearcChange(term);
    }

    render() {
        return (
            <div>
                <h3>Youtube Search</h3>
                    <div className="search-bar">
                        <input
                        value={this.state.term}
                        onChange={event => this.onInputChange(event.target.value)} 
                        type="text" placeholder="Search" />
                    </div>
            </div>
        );
    }
}

export default Search;