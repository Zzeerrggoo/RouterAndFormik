import React from 'react';
import CreateAccountForm from '../../components/forms/CreateAccountForm';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../common';
import styles from '../pages.module.scss';
import classNames from 'classnames';

const { LOGIN } = routeConstants;

function Registration() {
  const headClass = classNames(styles.header, styles.createHeader);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h1 className={headClass}>create an account</h1>
        <h3 className={styles.subInfo}>
          We always keep your name and email address private.
        </h3>
      </div>

      <CreateAccountForm />

      <Link to={LOGIN.path}>{LOGIN.name}</Link>
    </div>
  );
}

export default Registration;
