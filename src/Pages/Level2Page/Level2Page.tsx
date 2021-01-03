import React from 'react';
import Gate from './Gate-level2.png';
import TxtSkills from './Txt-skills.png';
import SmallCactus from '../../Assets/Small-cactus.png';
import BigCactus from '../../Assets/Big-cactus.png';
import Pyramid from '../../Assets/Pyramid.png';

import classes from './Level2Page.module.css';

const level2Page: React.FC = () => {
  return (
    <section className={classes.AboutPage}>
      <img src={Pyramid} className={classes.Pyramid} alt="pyramid" />
      <img src={TxtSkills} className={classes.TxtSkills} alt="txt-about" />
      <img src={Gate} className={classes.Gate} alt="gate" />
      <img
        src={SmallCactus}
        className={classes.SmallCactus}
        alt="small-cactus"
      />
      <img src={BigCactus} className={classes.BigCactus} alt="big-cactus" />
    </section>
  );
};

export default level2Page;
