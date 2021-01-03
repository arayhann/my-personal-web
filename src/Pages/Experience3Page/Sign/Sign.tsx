import React from 'react';
import Building from '../../../Assets/Building.png';

import classes from './Sign.module.css';

const sign: React.FC = () => {
  return (
    <div className={classes.Skill}>
      <div className={classes.Sign}>
        <div className={classes.Papan}>
          <p className={classes.Date}>December 2017 - Now</p>
          <p className={classes.Title}>
            MOBILE DEVELOPER AT
            <br />
            BRAGA TECHNOLOGIES
          </p>
          <p className={classes.Description}>
            Responsible in developing mobile apps, using Java / Kotlin or
            Flutter Dart
          </p>
        </div>
        <div className={classes.Tiangs}>
          <div className={classes.Tiang} />
          <div className={classes.Tiang} />
        </div>
      </div>
      <img src={Building} className={classes.Ballon} alt="balloon" />
    </div>
  );
};

export default sign;
