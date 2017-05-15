export const ADD_BUDDY = "ADD_BUDDY";
export const EXPAND_BUDDY = "EXPAND_BUDDY";
export const DELETE_BUDDY = "DELETE_BUDDY";
export const SHOW_ADDBUDDY_FORM = "SHOW_ADDBUDDY_FORM";
export const SHOW_SEARCHBUDDY_FORM = "SHOW_SEARCHBUDDY_FORM";
export const HIDE_SEARCHBUDDY_FORM = "HIDE_SEARCHBUDDY_FORM";
export const FILTER_BY_NAME = "FILTER_BY_NAME";


export function addBuddyToList(buddyObject) {
    return {
        type: ADD_BUDDY,
        buddyItem: buddyObject.item,
        status: buddyObject.status
    };
}

export function expandBuddy(index) {
    return {
        type: EXPAND_BUDDY,
        index
    };
}

export function deleteBuddy(index) {
    return {
        type: DELETE_BUDDY,
        index
    };
}

export function showAddBuddyForm(){
    return {
        type: SHOW_ADDBUDDY_FORM,
    };
}

export function showSearchBuddy(){
    return {
        type: SHOW_SEARCHBUDDY_FORM,
    };
}

export function closeAddBuddyForm() {
    return {
        type: HIDE_SEARCHBUDDY_FORM
    };
}

export function filterByName(name) {
    return {
        type: FILTER_BY_NAME,
        name
    };
}
