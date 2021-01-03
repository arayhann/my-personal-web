import React from 'react';
import TitleBanner from '../../Components/TitleBanner/TitleBanner';
import SmallBanner from '../../Components/SmallBanner/SmallBanner';
import SmallCactus from '../../Assets/Small-cactus.png';
import Pyramid from '../../Assets/Pyramid.png';
import Sign from './Sign/Sign';
import SignLeft from './SignLeft/SignLeft';
import SignRight from './SignRight/SignRight';

import classes from './DesignSkillPage.module.css';

const webPage: React.FC = () => {
  return (
    <section className={classes.SkillsPage}>
      <TitleBanner left={530}>Design Software</TitleBanner>
      <div className={classes.Base}>
        <ul className={classes.SkillsList}>
          <li className={classes.Skill}>
            <div className={classes.Container2} />
          </li>
          <li className={classes.Skill}>
            <SmallBanner>Figma</SmallBanner>
            <div className={classes.Container} />
          </li>
          <li className={classes.Skill}>
            <SmallBanner>Photoshop</SmallBanner>
            <div className={classes.Container} />
          </li>
          <li className={classes.Skill}>
            <SmallBanner>Illustartor</SmallBanner>
            <div className={classes.Container} />
          </li>
        </ul>
        <ul className={classes.LevelsList}>
          <li className={classes.Level}>
            <p>EXPERT</p>
            <hr />
          </li>
          <li className={classes.Level}>
            <p>ADVANCED</p>
            <hr />
          </li>
          <li className={classes.Level}>
            <p>INTERMEDIATE</p>
            <hr />
          </li>
          <li className={classes.Level}>
            <p>ELEMENTARY</p>
            <hr />
          </li>
          <li className={classes.Level}>
            <p>BEGINNER</p>
            <hr />
          </li>
        </ul>
      </div>
      <ul className={classes.PlantsList}>
        <li className={classes.Plant}>
          <SignLeft
            height={
              window.matchMedia('(max-width: 500px)').matches === true
                ? 150
                : 100
            }
          />
        </li>
        <li className={classes.Plant}>
          <Sign
            height={
              window.matchMedia('(max-width: 500px)').matches === true
                ? 150
                : 100
            }
          />
        </li>
        <li className={classes.Plant}>
          <SignRight
            height={
              window.matchMedia('(max-width: 500px)').matches === true ? 80 : 30
            }
          />
        </li>
      </ul>
      <img
        src={SmallCactus}
        className={classes.SmallCactus}
        alt="small-cactus"
      />
      <img src={Pyramid} className={classes.Pyramid} alt="pyramid" />
    </section>
  );
};

export default webPage;
