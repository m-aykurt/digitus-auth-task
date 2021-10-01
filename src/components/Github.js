import React from "react";
import { Button } from "react-bootstrap";

function Github() {
  return (
    <div className="github">
        
      <Button variant="link">
        {" "}
        <a
        className="githubLink"
          rel="noopener noreferrer"
          href="https://github.com/m-aykurt"
          target="_blank"
        >
          <i className="gt fab fa-github fa-2x"></i>
        </a>
      </Button>
    </div>
  );
}

export default Github;
