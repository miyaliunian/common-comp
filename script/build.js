/*
 * @Author: 米亚流年 miyaliunian@gmail.com
 * @Date: 2024-01-15 10:14:47
 * @LastEditors: 米亚流年 miyaliunian@gmail.com
 * @LastEditTime: 2024-01-17 18:17:12
 * @FilePath: /common-comp/script/build.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const shell = require('shelljs');
const path = require('path');
let scripts = []


shell.ls('packages').forEach(file => {
  if (file === 'index.js') {
//     scripts.unshift({
//       type: 'index',
//       script: 'vue-cli-service build --target lib --name index --dest dist packages/index.js',
//     })
  } else {
    const config = require(path.resolve(`packages/${file}/package.json`));
    scripts.push({
      type: 'package',
      filename: file,
      script: `vue-cli-service build --target lib packages/${file}/index.js --name common-remote-${file}.${config.version} --dest common-remote-${file}`
    })
  }
})
scripts.forEach(config => {
  shell.exec(config.script);
});