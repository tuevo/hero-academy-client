import {
  Box, Button,
  Link, TextField,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { apiMessage } from 'constants/api-message.constant';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { showNotification } from 'redux/actions/app.action';
import validate from 'validate.js';

const schema = {
  otpCode: {
    presence: { allowEmpty: false, message: 'is required' }
  },
};

const useStyles = makeStyles(theme => ({
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.signIn,
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  form: {
    padding: '6.25rem',
    flexBasis: '40.625rem',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 2)
    }
  },
  title: {
    marginTop: theme.spacing(3)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  btnSubmit: {
    margin: theme.spacing(4, 0, 2, 0),
    "backgroundColor": "#a4508b",
    "backgroundImage": "linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)"
  },
  input: {
    ...theme.palette.input
  }
}));

const ConfirmAccount = props => {
  const { history } = props;

  const classes = useStyles();
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!formState.isValid) {
      dispatch(showNotification('error', apiMessage.CONFIRM_ACCOUNT_INVALID))
      return;
    }
  };

  const handleClickBtnResend = event => {
    event.preventDefault();
    console.log('click');
  }

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.content}>
      <div className={classes.contentHeader}>
      </div>
      <div className={classes.contentBody}>
        <form
          className={`${classes.form} animate__animated animate__fadeIn`}
          onSubmit={handleSubmit}
        >
          <Typography
            className={classes.title}
            variant="h2"
            gutterBottom
          >
            Vui lòng xác thực tài khoản
          </Typography>
          <TextField
            className={classes.textField}
            error={hasError('otpCode')}
            fullWidth
            label="Mã xác thực OTP"
            name="otpCode"
            onChange={handleChange}
            type="text"
            value={formState.values.otpCode || ''}
            variant="standard"
            InputProps={{
              classes: {
                underline: classes.input
              }
            }}
            autoFocus
          />
          <Button
            className={classes.btnSubmit}
            color="primary"
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            Xác thực tài khoản
          </Button>
          <Box display="flex" alignItems="center">
            <Typography
              color="textSecondary"
              variant="body1"
              style={{ marginRight: 5 }}
            >
              Chưa nhận được mã xác thực OTP?
            </Typography>
            <Link
              component="button"
              variant="h6"
              onClick={handleClickBtnResend}
            >
              Gửi lại
            </Link>
          </Box>
        </form>
      </div>
    </div>
  );
};

ConfirmAccount.propTypes = {
  history: PropTypes.object
};

export default withRouter(ConfirmAccount);