import React from "react";
import DesignSectionDot from "../DesignSectionDot/DesignSectionDot";
function Services(props) {
  const service_card_obj = [
    {
      id: 1,
      title: "Dream Protocol WhitePaper",
      description:
        "Static Rewards, LP Acquisition, Autobuyback and Burn Dream coin implemented the autobuyback and burn feature. This happens automatically when there is selling. With this, we were ensuring that our LPMAX was safe during buy/sells transactions.",
      link: "#",
      img: require("../../assets/images/setting.svg").default,
    },
    {
      id: 2,
      title: "THE PURPOSE OF THE “LPMAX” (Liquidity Pool).",
      description:
        "Many of us avid crypto currency investors may have been subjected to many types of unfortunate events, such as, scams, rug pulls, honey pots, pump/dumps, etc.. that may have caused an unfair loss.",
      link: "#",
      img: require("../../assets/images/analysis.svg").default,
    },
    {
      id: 3,
      title: "Why Static?",
      description:
        "Static rewards solve a host of problems. First, the reward amount is conditional upon the volume of the token being traded. This mechanism aims to alleviate some of the downward sell pressure put on the token caused by earlier adopters selling their tokens after farming crazy high APY’s.",
      link: "#",
      img: require("../../assets/images/services.svg").default,
    },
    {
      id: 4,
      title: "Auto buyback and Burn",
      description:
        "Dream coin implemented the auto buyback and burn feature. This happens automatically when there is a selling. With this, we were ensuring that our LPMAX was safe during buy/sells transactions.",
      link: "#",
      img: require("../../assets/images/line.svg").default,
    },
    {
      id: 5,
      title: "Manual Burns",
      description:
        "ometimes burns matter; sometimes they don’t. A continuous burn on any one protocol can be nice in the early days, however, this means the burn cannot be finite or controlled in any way.",
      link: "#",
      img: require("../../assets/images/finder.svg").default,
    },
    {
      id: 6,
      title: "Dream Protocol",
      description:
        "The Dream Protocol is a community driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, & Burn.",
      link: "#",
      img: require("../../assets/images/trading.svg").default,
    },
  ];
  return (
    <section id="ServicesComponent">
      <div className="container-xxl py-5">
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-12 text-center py-3 ">
            <DesignSectionDot></DesignSectionDot>
            <h3
              className="py-3"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="300"
            >
              Whitepaper
            </h3>
          </div>
          <div
            className="col-10 col-sm-8 col-lg-6 text-center"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="400"
          >
            <p>
              It is our hope to minimize market crashes, frustrate scamming
              techniques and to help improve crypto investing “Hopes” To Make
              Everyone “Dreams Come True.”
            </p>
          </div>
        </div>
        <div className="row ">
          {service_card_obj.map((v) => {
            return (
              <div
                key={v.id}
                className="col-md-6 col-lg-4 mb-4 mb-md-5 h-auto"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay={(v.id * 100)+400}
              >
                <div className="px-3 px-md-4 h-100">
                  <div className="card services_card px-3 px-md-4 h-100">
                    <div className="card-body">
                      <img src={v.img} alt="img" />
                      <h4 className="card-title py-3 mt-2">{v.title}</h4>
                      <p>{v.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
