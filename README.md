# jcmp-test-env
provides a jc3:mp server test environment using the jcmp-stubs package.

## Installation
Install this package as a `devDependency` to your jc3:mp package:

```
npm install --save-dev jcmp-test-env
```

## Usage
When writing your tests, just import this to the header file:

```javascript
const { TestEnvironment } = require('jcmp-test-env');
new TestEnvironment('server').initializeEnvironment((k, v) => global[k] = v);
```

you can then run your tests like you normally do, i.e. with mocha. you could simply require your whole `main.js` file from your package.