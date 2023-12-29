import { useState } from "react";
import { Button } from "../Button";

import { config } from "../../../config";
import { classNames } from "../../utils";

import "./hero.scss";

export const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { title, subTitle, navigation, heroCTA } = config;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  setTimeout(() => {
    setMounted(true);
  }, 700);

  return (
    <section className="hero">
      <div className="container">
        <div className="logo">
          <img
            src="../../assets/img/logo.svg"
            alt="logo"
            width="75"
            height="30"
          />
        </div>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <strong>{subTitle}</strong>

        <div
          className={classNames([
            "hamburger",
            menuOpen && "close",
            !mounted && "animate-in",
          ])}
        >
          <span className="slice"></span>
          <span className="slice"></span>
          <span className="slice"></span>
          <span className="slice"></span>
        </div>
        <ul className="menu">
          {navigation.map((link, index) => (
            <li className="menu-item" key={index}>
              {link}
            </li>
          ))}
        </ul>
        <Button onClick={() => {}}>{heroCTA}</Button>
      </div>
    </section>
  );
};
