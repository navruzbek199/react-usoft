import React from 'react'
import { Col, Container, Nav, NavItem, NavLink, Row } from 'react-bootstrap';
import './sidebar.css';
import { Link } from "react-router-dom"
import $ from 'jquery';


class Sidebar extends React.Component{

  componentDidMount(){
    $('.hamburger-menu').on('click', function(){
        $('.hamburger-menu').removeClass('active')
        $('#nav-icon1').removeClass('open')
    });
  }
    

      render () {
        
        return (
          <div>
            <div className="hamburger-menu">
              <Container>
                <Row>
                  <Col md={6}>
                    <div className="burger-title">
                      <p>Мы в соцсетях</p>
                    </div>
                    <Nav className="burger-web">
                      <NavItem>
                        <Link>Facebook</Link>
                      </NavItem>
                      <NavItem>
                        <Link>Instagram</Link>
                      </NavItem>
                      <NavItem>
                        <Link>Twitter</Link>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col md={6}>
                    <div className="burger-title">
                      <p>Меню</p>
                    </div>
                    <Nav className="burger-link">
                      <NavItem>
                        <Link to="/exercise">Услуги</Link>
                      </NavItem>
                      <NavItem>
                        <Link to="/works">Работы</Link>
                      </NavItem>
                      <NavItem>
                        <Link to="/contact">Контакты</Link>
                      </NavItem>
                      <NavItem>
                        <Link to="/blog">Блог</Link>
                     </NavItem> 
                      <NavItem>
                        <Link to="/aboutus">О нас</Link>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col md={12}>
                        <div className="burger-phone">
                            <p>Позвоните нам</p>
                            <a href="#">+998 99 8771547</a>
                        </div>
                    </Col>
                </Row>
              </Container>
            </div>
          </div>
        );
    }
}
export default Sidebar;