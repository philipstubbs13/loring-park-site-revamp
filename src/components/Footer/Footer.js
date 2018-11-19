// Global import of react
import React from 'react';
// Import PropTypes for prop checking/validation
import PropTypes from 'prop-types';
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';
// import material ui components and styling
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import css
import './Footer.css';
import { flattenProp } from 'recompose';
import { FormHelperText } from '@material-ui/core';

const styles = {
  card: {
    minWidth: 275,
    textAlign: 'center',
    backgroundColor: '#3f51b5',
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
  footerContent: {
    color: '#fff',
  },
  button: {
    color: '#fff',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
  },
};

function Footer(props) {
  const { classes } = props;
  return (
    <div className="footer">
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.footerContent}>
            friends of loring park
          </Typography>
          <Typography component="p" className={classes.footerContent}>
            celebrating and promoting loring park
          </Typography>
        </CardContent>
        <CardActions className={classes.footerLinks}>
          <div>
            <a href="https://www.facebook.com/LoringParkGardens/?fref=ts" target="_blank" rel="noopener noreferrer">
              <Button size="small" color="inherit" className={classes.button}>
                <i className="fab fa-facebook fa-2x" />
              </Button>
            </a>
          </div>
          <div>
            <Button size="small" color="inherit" component={Link} to="/about" className={classes.button}>
              <i className="fas fa-info-circle fa-2x" />
            </Button>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
