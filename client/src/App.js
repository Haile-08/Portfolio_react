import "./styles/App.css";
import Nav from "./pages/NavBar/nav";
import NavPage from "./pages/NavPage/NavPage";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {open ? (
          <AnimatePresence>
            <NavPage setOpen={setOpen} open={open} />
          </AnimatePresence>
        ) : (
          <Nav setOpen={setOpen} open={open} />
        )}
      </header>
    </div>
  );
}

export default App;
