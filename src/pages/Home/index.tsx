import cn from 'classnames';
import React from 'react';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import HomeBackground from '../../components/HomeBackground';
import Layout from '../../components/Layout';
import s from './style.module.scss';

const Home = () => (
  <Layout className={cn(s.contentWrap)}>
    <div className={s.contentText}>
      <Heading variant={1}>
        <b>Find</b> all your favorite <b>Pokemon</b>
      </Heading>
      <Heading variant={3}>You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
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
