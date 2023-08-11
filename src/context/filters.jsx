import { createContext, useState } from "react";


//1-ESTE ES EL QUE TENEMOS QUE CONSUMIR
export const FiltersContext = createContext()

//2-ESTE ES QUE NOS PROVEE ACCESO AL CONTEXTO
export function FiltersProvider ({children}) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })
    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}
        >
            {children}
        </FiltersContext.Provider>
    )
}