# Array Utilities Package

This package provides a collection of utility functions for array manipulation, including operations such as calculating the sum, finding unique elements, calculating the average, and more sophisticated operations like flattening nested arrays or performing a binary search on a sorted array.

## Installation

To use the Array Utilities package in your project, run the following command:

`npm i arrays-utilities`

## Usage

After installing, you can import the entire collection of utilities or individual functions as needed:

```javascript
// Import the entire utilities collection
const arrayUtils = require('your-package-name');

// Or import individual functions
const { sum, unique, binarySearch } = require('your-package-name');
```
## Examples
Below are some examples demonstrating how to use these utilities:

##### Calculate the sum of an array:
```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(arrayUtils.sum(numbers)); // Output: 15
```

##### Find unique elements in an array:
```javascript
const items = [1, 2, 2, 3, 4, 4, 5];
console.log(arrayUtils.unique(items)); // Output: [1, 2, 3, 4, 5]
```
##### Perform a binary search on a sorted array:
```javascript
const sortedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 4;
console.log(arrayUtils.binarySearch(sortedNumbers, target)); // Output: 3

```
## Available Functions
- **sum(array):** Calculates the sum of array elements.
- **unique(array):** Returns unique elements from an array.
- **average(array):** Calculates the average of array elements.
- **max(array):** Finds the maximum element in an array.
- **min(array):** Finds the minimum element in an array.
- **countOccurrences(array, value):** Counts occurrences of a value in an array.
- **compact(array):** Removes falsy values from an array.
- **flatten(array):** Flattens a nested array to a single level.
- **groupBy(array, property):** Groups elements of an array by a given property.
- **partition(array, predicate):** Partitions an array based on a predicate into two arrays.
- **binarySearch(array, value):** Performs a binary search on a sorted array to find the index of a given value.