import { useState } from "react";
import Icon from "./icons/Icon";
import "./Navbar.css";
import { AnimatePresence, motion } from "framer-motion";
import { SLIDERIGHT, SLIDEUP } from "./animations/framer-animations";
import { PLAYLIST_URL } from "../api/songsDB";
import logo from "../assets/wavee-icon.png";

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
      <MenuItem
        icon="notebook"
        text="Music Identification Notebook"
        href="https://colab.research.google.com/drive/1w5HK-IM3Xicz4tUH1ZckwTCUDeDXX-Ln"
      />
      <MenuItem
        icon="python"
        text="Flask Server"
        href="https://github.com/daniel-lujan/Wavee-Backend"
      />
      <MenuItem
        icon="react"
        text="React App"
        href="https://github.com/daniel-lujan/Wavee-Frontend"
      />
    </Menu>
  );
};

const BibliographyMenu = () => {
  return (
    <Menu className="bibliography">
      <MenuItem
        icon="fileDescription"
        text="An Industrial-Strength Audio Search Algorithm"
        href="https://www.ee.columbia.edu/~dpwe/papers/Wang03-shazam.pdf"
      />
      <MenuItem
        icon="fileDescription"
        text="Audio Content-Based Music Retrieval"
        href="https://www.audiolabs-erlangen.de/content/05-fau/professor/00-mueller/03-publications/2012_GroscheMuellerSerra_ContentBasedRetrieval_DagstuhlFU.pdf"
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
        <div className="logo">
          <img src={logo} alt="logo" className="logo" />
          <p className="thin title">Wavee</p>
        </div>

        <div className="links">
          <a
            className="icon"
            href={PLAYLIST_URL}
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="playlist" className="link-icon" />
          </a>
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
