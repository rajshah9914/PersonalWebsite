import React from 'react';
import {render} from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import "./achievements.css";

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

export default function Achievements() {
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
            <Typography>Competitive Coding</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
                <p>
                    <ul>
                        <li><b>Summer of Algorithm Mentor</b> at PyJaipur organization.</li>
                        <li>1st among Sophomore Year in <b><a href="https://www.codechef.com/rankings/ACMIND18?order=asc&search=pioneers&sortBy=rank">ACM-ICPC-2018 Qualifiers</a></b>, 5th among the whole college(AIR 694)..</li>
                        <li>1st from 2nd year in <b><a href="https://www.hackerearth.com/challenges/college/epiphany-80/leaderboard/">Epiphany</a></b>, intra-college Competitive Coding, NIT Surat 2k18, overall ranked 18th.. </li>
                        <li>6th in <b><a href="https://www.hackerearth.com/challenges/college/acm-summer-challenge-2018-1/leaderboard/">ACM Summer Challenge 2018</a></b> and <b><a href="https://www.hackerearth.com/challenges/college/acm-summer-challenge-reborn-2019/leaderboard/">ACM Summer Challenge Reborn 2019</a></b>..</li>
                        <li>3 star coder on Codechef and 1600+ rated on Hackerearth..</li>
                        <li>Ranked within 100 mostly on varied platform competitions..</li>
                        <li>Active on <b>Hackerearth, Codeforces, Codechef</b> with userhandle 'rajshah9914'</li>
                    </ul>
                </p>
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Development Archives</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
                <p>
                    <li><b>Hactoberfest</b> goodies like badges and T-shirts to my fame due to various patch fixes..</li>
                    <li>Accomplished the challenge task for <b>GSoc 2019, ScoreLab Organization</b> with best reviews from mentors.</li>
                    <li>Fixed various bugs and added features to Fossasia Organisation Project named <a href="https://susi.ai/">'chat.susi'..</a></li>
                    <li><b>Member of Fossasia Organization</b>..</li>
                    <li>Stood 3rd in <a href="http://acm_web.surge.sh">'DebugIt'</a>, a web-development competition at annual Techfest Sparsh 2k19, NIT Surat.. </li>
                </p>
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Hackathons</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
                <p>
                    <li>Selected for <b>IHACK 2k19, IIT Bombay</b> Hackathon which lasted for 30 hours..</li>
                    <li>Prime participation in 35 hours Hackathon, <b>DotSlash 2k19, NIT Surat</b>.. </li>
                </p>
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>Industry Exposure</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
                <p>
                    <li>Received an <b>on-campus intern 2k18 (2nd year) in Melzo</b>, a Virtual Reality based Startup which focused on 
                    building a chatbot for 'CB Patel Gym, Surat' using Dialogflow and implementing Google's Invisible ReCaptcha along with exposures on three.js libraries..
                    </li>
                </p>
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <p className="quote">Knowledge is Power, Attainments are just Boons to them..</p>
        </div>
        <div className="footer">
            <a href="https://www.facebook.com/" id="fafa"><i className="fa fa-facebook-square" ></i></a>
            <a href="https://github.com/rajshah9914" id="fafa"><i className="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/raj-shah-b14115156/" id="fafa"><i className="fa fa-linkedin-square"></i></a>
        </div>
        </div>
  );
}

render(<Achievements />, document.getElementById('root'));