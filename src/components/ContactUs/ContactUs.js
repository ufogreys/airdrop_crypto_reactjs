import React from "react";

function ContactUs(props) {
  return (
    <div id="ContactUs">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className=" py-3 text-center">
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
              <div className="text-center">
                <h3 className="py-3">Contact With Us</h3>
                <p className="w-75 mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  neque qui voluptates, aperiam consequuntur iste necessitatibus
                  id fugiat, numquam deleniti rerum illum cumque voluptatibus
                  dolore!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-11 col-md-10 col-lg-9">
            <ContactSendingForm></ContactSendingForm>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactSendingForm() {
  return (
    <div id="ContactSendingForm">
      <form action="" method="post">
        <div className="input_box_wrapper">
          <div className="input_separate_group d-md-flex">
            <div className="input-group mb-4 flex-grow-1 me-md-5">
              <input type="text" placeholder="Name" className="form-control" />
            </div>
            <div className="input-group mb-4 flex-grow-1">
              <input type="text" placeholder="Email" className="form-control" />
            </div>
          </div>
          <div className="input-group mb-4">
            <input type="text" placeholder="Subject" className="form-control" />
          </div>
          <div className="input-group mb-4">
            <textarea
              className="form-control"
              name="message"
              placeholder="Message..."
              style={{ overflow: "visible" }}
            ></textarea>
          </div>
        </div>

        <div className="btn_action py-5 text-center">
          <button className="btn btn-secondary px-5 rounded-pill">Send message</button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
