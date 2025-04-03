import type { IFrontmatter } from 'astro-boilerplate-components';
import { PostContent, PostHeader, Section } from 'astro-boilerplate-components';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IBlogPostProps = {
  frontmatter: IFrontmatter;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => (
  <Section>
  <PostHeader content={props.frontmatter} author={AppConfig.author} />
  <div className="max-w-4xl mx-auto">
    <PostContent content={props.frontmatter}>
      {props.children}
    </PostContent>
  </div>
  </Section>
);

export { BlogPost };
