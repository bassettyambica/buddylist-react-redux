import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showAddBuddyForm, showSearchBuddy, closeAddBuddyForm, addBuddyToList, filterByName} from '../actions';
import Header from '../components/Header';

const mapStateToProps = state => ({
    isAddFormVisible: state.isAddFormVisible,
    isSearchFormVisible: state.isSearchFormVisible,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            showAddBuddyForm,
            showSearchBuddy,
            closeAddBuddyForm,
            addBuddyToList,
            filterByName
        },
        dispatch
    );
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);
