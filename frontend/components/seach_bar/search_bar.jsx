import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar">
                <form>
                    <input className="search-input" type="text" placeholder="Search Tumblr"/>
                </form>
            </div>
        )
    }
}

export default SearchBar;