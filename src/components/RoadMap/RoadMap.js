import React from "react";

function RoadMap(props) {
  return (
    <div id="RoadMap" className="py-5">
      <div className="container-xxl py-5">
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-12 text-center py-3 ">
            <div className="section_title_design">
              <span
                style={{ "--design-bg": "#00A8FF" }}
                className="design_item me-2"
              ></span>
              <span
                style={{ "--design-bg": "#9C88FF" }}
                className="design_item me-2"
              ></span>
              <span
                style={{ "--design-bg": "#FBC531" }}
                className="design_item  me-2"
              ></span>
              <span
                style={{ "--design-bg": "#4CD137" }}
                className="design_item  me-2"
              ></span>
              <span
                style={{ "--design-bg": "#487EB0" }}
                className="design_item  me-2"
              ></span>
              <span
                style={{ "--design-bg": "#E84118" }}
                className="design_item  me-2"
              ></span>
              <span
                style={{ "--design-bg": "#8C7AE6" }}
                className="design_item"
              ></span>
            </div>
            <h3 className="py-3">We are trusted</h3>
          </div>
          <div className="col-10 col-sm-8 col-lg-6 text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eum
              ut facilis odio eius unde?
            </p>
          </div>
        </div>
      </div>
      <div id="roadMap_line_wrapper">
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
    </div>
  );
}

export default RoadMap;
