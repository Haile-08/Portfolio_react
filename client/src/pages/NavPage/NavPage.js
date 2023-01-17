import React from "react";
import "../../styles/Navpage.css";
import "../../styles/nav.css";
import MenuButton from "../NavBar/MenuButton";

function NavPage({ setOpen, open }) {
  return (
    <div className="navp">
      <div className="nav_bar" onClick={() => setOpen(!open)}>
        <MenuButton isOpen={open} />
      </div>
    </div>
  );
}

export default NavPage;
