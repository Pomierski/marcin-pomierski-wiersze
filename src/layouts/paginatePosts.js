import React from 'react';
import { graphql } from 'gatsby';
import PostWall from '../components/PostWall';
import Pagination from '../components/Pagination';

export const query = graphql`
  query MyQueryTwo($limit: Int, $skip: Int) {
    gcms {
      wiersze(first: $limit, skip: $skip, orderBy: date_DESC) {
        slug
        title
        date
        content {
          html
        }
      }
    }
  }
`;

const PaginatePosts = ({ data, pageContext }) => (
  <>
    <Pagination
      prevLink={pageContext.previousPage.path}
      nextLink={pageContext.nextPage.path}
      currentPage={pageContext.currentPage}
    />
    <PostWall data={data} paddingTop={'0'} />
    <Pagination
      bottom
      prevLink={pageContext.previousPage.path}
      nextLink={pageContext.nextPage.path}
      currentPage={pageContext.currentPage}
    />
  </>
);

export default PaginatePosts;
