# zipfile.js

Unzip files from .zip archives in JavaScript.

[![Browser support](https://ci.testling.com/michaelrhodes/zipfile.js.png)](https://ci.testling.com/michaelrhodes/zipfile.js)


## Install
```sh
 $ npm install michaelrhodes/zipfile.js
```

## Usage
Pass the .zip file to the constructor as an ArrayBuffer. read() will return an Uint8Array of the uncompressed data for each file. I didn't add an API to list files yet because my use case didn't need it. Patches welcome!

```js
var ZipFile = require('zipfile.js');
var zip = new ZipFile(arrayBuffer);
var data = zip.read("file.txt");
```
