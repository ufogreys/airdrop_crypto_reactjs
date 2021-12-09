import React from "react";

function LeftSideNavbar(props) {
  return (
    <div id="LeftSideNavbar" className="rounded-pill px-2 py-4">
      <ul className="list-unstyled">
        <li className="p-3">
          <a className="btn btn-muted shadow-0 p-0 m-0" href="#"><i class="fab fa-telegram"></i></a>
        </li>
        <li className="p-3">
          <a className="btn btn-muted shadow-0 p-0 m-0" href="#"><i class="fab fa-medium" aria-hidden="true"></i></a>
        </li>
        <li className="p-3">
          <a className="btn btn-muted shadow-0 p-0 m-0" href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a>
        </li>
        <li className="p-3">
          <a className="btn btn-muted shadow-0 p-0 m-0" href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a>
        </li>
        <li className="p-3">
          <a className="btn btn-muted shadow-0 p-0 m-0" href="#"><i className="fab fa-github" aria-hidden="true"></i></a>
        </li>
        <li className="p-3">
          <a className="btn btn-muted shadow-0 p-0 m-0" href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a>
        </li>
        <li className="p-3">
          <a className="btn btn-muted shadow-0 p-0 m-0" href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
        </li>
      </ul>
    </div>
  );
}

export default LeftSideNavbar;
