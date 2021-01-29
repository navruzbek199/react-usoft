import React from 'react'
import { Col, Container, Nav, NavItem, NavLink, Row } from 'react-bootstrap';
import './works.css';



function Works() {
    return (
      <div className="works-page">
        <Container>
          <Row>
            <Col md={12}>
              <Nav>
                <NavItem>
                  <NavLink className="work-link active">Все проекты</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="work-link">Веб-сайты</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="work-link">Веб-приложения</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="works-page-1">
                <div className="page-img">
                  <img src="./Image24.png"/>
                </div>
                <div className="page-p">
                  <p>
                    <span>Sola</span>- личный кабинет пользователя, <br></br> wi-fi
                    оператора Sola
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="works-page-2">
                <div className="page-img">
                  <img src="./Image25.png"/>
                </div>
                <div className="page-p">
                  <p>
                    <span>Sola</span>- личный кабинет пользователя, <br></br> wi-fi
                    оператора Sola
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="works-page-1">
                <div className="page-img">
                  <img src="./Image26.png"/>
                </div>
                <div className="page-p">
                  <p>
                    <span>PRO</span>- личный кабинет пользователя, <br></br> wi-fi
                    оператора Sola
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="works-page-3">
                <div className="page-img">
                  <img src="./Image27.png"/>
                </div>
                <div className="page-p">
                  <p>
                    <span>Soomi</span>- личный кабинет пользователя, <br></br> wi-fi
                    оператора Sola
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="works-page-1">
                <div className="page-img">
                  <img src="./Image28.png"/>
                </div>
                <div className="page-p">
                  <p>
                    <span>Uskunalar</span>- личный кабинет пользователя,<br></br> wi-fi
                    оператора Sola
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="works-page-4">
                <div className="page-img">
                  <img src="./Image29.png"/>
                </div>
                <div className="page-p">
                  <p>
                    <span>Yuridik</span>- личный кабинет пользователя, <br></br> wi-fi
                    оператора Sola
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="works-page-1">
                <div className="page-img">
                  <img src="./Image30.png"/>
                </div>
                <div className="page-p">
                  <p>
                    <span>Dr.Asror</span>- личный кабинет пользователя, <br></br> wi-fi
                    оператора Sola
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="works-page-5">
                <div className="page-img">
                  <img src="./Image31.png"/>
                </div>
                <div className="page-p">
                  <p>
                    <span>Xon Saroy</span>- личный кабинет пользователя, <br></br> wi-fi
                    оператора Sola
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}
export default Works;
