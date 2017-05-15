import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteBuddy, expandBuddy} from '../actions';
import BuddyListSection from '../components/BuddyListSection';

const mapStateToProps = state => ({
    buddyList: state.buddyList,
    filterName: state.filterName
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            deleteBuddy,
            expandBuddy
        },
        dispatch
    );
};


export default connect(mapStateToProps, mapDispatchToProps)(BuddyListSection);
