import React from 'react'
import { Col, Container,  Row } from 'react-bootstrap';
import './aboutus.css';


function Aboutus() {
    
    return (
      <div>
        <Container>
          <Row>
            <div className="work-title">
              <h1>
                Самые лучшие решения <br></br> для вашего бизнеса
              </h1>
            </div>
          </Row>
        </Container>
        <div className="work-img parallax" style={{ backgroundImage: "url(/Image10.png)" }}>
        </div>
        <Container>
          <Row>
            <Col md={6}>
              <div className="work-item">
                <p>
                  К чему мы <br></br> стремимся
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="work-about">
                <p>
                  С первых дней основания компании мы помогаем нашим клиентам
                  решать задачи их бизнеса , создавать новые бренды и
                  digital-продукты. С каждым годом наш багаж знаний растёт , а
                  накопленный опыт позволяет разрабатывать продукты такими,
                  какими они должны быть.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="work-item-img1">
                <img src="./Image11.png"></img>
              </div>
            </Col>
            <Col md={6}>
              <div className="work-item-img2">
                <img src="./Image12.png"></img>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="work-text">
                <h2>
                  Делаем то, что <br></br> другим не под силу
                </h2>
                <p>
                  Cuberto – это сплочённая команда высококлассных специалистов ,
                  способных решать задачи любой сложности в области разработки
                  веб-сайтов и мобильных приложений. Мы любим свое дело и болеем
                  за успех каждого проекта, за который берёмся.
                </p>
                <p>
                  Неважно, в каком вы часовом поясе находитесь и какой
                  методологии разработки придерживаетесь. Мы заботимся о ваших
                  проектах , дедлайнах и нервах в любых условиях.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="work-galery parallax" style={{ backgroundImage: "url(/Image13.png)" }}>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="number-all">
                <div>
                  <span className="count">
                    200 <span>+</span>
                  </span>
                  <p>проектов</p>
                </div>
                <div>
                  <span className="count">
                    30 <span>+</span>
                  </span>
                  <p>сотрудников</p>
                </div>
                <div>
                  <span className="count">
                    5 <span>лет</span>
                  </span>
                  <p>опыта</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <div className="work-client">
                <p>
                  Отзывы наших <br></br>
                  клиентов
                </p>
              </div>
            </Col>
            <Col md={8}>
              <div className="work-right">
                <div className="right-title">
                  <p>Genesis Vision LP.</p>
                </div>
                <div className="right-about">
                  <p>
                    “We chose Usoft to build our mobile app and website. They
                    were fabulous, highly professional partners. Their work was
                    wonderfully original, the account team was always responsive
                    to feedback, and they delivered every aspect of the project
                    on time and on budget. We look forward to working with them
                    on the next phase of our product.”
                  </p>
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
                  <img src="./Image14.png"></img>
                </div>
                <div className="block-title">
                  <p>Внимание к нашему клиенту</p>
                </div>
                <div className="block-about">
                  <p>
                    То, что клиент хочет и что ему нужно, - это первый аспект,
                    который мы принимаем во внимание в нашей компании. Клиент
                    получает выгоду от нашего продукта.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="block-item1">
                <div className="block-img">
                  <img src="./Image15.png"></img>
                </div>
                <div className="block-title">
                  <p>Внимание к нашему клиенту</p>
                </div>
                <div className="block-about">
                  <p>
                    Решим любые задачи вашего бизнеса: от создания логотипа,
                    проектирования, дизайна интерфейса до разработки,
                    технической поддержки и маркетинга.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="block-item">
                <div className="block-img">
                  <img src="./Image16.png"></img>
                </div>
                <div className="block-title">
                  <p>Внимание к нашему клиенту</p>
                </div>
                <div className="block-about">
                  <p>
                    Мы ценим все активы наших клиентов. Мы стараемся сделать
                    так, чтобы наш клиент получил лучший товар по разумной цене
                    и в короткие сроки.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="block-item1">
                <div className="block-img">
                  <img src="./Image17.png"></img>
                </div>
                <div className="block-title">
                  <p>Внимание к нашему клиенту</p>
                </div>
                <div className="block-about">
                  <p>
                    Для нас не существует выражения “это невозможно сделать”. Мы
                    разрабатываем продукты именно такими, какие они получились
                    на этапе дизайна.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Aboutus;
