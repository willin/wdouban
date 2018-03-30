# wdouban
DouBan SDK for node.js

[![npm](https://img.shields.io/npm/v/wdouban.svg?style=plastic)](https://npmjs.org/package/wdouban) [![npm](https://img.shields.io/npm/dm/wdouban.svg?style=plastic)](https://npmjs.org/package/wdouban) [![npm](https://img.shields.io/npm/dt/wdouban.svg?style=plastic)](https://npmjs.org/package/wdouban)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [wdouban](#wdouban)
  - [安装](#%E5%AE%89%E8%A3%85)
  - [使用说明](#%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E)
    - [参数](#%E5%8F%82%E6%95%B0)
      - [username](#username)
      - [type](#type)
      - [status](#status)
    - [响应](#%E5%93%8D%E5%BA%94)
  - [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 安装

```bash
npm i --save wdouban
# or
yarn add wdouban
```

## 使用说明

### 参数

#### username

用户名，必须

#### type

默认值 `book` ，可选：

- `book` 图书
- `movie` 电影
- `music` 音乐

#### status

默认值 `mark`，可选：

- `mark` 想看
- `doing` 在看
- `done` 看过
- `attend` 参与

示例：

```js
const wdouban = require('wdouban');

wdouban({
  username: 'willinwang',
  type: 'book',
  status: 'mark',
  page: 1,
  size: 50
}).then((data) => {
  console.log(data);
});
```

### 响应

示例：

```js
{
  "status": 1,
  "total": 2,
  "page": 1,
  "pages": 1,
  "size": 50,
  "data": [
    {
      "comment": "",
      "rating": null,
      "sharing_text": "https://www.douban.com/doubanapp/dispatch?uri=/book/27153485/ 来自@豆瓣App",
      "tags": [
        "生活",
        "文学"
      ],
      "platforms": [],
      "create_time": "2018-02-28 16:52:21",
      "status": "mark",
      "id": 1333178450,
      "subject": {
        "rating": {
          "count": 221,
          "max": 10,
          "star_count": 4.5,
          "value": 9.1
        },
        "sharing_url": "https://www.douban.com/doubanapp/dispatch?uri=/book/27153485/",
        "pubdate": [
          "2017-10"
        ],
        "author": [
          "李青菜"
        ],
        "url": "https://book.douban.com/subject/27153485/",
        "pic": {
          "large": "https://qnmob3.doubanio.com/lpic/s29558324.jpg?imageView2/2/q/80/w/600/h/3000/format/webp",
          "normal": "https://qnmob3.doubanio.com/lpic/s29558324.jpg?imageView2/2/q/80/w/200/h/300/format/webp/sharpen/1"
        },
        "uri": "douban://douban.com/book/27153485",
        "is_released": true,
        "card_subtitle": "李青菜 / 2017 / 中信出版社",
        "has_ebook": false,
        "subtype": "book",
        "press": [
          "中信出版社"
        ],
        "title": "当喵星人有了门牌号",
        "type": "book",
        "id": "27153485",
        "null_rating_reason": ""
      }
    },
    {
      "comment": "",
      "rating": null,
      "sharing_text": "https://www.douban.com/doubanapp/dispatch?uri=/book/27073501/ 来自@豆瓣App",
      "tags": [
        "文学"
      ],
      "platforms": [],
      "create_time": "2018-02-28 16:51:17",
      "status": "mark",
      "id": 1333177806,
      "subject": {
        "rating": {
          "count": 316,
          "max": 10,
          "star_count": 4.5,
          "value": 9
        },
        "sharing_url": "https://www.douban.com/doubanapp/dispatch?uri=/book/27073501/",
        "pubdate": [
          "2017-8-1"
        ],
        "author": [
          "[英] 詹姆斯·伍德"
        ],
        "url": "https://book.douban.com/subject/27073501/",
        "pic": {
          "large": "https://qnmob3.doubanio.com/lpic/s29479379.jpg?imageView2/2/q/80/w/600/h/3000/format/webp",
          "normal": "https://qnmob3.doubanio.com/lpic/s29479379.jpg?imageView2/2/q/80/w/200/h/300/format/webp/sharpen/1"
        },
        "uri": "douban://douban.com/book/27073501",
        "is_released": true,
        "card_subtitle": "[英] 詹姆斯·伍德 / 2017 / 河南大学出版社",
        "has_ebook": false,
        "subtype": "book",
        "press": [
          "河南大学出版社"
        ],
        "title": "最接近生活的事物",
        "type": "book",
        "id": "27073501",
        "null_rating_reason": ""
      }
    }
  ]
}
```

## License

Apache 2.0

通过支付宝捐赠：

![qr](https://cloud.githubusercontent.com/assets/1890238/15489630/fccbb9cc-2193-11e6-9fed-b93c59d6ef37.png)
