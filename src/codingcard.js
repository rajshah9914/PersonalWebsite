import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import codingcult from '../images/codingcult.png';

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 140,
  },
});

export default function CodingCard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  function handleClose() {
    setOpen(false);
  }

  return (
    <Card className={classes.card} id="coding-card-id">
      <CardActionArea>
        <img src={codingcult} alt={"logo"} height="150" width="400"/> 
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Coding Cult
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Programming at my best since last 6 years with an aim to innovate special in this developing era.
            Presently, enhancing my knowledge with recent as well as future industrial trends that may be a requirement. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" onClick={handleClickOpen('body')}>
        Know More
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
      >
        <DialogTitle id="scroll-dialog-title">Skills</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText>
            <ul>
              <p><u><b>Software Experiences:-</b></u></p>
              <li><p><b>Programming Languages</b> such as C, C++, Python3, Java are well versed..</p></li>
              <li><p><b>Scripting Languages</b> like HTML, CSS, Javascript, Python are close to my heart.. My brain typewrites them when needed.. </p></li>
              <li><p>Sound with <b>Web-Framework</b> like React-Js and <b>Backend journey</b> begins with Node-Js..</p></li>
              <li><p>Mongo-Db and My-Sql are <b>databases of concern</b> with EJS as template engine..</p></li>
              <li><p><b>Cloud Computing</b> is my current area of study..</p></li>
              <li><p><b>Firebase and Heroku</b> are free-hosting platforms that have experienced with..</p></li>
              <li><p>Next Gennady from India</p></li>
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Back
          </Button>
        </DialogActions>
      </Dialog>
      </CardActions>
    </Card>
  );
}
