import React from "react";
import { Link } from "react-router-dom";

function NavLinkBar() {
  return (
    <ul style={{ listStyle: "none" }}>
    <li>
        <Link   to="/register">Register</Link>
    </li>
</ul>

  );
}

export default NavLinkBar;
