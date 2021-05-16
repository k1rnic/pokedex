import React from 'react';
import LargeCloudImg from '../../assets/cloud-large.png';
import SmallCloudImg from '../../assets/cloud-small.png';
import PikachuImg from '../../assets/pikachu.png';
import PrimaryPokeBallImg from '../../assets/pokeball-primary.png';
import SecondaryPokeBallImg from '../../assets/pokeball-secondary.png';
import useParallax from '../../hooks/useParallax';
import Parallax from '../Parallax';
import s from './style.module.scss';

const HomeBackground = () => {
  const [screenX, screenY] = useParallax();

  return (
    <div className={s.root}>
      <Parallax className={s.cloud} screenX={screenX} screenY={screenY} ratio={-0.04}>
        <img src={SecondaryPokeBallImg} alt="Small pokeBall" />
      </Parallax>

      <Parallax className={s.pikachu} screenX={screenX} screenY={screenY} ratio={0.01}>
        <img src={SmallCloudImg} alt="Cloud" />
      </Parallax>

      <Parallax className={s.cloudBig} screenX={screenX} screenY={screenY} ratio={0.01}>
        <img src={LargeCloudImg} alt="Cloud big" />
      </Parallax>

      <Parallax className={s.pokeBall} screenX={screenX} screenY={screenY} ratio={-0.02}>
        <img src={PrimaryPokeBallImg} alt="PokeBall" />
      </Parallax>

      <Parallax className={s.pikachu} screenX={screenX} screenY={screenY} ratio={0.03}>
        <img src={PikachuImg} alt="Pikachu" />
      </Parallax>
    </div>
  );
};

export default HomeBackground;
