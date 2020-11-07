// Takes an array of objects and returns an object.
// Object keys are initial object.id, value is the initial object

export const arrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};
