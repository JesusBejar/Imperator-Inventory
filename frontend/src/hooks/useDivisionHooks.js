import { DivisionsContext } from "../context/DivisionContext";
import { useContext } from "react";

export const useDivisionsContext = () => {
    const context = useContext(DivisionsContext)

    if(!context) {
        throw Error('useDivisionsProvider must be used inside of DivisionsContextProvider')
    }

    return context
}