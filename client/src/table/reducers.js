import { tableConstants } from './constants';

export function table(state = {}, action) {
    switch(action.type) {
        case tableConstants.GET_TABLE_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case tableConstants.GET_TABLE_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.data
            });
        case tableConstants.GET_TABLE_FAILURE:
            return Object.assign({}, state, {
                loading: false
            });

        default:
            return state;
    }
}