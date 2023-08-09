import { useState } from "react"
import "./Filters.css"

export function Filters () {
    const [minPrice, setMinPrice] = useState(0)

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Precio</label>
                <input 
                type="range" 
                id="price"
                min="0"
                max="2000"
                onChange={handleChangeMinPrice}  
                />
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor="category">Categoria</label>
                <select id="category">
                    <option value="all">Todas</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}