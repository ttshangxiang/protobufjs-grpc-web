/* eslint-disable */
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  Greeter: {
    methods: {
      SayHello: {
        requestType: "HelloRequest",
        responseType: "HelloReply"
      },
      TestNested: {
        requestType: "HelloRequest",
        responseType: "Nested"
      }
    }
  },
  HelloRequest: {
    fields: {
      name: {
        type: "string",
        id: 1
      }
    }
  },
  HelloReply: {
    fields: {
      message: {
        type: "string",
        id: 1
      }
    }
  },
  sub: {
    nested: {
      Nested: {
        fields: {
          nnn: {
            type: "google.protobuf.Any",
            id: 1
          }
        }
      }
    }
  },
  google: {
    nested: {
      protobuf: {
        nested: {
          Any: {
            fields: {
              type_url: {
                type: "string",
                id: 1
              },
              value: {
                type: "bytes",
                id: 2
              }
            }
          }
        }
      }
    }
  }
});

module.exports = $root;
