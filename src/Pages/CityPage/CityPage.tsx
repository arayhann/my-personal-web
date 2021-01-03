import React, { useState } from 'react';
import TitleBanner from '../../Components/TitleBanner/TitleBanner';
import SStand from './S-stand.png';
import AStand from './A-stand.png';
import TStand from './T-stand.png';
import EStand from './E-stand.png';
import SWalk from './S-walk.webp';
import AWalk from './A-walk.webp';
import TWalk from './T-walk.webp';
import EWalk from './E-walk.webp';
import Gedung from './Gedung.png';
import NormalGround from './NormalGround/NormalGround';
import MediumTree from '../../Assets/Medium-tree.png';

import { Slide } from 'react-awesome-reveal';

import classes from './CityPage.module.css';

const CityPage: React.FC = () => {
  const [aText, setAtext] = useState<any>(
    <img src={AWalk} className={classes.Text} alt="a-walk" />
  );
  const [sText, setStext] = useState<any>(
    <img src={SWalk} className={classes.Text} alt="s-walk" />
  );
  const [tText, setTtext] = useState<any>(
    <img src={TWalk} className={classes.Text} alt="t-walk" />
  );
  const [eText, setEtext] = useState<any>(
    <img src={EWalk} className={classes.Text} alt="e-walk" />
  );

  return (
    <section className={classes.CityPage}>
      <TitleBanner left={480}>Live and Work in Bandung</TitleBanner>
      <NormalGround />
      <img src={Gedung} className={classes.Gedung} alt="gedung" />
      <img src={MediumTree} className={classes.MediumTree1} alt="medium-tree" />
      <img src={MediumTree} className={classes.MediumTree2} alt="medium-tree" />
      <ul className={classes.CityNames}>
        <li className={classes.CityName}>
          <Slide
            direction="right"
            triggerOnce={true}
            onVisibilityChange={(
              inView: boolean,
              entry: IntersectionObserverEntry
            ) => {
              if (inView) {
                setTimeout(() => {
                  console.log('CHANGEEE');
                  setStext(
                    <img src={SStand} className={classes.Text} alt="s-stand" />
                  );
                }, 1200);
              }
            }}
          >
            {sText}
          </Slide>
        </li>
        <li className={classes.CityName}>
          <Slide
            direction="right"
            triggerOnce={true}
            onVisibilityChange={(
              inView: boolean,
              entry: IntersectionObserverEntry
            ) => {
              if (inView) {
                setTimeout(() => {
                  setAtext(
                    <img src={AStand} className={classes.Text} alt="a-stand" />
                  );
                }, 1200);
              }
            }}
          >
            {aText}
          </Slide>
        </li>
        <li className={classes.CityName}>
          <Slide
            direction="right"
            triggerOnce={true}
            onVisibilityChange={(
              inView: boolean,
              entry: IntersectionObserverEntry
            ) => {
              if (inView) {
                setTimeout(() => {
                  setTtext(
                    <img src={TStand} className={classes.Text} alt="t-stand" />
                  );
                }, 1200);
              }
            }}
          >
            {tText}
          </Slide>
        </li>
        <li className={classes.CityName}>
          <Slide
            direction="right"
            triggerOnce={true}
            onVisibilityChange={(
              inView: boolean,
              entry: IntersectionObserverEntry
            ) => {
              if (inView) {
                setTimeout(() => {
                  setEtext(
                    <img src={EStand} className={classes.Text} alt="e-stand" />
                  );
                }, 1200);
              }
            }}
          >
            {eText}
          </Slide>
        </li>
      </ul>
    </section>
  );
};

export default CityPage;
