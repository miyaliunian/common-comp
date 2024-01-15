const shell = require('shelljs');
const path = require('path');
let scripts = []


shell.ls('packages').forEach(file => {
  if (file === 'index.js') {
    scripts.unshift({
      type: 'index',
      script: 'vue-cli-service build --target lib --name index --dest dist packages/index.js',
    })
  } else {
    const config = require(path.resolve(`packages/${file}/package.json`));
    scripts.push({
      type: 'package',
      filename: file,
      script: `vue-cli-service build --target lib --name ${file}.${config.version} --dest dist/${file} packages/${file}/index.js`,
    })
  }
})
scripts.forEach(config => {
  shell.exec(config.script);
})