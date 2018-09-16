import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

const Header = ({ classes, children, title }) => (
  <div className={classes.root}>
    <Toolbar>
      <Typography variant="title" color="inherit" className={classes.grow}>
        {title}
      </Typography>
    </Toolbar>
    <div>{children}</div>
  </div>
);

Header.propTypes = {
  classes: propTypes.object.isRequired,
  children: propTypes.node
};

export default withStyles(styles)(Header);
