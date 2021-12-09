import React from "react";
import WatchModal from "../WatchModal/WatchModal";
function About(props) {
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

        <div className="row mb-5  pb-5">
          {trusted_card_obj.map((v) => {
            return (
              <div
                key={v.id}
                className="col-6 col-sm-4 col-md-3 col-xl-2 mb-3 px-3 px-md-4"
              >
                <div
                  className="card trusted_card"
                  style={{ "border-radius": "15px" }}
                >
                  <div className="card-header">
                    <img
                      className="w-100"
                      style={{ height: "150px", "object-fit": "contain" }}
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
          <div className="left_box col-md-6 col-lg-5 col-xl-5 text-center">
            <img
              className="w-100"
              src={require("../../assets/images/about1.svg").default}
              alt="img"
            />
          </div>

          <div className="right_box col-md-6 col-lg-7 col-xl-7">
            <div className="px-3 px-md-5">
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
              <h3 className="py-3">
                We complete every project with extra care as customer need.
              </h3>
              <div className="content py-4">
                <p className="mb-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam maiores hic perspiciatis voluptatibus inventore.
                  Minima sapiente impedit numquam, dicta praesentium sunt
                  voluptate itaque accusantium! Tenetur!
                </p>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, iusto dolorum. Assumenda, esse quod! Itaque quibusdam
                  magnam neque, accusamus soluta optio necessitatibus minima
                  exercitationem labore natus dolorum vero, quasi saepe!
                </p>
              </div>

              <div className="btn_wrapper">
                <button className="btn btn-primary">Read more</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row left_right_side_row1 justify-content-center justify-content-md-stretch  mb-5  pb-5">
          <div className="right_box col-md-6 col-lg-7 col-xl-7">
            <div className="px-3 px-md-5">
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
              <h3 className="py-3">
                We complete every project with extra care as customer need.
              </h3>
              <div className="content py-4">
                <p className="mb-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam maiores hic perspiciatis voluptatibus inventore.
                  Minima sapiente impedit numquam, dicta praesentium sunt
                  voluptate itaque accusantium! Tenetur!
                </p>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, iusto dolorum. Assumenda, esse quod! Itaque quibusdam
                  magnam neque, accusamus soluta optio necessitatibus minima
                  exercitationem labore natus dolorum vero, quasi saepe!
                </p>
              </div>

              <div className="btn_wrapper">
                <button className="btn btn-primary">Read more</button>
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

        <div className="row mb-5 pb-5 justify-content-center">
          <div className="col-10 col-md-8 col-lg-6 text-center">
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

            <h3 className="py-3">Watch Our Demo Video</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
              alias a earum distinctio quo culpa!
            </p>
          </div>
          <div className="col-12 py-5"></div>

          <div className="col-11 col-sm-10 col-md-8 col-lg-6">
            <div className="watch_box_wrapper rounded-5">
              <button className="btn btn-secondary" data-mdb-target="#watchModalView" data-mdb-toggle="modal">
                <i className="far fa-play-circle fa-3x"></i>
              </button>

              <WatchModal></WatchModal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
