const pbjs = require("protobufjs/cli/pbjs");
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const protoPath = 'src/**/*.proto';
const protos = glob.sync(protoPath);

pbjs.main([ "--target", "json-module", '-w', 'commonjs', ...protos], function(err, output) {
  if (err)
    throw err;
  fs.writeFileSync(path.resolve(__dirname, '../src/protoRoot.js'), '/* eslint-disable */\n' + output);
});