import React from 'react';
import classes from './CityGround.module.css';

interface GroundProps {
  width: string;
  height: string;
  bottom: string;
  left: string;
}

const cityGround: React.FC<GroundProps> = (props: GroundProps) => {
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

export default cityGround;
