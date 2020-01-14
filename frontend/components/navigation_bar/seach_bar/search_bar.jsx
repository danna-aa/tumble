import React from 'react';
import { Redirect } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: "",
            redirect: false,
            render: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchPosts(this.state.search);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {

        this.setState({ redirect: true });
        this.props.fetchPosts(this.state.search);

        if (this.state.redirect) {
            this.setState({ redirect: false });
        }

        this.setState({ render: <Redirect to={`/search/${this.state.search}`} /> });
    }

    resetForm() {
        this.setState({search: "", redirect: "false"});
        // console.log("reset");
    }

    render() {
        // let render;
        // if (this.state.redirect) {
        //     this.setState({redirect: false});
        //     render = <Redirect to={`/search/${this.state.search}`} />
        //     // console.log(this.state);
        // }
        return (
            <div className="search-bar" key={this.state.redirect}>
                <form className={'search-box'} onSubmit={e => this.handleSubmit(e)}>
                    <input
                        id="search"
                        className="search-input"
                        type="text"
                        placeholder="Search Tumblr"
                        title='Search posts and tags...try searching "hello world"'
                        onChange={this.update("search")}
                    />
                    <input type="submit" value="submit" className="hidden"/>
                </form>
                {this.state.render}
                {/* { this.state.redirect && <Redirect to={`/search/${this.state.search}`} /> } */}
            </div>
        );
    }
}

export default SearchBar;