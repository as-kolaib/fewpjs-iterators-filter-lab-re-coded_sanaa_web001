// Code your solution here

function findMatching (arr , string) {
  return arr.filter(function (item) {
    return item.toLowerCase() === item.toLowerCase();
  });
}

function fuzzyMatch (arr, string) {
  let len = string.length;
  return arr.filter(function (item) {
    return  item.substring(0, len) === string;
  });
}

function matchName (list, string) {
  return list.filter(function (item) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}