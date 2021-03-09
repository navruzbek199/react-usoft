import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import './bisness.css';
import {Link} from 'react-router-dom';


function Bisness() {
    return (
      <div className="bisness-page">
        <Container>
          <Row>
            <Col md={12}>
              <div className="bisnes-title mb-4">
                <p>Мобильная разработка</p>
                <h1>
                  Расширяйте бизнес <br></br> через мобильные <br></br>{" "}
                  приложения
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="bisness-page-img parallax" style={{ backgroundImage: "url(/Image34.png)" }} >
        </div>
        <Container>
          <Row>
            <Col md={12}>
              <div className="bisnes-text">
                <p className="mt-5">
                  Мы делаем только нативные приложения, уделяя большое внимание{" "}
                  <br></br>
                  проектированию и дизайну. Тем самым разработанные нами{" "}
                  <br></br>
                  продукты намного лучше адаптированы под вашу аудиторию.
                </p>
                <Button className="btn black" variant="light">
                  Подробнее
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={12}>
              <div className="bisnes-title ml-5 mb-4 mt-5">
                <h1>Наши работы</h1>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="works-page-1">
                <div className="page-img parallax" style={{ backgroundImage: "url(/Image24.png)" }}>
                </div>
                <div className="page-p">
                  <p>
                    <span>Sola</span>- личный кабинет пользователя, <br></br>{" "}
                    wi-fi оператора Sola
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="works-page-2">
              <div className="page-img parallax" style={{ backgroundImage: "url(/Image25.png)" }}>
                </div>
                <div className="page-p">
                  <p>
                    <span>Sola</span>- личный кабинет пользователя, <br></br>{" "}
                    wi-fi оператора Sola
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="works-page-1">
              <div className="page-img parallax" style={{ backgroundImage: "url(/Image26.png)" }}>
                </div>
                <div className="page-p">
                  <p>
                    <span>PRO</span>- личный кабинет пользователя, <br></br>{" "}
                    wi-fi оператора Sola
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="works-page-3">
              <div className="page-img">
                <img src="Image27.png" alt="img"/>
                </div>
                <div className="page-p">
                  <p>
                    <span>Soomi</span>- личный кабинет пользователя, <br></br>{" "}
                    wi-fi оператора Sola
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="mt-5">
              <div className="work-block-title mt-5">
                <h2 className="mt-5">
                  Преимущества <br></br> работы с нами
                </h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="block-item">
                <div className="block-img">
                  <img src="./Image14.png" alt="img"/>
                </div>
                <div className="block-title">
                  <p>Внимание к нашему клиенту</p>
                </div>
                <div className="block-about">
                  <p>
                    То, что клиент хочет и что ему нужно,<br></br> - это первый
                    аспект, который мы принимаем во внимание в нашей компании.
                    Клиент <br></br>
                    получает выгоду от нашего продукта.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="block-item1">
                <div className="block-img">
                  <img src="./Image15.png" alt="img"/>
                </div>
                <div className="block-title">
                  <p>Внимание к нашему клиенту</p>
                </div>
                <div className="block-about">
                  <p>
                    Решим любые задачи вашего бизнеса: от <br></br> создания
                    логотипа, проектирования, дизайна <br></br> интерфейса до
                    разработки, технической поддержки и маркетинга.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="block-item">
                <div className="block-img">
                  <img src="./Image16.png" alt="img"/>
                </div>
                <div className="block-title">
                  <p>Внимание к нашему клиенту</p>
                </div>
                <div className="block-about">
                  <p>
                    Мы ценим все активы наших клиентов. <br></br>Мы стараемся
                    сделать так, чтобы наш клиент<br></br> получил лучший товар
                    по разумной цене<br></br>и в короткие сроки.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="block-item1">
                <div className="block-img">
                  <img src="./Image17.png" alt="img"/>
                </div>
                <div className="block-title">
                  <p>Внимание к нашему клиенту</p>
                </div>
                <div className="block-about">
                  <p>
                    Для нас не существует выражения <br></br> “это невозможно
                    сделать”. Мы разрабатываем <br></br> продукты именно такими,
                    какие они получились на этапе дизайна.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={5}>
              <div className="news-title">
                <p>
                  Другие <br></br>
                  услуги
                </p>
              </div>
            </Col>
            <Col md={1}></Col>
            <Col md={6}>
              <div className="news-text">
                <p>
                  {" "}
                  <Link to="#">
                    Разработка веб-сайтов 
                  </Link>{" "}
                </p>
              </div>
              <div className="news-text">
                <p>
                  {" "}
                  <a href="#link2">Оптимизация бизнеса</a>{" "}
                </p>
              </div>
              <div className="news-text">
                <p>
                  {" "}
                  <a href="#link3">SEO оптимизация</a>{" "}
                </p>
              </div>
              <div className="news-text">
                <p>
                  {" "}
                  <a href="#link3">Платформы онлайн обучения</a>{" "}
                </p>
              </div>
              <div className="news-text">
                <p>
                  {" "}
                  <a href="#link3"> Сопровождение сайтов</a>{" "}
                </p>
              </div>

            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Bisness;
