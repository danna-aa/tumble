import React from 'react';
import { Redirect } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: "",
            redirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        console.log("submit");
        this.setState({redirect: true});
    }

    render() {
        return (
            <div className="search-bar">
                <form className={'search-box'} onSubmit={e => this.handleSubmit(e)}>
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search Tumblr"
                        onChange={this.update("search")}
                    />
                    <input type="submit" value="submit" className="hidden"/>
                </form>
                {this.state.redirect && <Redirect to={`/search/${this.state.search}`} />}
            </div>
        );
    }
}

export default SearchBar;