import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Akhil</GradientText> 👋
        </>
      }
      description={
        <>
          Hello fellow hackers, I am D4RK and I work on android security. I also have knowledge about web security and I am part of team bi0s. Explore my page to get to know me and do not forget to check out my blogs.
        </>
      }
      avatar={
        <img
          className="h-80 w-80"
          src="/assets/images/pic.jpg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.instagram.com/akhilvarrier/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100010639773048">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/akhil-g-varrier-483b28216/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
