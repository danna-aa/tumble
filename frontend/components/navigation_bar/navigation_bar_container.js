import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavigationBar from './navigation_bar';
import { fetchPosts } from "../../actions/post_actions";

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchPosts: filter => dispatch(fetchPosts(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
