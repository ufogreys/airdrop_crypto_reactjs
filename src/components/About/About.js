import React from "react";

function About(props) {
  const trusted_card_obj = [
    {
      id: 1,
      img: require("../../assets/images/1.png").default,
      btn: <i className="fa fa-check" aria-hidden="true"></i>
    },
    {
      id: 2,
      img: require("../../assets/images/2.png").default,
      btn: '8.9'
    },
    {
      id: 3,
      img: require("../../assets/images/3.png").default,
      btn: <i className="fa fa-check" aria-hidden="true"></i>

    },
    {
      id: 4,
      img: require("../../assets/images/4.png").default,
      btn: <i className="fa fa-check" aria-hidden="true"></i>

    },
    {
      id: 5,
      img: require("../../assets/images/5.png").default,
      btn: '7.4'

    },
    {
      id: 6,
      img: require("../../assets/images/6.png").default,
      btn: <i className="fa fa-check" aria-hidden="true"></i>

    },
  ];
  return (
    <div id="AboutComponent">
      <div className="container-xxl py-5">
        <div className="row justify-content-center mb-3">
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

        <div className="row">
          {trusted_card_obj.map((v) => {
            return (
              <div key={v.id} className="col-6 col-sm-4 col-md-3 col-xl-2 mb-3">
                <div className="card trusted_card shadow-1-strong">
                  <div className="card-header">
                    <img
                      className="w-100" style={{'height': '150px', 'object-fit': 'contain'}}
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
      </div>
    </div>
  );
}

export default About;
