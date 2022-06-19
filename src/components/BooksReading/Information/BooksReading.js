import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Information/BooksReading.module.css';
import sprite from '../../../image/svg/symbolDefs.svg';
export default function BooksReading({ loggined }) {
  return (
    <div className={styles.body}>
      <div>
        <h2 className={styles.mainTitle}>Books Reading</h2>

        <h3 className={styles.title}>Допоможе вам</h3>
        <div className={styles.firstSection}>
          <p className={styles.text}>
            <svg className={styles.icon} width="16" height="12">
              <use href={`${sprite}#icon-vector`}></use>
            </svg>
            Швидше сформулювати свою ціль i розпочати читати
          </p>
          <p className={styles.text}>
            <svg className={styles.icon} width={16} height={12}>
              <use href={`${sprite}#icon-vector`} />
            </svg>
            Пропорційно розподілити навантаження на кожний день
          </p>
          <p className={styles.text}>
            <svg className={styles.icon} width="16" height="12">
              <use href={`${sprite}#icon-vector`}></use>
            </svg>
            Відстежувати особистий успіх
          </p>
        </div>

        <h3 className={styles.title}>Також ви зможете</h3>
        <div className={styles.secondSection}>
          <p className={styles.text}>
            <svg className={styles.icon} width="16" height="12">
              <use href={`${sprite}#icon-vector`}></use>
            </svg>
            Формувати особисту думку незалежну від інших
          </p>
          <p className={styles.text}>
            <svg className={styles.icon} width="16" height="12">
              <use href={`${sprite}#icon-vector`}></use>
            </svg>
            Підвищити свої професійні якості опираючись на нові знання
          </p>
          <p className={styles.text}>
            <svg className={styles.icon} width="16" height="12">
              <use href={`${sprite}#icon-vector`}></use>
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
              <button className={styles.login}>
                <Link className={styles.login_link} to="login">
                  Увійти
                </Link>
              </button>
              <button className={styles.registration}>
                <Link className={styles.registration_link} to="registration">
                  Реєстрація
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
