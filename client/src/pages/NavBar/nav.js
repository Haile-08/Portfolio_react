import MenuButton from "./MenuButton";
import "../../styles/nav.css";

function Nav({ setOpen, open }) {
  return (
    <div className="nav_bar" onClick={() => setOpen(!open)}>
      <MenuButton isOpen={open} />
    </div>
  );
}

export default Nav;
