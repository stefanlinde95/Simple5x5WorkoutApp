import React, { useState } from "react";
import Modal from "./Modal.component";

export default function ModalButton({ weight }) {
  const [openModal, setOpenModal] = useState(false);
  const [liftWeight, setLiftWeight] = useState(weight);
  return (
    <>
      <a
        href="#"
        className="text-grey mt-4 pl-2 font-thin"
        onClick={() => setOpenModal(!openModal)}
      >
        Edit
      </a>
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
