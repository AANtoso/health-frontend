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
    }
}