import React from 'react';
import TitleBanner from '../../Components/TitleBanner/TitleBanner';
import SmallBanner from '../../Components/SmallBanner/SmallBanner';
import Plant from './Plant/Plant';

import classes from './SkillsPage.module.css';

const skillsPage: React.FC = () => {
  return (
    <section className={classes.SkillsPage}>
      <TitleBanner left={500}>Multidisciplinary Engineer</TitleBanner>
      <div className={classes.Base}>
        <ul className={classes.SkillsList}>
          <li className={classes.Skill}>
            <div className={classes.Container2} />
          </li>
          <li className={classes.Skill}>
            <SmallBanner>Mobile Dev</SmallBanner>
            <div className={classes.Container} />
          </li>
          <li className={classes.Skill}>
            <SmallBanner>Web Dev</SmallBanner>
            <div className={classes.Container} />
          </li>
          <li className={classes.Skill}>
            <SmallBanner>Design</SmallBanner>
            <div className={classes.Container} />
          </li>
          <li className={classes.Skill}>
            <SmallBanner>Robotics</SmallBanner>
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
          <Plant height={180} />
        </li>
        <li className={classes.Plant}>
          <Plant height={120} />
        </li>
        <li className={classes.Plant}>
          <Plant height={120} />
        </li>
        <li className={classes.Plant}>
          <Plant height={70} />
        </li>
      </ul>
    </section>
  );
};

export default skillsPage;
