import React from 'react';
import classes from './NormalGround.module.css';

const normalGround: React.FC = () => {
  return (
    <div className={classes.Ground}>
      <div className={classes.Grass} />
    </div>
  );
};

export default normalGround;
