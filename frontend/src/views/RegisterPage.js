import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import { connect } from 'react-redux';
import { authSignup as authSignupAction } from 'actions';
import { Formik, Form, ErrorMessage } from 'formik';
import AuthTemplate from 'templates/AuthTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.raisinBlack};
  text-transform: uppercase;
  margin: 40px 0 40px;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 30px;
`;

const RegisterPage = ({ authSignup }) => (
  <AuthTemplate>
    <Formik
      initialValues={{ username: '', email: '', password1: '', password2: '' }}
      onSubmit={({ username, email, password1, password2 }) => {
        authSignup(username, email, password1, password2);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
        return (
          <>
            <StyledHeading>Register</StyledHeading>
            <StyledForm>
              <StyledInput
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <StyledInput
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <StyledInput
                type="password"
                name="password1"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <StyledInput
                type="password"
                name="password2"
                placeholder="Repeat password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <Button type="submit">register</Button>
            </StyledForm>
            <StyledLink to={routes.login}>I want to log in!</StyledLink>
          </>
        );
      }}
    </Formik>
  </AuthTemplate>
);

RegisterPage.propTypes = {
  authSignup: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  authSignup: (username, email, password1, password2) =>
    dispatch(authSignupAction(username, email, password1, password2)),
});

export default connect(null, mapDispatchToProps)(RegisterPage);
