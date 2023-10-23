import { Link } from 'react-router-dom';

// import css
import './_style.scss';

export default function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link to="/admin" className='link'>Overview</Link>
      </li>
      <li>
        <Link to="/customers" className='link'>Customer</Link>
      </li>
      <li>
        <Link to="/products" className='link'>Product</Link>
      </li>  
      <li>
        <Link to="/orders" className='link'>Orders</Link>
      </li>  
    </ul>
  )
}