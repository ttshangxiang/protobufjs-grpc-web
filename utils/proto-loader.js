
const pbjs = require("protobufjs/cli/pbjs");

exports.default = function (source) {
  var callback = this.async();
  pbjs.main([ "--target", "json-module", this.resourcePath ], function(err, output) {
    if (err)
      throw err;
    callback(null, output)
  });
};