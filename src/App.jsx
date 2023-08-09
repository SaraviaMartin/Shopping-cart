import { useState } from "react"
import { Products } from "./components/Products"
import {products as initialProducts} from "./mocks/products.json"
import { Header } from "./components/Header"

function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  //ESTO ES PARA JUNIORS
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const filteresProducts = filterProducts(products)

  return (
    <>
      <Header/>
      <Products products={filteresProducts}/>
    </>
  )
}

export default App
