import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './topic.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WOW from 'wowjs';


function Topic() {
    new WOW.WOW({
      live: false
  }).init();
  
  

    // let textItem = useRef(null);
    // let textItem1 = useRef(null);


    // useEffect(() => {
    //   TweenMax.to(
    //     textItem1,
    //     .8,
    //     {
    //       opacity: 1,
    //       y:-20,
    //       ease: Power3.easeOut,
    //       delay: .2

    //     }
    //   )
    //   TweenMax.to(
    //     textItem,
    //     .8,
    //     {
    //       opacity: 1,
    //       y:-20,
    //       ease: Power3.easeOut,
    //       delay: .2

    //     }
    //   )
    // })
  
    
      

  

    return (
      <div>
        <Container>
          <Row className="m-0">
            <Col className="d-block">
              <div className="header-title">
                <p>
                  Разрабатываем уникальные решения для вашего бизнеса
                  </p>
                <div className="tit_spn text-decoration-none wow fadeInDown" data-wow-delay="0.5s">
                  <span className="pl-0 t-1">Сайты</span>
                  <span className=" t-2">Приложения</span>
                  <span className="t-3">Автоматизация</span>
                </div>
              </div>
              <div className="header-about">
                <p>
                  Мы IT-компания с большим опытом. Мы разрабатываем веб-сайты, <br></br>
                  мобильные приложения и системы оптимизации бизнеса с помощью <br></br>
                  новейших технологий
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Topic;
