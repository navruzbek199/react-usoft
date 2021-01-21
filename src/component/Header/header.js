import React  from 'react'
import { Container, Row , Nav, Col } from 'react-bootstrap';
import './header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from '../Sidebar/sidebar';
import $ from 'jquery';
import { Link } from 'react-router-dom';


class Header extends React.Component{ 


    componentDidMount() {
        $('#nav-icon1').click(function(){
            $(this).toggleClass('open');
            $('.hamburger-menu').toggleClass("active");
        });
        $('.hamburger-menu li').on('click', function(){
            $('.hamburger-menu').removeClass('active')
            $('#nav-icon1').removeClass('open')
          });
    }
    
      
      render () {
    return (
        <div className="header-blog">
            
        <Container fluid="sm" className="container">
        
                <Row className="justify-content-md-between row ml-0">  
                    <Col md={12} className="col">
                        <Link to="/">
                        <div className="brand">
                            <img src="./Logo Usoft.png"></img>
                        </div>
                        </Link>
                        <Nav className="navbar">                    
                        <Nav.Item className="nav-item">
                            <Nav.Link className="nav-link" href="/contact">Оставить заявку</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item">
                            <Nav.Link className="nav-link" href="/">меню</Nav.Link>
                        </Nav.Item>
                        <div id="nav-icon1">
							<span></span>
							<span></span>
							<span></span>
						  </div>
                          <Sidebar/>
                        </Nav>
                    </Col> 
                </Row>
        </Container>
        </div>
    )
}
}

export default Header;
