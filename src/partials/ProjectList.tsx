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
        name="Project 1"
        description="Side-channel analysis, finding out AES encryption keys using power analysis."
        link="/projects/side-channel"
        img={{
          src: '/assets/images/project-web-design.png',
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
        name="Project 2"
        description="Development of couple of simple android application."
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Android</Tags>
            <Tags color={ColorTags.EMERALD}>WebView</Tags>
          </>
        }
      />
      <Project
        name="Project 3"
        description="Pneumonia detection using machine learning."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
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

