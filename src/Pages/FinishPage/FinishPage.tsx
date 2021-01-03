import React from 'react';
import Gate from './Gate.png';
import Sign from './Sign/Sign';
import FireWorks from './Fire-works.webp';

import classes from './FinishPage.module.css';

const finishPage: React.FC = () => {
  return (
    <section className={classes.FinishPage}>
      <img src={Gate} className={classes.Gate} alt="gate" />
      <Sign />
      <img src={FireWorks} className={classes.FireWorks1} alt="fire-works" />
      <img src={FireWorks} className={classes.FireWorks2} alt="fire-works" />
      <img src={FireWorks} className={classes.FireWorks3} alt="fire-works" />
    </section>
  );
};

export default finishPage;
