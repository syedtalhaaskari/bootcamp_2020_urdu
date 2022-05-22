const ShoeReducer = (state, action) => {
    switch(action.type) {
        case "CHANGE_MODE":
            return {
                dayMode: !state.dayMode,
            }
        default:
            return state;
    }
}

export default ShoeReducer;