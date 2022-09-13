import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Based on MIR standards',
    Svg: require('@site/static/img/music_mir.svg').default,
    description: (
      <>
        Smashub sits on the back of giants, with a modular design based on...
      </>
    ),
  },
  {
    title: 'Smash your music data',
    Svg: require('@site/static/img/music_net.svg').default,
    description: (
      <>
        Standardise and describe your music data. Create music knowledge graphs
        with little efforts.
      </>
    ),
  },
  {
    title: 'Your resource, easy to find',
    Svg: require('@site/static/img/music_search.svg').default,
    description: (
      <>
        Make your music data interoperable with other datasets, ready to be
        linked, and easy to find.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
