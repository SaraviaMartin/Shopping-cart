import { useCart } from '../hooks/useCart.js'
import { useFilters } from '../hooks/useFilters'
import { Filters } from './Filters'
import './Footer.css'

export function Footer () {
  const { filters } = useFilters()

  return (
    <footer className='footer'>
      <h4>Prueba técnica de React ⚛️ － <span>@JuanMartin</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  )
}