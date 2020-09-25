import React from "react"
import imgmarvin from './marvinpistola.png'
import './css.css'
import { Row, Col } from 'reactstrap';


const Header = (props) => {
       return (

        <header>
            <Row>
        <Col><img className="logo" src={imgmarvin} alt=""></img></Col>
        <Col className="title"> Projekt_Kino</Col>
        <Col className="title" xs="auto"> <i className="fab fa-angellist"></i> Coolest movies ever</Col>
        {/* <Col><i className="fa fa-sign-out"></i></Col> */}
        </Row>
     
        </header>

    )
}


export default Header