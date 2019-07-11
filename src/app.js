import React from 'react';
import {render} from 'react-dom';
import SearchAppBar from "./header";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "./home";
import AboutMe from "./aboutme";
import Achievements from "./achievements";
import Projects from "./projects";

class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route path="/" component={Home}/> 
                    <Route exact path="/about-me" component={AboutMe} />
                    <Route exact path="/achievements" component={Achievements} />
                    <Route exact path="/projects" component={Projects} />
                </div>
            </Router>
        )
    }
}

export default App;
render(<App />, document.getElementById('root'));