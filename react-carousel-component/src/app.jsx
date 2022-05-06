import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.test = this.test.bind(this);
  }

  test(props) {
  }

  render() {
    const imageElements = this.props.imageArray.map(image => {
      return (
          <Carousel.Item className='' key={image.id}>
            <Row className="d-flex justify-content-center">
              <img
                className="w-50"
                src={image.url}
                alt={image.name}
              />
            </Row>
          </Carousel.Item>
      );
    });
    return (
      <Container fluid="md">
        <Row className="justify-content-between">
          <Col xs={5}>
            <Carousel className="bg-dark">
              { imageElements }
            </Carousel>
          </Col>
          <Col xs={5}>
            <Carousel className="bg-dark">
              { imageElements }
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col />
        </Row>
      </Container>
    );
  }
}
