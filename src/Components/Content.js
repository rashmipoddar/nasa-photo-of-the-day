import React from 'react';

import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Content = (props) => {
  return (
    <div>
      <h1 className="text-center">{`NASA Image of the day for ${props.date}`}</h1>
      <Card outline color="secondary">
        <CardTitle className="text-center align-middle"><span className="align-middle">{props.title}</span></CardTitle>
        <CardImg top width="100%" object-fit="cover" src={props.imgUrl} alt="Image of the day" />
        <CardBody >
          <CardSubtitle className="text-right text-muted">{`Image Copyright: ${props.copyright}`}</CardSubtitle>
          <button onClick={props.modalClick}>Description</button>
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