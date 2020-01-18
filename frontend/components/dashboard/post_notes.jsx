import React from 'react';
import { Link } from 'react-router-dom';

class PostNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: ""
        };
    }

    render() {
        let { post, users, session, loaded } = this.props;

        let currentUser = users[session.id];
        // console.log(this.props);
        // console.log(currentUser);

        let notesListSorted;
        if ( this.props.loaded ) {
            let likes = post.likes;
            let comments = post.comments;
            let notesList = { ...likes, ...comments };

            notesListSorted = Object.values(notesList).sort((a, b) =>
                a.created_at > b.created_at ? -1 : 1
            );
            // console.log('====================================');
            // console.log(notesListSorted);
            // console.log('====================================');
        }

        let notesItems;
        if ( notesListSorted ) {
            notesItems = notesListSorted.map((item, i) => {

                // console.log(item);

                let content;
                if (item.body) {
                    content = (
                        <div className="note-content">

                            <div>
                                <span className="note-user-link">
                                    <Link to={`/users/${item.user_id}`}>
                                        {users[item.user_id].username} {" "}
                                    </Link>
                                </span>
                                <span className="note-description">commented</span>
                            </div>

                            <div className="note-comment-body">
                                {/* <i className="fas fa-comment"></i> {" "} */}
                                {/* <i className="fas fa-plus"></i> {" "} */}
                                <i className="fas fa-comment-medical"></i> {" "}
                                {item.body}
                            </div>

                            <div className="note-datetime">
                                {new Date(item.created_at).format("mmm dd, yyyy · h:MM tt")}
                            </div>

                        </div>
                    )
                } 

                else {
                    content = (
                        <div className="note-content">
                            <div>
                                <span className="note-user-link">
                                    <Link to={`/users/${item.user_id}`}>
                                        {users[item.user_id].username} {" "}
                                    </Link>
                                </span>
                                <span className="note-description">liked this</span>
                            </div>
                            <div className="note-datetime">
                                {new Date(item.created_at).format("mmm dd, yyyy · h:MM tt")}
                            </div>
                        </div>
                    )
                }

                return (
                    <div className="note-item" key={Math.floor(Math.random()*1000000)}>
                        <div className="avatar">
                            <img className="avatar-image"></img>
                        </div>
                        <div className="note-background">
                            {content}
                        </div>
                    </div>
                )
            })

            let user = users[post.user_id]
            notesItems.push(


                <div className="note-item" key="note-user-posted">
                    <div className="avatar">
                        <img className="avatar-image"></img>
                    </div>
                    <div className="note-background">
                        <div className="note-content">
                            <div>
                                <span className="note-user-link">
                                    <Link to={`/users/${user.id}`}>
                                        {user.username} {" "}
                                    </Link>
                                </span>
                                <span className="note-description"> posted this</span>
                            </div>
                            <div className="note-datetime">
                                {new Date(post.created_at).format("mmm dd, yyyy · h:MM tt")}
                            </div>
                        </div>
                    </div>
                </div>


            )
        }



        return (
            <div>
                {notesItems}
            </div>

        )
    }


}

export default PostNotes;
