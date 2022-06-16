import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Information/BooksReading.module.css';
import { PrimaryButton } from '../../Buttons/PrimaryButton.styled';

export default function BooksReading({ loggined }) {
  return (
    <div className={styles.body}>
      <div>
        <h2 className={styles.mainTitle}>Books Reading</h2>

        <h3 className={styles.title}>Допоможе вам</h3>
        <div className={styles.firstSection}>
          <p className={styles.text}>
            <svg className={styles.icon} width="16" height="12">
              <use href="./symbol-defs.svg#icon-vector"></use>
            </svg>
            Швидше сформулювати свою ціль i розпочати читати
          </p>
          <p className={styles.text}>
            <svg className={styles.icon} width="16" height="12">
              <use href="./symbol-defs.svg#icon-vector"></use>
            </svg>
            Пропорційно розподілити навантаження на кожний день
          </p>
          <p className={styles.text}>
            <svg className={styles.icon} width="16" height="12">
              <use href="./symbol-defs.svg#icon-vector"></use>
            </svg>
            Відстежувати особистий успіх
          </p>
        </div>

        <h3 className={styles.title}>Також ви зможете</h3>
        <div className={styles.secondSection}>
          <p className={styles.text}>
            <svg className={styles.icon} width="16" height="12">
              <use href="./symbol-defs.svg#icon-vector"></use>
            </svg>
            Формувати особисту думку незалежну від інших
          </p>
          <p className={styles.text}>
            <svg className={styles.icon} width="16" height="12">
              <use href="./symbol-defs.svg#icon-vector"></use>
            </svg>
            Підвищити свої професійні якості опираючись на нові знання
          </p>
          <p className={styles.text}>
            <svg className={styles.icon} width="16" height="12">
              <use href="./symbol-defs.svg#icon-vector"></use>
            </svg>
            Стати цікавим співрозмовником
          </p>
        </div>
        <div className={styles.button}>
          {loggined ? (
            <Link className={styles.link} to="/">
              Contacts
            </Link>
          ) : (
            <>
              <PrimaryButton>
                <Link className={styles.link} to="login">
                  Log in
                </Link>
              </PrimaryButton>
              <PrimaryButton>
                <Link className={styles.link} to="register">
                  Register
                </Link>
              </PrimaryButton>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
