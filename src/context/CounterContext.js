//burada ben global state tanımlayacağım!!
import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = ({children}) => {

    //global stateimi buraya tanımlıyorum!
    const [counter, setCounter] = useState(0);

    
    return <CounterContext.Provider value={{counter, setCounter}}>{children}</CounterContext.Provider>

}