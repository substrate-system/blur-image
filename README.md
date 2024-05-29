# image element
![tests](https://github.com/bicycle-codes/image-element/actions/workflows/nodejs.yml/badge.svg)
[![types](https://img.shields.io/npm/types/@bicycle-codes/image-element?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

-----------------------------------------

An image element that uses the [blur-up technique](https://www.industrialempathy.com/posts/image-optimizations/#blurry-placeholder).

This depends on having some inline base64 code for a small, blurry image. See [@bicycle-codes/base64](https://github.com/bicycle-codes/img-stringify) for help with that.

## install

```sh
npm i -S @bicycle-codes/image-element
```

## use
Import this module, then use the tag in your HTML.

### bundler
Just import the module, and it will patch the global `customElements` object.

```js
import '@bicycle-codes/image-element'
import '@bicycle-codes/image-element/index.css'
```

Then use the tag in your HTML:

```html
<body>
    <image-element
        src="/100.jpg"
        placeholder="data:image/jpeg;base64,/9j/2wBDAAYEBQY..."
    ></image-element>
</body>
```

### HTML
This package includes a minified file, suitable for linking to directly from your HTML.

First make sure the file is accessible by your web server:

```sh
cp ./node_modules/@bicycle-codes/image-element/dist/index.min.js ./public/image-element.js
cp ./node_modules/@bicycle-codes/image-element/dist/style.min.css ./public
```

Then link to it in your HTML:

```html
<head>
    <!-- include the style too -->
    <link rel="stylesheet" href="/style.min.css">
</head>

<body>
    <image-element
        src="/100.jpg"
        placeholder="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQY..."
    ></image-element>

    <!-- include the JS -->
    <script src="./image-element.ts"></script>
</body>
```
