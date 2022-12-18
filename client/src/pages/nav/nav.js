import React, { useState } from "react";
import MenuButton from "./MenuButton";

function nav() {
  const [isOpen, SetOpen] = useState(false);
  return (
    <div className="nav_bar">
      <div>
        <MenuButton isOpen={isOpen} onClick={() => SetOpen(!isOpen)} />
      </div>
    </div>
  );
}

export default nav;
