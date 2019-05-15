
const pbjs = require("protobufjs/cli/pbjs");

module.exports = function (source) {
  var callback = this.async();
  pbjs.main([ "--target", "json-module", '-w', 'commonjs', this.resourcePath ], function(err, output) {
    if (err)
      throw err;
    callback(null, output)
  });
};