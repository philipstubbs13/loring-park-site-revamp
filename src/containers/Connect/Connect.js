import React, { Component } from 'react';
// import material ui components and styling
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// Import google map react component
import GoogleMapReact from 'google-map-react';

const styles = () => ({
  pageTitle: {
    textAlign: 'center',
  },
  connectInfo: {
    marginTop: 40,
  },
  googleMap: {
    marginTop: 40,
  },
});

const AnyReactComponent = () => (
  <div>
    <i className="fas fa-map-marker-alt fa-5x" />
  </div>
);

class Connect extends Component {
  state = {
    markerNumber: '',
    showInfo: '',
  };

  static defaultProps = {
    center: {
      lat: 44.9693,
      lng: -93.2829,
    },
    zoom: 15,
  };

  render() {
    const { classes, center, zoom } = this.props;

    return (
      <div className="page-container">
        <Grid container direction="row" justify="center" spacing={24} className="connect-container">
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.pageTitle}>
              Connect with us
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div style={{ height: '70vh', width: '100%' }} className={classes.googleMap}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBlNQbJHExNycQQQRotKkzcGD31jK6DduI' }}
                defaultCenter={center}
                defaultZoom={zoom}
                onChildClick={this.onChildClick}
              >
                <AnyReactComponent
                  key="1"
                  lat={44.9693}
                  lng={-93.2829}
                  text="Loring Park"
                />
              </GoogleMapReact>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Grid container direction="row" className={classes.connectInfo}>
              <Grid item xs={12} sm={12} md={6}>
                <Typography variant="h6">Park address</Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Typography variant="subtitle1">
                  Loring Park
                </Typography>
                <Typography variant="subtitle1">
                  1382 Willow Street
                </Typography>
                <Typography variant="subtitle1">
                  Minneapolis, MN 55403
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" className={classes.connectInfo}>
              <Grid item xs={12} sm={12} md={6}>
                <Typography variant="h6">Mailing address</Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Typography variant="subtitle1">
                  Friends of Loring Park
                </Typography>
                <Typography variant="subtitle1">
                  P.O. Box 52074, Minneapolis, MN. 55402
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" className={classes.connectInfo}>
              <Grid item xs={12} sm={12} md={6}>
                <Typography variant="h6">Loring Friends hotline</Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Typography variant="subtitle1">
                  612.673.5395
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" className={classes.connectInfo}>
              <Grid item xs={12} sm={12} md={6}>
                <Typography variant="h6">Email</Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Typography variant="subtitle1">
                  <Button variant="outlined">
                    <a href="mailto:davidthile@juno.com; rwhite@visi.com">Email us</a>
                  </Button>
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" className={classes.connectInfo}>
              <Grid item xs={12} sm={12} md={6}>
                <Typography variant="h6">Facebook</Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Typography variant="subtitle1">
                  <Button variant="outlined">
                    <a href="https://www.facebook.com/LoringParkGardens/?fref=ts" target="_blank" rel="noopener noreferrer">Follow us</a>
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Connect);
