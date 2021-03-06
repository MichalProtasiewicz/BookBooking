import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { connect } from 'react-redux';
import { authLogin as authLoginAction } from 'actions';
import { Formik, Form } from 'formik';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import AuthTemplate from 'templates/AuthTemplate';
import Heading from 'components/atoms/Heading/Heading';
import {Input} from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled(Input)`
  margin: 0 0 40px 0;
  width: 350px;
  @media (max-width: 450px) {
    width: 250px;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  margin: 40px 0 40px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.raisinBlack};
  text-transform: uppercase;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 60px;
`;
const StyledParagraph = styled(Paragraph)`
  margin-bottom: 30px;
`;

const LoginPage = ({ authLogin, auth, register }) => {
  const [t] = useTranslation('translation');
  register.succesfull = false;
  return (
    <AuthTemplate>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={({ username, password }) => {
          authLogin(username, password);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => {
          return (
            <>
              <StyledHeading big>{t('auth.titleLogin')}</StyledHeading>
              <StyledForm onSubmit={handleSubmit}>
                <StyledInput
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                >
                  {t('auth.username')}
                </StyledInput>
                <StyledInput
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                >
                  {t('auth.password')}
                </StyledInput>
                {auth.error != null ? (
                  <StyledParagraph danger>{t('errors.incorrectLogin')}</StyledParagraph>
                ) : null}
                <Button type="submit">{t('auth.buttonLogin')}</Button>
              </StyledForm>
              <StyledLink to={routes.register}>{t('auth.registerLink')}</StyledLink>
            </>
          );
        }}
      </Formik>
    </AuthTemplate>
  );
};

LoginPage.propTypes = {
  authLogin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  register: PropTypes.object.isRequired,
};

const mapStateToProps = ({ auth, register }) => ({ auth, register });

const mapDispatchToProps = (dispatch) => ({
  authLogin: (username, password) => dispatch(authLoginAction(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
