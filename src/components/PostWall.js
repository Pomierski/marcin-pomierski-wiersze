import React from 'react';
import loadable from '@loadable/component';
import Container from './Container';
const Card = loadable(() => import('./Card'));

const PostWall = ({ data, filter, paddingTop }) => {
  let posts;
  if (!filter) posts = data.gcms.wiersze;
  else posts = data;

  return (
    <Container paddingTop={paddingTop}>
      {posts.map(({ title, date, slug, content }) => (
        <Card key={slug} title={title} date={date} slug={slug}>
          {content.html}
        </Card>
      ))}
    </Container>
  );
};

export default PostWall;
