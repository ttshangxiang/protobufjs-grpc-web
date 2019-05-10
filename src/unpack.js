const typeCache = {};

function unpack (o, roots, reg) {
  reg = reg ? reg : /^type\.googleapis\.com\//;
  const typeUrl = o.typeUrl || o.type_url;
  if (reg.test(typeUrl)) {
    const typestr = typeUrl.split('/')[1];
    let type = typeCache[typestr];
    if (!type) {
      roots.forEach(item => {
        type = item.lookupType(typestr);
      });
    }
    if (!type) {
      console.error('包含“'+ typestr + '”的protojs文件未加载！')
      return o;
    }
    return type.decode(o.value);
  }
  return o;
}

function unpackAll (o, roots, reg) {
  for (const [key, value] of Object.entries(o)) {
    if (Array.isArray(value)) {
      o[key] = value.map(item => unpack(item, roots, reg));
    } else if (value && (value.typeUrl || value.type_url)) {
      o[key] = unpack(value, roots, reg);
    }
  }
  return o;
}

exports.default = unpackAll;

module.exports = {
  unpack,
  unpackAll
};