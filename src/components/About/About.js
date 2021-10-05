import React from 'react';
import { Image } from 'react-bootstrap';

const About = () => {
    return (
        <div>
           <div> 
               <Image src="https://engineering.unl.edu/images/full-page-images/DSC08160_0.jpg" fluid />
            </div>
            <div className="container">
                <h2 className="m-4">California Institute of Technology Engineering School Overview</h2>
                <p className="fw-normal">The Division of Engineering and Applied Science at California Institute of Technology has an application deadline of Dec. 1. The application fee is $100 for U.S. residents and $100 for international students. The 2020 Ph.D. student-faculty ratio is 5:1. The Division of Engineering and Applied Science at California Institute of Technology has 104 full-time faculty on staff.

The traditional science powerhouse of CalTech has a Division of Engineering and Applied Science for graduate students, as well as a separate chemical engineering program. Students can earn a master of science in a year, or a special engineer’s degree in aeronautical, civil, electrical, or mechanical engineering in two years. There are Ph.D. programs, as well as part-time study programs. Students interested in becoming medical scientists can enroll in a joint M.D./Ph.D. program offered with either UCLA’s Geffen School of Medicine or USC’s Keck School of Medicine.

Students can get involved in on-campus research centers, like the Center for the Science and Engineering of Materials and the Center for Neuromorphic Systems Engineering. Individual centers often host luncheons, speakers, and events. For support outside the classroom, students can join organizations like the CalTech Women’s Club, a group of mostly women that hosts events throughout the year such as the Fall Family Potluck.

The residential campus in Pasadena, Calif. is about 10 miles away from Los Angeles, and students can live in university-owned housing. After graduation, CalTech alumni are invited to come back to campus each year for Seminar Day and Alumni College, two events that examine new breakthroughs in research and allow alumni to mingle.</p>
            </div>
            
        </div>
    );
};

export default About;