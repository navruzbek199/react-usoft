import React  from 'react'
import { Col, Container, Row, NavLink  } from 'react-bootstrap';
import './project.css';
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import WOW from 'wowjs';


function Project() {

    new WOW.WOW({
      live: false
  }).init();


    return (
      <Container className="container">
        <Row className="row">
          <Col md={12}>
            <div className="ser_title">
              <p>
                Избранные <span>проекты</span>
              </p>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col md={5}>
            <div className="card-right wow bounceInLeft" data-wow-delay="0.2s" infinite >
              <div className="card-title">
                <p>Asturia Manus </p>
              </div>
              <div className="card-about">
                <span>Производство пищевого льда премиум качества</span>
              </div>
              <div className="type-text">
                <span>web, design, development</span>
              </div>
              <div className="card-person">
                <div className="person-about">
                  <div className="person-img">
                    <img src="./Photo.png" alt="img" />
                  </div>
                  <div className="person-name">
                    <p>Игорь Германович</p>
                    <span>Частное лицо</span>
                  </div>
                </div>
                <div className="person-contact">
                  <p>
                    Равным образом укрепление и развитие структуры влечет за
                    собой процесс внедрения и модернизации модели развития.
                    Таким образом реализация намеченных плановых заданий
                    позволяет выполнять важные задания по разработке модели
                    развития.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={1}></Col>
          <Col md={6}>
            <div className="hover2-img wow bounceInRight" data-wow-delay="0.3s" infinite>
              <div className="card2-img">
                <img src="./Image2.png" alt="img"/>
              </div>
              <Link to="/linkimg">
              <div className="img-text-sec">
                <div className="text-midle div-span1">
                  view <br></br> case
                </div>
              </div>
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col md={5}>
            <div className="card-right wow bounceInLeft" data-wow-delay="0.3s" infinite>
              <div className="card-title">
                <p>Yuridik</p>
              </div>
              <div className="card-about">
                <span>Онлайн-платформа для оказания юридической помощи</span>
              </div>
              <div className="type-text">
                <span>web, design, development</span>
              </div>
              <div className="card-person">
                <div className="person-about">
                  <div className="person-img">
                    <img src="./Photo2.png" alt="img"/>
                  </div>
                  <div className="person-name">
                    <p>Таир Абдурахимов</p>
                    <span>Частное лицо</span>
                  </div>
                </div>
                <div className="person-contact">
                  <p>
                    Таким образом рамки и место обучения кадров влечет за собой
                    процесс внедрения и модернизации существенных финансовых и
                    административных условий. Товарищи!
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={1}></Col>
          <Col md={6}>
            <div className="hover2-img wow bounceInRight" data-wow-delay="0.3s" infinite>
              <div className="card2-img">
                <img src="./Image3.png" alt="img"/>
              </div>
              <Link to="/linkimg">
              <div className="img-text-sec">
                <div className="text-midle div-span2">
                  view <br></br> case
                </div>
              </div>
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col md={5}>
            <div className="card-right wow bounceInLeft" data-wow-delay="0.3s" infinite>
              <div className="card-title">
                <p>Sola wi-fi оператор</p>
              </div>
              <div className="card-about">
                <span>Личный кабинет пользователя, wi-fi оператора Sola</span>
              </div>
              <div className="type-text">
                <span>web, design, development</span>
              </div>
              <div className="card-person">
                <div className="person-about">
                  <div className="person-img">
                    <img src="./Photo3.png" alt="img"/>
                  </div>
                  <div className="person-name">
                    <p>Виктория Плясовицина</p>
                    <span>Частное лицо</span>
                  </div>
                </div>
                <div className="person-contact">
                  <p>
                    Идейные соображения высшего порядка, а также реализация
                    намеченных плановых заданий влечет за собой процесс
                    внедрения и модернизации модели развития.
                    <br></br>
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={1}></Col>
          <Col md={6}>
            <div className="hover2-img wow bounceInRight" data-wow-delay="0.3s" infinite>
              <div className="card2-img">
                <img src="./Image4.png" alt="img"/>
              </div>
              <Link to="/linkimg">
              <div className="img-text-sec">
                <div className="text-midle div-span3">
                  view <br></br> case
                </div>
              </div>
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col md={5}>
            <div className="card-right wow bounceInLeft" data-wow-delay="0.3s" infinite>
              <div className="card-title">
                <p>BBQ Delivery</p>
              </div>
              <div className="card-about">
                <span>Мобильное приложение для заказа быстрой еды</span>
              </div>
              <div className="type-text">
                <span>mobile, design, development, product</span>
              </div>
              <div className="card-person">
                <div className="person-about">
                  <div className="person-img">
                    <img src="./Photo3.png" alt="img"/>
                  </div>
                  <div className="person-name">
                    <p>Хакимов Ришад</p>
                    <span>Частное лицо</span>
                  </div>
                </div>
                <div className="person-contact">
                  <p>
                    Повседневная практика показывает, что дальнейшее развитие
                    различных форм деятельности требуют от нас анализа модели
                    развития.
                    <br></br>
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={1}></Col>
          <Col md={6}>
            <div className="hover2-img wow bounceInRight" data-wow-delay="0.3s" infinite>
              <div className="card2-img">
                <img src="./Image5.png" alt="img"/>
              </div>
              <Link to="/linkimg">
              <div className="img-text-sec">
                <div className="text-midle div-span4">
                  view <br></br> case
                </div>
              </div>
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col md={12}>
            <div className="link-next">
              <div className="link-text">
                <p>
                  <a href="#">Посмотреть все проекты</a>
                </p>
              </div>
              <div className="next-icon">
                <NavLink href="#">
                  {" "}
                  <BsArrowRight />
                </NavLink>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col md={5}>
            <div className="news-title">
              <p>Последние новости</p>
            </div>
          </Col>
          <Col md={1}></Col>
          <Col md={6}>
            <div className="news-text">
              <p>
                {" "}
                <Link to="/link1">
                  Umbrella soft анонсирует новое <br></br> поколение мобильных приложений <br></br>
                  дизайн-курсы и советы
                </Link>{" "}
              </p>
              <span>10 июня 2020</span>
            </div>
            <div className="news-text">
              <p>
                {" "}
                <Link to="/link1">
                  Последние советы для дизайнеров, <br></br> которые могут улучшить ваше <br></br>
                  портфолио
                  </Link>{" "}
              </p>
              <span>10 июня 2020</span>
            </div>
            <div className="news-text">
              <p>
                {" "}
                <Link to="/link1">
                  Umbrella soft анонсирует новое <br></br> поколение мобильных приложений <br></br>
                  дизайн-курсы и советы
                  </Link>{" "}
              </p>
              <span>10 июня 2020</span>
            </div>
          </Col>
        </Row>
      </Container>
    );
}

export default Project
