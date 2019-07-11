import React from 'react';
import {render} from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import academics from '../images/academics.jpg';

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
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
    <Card className={classes.card} id="academic-card-id">
      <CardActionArea>
        <img src={academics} alt={"logo"} height="155" width="405"/> 
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Academics
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              Being a Scholastic since day first and trying to achieve the utmost excellence.
              I am in zeal to update myself with running time. Aim to be one of the intellects in near future.
              Its high time now to do the same.
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
        <DialogTitle id="scroll-dialog-title">My Academic Performances</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText>
            <table colspan='2'>
              <tr>
              <th>Education</th>
              <th>Grades</th>
              </tr>
              <tr>
              <td>Undergraduate Studies(B.TECH 2nd Yr. CSE)    </td>
              <td>9.59 CGPA</td>
              </tr>
              <tr>
              <td>Higher Secondary Examination (MSHSE Board)   </td>
              <td>92%</td>
              </tr>
              <tr>
              <td>Secondary Examination (ICSE Board)    </td>
              <td>96.2%</td>
              </tr>
            </table>
            <hr></hr>
            <p>Recepient of <b>Swami Dayanand Education Scholarship</b>, NIT Surat(2018-2019)</p>
            <p><b>Departmental Rank :</b> 4 (out of 113 students)</p>
            <p><b>State Level Rank :</b> 4 (UCMAS, qualified for National Level)</p>
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


// render(<MediaCard />,document.getElementById('root'));