import React from 'react';
import classes from './TitleBanner.module.css';
import BannerRight from './Banner-right.png';
import BannerLeft from './Banner-left.png';

interface titleBannerProps {
  left: number;
}

const titleBanner: React.FC<titleBannerProps> = (props) => {
  return (
    <div className={classes.BannerAll}>
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

export default titleBanner;
