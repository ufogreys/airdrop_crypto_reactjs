import React from "react";
import WatchModal from "../WatchModal/WatchModal";
import DesignSectionDot from "../DesignSectionDot/DesignSectionDot";
import FAQ from "../FAQ/FAQ";
export function About(props) {
  const trusted_card_obj = [
    {
      id: 1,
      img: require("../../assets/images/1.png").default,
      btn: <i className="fa fa-check" aria-hidden="true"></i>,
    },
    {
      id: 2,
      img: require("../../assets/images/2.png").default,
      btn: "8.9",
    },
    {
      id: 3,
      img: require("../../assets/images/3.png").default,
      btn: <i className="fa fa-check" aria-hidden="true"></i>,
    },
    {
      id: 4,
      img: require("../../assets/images/4.png").default,
      btn: <i className="fa fa-check" aria-hidden="true"></i>,
    },
    {
      id: 5,
      img: require("../../assets/images/5.png").default,
      btn: "7.4",
    },
    {
      id: 6,
      img: require("../../assets/images/6.png").default,
      btn: <i className="fa fa-check" aria-hidden="true"></i>,
    },
  ];
  return (
    <section id="AboutComponent">
      <div className="container-xxl py-5">
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-12 text-center py-3">
            <DesignSectionDot></DesignSectionDot>
            <h3
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay="200"
              className="py-3"
              data-aos-once="true"
            >
              We are trusted
            </h3>
          </div>
          <div className="col-10 col-sm-8 col-lg-6 text-center">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay="400"
            >
              Dream aims to implement a burn strategy that is beneficial and
              rewarding for those engaged for the long term. Furthermore, the
              total number of Dream burned is featured on our readout located on
              the website which allows for further transparency in identifying
              the current circulating supply at any given
            </p>
          </div>
        </div>

        <div className="row mb-5  pb-5">
          {trusted_card_obj.map((v) => {
            return (
              <div
                key={v.id}
                className="col-6 col-sm-4 col-md-3 col-xl-2 mb-3 px-3 px-md-4"
              >
                <div
                  className="card trusted_card"
                  data-aos="zoom-out-up"
                  data-aos-delay={v.id * 150}
                  data-aos-once="true"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="card-header">
                    <img
                      className="w-100"
                      style={{ height: "150px", objectFit: "contain" }}
                      src={v.img}
                      alt="img"
                      className="card-img"
                    />
                  </div>
                  <div className="card-body text-center">
                    <button className="btn btn-secondary w-100">{v.btn}</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="row left_right_side_row1 justify-content-center justify-content-md-stretch  mb-5  pb-5">
          <div className="right_box col-md-6 col-lg-7 col-xl-7">
            <div className="px-3 px-md-5">
              <DesignSectionDot></DesignSectionDot>
              <h3
                className="py-3"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="100"
              >
                We Have Accomplished The Following Since July 25, 2021 Fair
                Launch.
              </h3>
              <div className="content py-4">
                <p
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="200"
                >
                  Acquired Over 1600 Twitter Followers
                </p>
                <p
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="300"
                >
                  Acquired Over 1500 Telegram Members
                </p>
                <p
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="400"
                >
                  Hit An ATH of 44k Market Cap
                </p>
                <p
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="500"
                >
                  We Have Achieved Attaining Over 450 Dream Coin Holders
                </p>
                <p
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="600"
                >
                  We’ve Applied To Be Listed on Coin Market Cap (CMC) Exchange
                </p>
                <p
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="700"
                >
                  We’ve Applied To Be Listed On CoinGecko Exchange
                </p>
                <p
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="800"
                >
                  We are On A Continuous & Organic Incline Of Achievements.
                </p>
              </div>

              <div className="btn_wrapper">
                <button
                  className="btn btn-primary btn-sm px-3 px-md-5 rounded-pill"
                  data-aos="fade-right"
                  data-aos-once="true"
                  data-aos-delay="1000"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>

          <div className="left_box col-md-6 col-lg-5 col-xl-5 text-center">
            <img
              className="w-100"
              src={require("../../assets/images/solution.png").default}
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <>
      <div id="Features">
        <div className="container-xxl py-5">
          <div className="row mb-5 pb-5 justify-content-center">
            <div className="col-10 col-md-8 col-lg-6 text-center">
              <DesignSectionDot></DesignSectionDot>
              <h3
                className="py-3"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="100"
              >
                Feature
              </h3>

              <p data-aos="fade-up" data-aos-once="true" data-aos-delay="500">
                The Dream Protocol is a community driven, fair launched DeFi
                Token. Three simple functions occur during each trade:
                Reflection, LP Acquisition, & Burn.
              </p>
            </div>
            <div className="col-12 py-5"></div>

            <div className="col-11 col-sm-10 col-md-8 col-lg-6">
              <div className="watch_box_wrapper rounded-5">
                <button
                  className="btn btn-secondary"
                  data-mdb-target="#watchModalView"
                  data-mdb-toggle="modal"
                  data-aos="zoom-out"
                  data-aos-once="true"
                  data-aos-delay="100"
                >
                  <i className="far fa-play-circle fa-3x"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ></FAQ>
    </>
  );
}

export function RewardBnb() {
  return (
    <div id="RewardBnb">
      <div className="container-xxl py-5">
        <div className="row left_right_side_row1 justify-content-center justify-content-md-stretch  mb-5  pb-5">
          <div className="left_box col-md-6 col-lg-5 col-xl-5 text-center">
            <img
              className="w-100"
              data-aos-once="true"
              data-aos="zoom-in"
              data-aos-delay="100"
              src={require("../../assets/images/about1.svg").default}
              alt="img"
            />
          </div>

          <div className="right_box col-md-6 col-lg-7 col-xl-7">
            <div className="px-3 px-md-5">
              <DesignSectionDot></DesignSectionDot>
              <h3
                className="py-3"
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                HOLD DreamCoin and get rewarded in BNB on every 7 days!
              </h3>
              <div className="content py-4">
                <p
                  className="mb-3"
                  data-aos-once="true"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  DreamCoin is completely decentralized and all decisions are
                  made by a community poll. Which gives our developers a better
                  idea of how to move forward with DreamCoin. investors.
                </p>
                <p
                  className="mb-3"
                  data-aos-once="true"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  The DreamCoin developer team has no team tokens. In other
                  words, our team has to participate in the DreamCoin presale
                  along with other
                </p>
              </div>

              <div className="btn_wrapper">
                <button
                  className="btn btn-sm px-5 m-3 rounded-pill  btn-danger"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-once="true"
                >
                  Connect Wallet
                </button>
                <button
                  className="btn btn-sm px-5 m-3 rounded-pill btn-info"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-once="true"
                  onClick={() => alert("Please connect metamask")}
                >
                  Claim BNB
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
