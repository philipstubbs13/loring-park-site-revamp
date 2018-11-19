import React, { Component } from 'react';
// Import material ui components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// import image
import parkBench from '../../images/park_bench.jpg';

const styles = () => ({
  pageTitle: {
    textAlign: 'center',
  },
  aboutFriends: {
    marginTop: 20,
  },
  boardMembers: {
    marginTop: 20,
  },
  aboutParkP2: {
    marginTop: 10,
  },
  aboutFriendsP2: {
    marginTop: 10,
  },
  aboutLeft: {
    textAlign: 'center',
  },
  aboutImage: {
    borderWidth: 2,
    borderStyle: 'solid',
  }
});

class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="page-container">
        <Grid container direction="row" justify="center" spacing={24} className="about-container">
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.pageTitle}>About</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} className={classes.aboutLeft}>
            <img src={parkBench} alt="park bench" className={classes.aboutImage} />
          </Grid>
          <Grid item xs={12} sm={12} md={8} className="about-right">
            <div className={classes.aboutPark}>
              <Typography variant="h4">About the park</Typography>
              <Typography variant="subtitle1" className={classes.aboutParkP1}>
                Designed by Horace Cleveland, Loring contains a small lake, trails,
                volunteer gardens, a dog park, playgrounds, courts, a wading pool,
                a fountain, and a community center.
              </Typography>
              <Typography variant="subtitle1" className={classes.aboutParkP2}>
                The park is also the site of numerous cultural and social events:
                Twin Cities Pride Festival, Loring Park Art Festival, Acoustic Music Festival,
                Walker Art Center’s Summer Movie and Music Series, Aquatennial Pre-parade
                Family Fun Night and many neighborhood gatherings.
              </Typography>
            </div>
            <div className={classes.aboutFriends}>
              <Typography variant="h4">About friends of loring park</Typography>
              <Typography variant="subtitle1" className={classes.aboutFriendsP1}>
                The Friends of Loring Park is a volunteer organization that
                promotes the preservation and improvement of Loring Park and
                the surrounding community.
              </Typography>
              <Typography variant="subtitle1" className={classes.aboutFriendsP2}>
                In collaboration with the Minneapolis Park and Recreation Board
                the “friends” provide the public with a park that is both
                environmentally and socially sound.
              </Typography>
              <div className={classes.boardMembers}>
                <Typography variant="p">
                  2018 Friends of Loring Park Board Members
                </Typography>
                <ul>
                  <li>David Hile, President</li>
                  <li>Todd Miller, Vice President</li>
                  <li>Richard Anderson, Treasurer</li>
                  <li>Ede Holmen, Secretary</li>
                  <li>Pat Davies</li>
                  <li>Lee Frelich,Immediate Past President</li>
                  <li>Marcia Stout</li>
                  <li>Bill Tresch</li>
                  <li>Kia Thompson</li>
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(About);
