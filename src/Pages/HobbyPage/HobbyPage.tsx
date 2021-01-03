import React, { useState } from 'react';
import TitleBanner from '../../Components/TitleBanner/TitleBanner';
import Naruto from './Naruto.png';
import NarutoW from './NarutoW.webp';
import NarutoE from './NarutoE.webp';
import NarutoB from './NarutoB.webp';
import { Fade } from 'react-awesome-reveal';

import classes from './HobbyPage.module.css';

const HobbyPage: React.FC = () => {
  const [narutoW, setNarutoW] = useState<any>(
    <div className={classes.Naruto} />
  );
  const [narutoE, setNarutoE] = useState<any>(
    <div className={classes.Naruto} />
  );
  const [narutoB, setNarutoB] = useState<any>(
    <div className={classes.Naruto} />
  );

  return (
    <section className={classes.HobbyPage}>
      <TitleBanner left={520}>Love to Read Manga</TitleBanner>
      <ul className={classes.NarutoList}>
        <li className={classes.Naruto}>{narutoW}</li>
        <li className={classes.Naruto}>{narutoE}</li>
        <li className={classes.Naruto}>
          <Fade
            direction="down"
            triggerOnce={true}
            onVisibilityChange={(
              inView: boolean,
              entry: IntersectionObserverEntry
            ) => {
              setTimeout(() => {
                if (inView) {
                  setNarutoW(
                    <img
                      src={NarutoW}
                      className={classes.NarutoMain}
                      alt="Naruto"
                    />
                  );
                  setNarutoE(
                    <img
                      src={NarutoE}
                      className={classes.NarutoMain}
                      alt="Naruto"
                    />
                  );
                  setNarutoB(
                    <img
                      src={NarutoB}
                      className={classes.NarutoMain}
                      alt="Naruto"
                    />
                  );
                }
              }, 1500);
            }}
          >
            <img src={Naruto} className={classes.NarutoMainTop} alt="Naruto" />
          </Fade>
          <div className={classes.Stick} />
        </li>
        <li className={classes.Naruto}>{narutoE}</li>
        <li className={classes.Naruto}>{narutoB}</li>
      </ul>
    </section>
  );
};

export default HobbyPage;
