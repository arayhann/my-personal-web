import React from 'react';
import TitleBanner from '../../Components/TitleBanner/TitleBanner';
import SmallBanner from '../../Components/SmallBanner/SmallBanner';
import SmallCactus from '../../Assets/Small-cactus.png';
import BigCactus from '../../Assets/Big-cactus.png';
import Water from './Camel/Camel';

import classes from './RoboticsSkillPage.module.css';

const webPage: React.FC = () => {
  return (
    <section className={classes.SkillsPage}>
      <TitleBanner left={530}>Web Development</TitleBanner>
      <div className={classes.Base}>
        <ul className={classes.SkillsList}>
          <li className={classes.Skill}>
            <div className={classes.Container2} />
          </li>
          <li className={classes.Skill}>
            <SmallBanner>Electronics Design</SmallBanner>
            <div className={classes.Container} />
          </li>
          <li className={classes.Skill}>
            <SmallBanner>3D Mechanical Design</SmallBanner>
            <div className={classes.Container} />
          </li>
          <li className={classes.Skill}>
            <SmallBanner>IoT Dev</SmallBanner>
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
          <Water
            height={
              window.matchMedia('(max-width: 500px)').matches === true
                ? 150
                : 100
            }
          />
        </li>
        <li className={classes.Plant}>
          <Water
            height={
              window.matchMedia('(max-width: 500px)').matches === true
                ? 150
                : 100
            }
          />
        </li>
        <li className={classes.Plant}>
          <Water
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
      <img src={BigCactus} className={classes.BigCactus} alt="big-cactus" />
    </section>
  );
};

export default webPage;
