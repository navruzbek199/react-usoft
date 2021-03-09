import React from 'react'
import './linkimg.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Linkimg() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={12}>
              <div className="link-img-title">
                <p>Asturia Manus</p>
                <h1>
                  Производство пищевогольда <br></br> премиум качества
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="link-img parallax"  style={{ backgroundImage: "url(/Image19.png)" }}>
        </div>
        <Container>
          <Row>
            <Col md={6}>
              <div className="project">
                <p>О проекте</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="project-texts">
                <p>
                  Asturia Manus производит лёд на профессиональном оборудовании
                  американской компании «Scotman», безусловного мирового лидера
                  по производству лёдогенераторов.
                </p>
                <p>
                  Продукты компании - это лед, производимый из кристально чистой
                  воды,прошедшей многоступенчатую систему очистки и
                  водоподготовки. А это, как известно, незаменимые качества при
                  приготовлении алкогольных, безалкогольных коктейлей и при
                  охлаждении напитков и продуктов.
                </p>
                <a href="#">Посмотреть проект</a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="project-img parallax" style={{ backgroundImage: "url(/Mobile.png)" }}>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="card-img">
                <div className="clas-img">
                  <img src="./box1.png" alt="img"/>
                </div>
                <div className="img-a-text">
                  <p>
                    Обзор текущих событий и <br></br> достопримечательностей{" "}
                    <br></br> города.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="card-img1">
                <div className="clas1-img">
                  <img src="./Image20.png" alt="img"/>
                </div>
                <div className="img-a-text">
                  <p>
                    Обзор текущих событий и <br></br> достопримечательностей{" "}
                    <br></br> города.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="card-img">
                <div className="clas-img">
                  <img src="./Image21.png" alt="img"/>
                </div>
                <div className="img-a-text">
                  <p>
                    Обзор текущих событий и <br></br> достопримечательностей{" "}
                    <br></br> города.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="card-img2">
                <div className="clas2-img">
                  <img src="./Image22.png" alt="img"/>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="design-title">
              <h2>Дизайн передает <br></br> философию <br></br> продукта</h2>
              </div>
            </Col>
            <Col md={6}>
              <div className="design-about">
                <p>
                  Веб-сайт состоит из шести основных разделов, которые подробно
                  описывают лицо Эр-Рияда и обеспечивают целостное представление о
                  городе, включая историю и достопримечательности города.
                  </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="design-img parallax" style={{ backgroundImage: "url(/Image23.png)" }}>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="design-link">
                  <Link>
                    <a href="#">Следующий проект</a>  
                  </Link>
              </div>
            </Col>
          </Row>
          
        </Container>
      </div>
    );
}

export default Linkimg;
