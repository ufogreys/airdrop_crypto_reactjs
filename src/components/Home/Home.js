import React from "react";
import Airdrop_img from "../../assets/images/airdrop_img.png";
function Home(props) {
  return (
    <div id="homeComponent">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center flex-wrap flex-lg-nowrap">
              <div className="left_box order-2 order-lg-1 text-center text-lg-start">
                <button className="btn btn-secondary rounded-pill">
                  Discover a new ways to enjoy your World!
                </button>

                <h2 className="py-3 py-sm-4 py-md-5">
                  Discover a new ways to enjoy your World!
                </h2>
                <p>
                  We have over 15 year exprience in business consultting arena.
                  We have over 15 year exprience in business consultting arena
                  and artficial intelligence.
                </p>
                <div className="btn_wrapper mt-4">
                    <button className="btn rounded-pill me-3 btn-danger">Learn more</button>
                    <button className="btn rounded-pill btn-warning">Learn more</button>
                </div>
              </div>
              <div className="right_box order-1 order-lg-2">
                <img className="w-100" src={Airdrop_img} alt="airdrop_img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
