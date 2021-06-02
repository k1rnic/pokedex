import { navigate } from 'hookrouter';
import React from 'react';
import TeamRocketImg from '../../assets/TeamRocket.png';
import Button from '../../components/atoms/Button';
import Typography from '../../components/atoms/Typography';
import { AppRoute } from '../../interfaces/route';
import s from './style.module.scss';

const NotFound = () => {
  return (
    <div className={s.root}>
      <div className={s.notFoundWrap}>
        <Typography variant="p" className={s.notFoundCode}>
          404
        </Typography>
        <Typography variant="p" className={s.notFoundText}>
          <span style={{ color: 'white' }}>The rocket team</span>{' '}
          <span style={{ color: 'black' }}>has won this time.</span>
        </Typography>
      </div>
      <Button onClick={() => navigate(AppRoute.Home)} color="default">
        return
      </Button>
      <div className={s.frontImg}>
        <img src={TeamRocketImg} alt="Team rocket" />
      </div>
    </div>
  );
};

export default NotFound;
