# image element
![tests](https://github.com/bicycle-codes/image-element/actions/workflows/nodejs.yml/badge.svg)
[![types](https://img.shields.io/npm/types/@bicycle-codes/image-element?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

-----------------------------------------

Use the [blur-up technique](https://css-tricks.com/the-blur-up-technique-for-loading-background-images/) with images, as a webcomponent.

This depends on having some inline base64 code for a small, blurry image. See [@bicycle-codes/stringify](https://github.com/bicycle-codes/stringify) for help with that.

## install

```sh
npm i -S @bicycle-codes/image-element
```

## use
Import this module, then use the tag in your HTML.

### bundler
Just import the module, and it will patch the global `customElements` object.
Also, link to the styles.

```js
import '@bicycle-codes/image-element'
import '@bicycle-codes/image-element/style.css'
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
This package includes minified CSS and JS files, suitable for linking to directly from your HTML.

First make sure the file is accessible by your web server:

```sh
cp ./node_modules/@bicycle-codes/image-element/dist/index.min.js ./public/image-element.js
cp ./node_modules/@bicycle-codes/image-element/dist/style.min.css ./public
```

Then link to it in your HTML:

```html
<head>
    <!-- include the style -->
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

## develop

Start a local dev server:

```sh
npm start
```

## see also

* [industrialempathy.com/image-optimizations](https://www.industrialempathy.com/posts/image-optimizations/)
* [bholmes.dev/picture-perfect-image-optimization/](https://bholmes.dev/blog/picture-perfect-image-optimization/)
* [css-tricks -- The “Blur Up” Technique for Loading Background Images](https://css-tricks.com/the-blur-up-technique-for-loading-background-images/)
* [css-tricks -- the `sizes` attribute](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/#aa-also-sizes)
**tldr;** = "It’s actually not that bad to just leave it off. In that case, it assumes sizes='100vw'."
* [cloudfour.com -- Don’t use <picture> (most of the time)](https://cloudfour.com/thinks/dont-use-picture-most-of-the-time/)
* [css-tricks -- Responsive Images: If you’re just changing resolutions, use srcset.](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/)
