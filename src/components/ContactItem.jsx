import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const ContactItem = ({item}) => {
  return (
    <div>
      <Row>
        <Col lg={2}>
          <img
            width={50}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/960px-Unknown_person.jpg"
          />
        </Col>
        <Col lg={10}>
          <div>{item.name}</div>
          <div>{item.phoneNumber}</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
