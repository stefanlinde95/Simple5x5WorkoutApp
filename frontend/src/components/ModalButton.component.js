import React, { useState } from "react";
import Modal from "./Modal.component";

export default function ModalButton({ weight }) {
  const [openModal, setOpenModal] = useState(false);
  const [liftWeight, setLiftWeight] = useState(weight);
  return (
    <>
      <input
        className="weight ms-auto bg-transparent mr-1"
        type="number"
        onChange={(e) => {
          setLiftWeight(e.target.value);
        }}
        value={liftWeight}
      />
      <p className="kg text-xl">Kg</p>
      <div
        className="text-grey mt-4 pl-2 font-thin edit-btn"
        onClick={() => setOpenModal(!openModal)}
      >
        Edit
      </div>
      <Modal
        liftWeight={liftWeight}
        openModal={openModal}
        weight={weight}
        setLiftWeight={setLiftWeight}
        setOpenModal={setOpenModal}
      />
    </>
  );
}
