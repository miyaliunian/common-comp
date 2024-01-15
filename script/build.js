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
    console.log("config",config,'file',file)
    console.log("entryPath",`packages/${file}/index.js`)
    scripts.push({
      type: 'package',
      filename: file,
      script: `vue-cli-service build --target lib packages/${file}/index.js --name common-remote-${file} --dest common-remote-${file}`
    })
  }
})
scripts.forEach(config => {
  shell.exec(config.script);
});