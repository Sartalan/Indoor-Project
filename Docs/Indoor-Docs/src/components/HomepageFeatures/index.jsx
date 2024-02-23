import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


const FeatureListOne = [
  {
    title: 'HTML5',
    url: 'https://developer.mozilla.org/es/docs/Web/HTML',
    Svg: require('@site/static/brand/html5-logo.svg').default,
  },
  {
    title: 'CSS3',
    url: 'https://developer.mozilla.org/es/docs/Web/CSS',
    Svg: require('@site/static/brand/css3-logo.svg').default,
  },
  {
    title: 'Javascript',
    url: 'https://developer.mozilla.org/es/docs/Web/Javascript',
    Svg: require('@site/static/brand/javascript-logo.svg').default,
  },
  {
    title: 'React', 
    url: 'https://developer.mozilla.org/es/docs/Web/Javascript',
    Svg: require('@site/static/brand/react-logo.svg').default
  },
  {
    title: 'Node.js',
    url: 'https://developer.mozilla.org/es/docs/Web/Javascript',
    Svg: require('@site/static/brand/nodejs-logo.svg').default,
  },

];
/*?dwadwaawdd */
const FeatureListTwo = [
  {
    title: 'Express',
    url: 'https://developer.mozilla.org/es/docs/Web/Javascript',
    Svg: require('@site/static/brand/express-logo.svg').default,
  },
  
  {
    title: 'Tauri',
    url: 'https://developer.mozilla.org/es/docs/Web/Javascript',
    Svg: require('@site/static/brand/tauri-logo.svg').default,
  },

  {
    title: 'Rust',
    url: 'https://developer.mozilla.org/es/docs/Web/Javascript',
    Svg: require('@site/static/brand/rust-logo.svg').default,
  },
  {
    title: 'C',
    url: 'https://developer.mozilla.org/es/docs/Web/Javascript',
    Svg: require('@site/static/brand/c-logo.svg').default,
  },

];

const FeatureListThree = [
  {
    title: 'Git', 
    url: 'https://developer.mozilla.org/es/docs/Web/Javascript',
    Svg: require('@site/static/brand/git-logo.svg').default
  },

  {
    title: 'Github', 
    url: 'https://developer.mozilla.org/es/docs/Web/Javascript',
    Svg: require('@site/static/brand/github-logo.svg').default
  },


  {
    title: 'Raspberry Pi',
    url: 'https://developer.mozilla.org/es/docs/Web/Javascript',
    Svg: require('@site/static/brand/raspberrypi-logo.svg').default,
  },
]

function Feature({Svg, title, url}) {
  return (
      <div className="col text--center">
        <a href={url} id={styles.techContainer}>
          <Svg className={styles.techSvg} role="img"/>
          <p className={styles.techText}>{title}</p>
        </a>
      </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
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