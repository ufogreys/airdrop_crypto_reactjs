import React from "react";

function LeftSideNavbar(props) {
  return (
    <div
      id="LeftSideNavbar"
      className="rounded-pill px-md-2 py-4"
      data-aos-delay="500"
      data-aos="fade-up-left"
    >
      <ul className="list-unstyled m-0">
        <li className="p-3">
          <a
            className="btn btn-muted shadow-0 p-0 m-0"
            href="https://join.skype.com/wYphtMy4Zbgh"
          >
            <i className="fab fa-skype" aria-hidden="true"></i>
          </a>
        </li>
        <li className="p-3">
          <a className="btn btn-muted shadow-0 p-0 m-0" href="https://www.facebook.com/groups/789161261754035/">
            <i className="fab fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li className="p-3">
          <a
            className="btn btn-muted shadow-0 p-0 m-0"
            href="https://mobile.twitter.com/dreamcoinmax"
          >
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li className="p-3">
          <a
            className="btn btn-muted shadow-0 p-0 m-0"
            href="https://t.me/DreamCoinOfficialGroup"
          >
            <i className="fab fa-telegram" aria-hidden="true"></i>
          </a>
        </li>
        <li className="p-3">
          <a
            className="btn btn-muted shadow-0 p-0 m-0"
            href="https://www.instagram.com/invites/contact/?i=1t00ha8ct3jwo&utm_content=me60his"
          >
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default LeftSideNavbar;
