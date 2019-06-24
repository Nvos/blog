import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { Layout, SEO } from '../../components';
import style from './Home.module.scss';

const InfoBox = () => (
  <div style={{ flex: 1 }}>
    <h2>Adrian Kulesza</h2>
    <h4 style={{ color: 'white', marginTop: 0 }}>Developer</h4>
    <p>
      Mythical creature that survives completely on beer, coffe and cynicism. We
      skulk in the dark, secretly cursing and despising everyone else.
      Especially other developers.
    </p>
    <h4 style={{ color: 'white', marginTop: 0 }}>Bio</h4>
  </div>
);

const SkillEntry: React.FC = ({ children }) => (
  <li>
    <div>
      <FaCheck />
    </div>
    <span>{children}</span>
  </li>
);

const SkillsBox = () => (
  <div style={{ flex: 1 }} className={style.Skills}>
    <h2>Skills</h2>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h4 style={{ color: 'white', marginTop: 0 }}>Frontend</h4>
        <ul>
          <SkillEntry>
            <b>Typescript</b> and latest <b>Javascript</b> features
          </SkillEntry>
          <SkillEntry>
            Practical knowledge of <b>React</b>, <b>Angular</b> and their
            ecosystems
          </SkillEntry>
          <SkillEntry>
            <b>Webpack</b> configuration and project scaffold tooling
          </SkillEntry>
        </ul>
      </div>
      <div style={{ flex: 1 }}>
        <h4 style={{ color: 'white', marginTop: 0 }}>Backend</h4>
        <ul>
          <SkillEntry>
            <b>Microservices</b> and <b>GraphQL servers</b> using Java, Kotlin
            and Go
          </SkillEntry>
          <SkillEntry>
            Practical knowledge of <b>Spring</b>, <b>Ktor</b>,{' '}
            <b>Java GraphQL</b> and <b>Gqlgen</b>
          </SkillEntry>
        </ul>
      </div>
    </div>
    <button className={style.SkillsButton}>Favorite tooling</button>
  </div>
);

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ display: 'flex', width: '100%' }}>
      <InfoBox />
      <SkillsBox />
    </div>

    <div>
      <h2>Latest Blog Entries</h2>
    </div>
  </Layout>
);

export default Home;
