# node-find-dividers
> Find all dividers for a given number.

## Usage
```javascript
const dividers = require('find-dividers');

let count = dividers(100);
console.log(count); // => 9
```

## API
### `function dividers(n, excludeOne = true)`
> Finds all dividers for a given number.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ---- |
| n | number | The number to find dividers for. |
| excludeOne | boolean | Whether to exclude the number 1. |

#### Returns
An array with all found dividers.

## License
[MIT](LICENSE)
