import { useState } from "react";
import Icon from "./icons/Icon";
import "./Navbar.css";
import { AnimatePresence, motion } from "framer-motion";
import { SLIDERIGHT, SLIDEUP } from "./animations/framer-animations";

const MenuItem = ({ icon, text, href }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <motion.div className="menu-item" variants={SLIDERIGHT}>
        <Icon icon={icon} size={20} />
        <p className="thin">{text}</p>
      </motion.div>
    </a>
  );
};

const Menu = ({ children, className }) => {
  return (
    <motion.div
      className={"menu " + className ?? ""}
      variants={SLIDEUP}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={SLIDEUP.transition}
    >
      {children}
    </motion.div>
  );
};

const RepoMenu = () => {
  return (
    <Menu className="repositories">
      <MenuItem icon="notebook" text="Music Identification Notebook" />
      <MenuItem icon="python" text="Flask Server" />
      <MenuItem icon="react" text="React App" />
    </Menu>
  );
};

const BibliographyMenu = () => {
  return (
    <Menu className="bibliography">
      <MenuItem
        icon="book"
        text="An Industrial-Strength Audio Search Algorithm"
        href="https://www.ee.columbia.edu/~dpwe/papers/Wang03-shazam.pdf"
      />
      <MenuItem
        icon="book"
        text="Fundamentals of Music Processing"
        href="https://www.audiolabs-erlangen.de/fau/professor/mueller/bookFMP"
      />
    </Menu>
  );
};

const Navbar = () => {
  const [menu, setMenu] = useState("");

  return (
    <>
      <header>
        <p className="thin title">DEMO</p>
        <div className="links">
          <Icon icon="playlist" className="link-icon" />
          <Icon
            icon="books"
            className="link-icon"
            onClick={() =>
              menu === "bibliography" ? setMenu("") : setMenu("bibliography")
            }
          />
          <Icon
            icon="github"
            className="link-icon"
            onClick={() =>
              menu === "repositories" ? setMenu("") : setMenu("repositories")
            }
          />
        </div>
      </header>
      <AnimatePresence>
        {menu === "repositories" && <RepoMenu />}
      </AnimatePresence>
      <AnimatePresence>
        {menu === "bibliography" && <BibliographyMenu />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
