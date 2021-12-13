import React from "react";
import DesignSectionDot from "../DesignSectionDot/DesignSectionDot";
export function ContactUs(props) {
  return (
    <div id="ContactUs">
      <div className="container-xxl py-5">
        <div className="row">
          <div className="col-12">
            <div className=" py-3 text-center">
              <DesignSectionDot></DesignSectionDot>
              <div className="text-center">
                <h3
                  className="py-3"
                  data-aos-once="true"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  Contact With Us
                </h3>
                <p
                  className="w-75 mx-auto"
                  data-aos-once="true"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  We distribute the 8% transaction fees to holders, so every
                  holder can take benefit from this redistribution.
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
            <div
              className="input-group mb-4 flex-grow-1 me-md-5"
              data-aos-once="true"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <input type="text" placeholder="Name" className="form-control" />
            </div>
            <div
              className="input-group mb-4 flex-grow-1"
              data-aos-once="true"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <input type="text" placeholder="Email" className="form-control" />
            </div>
          </div>
          <div
            className="input-group mb-4"
            data-aos-once="true"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <input type="text" placeholder="Subject" className="form-control" />
          </div>
          <div
            className="input-group mb-4"
            data-aos-once="true"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <textarea
              className="form-control"
              name="message"
              placeholder="Message..."
              style={{ overflow: "visible" }}
            ></textarea>
          </div>
        </div>

        <div
          className="btn_action py-5 text-center"
          data-aos-once="true"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <button className="btn btn-secondary px-5 rounded-pill">
            Send message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
