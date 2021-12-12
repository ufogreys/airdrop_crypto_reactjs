import React from "react";
import DesignSectionDot from "../DesignSectionDot/DesignSectionDot";

function IcoDistribution(props) {
  return (
    <div id="IcoDistribution">
      <div className="container-xxl py-5">
        <div className="row justify-content-center">
          <div className="col-11 col-md-9">
            <div className=" py-3 text-center">
              <DesignSectionDot></DesignSectionDot>
              <h3
                className="py-3"
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                Presale
              </h3>
              <p
                className="w-75 mx-auto"
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                All of this is an effort to alleviate some of the troubles we
                have seen with the current DeFi reflection tokens. We are
                confident that this model and protocol will prevail over the
                outdated reflection tokens for these reasons
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="col_wrapper text-center p-3 p-md-5">
              <h3
                className="text-center py-4 py-md-5"
                data-aos-once="true"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Token Allocation
              </h3>
              <img
                data-aos-once="true"
                data-aos="zoom-in-out"
                data-aos-delay="100"
                className="w-100"
                src={require("../../assets/images/allocation.png").default}
                alt="allocation"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="col_wrapper p-3 p-md-5">
              <h3
                className="text-center py-4 py-md-5"
                data-aos-once="true"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                More Token Info
              </h3>

              <ul className="list-unstyled m-0 p-0 more_token_list">
                <li
                  className="p-3 mb-4 rounded-5"
                  data-aos-once="true"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <p className="py-0 my-0">
                    {" "}
                    <img
                      className="px-3"
                      src={
                        require("../../assets/images/token-icon-1.svg").default
                      }
                      style={{ height: "3rem" }}
                      alt="token-icon"
                    />{" "}
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
                <li
                  className="p-3 mb-4 rounded-5"
                  data-aos-once="true"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <p className="py-0 my-0">
                    {" "}
                    <img
                      className="px-3"
                      src={
                        require("../../assets/images/token-icon-2.svg").default
                      }
                      style={{ height: "3rem" }}
                      alt="token-icon"
                    />{" "}
                    consectetur adipisicing elit. Perspiciatis, autem?.
                  </p>
                </li>
                <li
                  className="p-3 mb-4 rounded-5"
                  data-aos-once="true"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  <p className="py-0 my-0">
                    <img
                      className="px-3"
                      src={
                        require("../../assets/images/token-icon-3.svg").default
                      }
                      style={{ height: "3rem" }}
                      alt="token-icon"
                    />{" "}
                    tur adipisicing elit. Perspiciatis,{" "}
                  </p>
                </li>

                <li
                  className="p-3 mb-4 rounded-5"
                  data-aos-once="true"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  <p className="py-0 my-0">
                    <img
                      className="px-3"
                      src={
                        require("../../assets/images/token-icon-3.svg").default
                      }
                      style={{ height: "3rem" }}
                      alt="token-icon"
                    />{" "}
                    tur adipisicing elit. Perspiciatis,{" "}
                  </p>
                </li>
                <li
                  className="p-3 mb-4 rounded-5"
                  data-aos-once="true"
                  data-aos="fade-right"
                  data-aos-delay="600"
                >
                  <p className="py-0 my-0">
                    <img
                      className="px-3"
                      src={
                        require("../../assets/images/token-icon-4.svg").default
                      }
                      style={{ height: "3rem" }}
                      alt="token-icon"
                    />{" "}
                    tur adipisicing elit. Perspiciatis,{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IcoDistribution;
