import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';

function openGithub(){
  window.open("https://github.com/Pargat-Dhanjal/Notepad")
}


function Header() {
  return (
    <header>
      <h1>Notepad</h1>
      <GitHubIcon className="github" onClick={openGithub} />
    </header>
  );
}

export default Header;
