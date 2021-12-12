import React from "react";
import DesignSectionDot from "../DesignSectionDot/DesignSectionDot";
function RoadMap(props) {
  return (
    <div id="RoadMap" className="py-5">
      <div className="container-xxl py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center py-3 ">
            <DesignSectionDot></DesignSectionDot>
            <h3
              className="py-3"
              data-aos-once="true"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Product Launch Roadmap
            </h3>
          </div>
          <div className="col-10 col-sm-8 col-lg-6 text-center">
            <p data-aos-once="true" data-aos="fade-up" data-aos-delay="400">
              The Developer: “@Crypto_Realtor” Curtis is A Licensed Realtor, US
              Navy Veteran & Investor
            </p>
          </div>
        </div>
      </div>
      <div className="d-none d-xl-block" id="roadMap_line_wrapper">
        {/* top line cards */}
        <div className="top_line_cards">
          {/* line card 1 */}
          <div className="line_cards">
            <div className="line_with_icons">
              <div className="icon_wrapper">
                <img
                  src={require("../../assets/images/pen.svg").default}
                  alt=""
                />
              </div>
              <div className="line_content_wrapper">
                <p>Emergence and design of the idea</p>
              </div>
            </div>
            <div className="line_duration">
              <p>Q2 2022</p>
            </div>
          </div>
          {/* line card 1 End*/}

          {/* line card 2 */}
          <div className="line_cards">
            <div className="line_with_icons">
              <div className="icon_wrapper">
                <img
                  src={require("../../assets/images/cog.svg").default}
                  alt=""
                />
              </div>
              <div className="line_content_wrapper">
                <ul className="list-unstyled text-start line_article_list">
                  <li>
                    <p>
                      start development of the ealier version and crypto wallet
                      version
                    </p>
                  </li>
                  <li>
                    <p>negotiations on partnerships</p>
                  </li>
                </ul>
              </div>
              <div className="line_duration">
                <p>Q4 2022</p>
              </div>
            </div>
          </div>
          {/* line card 2 End */}

          {/* line card 3 */}
          <div className="line_cards">
            <div className="line_with_icons">
              <div className="icon_wrapper">
                <img
                  src={require("../../assets/images/pen.svg").default}
                  alt=""
                />
              </div>
              <div className="line_content_wrapper">
                <ul className="list-unstyled text-start line_article_list">
                  <li>
                    <p>Crowdsale</p>
                  </li>
                  <li>
                    <p>marketing campaign</p>
                  </li>
                  <li>
                    <p>listing to the major exchanges</p>
                  </li>
                </ul>
              </div>
              <div className="line_duration">
                <p>Q2 2022</p>
              </div>
            </div>
          </div>
          {/* line card 3 End */}
          {/* line card 4 */}
          <div className="line_cards">
            <div className="line_with_icons">
              <div className="icon_wrapper">
                <img
                  src={require("../../assets/images/pen.svg").default}
                  alt=""
                />
              </div>
              <div className="line_content_wrapper">
                <ul className="list-unstyled text-start line_article_list">
                  <li>
                    <p>Mobile App</p>
                  </li>
                  <li>
                    <p>Explorer</p>
                  </li>
                  <li>
                    <p>new partnerships and new marketplace suppor</p>
                  </li>
                </ul>
              </div>
              <div className="line_duration">
                <p>Q4 2022</p>
              </div>
            </div>
          </div>
          {/* line card 4 End */}

          {/* line card 5 */}
          <div className="line_cards">
            <div className="line_with_icons">
              <div className="icon_wrapper">
                <img
                  src={require("../../assets/images/pen.svg").default}
                  alt=""
                />
              </div>
              <div className="line_content_wrapper">
                <ul className="list-unstyled text-start line_article_list">
                  <li>
                    <p> Platform integration to electronic marketplaces</p>
                  </li>
                  <li>
                    <p>Zero Fee</p>
                  </li>
                </ul>
              </div>
              <div className="line_duration">
                <p>Q2 2022</p>
              </div>
            </div>
          </div>
          {/* line card 5 End */}
        </div>
      </div>
      <div className="d-xl-none" id="roadMap_mobile_line">
        <span id="line_draw"></span>
        {/* left side */}
        <div className="line_content_wrapper_left">
          <div className="line_content">
            <h4>3 MONTHS</h4>
            <ul className="list-unstyled m-0">
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>{" "}
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
          </div>
          <div className="line_content">
            <h4>1 MONTHS</h4>
            <ul className="list-unstyled m-0">
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>{" "}
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
          </div>

          <div className="line_content">
            <h4>2 WEEKS</h4>
            <ul className="list-unstyled m-0">
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>{" "}
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
          </div>
          <div className="line_content">
            <h4>LAUNCH WEEK</h4>
            <ul className="list-unstyled m-0">
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>{" "}
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
          </div>
        </div>
        {/* left side */}

        <div className="line_content_wrapper_right">
          {/* right side  */}
          <div className="line_content">
            <h4>4 MONTHS</h4>
            <ul className="list-unstyled m-0">
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>{" "}
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
          </div>
          <div className="line_content">
            <h4>2 MONTHS</h4>
            <ul className="list-unstyled m-0">
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
          </div>

          <div className="line_content">
            <h4>3 WEEKS</h4>
            <ul className="list-unstyled m-0">
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
          </div>

          <div className="line_content">
            <h4>1 WEEK</h4>
            <ul className="list-unstyled m-0">
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
          </div>

          <div className="line_content">
            <h4>After Launch</h4>
            <ul className="list-unstyled m-0">
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
          </div>

          {/* right side  */}
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
