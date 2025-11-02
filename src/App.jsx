import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./components/ContactForm";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="App">
      <h1 className="title">Contact List</h1>
      <Container>
        <Row className="row">
          <Col md={6} lg={8} sm={12}>
            <ContactForm />
          </Col>
        </Row>
        <Row className="row">
          <Col md={6} lg={8} sm={12}>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
