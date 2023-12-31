import { useId } from "react"
import "./Filters.css"
import { useFilters } from "../hooks/useFilters"

export function Filters () {
    const {filters, setFilters} = useFilters()
    
    const minPriceFilterId = useId()
    const categoryFilterID = useId()

    const handleChangeMinPrice = (event) => {
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
                value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterID}>Categoria</label>
                <select id={categoryFilterID} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Celulares</option>
                    <option value="home-decoration">Decoracion para el hogar</option>
                    <option value="groceries">Comestibles</option>
                    <option value="skincare">Cuidado corporal</option>
                    <option value="fragrances">Perfumes</option>
                    
                </select>
            </div>
        </section>
    )
}