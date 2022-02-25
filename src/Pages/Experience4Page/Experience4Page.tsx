import React from 'react';
import Sign from './Sign/Sign';
import TitleBanner from '../../Components/TitleBanner/TitleBanner';

import classes from './Experience4Page.module.css';

const experience3Page: React.FC = () => {
  return (
    <section className={classes.ExperiencePage}>
      <TitleBanner left={580}>Experience 4</TitleBanner>
      <Sign />
    </section>
  );
};

export default experience3Page;
