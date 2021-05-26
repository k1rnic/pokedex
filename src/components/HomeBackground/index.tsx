import React from 'react';
import { ReactComponent as Cloud } from '../../assets/Cloud.svg';
import { ReactComponent as CloudBig } from '../../assets/CloudBig.svg';
import { ReactComponent as Pikachu } from '../../assets/Pikachu.svg';
import { ReactComponent as PokeballBig } from '../../assets/PokeBall1.svg';
import { ReactComponent as PokeballSmall } from '../../assets/PokeBall2.svg';
import useParallax from '../../hooks/useParallax';
import Parallax from '../Parallax';
import s from './style.module.scss';

const HomeBackground = () => {
  const [screenX, screenY] = useParallax();

  return (
    <div className={s.root}>
      <Parallax className={s.cloud} screenX={screenX} screenY={screenY} ratio={0.01}>
        <Cloud />
      </Parallax>

      <Parallax className={s.cloudBig} screenX={screenX} screenY={screenY} ratio={0.01}>
        <CloudBig />
      </Parallax>

      <Parallax className={s.pokeBall} screenX={screenX} screenY={screenY} ratio={-0.04}>
        <PokeballSmall />
      </Parallax>

      <Parallax className={s.pokeBallBig} screenX={screenX} screenY={screenY} ratio={-0.02}>
        <PokeballBig />
      </Parallax>

      <Parallax className={s.pikachu} screenX={screenX} screenY={screenY} ratio={0.03}>
        <Pikachu />
      </Parallax>
    </div>
  );
};

export default HomeBackground;
