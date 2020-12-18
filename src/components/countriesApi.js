
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 345,
    border: '6px solid #E1ECF3',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    borderRadius: '20px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    backgroundImage: "url(https://i.imgur.com/yWvaZf2.png)",
    backgroundPosition: 'top'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CountriesAPI() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div className="grid">
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <Card className={classes.root}>
              <CardHeader

                title="Countries API"
                subheader="11-2020"
              />
              <CardMedia
                className={classes.media}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                The countries database contains a lib folder, where you can find the data, connections, schemas and routes.Find all the countries around the world.
        </Typography>
              </CardContent>
              <CardActions disableSpacing>
              <a href="https://github.com/LinaMierke/api_project" target="_blank">
                <IconButton aria-label="add to favorites">
                  <GitHubIcon />
                </IconButton>
                </a>
                <a href=" https://linacountries.herokuapp.com/" target="_blank">
                <IconButton aria-label="share">
                  <LanguageIcon />
                </IconButton>
                </a>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  {/* <Typography paragraph>Made with :</Typography> */}

                  <Typography style={{ color:"#DC7959"}}>
                    CSS, REACT , JS
          </Typography>
                </CardContent>
              </Collapse>
            </Card>


          </Grid>
        </Grid>

      </div>
    </div>


  );
}


