const axios = require('axios');

const validTypes = ['book', 'movie', 'music'];
const validStatus = ['mark', 'doing', 'done', 'attend'];
// eslint-disable-next-line no-bitwise
const valid = (input, v) => (~v.indexOf(input) ? input : v[0]);

module.exports = ({
  username,
  type = 'book',
  status = 'mark',
  page = 1,
  size = 1
}) => {
  let count = size > 100 ? 100 : size;
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
  });
};
