import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import HomeCourse from '../HomeCourse/HomeCourse';

import './Home.css'

const Home = () => {
        const [courses, setCourses] = useState([]);
    
        useEffect(() => {
            fetch('./HomeCourses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
        }, []);
    
        return (
            <div className="course">
                <div className="">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.surrey.ac.uk/sites/default/files/styles/banner_image_1500x470/public/2018-01/Electrical%20Engineering_1.jpg?itok=k2F6L7nk"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1> </h1>
                            <p>Give intellectual, moral, and social instruction to (someone), typically at a school or university.
                            "she was educated at a boarding school"</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='https://www.sheffield.ac.uk/sites/default/files/styles/main_home/public/2019-06/19-153R%20DIPP%20%20SHU20830%20v1.0.jpg?h=0a348096&itok=dvuC7J1V'
    
                            alt="Second slide"
                        />
    
                        <Carousel.Caption>
                            <h3>Education Pack</h3>
                            <p>MULTIPURPOSE THEME FOR YOUR BUSINESS</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://www.trine.edu/online/images/headers-2019/online-manufacturing-computer-two.jpg'
                        alt="Third slide"
                    />
    
                    <Carousel.Caption>
                        <h3>Digital Marketing: More than just a trend</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
                </div>
                <div className="">
                    <h1 className='m-3'>Our Courses</h1>

                    <Row  xs={1} md={3} className="g-4 gaps">
                   {
                        courses.map(course => <HomeCourse
                            key={course.id}
                            course={course}                 
                            >
                            </HomeCourse>)
                    }
                    
                </Row> 
                </div>
                   
            </div>
        );
    };

export default Home;