import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './lastlink.css';
import { Link } from "react-router-dom";



function Link1() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <div className="link1-about">
              <p>10 июня 2020</p>
              <h1>
                Подписывайтесь на наш <br></br> канал Patreon: дизай <br></br>{" "}
                -курсы и советы
              </h1>
              <img src="./Image18.png"/>
            </div>
            <div className="link1-texts">
              <p>
                In 2019, we launched our own design courses on Youtube, where we
                share the process of creating mobile and web interfaces. The
                first three courses were released as a test and we received over
                600,000 views. Each course includes an overview of creating a
                unique interface and a demonstration of work using such software
                as: Figma, Sketch, After Effects, Cinema 4D, Principle. Special
                attention is paid to the process of creating animations in After
                Effects and Principle.
              </p>
              <p>
                We did not have a dedicated team to create such content, hence
                the courses came out without any periodicity and we only managed
                to release 3 videos throughout the year due to the high load on
                other projects.
              </p>
              <p>
                This year we have formed a separate team of our best specialists
                who will create more content for our subscribers. All the best
                and newest ones will now be hosted on Patreon:
              </p>

              <p>
                - Access to the source files of thematic mobile and web
                interfaces, including the After Effects and Cinema 4D source
                files
              </p>

              <p>
                - Design tips for designers, that cover everything you need to
                increase your skill and properly promote your Dribbble account
                to start earning.
              </p>
              <p>
                - Access to the design courses, including screencast videos of
                making mobile and web interfaces with comments
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className="news-title">
              <p>Новости  <br></br>по этой теме</p>
            </div>
          </Col>
          <Col md={3}></Col>
          <Col md={5}>
            <div className="news-text">
              <p>
                {" "}
                <Link to="/lastlink">
                  Umbrella soft анонсирует новое <br></br> поколение мобильных
                  приложений <br></br>
                  дизайн-курсы и советы
                </Link>{" "}
              </p>
              <span>10 июня 2020</span>
            </div>
            <div className="news-text">
              <p>
                {" "}
                <a href="#">
                  Последние советы для дизайнеров, <br></br> которые могут
                  улучшить ваше <br></br>
                  портфолио
                </a>{" "}
              </p>
              <span>10 июня 2020</span>
            </div>
            <div className="news-text">
              <p>
                {" "}
                <a href="#">
                  Umbrella soft анонсирует новое <br></br> поколение мобильных
                  приложений <br></br>
                  дизайн-курсы и советы
                  </a>{" "}
              </p>
              <span>10 июня 2020</span>
            </div>
          </Col>
        </Row>
      </Container>
    );
}

export default Link1;
