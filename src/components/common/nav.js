import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav> 
      <div>
        <Link to="lamps">
          <h3>Lamps</h3>
          </Link>
        <ul>
          <Link to="lamps/floor"><li>Floor</li></Link>
          <Link to="lamps/ceiling"><li>Ceiling</li></Link>
          <Link to="lamps/table"><li>Table</li></Link>
        </ul>
        
        <Link to="candles">
          <h3>Candles</h3>
        </Link>
        <ul>
          <Link to="/candles/decorative"><li>Decorative</li></Link>
          <Link to="/candles/flameless"><li>Flameless</li></Link>
          <Link to="/candles/celebratory"><li>Celebratory</li></Link>
        </ul>
      </div>
    </nav>
  );
};