import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg margin-right--md"
            to="/docs/getting-started">
            Generate a Resume ⏱️
          </Link>
          <Link
            className="button button--secondary button--lg margin-right--md"
            href="https://www.npmjs.com/package/faux-cv"
            target="_blank"
            rel="noopener noreferrer">
            View on NPM 📦
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://buymeacoffee.com/UXIHrT46vs"
            target="_blank"
            rel="noopener noreferrer">
            Buy Me a Coffee ☕
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Generate Realistic Fake Resumes`}
      description="A powerful Node.js library for creating customizable, realistic resumes for testing and development">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
