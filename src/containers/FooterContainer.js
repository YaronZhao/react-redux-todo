import {connect} from 'react-redux'
import {setVisibilityFilter} from "../actions";
import Footer from "../components/Footer";

const mapStateToProps = state => ({
   activeCount: state.todoList.activeCount,
   currentFilter: state.visibilityFilter
});

export default connect(
    mapStateToProps,
    { setVisibilityFilter }
)(Footer)
