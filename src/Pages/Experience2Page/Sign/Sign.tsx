import React from 'react';
import Truck from '../../../Assets/Truck.png';
import { Slide } from 'react-awesome-reveal';

import classes from './Sign.module.css';

const sign: React.FC = () => {
  return (
    <div className={classes.Skill}>
      <div className={classes.Sign}>
        <div className={classes.Papan}>
          <p className={classes.Date}>Jan 2019 - August 2019</p>
          <p className={classes.Title}>INTERN AT TELKOM INTERNET OF THINGS</p>
          <p className={classes.Description}>
            Create telkom IoT product such as Lora ArduinoModule and Lora
            Gateway
          </p>
        </div>
        <div className={classes.Tiangs}>
          <div className={classes.Tiang} />
          <div className={classes.Tiang} />
        </div>
      </div>
      <Slide direction="right" triggerOnce={true} style={{ zIndex: 5 }}>
        <img src={Truck} className={classes.Ballon} alt="track" />
      </Slide>
    </div>
  );
};

export default sign;
