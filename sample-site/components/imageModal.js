import Modal from "react-modal";
import { useState } from "react";

export default function ImageModal(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="image-container">
      <img className="main-image" src={props.images} onClick={handleModalOpen} />

      <Modal isOpen={modalIsOpen} onRequestClose={handleModalClose} contentLabel="Image description">
        <h1> {props.title} </h1>

        {/* {props.images.map((image) => ( */}
        <img className="modal-image" src={props.images} />
        {/* ))} */}

        <p>{props.description}</p>
        {props.Heads?.length > 0 ? (
          <p>
            <h4>Heads:</h4>
            {props.Heads.map((head) => (
              <li> {head.name} (<a href={"mailto:" + head.email}>{head.email}</a>) </li>
            ))}
          </p>
        ) : (
          ""
        )}
      </Modal>
    </div>
  );
}
