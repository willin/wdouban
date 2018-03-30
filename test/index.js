const wdouban = require('../src');

wdouban({
  username: 'willinwang'
}).then((data) => {
  console.log(JSON.stringify(data, null, 2));
});
