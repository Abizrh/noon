import React from 'react'

import styles from './Spinner.module.css';

export const Spinner = ({ type, className }) => {
  return (
    <div className={styles.Container}>
      <span className={[styles.Spinner, styles[type], className].join(' ')} />
    </div>
  );
};