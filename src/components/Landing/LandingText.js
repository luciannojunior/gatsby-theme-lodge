import React from "react";
import { useSpring, animated } from "react-spring";
import styles from "./Landing.module.css";

const getTo = (obj, wait) => async next => {
  await new Promise(resolve => setTimeout(resolve, wait));
  await next(obj);
};

const LandingText = () => {
  const loja = useSpring({
    to: getTo({ opacity: 1 }, 600),
    from: { opacity: 0 }
  });

  const acacia = useSpring({
    to: getTo({ opacity: 1 }, 1100),
    from: { opacity: 0 }
  });

  const situada = useSpring({
    to: getTo({ opacity: 1 }, 1500),
    from: { opacity: 0 }
  });

  const reunioes = useSpring({
    to: getTo({ opacity: 1 }, 2000),
    from: { opacity: 0 }
  });

  return (
    <div className="flex flex-column justify-end h-100">
      <animated.div style={loja} className={styles.loja}>
        <span className={styles.montserrat}>Loja Maçônica</span>
      </animated.div>
      <animated.div style={acacia} className={styles.acacia}>
        <span className={styles.montserrat}>Acácia da Borborema nº 41</span>
      </animated.div>
      <animated.span style={situada} className={styles.situada}>
        <span className={styles.montserrat}>
          Situada na Rua Siqueira Campos, Campina Grande - PB
        </span>
      </animated.span>
      <animated.span style={reunioes} className={styles.reunioes}>
        <span className={styles.montserrat}>
          Reuniões nas <b>quartas-feira às 19:00hrs</b>
        </span>
      </animated.span>
    </div>
  );
};

export default LandingText;
