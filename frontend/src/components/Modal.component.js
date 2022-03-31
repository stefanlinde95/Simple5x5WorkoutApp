import React, { useState } from "react";
import ReactDom from "react-dom";
import { ModalStyle } from "./styles/Modal.styles";

export default function Modal({
  openModal,
  liftWeight,
  setLiftWeight,
  setOpenModal,
}) {
  const [weightStep, setWeightStep] = useState(2.5);
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
          <p className="text-center text-2xl">Kg</p>
          <div className="w-full my-2 text-center">
            <p>Set step weight:</p>
            <input
              type="number"
              onChange={(e) => setWeightStep(e.target.value)}
              value={weightStep}
              className="border-b-2 w-10 text-center text-xl"
            />
          </div>
          <div className="w-full my-2 flex">
            <div
              className="add cursor-pointer border rounded-full"
              onClick={() =>
                setLiftWeight(parseFloat(liftWeight) + parseFloat(weightStep))
              }
            >
              +
            </div>
            <div
              className="minus cursor-pointer border rounded-full"
              onClick={() =>
                setLiftWeight(parseFloat(liftWeight) - parseFloat(weightStep))
              }
            >
              -
            </div>
          </div>
          <div className="d-full text-center mt-4 mb-2">
            <div
              className="border px-2 rounded border-slate-600 bg-black text-white confirm-btn cursor-pointer mx-4"
              onClick={() => setOpenModal(false)}
            >
              Done
            </div>
          </div>
        </div>
      </div>
    </ModalStyle>,
    document.getElementById("portal"),
  );
}
