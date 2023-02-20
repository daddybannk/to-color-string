# to-color-string

Convert text to hex color codes with JS `String.prototype` method.

## Try it

https://daddybannk.github.io/to-color-string

## Installation

### In a browser

```
<script src="to-color-string/dist/tocolorstring.js"></script>
```

### Using npm

```
npm i to-color-string
```

## Usage

### String.toColorString()

```
import "to-color-string";

// case: empty string
console.log("".toColorString()); 
// "#d41d8c"

// case: single character
console.log("h".toColorString()); 
// "#2510c3"

// case: sentence
console.log(`Hello, is it me you're looking for?`.toColorString()); 
// "#b1f23d"
```

## Test

```
npm i -D
npm run test
```

## License

This project is licensed under the terms of the MIT license.
