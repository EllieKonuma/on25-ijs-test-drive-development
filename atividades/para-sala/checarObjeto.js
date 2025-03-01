function allKeys(obj) {
  if (!isObject(obj)) {
    return [];
  }

  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}

function isObject(obj) {
  const type = typeof obj;
  return type === "function" || (type === "object" && !!obj);
}

module.exports = { allKeys, isObject };
