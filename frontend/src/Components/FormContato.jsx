import React from "react";
import "../css/FormCont.css";
import Logo from "../img/gatu.png";
import Image from "react-bootstrap/Image";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
 
function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>
 
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <div class="form-container">
            <Image src={Logo} className="CatHub" width={180} rounded alt='imagem' />
            <form class="form">
              <div class="form-group">
                <label for="email">
                  Coloque seu Email para entrarmos em contato
                </label>
                <input required="" name="email" id="email" type="text"></input>
              </div>
              <div class="form-group">
                <label for="textarea">Como Podemos Ajudar Você</label>
                <textarea
                  required=""
                  cols="50"
                  rows="10"
                  id="textarea"
                  name="textarea"
                >
                  {" "}
                </textarea>
              </div>
              <Button
                variant="secondary"
                class="form-submit-btn"
                onClick={handleClose}
              >
                Enviar
              </Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
 
export default Example;