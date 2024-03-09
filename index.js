function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (let key in collection) {
      callback(collection[key]);
    }
  }
  return collection;
}

function myMap(collection, callback) {
  const newArray = [];
  myEach(collection, function(item) {
    newArray.push(callback(item));
  });
  return newArray;
}

function myReduce(collection, callback, acc) {
  if (Array.isArray(collection)) {
    let index = 0;
    if (!acc) {
      acc = collection[0];
      index = 1;
    }
    for (let i = index; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
  } else {
    const values = Object.values(collection);
    let index = 0;
    if (!acc) {
      acc = values[0];
      index = 1;
    }
    for (let i = index; i < values.length; i++) {
      acc = callback(acc, values[i], collection);
    }
  }
  return acc;
}


function myFind(collection, predicate) {
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      return collection[i];
    }
  }
}

function myFilter(collection, predicate) {
  const newArray = [];
  myEach(collection, function(item) {
    if (predicate(item)) {
      newArray.push(item);
    }
  });
  return newArray;
}

function mySize(collection) {
  let count = 0;
  myEach(collection, function() {
    count++;
  });
  return count;
}

function myFirst(array, n) {
  if (n) {
    return array.slice(0, n);
  } else {
    return array[0];
  }
}

function myLast(array, n) {
  if (n) {
    return array.slice(-n);
  } else {
    return array[array.length - 1];
  }
}

function mySortBy(array, callback) {
  return array.slice().sort(function(a, b) {
    return callback(a) - callback(b);
  });
}

function myFlatten(array, shallow, newArr = []) {
  if (!Array.isArray(array)) {
    newArr.push(array);
  } else if (shallow) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        newArr.push(...array[i]);
      } else {
        newArr.push(array[i]);
      }
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      myFlatten(array[i], false, newArr);
    }
  }
  return newArr;
}

function myKeys(object) {
  const keys = [];
  for (let key in object) {
    keys.push(key);
  }
  return keys;
}

function myValues(object) {
  const values = [];
  for (let key in object) {
    values.push(object[key]);
  }
  return values;
}
