const CountryReducer = (state, { type, payload: { countryName, selectedTab, countryData } }) => {
    switch (type) {
        case "CHANGE_COUNTRY":
            return {
                ...state,
                countryName
            }
        case "CHANGE_COUNTRY_DATA":
            return {
                ...state,
                countryData,
            }
        case "CHANGE_SELECTED_TAB":
            return {
                ...state,
                selectedTab
            }
        default:
            return state
    }
}

export default CountryReducer