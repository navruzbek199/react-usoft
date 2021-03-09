import React, { useState} from 'react'
import { Col, Container, Row, NavLink, Button,  Form } from 'react-bootstrap';
import './footer.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'

function Footer() {
  const [value, setValue] = useState()
 
    return (
      <div className="footer">
        <Container>
          <Row>
            <Col md={12}>
              <div className="footer-title">
                <h2>Сделаем проект?</h2>
                <p>Оставьте ваш номер и мы вам позвоним!</p>
              </div>
              <div className="foter-link">
                <Form className="form">
                    <PhoneInput
                      countrySelectProps={{ unicodeFlags: true }}
                      className="phone-number"
                      placeholder="Enter phone number"
                      international
                      withCountryCallingCode
                      defaultCountry="UZ"
                      country="UZ"
                      value={value}
                      onChange={setValue}
                      maxlength={17}
                      error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}
                      />
                    <div className="footer-btn">
                      <Button className="btn" variant="light">
                        Заказать звонок
                      </Button>
                    </div>
                </Form>
                
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="footer-number">
                <Link>+998 99 877 15 47</Link>
              </div>
              <div className="footer-adres">
                <p>
                  г. Ташкент, ул. Мукумий, дом 34 <br></br>
                  Ориентир: Спорт товар, оптовый рынок
                </p>
              </div>
              <div className="footer-brand">
                <p>Umbrella Soft © 2009-2020</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-web d-block">
                <NavLink>Facebook</NavLink>
                <NavLink>info@usoft.uz</NavLink>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-web d-block">
                <NavLink>Instagram</NavLink>
                <NavLink>Twitter</NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Footer
