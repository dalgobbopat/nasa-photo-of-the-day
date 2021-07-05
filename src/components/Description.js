import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card ,  Col,
    Container,
    Row } from 'reactstrap';
import CardInfo from './Cardinfo';
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>What You Are Seeing</Button>
      <Collapse isOpen={isOpen}>
<Container>
    <Row>
        <Col>
        <Card>
          <CardBody>
         Everyday you will be amazed at different pictures our NASA team has gathered from around the Universe. Check back everyday for new images. 
          </CardBody>
        </Card>
        </Col>
        </Row>
    </Container>
      </Collapse>
    </div>
  );
}

export default Example;