import React, {Component} from 'react';
import "../style/css-final.css";
import "../style/bootstrap.min.css";

class Search extends Component{
    render(){
        return (
            <div>
                <form className="form-inline">
                    <input 
                        className="form-control form-control-sm mr-3 w-75" 
                        type="text" 
                        placeholder="Search" 
                        aria-label="Search"
                        id="Search"
                        onChange={this.props.doSearch}
                        value={this.props.keyword}
                        />
                </form>
                <span className="glyphicon glyphicon-search"></span>
            </div>
        );
    }
};

export default Search;
