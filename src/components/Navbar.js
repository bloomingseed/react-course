import "./Navbar.css";
import logo from "./../images/airbnb_logo.png";

export default function Navbar() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} alt="Airbnb logo" />
      </nav>
    </header>
  );
}
