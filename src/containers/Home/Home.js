import React, { Component } from 'react';
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';
// import material ui components and styling
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// import css
import './Home.css';

const styles = () => ({
  pageTitle: {
    textAlign: 'center',
  },
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="page-container">
        <Grid container direction="row" justify="center" spacing={24} className="home-container">
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.pageTitle}>
              friends of loring park
            </Typography>
            <Typography variant="h6" className={classes.pageTitle}>
              Beauty in the heart of the city
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} component={Link} to="/about">
            <i className="fas fa-info-circle fa-6x" />
            <Typography variant="h4">
              About
            </Typography>
            <Typography variant="subtitle1">
              Learn more about friends of Loring Park
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} component={Link} to="/events">
            <i className="fas fa-calendar-alt fa-6x" />
            <Typography variant="h4">
              Events
            </Typography>
            <Typography variant="subtitle1">
              Find upcoming events at Loring Park
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} component={Link} to="/gallery">
            <i className="far fa-images fa-6x" />
            <Typography variant="h4">
              Gallery
            </Typography>
            <Typography variant="subtitle1">
              Explore our gallery of year round photos representing the best in Minnesota beauty
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} component={Link} to="/donate">
            <i className="fas fa-donate fa-6x" />
            <Typography variant="h4">
              Donate
            </Typography>
            <Typography variant="subtitle1">
              Find out about the different ways to donate to and support Loring Park
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <i className="fas fa-newspaper fa-6x" />
            <Typography variant="h4">
              Subscribe
            </Typography>
            <Typography variant="subtitle1">
              Join our newsletter for the latest announcements
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} component={Link} to="/connect">
            <i className="fas fa-at fa-6x" />
            <Typography variant="h4">
              Connect
            </Typography>
            <Typography variant="subtitle1">
              Got questions? Email us and we&#39;ll be in touch
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
