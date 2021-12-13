import React from "react";
import Airdrop_img from "../../assets/images/airdrop_img.png";
import { About } from "../About/About";
import {ContactUs} from "../ContactUs/ContactUs";
function Home(props) {
  return (
    <>
      <section id="homeComponent" className="pb-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="d-flex align-items-center flex-wrap flex-lg-nowrap">
                <div className="left_box order-2 order-lg-1 text-center text-lg-start">
                  <h2
                    className="py-3 py-sm-4 py-md-5"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    Dreamcoin <b className="text-info">(DC)</b>
                  </h2>
                  <p data-aos="fade-up" data-aos-delay="400">
                    Dream Coin is a charitable based token. Dream coin holders
                    makes suggestions and vote on all charitable donations.
                    Donations will go to hospitals, children, homeless and
                    animal organizations, as chosen and approved by community
                    majority vote. Also annually, ongoing Dream Community will
                    create a scholarship fund for donation and randomly select
                    an outstanding student heading to college.
                  </p>
                  <div
                    className="btn_wrapper mt-4"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <button className="btn btn-sm px-5 m-3 rounded-pill  btn-danger">
                      Learn more
                    </button>
                    <button
                      className="btn btn-sm px-5 m-3 rounded-pill btn-info"
                      data-aos="fade-up"
                      data-aos-delay="600"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
                <div className="right_box order-1 order-lg-2">
                  <img
                    className="w-100"
                    data-aos="fade-up-left"
                    data-aos-delay="300"
                    src={Airdrop_img}
                    alt="airdrop_img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About></About>
      <ContactUs></ContactUs>
    </>
  );
}

export default Home;
