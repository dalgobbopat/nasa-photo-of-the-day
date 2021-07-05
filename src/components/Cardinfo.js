import React, { useState, useEffect } from "react";
import {
    Card,
    Button,
    CardHeader,
    CardFooter,
    CardBody,
    CardTitle,
    CardText,
    Col,
    Container,
    Row
  } from "reactstrap";


const CardInfo = ({title,date,explanation,copyright}) =>{
    return (
    <Container>
     <Row>
    <Col>
        <Card>
            <CardHeader>{title}</CardHeader>
            <CardText>{explanation}</CardText>
            <CardText>{date}</CardText>
            <CardFooter>©️:{copyright}</CardFooter>
        </Card>
     </Col>
    </Row>
     </Container>
    );
};
export default CardInfo;

