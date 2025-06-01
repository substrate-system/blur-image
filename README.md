# blur image

[![tests](https://img.shields.io/github/actions/workflow/status/substrate-system/blur-image/nodejs.yml?style=flat-square)](https://github.com/substrate-system/blur-image/actions/workflows/nodejs.yml)
[![types](https://img.shields.io/npm/types/@substrate-system/blur-image?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![install size](https://flat.badgen.net/packagephobia/install/@substrate-system/blur-image?cache-control=no-cache)](https://packagephobia.com/result?p=@substrate-system/blur-image)
[![gzip size](https://img.shields.io/bundlephobia/minzip/@substrate-system/blur-image?style=flat-square)](https://bundlephobia.com/package/@substrate-sustem/blur-image)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![Common Changelog](https://nichoth.github.io/badge/common-changelog.svg)](./CHANGELOG.md)
[![license](https://img.shields.io/badge/license-Big_Time-blue?style=flat-square)](LICENSE)

-----------------------------------------

Use the [blur-up technique](https://css-tricks.com/the-blur-up-technique-for-loading-background-images/)
with images, as a web component.

This depends on having some inline base64 code for a small, blurry image.
See [@bicycle-codes/stringify](https://github.com/bicycle-codes/stringify) for
help with that.

<details><summary><h2>Contents</h2></summary>

<!-- toc -->

- [install](#install)
- [demonstration](#demonstration)
- [use](#use)
  * [bundler](#bundler)
  * [HTML](#html)
- [develop](#develop)
- [see also](#see-also)

<!-- tocstop -->

</details>

## install

```sh
npm i -S @susbtrate-system/blur-image
```

## demonstration

See a demonstration here: [substrate-system.github.io/blur-image](https://substrate-system.github.io/blur-image/).

> [!TIP]
> Throttle the internet speed with the dev tools.

<img src="https://github.com/substrate-system/blur-image/raw/main/before.png" width="200" /> <img src="https://github.com/substrate-system/blur-image/raw/main/after.png" width="200" />

## use
Import this module, then use the tag in your HTML. It should work with all
[contemporary image attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#how_do_you_create_responsive_images).

### bundler
Just import the module; it will call the global `customElements.define`
function. Also, import the styles.

```js
import '@bicycle-codes/blur-image'
import '@bicycle-codes/blur-image/css'
```

Then use the tag in your HTML:

```html
<body>
    <blur-image
        src="/100.jpg"
        placeholder="data:image/jpeg;base64,/9j/2wBDAAYEBQY..."
    ></blur-image>
</body>
```

### HTML
This package includes minified CSS and JS files, suitable for linking to directly from your HTML.

First make sure the files are accessible by your web server:

```sh
cp ./node_modules/@bicycle-codes/blur-image/dist/index.min.js ./public/blur-image.js
cp ./node_modules/@bicycle-codes/blur-image/dist/style.min.css ./public/blur-image.css
```

Then link to it in your HTML:

```html
<head>
    <!-- include the style -->
    <link rel="stylesheet" href="/blur-image.css">
</head>

<body>
    <blur-image
        src="/100.jpg"
        placeholder="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQY..."
    ></blur-image>

    <!-- include the JS -->
    <script src="./blur-image.js"></script>
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
**tldr;** "It’s actually not that bad to just leave it off. In that case, it assumes sizes='100vw'."
* [cloudfour.com -- Don’t use `<picture>` (most of the time)](https://cloudfour.com/thinks/dont-use-picture-most-of-the-time/)
* [css-tricks -- Responsive Images: If you’re just changing resolutions, use srcset.](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/)
