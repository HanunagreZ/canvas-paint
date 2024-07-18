Array.prototype.myMap = function (callback, arg) {
  if (this === null || this === window) {
    throw TypeError('myMap called on null or undefined');
  }
  if (typeof callback !== 'function') {
    throw TypeError(`{callback} is not a function`);
  }
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray[i] = callback.call(arg, this[i], i, this);
  }
  return newArray;
};
