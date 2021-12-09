import React from "react";

function Services(props) {
  return (
    <section id="ServicesComponent">
      <div className="container-xxl">
        <div className="row justify-content-center">
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
      </div>
    </section>
  );
}

export default Services;
