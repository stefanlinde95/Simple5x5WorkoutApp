import React, { useState } from "react";
import ReactDom from "react-dom";
import { ModalStyle } from "./styles/Modal.styles";

export default function Modal({
  openModal,
  liftWeight,
  setLiftWeight,
  setOpenModal,
}) {
  return ReactDom.createPortal(
    <ModalStyle>
      <div className={`${openModal ? "modal-root" : "hidden"}`}>
        <div className="wrapper bg-white rounded-xl shadow-2xl">
          <div className="w-full mb-4">
            <a
              href="#"
              className="close-btn px-2"
              onClick={() => setOpenModal(false)}
            >
              X
            </a>
          </div>
          <div className="weight rounded-full text-4xl border-1 border w-2/5">
            <input
              className="text-black inline-block rounded-full text-center"
              type="number"
              name="weight"
              id="weight"
              value={liftWeight}
              onChange={(e) => setLiftWeight(e.target.value)}
            />
          </div>
          <p className="text-center">Kg</p>
          <div className="w-full mt-2 flex">
            <a
              href="#"
              className="p-2 add"
              onClick={() => setLiftWeight(liftWeight + 2.5)}
            >
              +
            </a>
            <a
              href="#"
              className="p-2 minus"
              onClick={() => setLiftWeight(liftWeight - 2.5)}
            >
              -
            </a>
          </div>
          <div className="d-full text-center my-1">
            <a
              href="#"
              className="border px-2 rounded border-slate-600 bg-black text-white confirm-btn"
              onClick={() => setOpenModal(false)}
            >
              Done
            </a>
          </div>
        </div>
      </div>
    </ModalStyle>,
    document.getElementById("portal"),
  );
}
