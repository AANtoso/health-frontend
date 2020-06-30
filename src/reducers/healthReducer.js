const healthReducer = (state = { healths: [] }, action) => {
    switch (action.type) {
        case 'FETCH_HEALTHS':
            return { ...state, healths: action.payload };
        
        case 'ADD_HEALTH':
            return { ...state, healths: [...state.healths, action.payload ] };
        
        case 'DELETE_HEALTH':
            let newHealthArr = state.healths.filter(
                (hea) => hea.id !== action.payload.id,
            );
            return { ...state, healths: newHealthArr };

        case 'ADD_MEDICATION':
            let addMedOnhealths = state.healths.map((hea) => {
                if (hea.id === action.payload.id) {
                    return action.payload;
                } else {
                    return hea;
                }
            });
            return { ...state, healths: addMedOnhealths};

        case 'DELETE_MEDICATION':
            let deletedMedOnHealth = state.healths.map((hea) => {
                if (hea.id === action.payload.id) {
                    return action.payload;
                } else {
                    return hea;
                }
            });
            return {
                ...state,
                healths: deletedMedOnHealth
            };
    }
}