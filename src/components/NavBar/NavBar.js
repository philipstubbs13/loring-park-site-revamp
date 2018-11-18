// Global import of React.
import React from 'react';
// Import PropTypes for props checking/validating.
import PropTypes from 'prop-types';
// import ui components and styling from material ui library.
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
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
        <MenuItem>
          <IconButton color="inherit">
            <i className="fas fa-home" />
          </IconButton>
          <p>Home</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">
            <i className="fas fa-info-circle" />
          </IconButton>
          <p>About</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">
            <i className="fas fa-calendar-alt" />
          </IconButton>
          <p>Events</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">
            <i className="fas fa-donate" />
          </IconButton>
          <p>Donate</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">
            <i className="far fa-images" />
          </IconButton>
          <p>Gallery</p>
        </MenuItem>
        <MenuItem>
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
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Friends of Loring Park
            </Typography>
            <div className={classes.grow} />
            <Hidden smDown>
              <div className={classes.sectionDesktop}>
                <IconButton color="inherit">
                  <i className="fas fa-home" />
                </IconButton>
                <IconButton color="inherit">
                  <i className="fas fa-info-circle" />
                </IconButton>
                <IconButton color="inherit">
                  <i className="fas fa-calendar-alt" />
                </IconButton>
                <IconButton color="inherit">
                  <i className="fas fa-donate" />
                </IconButton>
                <IconButton color="inherit">
                  <i className="far fa-images" />
                </IconButton>
                <IconButton color="inherit">
                  <i className="fas fa-at" />
                </IconButton>
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
