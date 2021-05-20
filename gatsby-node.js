const path = require(`path`);
const moment = require(`moment`);

const polishMonthsNames = [
  'styczen',
  'luty',
  'marzec',
  'kwiecien',
  'maj',
  'czerwiec',
  'lipiec',
  'sierpien',
  'wrzesien',
  'pazdziernik',
  'listopad',
  'grudzien',
];

const getPathFromDate = (date) => {
  moment().format('DD-MM-YYYY');
  date = moment(date);
  return `${date.year()}/${polishMonthsNames[date.month()]}`;
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const singlePost = path.resolve(`src/layouts/singlePost.js`);
  const filterPosts = path.resolve(`src/layouts/filterPosts.js`);
  const paginatePosts = path.resolve(`src/layouts/paginatePosts.js`);
  const result = await graphql(
    `
      query MyQuery {
        gcms {
          wiersze(orderBy: date_DESC) {
            title
            date
            slug
            content {
              html
            }
          }
        }
      }
    `,
    { limit: 1000 },
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.gcms.wiersze;
    const itemsPerPage = 6;
    const paginationPageAmount = Math.ceil(posts.length / itemsPerPage);

    Array.from({ length: paginationPageAmount }).forEach((_, i) => {
      let pagePath = i + 1;
      createPage({
        path: i == 0 ? `/` : `/${pagePath}`,
        component: paginatePosts,
        context: {
          nextPage: {
            path: i === paginationPageAmount - 1 ? `/${pagePath}` : `/${pagePath + 1}`,
            disabled: i === paginationPageAmount - 1 ? true : false,
          },
          previousPage: {
            path: i === 1 || i === 0 ? `/` : `/${pagePath - 1}`,
            disabled: i === 0 ? true : false,
          },
          currentPage: `${pagePath} z ${paginationPageAmount}`,
          skip: i * itemsPerPage,
          limit: itemsPerPage,
        },
      });
    });

    result.data.gcms.wiersze.forEach((post) => {
      createPage({
        path: `/wiersze/${post.slug}`,
        component: singlePost,
        context: {
          slug: post.slug,
        },
      });
    });

    result.data.gcms.wiersze.forEach((post) => {
      createPage({
        path: `/wiersze/${getPathFromDate(post.date)}`,
        component: filterPosts,
        context: {
          date: post.date,
          filter: true,
          data: result,
        },
      });
    });
  });
};
