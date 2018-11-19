// Global import of React.
import React from 'react';
// Import PropTypes for props checking/validating.
import PropTypes from 'prop-types';
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';
// import ui components and styling from material ui library.
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    color: '#fff',
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class NavBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = (event) => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem component={Link} to="/">
          <IconButton color="inherit">
            <i className="fas fa-home" />
          </IconButton>
          <p>Home</p>
        </MenuItem>
        <MenuItem component={Link} to="/about">
          <IconButton color="inherit">
            <i className="fas fa-info-circle" />
          </IconButton>
          <p>About</p>
        </MenuItem>
        <MenuItem component={Link} to="/events">
          <IconButton color="inherit">
            <i className="fas fa-calendar-alt" />
          </IconButton>
          <p>Events</p>
        </MenuItem>
        <MenuItem component={Link} to="/donate">
          <IconButton color="inherit">
            <i className="fas fa-donate" />
          </IconButton>
          <p>Donate</p>
        </MenuItem>
        <MenuItem component={Link} to="/gallery">
          <IconButton color="inherit">
            <i className="far fa-images" />
          </IconButton>
          <p>Gallery</p>
        </MenuItem>
        <MenuItem component={Link} to="/connect">
          <IconButton color="inherit">
            <i className="fas fa-at" />
          </IconButton>
          <p>Connect</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Button component={Link} to="/">
              <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                Friends of Loring Park
              </Typography>
            </Button>
            <div className={classes.grow} />
            <Hidden smDown>
              <div className={classes.sectionDesktop}>
                <Tooltip title="Home" placement="bottom">
                  <IconButton color="inherit" component={Link} to="/">
                    <i className="fas fa-home" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="About" placement="bottom">
                  <IconButton color="inherit" component={Link} to="/about">
                    <i className="fas fa-info-circle" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Events" placement="bottom">
                  <IconButton color="inherit" component={Link} to="/events">
                    <i className="fas fa-calendar-alt" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Donate" placement="bottom">
                  <IconButton color="inherit" component={Link} to="/donate">
                    <i className="fas fa-donate" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Gallery" placement="bottom">
                  <IconButton color="inherit" component={Link} to="/gallery">
                    <i className="far fa-images" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Connect" placement="bottom">
                  <IconButton color="inherit" component={Link} to="/connect">
                    <i className="fas fa-at" />
                  </IconButton>
                </Tooltip>
              </div>
            </Hidden>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <i className="fas fa-bars" />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
