import React from "react";

function ICO_update(props) {
  return (
    <div id="ICO_update" className="py-5">
      <div className="container-xxl py-5">
        <div className="row justify-content-center">
          <div className="col-11 col-md-9">
            <div className="ico_wrapper p-3 p-md-5 text-center">
              <div className="ico_content ">
                <h2 className="mb-3">Don’t Miss ICO News And Updates!</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam, placeat perspiciatis temporibus deleniti ad at
                  eligendi earum, culpa quidem voluptate alias odit commodi
                  veritatis eveniet.
                </p>
              </div>
              <form action="" method="post">
                <div className="input-group input_custom_group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control"
                  />
                  <button className="btn btn-info btn-sm shadow-0">
                    Submit
                  </button>
                </div>
              </form>
              <div className="ico_join_social mt-3 mt-md-5">
                <span>Join our Chat</span>
                <div className="w-100 py-2"></div>
                <button className="btn btn-secondary">
                  <i className="fab fa-telegram" aria-hidden="true"></i>{" "}
                  Telegram
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ICO_update;
