import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import './blog.css';
import { Link } from 'react-router-dom';
function Blog() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={12}>
              <div className="blog-title">
                <p>
                  Подписывайтесь на наш блог <br></br>
                  чтобы быть в курсе последних <br></br>
                  новостей
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <div className="blog-left">
                <p>10 июня 2020</p>
                <h4>
                  Подписывайтесь на наш канал Patreon: дизайн-курсы и советы
                </h4>
                <span>
                  In our team, developers work alongside designers. This is
                  crucial in creating a fast and responsive website that would
                  excite the audience.
                </span>
                
                <Button className="btn" variant="light">
                  Подробнее
                </Button>
              </div>
            </Col>

            <Col md={1}></Col>
            <Col md={6}>
                <div className="blog-right">
                    <div className="blog-r-img">
                        <img src="./Image6.png"/>
                    </div>
                    <Link to="/bisness">
                    <div className="img-text">
                        <div className="text-midl">
                            Подробнее
                        </div>
                    </div>
                    </Link>
                </div>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <div className="blog-left">
                <p>10 июня 2020</p>
                <h4>
                  Подписывайтесь на наш канал Patreon: дизайн-курсы и советы
                </h4>
                <span>
                  In our team, developers work alongside designers. This is
                  crucial in creating a fast and responsive website that would
                  excite the audience.
                </span>
                <Button className="btn" variant="light">
                  Подробнее
                </Button>
              </div>
            </Col>

            <Col md={1}></Col>
            <Col md={6}>
                <div className="blog-right">
                    <div className="blog-r-img">
                        <img src="./Image7.png"/>
                    </div>
                    <Link to="/bisness">
                    <div className="img-text">
                        <div className="text-midl">
                            Подробнее
                        </div>
                    </div>
                    </Link>
                </div>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <div className="blog-left">
                <p>10 июня 2020</p>
                <h4>
                  Подписывайтесь на наш канал Patreon: дизайн-курсы и советы
                </h4>
                <span>
                  In our team, developers work alongside designers. This is
                  crucial in creating a fast and responsive website that would
                  excite the audience.
                </span>
                <Button className="btn" variant="light">
                  Подробнее
                </Button>
              </div>
            </Col>

            <Col md={1}></Col>
            <Col md={6}>
                <div className="blog-right">
                    <div className="blog-r-img">
                        <img src="./Image8.png"/>
                    </div>
                    <Link to="/bisness">
                    <div className="img-text">
                        <div className="text-midl">
                            Подробнее
                        </div>
                    </div>
                    </Link>
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Blog;
