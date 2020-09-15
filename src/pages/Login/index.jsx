import React from 'react';
import LoginForm from '../../components/forms/LoginForm';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../common';
import styles from '../pages.module.scss';

const { REGISTER } = routeConstants;

function Login() {
  return (
    <>
      <div className={styles.infoContainer}>
        <h1 className={styles.header}>login to your account</h1>
      </div>

      <LoginForm />

      <Link to={REGISTER.path}>{REGISTER.name}</Link>
    </>
  );
}

export default Login;
