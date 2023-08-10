import { useState, useId } from "react"
import "./Filters.css"
import { useFilters } from "../hooks/useFilters"

export function Filters () {
    const {setFilters} = useFilters()
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterID = useId()

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        setFilters(prevState =>({
            ...prevState,
            minPrice: event.target.value

        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Precio</label>
                <input 
                type="range" 
                id={minPriceFilterId}
                min="0"
                max="1000"
                onChange={handleChangeMinPrice}  
                />
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterID}>Categoria</label>
                <select id={categoryFilterID} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}