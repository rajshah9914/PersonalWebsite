import React from 'react';
import {render} from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import "./projects.css";

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function Projects() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="body-achievement">
        <div className="panels-achievement">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>GSOC 2019 Prototype</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
                <p>
                    <ul>
                        <li><b><u>Objective</u></b> : The major concerns like deforestation, shrinking habitat and humans encroaching territory
of elephants which in-turn leads them to attack on mankind. This further leads to human revenges on
faunas and thus they are considered as dangerous pests. To resolve the disputes and initiate a build
towards eco-friendly environment, a web-app was a necessity.</li>
                        <li><b><u>Outcome</u></b> : The React-web-app serves as a route or a gateway to the solution of human-elephant conflict in Sri-Lanka. A user can login to the portal and upload images and classify them as required.
This is connected to <b>’Cloudinary Server’</b> which provides storage for large number of images. With
implementation of history, all details of the classifed image is displayed which is passed to ML trained
model. With pikle developed, an region in any image can be classifed as a safe or hazardous zone for
faunas, thus maintaining a proper decorum. <b>Unit and E2E testings</b> using cypress, and CI/CD practices
were followed along with proper documnetations.</li>
                        <li><b><u>Demo</u></b> can be viewed <a href="https://drive.google.com/file/d/1E5tZTWB4NCVIX668QUX4GAZhEwyYc8mR/view?usp=drivesdk
                        ">here.</a></li>
                    </ul>
                </p>
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Police E-Portal FIR Registration (Course DBMS Project 2019)</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
                <p>
                    <li><b><u>Objective</u></b> :A systematic approach for a needful to trace his/her status of complaint lodged at any
police station thus saving time and travels. Also a check on police officers by superitendent is inorder
to balance the system according to needs.</li>
                </p>
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Object Detection in Robot Slam Map (IHack 2019 IIT Bombay Hackathon)</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
                <p>
                    <li><b><u>Objective</u></b> : Development of visual tool to identify objects in a Robot SLAM map in which white represents empty space and black represents obstacles/filled space.</li>
                    <li><b><u>Outcome</u></b> : Web portal to display as well as download, generated csv file containing details like object
co-ordinates given number of objects and its shape to be identified.</li>
                </p>
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>HealthCare Management System (DotSlash Hackathon 2019, NIT Surat)</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
                <p>
                    <li><b><u>Objective</u></b> : Chat Bots can easily replace the work of Hospital Receptionist by guiding patients about
hospital and its services(including billings,insurance coverage). To sort out problems for shortage of
doctors as well as providing experts with free time for themselves. Prevent Wasting time and money
for small follow-ups.</li>
                    <li><b><u>Outcome</u></b> : A perfectly auto and self training chatbot on Android inter-connected with web portal which
can reduce patients dependence on doctors. The app allows patients with facilities to connect to any
hospital reception and get required assistances. With provided responses by the bot, a user can rate the
features and accordingly the bot gets trained for future perfections. A web-portal is developed which
allows doctors to feed the answers that a user is unsatisfied during free time so as to avoid extraneous
meet-ups.</li>
<li><b><u>Demo</u></b> can be viewed <a href="https://youtu.be/tvBZz7L5EBI">here.</a>
</li>
                </p>
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography>AI-Chatbot for CB Patel Gym, Surat (Melzo Intern Project 2018)</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
                <p>
                    <li><b><u>Objective</u></b> : A voice-enabled conversational chatbot to relax the attendees of gym in absence of a trainee
or to upsolve facile quests.</li>
                    <li><b><u>Outcome</u></b> : A web-portal for the above described objective self-trained using Google’s DialogFlow. Various other trainings were carried out using Amazon Lex,IBM Watson,Facebook’s Wit.AI and Microsoft’s
LUIS. A node-API was set to connect with the tool and socket-io to enable voice applications.</li>
                    <li><b><u>Demo</u></b> can be viewed <a href="https://surprise-7def6.firebaseapp.com/">here.</a></li>
                </p>
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <ExpansionPanelSummary aria-controls="panel6d-content" id="panel6d-header">
            <Typography>Google’s Invisible ReCaptcha Implementation and using three.js libraries. (Secondary Melzo Intern
Project 2018)</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
                <p>
                    <li><b><u>Objective</u></b> : Finding out reasons of implementing ReCaptcha and get insights for bot-attacks on web-
sites. Build a 3-D polygon for any number of vertices provided by the user.</li>
                    <li><b><u>Outcome</u></b> : A direct React-Library was used to implement Google’s Invisible Recaptcha on signup and
login pages with proper usage of keys provided. Secondly, three.js library used for 3-Dimensional
designs was skimmed through and a polygon of any number of vertices is designed based on user’s
entry.</li>
                </p>
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
            <ExpansionPanelSummary aria-controls="panel7d-content" id="panel7d-header">
            <Typography>Web-Scrapper, CSV to JSON Converter (Basic-usage of Node-js)(2019)</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
                <p>
                    <li><b><u>Outcome</u></b> : Scrapping all HTML docs of any http served page without opening developer tools. A new
JavaScript Notation file is created for a provided CSV file using node-js.</li>
                </p>
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel square expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
            <ExpansionPanelSummary aria-controls="panel8d-content" id="panel8d-header">
            <Typography>Weather Prediction (A simple Linear-Regression Project 2018)</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
                <p>
                    <li><b><u>Outcome</u></b> : Provided maximum and miniumum temperatures of a particular place, expected tempera-
tures in further days is calculated and returned by the model. (Accuracy 98%)</li>
                </p>
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel square expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
            <ExpansionPanelSummary aria-controls="panel9d-content" id="panel9d-header">
            <Typography>Automated Self-Driving Car Application (Implementation of YOLO Algorithm 2018)</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
                <p>
                    <li><b><u>Outcome</u></b> : Detection of various other cars,vehicles and in particular traffic on the roads and sustain
using YOLO algorithm which has an application in Self-Driving Cars.</li>
                </p>
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel square expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
            <ExpansionPanelSummary aria-controls="panel10d-content" id="panel10d-header">
            <Typography>Object Detection using Cipher 10 Dataset (Convolutional Neural Network Implementation 2018)</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
                <p>
                    <li><b><u>Outcome</u></b> : Object detection, mainly focused on animals was the main key in the implementation. This
was a starter for Machine Learning project.</li>
                </p>
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        </div>
        <div className="footer">
            <a href="https://www.facebook.com/" id="fafa"><i className="fa fa-facebook-square" ></i></a>
            <a href="https://github.com/rajshah9914" id="fafa"><i className="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/raj-shah-b14115156/" id="fafa"><i className="fa fa-linkedin-square"></i></a>
        </div>
        </div>
  );
}

render(<Projects />, document.getElementById('root'));