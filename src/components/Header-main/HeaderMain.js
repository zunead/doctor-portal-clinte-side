import React from 'react';
import './HeaderMain.css';
import chair from '../../images/chair.png';
import {Link} from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
const HeaderMain = () => {
    return (
        <main>
            <Container >
                <Row className="align-items-center header-row" >
                    <Col lg={5} md={5} sm={12} xl={5} xs={12} xxl={5}>
                        <div className="header-content">
                            <h1>Your smile <br/> Starts Here </h1>
                            <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the</p>
                            <Link className="btn btn-appointment">GET APPOINTMENT</Link>
                        </div>
                    </Col>
                    <Col lg={7} md={7} sm={12} xl={7} xs={12} xxl={7}>
                        <div className="header-img">
                            <img className="img-fluid" src={chair} alt="chair banner" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default HeaderMain;
