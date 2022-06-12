import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Information/BooksReading.module.css';

export default function BooksReading({ loggined }) {
  return (
    <div className={styles.body}>
      <div>
        <h2 className={styles.mainTitle}>Books Reading</h2>

        <h3 className={styles.title}>Will help you too</h3>
        <div className={styles.firstSection}>
          <p className={styles.text}>
            <svg className={styles.icon} width="16" height="12">
              <use href="./symbol-defs.svg#icon-vector"></use>
            </svg>
            Create your goal faster and proceed to read
          </p>
          <p className={styles.text}>
            <svg className={styles.icon} width="16" height="12">
              <use href="./symbol-defs.svg#icon-vector"></use>
            </svg>
            Divide process proportionally for each day
          </p>
          <p className={styles.text}>
            <svg className={styles.icon} width="16" height="12">
              <use href="./symbol-defs.svg#icon-vector"></use>
            </svg>
            Track your success
          </p>
        </div>

        <h3 className={styles.title}>You may also</h3>
        <div className={styles.secondSection}>
          <p className={styles.text}>
            <svg className={styles.icon} width="16" height="12">
              <use href="./symbol-defs.svg#icon-vector"></use>
            </svg>
            Pose your own independent point of view
          </p>
          <p className={styles.text}>
            <svg className={styles.icon} width="16" height="12">
              <use href="./symbol-defs.svg#icon-vector"></use>
            </svg>
            Improve your professional skills according to new knowledge
          </p>
          <p className={styles.text}>
            <svg className={styles.icon} width="16" height="12">
              <use href="./symbol-defs.svg#icon-vector"></use>
            </svg>
            Become an interesting interlocutor
          </p>
        </div>
        <div className={styles.button}>
          {loggined ? (
            <Link className={styles.link} to="/">
              Contacts
            </Link>
          ) : (
            <>
              <button className={styles.sign}>
                <Link className={styles.link} to="login">
                  Log in
                </Link>
              </button>
              <button className={styles.sign}>
                <Link className={styles.link} to="register">
                  Register
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
