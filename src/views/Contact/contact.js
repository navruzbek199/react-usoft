import React,{ useState }  from 'react'
import { Container, Row , Col, Button, Form, Modal } from 'react-bootstrap';
import './contact.css';
// import $ from 'jquery';



function Contact() {
    const [show, setShow] = useState(false);

    // $(document).ready(function(){
    //     $('.btn-check').click(function(){
    //         if(clicked){
    //             $(this).css('background-color', 'black');
    //             clicked  = false;
    //         } else {
    //             $(this).css('background-color', 'white');
    //             clicked  = true;
    //         }   
    //     });
    // });


    
    return (
        <div>
      <Container>
        <Row>
          <Col md={5}>
            <div className="contact-title">
              <p>
                Всегда на связи! <br></br> Пишите нам
              </p>
            </div>
          </Col>
          <Col md={1}></Col>
          <Col md={6}>
            <div className="contact-img">
              <img src="./Image9.png" alt="img"/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="checkbox-title">
              <p>Что вас интересует?</p>
            </div>
          </Col>
          <Col md={12}>
            <div className="checkbox-types">
              <Button className="btn-check" variant="dark">
                Веб-сайт
              </Button>
              <Button className="btn-check" variant="dark">
                Системы автоматизации
              </Button>
              <Button className="btn-check" variant="dark">
                Android разработка
              </Button>
              <Button className="btn-check" variant="dark">
                SEO оптимизация
              </Button>
              <Button className="btn-check" variant="dark">
                IOS разработка
              </Button>
              <Button className="btn-check" variant="dark">
                Сопровождение сайта
              </Button>
              <Button className="btn-check" variant="dark">
                Платформы онлайн-обучения
              </Button>
              <Button className="btn-check" variant="dark">
                Сайд под ключ
              </Button>
              <Button className="btn-check" variant="dark">
                Приложения под ключ
              </Button>
            </div>
          </Col>
          <Col md={12}>
            <Form.Group controlId="formBasicName">
              <Form.Control
                className="inputclass"
                type="text"
                placeholder="Ваше имя"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPhone">
              <Form.Control
                className="inputclass"
                type="number"
                placeholder="Телефон"
              />
            </Form.Group>
            <Button variant="dark" className="btn-send"  onClick={() => setShow(true)}>
            Отправить заявку
            </Button>

            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img src="./icon.png" alt="img"/>
                <h4>
                Ваша заявка отправлена!
                </h4>
                <p>Наши операторы скоро свяжуться с вами</p>
              </Modal.Body>
              <Modal.Footer>
                  <Button id="example-custom-modal-styling-title" className="btn-ok" variant="dark">Ok</Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
        <div className="contact-map">
        <Iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d23982.019533108607!2d69.248468!3d41.292492!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1610032437549!5m2!1sen!2sus" tabindex="0" allowfullscreen="" frameborder="0" aria-hidden="false"/>
        </div>
      </div>
    );
}

export default Contact;
