import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import TeacherData from '../TeacherData/TeacherData';

const Teacher = () => {
    const [teacher, setTeacher] = useState([]);
    
    useEffect(() => {
        fetch('./teacher.JSON')
        .then(res => res.json())
        .then(data => setTeacher(data))
    }, []);

    return (
        <div className="teacher">
            <Row xs={1} md={3} className="g-4">
            
                {
                    teacher.map(data => <TeacherData
                        key={data.id}
                        data={data}                 
                        >
                        </TeacherData>)
                }
                
            </Row>
        </div>
    );
};


export default Teacher;