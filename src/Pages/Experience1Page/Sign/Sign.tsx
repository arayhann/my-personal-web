import React from 'react';
import BallonAir from '../../../Assets/Ballon-air.png';
import { Slide } from 'react-awesome-reveal';

import classes from './Sign.module.css';

const sign: React.FC = () => {
  return (
    <div className={classes.Skill}>
      <div className={classes.Sign}>
        <div className={classes.Papan}>
          <p className={classes.Date}>August 2017 - Jan 2019</p>
          <p className={classes.Title}>
            ELECTRONICS AND INTELLIGENCE ROBOTIC RESEARCH GROUP
          </p>
          <p className={classes.Description}>
            Create cool robots such as Wall Following Robot, Fire Fighting
            Robot, Soccer Robot, and Agriculture Robot.
          </p>
        </div>
        <div className={classes.Tiangs}>
          <div className={classes.Tiang} />
          <div className={classes.Tiang} />
        </div>
      </div>
      <Slide direction="down" triggerOnce={true} style={{ zIndex: 5 }}>
        <img src={BallonAir} className={classes.Ballon} alt="balloon" />
      </Slide>
    </div>
  );
};

export default sign;
