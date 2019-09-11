import React from "react";
import classnames from "classnames";
import styles from "./Location.module.css";

const Location = () => {
  return (
    <div className={styles.mainDiv}>
      <h2 className={classnames(styles.title, "tc f2 pa4")}>Localização</h2>
      <a
        href="https://goo.gl/maps/QdaPBrDC7ZqodP7RA"
        className={classnames(styles.address, "white")}
      >
        Rua Siqueira Campos, 1514 - 1° andar, Conceição - Campina Grande - PB
      </a>
      <div className={styles.iframecontainer}>
        <iframe
          title="Google Maps  - Rua Siqueira Campos, 1514 - 1° andar, Conceição - Campina Grande - PB"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.25774446494!2d-35.89001068547917!3d-7.211410672802744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1fb389ae915b%3A0xb109599ee1a78e6d!2sR.%20Siqueira%20Campos%2C%201514%20-%201%C2%B0%20andar%20-%20Concei%C3%A7%C3%A3o%2C%20Campina%20Grande%20-%20PB%2C%2058401-260!5e0!3m2!1spt-BR!2sbr!4v1567542360687!5m2!1spt-BR!2sbr"
          className={styles.iframe}
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
        />
      </div>
    </div>
  );
};

export default Location;
