import Icon from "./icons/Icon";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <p className="thin title">DEMO</p>
      <div className="links">
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <Icon icon="github" size={24} className="github-icon" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
