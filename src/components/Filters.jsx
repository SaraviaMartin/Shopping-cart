export function Filters () {
    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Price</label>
                <input 
                type="range" 
                id="price"
                min="0"
                max="2000"  />
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