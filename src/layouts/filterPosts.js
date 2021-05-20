import React from 'react';
import PostWall from '../components/PostWall';
import moment from 'moment';
moment().format('DD-MM-YYYY');

const FilterPosts = ({ pageContext }) => {
  const data = pageContext.data.data.gcms.wiersze.filter((post) => {
    let postDate = moment(post.date);
    let filterDate = moment(pageContext.date);
    return postDate.month() === filterDate.month() && postDate.year() === filterDate.year();
  });
  return <PostWall data={data} filter={pageContext.filter} />;
};

export default FilterPosts;
