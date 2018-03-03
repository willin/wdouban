const axios = require('axios');

const validTypes = ['book', 'movie', 'music'];
const validStatus = ['mark', 'doing', 'done', 'attend'];
// eslint-disable-next-line no-bitwise
const valid = (input, v) => (~v.indexOf(input) ? input : v[0]);
const filter = ({
  data: {
    start, count, total, interests
  }
}) => {
  const pages = Math.ceil(total / count);
  const page = parseInt(start / count + 1, 10);
  return {
    status: 1,
    total,
    page,
    pages,
    size: count,
    data: interests
  };
};

const catcher = err => ({
  status: 0,
  error: err.message
});

module.exports = ({
  username,
  type = 'book',
  status = 'mark',
  page = 1,
  size = 50
}) => {
  let count = size > 50 ? 50 : size;
  count = size < 0 ? 0 : count;
  return axios.get(`https://frodo.douban.com/api/v2/user/${username}/interests`, {
    params: {
      apikey: '0dad551ec0f84ed02907ff5c42e8ec70',
      type: valid(type, validTypes),
      status: valid(status, validStatus),
      count,
      start: (page - 1) * count
    },
    headers: {
      'User-Agent': 'api-client/1 com.douban.frodo/5.20.1(126) Android/22 product/ido vendor/Xiaomi model/Redmi 3  rom/miui6  network/wifi'
    },
    timeout: 5000
  }).then(filter).catch(catcher);
};
