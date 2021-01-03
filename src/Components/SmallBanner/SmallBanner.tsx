import React from 'react';
import classes from './SmallBanner.module.css';
import BannerRight from './Banner-right.png';
import BannerLeft from './Banner-left.png';

const smallBanner: React.FC = (props: any) => {
  return (
    <div className={classes.SmallBanner}>
      <img className={classes.BannerLeft} src={BannerLeft} alt="banner-left" />
      <p className={classes.Banner}>{props.children}</p>
      <img
        className={classes.BannerRight}
        src={BannerRight}
        alt="banner-right"
      />
    </div>
  );
};

export default smallBanner;
