import React from 'react';
import BigTree from '../../Assets/Big-tree.png';
import MediumTree from '../../Assets/Medium-tree.png';
import SmallTree from '../../Assets/Small-tree.png';
import TxtName from './Txt-name.png';
import TitleBanner from '../../Components/TitleBanner/TitleBanner';

import classes from './WelcomePage.module.css';

const welcomePage: React.FC = () => {
  return (
    <section className={classes.WelcomePage}>
      <TitleBanner left={530}>Interactive Resume</TitleBanner>
      <div className={classes.LeftTrees}>
        <img src={BigTree} className={classes.BigTree1} alt="big-tree" />
        <img src={SmallTree} className={classes.SmallTree} alt="small-tree" />
      </div>
      <div className={classes.RightTrees}>
        <img src={BigTree} className={classes.BigTree2} alt="big-tree" />
        <img
          src={MediumTree}
          className={classes.MediumTree}
          alt="medium-tree"
        />
      </div>

      <img src={TxtName} className={classes.TxtName} alt="txt-name" />
    </section>
  );
};

export default welcomePage;
