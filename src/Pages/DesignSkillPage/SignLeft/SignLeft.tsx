import React from 'react';
import classes from './SignLeft.module.css';
import Bush from '../../../Assets/Bush.png';
import Head from './Head.png';
import { Slide } from 'react-awesome-reveal';

const signLeft: React.FC<{ height: number }> = (props: { height: number }) => {
  return (
    <div>
      <Slide direction="up" triggerOnce={true}>
        <div>
          <img src={Head} className={classes.Head} alt="head" />
          <div className={classes.Plant}>
            <div className={classes.Stem} style={{ height: props.height }} />
          </div>
        </div>
      </Slide>
      <img src={Bush} className={classes.Bush} alt="bush" />
    </div>
  );
};

export default signLeft;
