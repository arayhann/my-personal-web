import React, { useEffect, useState } from 'react';
import Lodash from 'lodash';

import { Slide } from 'react-awesome-reveal';

import characterDefaultForward from './Character-default-forward.webp';
import characterDefaultBackward from './Character-default-backward.webp';
import characterWalkingForward from './Character-walking-forward.webp';
import characterWalkingBackward from './Character-walking-backward.webp';
import characterFalling from './Character-falling.png';
import characterFinish from './Character-finish.png';
import classes from './Character.module.css';

const Character: React.FC = () => {
  const [prevOffset, setPrevOffset] = useState(0);
  const [isShow, setShow] = useState(false);

  const [character, setCharacter] = useState<string>(characterFalling);
  const [isWalking, setWalking] = useState<boolean>(false);
  const [prevDirrection, setPrevDirrection] = useState<string>('forward');

  const toggleCharacterWalking = () => {
    let scrollX = document.querySelector('.App-Base')!.scrollLeft;
    let dirrection =
      scrollX > prevOffset
        ? 'forward'
        : scrollX < prevOffset
        ? 'backward'
        : 'null';

    if (isWalking === true) {
      if (prevDirrection !== dirrection) {
        if (dirrection === 'forward') {
          setCharacter(characterWalkingForward);
        } else if (dirrection === 'backward') {
          setCharacter(characterWalkingBackward);
        }
        setPrevDirrection(dirrection);
      }
      return;
    }

    if (
      character === characterWalkingBackward ||
      character === characterWalkingForward
    ) {
      return;
    }

    toggleCharacterStop.cancel();
    if (scrollX > prevOffset) {
      setCharacter(characterWalkingForward);
    } else if (scrollX < prevOffset) {
      setCharacter(characterWalkingBackward);
    }

    setPrevDirrection(dirrection);
    setWalking(true);
    setShow(false);
  };

  const toggleCharacterStop = Lodash.debounce(() => {
    if (isWalking === true) {
      if (
        character === characterDefaultBackward ||
        character === characterDefaultForward
      ) {
        return;
      }

      setWalking(false);

      let scrollX = document.querySelector('.App-Base')!.scrollLeft;

      if (scrollX === window.screen.width * 18.5 || scrollX > 22500) {
        setCharacter(characterFinish);
        return;
      }

      if (scrollX > prevOffset) {
        setCharacter(characterDefaultForward);
      } else if (scrollX < prevOffset) {
        setCharacter(characterDefaultBackward);
      }
      setPrevOffset(scrollX);
    }
  }, 500);

  const setDefault = () => {
    setPrevOffset(document.querySelector('.App-Base')!.scrollLeft);
  };

  useEffect(() => {
    setDefault();
    window.addEventListener('scroll', toggleCharacterWalking, true);
    window.addEventListener('scroll', toggleCharacterStop, true);
    return () => {
      window.removeEventListener('scroll', toggleCharacterWalking, true);
      window.removeEventListener('scroll', toggleCharacterStop, true);
    };
  });
  return (
    <div className={classes.CharacterBase}>
      <Slide
        direction="down"
        triggerOnce={true}
        style={{ height: '100vh', width: '100vw', position: 'fixed' }}
        duration={1000}
        onVisibilityChange={(
          inView: boolean,
          entry: IntersectionObserverEntry
        ) => {
          if (inView) {
            setTimeout(() => {
              setCharacter(characterDefaultForward);
            }, 1000);

            setTimeout(() => {
              setShow(true);
            }, 1100);
          }
        }}
      >
        <img src={character} className={classes.Character} alt="logo" />
      </Slide>
      {isShow ? (
        <p className={classes.AnimateFlicker}>Scroll Left and Right</p>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Character;
