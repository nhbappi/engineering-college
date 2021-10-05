import React from 'react';
import { Card, Col } from 'react-bootstrap';

const TeacherData = (props) => {
        const {name, image, role, Age, Email, position} = props.data;

        return (
            <div className=''>
                
                <Col>
                    <Card>
                        <Card.Img className="img-size" variant="top" src={image} />
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                        <p>Role: {role}</p>
                        <p>Age: {Age}</p>
                        <p>Email: {Email}</p>
                        <p>position: {position}</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    
            </div>
            
        );
    };

export default TeacherData;