import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Hardware security project"
        description="Side-channel analysis, finding out AES encryption keys using power analysis."
        link="/projects/side-channel"
        img={{
          src: '/assets/images/sidechannel.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Hardware security</Tags>
            <Tags color={ColorTags.LIME}>Side channel</Tags>
            <Tags color={ColorTags.SKY}>AES</Tags>
            <Tags color={ColorTags.ROSE}>Power analysis</Tags>
          </>
        }
      />
      <Project
        name="Android project"
        description="Developed a couple of simple Android applications."
        link="/projects/dev"
        img={{
          src: '/assets/images/android.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Android</Tags>
            <Tags color={ColorTags.EMERALD}>WebView</Tags>
          </>
        }
      />
      <Project
        name="Machine Learning project"
        description="Pneumonia detection using machine learning."
        link="/projects/ml"
        img={{
          src: '/assets/images/ml.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Machine learning</Tags>
            <Tags color={ColorTags.INDIGO}>CNN</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };

