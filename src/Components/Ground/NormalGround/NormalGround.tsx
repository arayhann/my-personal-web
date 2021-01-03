import React from 'react';
import classes from './NormalGround.module.css';

interface GroundProps {
  width: string;
  height: string;
  bottom: string;
  left: string;
}

const normalGround: React.FC<GroundProps> = (props: GroundProps) => {
  return (
    <div
      className={classes.Ground}
      style={{
        width: props.width,
        minHeight: props.height,
        bottom: props.bottom,
        left: props.left,
      }}
    >
      <div className={classes.Grass} />
    </div>
  );
};

export default normalGround;
