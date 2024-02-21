
// A collection of utility functions for array manipulation.

// Calculates the sum of array elements.
const sum = (array) => array.reduce((acc, curr) => acc + curr, 0);

// Returns unique elements from an array.
const unique = (array) => [...new Set(array)];

// Calculates the average of array elements.
const average = (array) => sum(array) / array.length;

// Finds the maximum element in an array.
const max = (array) => Math.max(...array);

// Finds the minimum element in an array.
const min = (array) => Math.min(...array);

// Counts occurrences of a value in an array.
const countOccurrences = (array, value) =>
  array.reduce((acc, curr) => (curr === value ? acc + 1 : acc), 0);

// Removes falsy values from an array (false, null, 0, "", undefined, NaN).
const compact = (array) => array.filter(Boolean);

// Flattens a nested array to a single level.
const flatten = (array) =>
  array.reduce(
    (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
    []
  );

// Groups elements of an array by a given property.
const groupBy = (array, property) =>
  array.reduce((acc, curr) => {
    (acc[curr[property]] = acc[curr[property]] || []).push(curr);
    return acc;
  }, {});

// Partitions an array based on a predicate into two arrays.
const partition = (array, predicate) =>
  array.reduce(
    ([pass, fail], elem) =>
      predicate(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]],
    [[], []]
  );

module.exports = {
  sum,
  unique,
  average,
  max,
  min,
  countOccurrences,
  compact,
  flatten,
  groupBy,
  partition,
};
