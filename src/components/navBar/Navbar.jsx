import "./navbar.css";
import Cart from "../CartWidget/CartWidget";
import ImgLogo from "../../assets/logoSinFondo.png";
import { Link } from "react-router-dom";


export function Navbar() {


  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={ImgLogo} alt="Tienda Mundial" className="imgTiendaMundial" />
        </Link>
        <ul className="navbar-ul">
          <li>
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </li>
        </ul>
        <ul className="navbar-ul">
          <li>
            <Link to="/nosotros" className="nav-link">
              Nosotros
            </Link>
          </li>
        </ul>
        <ul className="navbar-ul">
          <li>
            <Link to="/productos" className="nav-link">
              Productos
            </Link>
          </li>
        </ul>
        <Cart />
      </div>
    </>
  );
}
