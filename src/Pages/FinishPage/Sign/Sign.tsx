import React from 'react';

import Send from './Send.png';
import Contact from './Contact.png';
import classes from './Sign.module.css';

const sign: React.FC = () => {
  return (
    <div className={classes.Skill}>
      <div className={classes.Sign}>
        <img src={Contact} alt="contact" className={classes.TxtContact} />
        <div className={classes.Papan}>
          <div style={{ display: 'flex' }}>
            <p className={classes.Description}>Email</p>
            <input className={classes.Input} name="email-address" />
          </div>
          <div style={{ display: 'flex' }}>
            <p className={classes.Description}>Subject</p>
            <input className={classes.Input} name="email-address" />
          </div>
          <div style={{ display: 'flex' }}>
            <p className={classes.Description}>Message</p>
            <textarea
              className={classes.InputDescription}
              name="email-address"
            />
          </div>
          <input
            src={Send}
            type="image"
            alt="send"
            className={classes.Send}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default sign;
