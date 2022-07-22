import { Snackbar, SnackbarContent } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: theme.palette.success.main
  },
  error: {
    backgroundColor: "#f00"// theme.palette.danger.main
  },
  info: {
    backgroundColor: theme.palette.info.main
  },
  warning: {
    backgroundColor: theme.palette.warning.main
  },
  icon: {
    fontSize: 20,
    color: theme.palette.common.white
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'pre-line',
    color: theme.palette.common.white
  }
}));

const Toastr = ({ open, message, variant, onClose, duration }) => {
  const classes = useStyles();
  const Icon = variantIcon[variant];
  const msg = (
    <span id="message-toastr" className={classes.message}>
      <Icon className={classNames(classes.icon, classes.iconVariant)} />
      {message}
    </span>
  );
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
    >
      <SnackbarContent
        className={classNames(classes[variant])}
        aria-describedby="message-toastr"
        message={msg}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={onClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        ]}
      />
    </Snackbar>
  );
};

Toastr.defaultProps = {
  open: false,
  variant: 'info',
  duration: 4000,
  onClose: () => {}
};

Toastr.propTypes = {
  open: PropTypes.bool,
  message: PropTypes.string.isRequired,
  duration: PropTypes.number,
  variant: PropTypes.string,
  onClose: PropTypes.func
};

export default Toastr;
