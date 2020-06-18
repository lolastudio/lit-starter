# lit-starter
lit-html and lit-element starter without bundler

### without bundler?
yes, using js native module system and [snowpack](https://www.snowpack.dev/#what-is-snowpack%3F) web_modules folder

### dev dependencies
- [@open-wc/es-dev-server](https://github.com/open-wc/open-wc/tree/master/packages/es-dev-server) for live reload server
- [conjurate](https://github.com/filipelinhares/conjurate) for templated components

### build
- this starter doesn't have build mode so you can use any bundler you need and prefer
- by default, this starter is served as static site without bundler

### get started
use this repository as template

or


```bash
git clone https://github.com/roquef/lit-starter.git myProject
cd myProject
```

then

```bash
npm i
npm run dev
```

### generating new components
```bash
npm run conjurate my-component
```

### browser support
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#Browser_support
