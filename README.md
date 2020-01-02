# lit-starter
lit-html and lit-element starter without bundler

### without bundler?
yes, using js native module system and [pika](https://www.pika.dev/about/) web_modules folder

### dependencies
- [@pika/web](https://github.com/pikapkg/web) for web_modules
- [open-wc/es-dev-server](https://github.com/open-wc/open-wc/tree/master/packages/es-dev-server) for live reload server
- [conjurate](https://github.com/filipelinhares/conjurate) for templated components

### build
- this starter doesn't have build mode so you can use any bundler you need and prefer
- by default, this starter is served as static site without bundler

### get started
```bash
git clone https://github.com/roquef/lit-starter.git myProject
cd myProject
npm i
npm run dev
```

### generating new components
```bash
npm run conjurate:component my-component
```

### browser support
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#Browser_support
