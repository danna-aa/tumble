import { connect } from 'react-redux';
// import { logout } from '../../actions/session_actions';
import Dashboard from './dashboard';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => ({
    // logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
