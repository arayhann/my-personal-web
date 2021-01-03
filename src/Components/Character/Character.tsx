import React, { useEffect, useState } from 'react';
import Lodash from 'lodash';

import characterDefaultForward from './Character-default-forward.webp';
import characterDefaultBackward from './Character-default-backward.webp';
import characterWalkingForward from './Character-walking-forward.webp';
import characterWalkingBackward from './Character-walking-backward.webp';
import characterFinish from './Character-finish.png';
import classes from './Character.module.css';

const Character: React.FC = () => {
  const [prevOffset, setPrevOffset] = useState(0);

  const [character, setCharacter] = useState<string>(characterDefaultForward);
  const [isWalking, setWalking] = useState<boolean>(false);
  const [prevDirrection, setPrevDirrection] = useState<string>('forward');

  const toggleCharacterWalking = () => {
    let scrollX = document.querySelector('.App-Base')!.scrollLeft;

    console.log(
      document.querySelector('.App-Base')!.scrollLeft,
      document.querySelector('.App-Base')!.scrollWidth
    );

    let dirrection =
      scrollX > prevOffset
        ? 'forward'
        : scrollX < prevOffset
        ? 'backward'
        : 'null';

    if (isWalking === true) {
      if (prevDirrection !== dirrection) {
        console.log('CHANGING DIRRECTION');
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
    console.log('START');

    toggleCharacterStop.cancel();
    if (scrollX > prevOffset) {
      console.log('MAJU');
      setCharacter(characterWalkingForward);
    } else if (scrollX < prevOffset) {
      console.log('MUNDUR');
      setCharacter(characterWalkingBackward);
    }
    console.log(scrollX, prevOffset);

    setPrevDirrection(dirrection);
    setWalking(true);
  };

  const toggleCharacterStop = Lodash.debounce(() => {
    if (isWalking === true) {
      if (
        character === characterDefaultBackward ||
        character === characterDefaultForward
      ) {
        return;
      }
      console.log('STOP');

      setWalking(false);

      let scrollX = document.querySelector('.App-Base')!.scrollLeft;

      if (scrollX > 20000) {
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
  return <img src={character} className={classes.Character} alt="logo" />;
};

export default Character;
