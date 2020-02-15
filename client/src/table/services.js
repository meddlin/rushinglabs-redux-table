export const tableService = {
    getInitialTable
};

const config = {
    apiUrl: process.env.REACT_APP_API_URL || 'https://localhost:5001'
};

/**
 * Get an initial set of data from the API to show in a table.
 */
function getInitialTable() {
    const requestOptions = {
        method: 'GET',
        // headers: { 'Authorization': `Bearer ${user.token}`, 'Content-Type': 'application/json' }
    };

    return fetch(`${config.apiUrl}/table`, requestOptions).then(handleResponse);
};

/**
 * Generic handler to manage the HTTP response from the endpoint.
 * @param {*} response 
 */
function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // authenticationService.logout();
                Location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}