import React from 'react';
import classes from './Plant.module.css';
import LeafRight from './Leaf-right.png';
import LeafLeft from './Leaf-left.png';
import Pipe from './Pipe.png';
import Head from './Head.webp';
import { Slide, Fade } from 'react-awesome-reveal';

const plant: React.FC<{ height: number }> = (props: { height: number }) => {
  return (
    <div>
      <Slide direction="up" style={{ zIndex: 0 }} triggerOnce={true}>
        <div style={{ zIndex: 0 }}>
          <img src={Head} className={classes.Head} alt="head" />
          <div className={classes.Plant}>
            <Fade direction="right" triggerOnce={true}>
              <img
                src={LeafLeft}
                className={classes.LeafLeft}
                alt="leaf-left"
              />
            </Fade>
            <div className={classes.Stem} style={{ height: props.height }} />
            <Fade direction="left" triggerOnce={true}>
              <img
                src={LeafRight}
                className={classes.LeafRight}
                alt="leaf-right"
              />
            </Fade>
          </div>
        </div>
      </Slide>
      <img src={Pipe} className={classes.Pipe} alt="pipe" />
    </div>
  );
};

export default plant;
