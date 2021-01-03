import React from 'react';
import Sign from './Sign/Sign';
import TitleBanner from '../../Components/TitleBanner/TitleBanner';

import classes from './Experience2Page.module.css';

const experience2Page: React.FC = () => {
  return (
    <section className={classes.ExperiencePage}>
      <TitleBanner left={580}>Experience 2</TitleBanner>
      <Sign />
    </section>
  );
};

export default experience2Page;
