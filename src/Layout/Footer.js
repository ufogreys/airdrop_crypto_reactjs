import React from "react";
import Logo from "../assets/images/image01.png";

function Footer(props) {
  return (
    <footer id="Footer" className="py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-5 col-md-4 mb-3 mb-md-5">
            <div className="col_wrapper">
              <a className="d-inline-block me-2" href="https://mdbgo.com/">
                <img src={Logo} height="50" alt="" loading="lazy" />
              </a>
              <p
                data-aos-once="true"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Dream Coin is a charitable based token. Dream coin holders makes
                suggestions and vote on all charitable donations. Donations will
                go to hospitals, children, homeless and animal organizations, as
                chosen and approved by community majority vote. Also annually,
                ongoing Dream Community will create a scholarship fund for
                donation and randomly select an outstanding student heading to
                college.
              </p>
              <ul className="list-unstyled d-flex">
                <li
                  className="p-2"
                  data-aos-once="true"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <a href="https://join.skype.com/wYphtMy4Zbgh">
                    <i className="fab fa-skype" aria-hidden="true"></i>
                  </a>
                </li>
                <li
                  className="p-2"
                  data-aos-once="true"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <a href="https://mobile.twitter.com/dreamcoinmax">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li
                  className="p-2"
                  data-aos-once="true"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  <a href="https://t.me/DreamCoinOfficialGroup">
                    <i className="fab fa-telegram" aria-hidden="true"></i>
                  </a>
                </li>
                <li
                  className="p-2"
                  data-aos-once="true"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  <a href="https://www.instagram.com/invites/contact/?i=1t00ha8ct3jwo&utm_content=me60his">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-7">
            <div className="col_wrapper">
              <div className="row">
                <div className="col-md-4 mb-3 mb-md-5">
                  <h4
                    className="mb-3"
                    data-aos-once="true"
                    data-aos="fade-right"
                    data-aos-delay="0"
                  >
                    NAVIGATE
                  </h4>
                  <ul className="list-unstyled m-0 p-0">
                    <li
                      data-aos-once="true"
                      data-aos="fade-right"
                      data-aos-delay="100"
                    >
                      <a href="#" className="anchor_color">
                        Advertisers
                      </a>
                    </li>
                    <li
                      data-aos-once="true"
                      data-aos="fade-right"
                      data-aos-delay="200"
                    >
                      <a href="#" className="anchor_color">
                        Developers
                      </a>
                    </li>
                    <li
                      data-aos-once="true"
                      data-aos="fade-right"
                      data-aos-delay="300"
                    >
                      <a href="#" className="anchor_color">
                        Resources
                      </a>
                    </li>
                    <li
                      data-aos-once="true"
                      data-aos="fade-right"
                      data-aos-delay="400"
                    >
                      <a href="#" className="anchor_color">
                        Company
                      </a>
                    </li>
                    <li
                      data-aos-once="true"
                      data-aos="fade-right"
                      data-aos-delay="500"
                    >
                      <a href="#" className="anchor_color">
                        Connect
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-3 mb-md-5">
                  <h4
                    className="mb-3"
                    data-aos-once="true"
                    data-aos="fade-right"
                    data-aos-delay="0"
                  >
                    Privacy & Tos
                  </h4>
                  <ul className="list-unstyled m-0 p-0">
                    <li
                      data-aos-once="true"
                      data-aos="fade-right"
                      data-aos-delay="100"
                    >
                      <a href="#" className="anchor_color">
                        Advertiser Agreement
                      </a>
                    </li>
                    <li
                      data-aos-once="true"
                      data-aos="fade-right"
                      data-aos-delay="200"
                    >
                      <a href="#" className="anchor_color">
                        Acceptable Use Policy
                      </a>
                    </li>
                    <li
                      data-aos-once="true"
                      data-aos="fade-right"
                      data-aos-delay="300"
                    >
                      <a href="#" className="anchor_color">
                        Privacy Policy
                      </a>
                    </li>
                    <li
                      data-aos-once="true"
                      data-aos="fade-right"
                      data-aos-delay="400"
                    >
                      <a href="#" className="anchor_color">
                        Technology Privacy
                      </a>
                    </li>
                    <li
                      data-aos-once="true"
                      data-aos="fade-right"
                      data-aos-delay="500"
                    >
                      <a href="#" className="anchor_color">
                        Developer Agreement
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-3 mb-md-5">
                  <h4
                    className="mb-3"
                    data-aos-once="true"
                    data-aos="fade-right"
                    data-aos-delay="0"
                  >
                    Phone
                  </h4>
                  <ul
                    className="list-unstyled m-0 p-0"
                    data-aos-once="true"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  >
                    <li>
                      <p>
                        Mailing Address: xx00 E.Union Ave Suite 1100.Denver, CO
                        80237 +999 0000000 support@yourdomail.com
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
