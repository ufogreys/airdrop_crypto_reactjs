import React from "react";

function WatchModal(props) {
  return (
    <div
      className="modal fade show"
      id="watchModalView"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdrop"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body m-0 p-0">
            <iframe
              className="w-100 h-100"
              src="https://www.youtube.com/embed/zpNlG3VtcBM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchModal;
