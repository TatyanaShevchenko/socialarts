import React from "react";
import style from "./Footer.module.css";


const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__inner}>
          <p>© Tatyana Shevchenko, 2020</p>
          <div className={style.footer__icon}>
            <a className={style.footer__icon_link} href="/profile"></a>
            </div>
          <div className={style.footer__title}>
            <a href="/profile">
              Social<span>Arts</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
