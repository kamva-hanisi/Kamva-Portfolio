import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Kamva</h2>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <a href="/Kamva-Hanisi-CV.pdf" download className="cv-btn">
        Download CV
      </a>
    </nav>
  );
}

export default Navbar;
