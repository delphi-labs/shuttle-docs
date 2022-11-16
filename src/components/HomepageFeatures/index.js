import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/check-all.svg').default,
    description: (
      <>
        Shuttle was designed to get your Cosmos dApps up and running quickly. 
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/code-tags.svg').default,
    description: (
      <>
        Shuttle lets you focus on core dApp logic instead of integrating new wallets or chains. 
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/react.svg').default,
    
    description: (
      <>
        Support for VueJS and Svelte pending. 
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
