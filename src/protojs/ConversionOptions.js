
export default {
  enums: String,  // enums as string names
  // longs: String,  // longs as strings (requires long.js)
  bytes: String,  // bytes as base64 encoded strings
  defaults: true, // includes default values
  arrays: true,   // populates empty arrays (repeated fields) even if defaults=false
  objects: true,  // populates empty objects (map fields) even if defaults=false
  oneofs: true    // includes virtual oneof fields set to the present field's name
}