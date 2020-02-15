import { tableConstants } from './constants';
import { tableService } from './services';
// import { alertActions } from '../_helpers/_telemetry/alertActions';

export const tableActions = {
    getInitialTable
};

function getInitialTable() {
    return dispatch => {
        dispatch(request());

        tableService.getInitialTable(1)
            .then(
                result => {
                    dispatch(success(result));
                    // dispatch(alertActions.success('Table retrieved!'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: tableConstants.GET_TABLE_REQUEST } }
    function success(data) { return { type: tableConstants.GET_TABLE_SUCCESS, data } }
    function failure(error) { return { type: tableConstants.GET_TABLE_FAILURE, error } }
};