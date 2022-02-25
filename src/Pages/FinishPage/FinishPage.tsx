import React from 'react';
import Gate from './Gate.png';
import Sign from './Sign/Sign';
import FireWorks from './Fire-works.webp';
import { Slide } from 'react-awesome-reveal';

import classes from './FinishPage.module.css';

const finishPage: React.FC = () => {
  return (
    <section className={classes.FinishPage}>
      <img src={Gate} className={classes.Gate} alt="gate" />
      <Slide
        direction="up"
        triggerOnce={true}
        style={{ height: '100vh', width: '100vw', position: 'absolute' }}
      >
        <img src={FireWorks} className={classes.FireWorks1} alt="fire-works" />
      </Slide>
      <Slide
        direction="up"
        triggerOnce={true}
        duration={2000}
        style={{ height: '100vh', width: '100vw', position: 'absolute' }}
      >
        <img src={FireWorks} className={classes.FireWorks2} alt="fire-works" />
      </Slide>
      <Slide
        direction="up"
        triggerOnce={true}
        duration={1500}
        style={{ height: '100vh', width: '100vw', position: 'absolute' }}
      >
        <img src={FireWorks} className={classes.FireWorks3} alt="fire-works" />
      </Slide>
      <Sign />
    </section>
  );
};

export default finishPage;
