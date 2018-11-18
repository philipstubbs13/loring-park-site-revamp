import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
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
          <Button size="small" color="primary">
            <i className="fab fa-facebook fa-2x" />
          </Button>
          <Button size="small" color="primary">
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
