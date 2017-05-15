import {ADD_BUDDY, EXPAND_BUDDY, DELETE_BUDDY, SHOW_ADDBUDDY_FORM,SHOW_SEARCHBUDDY_FORM, HIDE_SEARCHBUDDY_FORM,FILTER_BY_NAME} from "../actions/index.js";
//import {combineReducers} from "redux";

const initialState = {
    buddyList: [],
    isAddFormVisible: false,
    isSearchFormVisible: false
};

function buddiesApp(state = initialState, action) {
    switch (action.type) {
        case ADD_BUDDY:
            return Object.assign({}, state, {
                buddyList: [
                    ...state.buddyList,
                    {
                        buddyItem: action.buddyItem,
                        status: action.status
                    }
                ]
            });
        case EXPAND_BUDDY:
            return Object.assign({}, state, {
                buddyList: state.buddyList.map((buddyItem,index) => {
                    if (index === action.index) {
                        return Object.assign({}, buddyItem, {
                            expand:!buddyItem.expand
                        });
                    }
                    return buddyItem;
                })
            });

        case DELETE_BUDDY:
            return Object.assign({}, state, {
                buddyList: state.buddyList.filter((buddyItem,index) => {
                    return (index !== action.index)
                })
            });
        case SHOW_ADDBUDDY_FORM:
            return Object.assign({}, state, {
                isAddFormVisible: true,
                isSearchFormVisible: false
            });
        case SHOW_SEARCHBUDDY_FORM:
            return Object.assign({}, state, {
                isSearchFormVisible: true,
                isAddFormVisible: false
            });
        case HIDE_SEARCHBUDDY_FORM:
        return Object.assign({}, state, {
            isAddFormVisible: false
        });
        case FILTER_BY_NAME:
        return Object.assign({}, state, {
            filterName: action.name
        });
        default:
            return state;
    }
}
export default buddiesApp;
