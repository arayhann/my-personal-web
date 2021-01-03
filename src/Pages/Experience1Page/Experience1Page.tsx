import React from 'react';
import Sign from './Sign/Sign';
import TitleBanner from '../../Components/TitleBanner/TitleBanner';

import classes from './Experience1Page.module.css';

const experience1Page: React.FC = () => {
  return (
    <section className={classes.ExperiencePage}>
      <TitleBanner left={580}>Experience 1</TitleBanner>
      <Sign />
    </section>
  );
};

export default experience1Page;
