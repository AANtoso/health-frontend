export const addMedication = (medication, healthId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/healths/${healthId}/medications`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(medication),
        })
        .then((resp) => resp.json())
        .then((health) => {
            dispatch({ type: 'ADD_MEDICATION', payload: health });
        }); 
    };
};

export const deleteMedication = (medId, heaId) => {
    return (dispatch) => {
        fetch(
            `http://localhost:3000/api/v1/healths/${heaId}/medications/${medId}`,
            {
                method: 'DELETE',
            },
        )
        .then((resp) => resp.json())
        .then((health) => {
            dispatch({ type: 'DELETE_MEDICATION', payload: health });
        }); 
    };
};

export const updateMedication = (medication) => {
    return (dispatch) => {
        fetch(
            'http://localhost:3000/api/v1/healths/${medication.health_id}/medications/$medication.id', 
            {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(medication),
        })
        .then((resp) => resp.json())
        .then((health) => {
            dispatch({ type: 'UPDATE_MEDICATION', payload: health });
        }); 
    };
};