import { createContext, useReducer } from "react";
import CountryReducer from "../reducer/CountryReducer";

const initialCountryState = {
    countryName: "Global",
    selectedTab: 0,
    countryData: { confirmed: 0, recovered: 0, deaths: 0 },
}

const CountryContext = createContext(initialCountryState)

export default CountryContext

export const CountryProvider = ({ children }) => {
    const [{ countryName, selectedTab, countryData }, dispatch] = useReducer(CountryReducer, initialCountryState)

    const changeCountryName = (countryName) => {
        dispatch({
            type: "CHANGE_COUNTRY",
            payload: {
                countryName
            }
        })
    }

    const changeSelectedTab = (selectedTab) => {
        dispatch({
            type: "CHANGE_SELECTED_TAB",
            payload: {
                selectedTab
            }
        })
    }

    const changeCountryData = (countryData) => {
        dispatch({
            type: "CHANGE_COUNTRY_DATA",
            payload: {
                countryData
            }
        })
    }

    return (
        <CountryContext.Provider value={{
            countryName,
            selectedTab,
            countryData,
            changeCountryName,
            changeSelectedTab,
            changeCountryData,
        }}>
            {children}
        </CountryContext.Provider>
    )
}