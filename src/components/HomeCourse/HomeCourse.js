import React from 'react';
import { Card, Col} from 'react-bootstrap';
import './HomeCourse.css'

const HomeCourse = (props) => {
    const {name, image, credit, totalCost, weaver, duration} = props.course;

    return (
        <div className=''>
            
            <Col>
                <Card>
                    <Card.Img className="img-size" variant="top" src={image} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    <p>Credit: {credit}</p>
                    <p>Total Cost: {totalCost}</p>
                    <p>Weaver: {weaver}</p>
                    <p>Duration: {duration}</p>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                
        </div>
        
    );
};

export default HomeCourse;