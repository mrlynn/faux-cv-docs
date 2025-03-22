import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {
  Description,
  Code,
  AutoAwesome
} from '@mui/icons-material';

const FeatureList = [
  {
    title: 'Generate Realistic Resumes',
    Icon: Description,
    description: (
      <>
        Create authentic-looking resumes with realistic work experience, skills, and
        education details. Perfect for testing and prototyping applications.
      </>
    ),
  },
  {
    title: 'Multiple Output Formats',
    Icon: Code,
    description: (
      <>
        Export resumes in multiple formats including Markdown, JSON, and PDF. 
        Customize templates and styles to match your needs.
      </>
    ),
  },
  {
    title: 'Powerful API & CLI',
    Icon: AutoAwesome,
    description: (
      <>
        Use our intuitive CLI for quick generation or integrate the API into your
        applications for programmatic resume creation.
      </>
    ),
  },
];

function Feature({Icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Icon 
          className="featureIcon"
          style={{ 
            fontSize: 72,
            marginBottom: '1.5rem',
            opacity: 0.9
          }} 
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
