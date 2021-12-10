import React from "react";

function FAQ(props) {
  return (
    <div id="frequently_ask_question" className="pb-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-6 col-lg-7">
            <div className=" py-3 ">
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
              <h3 className="py-3">Frequently Asked Questions</h3>
              <p className="w-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                neque qui voluptates, aperiam consequuntur iste necessitatibus
                id fugiat, numquam deleniti rerum illum cumque voluptatibus
                dolore!
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
      <div className="accordion-item">
        <h2 className="accordion-header " id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            What are the objectives of this token?
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
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            What is Token Sale and pre-sale?
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
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            What is the pre-sale start date?
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
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingFour">
          <button
            className="accordion-button collapsed"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            how may I take part in pre-sale?
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFour"
          data-mdb-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <p className="p-3">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TokenSaleEnd() {
  return (
    <div id="TokenSaleEnd" className="p-3 p-md-5">
      <h3 className="text-center mb-3 mb-md-5">Token Sale Ends In</h3>
      <div className="sale_duration_wrapper d-flex justify-content-between">
        <div className="sale_item">
          <span className="d-flex">10</span>
          <span className="d-block">days</span>
        </div>
        <div className="sale_item">
          <span className="d-flex">10</span>
          <span className="d-block">hours</span>
        </div>
        <div className="sale_item">
          <span className="d-flex">10</span>
          <span className="d-block">minutes</span>
        </div>
        <div className="sale_item">
          <span className="d-flex">10</span>
          <span className="d-block">seconds</span>
        </div>
      </div>
    </div>
  );
}
