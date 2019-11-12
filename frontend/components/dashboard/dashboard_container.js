import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import Dashboard from './dashboard';

const mapStateToProps = state => ({
    state
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
