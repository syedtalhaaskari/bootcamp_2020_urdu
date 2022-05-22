import { createContext, useReducer } from "react";
import ShoeReducer from "../Reducer/ShoeReducer";

const initialShoeStore = {
    dayMode: true,
}

let ShoeContext = createContext(initialShoeStore);

export default ShoeContext;

export const ShoeProvider = ({ children }) => {
    const [{ dayMode }, dispatch] = useReducer(ShoeReducer, initialShoeStore);
    
    const changeMode = () => {
        let rootCss = document.querySelector(':root');
        rootCss.style.setProperty('--body-background-color', dayMode ? '#333' : '#fff')
        rootCss.style.setProperty('--nav-link-color', dayMode ? '#ccc' : '#777')
        rootCss.style.setProperty('--nav-background-color', dayMode ? '#333' : '#ddd')
        rootCss.style.setProperty('--nav-border-bottom-color', dayMode ? '#ccc' : '#aaa')
        rootCss.style.setProperty('--nav-toggler-border-color', dayMode ? '#ccc' : '#777')
        rootCss.style.setProperty('--nav-toggler-text-color', dayMode ? '#ccc' : '#777')
        rootCss.style.setProperty('--main-heading-color', dayMode ? '#ccc' : '#444')
        rootCss.style.setProperty('--products-heading-color', dayMode ? '#ccc' : '#666')
        rootCss.style.setProperty('--shoe-heading-color', dayMode ? '#ccc' : '#444')
        rootCss.style.setProperty('--image-shadow-color', dayMode ? '#ddd' : '#ccc')
        dispatch({
            type: "CHANGE_MODE",
        })
    }

    return (
        <ShoeContext.Provider value={{
            dayMode: dayMode,
            changeMode,
        }}>
            {children}
        </ShoeContext.Provider>
    )
}