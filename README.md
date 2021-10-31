## Bahasa Planet Translation

**kamu** menjadi **kagamugu**, useless translation.

> Wrapped to make it look clean.

```bash
npm i bahasa-planet
```

ES6

```js
import { bahasa_planet } from "bahasa-planet";

let alias = 'g' // u can choose from a to z character
let text = 'kamu mau kemana?'
let result = bahasa_planet(text, alias)
console.log(result) // kagamugu magaugu kegemaganaga?
```

CJS

```js
const { bahasa_planet } = require("bahasa-planet");

let alias = 'g' // u can choose from a to z character
let text = 'kamu mau kemana?'
let result = bahasa_planet(text, alias)
console.log(result) // kagamugu magaugu kegemaganaga?
```

Demo: [Click Here](https://ibnusyawall.github.io/konversi-bahasa-planet)

This library using [ISC License](./LICENSE.md)
