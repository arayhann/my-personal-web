import React from 'react';
import BigTree from '../../Assets/Big-tree.png';
import MediumTree from '../../Assets/Medium-tree.png';
import SmallTree from '../../Assets/Small-tree.png';
import Gate from './Gate-level1.png';
import TxtAbout from './Txt-about.png';

import classes from './AboutPage.module.css';

const aboutPage: React.FC = () => {
  return (
    <section className={classes.AboutPage}>
      <img src={TxtAbout} className={classes.TxtAbout} alt="txt-about" />
      <img src={Gate} className={classes.Gate} alt="gate" />
      <div className={classes.Trees}>
        <img src={BigTree} className={classes.BigTree} alt="big-tree" />
        <img
          src={MediumTree}
          className={classes.MediumTree}
          alt="medium-tree"
        />
        <img src={SmallTree} className={classes.SmallTree} alt="small-tree" />
      </div>
    </section>
  );
};

export default aboutPage;
