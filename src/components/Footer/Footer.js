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

const styles = {
  card: {
    minWidth: 275,
    textAlign: 'center',
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

function Footer(props) {
  const { classes } = props;
  return (
    <div className="footer">
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            friends of loring park
          </Typography>
          <Typography component="p">
            celebrating and promoting loring park
          </Typography>
        </CardContent>
        <CardActions>
          <a href="https://www.facebook.com/LoringParkGardens/?fref=ts" target="_blank" rel="noopener noreferrer">
            <Button size="small" color="primary">
              <i className="fab fa-facebook fa-2x" />
            </Button>
          </a>
          <Button size="small" color="primary" component={Link} to="/about">
            <i className="fas fa-info-circle fa-2x" />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
