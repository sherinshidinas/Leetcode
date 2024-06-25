const obj = {
  a: {
    a1: 1,
    a2: 2,
    a3: 3,
  },
  b: {
    b1: 3,
    b2: 4,
    b3: 5,
    z: {
      z1: 0,
      z2: -1,
    },
  },
  c: 5,
  d: 6,
};

let resultObj = {};
const flattenObj = (obj) => {
  let primaryKeyObj = {};
  for (let primaryKey in obj) {
    primaryKeyObj = obj[primaryKey];

    if (typeof primaryKeyObj === "object") {
      flattenObj(primaryKeyObj);
    } else {
      resultObj[primaryKey] = obj[primaryKey];
    }
  }
  return resultObj;
};

console.log(flattenObj(obj));
