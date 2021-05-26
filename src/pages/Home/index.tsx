import cn from 'classnames';
import React, { FC } from 'react';
import Button from '../../components/Button';
import HomeBackground from '../../components/HomeBackground';
import Layout from '../../components/Layout';
import Typography from '../../components/Typography';
import s from './style.module.scss';

const Home = () => (
  <Layout className={cn(s.contentWrap)}>
    <div className={s.contentText}>
      <Typography variant="h1">
        <b>Find</b> all your favorite <b>Pokemon</b>
      </Typography>
      <Typography variant="h3">You can know the type of Pokemon, its strengths, disadvantages and abilities</Typography>
      <Button color="success" onClick={console.log}>
        See pokemons
      </Button>
    </div>
    <div className={s.contentParallax}>
      <HomeBackground />
    </div>
  </Layout>
);

export default Home;
