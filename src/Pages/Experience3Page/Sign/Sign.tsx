import React from 'react';
import Building from '../../../Assets/Building2.png';

import classes from './Sign.module.css';

const sign: React.FC = () => {
  return (
    <div className={classes.Skill}>
      <div className={classes.Sign}>
        <div className={classes.Papan}>
          <p className={classes.Date}>Jul 2019 - Nov 2019</p>
          <p className={classes.Title}>
            DICODING ANDROID DEVELOPER <br /> SCHOLARSHIP
          </p>
          <p className={classes.Description}>
            Learn to make Android applications from beginners class <br />
            to android jetpack pro class
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
