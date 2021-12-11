import React from "react";
import DesignSectionDot from "../DesignSectionDot/DesignSectionDot";
function RoadMap(props) {
  return (
    <div id="RoadMap" className="py-5">
      <div className="container-xxl py-5">
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-12 text-center py-3 ">
            <DesignSectionDot></DesignSectionDot>
            <h3
              className="py-3"
              data-aos-once="true"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Roadmap
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
                <ul className="list-unstyled text-start line_article_list">
                  <li>
                    <p>Apploy for new exchange listings</p>
                  </li>
                  <li>
                    <p>Dream wallet app for iOS, Android and Web</p>
                  </li>
                  <li>
                    <p>Partnership with Simplex and/or Transak</p>
                  </li>
                </ul>
              </div>
              <div className="line_duration">
                <p>Q4 2022</p>
              </div>
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
                    <p>Launch Token Website</p>
                  </li>
                  <li>
                    <p>Apploy for Listing on Coingecko</p>
                  </li>
                  <li>
                    <p>Apply for Listing on CoinMarketCap</p>
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
                    <p>Begin Marketing on Social Media</p>
                  </li>
                  <li>
                    <p>
                      Expand team by 15% to support future development at
                      headquarters
                    </p>
                  </li>
                  <li>
                    <p>
                      Press release announcing Dream and project initiatives
                    </p>
                  </li>
                </ul>
              </div>
              <div className="line_duration">
                <p>Q2 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
