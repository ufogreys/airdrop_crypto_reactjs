import React from "react";

function Services(props) {
  const service_card_obj = [
    {
      id: 1,
      title: "Smart Trading Modules",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, cupiditate necessitatibus corrupti tempora consequuntur nam? Unde officia et, tempore enim dolores voluptatem quos similique ducimus.",
      link: "#",
      img: require("../../assets/images/setting.svg").default,
    },
    {
      id: 2,
      title: "Adaptive Social Assistant",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, cupiditate necessitatibus corrupti tempora consequuntur nam? Unde officia et, tempore enim dolores voluptatem quos similique ducimus.",
      link: "#",
      img: require("../../assets/images/analysis.svg").default,
    },
    {
      id: 3,
      title: "Analyzer of the News ",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, cupiditate necessitatibus corrupti tempora consequuntur nam? Unde officia et, tempore enim dolores voluptatem quos similique ducimus.",
      link: "#",
      img: require("../../assets/images/services.svg").default,
    },
    {
      id: 4,
      title: "Exchange Order Management",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, cupiditate necessitatibus corrupti tempora consequuntur nam? Unde officia et, tempore enim dolores voluptatem quos similique ducimus.",
      link: "#",
      img: require("../../assets/images/line.svg").default,
    },
    {
      id: 5,
      title: "Module of Price Notification",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, cupiditate necessitatibus corrupti tempora consequuntur nam? Unde officia et, tempore enim dolores voluptatem quos similique ducimus.",
      link: "#",
      img: require("../../assets/images/finder.svg").default,
    },
    {
      id: 6,
      title: "Module of Price Notification",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, cupiditate necessitatibus corrupti tempora consequuntur nam? Unde officia et, tempore enim dolores voluptatem quos similique ducimus.",
      link: "#",
      img: require("../../assets/images/trading.svg").default,
    },
  ];
  return (
    <section id="ServicesComponent">
      <div className="container-xxl">
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
            <h3 className="py-3">Our Core Services</h3>
          </div>
          <div className="col-10 col-sm-8 col-lg-6 text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eum
              ut facilis odio eius unde?
            </p>
          </div>
        </div>
        <div className="row">
          {service_card_obj.map((v) => {
            return (
              <div key={v.id} className="col-md-6 col-lg-4 mb-4 mb-md-5">
                <div className="px-3 px-md-4">
                  <div className="card services_card px-3 px-md-4">
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
