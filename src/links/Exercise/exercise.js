import React from 'react'
import './exercise.css';
import { Col, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Exercise() {
    return (
      <div className="exercise-page">
        <Container>
          <Row>
            <Col md={12}>
              <div className="exercise-title">
                <h1>Чем мы занимаемся</h1>
                <p>
                  Успешная оффшорная компания по разработке приложений <br></br>{" "}
                  с 2015 года, предоставляющая полный спектр услуг <br></br> по
                  разработке веб-сайтов и мобильных приложений
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <div className="exercise-box-left">
                <p>Разработка мобильных приложений</p>
                <h4>
                  Мы создаем интуитивно понятные и привлекательные приложения
                  для Android, IOS и кроссплатформенные приложения для
                  предприятий и потребителей.
                </h4>
                <span>ios, android, adobe xd, css, html</span>
                <Button className="btn" variant="dark">
                  Подробнее
                </Button>
              </div>
            </Col>
            <Col md={1}></Col>
            <Col md={6} className="mb-4">
              <div className="exercise-box-right">
                <div className="hover2-img">
                  <div className="card2-img">
                    <img src="./Image.png" alt="img"/>
                  </div>
                  <Link to="/bisness">
                  <div className="img-text-sec">
                    <div className="text-midle">Подробнее</div>
                  </div>
                  </Link>
                  
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-4">
              <div className="exercise-box-left">
                <div className="hover-image">
                  <div className="card-image">
                    <img src="./Image32.png" alt="img"/>
                  </div>
                  <Link to="/bisness">
                  <div className="image-text">
                    <div className="texts-midl">Подробнее</div>
                  </div>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={1}></Col>
            <Col md={5}>
              <div className="card-left align-middle">
                <div className="card-title">
                  <p>Мобильная разработка</p>
                </div>
                <div className="card-about">
                  <h4>
                    Мы создаем интуитивно понятные и привлекательные приложения
                    для Android, IOS и кроссплатформенные приложения для
                    предприятий и потребителей.
                  </h4>
                  <p>ios, android, adobe xd, css, html</p>
                </div>
                <div className="exercise-btn">
                  <Button className="btn" variant="light">
                    Подробнее
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <div className="exercise-box-left">
                <p>Разработка мобильных приложений</p>
                <h4>
                  Мы создаем интуитивно понятные и привлекательные приложения
                  для Android, IOS и кроссплатформенные приложения для
                  предприятий и потребителей.
                </h4>
                <span>ios, android, adobe xd, css, html</span>

                <div className="exercise-btn">
                  <Button className="btn" variant="light">
                    Подробнее
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={1}></Col>
            <Col md={6} className="mb-4">
              <div className="exercise-box-right">
                <div className="hover2-img">
                  <div className="card2-img">
                    <img src="./Image33.png" alt="img"/>
                  </div>
                  <Link to="/bisness">
                  <div className="img-text-sec">
                    <div className="text-midle">Подробнее</div>
                  </div>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="work-block-title">
                <h2>
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
      </div>
    );
}

export default Exercise;
