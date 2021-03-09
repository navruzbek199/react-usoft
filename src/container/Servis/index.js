import React from 'react'
import { Col, Container, Row, Nav, Button} from 'react-bootstrap';
import './index.css';
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';




function  Servis() {
    return (
        <Container>
            <Row>
                <Col md={4}>  
                    <div className="ser_tit">
                      <p>Наши <span>сервисы</span></p>
                    </div>
                </Col>
                <Col md={{ span: 4, offset: 4 }}> 
                    <div className="ser_link">
                    <Link to="/exercise" className="nav_ser">Посмотреть все <BsArrowRight/></Link>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Nav className="nav-servis">
                    <Nav.Item>
                      <Nav.Link  className="ml-0 pl-0" href="/works">Мобильные приложения</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="ml-0 pl-0" eventKey="/works">Веб сайты</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="ml-0 pl-0"  eventKey="/works">Автоматизация бизнеса</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="ml-0 pl-0" eventKey="/works">Платформы онлайн-обучения</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="ml-0 pl-0" eventKey="/works">SEO оптимизация</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="ml-0 pl-0"  eventKey="/works">Сопровождение сайтов</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Col>  
            </Row>
            <Row>
            <Col md={4}>
                <div className="hover-image">
                    <div className="card-imagex">
                        <img src="./Image.png"></img>
                    </div>
                    <Link to="/bisness">
                        <div className="image-text">
                            <div className="texts-midl">
                                Подробнее
                            </div>
                        </div>
                    </Link>
                </div>
            </Col>
            <Col md={{ span: 5, offset: 3 }}>
                    <div className="card-left align-middle">
                    <div className="card-title">
                        <p>Мобильная разработка</p>
                    </div>
                    <div className="card-about">
                        <p>Мы создаем интуитивно понятные
                        и привлекательные приложения для
                        Android, IOS и кроссплатформенные
                        приложения для предприятий
                        и потребителей.</p>
                    </div>
                    <Button className="btn" variant="dark">Подробнее</Button>
                    </div>
                   
            </Col>
            </Row>
        </Container>
            
    )
}

export default Servis;
