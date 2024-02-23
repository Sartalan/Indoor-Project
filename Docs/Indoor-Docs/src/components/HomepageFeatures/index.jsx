import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


const FeatureListOne = [
  {
    title: 'HTML5',
    Svg: require('@site/static/brand/html5-logo.svg').default,
  },
  {
    title: 'CSS3',
    Svg: require('@site/static/brand/css3-logo.svg').default,
  },
  {
    title: 'Javascript',
    Svg: require('@site/static/brand/javascript-logo.svg').default,
  },
  {
    title: 'React', 
    Svg: require('@site/static/brand/react-logo.svg').default
  },
  {
    title: 'NodeJs',
    Svg: require('@site/static/brand/nodejs-logo.svg').default,
  },
 

  


];
/*?dwadwaawdd */
const FeatureListTwo = [
  {
    title: 'Express',
    Svg: require('@site/static/brand/express-logo.svg').default,
  },
  
  {
    title: 'Tauri',
    Svg: require('@site/static/brand/tauri-logo.svg').default,
  },


  {
    title: 'Rust',
    Svg: require('@site/static/brand/rust-logo.svg').default,
  },
  {
    title: 'C',
    Svg: require('@site/static/brand/c-logo.svg').default,
  },

];

const FeatureListThree = [
  {
    title: 'Git', 
    Svg: require('@site/static/brand/git-logo.svg').default
  },

  {
    title: 'Github', 
    Svg: require('@site/static/brand/github-logo.svg').default
  },


  {
    title: 'RaspberryPi',
    Svg: require('@site/static/brand/raspberrypi-logo.svg').default,
  },
]

const FeatureListFour = [



  
]


function Feature({Svg, title, description}) {
  return (
      <div className="col text--center">
        <Svg className={styles.featureSvg} role="img"/>
        <p>{title}</p>
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
        <div className="row">
          {FeatureListFour.map((props, idx) => (
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