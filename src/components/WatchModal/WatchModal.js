import React from "react";

function WatchModal(props) {
  return (
    <div
      className="modal fade "
      id="watchModalView"
      data-backdrop="static"
      data-keyboard="false"
      tabIndex="-1"
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
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchModal;
