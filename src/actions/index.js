import axios from 'axios';

export const DB_TEST_START = "DB_TEST_START";
export const dbTestStart = () => {
    return { type: DB_TEST_START }
}
export const DB_TEST_RESULTS = "DB_TEST_RESULTS";
export const dbTestResults = (data) => {
    return { type: DB_TEST_RESULTS, data }
}
export const DB_TEST_ERROR = "DB_TEST_ERROR";
export const dbTestError = (data) => {
    return { type: DB_TEST_ERROR, data }
}

export const DB_TEST_NEW = "DB_TEST_NEW"
export const dbTestNew = () => {
    return dispatch => {
        dispatch(dbTestStart());
        axios.get(`/api/battlerites`)
            .then(res => dispatch(dbTestResults(JSON.stringify(res.data))))
            .catch(err => dispatch(dbTestError(err)))

    }
}

export const DB_TEST_NEW2 = "DB_TEST_NEW2"
export const dbTestNew2 = () => {
    return dispatch => {
        dispatch(dbTestStart());
        axios.get(`/api/loadouts`)
            .then(res => dispatch(dbTestResults(JSON.stringify(res.data))))
            .catch(err => dispatch(dbTestError(err)))

    }
}
