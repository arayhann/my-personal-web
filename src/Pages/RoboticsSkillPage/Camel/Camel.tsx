import React from 'react';
import classes from './Camel.module.css';
import Camel from './Camel.png';
import Head from './Head.png';
import { Slide } from 'react-awesome-reveal';

const water: React.FC<{ height: number }> = (props: { height: number }) => {
  return (
    <div className={classes.Base}>
      <Slide direction="up" triggerOnce={true}>
        <div>
          <img src={Head} className={classes.Head} alt="head" />
          <div className={classes.Plant}>
            <div className={classes.Stem} style={{ height: props.height }} />
          </div>
        </div>
      </Slide>
      <img src={Camel} className={classes.Camel} alt="camel" />
    </div>
  );
};

export default water;
