export const fetchHealths = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/healths')
        .then((resp) => resp.json())
        .then((healthsData) => {
            dispatch({ type: 'FETCH_HEALTHS', payload: healthsData });
        });
    };
};

export const addHealth = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/healths', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then((resp) => resp.json())
        .then((newHealthData) => {
            dispatch({ type: 'ADD_HEALTH', payload: newHealthData });
        });
    };
};

export const deleteHealth = (heaId) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/healths/${heaId}', {
            method: 'DELETE',
        })
        .then((resp) => resp.json())
        .then((health) => {
            dispatch({ type: 'DELETE_HEALTH', payload: health });
        });
    };
};
