import React from 'react';
import Gate from './Gate-level3.png';
import TrafficLight from './Traffic-light.png';
import Car from './Car.png';
import TxtExperience from './Txt-experience.png';

import classes from './Level3Page.module.css';

const level3Page: React.FC = () => {
  return (
    <section className={classes.AboutPage}>
      <img
        src={TxtExperience}
        className={classes.TxtExperience}
        alt="txt-experience"
      />
      <img src={Gate} className={classes.Gate} alt="gate" />
      <img
        src={TrafficLight}
        className={classes.TrafficLight}
        alt="traffic-light"
      />
      <img src={Car} className={classes.Car} alt="car" />
    </section>
  );
};

export default level3Page;
