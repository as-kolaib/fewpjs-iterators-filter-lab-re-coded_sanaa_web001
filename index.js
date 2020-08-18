// Code your solution here

function findMatching (arr , string) {
  return arr.filter(function (item) {
    return item.toLowerCase() === item.toLowerCase();
  });
}

function fuzzyMatch (arr, string) {
  let len = string.length;
  return arr.filter(function (item) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}