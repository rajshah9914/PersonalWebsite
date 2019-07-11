import React from 'react';
import {render} from 'react-dom';
import CodingCard from './codingcard';
import MediaCard from './academics';
import "./aboutme.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class AboutMe extends React.Component{
render()
{
    return(
        <div>
            <Router>
            <div className="about-me-cards">
            <Route exact path='/about-me' render={()=>(
            <div>
            <div className="codingcard">
                <CodingCard />
            </div>
            <div className="academiccard">
                <MediaCard />
            </div>
            <div className="footer">
                <a href="https://www.facebook.com/" id="fafa"><i className="fa fa-facebook-square" ></i></a>
                <a href="https://github.com/rajshah9914" id="fafa"><i className="fa fa-github"></i></a>
                <a href="https://www.linkedin.com/in/raj-shah-b14115156/" id="fafa"><i className="fa fa-linkedin-square"></i></a>
            </div>
            </div>
            )}>
            </Route>
            </div>
            </Router>
        </div>
    );
}
}

export default AboutMe;
render(<AboutMe />,document.getElementById('root'));