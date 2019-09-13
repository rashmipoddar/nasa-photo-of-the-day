import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Content = (props) => {
  return (
    <div>
      <h1 className="text-center">{`NASA Image of the day for ${props.date}`}</h1>
      <Card inverse style={{ backgroundColor: "transparent" }} body outline color="secondary">
        <CardTitle className="text-center align-middle text-dark"><span className="align-middle font-weight-bold" style={{ fontSize: "3rem" }}>{props.title}</span></CardTitle>
        <CardImg top width="100%" object-fit="cover" src={props.imgUrl} alt="Image of the day" />
        <CardBody >
          <CardSubtitle className="text-right text-dark">{`Image Copyright: ${props.copyright}`}</CardSubtitle>
          <Button className="text-dark" style={{ backgroundColor: "transparent" }} onClick={props.modalClick}>Description</Button>
          <Modal isOpen={props.modal} toggle={props.modalClick} >
          <ModalHeader>About The Image</ModalHeader>
          <ModalBody>
            {props.explanation}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={props.modalClick}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </CardBody>
      </Card>
    </div>
  );
};

export default Content;