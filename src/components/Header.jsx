import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

function Header() {
  return (
    <header>
      <h1>Notepad</h1>
      <GitHubIcon
        className="github"
        onClick={() => window.open("https://github.com/Pargat-Dhanjal/Notepad")}
      />
    </header>
  );
}

export default Header;
