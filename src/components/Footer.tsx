import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  const yearNow = new Date();

  return (
    <footer className="bg-info">
      <Container>
        <Row>
          <Col className="text-center py-3 text-white">
            All Rights Reserved &copy; HackTech LLC {yearNow.getFullYear()} .
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
