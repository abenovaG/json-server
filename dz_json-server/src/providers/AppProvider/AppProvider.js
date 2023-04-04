import {AppContext} from "./config";
import{useState} from "react";

export const AppProvider = ({ children }) => {

    const [count, setCount] = useState(0)


    const defaultValue = {
        count, setCount
    }

    return (
        <AppContext.Provider value={defaultValue}>
            {children}
        </AppContext.Provider>
    )
}