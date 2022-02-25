import React from 'react';
import TitleBanner from '../../Components/TitleBanner/TitleBanner';
import SmallBanner from '../../Components/SmallBanner/SmallBanner';
import Tree from './Tree/Tree';
import BigCactus from '../../Assets/Big-cactus.png';

import classes from './MobileSkillPage.module.css';

const mobilePage: React.FC = () => {
  return (
    <section className={classes.SkillsPage}>
      <TitleBanner left={550}>Mobile Development</TitleBanner>
      <div className={classes.Base}>
        <ul className={classes.SkillsList}>
          <li className={classes.Skill}>
            <SmallBanner>Flutter Dart</SmallBanner>
            <div className={classes.Container} />
          </li>
          <li className={classes.Skill}>
            <SmallBanner>Java / Kotlin</SmallBanner>
            <div className={classes.Container} />
          </li>
          <li className={classes.Skill}>
            <SmallBanner>Swift</SmallBanner>
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
          <Tree
            height={
              window.matchMedia('(max-width: 500px)').matches === true
                ? 230
                : 280
            }
          />
        </li>
        <li className={classes.Plant}>
          <Tree
            height={
              window.matchMedia('(max-width: 500px)').matches === true
                ? 230
                : 280
            }
          />
        </li>
        <li className={classes.Plant}>
          <Tree
            height={
              window.matchMedia('(max-width: 500px)').matches === true
                ? 100
                : 150
            }
          />
        </li>
      </ul>
      <img src={BigCactus} className={classes.BigCactus} alt="big-cactus" />
    </section>
  );
};

export default mobilePage;
