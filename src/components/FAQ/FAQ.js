import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import DesignSectionDot from "../DesignSectionDot/DesignSectionDot";
export function FAQ(props) {
  return (
    <div id="frequently_ask_question" className="py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-6 col-lg-7">
            <div className=" py-3 ">
              <DesignSectionDot></DesignSectionDot>
              <h3
                className="py-3"
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                Frequently Asked Questions
              </h3>
              <p
                className="w-75"
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Dream Coin is a charitable based token. Dream coin holders makes
                suggestions and vote on all charitable donations. Donations will
                go to hospitals, children, homeless and animal organizations, as
                chosen and approved by community majority vote. Also annually,
                ongoing Dream Community will create a scholarship fund for
                donation and randomly select an outstanding student heading to
                college.
              </p>
            </div>

            <FaqAccordion></FaqAccordion>
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="py-3">
              <TokenSaleEnd></TokenSaleEnd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;

function FaqAccordion() {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div
        className="accordion-item"
        data-aos-once="true"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <h2 className="accordion-header " id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Dream Protocol WhitePaper
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-mdb-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <p className="p-3">
              Static Rewards, LP Acquisition, Autobuyback and Burn Dream coin
              implemented the autobuyback and burn feature. This happens
              automatically when there is selling. With this, we were ensuring
              that our LPMAX was safe during buy/sells transactions .
            </p>
          </div>
        </div>
      </div>
      <div
        className="accordion-item"
        data-aos-once="true"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            THE PURPOSE OF THE “LPMAX” (Liquidity Pool).
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-mdb-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <p className="p-3">
              Many of us avid crypto currency investors may have been subjected
              to many types of unfortunate events, such as, scams, rug pulls,
              honey pots, pump/dumps, etc.. that may have caused an unfair loss.
              Therefore, being around a while and even experiencing a few of
              those terrible circumstances, we concluded that we needed a
              solution and more “Developer Transparency & Accountability”.
            </p>
          </div>
        </div>
      </div>
      <div
        className="accordion-item"
        data-aos-once="true"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <h2 className="accordion-header" id="flush-headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            So Our Team Created Dream Coin and The LPMAX (Liquidity Pool)
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-mdb-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <p className="p-3">
              The most important elements that we decided were necessary were
              investment safeguards. With This Launch And To Ensure The Safety
              Of Our LPMax We’re Incorporating A Tax Scale To Benefit Investors
              - As Follows: The First 30 Days/50% Tax; After 60 Days 30% Tax;
              and lastly, After 90 Days A 15% Tax. This Will Be The Reduction
              Tax Scale To Ensure No Pump And Dumps. We believe this assures a
              healthy stable and steady growth of Dream Coin’s Token Value.
              Additionally, we also believe that it was necessary to reward long
              term investors (holders) with 8% redistribution from all sells.
              This made economical sense to us because it promotes growth and
              prospering benefits to everyone. Lastly, to demonstrate a
              promising token value to holders of Dream Coin. We implemented the
              BuyBack/AutoBurn of Dream Coin Tokens . Out of A Supply of 120
              Million Dream Coins Were Set To Burn A Maximum Up to 50% of Its
              Supply, Resulting In A Maximum of 60 Million Dream Coin. It is our
              hope to minimize market crashes, frustrate scamming techniques and
              to help improve crypto investing “Hopes” To Make Everyone “Dreams
              Come True.”
            </p>
          </div>
        </div>
      </div>

      <div
        className="accordion-item"
        data-aos-once="true"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        <h2 className="accordion-header" id="flush-headingFour">
          <button
            className="accordion-button collapsed"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            Why Static?
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFour"
          data-mdb-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <p className="p-3">
              Static rewards solve a host of problems. First, the reward amount
              is conditional upon the volume of the token being traded. This
              mechanism aims to alleviate some of the downward sell pressure put
              on the token caused by earlier adopters selling their tokens after
              farming crazy high APY’s. Second, the reflect mechanism encourages
              holders to hang onto their tokens to garner higher kick-backs
              which are based upon a percentages carried out and dependant upon
              the total tokens held by the owner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TokenSaleEnd() {
  // default date
  const totalTime = "December 21, 2023 01:15:00:526"; // add your total date here
  const defaultDate = Date.parse(totalTime);
  console.log(defaultDate);
  // Random component
  const Completionist = () => <b>0</b>;

  // Renderer callback with condition
  const seconds = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <b>{seconds}</b>;
    }
  };
  const minutes = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <b>{minutes}</b>;
    }
  };

  const hours = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <b>{hours}</b>;
    }
  };
  // To calculate the time difference of two dates
  let Difference_In_Time = new Date(totalTime) - new Date();

  // To calculate the no. of days between two dates
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  const days = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return ~~Difference_In_Days;
    }
  };
  return (
    <div id="TokenSaleEnd" className="p-3 p-md-5 rounded-5">
      <h3
        className="text-center mb-3 mb-md-5"
        data-aos-once="true"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Token Sale Ends In
      </h3>
      <div className="sale_duration_wrapper d-flex justify-content-between">
        <div
          className="sale_item"
          data-aos-once="true"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span className="d-flex">
            <Countdown date={Date.now() + defaultDate} renderer={days} />
          </span>
          <span className="d-block">days</span>
        </div>
        <div
          className="sale_item"
          data-aos-once="true"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="d-flex">
            <Countdown date={Date.now() + defaultDate} renderer={hours} />
          </span>
          <span className="d-block">hours</span>
        </div>
        <div
          className="sale_item"
          data-aos-once="true"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <span className="d-flex">
            {" "}
            <Countdown date={Date.now() + defaultDate} renderer={minutes} />
          </span>
          <span className="d-block">minutes</span>
        </div>
        <div
          className="sale_item"
          data-aos-once="true"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <span className="d-flex">
            <Countdown date={Date.now() + defaultDate} renderer={seconds} />
          </span>
          <span className="d-block">seconds</span>
        </div>
      </div>

      <div
        className="btn_control text-center py-3 pt-md-5"
        data-aos-once="true"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <button className="btn btn-light text-success rounded-pill">
          Buy More Tokens
        </button>
      </div>
    </div>
  );
}
