import React from 'react';
import Car from './Car.png';
import TrafficLight from './ParkSign.png';

import classes from './Sign.module.css';

const sign: React.FC = () => {
  return (
    <div className={classes.Skill}>
      <div className={classes.Sign}>
        <div className={classes.Papan}>
          <p className={classes.Date}>August 2020</p>
          <p className={classes.Title}>
            WINNER IN INDONESIA MAJU HACKFEST <br /> 2020 - FLUTTER HACKATHON
          </p>
          <p className={classes.Description}>
            Get 2nd position in Indonesia Flutter Hackathon 2020, build an{' '}
            <br /> app for economic growth problems in Indonesia called
            “kerjakan”
          </p>
        </div>
        <div className={classes.Tiangs}>
          <div className={classes.Tiang} />
          <div className={classes.Tiang} />
        </div>
      </div>
      <img
        src={TrafficLight}
        className={classes.TrafficLight}
        alt="traffic-light"
      />
      <img src={Car} className={classes.Car} alt="balloon" />
    </div>
  );
};

export default sign;
