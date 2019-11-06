import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar">
                <form>
                    <span className="search-icon icon"><i className="fa fa-search"></i></span>
                    <input className="search-input" type="text" placeholder="Search Tumblog"/>
                </form>
            </div>
        )
    }
}

export default SearchBar;