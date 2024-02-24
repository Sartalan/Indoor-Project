import styles from './styles.module.css';
import { FeatureListOne, FeatureListTwo, FeatureListThree } from './../HomepageIcons/FeatureIcons'

function Feature({ Svg, title, url }) {
  return (
    <div className="col text--center">
      <a href={url} target="_blank" id={styles.techA}>
        <Svg className={styles.techIcon} role="img" />
        <p className={styles.techText}>{title}</p>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.techSection}>
      <div className={styles.container}>
        <h2 className={styles.techTitle}>Tecnologias Usadas:</h2>
        <hr className={styles.hr} />
        <div className="row">
          {FeatureListOne.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          {FeatureListTwo.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          {FeatureListThree.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * 
 * 
 * { 
title: 'Easy to Use',
Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
description: (
  <>
    Docusaurus was designed from the gr
  </>
),
},
 */