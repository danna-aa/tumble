import React from 'react';
import { Link } from 'react-router-dom';
import ExplorePost from './explore_post';



class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.posts;
    }

    componentDidMount() {
        this.props.fetchPosts();
        window.scrollTo(0, 0);
    }

    handleBackToTop(e) {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        let { posts, users, session } = this.props;

        // dashboard sorted in order of newest at the top
        // let postsList = Object.values(posts).sort((a, b) => (a.updated_at > b.updated_at) ? -1 : 1);

        function shuffle(arr) {
            let ctr = arr.length, temp, index;
            while (ctr > 0) {
                index = Math.floor(Math.random() * ctr);
                ctr--;
                temp = arr[ctr];
                arr[ctr] = arr[index];
                arr[index] = temp;
            }
            return arr;
        }
        
        let postsList = shuffle(Object.values(posts));



        // map list of dashboard items 
        let dashList = (postsList.map(post => (
            <ExplorePost key={post.id} post={post} users={users} />
        )));

        return (
            <div className="explore-wrapper">
                <div className="explore">
                    {dashList}
                    <div className="back-to-top icon" onClick={this.handleBackToTop}><i className="fas fa-angle-double-up"></i></div>
                </div>
            </div>
        )
    }


}

export default Explore;
